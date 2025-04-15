'use client';
import React, { useEffect, useState } from 'react';
import { Button, Spinner, Textarea } from '@nextui-org/react';
import { getCookie, setCookie } from 'cookies-next'; // Importar cookies
import { siteConfig } from '@/src/configs/config';

// Nota: Este componente Chatbot se utiliza en la web del currículum de
//       Luis Ángel Fernández Terrón, Desarrollador Full Stack.

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [isRateLimitReached, setIsRateLimitReached] = useState(false); // Indica si se ha alcanzado el límite de solicitudes

  // Obtener el límite de solicitudes desde la configuración del sitio
  const rateLimit = siteConfig.chatbot.rateLimit;
  const currentTime = Date.now();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    // Si el input está vacío, no hacemos nada.
    if (message.trim() === '') return;

    // Obtener la información del límite de solicitudes de las cookies
    const savedRequestCount =
      parseInt(getCookie('requestCount') as string) || 0;
    const savedLastRequestTime =
      parseInt(getCookie('lastRequestTime') as string) || Date.now();

    // Verificar si ha pasado 1 minuto desde la última solicitud
    if (currentTime - savedLastRequestTime >= 60000) {
      // Reiniciar el contador de solicitudes después de 1 minuto
      setCookie('requestCount', '0', { maxAge: 60 });
      setCookie('lastRequestTime', currentTime.toString(), { maxAge: 60 });
    }

    // Si el contador de solicitudes supera el límite, mostrar el modal de límite alcanzado
    if (savedRequestCount >= rateLimit) {
      setIsRateLimitReached(true);
      return;
    }

    // Agregar el mensaje del usuario a la conversación (para mostrarlo en pantalla)
    const newMessages = [...messages, { text: message.trim(), sender: 'user' }];
    setMessages(newMessages);

    // Limpiamos el input inmediatamente
    setMessage('');

    // Empezamos la carga
    setLoading(true);

    // Incrementar el contador de solicitudes y actualizar la cookie
    setCookie('requestCount', (savedRequestCount + 1).toString(), {
      maxAge: 60
    });

    try {
      // Preparamos el contexto "system" + el mensaje del usuario en un solo campo `message`,
      // para que tu endpoint reciba algo así:
      // "Eres un chatbot del portafolio... \nUsuario dice: <lo que haya puesto>"

      const systemContext = `Eres un chatbot integrado en el portafolio de Luis Ángel Fernández Terrón, Desarrollador Full Stack. Responde siempre en español y, de ser relevante, menciona la experiencia de Luis: Full Stack Developer y Responsable de Desarrollo Digital. Experiencia en la creación de plataformas web, optimización, desarrollo de soluciones personalizadas y gestión de proyectos digitales. 👉🏼Creación de sitios web dinámicos y plataformas digitales avanzadas con React, Node.js, Docker, MongoDB, PHP, y WordPress, optimizando el rendimiento y la experiencia del usuario. 👉🏼Automatización de la extracción de datos en formatos XML, JSON y la implementación de scrapers de contenido para procesar grandes volúmenes de datos. 👉🏼Creación de contenido multimedia utilizando Premiere, After Effects, Photoshop e Illustrator para anuncios en Facebook, Instagram y TikTok, así como el diseño de cartelería tanto digital como impresa. 👉🏼Desarrollo de SEO con análisis de palabras clave y seguimiento de estrategias para generar tráfico orgánico. 👉🏼Manejo de herramientas como Jira y gestión de equipos bajo metodologías Agile/Scrum para asegurar la entrega puntual y de calidad en cada proyecto. 👉🏼Gestión de tiendas online con Shopify y soporte en Salesforce, optimizando los procesos de venta y la relación con los clientes. 👉🏼Experiencia adicional en atención vía teléfono, email y WhatsApp empresarial, garantizando la mejor experiencia para los clientes. 🎯 En qué puedo ayudar: 👉🏼Creación de plataformas web a medida, optimización de procesos y diseño de estrategias digitales. 👉🏼Desarrollo de sitios web con últimas tecnologías y herramientas de automatización. 👉🏼Diseño y producción de contenido multimedia para campañas publicitarias en redes sociales. 👉🏼Gestión de campañas publicitarias y análisis de rendimiento en Facebook Ads y Google Ads. Estoy siempre en busca de planes innovadores donde pueda aportar mi experiencia en desarrollo digital y quiero enfocar mi vida más hacia el lado tecnológico que el de ventas. Siempre abierto a nuevos proyectos. 🚀. Full Stack DeveloperActive Desarrollo web para aplicaciones de comercio electrónico y sitios web. Experiencia en la creación de aplicaciones web utilizando tecnologías como React, Node.js, Express, MySQL, PostgreSQL, Docker, MongoDB, Laravel, Typescript, Boostrap, Tailwind, Wordpress, entre otras. Uso de herramientas como Git y GitHub para el control de versiones y la colaboración en proyectos. Conocimiento de metodologías ágiles y trabajo en equipo. AJAX y RESTful APIs para la comunicación entre el cliente y el servidor. Product Manager | Nov. 2023 - Mar. 2024 Digital Product Manager en UNIR. Conocimiento de SEO y SEM para la optimización de motores de búsqueda y la publicidad. Creación de extensiones de chrome internas para la gestión de proyectos y la mejora de la productividad. Creación de correos personalizados corporativos.`;
      const finalMessage = `${systemContext}\n\nUsuario dice: ${message.trim()}`;

      // Hacemos la llamada a /api/fetch-chat enviando el `finalMessage`
      const res = await fetch('/api/fetch-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: finalMessage })
      });

      if (!res.ok) {
        throw new Error('Error al obtener la respuesta');
      }

      const data = await res.json();

      // Agregar la respuesta del bot
      setMessages([...newMessages, { text: data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        {
          text: 'Lo siento, algo salió mal. Por favor, inténtalo de nuevo más tarde.',
          sender: 'bot'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Agregar el mensaje inicial del bot solo una vez cuando se abre el chatbot
  useEffect(() => {
    if (!isOpen) return;

    // Al cargar la página (o recargar), se verifica el estado de las cookies
    // para el límite de solicitudes
    const savedRequestCount =
      parseInt(getCookie('requestCount') as string) || 0;
    const savedLastRequestTime =
      parseInt(getCookie('lastRequestTime') as string) || Date.now();
    const savedRateLimitStatus = savedRequestCount >= rateLimit;

    // Si el contador de solicitudes guardado es >= al límite, activar la bandera
    // de límite alcanzado
    if (savedRateLimitStatus) {
      setIsRateLimitReached(true);
    }

    // Mostrar mensaje inicial solo si no hay mensajes previos
    if (messages.length === 0) {
      const initialMessage = {
        text: 'Hola, soy el chatbot de la web de Luis Ángel Fernández Terrón. ¿En qué puedo ayudarte hoy?',
        sender: 'bot'
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length, rateLimit]);

  return (
    <>
      {/* Botón del Chatbot */}
      <div
        className={`fixed bottom-16 right-6 z-50 p-4 bg-black dark:bg-white dark:text-white text-black 
          rounded-full shadow-lg cursor-pointer transition-all duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        onClick={toggleChat}
      >
        <span className="text-2xl">{isOpen ? '❌' : '🚀'}</span>
      </div>

      {/* Ventana del Chatbot */}
      {isOpen && (
        <div
          className="fixed bottom-36 right-6 sm:right-8 w-80 sm:w-[300px] bg-white dark:bg-gray-800
          p-4 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600
          flex flex-col h-[500px] sm:h-[400px]"
        >
          {/* Encabezado del Chatbot */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Chatbot
            </h3>
          </div>

          {/* Mensajes */}
          <div className="mt-4 flex-grow overflow-y-auto max-h-[60%] sm:max-h-[70%] pr-2 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                } mb-2`}
              >
                <div
                  className={`p-2 max-w-[70%] rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-black dark:bg-gray-600 dark:text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Sección de entrada */}
          <div className="mt-2 flex flex-col items-center justify-center gap-2">
            <Textarea
              className="w-[80%] mx-auto p-2 rounded-md text-sm dark:text-white dark:caret-white 
                caret-black text-black"
              placeholder="Escribe un mensaje..."
              value={message}
              onChange={(e) =>
                handleMessageChange(
                  e as unknown as React.ChangeEvent<HTMLTextAreaElement>
                )
              }
            />
            <Button
              className="w-[80%] mx-auto bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 
                dark:bg-blue-600 dark:hover:bg-blue-700"
              onPress={handleSendMessage}
              disabled={loading || isRateLimitReached}
            >
              {loading ? <Spinner color="default" size={'sm'} /> : 'Enviar'}
            </Button>
          </div>
        </div>
      )}

      {/* Modal de Límite de Solicitudes */}
      {isRateLimitReached && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-bold text-lg text-foreground dark:text-white mb-4">
              ¡Límite de solicitudes alcanzado! 😬
            </h3>
            <p className="text-base text-foreground dark:text-gray-400">
              Has alcanzado el límite de 10 mensajes por minuto. ¡Por favor,
              espera antes de enviar otra solicitud! ⏳
            </p>
            <Button
              onPress={() => setIsRateLimitReached(false)}
              className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black 
                hover:bg-gray-800 dark:hover:bg-gray-200 transition ease"
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

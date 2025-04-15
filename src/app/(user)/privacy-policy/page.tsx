import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="text-black/40 dark:text-white/40 mb-4">
        Última actualización: 14 de abril de 2025
      </p>
      <p className="mb-4">
        Esta Política de Privacidad describe nuestras políticas y procedimientos
        sobre la recopilación, el uso y la divulgación de su información cuando
        utiliza el Servicio y le informa sobre sus derechos de privacidad y cómo
        la ley le protege.
      </p>
      <p className="mb-4">
        Utilizamos sus datos personales para proporcionar y mejorar el Servicio.
        Al usar el Servicio, usted acepta la recopilación y el uso de la
        información de acuerdo a esta Política de Privacidad.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Interpretación y Definiciones
      </h2>
      <h3 className="text-xl font-semibold mb-2">Interpretación</h3>
      <p className="mb-4">
        Las palabras cuya primera letra está en mayúscula tienen significados
        definidos bajo las siguientes condiciones. Las siguientes definiciones
        tendrán el mismo significado, ya sea en singular o en plural.
      </p>
      <h3 className="text-xl font-semibold mb-2">Definiciones</h3>
      <p className="mb-4">
        Para los propósitos de esta Política de Privacidad:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <p>
            <strong>Cuenta</strong> significa una cuenta única creada para que
            usted acceda a nuestro Servicio o a partes del mismo.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Afiliado</strong> se refiere a una entidad que controla, es
            controlada por o está bajo control común con una parte, donde
            “control” significa la propiedad del 50% o más de las acciones,
            interés de capital u otros valores con derecho a voto para la
            elección de directores u otra autoridad directiva.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Compañía</strong> (referida como “la Compañía”, “Nosotros”,
            “Nuestro” o “Nuestros” en este Acuerdo) se refiere a{' '}
            {siteConfig.author}, {siteConfig.github_org_name}, o cualquier otra
            organización relacionada.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Cookies</strong> son pequeños archivos que se colocan en su
            computadora, dispositivo móvil o cualquier otro dispositivo por un
            sitio web, y que contienen detalles de su historial de navegación en
            ese sitio entre otros usos.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>País</strong> se refiere a: {`${siteConfig.country}`}
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Dispositivo</strong> significa cualquier dispositivo que
            pueda acceder al Servicio, como una computadora, un teléfono celular
            o una tableta digital.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Datos Personales</strong> es cualquier información que se
            relacione a una persona identificada o identificable.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Servicio</strong> se refiere al Sitio Web, a todas las
            aplicaciones, sitios, software y servicios que proporcionamos.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Proveedor de Servicios</strong> significa cualquier persona
            física o jurídica que procese los datos en nombre de la Compañía. Se
            refiere a empresas externas o individuos contratados por la Compañía
            para facilitar el Servicio, proporcionarlo en nombre de la Compañía,
            realizar servicios relacionados con el Servicio o ayudar a la
            Compañía a analizar cómo se utiliza el Servicio.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Servicio de Redes Sociales de Terceros</strong> se refiere a
            cualquier sitio web o red social a través de la cual un Usuario
            pueda iniciar sesión o crear una cuenta para utilizar el Servicio.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Datos de Uso</strong> se refiere a los datos recopilados
            automáticamente, generados ya sea por el uso del Servicio o por la
            propia infraestructura del Servicio (por ejemplo, la duración de una
            visita a una página).
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Sitio Web</strong> se refiere a {siteConfig.author},{' '}
            {siteConfig.github_org_name}, o cualquier otra organización
            relacionada, accesible desde{' '}
            <Link
              href={siteConfig.baseUrl}
              rel="external nofollow noopener"
              target="_blank"
              className="underline text-blue-600"
            >
              {siteConfig.domain}
            </Link>{' '}
            o cualquiera de sus subdominios, y todos los enlaces sociales y de
            perfil.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Usted</strong> significa la persona que accede o utiliza el
            Servicio, o la empresa u otra entidad legal en cuyo nombre dicha
            persona accede o utiliza el Servicio, según corresponda.
          </p>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">
        Recopilación y Uso de Sus Datos Personales
      </h2>
      <h3 className="text-xl font-semibold mb-2">Tipos de Datos Recopilados</h3>
      <h4 className="text-lg font-semibold mb-2">Datos Personales</h4>
      <p className="mb-4">
        Mientras utiliza nuestro Servicio, es posible que le pidamos que nos
        proporcione cierta información de identificación personal que se pueda
        utilizar para contactarlo o identificarlo. La información de
        identificación personal puede incluir, entre otros:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <p>Dirección de correo electrónico</p>
        </li>
        <li className="mb-2">
          <p>Nombre y apellido</p>
        </li>
        <li className="mb-2">
          <p>Datos de Uso</p>
        </li>
      </ul>
      <h4 className="text-lg font-semibold mb-2">Datos de Uso</h4>
      <p className="mb-4">
        Los Datos de Uso se recopilan automáticamente al utilizar el Servicio.
      </p>
      <p className="mb-4">
        Los Datos de Uso pueden incluir información como la dirección de
        protocolo de Internet de su dispositivo (por ejemplo, la dirección IP),
        tipo y versión del navegador, las páginas del Servicio que visita, la
        fecha y hora de su visita, el tiempo invertido en esas páginas,
        identificadores únicos del dispositivo y otros datos de diagnóstico.
      </p>
      <p className="mb-4">
        Cuando accede al Servicio a través de un dispositivo móvil, es posible
        que recopilemos cierta información automáticamente, incluyendo, entre
        otros, el tipo de dispositivo móvil que utiliza, el ID único de su
        dispositivo, la dirección IP de su dispositivo móvil, el sistema
        operativo del dispositivo, el tipo de navegador de Internet móvil,
        identificadores únicos del dispositivo y otros datos de diagnóstico.
      </p>
      <p className="mb-4">
        También podemos recopilar información que su navegador envíe cada vez
        que visite nuestro Servicio o cuando acceda al Servicio a través de un
        dispositivo móvil.
      </p>
      <h4 className="text-lg font-semibold mb-2">
        Información de Servicios de Redes Sociales de Terceros
      </h4>
      <p className="mb-4">
        La Compañía le permite crear una cuenta e iniciar sesión para utilizar
        el Servicio a través de los siguientes Servicios de Redes Sociales de
        Terceros:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Google</li>
        <li className="mb-2">Facebook</li>
        <li className="mb-2">Instagram</li>
        <li className="mb-2">Twitter</li>
        <li className="mb-2">LinkedIn</li>
      </ul>
      <p className="mb-4">
        Si decide registrarse o de alguna otra forma otorgarnos acceso a su
        cuenta de un Servicio de Redes Sociales de Terceros, es posible que
        recopilemos datos personales que ya estén asociados con la cuenta de
        dicho servicio, tales como su nombre, dirección de correo electrónico,
        actividades o su lista de contactos asociada a esa cuenta.
      </p>
      <p className="mb-4">
        También puede tener la opción de compartir información adicional con la
        Compañía a través de su cuenta del Servicio de Redes Sociales de
        Terceros. Si decide proporcionar dicha información y datos personales,
        ya sea durante el registro u en otro momento, está dando permiso a la
        Compañía para usar, compartir y almacenar esa información de manera
        consistente con esta Política de Privacidad.
      </p>
      <h4 className="text-lg font-semibold mb-2">
        Tecnologías de Seguimiento y Cookies
      </h4>
      <p className="mb-4">
        Utilizamos Cookies y tecnologías de seguimiento similares para rastrear
        la actividad en nuestro Servicio y almacenar cierta información. Las
        tecnologías de seguimiento utilizadas pueden ser balizas, etiquetas y
        scripts para recopilar y rastrear información y para mejorar y analizar
        nuestro Servicio. Las tecnologías que usamos pueden incluir:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <strong>Cookies o Cookies de Navegador.</strong> Una cookie es un
          pequeño archivo que se coloca en su dispositivo. Usted puede
          configurar su navegador para rechazar todas las cookies o para indicar
          cuándo se está enviando una cookie. Sin embargo, si no acepta las
          cookies, es posible que no pueda utilizar algunas partes de nuestro
          Servicio. A menos que haya ajustado la configuración de su navegador
          para que rechace las cookies, nuestro Servicio puede utilizar cookies.
        </li>
        <li className="mb-2">
          <strong>Balizas Web.</strong> Algunas secciones de nuestro Servicio y
          nuestros correos electrónicos pueden contener pequeños archivos
          electrónicos conocidos como balizas web (también denominados gifs
          transparentes, etiquetas de píxel o gifs de un solo píxel) que
          permiten a la Compañía, por ejemplo, contar los usuarios que han
          visitado dichas páginas o abierto un correo electrónico, entre otras
          estadísticas relacionadas con el sitio.
        </li>
      </ul>
      <p className="mb-4">
        Las cookies pueden ser “Persistentes” o de “Sesión”. Las cookies
        persistentes permanecen en su computadora personal o dispositivo móvil
        cuando se desconecta, mientras que las cookies de sesión se eliminan tan
        pronto como cierra su navegador. Puede obtener más información sobre las
        cookies en el artículo de{' '}
        <Link
          href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
          target="_blank"
          className="underline text-blue-600"
        >
          TermsFeed
        </Link>
        .
      </p>
      <p className="mb-4">
        Utilizamos tanto cookies de sesión como cookies persistentes para los
        siguientes propósitos:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <p>
            <strong>Cookies Necesarias / Esenciales</strong>
          </p>
          <p>Tipo: Cookies de Sesión</p>
          <p>Administradas por: Nosotros</p>
          <p>
            Propósito: Estas cookies son esenciales para proporcionarle los
            servicios disponibles a través del Sitio Web y para permitirle
            utilizar algunas de sus funciones. Ayudan a autenticar a los
            usuarios y prevenir el uso fraudulento de las cuentas de usuario.
            Sin estas cookies, los servicios que ha solicitado no pueden ser
            proporcionados, y solo las usamos para ofrecerle esos servicios.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Política de Cookies / Aceptación del Aviso</strong>
          </p>
          <p>Tipo: Cookies Persistentes</p>
          <p>Administradas por: Nosotros</p>
          <p>
            Propósito: Estas cookies identifican si los usuarios han aceptado el
            uso de cookies en el Sitio Web.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Cookies de Funcionalidad</strong>
          </p>
          <p>Tipo: Cookies Persistentes</p>
          <p>Administradas por: Nosotros</p>
          <p>
            Propósito: Estas cookies nos permiten recordar las elecciones que
            usted realiza cuando utiliza el Sitio Web, como recordar sus datos
            de inicio de sesión o preferencias de idioma. Su objetivo es
            ofrecerle una experiencia más personalizada y evitar que tenga que
            reingresar sus preferencias cada vez que utilice el Sitio Web.
          </p>
        </li>
      </ul>
      <p className="mb-4">
        Para obtener más información sobre las cookies que utilizamos y sus
        opciones con respecto a las cookies, por favor visite nuestra Política
        de Cookies o la sección de Cookies de esta Política de Privacidad.
      </p>
      <h3 className="text-xl font-semibold mb-2">
        Uso de sus Datos Personales
      </h3>
      <p className="mb-4">
        La Compañía puede utilizar los Datos Personales para los siguientes
        propósitos:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <p>
            <strong>Para proporcionar y mantener nuestro Servicio</strong>,
            incluyendo la monitorización del uso del Servicio.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Para gestionar su Cuenta:</strong> para gestionar su
            registro como usuario del Servicio. Los datos personales que usted
            proporcione pueden darle acceso a diferentes funcionalidades del
            Servicio que están disponibles para usted como usuario registrado.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Para la ejecución de un contrato:</strong> el desarrollo,
            cumplimiento y realización del contrato de compra de los productos,
            artículos o servicios que usted haya adquirido o de cualquier otro
            contrato con nosotros a través del Servicio.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Para contactarlo:</strong> para comunicarnos con usted por
            correo electrónico, llamadas telefónicas, SMS u otros medios
            equivalentes de comunicación electrónica, tales como notificaciones
            push de una aplicación móvil sobre actualizaciones o comunicaciones
            informativas relacionadas con las funcionalidades, productos o
            servicios contratados, incluyendo actualizaciones de seguridad,
            cuando sea necesario o razonable para su implementación.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Para proporcionarle</strong> noticias, ofertas especiales e
            información general sobre otros bienes, servicios y eventos que
            ofrecemos y que son similares a aquellos que usted ya ha comprado o
            sobre los que ha consultado, a menos que usted haya optado por no
            recibir dicha información.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Para gestionar sus solicitudes:</strong> para atender y
            gestionar sus solicitudes hacia nosotros.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Para transferencias comerciales:</strong> podemos utilizar
            su información para evaluar o llevar a cabo una fusión,
            desinversión, reestructuración, reorganización, disolución u otra
            venta o transferencia de algunos o todos nuestros activos, ya sea
            como una continuidad o como parte de un proceso de quiebra,
            liquidación o procedimiento similar, en el cual los Datos Personales
            que tenemos sobre los usuarios de nuestro Servicio se consideren
            entre los activos transferidos.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Para otros fines</strong>: podemos utilizar su información
            para otros fines, tales como análisis de datos, identificación de
            tendencias de uso, determinación de la efectividad de nuestras
            campañas promocionales y para evaluar y mejorar nuestro Servicio,
            productos, servicios, marketing y su experiencia.
          </p>
        </li>
      </ul>
      <p className="mb-4">
        Podemos compartir su información personal en las siguientes situaciones:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <strong>Con Proveedores de Servicios:</strong> Podemos compartir su
          información personal con Proveedores de Servicios para monitorear y
          analizar el uso de nuestro Servicio, o para comunicarnos con usted.
        </li>
        <li className="mb-2">
          <strong>Para transferencias comerciales:</strong> Podemos compartir o
          transferir su información personal en relación con, o durante las
          negociaciones de, cualquier fusión, venta de activos de la Compañía,
          financiamiento o adquisición de la totalidad o parte de nuestro
          negocio a otra compañía.
        </li>
        <li className="mb-2">
          <strong>Con Afiliados:</strong> Podemos compartir su información con
          nuestros afiliados, en cuyo caso requeriremos que esos afiliados
          respeten esta Política de Privacidad. Los afiliados incluyen nuestra
          empresa matriz y cualquier otra subsidiaria, socio de empresa conjunta
          u otras compañías que controlemos o que estén bajo control común con
          nosotros.
        </li>
        <li className="mb-2">
          <strong>Con socios comerciales:</strong> Podemos compartir su
          información con nuestros socios comerciales para ofrecerle ciertos
          productos, servicios o promociones.
        </li>
        <li className="mb-2">
          <strong>Con otros usuarios:</strong> cuando usted comparte información
          personal o interactúa en áreas públicas con otros usuarios, dicha
          información puede ser vista por todos los usuarios y puede
          distribuirse públicamente. Si interactúa con otros usuarios o se
          registra a través de un Servicio de Redes Sociales de Terceros, sus
          contactos en ese servicio pueden ver su nombre, perfil, imágenes y
          descripción de sus actividades. Del mismo modo, otros usuarios podrán
          ver descripciones de sus actividades, comunicarse con usted y ver su
          perfil.
        </li>
        <li className="mb-2">
          <strong>Con su consentimiento:</strong> Podemos divulgar su
          información personal para cualquier otro propósito con su
          consentimiento.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">
        Conservación de sus Datos Personales
      </h3>
      <p className="mb-4">
        La Compañía conservará sus Datos Personales sólo durante el tiempo que
        sea necesario para los fines establecidos en esta Política de
        Privacidad. Conservaremos y utilizaremos sus Datos Personales en la
        medida necesaria para cumplir con nuestras obligaciones legales (por
        ejemplo, si estamos obligados a conservar sus datos para cumplir con las
        leyes aplicables), resolver disputas y hacer cumplir nuestros acuerdos y
        políticas legales.
      </p>
      <p className="mb-4">
        La Compañía también conservará los Datos de Uso para fines de análisis
        interno. Generalmente, los Datos de Uso se retienen por un periodo de
        tiempo más corto, excepto cuando estos datos se utilizan para reforzar
        la seguridad, mejorar la funcionalidad de nuestro Servicio, o cuando la
        ley nos obliga a conservarlos por períodos más largos.
      </p>
      <h3 className="text-xl font-semibold mb-2">
        Transferencia de sus Datos Personales
      </h3>
      <p className="mb-4">
        Su información, incluidos los Datos Personales, se procesa en las
        oficinas operativas de la Compañía y en cualquier otro lugar donde se
        encuentren las partes involucradas en el procesamiento. Esto significa
        que esta información puede ser transferida a – y almacenada en –
        computadoras ubicadas fuera de su estado, provincia, país u otra
        jurisdicción gubernamental donde las leyes de protección de datos pueden
        diferir de las de su jurisdicción.
      </p>
      <p className="mb-4">
        Su consentimiento a esta Política de Privacidad, seguido por el envío de
        dicha información, representa su acuerdo a tal transferencia.
      </p>
      <p>
        La Compañía tomará todas las medidas razonablemente necesarias para
        garantizar que sus datos sean tratados de forma segura y de acuerdo con
        esta Política de Privacidad, y ninguna transferencia de sus Datos
        Personales se llevará a cabo a una organización o país a menos que
        existan controles adecuados, incluida la seguridad de sus datos y otra
        información personal.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Eliminación de sus Datos Personales
      </h3>
      <p>
        Usted tiene el derecho de eliminar o solicitar que le ayudemos a
        eliminar los Datos Personales que hemos recopilado sobre usted.
      </p>
      <p>
        Nuestro Servicio puede brindarle la posibilidad de eliminar cierta
        información acerca de usted desde el propio Servicio.
      </p>
      <p>
        Puede actualizar, modificar o eliminar su información en cualquier
        momento iniciando sesión en su Cuenta, si tiene una, y visitando la
        sección de configuración de cuenta que le permite administrar su
        información personal. También puede contactarnos para solicitar el
        acceso, la corrección o la eliminación de cualquier información personal
        que nos haya proporcionado.
      </p>
      <p>
        Tenga en cuenta, sin embargo, que es posible que debamos conservar
        cierta información cuando tengamos una obligación legal o fundamento
        legítimo para hacerlo.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Divulgación de sus Datos Personales
      </h3>

      <h4 className="text-lg font-semibold mt-4">Transacciones Comerciales</h4>
      <p>
        Si la Compañía participa en una fusión, adquisición o venta de activos,
        es posible que se transfieran sus Datos Personales. Le notificaremos
        antes de que sus Datos Personales sean transferidos y pasen a estar
        sujetos a una Política de Privacidad diferente.
      </p>

      <h4 className="text-lg font-semibold mt-4">Cumplimiento de la Ley</h4>
      <p>
        Bajo ciertas circunstancias, la Compañía puede estar obligada a divulgar
        sus Datos Personales si la ley así lo exige o en respuesta a solicitudes
        válidas de autoridades públicas (por ejemplo, un tribunal o una agencia
        gubernamental).
      </p>

      <h4 className="text-lg font-semibold mt-4">Otros Requisitos Legales</h4>
      <p>
        La Compañía puede divulgar sus Datos Personales de buena fe bajo la
        creencia de que dicha acción es necesaria para:
      </p>
      <ul className="list-disc list-inside">
        <li>Cumplir con una obligación legal</li>
        <li>Proteger y defender los derechos o la propiedad de la Compañía</li>
        <li>
          Prevenir o investigar posibles actividades ilícitas relacionadas con
          el Servicio
        </li>
        <li>
          Proteger la seguridad personal de los usuarios del Servicio o del
          público
        </li>
        <li>Proteger contra responsabilidad legal</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">
        Seguridad de sus Datos Personales
      </h3>
      <p>
        La seguridad de sus Datos Personales es importante para nosotros, pero
        recuerde que ningún método de transmisión por Internet o método de
        almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por
        utilizar medios comercialmente aceptables para proteger sus Datos
        Personales, no podemos garantizar su seguridad absoluta.
      </p>

      <h2 className="text-2xl font-bold mt-8">Privacidad Infantil</h2>
      <p>
        Nuestro Servicio no se dirige a personas menores de 13 años. No
        recopilamos a sabiendas información de identificación personal de nadie
        menor de 13 años. Si usted es padre o tutor y tiene conocimiento de que
        su hijo nos ha proporcionado Datos Personales, por favor contáctenos. Si
        nos enteramos de que hemos recopilado Datos Personales de alguien menor
        de 13 años sin la verificación del consentimiento parental, tomaremos
        medidas para eliminar esa información de nuestros servidores.
      </p>
      <p>
        Si necesitamos basarnos en el consentimiento como fundamento legal para
        procesar su información y su país requiere el consentimiento de un
        padre, es posible que solicitemos el consentimiento de su padre antes de
        recopilar y utilizar dicha información.
      </p>

      <h2 className="text-2xl font-bold mt-8">Enlaces a Otros Sitios Web</h2>
      <p>
        Nuestro Servicio puede contener enlaces a otros sitios web que no son
        operados por nosotros. Si hace clic en un enlace de terceros, será
        dirigido al sitio de ese tercero. Le recomendamos encarecidamente que
        revise la Política de Privacidad de cada sitio que visite.
      </p>
      <p>
        No tenemos control sobre, ni asumimos responsabilidad por, el contenido,
        las políticas de privacidad o las prácticas de sitios o servicios de
        terceros.
      </p>

      <h2 className="text-2xl font-bold mt-8">
        Cambios a esta Política de Privacidad
      </h2>
      <p>
        Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le
        notificaremos cualquier cambio publicando la nueva Política de
        Privacidad en esta página.
      </p>
      <p>
        Le informaremos vía correo electrónico y/o mediante un aviso destacado
        en nuestro Servicio, antes de que el cambio entre en vigor, y
        actualizaremos la fecha de “Última actualización” en la parte superior
        de esta Política de Privacidad.
      </p>
      <p>
        Se recomienda que revise periódicamente esta Política de Privacidad para
        estar al tanto de cualquier cambio. Los cambios a esta Política de
        Privacidad serán efectivos cuando se publiquen en esta página.
      </p>

      <h2 className="text-2xl font-bold mt-8">Contáctenos</h2>
      <p>
        Si tiene alguna pregunta sobre esta Política de Privacidad, puede
        contactarnos:
      </p>
      <ul className="list-disc list-inside">
        <li>
          Por correo electrónico:{' '}
          <Link
            href={`mailto:${siteConfig.social.email}`}
            className="text-blue-500 hover:underline"
          >
            {siteConfig.social.email}
          </Link>
        </li>
        <li>
          Visitando esta página en nuestro sitio web:{' '}
          <Link
            href={`https://${siteConfig.domain}/contact`}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="external nofollow noopener"
          >
            {`https://${siteConfig.domain}/contact`}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;

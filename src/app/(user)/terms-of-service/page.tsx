import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
      <p className="text-black/40 dark:text-white/40 mb-4">
        Última actualización: 14 de abril de 2025
      </p>
      <p className="mb-4">
        Por favor, lea estos términos y condiciones cuidadosamente antes de
        utilizar nuestro Servicio.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Interpretación y Definiciones
      </h2>
      <h3 className="text-xl font-semibold mb-2">Interpretación</h3>
      <p className="mb-4">
        Las palabras cuya primera letra está en mayúscula tienen significados
        definidos bajo las siguientes condiciones. Las siguientes definiciones
        tendrán el mismo significado, ya sea que aparezcan en singular o en
        plural.
      </p>
      <h3 className="text-xl font-semibold mb-2">Definiciones</h3>
      <p className="mb-4">
        Para los propósitos de estos Términos y Condiciones:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <p>
            <strong>Afiliado</strong> significa una entidad que controla, es
            controlada por o está bajo control común con una parte, donde
            “control” significa la propiedad del 50% o más de las acciones,
            interés de capital u otros valores con derecho a voto para la
            elección de directores u otra autoridad directiva.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>País</strong> se refiere a: {siteConfig.country}
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
            <strong>Dispositivo</strong> significa cualquier dispositivo que
            pueda acceder al Servicio, como una computadora, un teléfono celular
            o una tableta digital.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Servicio</strong> se refiere al Sitio Web.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Términos y Condiciones</strong> (también referidos como
            “Términos”) significa estos Términos y Condiciones que constituyen
            el acuerdo completo entre usted y la Compañía respecto al uso del
            Servicio.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Servicio de Redes Sociales de Terceros</strong> se refiere a
            cualquier servicio o contenido (incluidos datos, información,
            productos o servicios) proporcionado por un tercero que puede ser
            mostrado, incluido o puesto a disposición mediante el Servicio.
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
            Servicio, o la empresa, o cualquier otra entidad legal en cuyo
            nombre dicha persona accede o utiliza el Servicio, según
            corresponda.
          </p>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Reconocimiento</h2>
      <p className="mb-4">
        Estos son los Términos y Condiciones que rigen el uso de este Servicio y
        el acuerdo que opera entre usted y la Compañía. Estos Términos y
        Condiciones establecen los derechos y obligaciones de todos los usuarios
        respecto al uso del Servicio.
      </p>
      <p className="mb-4">
        Su acceso y uso del Servicio están condicionados a su aceptación y
        cumplimiento de estos Términos y Condiciones. Estos Términos y
        Condiciones se aplican a todos los visitantes, usuarios y demás personas
        que accedan o utilicen el Servicio.
      </p>
      <p className="mb-4">
        Al acceder o utilizar el Servicio, usted acepta estar obligado por estos
        Términos y Condiciones. Si no está de acuerdo con alguna parte de estos
        Términos y Condiciones, entonces no podrá acceder al Servicio.
      </p>
      <p className="mb-4">
        Usted declara que tiene más de 18 años. La Compañía no permite el uso
        del Servicio a menores de 18 años.
      </p>
      <p className="mb-4">
        Su acceso y uso del Servicio también están condicionados a su aceptación
        y cumplimiento de la Política de Privacidad de la Compañía. Nuestra
        Política de Privacidad describe nuestras políticas y procedimientos
        sobre la recopilación, uso y divulgación de su información personal
        cuando utiliza la Aplicación o el Sitio Web, y le informa sobre sus
        derechos de privacidad y cómo la ley lo protege. Por favor, lea nuestra
        Política de Privacidad cuidadosamente antes de utilizar nuestro
        Servicio.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Enlaces a Otros Sitios Web
      </h2>
      <p className="mb-4">
        Nuestro Servicio puede contener enlaces a sitios web o servicios de
        terceros que no son propiedad ni están controlados por la Compañía.
      </p>
      <p className="mb-4">
        La Compañía no tiene control sobre, ni asume responsabilidad alguna por,
        el contenido, las políticas de privacidad o las prácticas de sitios web
        o servicios de terceros. Usted reconoce y acepta además que la Compañía
        no será responsable, directa o indirectamente, de ningún daño o pérdida
        causada o supuestamente causada por o en conexión con el uso o la
        confianza en dicho contenido, bienes o servicios disponibles en o a
        través de dichos sitios web o servicios.
      </p>
      <p className="mb-4">
        Le recomendamos encarecidamente que lea los términos y condiciones y las
        políticas de privacidad de cualquier sitio web o servicio de terceros
        que visite.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Terminación</h2>
      <p className="mb-4">
        Podemos terminar o suspender su acceso de manera inmediata, sin previo
        aviso o responsabilidad, por cualquier motivo, incluyendo sin limitación
        si usted incumple estos Términos y Condiciones.
      </p>
      <p className="mb-4">
        Tras la terminación, su derecho a utilizar el Servicio cesará de forma
        inmediata.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Limitación de Responsabilidad
      </h2>
      <p className="mb-4">
        Sin perjuicio de cualquier daño que pudiera sufrir, la responsabilidad
        total de la Compañía y cualquiera de sus proveedores bajo cualquier
        disposición de estos Términos y su remedio exclusivo por todos los daños
        anteriores se limitará a la cantidad efectivamente pagada por usted a
        través del Servicio o 100 USD, en caso de que no haya realizado ninguna
        compra a través del Servicio.
      </p>
      <p className="mb-4">
        En la máxima medida permitida por la ley aplicable, en ningún caso la
        Compañía o sus proveedores serán responsables de ningún daño especial,
        incidental, indirecto o consecuente (incluidos, pero no limitados a,
        daños por pérdida de beneficios, pérdida de datos u otra información,
        por interrupción del negocio, por lesiones personales, pérdida de
        privacidad derivada del uso o la imposibilidad de uso del Servicio,
        software y/o hardware de terceros utilizado con el Servicio, o en
        relación con cualquier disposición de estos Términos), incluso si la
        Compañía o algún proveedor ha sido advertido de la posibilidad de dichos
        daños y aunque el remedio no haya cumplido su propósito esencial.
      </p>
      <p className="mb-4">
        Algunas jurisdicciones no permiten la exclusión de garantías implícitas
        o la limitación de responsabilidad por daños incidentales o
        consecuentes, lo que significa que algunas o todas las limitaciones
        anteriores pueden no aplicarse a usted. En dichos casos, la
        responsabilidad de cada parte se limitará en la mayor medida permitida
        por la ley.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Renuncia “TAL CUAL” y “SEGÚN DISPONIBILIDAD”
      </h2>
      <p className="mb-4">
        El Servicio se le proporciona “TAL CUAL” y “SEGÚN DISPONIBILIDAD”, con
        todos los defectos y sin garantía alguna de ningún tipo. En la máxima
        medida permitida por la ley aplicable, la Compañía, en su propio nombre
        y en el de sus Afiliados, así como de sus respectivos licenciantes y
        proveedores de servicios, rechaza expresamente todas las garantías, ya
        sean expresas, implícitas, legales o de otro tipo, en lo que respecta al
        Servicio, incluidas todas las garantías implícitas de comerciabilidad,
        idoneidad para un propósito particular, titularidad y no infracción, y
        las garantías que puedan surgir en el curso de la negociación,
        ejecución, uso o práctica comercial. Sin limitar lo anterior, la
        Compañía no ofrece garantía ni compromiso alguno, ni hace
        representaciones de ningún tipo de que el Servicio cumplirá con sus
        requisitos, logrará los resultados previstos, será compatible o
        funcionará con cualquier otro software, aplicaciones, sistemas o
        servicios, operará sin interrupciones, cumplirá con algún estándar de
        rendimiento o fiabilidad, o estará libre de errores o que cualquier
        error o defecto pueda o será corregido.
      </p>
      <p className="mb-4">
        Sin limitar lo anterior, ni la Compañía ni ninguno de los proveedores de
        la compañía hacen ninguna representación o garantía de ningún tipo,
        expresa o implícita: (i) en cuanto al funcionamiento o disponibilidad
        del Servicio, o la información, contenido, materiales o productos
        incluidos en el mismo; (ii) que el Servicio se interrumpirá o estará
        libre de errores; (iii) en cuanto a la exactitud, fiabilidad o
        actualidad de cualquier información o contenido proporcionado a través
        del Servicio; o (iv) que el Servicio, sus servidores, el contenido o los
        correos electrónicos enviados desde o en nombre de la Compañía estén
        libres de virus, scripts, troyanos, gusanos, malware, bombas de tiempo u
        otros componentes dañinos.
      </p>
      <p className="mb-4">
        Algunas jurisdicciones no permiten la exclusión de ciertos tipos de
        garantías o limitaciones de los derechos legales estatutarios de un
        consumidor, por lo que algunas o todas las exclusiones y limitaciones
        anteriores pueden no aplicarse a usted. En ese caso, las exclusiones y
        limitaciones establecidas en esta sección se aplicarán en la mayor
        medida exigible según la ley.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Ley Aplicable</h2>
      <p className="mb-4">
        Las leyes del País, sin tener en cuenta las normas sobre conflictos de
        leyes, regirán estos Términos y su uso del Servicio. El uso que usted
        haga de la Aplicación también puede estar sujeto a otras leyes locales,
        estatales, nacionales o internacionales.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Resolución de Disputas</h2>
      <p className="mb-4">
        Si tiene alguna inquietud o disputa sobre el Servicio, usted acepta
        intentar resolver la disputa de forma informal contactando a la
        Compañía.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Para Usuarios de la Unión Europea (UE)
      </h2>
      <p className="mb-4">
        Si usted es un consumidor de la Unión Europea, se beneficiará de todas
        las disposiciones obligatorias de la ley del país en el que reside.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Cumplimiento Legal en Estados Unidos
      </h2>
      <p className="mb-4">
        Usted declara y garantiza que (i) no se encuentra en un país sujeto a un
        embargo del gobierno de Estados Unidos, ni que ha sido designado por el
        gobierno de Estados Unidos como un país que apoya el terrorismo, y (ii)
        no figura en ninguna lista de partes prohibidas o restringidas del
        gobierno de Estados Unidos.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Divisibilidad y Renuncia</h2>
      <h3 className="text-xl font-semibold mb-2">Divisibilidad</h3>
      <p className="mb-4">
        Si alguna disposición de estos Términos se considera inaplicable o
        inválida, dicha disposición se modificará e interpretará de manera que
        se logren sus objetivos en la mayor medida posible según la ley
        aplicable, y las disposiciones restantes continuarán en pleno vigor y
        efecto.
      </p>
      <h3 className="text-xl font-semibold mb-2">Renuncia</h3>
      <p className="mb-4">
        Salvo lo previsto en el presente documento, la falta de ejercicio de un
        derecho o la exigencia del cumplimiento de una obligación bajo estos
        Términos no afectará la facultad de la parte de ejercer dicho derecho o
        exigir dicho cumplimiento en el futuro, ni la renuncia a un
        incumplimiento constituirá una renuncia a cualquier incumplimiento
        posterior.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Interpretación de la Traducción
      </h2>
      <p className="mb-4">
        Es posible que estos Términos y Condiciones hayan sido traducidos si los
        hemos puesto a su disposición en nuestro Servicio. Usted acepta que el
        texto original en inglés prevalecerá en caso de disputa.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Cambios en estos Términos y Condiciones
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho, a nuestra exclusiva discreción, de modificar
        o reemplazar estos Términos en cualquier momento. Si la revisión es
        sustancial, haremos esfuerzos razonables para proporcionar al menos 30
        días de aviso previo a la entrada en vigor de los nuevos términos. Lo
        que se considere un cambio sustancial será determinado a nuestra
        exclusiva discreción.
      </p>
      <p className="mb-4">
        Al continuar accediendo o utilizando nuestro Servicio después de que
        dichas revisiones entren en vigor, usted acepta estar obligado por los
        términos revisados. Si no está de acuerdo con los nuevos términos, en
        todo o en parte, por favor deje de utilizar el sitio web y el Servicio.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contáctenos</h2>
      <p className="mb-4">
        Si tiene alguna pregunta acerca de estos Términos y Condiciones, puede
        contactarnos:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <p>
            Por correo electrónico:{' '}
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </a>
          </p>
        </li>
        <li className="mb-2">
          <p>
            Visitando esta página en nuestro sitio web:{' '}
            <Link
              href={`https://${siteConfig.domain}/contact`}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="external nofollow noopener"
            >
              {`https://${siteConfig.domain}/contact`}
            </Link>
          </p>
        </li>
      </ul>
    </div>
  );
}

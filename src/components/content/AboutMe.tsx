'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="Sobre Mí"
        content="Descubre mi experiencia en el desarrollo web y la gestión de productos digitales."
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        ¡Hola! 👋 Me llamo{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , soy un Full Stack Developer apasionado por la creación de aplicaciones web
        para comercio electrónico y sitios corporativos. He trabajado utilizando
        tecnologías modernas como React, Node.js, Express, MySQL, PostgreSQL,
        Docker, MongoDB, Laravel, Typescript, Bootstrap, Tailwind y WordPress,
        entre otras.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Mi experiencia incluye el uso de herramientas colaborativas como Git y
        GitHub para el control de versiones, así como la implementación de AJAX
        y RESTful APIs para mejorar la comunicación entre el cliente y el
        servidor. Además, conozco metodologías ágiles y destaco el trabajo en
        equipo para optimizar el proceso de desarrollo.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Tengo conocimientos en SEO y SEM para optimizar motores de búsqueda y
        campañas publicitarias, lo que me permitió mejorar la visibilidad y
        rendimiento de mis proyectos. Además, he desarrollado extensiones de
        Chrome internas para gestionar proyectos y aumentar la productividad, he
        creado correos corporativos personalizados para optimizar la
        comunicación con tasas de apertura de 80%.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Mi objetivo es seguir impulsando proyectos innovadores en el mundo
        digital, aprovechando tanto mi experiencia técnica como mis habilidades
        en la creación de plataformas digitales y en gestión de productos. Si
        buscas colaborar en el desarrollo de soluciones web o mejorar tus
        estrategias digitales, no dudes en contactarme.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;

'use client';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';
import ContactMe from '@/src/components/content/ContactMe';
import SupportMe from '@/src/components/content/SupportMe';
import FAQSection from '@/src/components/sections/FAQSection';
import SkillsSection from '@/src/components/sections/SkillsSection';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            ¡Hola! 👋 Soy <strong>{siteConfig.author}</strong>, un Full Stack
            Developer que disfruta creando soluciones digitales innovadoras.
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              ✨ Dedico mi tiempo libre a desarrollar aplicaciones y plataformas
              web, porque siempre quiero seguir creciendo y perfeccionando mis
              habilidades.
            </li>
            <li>
              📚 Actualmente, me enfoco en explorar nuevas tecnologías y
              tendencias que potencien la experiencia en el comercio electrónico
              y la optimización digital, sin dejar de lado metodologías ágiles y
              estrategias SEO/SEM.
            </li>
            <li>
              🤝 Me emociona colaborar con otros y aportar mi experiencia en
              proyectos desafiantes. Si tienes una idea o proyecto que necesite
              un impulso extra, ¡estaré encantado de colaborar!
            </li>
            <li>
              🔧 Cuento con experiencia en diversos lenguajes y tecnologías, lo
              que me permite adaptarme y contribuir eficazmente a cualquier
              stack tecnológico.
            </li>
            <li>
              📬 Si encuentras algo interesante en mis proyectos o tienes un
              proyecto en mente, contáctame. ¡Hagamos algo asombroso juntos!
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            ¡Explora mis proyectos y no dudes en ponerte en contacto para
            colaborar!
          </p>
        </AnimationContainer>
        <AnimationContainer customClassName="w-full ">
          <CurrentTimeLineExp />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>
        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
        {/* Support Me Section */}
        {/* <AnimationContainer customClassName="w-full mt-16">
          <SupportMe />
        </AnimationContainer> */}

        {/* FAQ Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <FAQSection />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;

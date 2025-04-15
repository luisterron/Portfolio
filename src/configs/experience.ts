'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Full Stack Developer',
    description:
      "Full Stack Developer en Grupo Oclem, consultora. Desarrollo web para aplicaciones de comercio electrónico y sitios web. Experiencia en la creación de aplicaciones web utilizando tecnologías como React, Node.js, Express, MySQL, PostgreSQL, Docker, MongoDB, Laravel, Typescript, Boostrap, Tailwind, Wordpress, entre otras. Uso de herramientas como Git y GitHub para el control de versiones y la colaboración en proyectos. Conocimiento de metodologías ágiles y trabajo en equipo. AJAX y RESTful APIs para la comunicación entre el cliente y el servidor.",
    startDate: 'Mar 2024',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'Product Manager | Nov. 2023 - Mar. 2024',
    description:
      'Digital Product Manager en UNIR. Conocimiento de SEO y SEM para la optimización de motores de búsqueda y la publicidad. Creación de extensiones de chrome internas para la gestión de proyectos y la mejora de la productividad. Creación de correos personalizados corporativos.',
    startDate: 'Nov 2023',
    endDate: 'Mar 2024',
    isActive: false,
    companyUrl: siteConfig.social.github_organisation
  }
];

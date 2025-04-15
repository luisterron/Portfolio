'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

// Define a type for FAQ item
export interface FAQItem {
  title: string;
  content: JSX.Element;
}

// Define the faqData array with the FAQItem type, adapted to Luis Fernández
export const faqData: FAQItem[] = [
  {
    title: '¿Quién eres?',
    content: (
      <>
        Soy <strong>Luis Fernández</strong>, un Desarrollador Full Stack en
        Grupo Oclem, con experiencia en la creación de todo tipo de aplicaciones
        web. A lo largo de mi trayectoria, he utilizado tecnologías como React,
        Node.js, Express, MySQL, PostgreSQL, Docker, MongoDB, Laravel,
        TypeScript, Bootstrap, Tailwind y WordPress, entre otras.
        <br className="mb-2" />
        También he asumido roles de liderazgo y gestión de proyectos digitales,
        incluyendo mi etapa como <strong>Product Manager</strong> en{' '}
        <em>UNIR</em> (noviembre de 2023 - marzo de 2024), donde profundicé en
        la optimización de motores de búsqueda (SEO) y la publicidad (SEM),
        además de crear extensiones internas de Chrome para mejorar la
        productividad y el flujo de trabajo.
      </>
    )
  },
  {
    title: '¿Qué tecnologías utilizas?',
    content: (
      <>
        Como Full Stack Developer, trabajo tanto en frontend como en backend.
        Uso principalmente React, Node.js, Express, MySQL, PostgreSQL, Docker,
        MongoDB, Laravel, TypeScript, Bootstrap y Tailwind. Además, manejo Git y
        GitHub para control de versiones y colaboración, y estoy familiarizado
        con metodologías ágiles.
        <br className="mb-2" />
        Siempre estoy dispuesto a aprender nuevas herramientas para optimizar la
        creación y gestión de proyectos.
      </>
    )
  },
  {
    title: '¿Podemos contratarte?',
    content: (
      <>
        Sí, actualmente estoy abierto a oportunidades laborales y colaboraciones
        en proyectos innovadores. No dudes en contactarme a través de mi correo
        electrónico si estás interesado en mi perfil o si quieres proponer un
        proyecto.
        <br className="mb-2" />
        Puedes contactarme a través de:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            Linkedin:{' '}
            <Link
              href={siteConfig.social.linkedin}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.linkedin}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    title: '¿Cómo puedo colaborar contigo?',
    content: (
      <>
        Puedes contactarme por correo electrónico o por las redes profesionales
        que utilizo para coordinar posibles colaboraciones. Estoy abierto a
        escuchar ideas y trabajar en proyectos que requieran desarrollo web
        personalizado, automatización, SEO o publicidad online.
        <ul className="list-disc pl-6 text-black dark:text-white text-sm mt-2">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    title: '¿Cuál es tu estrategia al aprender nuevas tecnologías?',
    content: (
      <>
        Me considero una persona muy curiosa y procuro estar al día con las
        últimas herramientas y metodologías. Suelo empezar con proyectos
        pequeños para aprender conceptos fundamentales y luego los aplico en
        soluciones más completas, ajustando la adopción de nuevas tecnologías
        según su relevancia y el impacto en la productividad.
      </>
    )
  },
  {
    title: '¿Ofreces servicios como freelancer?',
    content: (
      <>
        Sí, estoy disponible para trabajos de freelance. Si tienes un proyecto
        en mente, contáctame por{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          correo electrónico.
        </Link>{' '}
        Será un placer analizar tu idea y ver cómo podemos colaborar.
        <br className="mb-2" />
        También puedes encontrarme en mi{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          página de GitHub
        </Link>
        .
      </>
    )
  },
  {
    title: 'Intenté contactarte y no obtuve respuesta, ¿qué ocurrió?',
    content: (
      <>
        Lamento si no pude responder a tiempo o si se me pasó tu mensaje. A
        veces las notificaciones se pierden o puedo estar concentrado en otras
        tareas. Si crees que me perdí tu mensaje, no dudes en volver a
        contactarme.
        <br className="mb-2" />
        Para una respuesta más rápida, puedes contactarme en mi Linkedin:
        <li>
          <Link
            href={siteConfig.social.linkedin}
            className="text-blue-500 hover:underline"
          >
            {siteConfig.social.linkedin}
          </Link>
        </li>
      </>
    )
  }
];

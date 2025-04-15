export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://luisfernandezterron.com',
  domain: 'luisfernandezterron.com',
  author: 'Luis Fernández',
  author_surname: 'Luis',
  titlePrefix: 'Luis Fernández Terrón | Full Stack Developer',
  github_org_name: 'luisterron',
  country: 'España',
  profile_image:
    'https://avatars.githubusercontent.com/u/63776310?s=400&u=e4efedb39630f77dfa2ac0e4a2ea4bf848de40b0&v=4',
  form_id: 'https://formspree.io/f/xldjvwvp',
  social: {
    kofi: 'https://ko-fi.com/lfernandez',
    sponsor: 'https://github.com/sponsors/muhammad-fiaz',
    email: 'contacto@luisfernandezterron.com',
    twitter: '@luisfernandezterron_',
    github: 'luisterron',
    linkedin: 'https://www.linkedin.com/in/luis-fernandez-terron/',
    blog: 'https://articles.luisfernandezterron.com',
    medium: 'https://luisfernandezterron.medium.com',
    dev: 'https://dev.to/luisfernandezterron',
    hashnode: 'https://luisfernandezterron.hashnode.dev',
    discord: 'https://discord.gg/',
    github_organisation: 'https://github.com/luisterron',
    daily_dev: {
      username: 'luisfernandezterron',
      card: 'https://api.daily.dev/devcards/v2/JVyK3ICBzKPdM0rcDj1o4.png?type=wide&r=vde'
    },
    holopin: 'luisfernandezterron'
  },
  metadata: {
    description: `¡Hola! Soy Luis Fernández, un desarrollador Full Stack apasionado por la tecnología y la programación. Me encanta crear aplicaciones web y móviles utilizando las últimas tecnologías. Siempre estoy buscando aprender y mejorar mis habilidades. ¡Bienvenido a mi portfolio!`,
    keywords:
      'Luis Fernández, Full Stack Developer, Portfolio, Web Development, Mobile Development, JavaScript, React, Node.js, Express, MongoDB, MySQL, PostgreSQL, Docker, Laravel',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/muhammad-fiaz/muhammad-fiaz/output/github-contribution-grid-snake.svg'
  }
};

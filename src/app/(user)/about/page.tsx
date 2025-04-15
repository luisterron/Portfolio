import AboutSection from '@/src/components/sections/AboutSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';
import { siteConfig } from '@/src/configs/config';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Conóceme',
    description: `Aprende más sobre ${siteConfig.author}, mi misión, visión y valores como desarrollador web.`,
    path: '/about'
  });
}

const About = () => <AboutSection />;

export default About;

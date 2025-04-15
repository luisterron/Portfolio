import ProjectsSection from '@/src/components/sections/ProjectsSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Proyectos',
    description:
      'Explora los proyectos en los que he trabajado, mostrando habilidades y tecnologías.',
    path: '/projects'
  });
}

const Projects = () => <ProjectsSection />;

export default Projects;

import BlogSection from '@/src/components/sections/BlogSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Blog',
    description: 'Lee los útlimos artículos de mi blog como desarrollador web.',
    path: '/blog'
  });
}

const Blog = () => <BlogSection />;

export default Blog;

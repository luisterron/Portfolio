import { redirect } from 'next/navigation';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Inicio',
    path: '/'
  });
}
export default function HomeRedirectPage() {
  // Redirect from /home to /
  redirect('/');
}

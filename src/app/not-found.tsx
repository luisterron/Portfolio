'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import AnimationContainer from '@/src/components/utils/AnimationContainer';

export default function NotFound() {
  return (
    <AnimationContainer customClassName="w-full">
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-6">
          404
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-400 mb-4 text-center">
          ¡Oops! La página que estabas buscando no existe.
        </p>
        <p className="text-lg sm:text-xl text-gray-500 mb-8 text-center">
          La página puede haber sido movida o eliminada, o la URL puede ser
          incorrecta.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/home"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-lg sm:text-xl rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
          >
            Ir a la Página Principal
          </Link>
          <Link
            href={`https://github.com/${siteConfig.social.github}/portfolio/issues/new`}
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-lg sm:text-xl rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
          >
            Reportar un problema
          </Link>
        </div>
      </div>
    </AnimationContainer>
  );
}

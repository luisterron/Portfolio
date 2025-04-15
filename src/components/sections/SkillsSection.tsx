'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Habilidades"
          content="He estado programando durante años, tanto en ámbito profesional como personal, adquiriendo experiencia con una variedad de lenguajes de programación, frameworks y herramientas. He trabajado tanto en tecnologías Frontend como Backend, lo que me permite comprender y contribuir a todo el proceso de desarrollo."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src="https://skillicons.dev/icons?i=js,ts,nodejs,npm,express,nextjs,react,vue,jquery,vite,html,css,tailwind,bootstrap,python,flask,laravel,php,mysql,postgresql,mongodb,linux,windows,docker,github,git,postman,visualstudio,wordpress,discord,gmail,photoshop,illustrator,premiere&perline=15"
              alt="Mis habilidades"
              className="relative w-full h-full max-w-3xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;

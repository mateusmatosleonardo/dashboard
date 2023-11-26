import { HeaderContent } from "./HeaderContent";
import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return (
    <section className='flex flex-1 flex-col h-screen overflow-y-auto gap-y-3 ml-[20rem] p-4 bg-black'>
      <HeaderContent title="Usuários" />
      {children}
    </section>
  );
};

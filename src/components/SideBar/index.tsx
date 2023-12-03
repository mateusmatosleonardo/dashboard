import Image from "next/image";
import { FaUsers } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdAnalytics } from "react-icons/md";
import { ActiveLink } from "../ActiveLink";

export const SideBar = () => {

  return (
    <aside className='fixed flex flex-col flex-start w-[20rem] min-w-[20rem] h-screen p-[0.8rem] bg-black'>
      <div className="flex items-center gap-x-4 py-6">
        <div className="avatar">
          <div className="w-16 rounded-xl">
            <Image
              src="/eu.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xl text-gray-400 font-semibold">Mateus</p>
          <p className="text-sm text-gray-400 font-extralight">Administrador</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4">
        <ActiveLink
          href="/users"
          title="Usuários"
          icon={<FaUsers className="text-gray-400" />}
        />
        <ActiveLink
          href="/help"
          title="Ajuda"
          icon={<FaHandsHelping className="text-gray-400" />}
        />
        {/* <ActiveLink
          href="/graphic"
          title="Gráfico"
          icon={<MdAnalytics className="text-gray-400" />}
        /> */}
        <ActiveLink
          href="/settings"
          title="Configurações"
          icon={<IoMdSettings className="text-gray-400" />}
        />
      </div>
    </aside>
  );
};
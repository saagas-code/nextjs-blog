import Image from "next/image";
import profilePicture from "../../../../assets/matheus.jpeg"
import { Text } from 'thon-ui';
import Link from "next/link";

function NavigatorItem({href, children}: {href: string, children: React.ReactNode}) {
  return (
    <Link href={href} className="py-2 px-3 rounded-lg hover:bg-gray-200 transition duration-200">
      <Text variant="sm" className="font bold ">{children}</Text>
    </Link>
  )
}


export default function MainHeader() {
  return (
    <header 
      className="lg:min-h[100vh] px-7 pt-8 pb-6 lg:pt-40 lg:pb-0
        flex flex-col 
        items-center  bg-gray-100"
      >
      <div className="flex gap-3 items-center">
        <Image 
          src={profilePicture} 
          alt="Foto de Perfil do matheus" 
          className="w-[5.5rem] h-[5.5rem] rounded-full border-[1px] border-black" 
        />
        
        <div className="">
          <Text as="h1" variant='3xl' className="text-gray-800">
            Matheus Almeida
          </Text>
          <Text as="div" variant='xs' className="xs text-gray-500 italic -mt-0.5">
            FullStack Developer
          </Text>
        </div>
      </div>

      <div className="w-full lg:w-[20rem] mt-6 lg:mt-12">
        <Text as="p" variant="sm" className="text-gray-500 italic">
          Criando coisas incríveis desde 2022, com muita atencão aos detalhes, sentimento de dono e exercendo o feedback
        </Text>
        <Text as="p" variant="sm" className="text-gray-500 italic mt-2">
          Você pode me chamar de Teteu. 
        </Text>
      </div>

      <nav className="flex gap-2 w-[18rem] lg:w-[20rem] mt-6 ">
        <NavigatorItem href="/">Home</NavigatorItem>
        <NavigatorItem href="/blog">Blog</NavigatorItem>
      </nav>
    </header>
  )
}
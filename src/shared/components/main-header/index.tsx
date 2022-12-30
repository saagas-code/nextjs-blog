import Image from "next/image";
import profilePicture from "../../../../assets/matheus.jpeg"
import { Text } from 'thon-ui';




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
    </header>
  )
}
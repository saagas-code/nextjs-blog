import Image from "next/image";
import profilePicture from "../../../../assets/matheus.jpeg"
import { Text } from 'thon-ui';




export default function MainFooter() {
  const linkClassName = 'text-gray-500 hover:text-gray-800 transition-all duration-200ms'
  return (
    <footer className="flex justify-between items-center pt-4 border-t border-solid border-t-gray-200">
      <div className="flex flex-col">
        <Text className="text-gray-800 italic bold">
          Matheus
        </Text>
        <Text variant="xs" className="text-gray-500">
          saagas.code@gmail.com
        </Text>

      </div>
      <ul className="flex gap-2.5">
        <li><a className={linkClassName} href="https://www.linkedin.com/in/matheus-almeida8819/"  target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a className={linkClassName} href="https://github.com/saagas-code"  target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </footer>
  )
}
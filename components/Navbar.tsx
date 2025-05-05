import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0  py-4 px-8 bg-white shadow-sm z-[9999]">
      <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center ">
          <Link href="/" className="logo-black">
            <Image src="/assets/img/logo-top-black.png" alt="AGAPAO" width={80} height={40}/>
          </Link>
          <span className="hidden md:block border-l-2 border-black ml-4 pl-4 text-black font-bold">AGAPAO</span>
        </div>
        <ul className="flex space-x-4 md:space-x-8 text-white">
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href="https://agapao.im/music">Worship</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
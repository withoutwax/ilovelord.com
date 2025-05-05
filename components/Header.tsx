import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 flex justify-between items-center py-4 px-8 bg-white shadow-sm z-[9999]">
      <div className={"flex items-center "}>
        <Link href="/" className="logo-black"><Image src="/assets/img/logo-top-black.png" alt={""} width={80} height={80}/></Link>
        <span className="border-l-2 border-black ml-4 pl-4 text-black font-bold">AGAPAO</span>
      </div>
      <ul className="flex space-x-4 text-white">
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/worship"}>Worship</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </header>
  );
}
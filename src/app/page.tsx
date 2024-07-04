import Link from "next/link";
import { Logo } from "./components/Logo";

export default function Home() {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-slate-800 px-2">
          <Logo />
          <Link href="/post/new" className="bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block">
            Nueva consulta
          </Link>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
          lista de posts
        </div>
        <div className="bg-cyan-800 flex items-center h-20">
          Usuario
        </div>
      </div>
      <div className="bg-slate-900">
        Contenido
      </div>
    </div>
  );
}

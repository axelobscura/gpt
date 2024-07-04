"use client"
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./components/Logo";

export default function Home() {
  const [articulo, setArticulo] = useState("");
  const [tema, setTema] = useState("");
  const [keywords, setKeywords] = useState("");
  const nuevaConsulta = (e: any) => {
    e.preventDefault();
    setTema("");
    setKeywords("");
    setArticulo("");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ tema, keywords })
    });
    const data = await response.json();
    setArticulo(data.message);
  }
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-slate-800 px-2">
          <Logo />
          <button className="bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block" onClick={nuevaConsulta}>
            Nueva consulta
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800"></div>
        <div className="bg-cyan-800 flex items-center h-20"></div>
      </div>
      <div className="bg-slate-900 flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-white text-3xl text-upper font-bold mb-4 uppercase font-thin">Generador de contenido sobre concreto</h1>
        <div className="bg-slate-800 w-full block p-4 mb-3">
          <form onSubmit={handleSubmit} className="w-full block p-4">
            <label htmlFor="tema" className="text-white block mb-2">Tema:</label>
            <input type="text" id="tema" name="tema" value={tema} onChange={(e) => setTema(e.target.value)} className="w-full px-2 py-1 rounded-md mb-4 text-slate-900 border-gray-100" />
            <label htmlFor="keywords" className="text-white block mb-2">Palabras clave:</label>
            <textarea id="keywords" name="keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} className="w-full px-2 py-1 rounded-md mb-4 text-slate-900" />
            <button type="submit" className="bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 my-2 rounded-md hover:bg-green-600 transition-colors block">
              GENERAR CONTENIDO
            </button>
          </form>
        </div>
        <div className="bg-slate-700 p-5 rounded-md w-full h-96 overflow-auto text-justify">
          <h3 className="text-white text-3xl w-full block pt-4 pb-0">{tema ? `Tema: ${tema}` : ''}</h3>
          <h3 className="text-white text-3xl w-full block pt-0 pb-3 pb-4">{keywords ? `Palabras clave: ${keywords}` : ''}</h3>
          <p className="font-thin text-2xl">{articulo}</p>
        </div>
      </div>
    </div>
  );
}

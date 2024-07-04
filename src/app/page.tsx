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
      body: JSON.stringify({ tema })
    });
    const data = await response.json();
    setArticulo(data.message);
  }
  return (
    <div className="grid h-screen max-h-screen">
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <Logo />
        <h1 className="text-2xl text-upper font-bold mb-4 uppercase font-thin" style={{
          color: '#333'
        }}>Asistente concreton by IMCYC</h1>
        <div className="p-10 rounded-md w-full overflow-auto text-justify">
          <div dangerouslySetInnerHTML={{__html: articulo}} />
        </div>
        <div className="w-full block p-4 mb-3">
          <form onSubmit={handleSubmit} className="w-full block p-4">
            <input type="text" id="tema" name="tema" value={tema} onChange={(e) => setTema(e.target.value)} className="w-full px-10 py-1 rounded-md mb-4 text-gray-900 border-gray-900 h-90" style={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              borderRadius: '20px'
            }} />
            <button type="submit" className="bg-blue-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 my-2 rounded-md hover:bg-blue-600 transition-colors block">
              <i className="icon icon-arrow-right text-lg text-blue-500"></i>
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

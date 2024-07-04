"use client"
import { useState } from "react";
import Image from 'next/image'
import { Logo } from "./components/Logo";
import { FiArrowUpCircle, FiXCircle } from "react-icons/fi";

export default function Home() {
  const [articulo, setArticulo] = useState("");
  const [tema, setTema] = useState("");
  const [autor, setAutor] = useState(true);
  const [keywords, setKeywords] = useState("");
  const nuevaConsulta = (e: any) => {
    e.preventDefault();
    setTema("");
    setKeywords("");
    setArticulo("");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setAutor(false);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ tema })
    });
    const data = await response.json();
    if(data){
      setAutor(true);
    }
    setArticulo(data.message);
  }
  return (
    <div className="grid h-screen max-h-screen">
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <Logo />
        <h1 className="text-2xl text-upper font-bold mb-4 font-bold" style={{
          color: '#333'
        }}>Asistente concretón by IMCYC</h1>
        <p className="text-gray-400"><small>Por Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
        <p className="text-gray-700"><small>Asistente en tecnología del concreto y del cemento</small></p>
        <div className="p-10 rounded-md w-full overflow-auto text-justify">
          <p>
            { autor ? 
              "" 
            : 
              <Image
                src="/loader.gif"
                width={50}
                height={50}
                alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
                style={{
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            }
          </p>
          <div dangerouslySetInnerHTML={{__html: articulo}} className="articulo" />
        </div>
        <div className="w-full block p-4 mb-3 grid">
          <form onSubmit={handleSubmit} className="w-full block p-4 grid grid-cols-[90%_1fr_1fr]">
            <input type="text" id="tema" name="tema" placeholder="Envía un mensaje a Asistente IMCYC" value={tema} onChange={(e) => setTema(e.target.value)} className="w-full px-10 py-1 rounded-md mb-4 text-gray-900 border-gray-900 h-90" style={{
              backgroundColor: '#f4f4f4',
              padding: '20px',
              borderRadius: '40px'
            }} />
            <button type="submit" className="tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-1 py-2 my-2 rounded-md transition-colors block" style={{
              borderRadius: "50%",
              marginTop: "-10px"
            }}>
              <FiArrowUpCircle className="bg-gray-500 hover:bg-gray-600" style={{
                fontSize: '60px',
                borderRadius: '50%'
              }} />
            </button>
            <button onClick={nuevaConsulta} className="tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-1 py-2 my-2 rounded-md transition-colors block" style={{
              borderRadius: "50%",
              marginTop: "-10px"
            }}>
              <FiXCircle className="bg-red-500 hover:bg-gray-600" style={{
                fontSize: '60px',
                borderRadius: '50%'
              }} />
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

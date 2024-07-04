import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="bg-slate-800 px-2">
      <div className="py-5 text-center block w-full">
        <Image
          src="/logo.svg"
          width={180}
          height={45}
          alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
          style={{
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
    </div>
  );
}
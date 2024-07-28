import Image from 'next/image'

export const Logo = ({ nuevaconsulta } : {nuevaconsulta:any}) => {
  return (
    <div className="px-2">
      <div className="py-5 text-center block w-full">
        <Image
          src="/logo.svg"
          width={250}
          height={45}
          alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
          style={{
            display: 'block',
            margin: '0 auto',
          }}
          onClick={nuevaconsulta}
        />
      </div>
    </div>
  );
}
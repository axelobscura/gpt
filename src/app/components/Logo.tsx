import Image from 'next/image'

export const Logo = () => {
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
        />
        <Image
          src="/concreton.jpg"
          width={170}
          height={45}
          alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
          style={{
            display: 'block',
            margin: '0 auto',
            marginTop: '25px',
            boxShadow: '0 0 10px #777',
            borderRadius: '40px'
          }}
        />
      </div>
    </div>
  );
}
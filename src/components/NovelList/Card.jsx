import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Card = () => {
  return (
    <div className="card border-color-whity from-color-whity hover:border-color-primary hover:from-color-primary group mx-auto items-center justify-center rounded-lg border-2 bg-gradient-to-br to-white shadow-md shadow-slate-700 transition-all duration-500 hover:scale-105 hover:to-blue-500 active:scale-110">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/background/background-1.webp"
          alt="Novel"
          width={350}
          height={350}
          className="img-card rounded-t-lg"
        />
        <h3
          className="text-md title group-hover:text-color-whity text-color-dark card-title p-4 font-bold transition-all duration-500 md:text-xl"
          title="Novel"
        >
          Novel
        </h3>
      </Link>
    </div>
  );
}

export default Card
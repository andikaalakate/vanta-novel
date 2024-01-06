import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/background/background-1.webp"
            className="w-full" alt='...' width={1280} height={720}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/background/background-2.webp"
            className="w-full" alt='...' width={1280} height={720}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/background/background-3.webp"
            className="w-full" alt='...' width={1280} height={720}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide4" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="/background/background-4.webp"
            className="w-full" alt='...' width={1280} height={720}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide3" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel
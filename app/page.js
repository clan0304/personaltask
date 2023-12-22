import Image from 'next/image';
import Picture1 from '../images/picture1.png';
import Picture2 from '../images/picture2.jpg';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-96 sm:h-[600px] lg:h-[100vh]">
        <div className="absolute w-full top-0 left-0 z-20">
          <Navbar />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <p className="text-white text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-lato whitespace-nowrap my-3">
            Lifecare Essendon
          </p>
          <p className="text-white text-[10px] xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-lato whitespace-nowrap">
            Leaders in physiotherapy and sports medicine
          </p>
        </div>
        <div className="z-0">
          <Image
            className="brightness-90"
            src={Picture1}
            alt="Picture1"
            fill
            objectFit="fill"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="bg-yellow text-black font-lato h-96 sm:h-[450px] md:h-[600px] w-full justify-center sm:justify-start sm:w-1/2 flex items-center sm:pl-10 lg:pl-20 text-3xl xs:text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          We lead the
          <br />
          way when it
          <br /> comes to
          <br />
          range, quality
          <br />
          and expertise.
        </div>
        <div className="relative w-full sm:w-1/2  h-96 sm:h-[450px] md:h-[600px]">
          <Image src={Picture2} alt="picture1" fill objectFit="fill" />
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';
import Picture1 from '../images/picture1.png';
import Picture2 from '../images/picture2.jpg';
import Navbar from '../components/Navbar';

import MainSentence from '@/components/MainSentence';

export default function Home() {
  return (
    <main>
      <div className="relative aspect-video w-full">
        <div className="flex flex-col absolute w-full top-0 left-0 z-20">
          <Navbar />
        </div>
        <MainSentence />
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
      <div className="flex flex-col sm:flex-row w-full sm:aspect-video">
        <div className="bg-yellow text-black font-lato w-full justify-center sm:justify-start sm:w-1/2 flex items-center sm:pl-10 lg:pl-20 text-3xl xs:text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold aspect-video">
          We lead the
          <br />
          way when it
          <br /> comes to
          <br />
          range, quality
          <br />
          and expertise.
        </div>
        <div className="relative w-full sm:w-1/2 aspect-video">
          <Image src={Picture2} alt="picture1" fill objectFit="fill" />
        </div>
      </div>
    </main>
  );
}

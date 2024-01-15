import Image from 'next/image';
import Picture1 from '../images/picture1.png';
import Picture2 from '../images/picture2.jpg';
import Navbar from '../components/Navbar';

import MainSentence from '@/components/MainSentence';
import YellowContainer from '@/components/YellowContainer';

export default function Home() {
  return (
    <main>
      <div className="relative aspect-[4/3] w-full">
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
      <div className="flex flex-col sm:flex-row w-full sm:aspect-[4/3]">
        <YellowContainer />
        <div className="relative w-full sm:w-1/2 aspect-[4/3]">
          <Image src={Picture2} alt="picture1" fill objectFit="fill" />
        </div>
      </div>
    </main>
  );
}

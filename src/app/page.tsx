import Image from 'next/image';
import pfp from "../../image/pfp.jpeg";

export default function Home() {
  return (
    <div className="bg-teal-400 min-h-screen p-8"> {/* Increased padding */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        
        {/* Heading and Text Section with red Border */}
        <div className="w-fit m-[40px] p-4 border-8 border-red-500"> {/* Added border around text */}
          <h1 className="text-[60px] lg:text-[80px] font-black">
            Hey,
            <br />
            My Name is <span className="text-orange-500">Amna Faraz</span>
          </h1>
          <p className="text-[20px] lg:text-[30px] mt-4"> {/* Added margin to separate the text from the heading */}
            I am a Next JS Developer
            <br />
            I am learning AI, Metaverse, and Web 3.0 from GIAIC
          </p>
        </div>
        
        {/* Profile Picture with Orange Border and Red Background */}
        <div className="border-4 border-orange-500 rounded-full p-2 bg-red-500"> {/* Added red background */}
          <Image
            src={pfp}
            alt="Profile Picture"
            width={10000}
            height={10000}
            className="w-[400px] h-[400px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

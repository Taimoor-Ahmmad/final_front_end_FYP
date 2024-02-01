import bannerImage from "../../public/assets/About_Vector.png";
import Image from "next/image";
import AboutVector from "../../public/assets/About_Vertical_Vector.png";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-About_Desktop">
      <Navbar />
      <div className="flex items-center justify-center flex-grow">
        <div className="flex items-center pb-20">
          <div className="mr-5">
            <Image src={AboutVector} width={0} height={190} />
          </div>
          <div className="flex flex-col">
            {/* Flex container for vertical alignment of "About us" content */}
            <h1 className="text-white text-7xl">About us</h1>
            <p className="text-white text-md text-left jusstify-content">
              We are a dedicated team of five individuals
              <br /> with expertise in artificial intelligence,
              <br /> mathematics, education, and software development.
              <br />We are a dynamic team of five passionate individuals
              dedicated
              <br/>
               to revolutionizing education through innovative
              technology.
              <br/>
            </p>
          </div>
        </div>
        <div className="ml-20 pl-20 mt-5 pb-20">
          <Image src={bannerImage} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

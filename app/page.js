import Image from "next/image";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-cover bg-center h-screen bg-Home_Desktop">
        <Navbar />
        <div className="flex justify-between px-8">
          <div className="mr-4">
            <div className="text-white text-6xl mt-20 ml-20">
              Math Genie
              <div className="text-5xl">
                Making Math
                <br />
                Magical!
              </div>
            </div>
            <div className="mt-20 ml-20 ">
              <Button title="Book" className="hover:bg-white"/>
            </div>
          </div>
          <div className="mr-20 ml-20">
            <Image
              src="/assets/main_images.png"
              alt="My Image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}

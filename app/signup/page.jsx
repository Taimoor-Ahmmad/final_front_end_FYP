import Image from "next/image";
import UserInput from "./components/UserInput";
import ContactForm from "./components/ContactForm";
// import Button from "./components/Button";
import bannerImage from "../../public/assets/Signup_Vector.png";
export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-Signup_Desktop ">
        <div className="flex flex-col items-center">
          <Image src={bannerImage} width={400} height={400} />
          <h1 className=" text-white text-5xl mr-20 mt-10">Roll the Carpet!</h1>
          <br />
          <h1 className="text-white">- - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</h1>
        </div>
        <div className="signup-contianer ml-20 pl-20 pt-5">
          <ContactForm/>
        </div>
      </div>
    </>
  );
}

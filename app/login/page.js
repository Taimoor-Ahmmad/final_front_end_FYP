import Image from "next/image";
import bannerImage from "../../public/assets/Login_Vector.png";
// import Button from "..";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-Login_Desktop">
      <div className="flex flex-col items-center">
        <Image src={bannerImage} />
        <h1 className=" text-white text-5xl mr-20 mt-10">Glad You are back</h1>
        <br/>
        <h1 className="text-white">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  </h1>
      </div>
      <div className="form-container ">
        <ContactForm />
      </div>
    </div>
  );
}

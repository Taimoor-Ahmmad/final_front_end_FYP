
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import bannerImage from "../../public/assets/Forgot_Vector.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-Forgot_Desktop">
      <div className="flex flex-col items-center">
        <Image src={bannerImage} width={450} height={450} />
        <h1 className=" text-white text-6xl mr-20 mt-10">No Worries!</h1>
        <br/>
      </div>
      <div className="forget-container">
        <ContactForm />
      </div>
    </div>
  );
}

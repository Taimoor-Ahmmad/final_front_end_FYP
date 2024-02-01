import bannerImage from "../../public/assets/Contact_Vector.png";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-Contact_Desktop">
      <div className="flex flex-col items-center">
        <Image src={bannerImage} width={500} height={500} />
        <h1 className=" text-white text-6xl mr-20 mt-10">Feeling Stuck?</h1>
        <br />
        <h1 className="text-white">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </h1>
        <h2 className="text-white text-2xl mr-5">Don't worry</h2>
      </div>
      <div className="form-container">
        <ContactForm />
      </div>
    </div>
  );
}

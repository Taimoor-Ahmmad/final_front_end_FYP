import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="logo">
          <Image
            src="/assets/logo.png"
            alt="My Image"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex ml-20 mr-20 mb-7 space-x-20 mt-8">
          <li className=" text-white  font-normal font-['Arial'] text-2xl mr-4 space-x-6">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sky-500 text-2xl mr-4">
            <Link href="/about_us">About Us</Link>
          </li>
          <li className="text-white text-2xl mr-4">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-white text-2xl mr-4">
            <Link href="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 mr-20 mb-8 pt-10">
        <Link href={"/login"}>
          <Button title={"Login"} />
        </Link>
        <Link href={"/signup"}>
          <Button title={"Sign Up"} />
        </Link>
      </div>
      {/* <div className="mt-20 ml-20 ">
        <Button title="Book" className="hover:bg-white" />
      </div> */}
    </nav>
  );
};

export default Navbar;

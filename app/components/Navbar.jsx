// components/Navbar.jsx
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
        <ul className="flex space-x-8 justify-center mt-6 ml-20 mr-20 mb-8">
          <hr />
          <li className="text-sky-500 text-[29.17px] font-normal font-['Arial'] text-2xl">
            <Link href="/">Home</Link>
          </li>
          <hr />
          <li className="text-white text-2xl">
            <Link href="/about_us">About Us</Link>
          </li>
          <hr />
          <li className="text-white text-2xl">
            <Link href="/services">Services</Link>
          </li>
          <hr />
          <li className="text-white text-2xl">
            <Link href="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 mr-20 mb-8 pt-4">
      <Link href="/login">
        <Button title={"Login"} />
        </Link>
        <Link href="/signup">
            <Button title={"Sign Up"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
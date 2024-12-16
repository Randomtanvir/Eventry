import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image src={Logo} alt="Eventry-logo" className="h-[45px]" />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <Link href="/">About</Link>
          <Link href="/">Contact Us</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

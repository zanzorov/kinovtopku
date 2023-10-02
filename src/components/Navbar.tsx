import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
        <Link href="/" className="text-base md:text-2xl uppercase flex items-center">
          <Image src={"/kino.png"} width={40} height={40} alt={"head image"} />
          Кино<span className="text-red-600">в</span>топку
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

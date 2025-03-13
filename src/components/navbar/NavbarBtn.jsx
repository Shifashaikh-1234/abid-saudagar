import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className=" px-2 py-2 rounded-full text-xl font-bold mr-3 ml-3 font-body text-black  flex items-center gap-3  bg-white transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact" className="sm:text-xs lg:text-xl">
        Meeting
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;

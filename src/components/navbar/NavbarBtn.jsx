

const NavbarBtn = () => {
  return (
     <div>
    
    <div className="mr-6 inline-flex items-center space-x-2 sm:hidden font-body font-bold lg:flex">
    <p className="text-md font-body text-black whitespace-nowrap">Press</p>
  
    <img src="../../public/images/da4klgpw.png" alt="S key" className="h-[45px] w-13  mix-blend-darken rounded-md shadow-orange"/>
    <p className="text-md font-body text-black whitespace-nowrap">to Schedule Calendly Meeting </p>
    </div>
    
    
    < div className="mr-6 flex flex-row lg:hidden sm:block font-body font-bold">
     <p className="text-md  font-body text-black whitespace-nowrap">Schedule</p>
     <p className="text-md  text-black font-body whitespace-nowrap">Meeting</p>
     </div>
     
     </div>
    
  );
};

export default NavbarBtn;

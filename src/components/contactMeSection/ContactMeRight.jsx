import ContactInfo from "./ContactInfo";
const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8  sm:mr-2 lg:mr-8 lg:ml-8">
      <img
        src="https://res.cloudinary.com/dlqldp4wi/image/upload/v1741516559/abidLogo_t1ti9w.jpg"
        alt="email image"
        className="max-w-[250px] rounded-full mr-8 lg:block sm:hidden shadow-cyanshadow"
      />
      <ContactInfo />
    </div>
  );
};

export default ContactMeRight;

import { Header } from "../common/Header";
import ContactAnimate from "./ContactAnimate";
import ContactForm from "./ContactForm";
import MyDetails from "./MyDetails";
import RightSection from "./RightSection";

const Contact = () => {
  return (
    <div id="Contact" className="py-16">
      <Header>Contact</Header>
      <ContactAnimate>
        <div className="flex-1 w-full sm:mx-2 mx-0 md:w-1/2 my-12 p-2 shadow-inner shadow-sky-300 rounded-md">
          <div className="bg-blueTints p-8 rounded-lg w-full">
            <ContactForm />
          </div>
        </div>
        <RightSection />
      </ContactAnimate>

      <MyDetails />
    </div>
  );
};

export default Contact;

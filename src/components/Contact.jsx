import { Buttons } from "./common/Button";
import { Header } from "./common/Header";

const Contact = () => {
  return (
    <div id="Contact" className="py-16">
      <Header>Contact</Header>
      <div className="w-full flex sm:flex-row flex-col justify-around items-center gap-6">
        {/* left section */}
        <div className="w-1/2 my-12 p-2 shadow-inner shadow-sky-300 rounded-md">
          <div className="bg-blueTints p-8 rounded-lg w-full">
            <form
              action=""
              className="flex flex-col items-start justify-center gap-6"
            >
              <div className="flex flex-col w-full">
                <label
                  className="text-white font-itim mb-3 text-2xl"
                  htmlFor="Name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="Name"
                  placeholder="enter your good name"
                  className="w-full bg-blueMagenta shadow-inner shadow-sky-700 border border-slate-200 rounded-md px-4 py-2 focus:shadow-md focus:shadow-white text-white font-itim text-xl tracking-wider transition-all duration-700"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="text-white font-itim mb-3 text-2xl"
                  htmlFor="Email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="enter your email"
                  className="w-full bg-blueMagenta shadow-inner shadow-sky-700 border border-slate-200 rounded-md px-4 py-2 focus:shadow-md focus:shadow-white text-white font-itim text-xl tracking-wider transition-all duration-700"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="text-white font-itim mb-3 text-2xl"
                  htmlFor="Message"
                >
                  your message:
                </label>
                <textarea
                  placeholder="what you want to say?"
                  id="Message"
                  rows="5"
                  className="w-full bg-blueMagenta shadow-inner shadow-sky-700 border border-slate-200 rounded-md px-4 py-2 focus:shadow-md focus:shadow-white text-white font-itim text-xl tracking-wider transition-all duration-700"
                />
              </div>
              <Buttons
                type={"button"}
                className="bg-buttonBg w-3/4 mx-auto jump-animate"
              >
                Send
              </Buttons>
            </form>
          </div>
        </div>
        {/* right section */}
        <div></div>
      </div>
    </div>
  );
};

export default Contact;

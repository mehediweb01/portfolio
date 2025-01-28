import { Buttons } from "./common/Button";
import { Header } from "./common/Header";
import { contactInfo } from "../db";
const Contact = () => {
  return (
    <div id="Contact" className="py-16">
      <Header>Contact</Header>
      <div className="w-full flex md:flex-row flex-col justify-center items-center gap-8 ">
        {/* left section */}
        <div className="flex-1 w-full sm:mx-2 mx-4 md:w-1/2 my-12 p-2 shadow-inner shadow-sky-300 rounded-md">
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
        <div className="flex-1 w-full md:w-1/2">
          <div className="px-8 py-4">
            <h1 className="font-itim text-4xl sm:text-5xl text-center text-black dark:text-header ">
              Md. Mehedi Hasan
            </h1>
            <p className="font-itim text-xl sm:text-2xl text-center text-black dark:text-whites">
              Front-end web developer
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-3 justify-self-center gap-y-8 px-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2 flex-col"
              >
                <img
                  src={item.icon}
                  alt={`${"icons" + index}`}
                  className="size-16"
                />

                <h2 className="font-inter font-bold text-3xl lg:text-4xl text-blueMagenta dark:text-whites">
                  {item.title}
                </h2>
                <p className="font-inter text-black font-bold text-sm lg:text-base leading-6 dark:text-sky-400 ">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Contact;

"use client";

import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { contactInfo, myInfo } from "../db";
import BoxComponent from "./common/Box";
import { Buttons } from "./common/Button";
import { Header } from "./common/Header";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const nameCheck = !name.trim();
  const emailCheck = !email.trim();
  const messageCheck = !message.trim();

  const sendEmail = (e) => {
    e.preventDefault();
    // form validation && send email
    const errors = [];

    if (nameCheck) errors.push("Please enter a valid name");
    if (emailCheck || !email.match(pattern))
      errors.push("Please enter a valid email");
    if (messageCheck) errors.push("Please enter a valid message");

    if (errors.length > 0) {
      toast.error(errors.join("\n"), {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { whiteSpace: "pre-line" },
      });
    } else {
      emailjs
        .send(
          "service_y24b0y5",
          "template_7e7jyog",
          {
            user_name: name,
            user_email: email,
            reply_to: email,
            message: message,
          },
          "Uxt8EF3_4CCtYmOUA"
        )
        .then(
          () => {
            setName("");
            setEmail("");
            setMessage("");
            toast.success("SUCCESS!");
          },
          (error) => {
            toast.error("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div id="Contact" className="py-16">
      <Header>Contact</Header>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
        className="w-[90%] mx-auto flex md:flex-row flex-col justify-center items-start gap-8"
      >
        {/* left section */}
        <div className="flex-1 w-full sm:mx-2 mx-0 md:w-1/2 my-12 p-2 shadow-inner shadow-sky-300 rounded-md">
          <div className="bg-blueTints p-8 rounded-lg w-full">
            <form
              onSubmit={sendEmail}
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
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="user_name"
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="user_email"
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
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  rows="5"
                  className="w-full bg-blueMagenta shadow-inner shadow-sky-700 border border-slate-200 rounded-md px-4 py-2 focus:shadow-md focus:shadow-white text-white font-itim text-xl tracking-wider transition-all duration-700"
                />
              </div>
              <Buttons
                type={"submit"}
                className="bg-transparent !text-sky-300 font-serif font-thin tracking-[5px] w-3/4 mx-auto jump-animate hover:shadow-btn transition-all duration-300 relative z-20 group after:content-[''] after:h-[3px] after:hover:h-[5%] after:w-full after:transition-all after:duration-400 sm:after:hover:animate-spin after:bg-sky-300 after:-z-50 after:absolute after:bottom-0 after:left-0 sm:after:hover:rounded-lg after:animate-indeterminate-bar"
                variant="outline"
              >
                Send
              </Buttons>
            </form>
          </div>
        </div>
        {/* right section */}
        <div className="flex-1 w-full md:w-1/2 mt-0 sm:mt-6">
          <div className="px-8 py-4">
            <h1 className="font-itim text-4xl sm:text-5xl text-center text-black dark:text-header ">
              Md. Mehedi Hasan
            </h1>
            <p className="font-itim text-xl sm:text-2xl text-center text-black dark:text-whites">
              Front-end web developer
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-3 justify-self-stretch gap-y-8 px-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2 flex-col"
              >
                <Image
                  src={item.icon}
                  alt={`${"icons" + index}`}
                  className="size-16 object-contain"
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
          <div className="sm:block hidden mt-4 px-4 py-2 rounded-md shadow-inner shadow-black dark:shadow-activeColor ">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "backInOut" }}
            >
              <Image
                src="/contact.jpg"
                alt="contact image"
                className="h-[300px] w-full rounded-lg shadow-md shadow-sky-200 dark:shadow-none animate-pulse duration-500 transition-all"
                height={500}
                width={500}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* my details */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-[90%] mx-auto">
        {myInfo.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, translateY: "150px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
            key={index}
          >
            <BoxComponent
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

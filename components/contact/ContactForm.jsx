"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import { Buttons } from "../common/Button";

const ContactForm = () => {
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
    <form
      onSubmit={sendEmail}
      className="flex flex-col items-start justify-center gap-6"
    >
      <div className="flex flex-col w-full">
        <label className="text-white font-poppins mb-3 text-2xl" htmlFor="Name">
          Name:
        </label>
        <input
          type="text"
          id="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="user_name"
          placeholder="enter your good name"
          className="w-full bg-blueMagenta shadow-inner shadow-sky-700 border border-slate-200 rounded-md px-4 py-2 focus:shadow-md focus:shadow-white text-white font-poppins text-xl tracking-wider transition-all duration-700"
        />
      </div>
      <div className="flex flex-col w-full">
        <label
          className="text-white font-poppins mb-3 text-2xl"
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
          className="w-full bg-blueMagenta shadow-inner shadow-sky-700 border border-slate-200 rounded-md px-4 py-2 focus:shadow-md focus:shadow-white text-white font-poppins text-xl tracking-wider transition-all duration-700"
        />
      </div>
      <div className="flex flex-col w-full">
        <label
          className="text-white font-poppins mb-3 text-2xl"
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
          className="w-full bg-blueMagenta shadow-inner shadow-sky-700 border border-slate-200 rounded-md px-4 py-2 focus:shadow-md focus:shadow-white text-white font-poppins text-xl tracking-wider transition-all duration-700"
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
  );
};

export default ContactForm;

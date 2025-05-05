import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactSvg from "./ContactSvg";
import { useState, FormEvent, useRef } from "react";
const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const form = useRef<HTMLFormElement | null>(null);
  const isInView = useInView(ref, { margin: "-200px" });
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current as HTMLFormElement,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };
  return (
    <div className="h-full flex flex-col gap-8 justify-between  md:flex-col lg:gap-[30px] lg:flex-row sm:flex-col md:gap-36"  ref={ref}>
      {/* Contact Section left */}
      <div className="w-full h-full flex items-center justify-center p-4 md:w-full md:h-[70%] lg:w-1/2 sm:w-full ">
        <motion.form
          ref={form}
          variants={listVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          onSubmit={sendEmail}
          className="w-full flex flex-col gap-5 bg-[rgba(2,2,45,0.187)] p-12 rounded-4xl xl:w-full"
        >
          <motion.h1 variants={listVariant} className="text-4xl font-semibold">
            {"Let's keep in touch"}
          </motion.h1>

          <motion.div variants={listVariant} className="flex flex-col gap-2">
            <label>Name</label>
            <input
              name="user_username"
              className="p-2 rounded-md border-none bg-white text-gray-600"
              type="text"
              placeholder="Enter your name"
            />
          </motion.div>
          <motion.div variants={listVariant} className="flex flex-col gap-2">
            <label>Email</label>
            <input
              name="user_email"
              className="p-2 rounded-md border-none bg-white text-gray-600"
              type="email"
              placeholder="example@gmail.com"
            />
          </motion.div>
          <motion.div variants={listVariant} className="flex flex-col gap-2">
            <label>Message</label>
            <textarea
              name="user_message"
              className="p-2 rounded-md border-none bg-white text-gray-900"
              rows={10}
              placeholder="Write your message..."
            ></textarea>
          </motion.div>
          <motion.button
            variants={listVariant}
            className="bg-[#dd4c62] text-white p-4 border-none rounded-2xl"
          >
            Send
          </motion.button>
          {success && (
            <span className="text-green-600">Your message has been sent!</span>
          )}
          {error && <span className="text-red-600">Something went wrong!</span>}
        </motion.form>
      </div>
      {/* Contact Section right */}
      <div className="w-full h-[30%] flex items-center justify-center bg-[rgba(2,2,45,0.187)] rounded-full rounded-br-none rounded-tl-none md:w-[100%] md:h-[30%] lg:w-1/2 lg:h-[80%] sm:w-full sm:h-[30%]">
        <ContactSvg />
      </div>
    </div>
  );
};
export default Contact;

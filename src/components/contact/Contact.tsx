import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactSvg from "./ContactSvg";
import { useState, FormEvent, useRef } from "react";
import { listVariant } from "../../utils/variants";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { ref, isInView } = useInViewAnimation();
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
    <div
  className="min-h-screen flex flex-col-reverse gap-12 items-center justify-center px-4 py-10 md:flex-col-reverse lg:flex-row lg:gap-24 xl:gap-36"
  ref={ref}
>
  {/* Left: Form Section */}
  <div className="w-full max-w-xl flex items-center justify-center">
    <motion.form
      ref={form}
      variants={listVariant}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      onSubmit={sendEmail}
      className="w-full h-full flex flex-col gap-5 bg-[rgba(2,2,45,0.187)] p-6 sm:p-10 rounded-3xl"
    >
      <motion.h1
        variants={listVariant}
        className="text-3xl sm:text-4xl font-semibold text-white"
      >
        Let's keep in touch
      </motion.h1>

      <motion.div variants={listVariant} className="flex flex-col gap-2">
        <label className="text-white">Name</label>
        <input
          name="user_username"
          className="p-3 rounded-md bg-white text-gray-700"
          type="text"
          placeholder="Enter your name"
          required
        />
      </motion.div>

      <motion.div variants={listVariant} className="flex flex-col gap-2">
        <label className="text-white">Email</label>
        <input
          name="user_email"
          className="p-3 rounded-md bg-white text-gray-700"
          type="email"
          placeholder="example@gmail.com"
          required
        />
      </motion.div>

      <motion.div variants={listVariant} className="flex flex-col gap-2">
        <label className="text-white">Message</label>
        <textarea
          name="user_message"
          className="p-3 rounded-md bg-white text-gray-800"
          rows={6}
          placeholder="Write your message..."
          required
        ></textarea>
      </motion.div>

      <motion.button
        variants={listVariant}
        className="bg-[#dd4c62] text-white p-3 rounded-xl hover:opacity-90 transition"
      >
        Send
      </motion.button>

      {success && (
        <span className="text-green-400">Your message has been sent!</span>
      )}
      {error && <span className="text-red-400">Something went wrong!</span>}
    </motion.form>
  </div>

  {/* Right: SVG Section */}
<div className="hidden lg:flex w-full max-w-xl justify-center items-center">
  <div className="w-full h-full p-4 sm:p-10">
    <ContactSvg />
  </div>
</div>
</div>

  );
};
export default Contact;

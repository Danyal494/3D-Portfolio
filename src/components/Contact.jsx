import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utilts/motion";
import Swal from "sweetalert2";

const Contact = () => {
  const [loading, setloading] = useState(false);
  const [result, setResult] = useState(""); // Added this line

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "35366233-9b05-477f-949a-db2bf9ec9017");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "Your email send Successfully!",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form action="" onSubmit={onSubmit} className="flex mt-12 gap-8 flex-col">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
              placeholder="Whats your name?"
              name="name"
              id=""
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
              placeholder="Whats your email?"
              name="email"
              id=""
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="4"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
              placeholder="Whats do you want to say?"
              name="message"
              id=""
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit   outline-none font-bold rounded-xl shadow-primary text-white shadow-md "
          >
            {loading ? "sending..." : "send"}
          </button>
          <p className="text-white mt-4">{result}</p> {/* Added this line to display the result */}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

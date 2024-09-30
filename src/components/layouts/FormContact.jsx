import Input from '../elements/Input';
import { useRef } from 'react';
import TextArea from '../elements/Textarea';
import { motion, useInView } from 'framer-motion';
import Button from '../elements/Button';

const FormContact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    return (
      <div className="p-3 basis-3/5 text-slate-400 group" ref={ref}>
        <motion.form
          initial={{ opacity: 1 }}
          style={{
            transform: isInView ? "translateX(10px)" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="p-10 bg-gray-800 md:w-[85%] w-screen mx-auto rounded-lg shadow-sm group-hover:shadow-green-500"
        >
          <h1 className="text-center font-bold md:text-3xl text-2xl text-gray-600 group-hover:text-green-500 mb-3">
            Let's influence together
          </h1>
          <p className="text-sm font-roboto mb-6 text-center group-hover:animate-pulse">
            Shoot me your top ideas for content that will blow people away
          </p>
          <motion.div
            initial={{ opacity: 1 }}
            style={{
              transform: isInView ? "none" : "translateX(-75px)",
              opacity: isInView ? 1 : 0,
              transition: "transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="mb-3 relative"
          >
            <Input type="text" id="name" name="name" placeholder="Your Name" />
          </motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            style={{
              transform: isInView ? "none" : "translateX(-50px)",
              opacity: isInView ? 1 : 0,
              transition: "transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="mb-3 relative"
          >
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="mb-3 relative"
          >
            <TextArea
              name="message"
              rows="6"
              placeholder="Type your message here..."
            ></TextArea>
          </motion.div>
          <Button addedClassname="w-1/3 rounded-full bg-green-500 hover:bg-green-600 font-poppins">
            Send
          </Button>
        </motion.form>
      </div>
    );
}

export default FormContact;


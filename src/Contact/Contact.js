import "./Contact.css";
import Button from "../Layout/Button";
import Section from "../Layout/Section";
import LargeCard from "../Layout/LargeCard"
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const form = useRef();
    const [emailSent, setEmailCheck] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mqsi3xj', 'template_xueirxv', form.current, 'm_rpQmXGNlZMfjAY4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setEmailCheck(true);
      };

    return (
        
        <Section id="contact">



            <div className="message-container">
            
            <AnimatePresence mode={"popLayout"}>
            {!emailSent &&
                <motion.div
                initial={{ y: 0, opacity: 1 }}
                exit={{ y:-100, opacity: 0 }}
                >
                <h3>Contact Me</h3>
                <form onSubmit={sendEmail} id="contact-form" className="contact-form" ref={form}>

                    <input type="text" className="form-input" placeholder="Name" name="name"/>
                    <input type="email" className="form-input" placeholder="Email" name="email"/>
                    <textarea className="form-input" rows="5" placeholder="Message" name="message"></textarea>
                    <Button name="Submit" class="no-fill-with-border"></Button>
                </form>
                </motion.div>
            }
            </AnimatePresence>

            <AnimatePresence mode={"popLayout"}>
            {emailSent &&
                <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y:0, opacity:1 }}
                exit={{ opacity: 0 }}
                >
                <div className="verification-message">
                    <h4>Thank you for your message!</h4>
                    <br></br><br></br>
                    <p>I will reply within 1-2 business days. 
                    <br></br>
                    I look forward to speaking with you
                    </p>
                </div>
                </motion.div>
            }
            </AnimatePresence>
            </div>


        </Section>
    )
}
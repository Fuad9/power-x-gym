import {
   Facebook,
   Instagram,
   Twitter,
   WhatsApp,
   YouTube,
} from "@material-ui/icons";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Footer.scss";

const Footer: React.FC = () => {
   return (
      <>
         <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <section className="container">
               <div className="split footer">
                  <div>
                     <ul>
                        <h4>need help?</h4>
                        <li>
                           <a href="#">help center</a>
                        </li>
                        <li>
                           <a href="#">email support</a>
                        </li>
                        <li>
                           <a href="#">live chat</a>
                        </li>
                        <li>
                           <a href="#">get certificates</a>
                        </li>
                        <li>
                           <a href="#">send us feedback</a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <ul>
                        <h4>digital resources</h4>
                        <li>
                           <a href="#">articles</a>
                        </li>
                        <li>
                           <a href="#">e-books</a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4>connect with us</h4>

                     <a href="https://www.facebook.com">
                        <Facebook />
                     </a>
                     <a href="https://www.youtube.com">
                        <YouTube />
                     </a>
                     <a href="https://www.twitter.com">
                        <Twitter />
                     </a>
                     <a href="https://www.whatsapp.com">
                        <WhatsApp />
                     </a>
                     <a href="https://www.instagram.com">
                        <Instagram />
                     </a>
                  </div>

                  <div>
                     <h4>join our newsletter</h4>
                     <h6>
                        get exclusive news, features, updates from my protein
                        gym community
                     </h6>

                     <form action="">
                        <input
                           type="email"
                           name="email"
                           placeholder="Enter your Email"
                           required
                        />
                        <button type="submit">join</button>
                     </form>
                  </div>
               </div>
            </section>
         </ScrollAnimation>
      </>
   );
};

export default Footer;

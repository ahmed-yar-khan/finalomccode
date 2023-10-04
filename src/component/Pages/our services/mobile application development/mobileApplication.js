import { Link } from "react-router-dom"
import "./mobile-application.css"
import "../../../../App.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from "../../../parrelxeffect omc/parrelxeffect";
const MobileApplication = () => {

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  const [refwebsite1, inViewwebsite1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refwebsite2, inViewwebsite2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refwebsite3, inViewwebsite3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return <>
    <section  >

      <div className="container-sectiion1">
        <div className="mobile-app">
          <img className="img-mobile-appli"
            src="/assets/backgroundimg/section-imgs/4631454-removebg-preview.png"
            alt="asd"
            loading="lazy"
          />
        </div>
        <motion.div

          ref={refwebsite1}
          initial="hidden"
          animate={inViewwebsite1 ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 1, ease: "linear" }}
        >


          <div className="heading-mobile-app">
            <h2 className="title-mobile heading-all-component-font-style">Mobile Application Development</h2>
            <div className="para-containner">


              <p className="para-cntent-mobile-appp paragrapg-all-component-font-family">
                Expertise for High-Performance Mobile Apps
                Our seasoned professionals craft high-performance mobile apps with precision.
              </p>
              <p className="para-cntent-mobile-appp paragrapg-all-component-font-family">
                Innovative, User-Centric Mobile Solutions
                We create innovative, robust mobile apps that adhere to modern standards, offering world-class user experiences.
              </p>
              <p className="para-cntent-mobile-appp paragrapg-all-component-font-family">
                Seamless Mobility for Business
                Our mobile apps feature delightful user interfaces and scalability, enabling seamless business mobility.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="second-section">
        <h2 className="heading-mobile-title heading-all-component-font-style">We are Specialized in Mobile App Development Services</h2>
        <div className="backgroung-white-img-content">
          <motion.div

            ref={refwebsite2}
            initial="hidden"
            animate={inViewwebsite2 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 1, ease: "linear" }}
          >

            <div className="content-app-para-contianer">
              <p className="para-mobile-application paragrapg-all-component-font-family">Our expertise shines through in our ability to create intricate, client-specific code.
                With years of experience, we excel in delivering complex solutions.
                Our Technology-as-a-Service offerings continuously evolve to remain at the forefront globally.
                We take pride in our mobile app development skills, specializing in tailored applications.
                Crafting customized code is our forte, ensuring client satisfaction.
                Our commitment to excellence drives us to stay current with the latest technology trends.
                Explore our innovative solutions that are designed to meet your unique needs.
                Partner with us for cutting-edge technology solutions and mobile app development services.
              </p>
              <div className="btn-mobil-application-contact-link">

                <Link to="/contact-us" >
                  <button className="contact-link-mobile-application heading-all-component-font-style">Tell Us About Your Project</button>
                </Link>
              </div>
            </div>
          </motion.div>
          <img className="tec-img"
            src="/assets/backgroundimg/mob-techs.jpg"
            alt="mob-techs"
            loading="lazy"
          />
        </div>
      </div>



      <div className="new-section-main-mobilecontainer">
        <div className="mobile-container" >
          <div className="img-mobile-laptop">
            <img className="img-mobile-lap"
              src="/assets/backgroundimg/features-mobile.png"
              alt="feature-mobile"
              loading="lazy"
            />
          </div>
          <div className="mobile-application-content-container">
            <motion.div

              ref={refwebsite3}
              initial="hidden"
              animate={inViewwebsite3 ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1, ease: "linear" }}
            >

              <div className="content-application-container">
                <h2 className="promise-title heading-all-component-font-style">Our Promise</h2>
                <div>

                  <p className="para-content-mobile-application paragrapg-all-component-font-family">
                    <strong> Your Mobile App Development Partner</strong><br />
                    Our expert app developers specialize in crafting mobile apps for Android,
                    iOS, and hybrid devices, tailored to your needs. With dedicated Project Managers
                    by your side from start to finish, we treat your app as our own, ensuring it aligns
                    perfectly with your vision.<br />
                    <strong>Personalized Planning: </strong><br />
                    Your App, Your Features
                    During planning, our Project Managers collaborate closely
                    with you to define the app's features. We understand your goals
                    and customize our work accordingly, providing the attention your project deserves.

                  </p>
                </div>
                <div>
                  <p className="para-content-mobile-application paragrapg-all-component-font-family">
                    <strong>  Continuous Support: From Development to Launch</strong> <br />
                    Our commitment extends beyond development. We offer ongoing support,
                    troubleshooting, and maintenance throughout the app development journey,
                    ensuring a flawless product for App Store submission.
                    At Online Media Circle, your app's success is our priority. Contact us
                    to discuss your project and experience our dedicated approach to mobile app development.

                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ParallaxComponent />
    </section>
  </>

}
export default MobileApplication
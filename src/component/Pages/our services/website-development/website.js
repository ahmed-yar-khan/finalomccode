import "./web.css"
import "../../../../App.css"
import mux from "mux-embed";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from "../../../parrelxeffect omc/parrelxeffect";
const WebDesgin = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            const initTime = Date.now();
            videoRef.current.addEventListener('play', () => {
                mux.monitor(videoRef.current, {
                    debug: true,
                    data: {
                        env_key: "ENV_KEY",
                        player_name: "Main Player",
                        player_init_time: initTime,
                    },
                });
            });
        }
    }, [videoRef]);

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
    const [refwebsite4, inViewwebsite4] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refwebsite5, inViewwebsite5] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refwebsite6, inViewwebsite6] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refwebsite7, inViewwebsite7] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });



    return <>
        <div className="section-website">
            <div className="section-website-solution web-img">
                <div className="content-container-display" >
                    <motion.div

                        ref={refwebsite1}
                        initial="hidden"
                        animate={inViewwebsite1 ? "visible" : "hidden"}
                        variants={itemVariants}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="content-website-section1">
                            <h2 className="website-soloution-title heading-all-component-font-style">
                                Creative Website Design &  <br /> Development
                            </h2>
                            <p className="paragrapg-all-component-font-family" >
                                Our team of dedicated and passionate designers and developers
                                are experts at crafting exceptional websites. We take pride
                                in our meticulous approach, carefully shaping every design
                                element to captivate users and inspire them to explore. Our
                                commitment to excellence shines through in every pixel, ensuring
                                that each website we create is not just functional, but a work
                                of art that truly engages and invites users to delve deeper into
                                the digital experience.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="section2-web-soloution-container">
                <div className="web-soloution-left-right-video-content">
                    <div className="video-white">


                        <video
                            className="white-background-video"
                            loop
                            autoPlay
                            playsInline
                            muted
                            data-wf-ignore="true"
                            ref={videoRef}
                            src='/assets/video/computer-white-background.mp4'
                            loading="lazy"
                            preload="none"
                            poster="/assets/video/computer.PNG"
                        />
                    </div>
                    <div className="section2-web-soloution-content">
                        <motion.div

                            ref={refwebsite2}
                            initial="hidden"
                            animate={inViewwebsite2 ? "visible" : "hidden"}
                            variants={itemVariants}
                            transition={{ duration: 1, ease: "linear" }}
                        >
                            <h2 style={{ marginBottom: "10px", fontWeight: "900" }}>Enhancing Website Experience for Impactful Digital Marketing</h2>
                            <h5 className="h5-web-soloution-content paragrapg-all-component-font-family">Just like a first date,
                                website experience leaves a lasting impression. We prioritize responsive design,
                                ensuring users find what they need easily. Our streamlined design and development
                                process merges exceptional design with effective strategy because your website is
                                your most powerful digital marketing tool.</h5>
                            <div className="double-para-section2">
                                <p className="para-sec-web-content paragrapg-all-component-font-family">
                                    We tailor our building process to your unique workflow, ensuring customized
                                    recommendations. Your brand inspires us, and we focus on creating a user-friendly
                                    interface that guides customers effectively.
                                </p>
                                <p className="para-sec-web-content paragrapg-all-component-font-family">
                                    Your brand is what guides us in everything we do. We think of your customers'
                                    experience as we develop an interface that guides them down the right path
                                    without getting in their way.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="section2-background">
                <div className="web-soloution-left-right-video-content">

                    <div className="section2-web-soloution-content-background-black ">
                        <motion.div

                            ref={refwebsite3}
                            initial="hidden"
                            animate={inViewwebsite3 ? "visible" : "hidden"}
                            variants={itemVariants}
                            transition={{ duration: 1, ease: "linear" }}
                        >
                            <h5 className="h5-web-soloution-contentd heading-all-component-font-style">Exceptional Service and Innovative Solutions</h5>
                            <div className="double-para-section2">
                                <p className="para-sec-web-content paragrapg-all-component-font-family">
                                We specialize in crafting user-friendly and intuitive solutions. Our team 
                                is your smart and dependable partner in problem-solving. Together, we achieve excellence.
                                </p>

                            </div>
                        </motion.div>
                    </div>
                    <div className="video-black">
                        <video
                            className="video-side"
                            loop
                            autoPlay
                            playsInline
                            muted
                            data-wf-ignore="true"
                            ref={videoRef}
                            src="/assets/video/clock-black-background.mp4"
                            loading="lazy"
                            preload="none"
                            poster="/assets/video/clockweb.PNG"
                        />
                    </div>
                </div>
            </div>

            <div className="back-monitor">
                <div className="si-container-card-animated">

                    <div className="row">
                        <div className='display-responsive'>



                            <div className="col-md-3 col-sm-6">
                                <motion.div

                                    ref={refwebsite4}
                                    initial="hidden"
                                    animate={inViewwebsite4 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >
                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/content.png' alt='video icon' loading="lazy" />
                                        </div>
                                        <h3>Effective Content Strategy</h3>
                                        <p className="paragrapg-all-component-font-family">
                                        We focus on clear, actionable content that guides users to lead-generation points. Collaborating with you, we refine your positioning and messaging for maximum impact.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <motion.div

                                    ref={refwebsite5}
                                    initial="hidden"
                                    animate={inViewwebsite5 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >
                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/cms.png' alt='video icon' loading="lazy" />
                                        </div>
                                        <h3>Seamless Integrations and User-Friendly CMS</h3>
                                        <p className="paragrapg-all-component-font-family">
                                        We seamlessly integrate e-commerce platforms, APIs, gateways, and web services to create robust and user-friendly web applications. Our admin interfaces are intuitive and easy to manage.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>

                        <div className='display-responsive'>

                            <div className="col-md-3 col-sm-6">
                                <motion.div
                                    ref={refwebsite6}
                                    initial="hidden"
                                    animate={inViewwebsite6 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >

                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/web-desgin-direction.webp' alt='video icon' loading="lazy" />
                                        </div>
                                        <h3>Customized Responsive UX/UI Design</h3>
                                        <p className="paragrapg-all-component-font-family">
                                        Our team crafts tailored, responsive, and functional UX/UI designs that extend and maintain brand consistency throughout the customer experience.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <motion.div

                                    ref={refwebsite7}
                                    initial="hidden"
                                    animate={inViewwebsite7 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >

                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/app_development+tecnology.png' alt='video icon' loading="lazy" />
                                        </div>
                                        <h3>Tech-Savvy Development Experts</h3>
                                        <p className="paragrapg-all-component-font-family ">
                                        Our experienced team can work with a wide range of technologies to solve industry-specific challenges. We prioritize both current needs and future-proofing, delivering solutions with dedication and expertise.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ParallaxComponent />
        </div>



    </>
}
export default WebDesgin
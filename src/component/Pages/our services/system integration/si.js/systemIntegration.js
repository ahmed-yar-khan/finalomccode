import React from 'react';
import './si.css';
import "../../../../../App.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from '../../../../parrelxeffect omc/parrelxeffect';
const SystemIntegration = () => {

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


  return (
    <div className="main-container-">
      <div className="si-main-container">
        <div className="si-child-container">
          <div className="overview-container-si">
            <div className="border-radius">
              <div className="img-si">
                <img className="si-img"
                  src="/assets/backgroundimg/section-imgs/about-us.png"
                  alt="si"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="content-main">
              <motion.div

                ref={refwebsite1}
                initial="hidden"
                animate={inViewwebsite1 ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="para-content-div-child-container">
                  <h2 className="para-content-heading-si heading-all-component-font-style ">System Integration</h2>
                  <p className="para-content-si paragrapg-all-component-font-family">
                    Achieving business success demands expert technical solutions with high
                    availability to mitigate risks. At System Integrations, we specialize
                    in crafting complex information systems, custom business solutions, and
                    architectures. We seamlessly integrate hardware, communications, and
                    enterprise-wide Service-Oriented Architectures, streamlining business
                    processes and data access through a unified interface.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      <div className='si-data-img-div'>
        <img className='si-data-img'
          src='/assets/backgroundimg/si.png'
          alt='si-img'
          loading="lazy"
        />
      </div>
      <div className="si-container-card-animated">

        <div className="row">
          <div className='display-responsive'>


            <div className="col-md-3 col-sm-6">
              <motion.div

                ref={refwebsite2}
                initial="hidden"
                animate={inViewwebsite2 ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="service_box">
                  <div className="service_icon">
                    <img className='icon-img-si-card' src='/assets/icon/video (1).png' alt='video icon' loading="lazy" />
                  </div>
                  <h3 className='heading-all-component-font-style '>Automated Data Integration Expertise</h3>
                  <p className='paragrapg-all-component-font-family'>
                  Our services encompass automated integration for applications, file formats, and databases, guaranteeing data integrity. We seamlessly integrate various data types, employ best practices, and implement proven version control protocols for optimal efficiency.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-3 col-sm-6">
              <motion.div

                ref={refwebsite3}
                initial="hidden"
                animate={inViewwebsite3 ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="service_box">
                  <div className="service_icon">
                    <img className='icon-img-si-card' src='/assets/icon/video (2).png' alt='video icon' loading="lazy" />
                  </div>
                  <h3 className='heading-all-component-font-style '>Efficient API Integration Solutions</h3>
                  <p className='paragrapg-all-component-font-family'>
                  Our API integration services follow best practices, seamlessly incorporating custom, open-source, and third-party APIs to enhance web service functionality and ensure data format synchronization across applications.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

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
                    <img className='icon-img-si-card' src='/assets/icon/video (3).png' alt='video icon' loading="lazy" />

                  </div>
                  <h3 className='heading-all-component-font-style '>EAI Solutions for Seamless Enterprise Communication</h3>
                  <p className='paragrapg-all-component-font-family'>
                  Our specialists offer Enterprise Application Integration (EAI) solutions, enabling smooth communication among vital business platforms
                  </p>
                </div>
              </motion.div>
            </div>
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
                    <img className='icon-img-si-card' src='/assets/icon/video (4).png' alt='video icon' loading="lazy" />

                  </div>
                  <h3 className='heading-all-component-font-style '>End-to-End System Integration for Seamless Operations</h3>
                  <p className='paragrapg-all-component-font-family'>
                  We offer comprehensive system integration services, including integration with existing IT infrastructures and technologies, ensuring streamlined and coordinated operational processes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ParallaxComponent />
    </div>
  );
};

export default SystemIntegration;
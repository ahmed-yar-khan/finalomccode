import './digital-merketing.css'; 
import '../../../../App.css';
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from '../../../parrelxeffect omc/parrelxeffect';
export const DigitalSolution = () => {

  const data = [
    {
      img: '/assets/backgroundimg/backgroung/video.png',
      heading: 'Video Advertising',
      text:
        'In contrast to traditional TV ads, online video advertising has the power to swiftly engage a vast audience across multiple platforms, all at a significantly lower cost to businesses. Take charge of your ads and capture attention in the digital realm.',
    },
    {
      img: '/assets/backgroundimg/ppcbgremover.png',
      heading: 'PPC Remarketing',
      text:
        'Unlock the potential of PPC Remarketing services, strategically crafted to draw in consumers from dynamic platforms. Tailor your ad remarketing strategy based on your unique business goals and targets. Own your advertising game with results-driven approaches.',
    },
    {
      img: '/assets/backgroundimg/backgroung/laptop-iphone-mockup-logos.png',
      heading: 'Social Advertising',
      text:
        'Embrace the power of social advertising to widen your online reach and attract a multitude of consumers. Our tailored content strategy is designed to elevate your business ROI, ensuring a strong digital presence and impactful results.',
    },
    {
      img: '/assets/backgroundimg/backgroung/content-prepration.png',
      heading: 'Content Preparation',
      text:
        'Craft content that is not only clear and compelling but also effortlessly delivers your message with impact. Our streamlined content management processes ensure time efficiency, reduce confusion, minimize errors, and qualify for seamless revisions. Elevate your messaging game for enhanced engagement and results.',
    },
  ];

    const itemVariants = {
      hidden: { y: 200, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    };

    const [refdigital1, inViewdigital1] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });



  const cardData = [
    { id: 1, title: 'Brand Monitoring' },
    { id: 2, title: 'Setup & Custom Profile Design' },
    { id: 3, title: 'Social Media Management' },
    { id: 4, title: 'Social Media Contents' },
  ];

  const useParallaxTiltEffect = () => {
    const handleMouseMove = (event, container, tiltEffect) => {
      const { offsetX, offsetY } = event;
      let X;
      let Y;

      if (tiltEffect === 'reverse') {
        X = ((offsetX - container.offsetWidth / 2) / 3) / 3;
        Y = (-(offsetY - container.offsetHeight / 2) / 3) / 3;
      } else if (tiltEffect === 'normal') {
        X = (-(offsetX - container.offsetWidth / 2) / 3) / 3;
        Y = ((offsetY - container.offsetHeight / 2) / 3) / 3;
      }

      const rX = X.toFixed(2);
      const rY = Y.toFixed(2);
      const bY = `${80 - (X / 4).toFixed(2)}%`;
      const bX = `${50 - (Y / 4).toFixed(2)}%`;

      container.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
      container.style.backgroundPosition = `${bX} ${bY}`;
    };

    const handleMouseEnter = (container) => {
      container.classList.add('container--active');
    };

    const handleMouseLeave = (container) => {
      container.classList.remove('container--active');
    };

    return { handleMouseMove, handleMouseEnter, handleMouseLeave };
  };


  const { handleMouseMove, handleMouseEnter, handleMouseLeave } = useParallaxTiltEffect();

  useEffect(() => {
    const cardContainers = document.querySelectorAll('.card-container');

    cardContainers.forEach((container, index) => {
      const tiltEffect = index % 2 === 0 ? 'reverse' : 'normal';

      container.addEventListener('mousemove', (event) => {
        handleMouseMove(event, container, tiltEffect);
      });

      container.addEventListener('mouseenter', () => {
        handleMouseEnter(container);
      });

      container.addEventListener('mouseleave', () => {
        handleMouseLeave(container);
      });
    });


    return () => {
      cardContainers.forEach((container, index) => {
        const tiltEffect = index % 2 === 0 ? 'reverse' : 'normal';

        container.removeEventListener('mousemove', (event) => {
          handleMouseMove(event, container, tiltEffect);
        });

        container.removeEventListener('mouseenter', () => {
          handleMouseEnter(container);
        });

        container.removeEventListener('mouseleave', () => {
          handleMouseLeave(container);
        });
      });
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);
  return (
    <div>
      <div className="digital-img"></div>

      <div className="heading-digital-marketing-agency">
        <h2 className="heading-digital-marketing heading-all-component-font-style">
          Professional Tools for Attracting Strangers
        </h2>
        <div className="h5-heading-text-para-digital-marketing heading-all-component-font-style">
          Expand online branding through social content and engagements.
        </div>
      </div>

        <div className="container-section-digital">
          <motion.div
              className='section-padding-mobile-view'
            ref={refdigital1} 
            initial="hidden"
            animate={inViewdigital1 ? "visible" : "hidden"} 
            variants={itemVariants}
    
          >
          {data.map((item, index) => (
            <div
              className={`digitalsection ${index % 2 === 0 ? 'left' : 'right'
                }`}
              key={index}
            >
              <div className="side">

                <img
                  className="img-mobile-app"
                  src={item.img}
                  alt={`Product ${index} Thumbnail`}
                  style={{ width: '650px', height: '300px' }}
                  loading="lazy"
                />
              </div>
              <div className="c">
                <h5 className="title-video-advertising heading-all-component-font-style">
                  {item.heading}
                </h5>
                <div className="para-container-digital-marketing">
                  <p className="para-p-video-advertising paragrapg-all-component-font-family">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </motion.div>
        </div>
      <div className="content-background-img-fixed-container">
        <div className="social-media-promotion">
          <h1 className="heading-all-component-font-style head">Social Media Promotion</h1>
        </div>
        <div className="content-background-img-fixed-child">
          <div className="content-2content">
            {[
              {
                title: 'CONTENT MARKETING',
                text: "If your content or marketing campaign fails to engage visitors, it could result in a loss of ROI. No need to worry; we excel in crafting captivating content and employ cutting-edge marketing strategies to attract and retain consumers.",
              },
              {
                title: 'GREAT RANKINGS',
                text: "Leveraging impactful social media content consistently can significantly impact your content marketing campaign. As search engines begin to crawl and index your engaging social media posts, you'll witness a noticeable improvement.",
              },
            ].map((item, index) => (
              <div className="content-para1" key={index}>
                <h1 className=" heading-all-component-font-style">{item.title}</h1>
                <p className="paragrapg-all-component-font-family">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>




      <section className="main">
        {cardData.map((data) => (
          <div className={`wrap wrap--${data.id}`} key={data.id}>
            <div className={`container background${data.id} container--${data.id} card-container`}>
              <p className="paragrapg-all-component-font-family" style={{ fontSize: "40px!important" }}>{data.title}</p>
            </div>
          </div>
        ))}
      </section>
<ParallaxComponent/>
    </div>
  );
};

export default DigitalSolution;

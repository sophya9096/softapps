import React, { useEffect, useState } from "react";
import classes from "./Services.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import CEO from "../../../shared/assets/Images/team/main3.jpeg";
// import Ahmad from "../../../shared/assets/Images/Ahmad-Mustafa.png";
// import Saad from "../../../shared/assets/Images/Saad-Sheikh.png";
// import Naresh from "../../../shared/assets/Images/naru.jpg";
// import Nitin from "../../../shared/assets/Images/Nitin.jpg";
// import Atwan from "../../../shared/assets/Images/London.jpg";
// import Zohaib from "../../../shared/assets/Images/Zohaib.png";
// import Hamza from "../../../shared/assets/Images/hamza.jpeg";
import Office1 from "../../../shared/assets/Images/team/office1.jpg";
import Office2 from "../../../shared/assets/Images/team/office2.jpg";
import Office3 from "../../../shared/assets/Images/team/office3.jpg";
import Office4 from "../../../shared/assets/Images/team/office4.jpg";
import Office5 from "../../../shared/assets/Images/team/office5.jpg";
import Office6 from "../../../shared/assets/Images/team/office6.jpg";
import Office7 from "../../../shared/assets/Images/team/office7.jpg";
import Office8 from "../../../shared/assets/Images/team/office8.jpg";
import Office9 from "../../../shared/assets/Images/team/office9.jpg";
import Office10 from "../../../shared/assets/Images/team/office10.jpg";
import rightArrowTeam from "../../../shared/assets/Images/rightArrowTeam.png";
import leftArrowTeam from "../../../shared/assets/Images/leftArrowTeam.png";
import whatWeb from "../../../shared/assets/Images/whatWeb.png";
import whatApp from "../../../shared/assets/Images/whatApp.png";
import whatEcommerce from "../../../shared/assets/Images/whatEcommerce.png";
import whatPrototype from "../../../shared/assets/Images/whatPrototype.png";
import webProt from "../../../shared/assets/Images/webProt.png";
import REACTJS from "../../../shared/assets/Images/REACTJS.png";
import wordpress from "../../../shared/assets/Images/wordpress.png";
import PYTHON from "../../../shared/assets/Images/PYTHON.png";
import NODEJS from "../../../shared/assets/Images/NODE JS.png";
import HTMLCSS from "../../../shared/assets/Images/HTML CSS.png";
import ANGULAR from "../../../shared/assets/Images/ANGULAR.png";
import appProt from "../../../shared/assets/Images/appProt.png";
import Android from "../../../shared/assets/Images/Android.png";
import Swift from "../../../shared/assets/Images/Swift.png";
import Flutter from "../../../shared/assets/Images/Flutter.png";
import IOS from "../../../shared/assets/Images/IOS.png";
import Kotlin from "../../../shared/assets/Images/Kotlin.png";
import Sketch from "../../../shared/assets/Images/Sketch.png";
import Figma from "../../../shared/assets/Images/Figma.png";
import XD from "../../../shared/assets/Images/XD.png";
import Invision from "../../../shared/assets/Images/Invision.png";
import AI from "../../../shared/assets/Images/AI.png";
import services1 from "../../../shared/assets/Images/services (1).png";
import services2 from "../../../shared/assets/Images/services (2).png";
import services3 from "../../../shared/assets/Images/services (3).png";
import Footer from "../Navigations/Footer";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = (props) => {
    const { exploreFunctionHandler } = props;

    const [selectedSlide, setSelectedSlide] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const images = [
        {
            img: Office9,
        },
        {
            img: Office10,
        },

        {
            img: Office5,
        },

        {
            img: Office1,
        },
        {
            img: Office2,
        },
        {
            img: Office3,
        },
        {
            img: Office4,
        },
        {
            img: Office6,
        },
        {
            img: Office7,
        },
        {
            img: Office8,
        },

        // {
        //     img: Ahmad,
        //     name: "Ahmad Mustafa",
        //     des: "COO",
        //     text: "I am the chief of operation at Softapps.io. I am responsible for the working strategies, and progressive outcome. ",
        // },
        // {
        //     img: Saad,
        //     name: "Saad Sheikh",
        //     des: "Senior UI UX Designer",
        //     text: "I am the senior Graphic Designer, my area of expertise are UI and UX design for websites and Mobile Apps.",
        // },
        // {
        //     img: Atwan,
        //     name: "Atwan Zameer",
        //     des: " Sales And Production Manager",
        //     text: "I m responsible for strategizing  sales, management, time management, relationship management, products marketing & sales.",
        // },
        // {
        //     img: Nitin,
        //     name: "Nitin Manoj",
        //     des: "WordPress Developer",
        //     text: "I am emerging WordPress Developer of this team, Creating different sites as per my ability.",
        // },
        // {
        //     img: Naresh,
        //     name: "Naresh Nath",
        //     des: "Junior UI UX Designer",
        //     text: "I am junior Graphic Designer in this company. My nature of job is create eye catching graphics.",
        // },
        // {
        //     img: Zohaib,
        //     name: "Muhammad Zohaib",
        //     des: "SEO Executive",
        //     text: "I am an SEO Executive at Softapps.io. My job is to promote our products and manage their appearance on Search Engines.",
        // },
        // {
        //     img: "Muhammad Ameen",
        //     name: "Muhammad Ameen",
        //     des: "Full Stack Developer",
        //     text: "I am serving Softapps.io as a full stack developer. My area of expertise are MERN",
        // },
        // // { img: "Atwan Zameer", name: "Atwan Zameer", des: "Front End Dev", text: "" },
        // {
        //     img: Hamza,
        //     name: "Hamza",
        //     des: "Front End Dev",
        //     text: "I am Front End Developer in this firm. My area is to build responsive layout of dynamics websites. ",
        // },
    ];
    console.log({ selectedSlide });

    const nextSlide = () => {
        if (selectedSlide === images.length - 1) {
            setSelectedSlide(0);
            return;
        }
        setSelectedSlide((prState) => (prState += 1));
    };
    const previousSlide = () => {
        if (selectedSlide === 0) {
            setSelectedSlide(images.length - 1);
            return;
        }
        setSelectedSlide((prState) => (prState -= 1));
    };

    return (
        <div id="services" className={classes.Services}>
            <div data-aos="fade-up" className={classes.ServicesTeam}>
                <div className={classes.ServicesTeam_Left}>
                    <div className={classes.ServicesTeam_Left_Container}>
                        <Carousel
                            className={classes.responsiveCarousel}
                            selectedItem={selectedSlide}
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                            showArrows={false}
                        >
                            {images.map((i, index) => (
                                <div key={index} className={classes.ServicesTeam_Left_Container_Team}>
                                    <img
                                        style={{ fontSize: "85px", width: "100%", height: "320px", objectFit: "cover" }}
                                        src={i.img}
                                        alt={"img"}
                                    />
                                    {/* <p>{"ARVIN MANOJ"}</p>
                                    <p>{"CEO"}</p>
                                    <p style={{ width: "40%" }}>
                                        I am the Founder of Softapps.io. A Leading Organization since 2019. Many Experts are working under
                                        this software company.
                                    </p> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className={classes.ServicesTeam_Left_Container_Arrows}>
                        <img alt="" onClick={() => previousSlide()} src={leftArrowTeam} />
                        <img alt="" onClick={() => nextSlide()} src={rightArrowTeam} />
                    </div>
                </div>
                <div className={classes.ServicesTeam_Right}>
                    <h1>A better team with</h1>
                    <p>good services</p>
                    <span>Building a good customer experience does not happen by accident. It happens by hard work.</span>
                    <a target="_blank" rel="noreferrer" href="https://wa.me/+15145503281">
                        Get In Touch{" "}
                    </a>
                </div>
            </div>
            <div data-aos="fade-up" className={classes.WhatWeDo}>
                <div className={classes.WhatWeDo_Heading}>
                    <h1>WHAT WE DO</h1>
                </div>
                <div className={classes.WhatWeDo_Container}>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img alt="" src={whatEcommerce} />
                        </div>
                        <h1>E-Commerce</h1>
                        <h1>Development</h1>
                    </div>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img alt="" src={whatWeb} />
                        </div>
                        <h1>Web</h1>
                        <h1>Development</h1>
                    </div>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img alt="" src={whatApp} />
                        </div>
                        <h1>App</h1>
                        <h1>Development</h1>
                    </div>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img alt="" src={whatPrototype} />
                        </div>
                        <h1>Prototype</h1>
                        <h1>Design</h1>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className={classes.DevelopmentContainer}>
                <NavLink to={`/blog/web-development`} className={classes.DevelopmentContainer_Left}>
                    <div className={classes.DevelopmentContainer_Left_Container}>
                        <h1>Web Development</h1>
                        <p>services</p>
                        <span>
                            We provide both back-end and front-end development. Our teams build web applications powered by bulletproof
                            code, with stunning interfaces based on responsive web design.
                        </span>
                        <div className={classes.TechStack_Container}>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={REACTJS} />
                                </div>
                                <span>React JS</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={NODEJS} />
                                </div>
                                <span>Node JS</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={ANGULAR} />
                                </div>
                                <span>Angular JS</span>
                            </div>
                        </div>
                        <div className={classes.TechStack_Container}>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={PYTHON} />
                                </div>
                                <span>Python</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={HTMLCSS} />
                                </div>
                                <span>HTML CSS</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={wordpress} />
                                </div>
                                <span>WordPress</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <div className={classes.DevelopmentContainer_Right}>
                    <img alt="" src={webProt} />
                </div>
            </div>
            <div data-aos="fade-up" style={{ marginTop: "60px" }} className={classes.DevelopmentContainer}>
                <div style={{ display: "flex", justifyContent: "flex-end" }} className={classes.DevelopmentContainer_Right}>
                    <img alt="" src={appProt} />
                </div>
                <NavLink to={`/blog/mobile-development`} className={classes.DevelopmentContainer_Left}>
                    <div className={classes.DevelopmentContainer_Left_Container}>
                        <h1>Mobile Development</h1>
                        <p>services</p>
                        <span>
                            Smartphones, tablets, wearables - follow your users where they are with carefully crafted mobile apps. Reach
                            customers via Android, iOS, or cross-platform solutions.
                        </span>
                        <div className={classes.TechStack_Container}>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={IOS} />
                                </div>
                                <span>IOS</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={Swift} />
                                </div>
                                <span>Swift</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={Android} />
                                </div>
                                <span>Android</span>
                            </div>
                        </div>
                        <div className={classes.TechStack_Container}>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={Kotlin} />
                                </div>
                                <span>Kotlin</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={Flutter} />
                                </div>
                                <span>Flutter</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={REACTJS} />
                                </div>
                                <span>React Native</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div data-aos="fade-up" style={{ marginTop: "60px" }} className={classes.DevelopmentContainer}>
                <NavLink to={`/blog/product-design`} className={classes.DevelopmentContainer_Left}>
                    <div className={classes.DevelopmentContainer_Left_Container}>
                        <h1>Product Design</h1>
                        <p>services</p>
                        <span>
                            Great code deserves an equally stunning visual representation, and this is what we deliver. Our Product Design
                            team combines beautiful interfaces with captivating user experience.
                        </span>
                        <div className={classes.TechStack_Container}>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={XD} />
                                </div>
                                <span>Adobe XD</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={AI} />
                                </div>
                                <span>Illustrator</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={AI} />
                                </div>
                                <span>Photoshop</span>
                            </div>
                        </div>
                        <div className={classes.TechStack_Container}>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={Sketch} />
                                </div>
                                <span>Sketch</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={Invision} />
                                </div>
                                <span>inVision</span>
                            </div>
                            <div className={classes.TechStack}>
                                <div>
                                    <img alt="" src={Figma} />
                                </div>
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <div className={classes.DevelopmentContainer_Right}>
                    <img alt="" src={webProt} />
                </div>
            </div>
            <div data-aos="fade-up" style={{ marginTop: "60px", marginBottom: "60px" }} className={classes.Support}>
                <div className={classes.Service_Support}>
                    <NavLink to={`/blog/seo-digitalMarketing`}>
                        <div className={classes.Service_Support_Container}>
                            <div>
                                <img alt="" src={services1} />
                            </div>
                            <h1 style={{ marginTop: "25px" }}>SEO</h1>
                        </div>
                    </NavLink>
                    <NavLink to={`/blog/audio-video-production`}>
                        <div className={classes.Service_Support_Container}>
                            <div>
                                <img alt="" src={services3} />
                            </div>
                            <h1 style={{ marginTop: "25px" }}>Audio Video Production</h1>
                        </div>
                    </NavLink>
                    <NavLink to={`/blog/IT-support`}>
                        <div className={classes.Service_Support_Container}>
                            <div>
                                <img alt="" src={services2} />
                            </div>
                            <h1 style={{ marginTop: "25px" }}>IT Support</h1>
                        </div>
                    </NavLink>
                </div>
            </div>
            <Footer data-aos="fade-up" exploreFunctionHandler={exploreFunctionHandler} />
        </div>
    );
};

export default Services;

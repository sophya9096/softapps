import React, { useState, Suspense, useEffect } from "react";
import classes from "./Layout2.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Office1 from "../../shared/assets/Images/team/office1.jpg";
import Office2 from "../../shared/assets/Images/team/office2.jpg";
import Office3 from "../../shared/assets/Images/team/office3.jpg";
import Office4 from "../../shared/assets/Images/team/office4.jpg";
import Office5 from "../../shared/assets/Images/team/office5.jpg";
import Office6 from "../../shared/assets/Images/team/office6.jpg";
import Office7 from "../../shared/assets/Images/team/office7.jpg";
import Office8 from "../../shared/assets/Images/team/office8.jpg";
import Office9 from "../../shared/assets/Images/team/office9.jpg";
import Office10 from "../../shared/assets/Images/team/office10.jpg";
import rightArrowTeam from "../../shared/assets/Images/rightArrowTeam.png";
import leftArrowTeam from "../../shared/assets/Images/leftArrowTeam.png";

import Digital from "../../shared/assets/Images/Digital.png";
import Play from "../../shared/assets/Images/Play.png";
import REACTJS from "../../shared/assets/Images/REACTJS.png";
import wordpress from "../../shared/assets/Images/wordpress.png";
import PYTHON from "../../shared/assets/Images/PYTHON.png";
import NODEJS from "../../shared/assets/Images/NODE JS.png";
import HTMLCSS from "../../shared/assets/Images/HTML CSS.png";
import ANGULAR from "../../shared/assets/Images/ANGULAR.png";
import Android from "../../shared/assets/Images/Android.png";
import Swift from "../../shared/assets/Images/Swift.png";
import Flutter from "../../shared/assets/Images/Flutter.png";
import IOS from "../../shared/assets/Images/IOS.png";
import Kotlin from "../../shared/assets/Images/Kotlin.png";
import Sketch from "../../shared/assets/Images/Sketch.png";
import Figma from "../../shared/assets/Images/Figma.png";
import XD from "../../shared/assets/Images/XD.png";
import Invision from "../../shared/assets/Images/Invision.png";
import AI from "../../shared/assets/Images/AI.png";
import Whatsapp from "../../shared/assets/Images/Whatsapp.png";
import Email from "../../shared/assets/Images/Email.png";
import Call from "../../shared/assets/Images/Call.png";
import TotalProjects from "../../shared/assets/Images/TotalProjects.png";
import HappyClients from "../../shared/assets/Images/HappyClients.png";
import Contact from "../../shared/assets/Images/Contact.png";
import Logo from "../../shared/assets/Images/Logo.png.svg";
import services1 from "../../shared/assets/Images/services (1).png";
import services2 from "../../shared/assets/Images/services (2).png";
import services3 from "../../shared/assets/Images/services (3).png";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { Backdrop, CircularProgress, Dialog } from "@material-ui/core";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { MonetizationOn } from "@material-ui/icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "aos/dist/aos.css";
import Aos from "aos";

// import emailjs from "emailjs-com";

const Blogs = React.lazy(() => import("../Components/Pages/Blogs"));
const Portfolio = React.lazy(() => import("../Components/Pages/MobilePortfolio"));
const Career = React.lazy(() => import("../Components/Pages/Career"));

const Layout = (props) => {
    const [openVideo, setOpenVideo] = useState(false);
    const [show, setShow] = useState(false);
    const [focus, setFocus] = useState(false);
    const [selectedSlide, setSelectedSlide] = useState(0);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const images = [
        // {
        //     img: Office9,
        //     name: "Arvin Manoj",
        //     des: "CEO",
        //     text: "I am the Founder of SoftApps.io. A Leading Organization since 2019. Many Experts are working under this software company.",
        // },
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
    ];

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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

    const pushHeight = () => {
        setShow(!show);
    };

    const submitContactFormHandler = async () => {
        let errors = false;
        if (!name || (name && name.length < 1)) {
            errors = true;
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errors = true;
            setEmailError(true);
        } else setEmailError(false);
        if (!subject || (subject && subject.length < 5)) {
            errors = true;
            setSubjectError(true);
        } else setSubjectError(false);
        if (!message || (message && message.length < 10)) {
            errors = true;
            setMessageError(true);
        } else setMessageError(false);
        if (errors) return;
        try {
            const form = { name, email, subject, message };

            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/contact/`,
                "POST",
                {
                    "Content-Type": "application/json",
                    Authorization: `${process.env.REACT_APP_AUTH_TOKEN}`,
                },
                JSON.stringify(form),
            );

            form.address = `${process.env.REACT_APP_BACKEND_URL}/api/contact/`;
            form.subject = `Contact Us`;

            if (responseData) {
                setSubmitted(true);

                // emailjs
                //     .send(
                //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
                //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                //         form,
                //         process.env.REACT_APP_EMAILJS_USER_ID,
                //     )
                //     .then(
                //         (result) => {
                //             console.log(result.text);
                //         },
                //         (error) => {
                //             console.log(error.text);
                //         },
                //     );

                const response = await fetch(`${process.env.REACT_APP_EMAIL_URL}/softappsContact`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                    },
                    body: JSON.stringify(form),
                });

                const data = await response.json();
                console.log({ data });
            }
        } catch (error) {}
    };

    let content0 = (
        <div id="home" className={classes.Header}>
            <div className={classes.HeaderContainer}>
                <a href="#home">
                    <div className={classes.HeaderContainerLogo}>
                        <img alt="" src={Logo} />
                    </div>
                </a>
                <div onClick={pushHeight} className={classes.HeaderBurger}>
                    <span className={[show && classes.topDiv]}></span>
                    <span className={[show && classes.middleDiv]}></span>
                    <span className={[show && classes.bottomDiv]}> </span>
                </div>
            </div>
            <div className={[classes.HeaderMenu, show && classes.height].join(" ")}>
                <p onClick={pushHeight}>
                    <a href="#home" style={{ display: show ? "block" : "none" }}>
                        Home
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a href="#services" style={{ display: show ? "block" : "none" }}>
                        Services
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a href="#portfolio" style={{ display: show ? "block" : "none" }}>
                        Portfolio
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a href="#about" style={{ display: show ? "block" : "none" }}>
                        About Us
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a href="#career" style={{ display: show ? "block" : "none" }}>
                        Career
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a href="#contact" style={{ display: show ? "block" : "none" }}>
                        Contact Us
                    </a>
                </p>
            </div>
        </div>
    );

    let content1 = (
        <div data-aos="fade-up" style={{ marginTop: 125 }} className={classes.Container}>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                <div>
                    <iframe
                        title={"unique"}
                        src="https://free.timeanddate.com/clock/i7vs5crt/n165/szw80/szh80/hoc000/hbw4/cf100/hgr0/hcw2/fav0/fiv0/mqc000/mqs3/mql25/mqw2/mqd96/mhc000/mhs3/mhl20/mhw2/mhd94/mmc000/mms3/mml5/mmw2/mmd96/hhs2/hhw8/hms2/hmw8/hmr4/hsc000/hss3/hsl90"
                        frameborder="0"
                        width="80"
                        height="80"
                    ></iframe>
                    <h3 style={{ textAlign: "center" }}>Canada</h3>
                </div>
                <div>
                    <iframe
                        title={"unique"}
                        src="https://free.timeanddate.com/clock/i7vs5crt/n757/szw80/szh80/hoc000/hbw4/cf100/hgr0/hcw2/fav0/fiv0/mqc000/mqs3/mql25/mqw2/mqd96/mhc000/mhs3/mhl20/mhw2/mhd94/mmc000/mms3/mml5/mmw2/mmd96/hhs2/hhw8/hms2/hmw8/hmr4/hsc000/hss3/hsl90"
                        frameborder="0"
                        width="80"
                        height="80"
                    ></iframe>
                    <h3 style={{ textAlign: "center" }}>Pakistan</h3>
                </div>
                <div>
                    <iframe
                        title={"unique"}
                        src="https://free.timeanddate.com/clock/i7vs5crt/n104/szw80/szh80/hoc000/hbw4/cf100/hgr0/hcw2/fav0/fiv0/mqc000/mqs3/mql25/mqw2/mqd96/mhc000/mhs3/mhl20/mhw2/mhd94/mmc000/mms3/mml5/mmw2/mmd96/hhs2/hhw8/hms2/hmw8/hmr4/hsc000/hss3/hsl90"
                        frameborder="0"
                        width="80"
                        height="80"
                    ></iframe>
                    <h3 style={{ textAlign: "center" }}>USA</h3>
                </div>
            </div>

            <div className={classes.ContainerDiv}>
                <div className={classes.Left}>
                    <div className={classes.Home1}>
                        {/* <div style={{ display: "flex", width: "100%", marginLeft: "-25px", flexWrap: "wrap", justifyContent: "center" }}>
                            <Clock small width={40} height={40} title={"Canada"} canada />
                            <Clock small width={40} height={40} title={"Pakistan"} pakistan />
                            <Clock small width={40} height={40} title={"USA"} usa />
                        </div> */}
                        <h1>Digitalization</h1>
                        <p>MAKE YOUR FUTURE DIGITAL</p>
                        <span>
                            SoftApps.io is a Canada-based sofware development company, with branches extended to the US and Pakistan. We are
                            a complete cycle application development company.
                        </span>
                        <div style={{ height: "90px", marginBottom: "30px" }}>
                            <div onClick={() => setOpenVideo(true)} style={{ position: "relative", cursor: "pointer" }}>
                                <a> Explore</a>
                                <img alt="" src={Play} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}>
                    <div className={classes.Home2}>
                        <img alt="" src={Digital} />
                    </div>
                </div>
            </div>
        </div>
    );

    let content2 = (
        <div id="services" className={classes.Container}>
            <div className={classes.ContainerDiv}>
                <div data-aos="fade-up" className={classes.Left}>
                    <div className={classes.Services1}>
                        <p>Our</p>
                        <h1 style={{ marginBottom: 10 }}>SERVICES</h1>
                        <span>
                            We Provide A Wide Range Of Services Including Web Development and Mobile application to enhance your business
                            and make your business digital!
                        </span>
                        {/* <a onClick={() => props.exploreFunctionHandler("services")}>Explore</a> */}
                        <a href="#website">Explore</a>
                    </div>
                </div>
                <div data-aos="fade-up" className={classes.Right}>
                    <div className={classes.Services2}>
                        <div className={classes.Services2_Container}>
                            <Carousel
                                selectedItem={selectedSlide}
                                className={classes.responsiveCarousel}
                                showThumbs={false}
                                showIndicators={false}
                                showStatus={false}
                                showArrows={false}
                            >
                                {images.map((i, index) => (
                                    <div key={index} className={classes.Services2_Container_Team}>
                                        <div>
                                            <img alt="" src={i.img} />
                                        </div>
                                        {/* <p>{i.name}</p>
                                        <p>{i.des}</p>
                                        <p>{i.text}</p> */}
                                    </div>
                                ))}
                            </Carousel>
                            <div className={classes.ServicesTeam_Left_Container_Arrows}>
                                <img alt="" onClick={() => previousSlide()} src={leftArrowTeam} />
                                <img alt="" onClick={() => nextSlide()} src={rightArrowTeam} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    let content3 = (
        <div data-aos="fade-up" className={classes.Container}>
            <div className={classes.ContainerDiv}>
                <div className={classes.Services3}>
                    <h1>A better team with</h1>
                    <p>good services</p>
                    <span>
                        We have Highly talented and responsible team which have achived the tons of milestone and highly dedicated with
                        their work.
                    </span>
                    <a href="#contact">Get In Touch </a>
                </div>
            </div>
        </div>
    );

    let content4 = (
        <div data-aos="fade-up" id={"website"} className={classes.ContainerDiv}>
            <div className={classes.Services3}>
                <h1>Web Development</h1>
                <p>services</p>
                <span>
                    We provide both back-end and front-end development. Our teams build web applications powered by bulletproof code, with
                    stunning interfaces based on responsive web design.
                </span>
            </div>
        </div>
    );
    let content5 = (
        <div data-aos="fade-up" className={classes.Container1}>
            <NavLink to={`/blog/web-development`} className={classes.DevelopmentContainer_Left}>
                <div className={classes.SingleContainerDiv}>
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
        </div>
    );

    let content6 = (
        <div data-aos="fade-up" className={classes.ContainerDiv}>
            <div className={classes.Services3}>
                <h1>Mobile Development</h1>
                <p>services</p>
                <span>
                    Smartphones, tablets, wearables - follow your users where they are with carefully crafted mobile apps. Reach customers
                    via Android, iOS, or cross-platform solutions.
                </span>
            </div>
        </div>
    );

    let content7 = (
        <div data-aos="fade-up" className={classes.Container1}>
            <NavLink to={`/blog/mobile-development`} className={classes.DevelopmentContainer_Left}>
                <div className={classes.SingleContainerDiv}>
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
    );
    let content8 = (
        <div data-aos="fade-up" className={classes.ContainerDiv}>
            <div className={classes.Services3}>
                <h1>Product Design</h1>
                <p>services</p>
                <span>
                    Great code deserves an equally stunning visual representation, and this is what we deliver. Our Product Design team
                    combines beautiful interfaces with captivating user experience.
                </span>
            </div>
        </div>
    );

    let content9 = (
        <div data-aos="fade-up" className={classes.Container1}>
            <NavLink to={`/blog/product-design`} className={classes.DevelopmentContainer_Left}>
                <div className={classes.SingleContainerDiv}>
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
        </div>
    );

    let content10 = (
        <div id="portfolio" data-aos="fade-up" className={classes.Container} style={{ marginTop: "-75px" }}>
            <div className={classes.SingleContainerDiv}>
                <div className={classes.Services1}>
                    <p>Our</p>
                    <h1 style={{ marginBottom: 10 }}>PORTFOLIO</h1>
                    <span>Here are some of our portfolios which are based on new and trending technologies with attractive UX & UI</span>
                    <Link to="/portfolio">Explore</Link>
                </div>
            </div>
        </div>
    );
    let content11;
    // = (
    //     <div className={classes.Container}>
    //         <div className={classes.SingleContainerDiv}>
    //             <div className={classes.Services1}>
    //                 <h1>About Us</h1>
    //                 <span>
    //                     SoftApps.io is a Canada-based sofware development company, with branches extended to the US and Pakistan. We are a
    //                     complete cycle application development company.
    //                 </span>
    //                 {/* <a onClick={() => props.exploreFunctionHandler("services")}>Explore</a> */}
    //             </div>
    //         </div>
    //     </div>
    // );
    let content12 = (
        <div id={"about"} data-aos="fade-up" className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                {" "}
                {/* <h1 style={{ fontSize: "1.5rem" }}>Who We Are</h1>
                    <div style={{ width: "100%", marginTop: "20px", marginBottom: "30px" }}>
                        <img alt="" style={{ width: "100%" }} src={whoWeAre1} />
                    </div> */}
                <div className={classes.Services1}>
                    <h1 style={{ marginBottom: 10 }}>About Us</h1>
                </div>
                <p style={{ fontSize: ".8rem", textAlign: "justify" }}>
                    <strong>SoftApps.io </strong> is a leading Software Company with 3 different locations Canada, USA and Pakistan. We have
                    a unique set of teams with more than 300 working websites and a wide range of products.
                    <br />
                    <br />
                    We have a team of experienced Analysts, Designers, Engineers & Testing personnel working around the globe in different
                    time zones to keep supporting you 24/7. Our sophisticated Web development & Business Solutions bring you peace of mind
                    while we handle everything for you using our client-focused Solutions & Services. We value the uniqueness of your
                    business needs and tailor our services according to your specific objectives.{" "}
                </p>
                <h1 style={{ fontSize: "1.5rem", margin: "20px auto" }}>Why Us?</h1>
                <p style={{ fontSize: ".8rem", textAlign: "justify" }}>
                    <strong>We are an off-shore software agency, having our approach to the US and Pakistan. </strong>
                </p>
                <p style={{ fontSize: ".8rem", textAlign: "justify" }}>
                    We aim to provide innovative and creative solutions by doing an in-depth analysis of your problem. We started this
                    company with a mission to become one of the top leading IT Solution Companies.
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start", marginTop: "20px" }}>
                    <strong>24*7 Live Support </strong>
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start" }}>
                    Always there for you. One of our representative will always here to solve your queries.
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start", marginTop: "20px" }}>
                    <strong>BEST ROI Techniques</strong>
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start" }}>
                    Your success is the most incredible asset we enjoy. Softapps.io team has always grown with the modernizing era.
                </p>
            </div>
        </div>
    );

    let content13 = (
        <div data-aos="fade-up" className={classes.TotalProjects}>
            <VisibilitySensor
                active={!focus}
                onChange={(isVisible) => {
                    if (isVisible) {
                        setFocus(true);
                    }
                }}
                delayedCall
            >
                <div className={classes.TotalProjectsContainer}>
                    <div className={classes.TotalProjectsContainer_Item}>
                        <div className={classes.TotalProjectsContainer_Item_Image}>
                            <img alt="" style={{ width: "100%" }} src={TotalProjects} />
                        </div>
                        <p>Total Projects</p>
                        <p style={{ fontSize: 30 }}>
                            +<CountUp style={{ fontSize: 30 }} start={focus ? null : 0} end={85}></CountUp>
                        </p>
                    </div>
                    <div className={classes.TotalProjectsContainer_Item}>
                        <div className={classes.TotalProjectsContainer_Item_Image}>
                            <img alt="" style={{ width: "100%" }} src={HappyClients} />
                        </div>
                        <p>Happy Clients</p>
                        <p style={{ fontSize: 30 }}>
                            +<CountUp style={{ fontSize: 30 }} start={focus ? null : 0} end={78}></CountUp>
                        </p>
                    </div>
                    <div className={classes.TotalProjectsContainer_Item}>
                        <MonetizationOn className={classes.revenueIcon} />
                        <p>Revenue Generated</p>
                        <p style={{ fontSize: 30 }}>
                            +$<CountUp style={{ fontSize: 30 }} start={focus ? null : 0} end={100000}></CountUp>
                        </p>
                    </div>
                </div>
            </VisibilitySensor>
        </div>
    );

    let content14 = (
        <div id="contact" data-aos="fade-up" className={classes.Container}>
            <div className={classes.ContainerDiv}>
                <div style={{ marginRight: "auto" }} className={classes.Contact1}>
                    <h1>
                        Contact <span style={{ color: "black" }}>Us!</span>
                    </h1>
                </div>
            </div>
            <div className={classes.ContainerDiv}>
                {submitted ? (
                    <p>Thank you for contacting us, we will get back to you shortly.</p>
                ) : (
                    <div className={classes.Form}>
                        <div className={classes.FormElement}>
                            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            {nameError && <p>Please, enter a valid name</p>}
                        </div>
                        <div className={classes.FormElement}>
                            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {emailError && <p>Please, enter a valid email</p>}
                        </div>
                        <div className={classes.FormElement} value={subject} onChange={(e) => setSubject(e.target.value)}>
                            <input placeholder="Subject" />
                            {subjectError && <p>Please, enter a valid subject</p>}
                        </div>
                        <div className={classes.FormElement}>
                            <textarea
                                rows={5}
                                placeholder="Type Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {messageError && <p>Please, enter a valid message</p>}
                        </div>
                        <div className={classes.progressBar}>{isLoading && <CircularProgress color="inherit" />}</div>
                        <a onClick={() => submitContactFormHandler()}>Submit</a>
                    </div>
                )}
            </div>
        </div>
    );

    let content15 = (
        <div data-aos="fade-up" className={classes.Container}>
            <div style={{ width: "100%" }}>
                <img alt="" style={{ width: "100%" }} src={Contact} />
            </div>
        </div>
    );

    let content16 = (
        <div data-aos="fade-up" className={classes.mobFooter}>
            <img className={classes.LogoFooter} src={Logo} alt="" />
            <div className={classes.drawerIcons}>
                <a href="mailto:management@softapps.io">
                    <img src={Email} alt="Email SoftApps" />
                </a>

                <a href="tel:+15145503281">
                    <img src={Call} alt="Call SoftApps" />
                </a>

                <a target="_blank" rel="noreferrer" href="https://wa.me/+15145503281">
                    <img src={Whatsapp} alt="Whatsapp SoftApps" />
                </a>
            </div>
        </div>
    );

    let content17 = (
        <div data-aos="fade-up" id="career" className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                <div className={classes.Services1}>
                    <p>BUILD YOUR</p>
                    <h1 style={{ marginBottom: 10 }}>CAREER</h1>
                    <span>Connect with us and Build your career by working with experts and contribute your part with them </span>
                    {/* <a onClick={() => props.exploreFunctionHandler("services")}>Explore</a> */}

                    <Link to="/career">Explore</Link>
                </div>
            </div>
        </div>
    );

    let content18 = (
        <div style={{ marginTop: "30px", marginBottom: "30px" }} className={classes.Support}>
            <div className={classes.Service_Support}>
                <div data-aos="fade-up">
                    <div className={classes.ContainerDiv}>
                        <div className={classes.Services3}>
                            <h1>SEO and Digital</h1>
                            <p>Marketing</p>
                            <span>We provide the most comprehensive & detailed solutions for your Google ranking</span>
                        </div>
                    </div>

                    <NavLink to={`/blog/seo-digitalMarketing`}>
                        <div className={classes.Service_Support_Container}>
                            <div>
                                <img alt="" src={services1} />
                            </div>
                            <h1 style={{ marginTop: "25px" }}>SEO</h1>
                        </div>
                    </NavLink>
                </div>
                <div data-aos="fade-up">
                    <div className={classes.ContainerDiv}>
                        <div className={classes.Services3}>
                            <h1>Audio and Video</h1>
                            <p>Production</p>
                            <span>We deal with all kinds of video production. Either it is a documentary, a movie and short film</span>
                        </div>
                    </div>

                    <NavLink to={`/blog/audio-video-production`}>
                        <div className={classes.Service_Support_Container}>
                            <div>
                                <img alt="" src={services3} />
                            </div>
                            <h1 style={{ marginTop: "25px" }}>Audio Video Production</h1>
                        </div>
                    </NavLink>
                </div>
                <div data-aos="fade-up">
                    <div className={classes.ContainerDiv}>
                        <div className={classes.Services3}>
                            <h1>IT Management </h1>
                            <p>support</p>
                            <span>
                                Offering a bunch of talented developers to understand your needs, working according to your instructions
                            </span>
                        </div>
                    </div>
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
        </div>
    );

    const videoDialog = (
        // <div data-aos="fade-up">
        <Dialog open={openVideo} fullWidth={true} maxWidth="lg" onClose={() => setOpenVideo(false)}>
            <iframe
                height={400}
                src="https://www.youtube.com/embed/CY5oa_ps0wg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </Dialog>
        // </div>
    );

    const mainContent = (
        <>
            {content0}
            {content1}
            {content2}
            {content3}
            {content4}
            {content5}
            {content6}
            {content7}
            {content8}
            {content9}
            {content18}
            {content10}
            {content11}
            {content12}
            {content13}
            {content17}
            {content14}
            {content15}
            {content16}
            {videoDialog}
        </>
    );

    let routes = (
        <Switch>
            <Route path="/" exact render={(props) => mainContent} />
            <Route path="/portfolio" exact render={(props) => <Portfolio />} />
            <Route path="/career" exact render={(props) => <Career header />} />
            <Route path={`/blog/:id`} exact render={(props) => <Blogs header {...props} />} />
            <Redirect from="/*" to="/" />
        </Switch>
    );

    return (
        <div className={classes.Layout}>
            <Suspense
                fallback={
                    <Backdrop open={true}>
                        <CircularProgress style={{ color: "red" }} />
                    </Backdrop>
                }
            >
                {routes}
            </Suspense>

            {/* <div className={classes.Container}>
                <div className={classes.ContainerDiv}>
                    <div className={classes.Left}></div>
                    <div className={classes.Right}></div>
                </div>
            </div> */}
        </div>
    );
};

export default Layout;

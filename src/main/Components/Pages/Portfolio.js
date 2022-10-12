import React, { useEffect, useRef, useState } from "react";
import classes from "./Portfolio.module.css";

import PortMobile from "../../../shared/assets/Images/PortMobile.png";
import PortSocial from "../../../shared/assets/Images/PortSocial.png";
import PortWebsite from "../../../shared/assets/Images/PortWebsite.png";
import PortUI from "../../../shared/assets/Images/PortUI.png";
import rightArrow from "../../../shared/assets/Images/rightArrow.png";
import leftArrow from "../../../shared/assets/Images/leftArrow.png";

import Datesy from "../../../shared/assets/Images/0/Datesy-App.jpg";
import Datesy2 from "../../../shared/assets/Images/0/Datesy-App1.jpg";
import Rizipt from "../../../shared/assets/Images/0/Rizipt-App.jpg";
import Rizipt1 from "../../../shared/assets/Images/0/Rizipt-App1.jpg";
import RLD from "../../../shared/assets/Images/0/RLD-App.jpg";
import RLD1 from "../../../shared/assets/Images/0/RLD-App1.jpg";
import LDB from "../../../shared/assets/Images/0/LDB-App.jpg";
import LDB2 from "../../../shared/assets/Images/0/LDB-App1.jpg";
import SnaxaDriver from "../../../shared/assets/Images/0/SnaxaDriver-App.jpg";
import SnaxaDriver1 from "../../../shared/assets/Images/0/SnaxaDriver-App1.jpg";
import Afro from "../../../shared/assets/Images/0/afro-website.jpg";
import Mentor from "../../../shared/assets/Images/0/Cold-Crew-Website1.jpg";
import HairTress from "../../../shared/assets/Images/0/HairQuiz-Website.jpg";
import HairTress1 from "../../../shared/assets/Images/0/tress-website.jpg";
import LDBWeb from "../../../shared/assets/Images/0/LDB-Website.jpg";
import Scarbo from "../../../shared/assets/Images/0/scarbo.jpg";
import SNAXA from "../../../shared/assets/Images/0/snaxa-webite.jpg";
import SOCIAL_INSTA from "../../../shared/assets/Images/0/Instagram-Post-Mockup.jpg";
import SOCIAL_INSTA1 from "../../../shared/assets/Images/0/Instagram-Post-Mockup1.jpg";
import SOCIAL_INSTA2 from "../../../shared/assets/Images/0/Instagram-Post-Mockup2.jpg";
import SOCIAL_INSTA3 from "../../../shared/assets/Images/0/Instagram-Post-Mockup3.jpg";
import SOCIAL_FACE from "../../../shared/assets/Images/0/Facebook-Mockup.jpg";
import F1 from "../../../shared/assets/Images/0/f1.jpg";
import F2 from "../../../shared/assets/Images/0/f2.jpg";
import F3 from "../../../shared/assets/Images/0/f3.jpg";
import F4 from "../../../shared/assets/Images/0/f4.jpg";
import T1 from "../../../shared/assets/Images/0/t1.jpg";
import T2 from "../../../shared/assets/Images/0/t2.jpg";
import T3 from "../../../shared/assets/Images/0/t3.jpg";
import T4 from "../../../shared/assets/Images/0/t4.jpg";
import S1 from "../../../shared/assets/Images/0/Softapps1.jpg";
import S2 from "../../../shared/assets/Images/0/Softapps2.jpg";
import S3 from "../../../shared/assets/Images/0/Softapps3.jpg";
import S4 from "../../../shared/assets/Images/0/Softapps4.jpg";
import S5 from "../../../shared/assets/Images/0/Softapps5.jpg";
import S6 from "../../../shared/assets/Images/0/Softapps6.jpg";
import S7 from "../../../shared/assets/Images/0/Softapps7.jpg";
import S8 from "../../../shared/assets/Images/0/Softapps8.jpg";
import S9 from "../../../shared/assets/Images/0/Softapps9.jpg";
import S10 from "../../../shared/assets/Images/0/Softapps10.jpg";
import S11 from "../../../shared/assets/Images/0/Softapps11.jpg";
import S12 from "../../../shared/assets/Images/0/Softapps12.jpg";
import S13 from "../../../shared/assets/Images/0/Softapps13.jpg";
import S14 from "../../../shared/assets/Images/0/Softapps14.jpg";
import S15 from "../../../shared/assets/Images/0/Softapps15.jpg";
import S16 from "../../../shared/assets/Images/0/Softapps16.jpg";
import S17 from "../../../shared/assets/Images/0/Softapps17.jpg";
import S18 from "../../../shared/assets/Images/0/Softapps18.jpg";
import S19 from "../../../shared/assets/Images/0/Softapps19.jpg";
import S20 from "../../../shared/assets/Images/0/Softapps20.jpg";
import S21 from "../../../shared/assets/Images/0/Softapps21.jpg";
import UI_Course from "../../../shared/assets/Images/0/UI/Course.jpg";
import UI_Course1 from "../../../shared/assets/Images/0/UI/Course-1.jpg";
import UI_Cleaning from "../../../shared/assets/Images/0/UI/Cleaning-300x300.png";
import UI_Cruda from "../../../shared/assets/Images/0/UI/cuda.jpg";
import UI_Food from "../../../shared/assets/Images/0/UI/Food.jpg";
import UI_Music from "../../../shared/assets/Images/0/UI/Music-300x300.png";
import UI_Music1 from "../../../shared/assets/Images/0/UI/Music-473x1024.jpg";
import UI_Sneakers1 from "../../../shared/assets/Images/0/UI/Sneakers-300x300.png";
import UI_Unicorn from "../../../shared/assets/Images/0/UI/Unicorn-768x1662.jpg";

import PortfolioGrid from "../../../shared/components/UIElements/PortfolioGrid";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FullPage, Slide } from "react-full-page";

const Portfolio = (exploreFunctionHandler) => {
    const [selectedSlide, setSelectedSlide] = useState(0);
    // const [selectedPortfolio, setSelectedPortfolio] = useState(0);
    const [portfolioMode, setPortfolioMode] = useState(false);
    // const [resetAlert, setResetAlert] = useState(false);

    const mobile = useRef();
    const website = useRef();
    const social = useRef();

    const nextSlide = () => {
        if (selectedSlide === 2) {
            setSelectedSlide(0);
            return;
        }
        setSelectedSlide((prState) => prState + 1);
        setPortfolioMode(false);
    };
    const previousSlide = () => {
        if (selectedSlide === 0) {
            setSelectedSlide(2);
            return;
        }
        setSelectedSlide((prState) => prState - 1);
        setPortfolioMode(false);
    };
    const portfolioModeHandler = (state, mode) => {
        console.log("portfolioModeHandler", { mode });
        setPortfolioMode(mode);

        document.scrollingElement.scroll();
        // setSelectedPortfolio(1);
        state.current.click();
        if (!portfolioMode) {
            setTimeout(() => {
                window.scrollBy(500, 500);
            }, 100);
        }
    };

    // element.addEventListener("wheel", transformScroll);

    useEffect(() => {}, []);

    // const transformScroll = (event) => {
    //     console.log("Event");
    //     if (event.deltaY < 0) {
    //         if (resetAlert) {
    //             console.log("asd");
    //             setPortfolioMode(false);
    //         }
    //     }
    //     event.preventDefault();
    // };

    // var element = document.scrollingElement || document.documentElement;
    // element.addEventListener("wheel", transformScroll);

    // console.log("resetAlert", resetAlert);

    let mainCarousel = (
        <div className={classes.Portfolio}>
            <div className={classes.Left}>
                <div className={classes.Arrow}>
                    <img alt="" onClick={() => previousSlide()} src={leftArrow} />
                </div>
            </div>
            <div className={classes.Center}>
                <div style={{ width: "100%" }}>
                    <Carousel
                        className={classes.responsiveCarousel}
                        selectedItem={selectedSlide}
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                        showArrows={false}
                    >
                        <div className={classes.PortfolioSection}>
                            <img alt="" className={classes.portfolioImg} src={PortMobile} />
                            <h1>MOBILE</h1>
                            <p>{"DESIGN & DEVELOPMENT"}</p>
                            <a href="#mobile" ref={mobile} onClick={() => portfolioModeHandler(mobile, "mobile")}>
                                Explore
                            </a>
                        </div>
                        <div className={classes.PortfolioSection}>
                            <img alt="" className={classes.portfolioImg} src={PortWebsite} />
                            <h1>WEBSITE</h1>
                            <p>{"DESIGN & DEVELOPMENT"}</p>
                            <a href="#website" ref={website} onClick={() => portfolioModeHandler(website, "website")}>
                                Explore
                            </a>
                        </div>
                        <div className={classes.PortfolioSection}>
                            <img alt="" className={classes.portfolioImg} src={PortSocial} />
                            <h1>SOCIAL</h1>
                            <p>{"MEDIA & MARKETING"}</p>
                            <a href="#social" ref={social} onClick={() => portfolioModeHandler(social, "social")}>
                                Explore
                            </a>
                        </div>
                        {/* <div className={classes.PortfolioSection}>
                            <img alt="" className={classes.portfolioImg} src={PortUI} />
                            <h1>Design</h1>
                            <p>{"UI & UX Design"}</p>
                            <a href="#ui" ref={social} onClick={() => portfolioModeHandler(social, "ui")}>
                                Explore
                            </a>
                        </div> */}
                    </Carousel>
                </div>
            </div>
            <div className={classes.Right}>
                <div className={classes.Arrow}>
                    <img alt="" onClick={() => nextSlide()} src={rightArrow} />
                </div>
            </div>
        </div>
    );

    const mobileSection = [
        {
            images: [Datesy, Datesy2],
            primaryHeading: "Dating App",
            secondaryHeading: "DATESY",
            mainText: "Community Dating App",
        },
        {
            images: [Rizipt, Rizipt1],
            primaryHeading: "File Sharing App",
            secondaryHeading: "Rizipt",
            mainText: "File sharing made easier",
        },
        {
            images: [RLD, RLD1],
            primaryHeading: "ECOMMERCE",
            secondaryHeading: "Red Label District",
            mainText: "Ecommerce made easier.",
            link: "https://www.redlabeldistrict.com/",
        },
        {
            images: [SnaxaDriver, SnaxaDriver1],
            primaryHeading: "DRIVER",
            secondaryHeading: "SNAXA Driver App",
            mainText: "App for riders of SNAXA",
        },
        {
            images: [LDB, LDB2],
            primaryHeading: "BLOGGING",
            secondaryHeading: "Lady Bird Hub",
            mainText: "Revolutionizing blogging",
            link: "https://www.ladybirdhub.com/",
        },
    ];

    const websiteSection = [
        {
            images: [HairTress, HairTress1],
            secondaryHeading: "HairTress",
            mainText: "A Hair Products Recommendation Website",
        },
        {
            images: [SNAXA],
            secondaryHeading: "SNAXA",
            mainText: "An Online Ecommerce Website for food delivery",
        },
        {
            images: [Mentor],
            secondaryHeading: "Mentoring",
            mainText: "A Online Course Website",
        },
        {
            images: [LDBWeb],
            secondaryHeading: "Lady Bird Hub",
            mainText: "Revolutionizing blogging",
            link: "https://www.ladybirdhub.com/",
        },
        {
            images: [Afro],
            secondaryHeading: "AFRO",
            mainText: "A Musician Website",
            link: "https://afro-bros.com/",
        },
        {
            images: [Scarbo],
            secondaryHeading: "Scarbo",
            mainText: "A Music Website",
            link: "https://scarbo.digital/",
        },
    ];

    const socialSection = [
        {
            images: [SOCIAL_INSTA, SOCIAL_INSTA1, SOCIAL_INSTA2, SOCIAL_INSTA3, S15, S16, S17, S18, S19, S20, S21],
            secondaryHeading: "Instagram",
            link: "https://www.instagram.com/softapps.io/",
        },
        {
            images: [SOCIAL_FACE, F1, F2, F3, F4, S1, S2, S3, S4, S5, S6, S7],
            secondaryHeading: "Facebook",
            link: "https://www.facebook.com/softapps.io",
        },
        {
            images: [T1, T2, T3, T4, S8, S9, S10, S11, S12, S13, S14],
            secondaryHeading: "LinkedIn",
            link: "https://www.linkedin.com/company/softapps-io/mycompany/",
        },
    ];
    // const UI_Section = [
    //     {
    //         images: [UI_Cleaning],
    //         secondaryHeading: "Cleaning App",
    //         // link: "https://www.instagram.com/softapps.io/",
    //     },
    //     {
    //         images: [UI_Course, UI_Course1],
    //         secondaryHeading: "Course App",
    //         // link: "https://www.facebook.com/softapps.io",
    //     },
    //     {
    //         images: [UI_Cruda],
    //         secondaryHeading: "Cruda App",
    //         // link: "https://www.linkedin.com/company/softapps-io/mycompany/",
    //     },
    //     {
    //         images: [UI_Food],
    //         secondaryHeading: "Food App",
    //         // link: "https://www.linkedin.com/company/softapps-io/mycompany/",
    //     },
    //     {
    //         images: [UI_Music, UI_Music1],
    //         secondaryHeading: "Song Chimp",
    //         // link: "https://www.linkedin.com/company/softapps-io/mycompany/",
    //     },
    //     {
    //         images: [UI_Sneakers1],
    //         secondaryHeading: "Sneakers Web",
    //         // link: "https://www.linkedin.com/company/softapps-io/mycompany/",
    //     },
    //     {
    //         images: [UI_Unicorn],
    //         secondaryHeading: "Unicorn Petrolium",
    //         // link: "https://www.linkedin.com/company/softapps-io/mycompany/",
    //     },
    // ];

    return (
        <div id="portfolio" style={{ width: "100%", scrollbarWidth: "none" }}>
            <div
                afterChange={(e) => {
                    if (e.to === 0) setPortfolioMode(false);
                }}
                initialSlide={1}
            >
                <div className={classes.slide}> {mainCarousel}</div>
                {portfolioMode === "mobile" &&
                    mobileSection.map(({ images, primaryHeading, secondaryHeading, mainText, link }, index) => (
                        <div
                            className={classes.slide}
                            key={index}
                            id={index === 0 ? "mobile" : null}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <PortfolioGrid
                                backgroundColor={"#DF3D3D"}
                                mode={index % 2 === 0 ? "right" : "left"}
                                images={images}
                                primaryHeading={primaryHeading}
                                secondaryHeading={secondaryHeading}
                                mainText={mainText}
                                link={link}
                            />
                        </div>
                    ))}
                {portfolioMode === "website" &&
                    websiteSection.map(({ images, secondaryHeading, mainText, link }, index) => (
                        <div className={classes.slide} key={index} id={index === 0 ? "website" : null}>
                            <PortfolioGrid
                                backgroundColor={"#DF3D3D"}
                                mode={index % 2 === 0 ? "right" : "left"}
                                images={images}
                                primaryHeading={"WEBSITE"}
                                secondaryHeading={secondaryHeading}
                                mainText={mainText}
                                link={link}
                            />
                        </div>
                    ))}

                {portfolioMode === "social" &&
                    socialSection.map(({ images, secondaryHeading, link }, index) => (
                        <div className={classes.slide} key={index} id={index === 0 ? "social" : null}>
                            <PortfolioGrid
                                backgroundColor={"#DF3D3D"}
                                mode={index % 2 === 0 ? "right" : "left"}
                                images={images}
                                primaryHeading={"SOCIAL MEDIA"}
                                secondaryHeading={secondaryHeading ? secondaryHeading : "Platform"}
                                // mainText={"Our Social Network"}
                                link={link}
                            />
                        </div>
                    ))}

                {/* {portfolioMode === "ui" &&
                    UI_Section.map(({ images, secondaryHeading, link }, index) => (
                        <div className={classes.slide}  key={index} id={index === 0 ? "ui" : null}>
                            <PortfolioGrid
                                backgroundColor={"#DF3D3D"}
                                mode={index % 2 === 0 ? "right" : "left"}
                                images={images}
                                primaryHeading={"UX & UI"}
                                secondaryHeading={secondaryHeading ? secondaryHeading : "Platform"}
                                // mainText={"Our Social Network"}
                                link={link}
                            />
                        </d>
                    ))} */}
            </div>
        </div>
    );
};

export default Portfolio;

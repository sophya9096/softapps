import React from "react";
import classes from "./MainPage.module.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Careers from "./Careers";
import Contact from "./Contact";
import Contact2 from "./Contact2";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FullPage, Slide } from "react-full-page";

import PortfolioSection from "../Pages/Portfolio";
import AboutSection from "../Pages/About";
import CareerSection from "../Pages/Career";
import ServicesSection from "../Pages/Services";
import HomeSection from "../Pages/Home";

// import { useSlide } from "../../../shared/hooks/slide-hook";
// import { SlideContext } from "../../../shared/context/slide-context";

const MainPage = (props) => {
    // const { exploreState, setSlideNumberHandler, slideNumber, setExploreStateHandler } = useContext(SlideContext);
    // const { exploreState, setExploreStateHandler } = useSlide();

    const { exploreState, exploreStateHandler, slideNumber } = props;

    const exploreFunctionHandler = (id) => {
        exploreStateHandler(id);
        window.scrollBy(350, 350);
    };

    let content;

    // if (!exploreState) {
    content = (
        <Carousel
            className={classes.responsiveCarousel}
            selectedItem={slideNumber}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
        >
            <div className={classes.MainPage}>
                <Home exploreFunctionHandler={exploreFunctionHandler} />
            </div>
            <div className={classes.MainPage}>
                <Services exploreFunctionHandler={exploreFunctionHandler} />
            </div>
            <div className={classes.MainPage}>
                <About exploreFunctionHandler={exploreFunctionHandler} />
            </div>
            <div className={classes.MainPage}>
                <Portfolio exploreFunctionHandler={exploreFunctionHandler} />
            </div>
            <div className={classes.MainPage}>
                <Careers exploreFunctionHandler={exploreFunctionHandler} />
            </div>
            <div className={classes.MainPage}>
                <Contact exploreFunctionHandler={exploreFunctionHandler} />
            </div>
            <div className={classes.MainPage}>
                <Contact2 />
            </div>
        </Carousel>
    );
    // }

    // if (exploreState === "home") {
    //     content = (
    //         <div id={"home"} className={classes.MainPage}>
    //             <HomeSection exploreFunctionHandler={exploreFunctionHandler} />
    //         </div>
    //     );
    // }
    // if (exploreState === "portfolio") {
    //     content = (
    //         <div id={"portfolio"} className={classes.MainPage}>
    //             <PortfolioSection exploreFunctionHandler={exploreFunctionHandler} />
    //         </div>
    //     );
    // }

    // if (exploreState === "about") {
    //     content = (
    //         <div id={"about"} className={classes.MainPage}>
    //             <AboutSection exploreFunctionHandler={exploreFunctionHandler} />
    //         </div>
    //     );
    // }

    // if (exploreState === "career") {
    //     content = (
    //         <div id={"career"} className={classes.MainPage}>
    //             <CareerSection exploreFunctionHandler={exploreFunctionHandler} />
    //         </div>
    //     );
    // }
    // if (exploreState === "services") {
    //     content = (
    //         <div id={"services"} className={classes.MainPage}>
    //             <ServicesSection exploreFunctionHandler={exploreFunctionHandler} />
    //         </div>
    //     );
    // }

    // Change Here

    return (
        <FullPage
            afterChange={(e) => {
                // if (e.to === 0 && exploreState !== "portfolio") exploreFunctionHandler(slideNumber);
                if (e.to === 0) exploreFunctionHandler(slideNumber);
            }}
            initialSlide={1}
        >
            <Slide>{content}</Slide>
            {exploreState === "home" ? (
                <Slide>
                    <HomeSection exploreFunctionHandler={exploreFunctionHandler} />
                </Slide>
            ) : exploreState === "portfolio" ? (
                // <Slide>
                <PortfolioSection exploreFunctionHandler={exploreFunctionHandler} />
            ) : // </Slide>
            exploreState === "about" ? (
                // <Slide>
                <AboutSection exploreFunctionHandler={exploreFunctionHandler} />
            ) : // </Slide>
            exploreState === "career" ? (
                <Slide>
                    <CareerSection exploreFunctionHandler={exploreFunctionHandler} />
                </Slide>
            ) : exploreState === "services" ? (
                // <Slide>
                <ServicesSection exploreFunctionHandler={exploreFunctionHandler} />
            ) : // </Slide>
            null}
        </FullPage>
    );

    // return (
    //     <div className={classes.MainPage}>
    //         <ServicesSection />
    //     </div>
    // );
};

export default MainPage;

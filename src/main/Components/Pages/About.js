import React, { useEffect, useState } from "react";
import Ecommerce from "../../../shared/assets/Images/ecommerce.png";
import Web from "../../../shared/assets/Images/Web.png";
import WhoWeAreLeftCircle from "../../../shared/assets/Images/whoWeAreLeftCircle.png";
import WhyUsLeftHalfCircle from "../../../shared/assets/Images/whyUsLeftHalfCircle.png";
import WhoWeAreLeft from "../../../shared/assets/Images/whoWeAreLeft.png";
import BestQuality from "../../../shared/assets/Images/BestQuality.png";
import HappyClients from "../../../shared/assets/Images/HappyClients.png";
import TotalProjects from "../../../shared/assets/Images/TotalProjects.png";
import T24x7LiveSupport from "../../../shared/assets/Images/24x7LiveSupport.png";
import BestROITechniques from "../../../shared/assets/Images/BestROITechniques.png";
import ExperiencedProfessionals from "../../../shared/assets/Images/ExperiencedProfessionals.png";
import ResultOrientedProjects from "../../../shared/assets/Images/ResultOrientedProjects.png";
import classes from "./About.module.css";
import Footer from "../Navigations/Footer";
import { MonetizationOn } from "@material-ui/icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Clock from "../../../shared/components/UIElements/Clock";
import whatWeb from "../../../shared/assets/Images/whatWeb.png";
import whatApp from "../../../shared/assets/Images/whatApp.png";
import whatEcommerce from "../../../shared/assets/Images/whatEcommerce.png";
import whatPrototype from "../../../shared/assets/Images/whatPrototype.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = (props) => {
    const { exploreFunctionHandler } = props;
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    // const services = [
    //     {
    //         id: 1,
    //         title: "Ecommerce Development",
    //         image: Ecommerce,
    //     },
    //     {
    //         id: 2,
    //         title: "Web Development",
    //         image: Web,
    //     },
    //     {
    //         id: 3,
    //         title: "App Development",
    //         image: Ecommerce,
    //     },
    //     {
    //         id: 4,
    //         title: "Prototype Design",
    //         image: Web,
    //     },
    // ];
    const achievements = [
        {
            id: 1,
            Image: TotalProjects,
            title: "Total Projects",
            qty: 85,
        },
        {
            id: 2,
            Image: HappyClients,
            title: "Happy Clients",
            qty: 78,
        },
        {
            id: 1,
            Image: MonetizationOn,
            title: "Revenue Generated",
            qty: 100000,
        },
    ];
    return (
        <div id="about" className={classes.About}>
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
            <div data-aos="fade-up" className={classes.whoWeAre}>
                <div className={classes.whoWeAreHeading}>
                    <h2>WHO ARE WE?</h2>
                </div>
                <div className={classes.whoWeAreContentMainDiv}>
                    <div className={classes.whoWeAreContentLeftDiv}>
                        <div className={classes.whoWeAreContentLeftDivCircleImageDiv}>
                            <img alt="" src={WhoWeAreLeftCircle} />
                        </div>
                        <div className={classes.whoWeAreContentLeftDivTeamImageDiv}>
                            <img alt="" src={WhoWeAreLeft} />
                        </div>
                    </div>
                    <div className={classes.whoWeAreContentRighttDiv}>
                        <p style={{ textAlign: "justify", fontSize: 18 }}>
                            <strong style={{ fontSize: 18 }}>SoftApps.io </strong> is a leading Software Company with 3 different locations
                            Canada, USA and Pakistan. We have a unique set of teams with more than 300 working websites and a wide range of
                            products.
                            <br />
                            <br />
                            We have a team of experienced Analysts, Designers, Engineers & Testing personnel working around the globe in
                            different time zones to keep supporting you 24/7. Our sophisticated Web development & Business Solutions bring
                            you peace of mind while we handle everything for you using our client-focused Solutions & Services. We value the
                            uniqueness of your business needs and tailor our services according to your specific objectives.{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className={classes.whyUs}>
                {/* <div className={classes.whyUsHeading}>
                    <h2>WHO ARE WE?</h2>
                </div> */}
                <div className={classes.whoWeAreHeading}>
                    <h2>WHY US?</h2>
                </div>

                <div className={classes.whyUsContentMainDiv}>
                    <div className={classes.whyUsContentLeftDiv}>
                        <div className={classes.whyUsContentLeftDivHalfCircleImageDiv}>
                            <img alt="" src={WhyUsLeftHalfCircle} />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>We are an off-shore software agency, having our approach to the US and Pakistan.</h3>
                                </div>
                                <div>
                                    <p>
                                        We aim to provide innovative and creative solutions by doing an in-depth analysis of your problem.
                                        We started this company with a mission to become one of the top leading IT Solution Companies.
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginTop: "3rem" }}>
                                <div>
                                    <h3>Best Quality</h3>
                                </div>
                                <div>
                                    <p>
                                        We transform your ideas into digital means. A user-friendly and engaging interface will help you in
                                        grabbing clients
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginTop: "2rem" }}>
                                <div>
                                    <h3>Result Oriented Projects</h3>
                                </div>
                                <div>
                                    <p>
                                        We believe in results. We assist our clients through our platform while building creative solutions
                                        for consistent returns for our clients
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginTop: "2rem" }}>
                                <div>
                                    <h3>Experienced Professionals</h3>
                                </div>
                                <div>
                                    <p>
                                        Our dedicated team has vast experience regarding the services we provide. We take a fresh start for
                                        every project, toil on it, and come up with consistent results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.whyUsContentRighttDiv}>
                        <div className={classes.whyUsContentRighttDivImagesTilesMainDiv}>
                            <div className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={BestQuality} alt="Best Quality" />
                            </div>
                            <div style={{ transform: "translate(-50px,70px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={T24x7LiveSupport} alt="24 x 7 Support" />
                            </div>
                            <div style={{ transform: "translate(-100px,0px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={ResultOrientedProjects} alt="Result Oriented Projects" />
                            </div>
                            <div style={{ transform: "translate(-150px,70px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={BestROITechniques} alt="Best ROI" />
                            </div>
                            <div style={{ transform: "translate(-200px,0px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={ExperiencedProfessionals} alt="Experienced" />
                            </div>
                        </div>
                        <div style={{ transform: "translateY(80px)" }}>
                            <div>
                                <h3>24x7 Live Support</h3>
                                <p>Always there for you. One of our representatives will always here to solve your queries.</p>
                            </div>
                            <div>
                                <h3>Best ROI Techniques</h3>
                                <p>
                                    Your success is the most incredible asset we enjoy.The Softapps.io team has always grown with the
                                    modernizing era.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        // transform: "translateY(-190px)",
                        //fucking style
                    }}
                >
                    {/* <button
                        style={{
                            backgroundColor: "#362869",
                            color: "#fff",
                            fontSize: "25px",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px 15px",
                        }}
                        onClick={() => exploreFunctionHandler("portfolio")}
                    >
                        DEMO
                    </button> */}
                </div>
            </div>
            {/* <div data-aos="fade-up" style={{ display: "flex", justifyContent: "space-evenly", width: "90%", flexWrap: "wrap" }}>
                <Clock width={250} height={250} title={"Canada"} canada />
                <Clock width={250} height={250} title={"Pakistan"} pakistan />
                <Clock width={250} height={250} title={"USA"} usa />
            </div> */}
            <div data-aos="fade-up" className={classes.ourAchievements}>
                <div className={classes.achievementsItemsMainDiv}>
                    {achievements.map(({ Image, title, qty }, i) => {
                        return (
                            <div className={classes.achievementsItemsDiv} key={i}>
                                <div className={classes.achievementsItemsImageDiv}>
                                    {i < 2 ? <img src={Image} alt={title} /> : <Image style={{ fontSize: 100, color: "#fff" }} />}
                                </div>
                                <div>
                                    <p>{title}</p>
                                </div>

                                <div>
                                    <VisibilitySensor
                                        active={!focus}
                                        onChange={(isVisible) => {
                                            if (isVisible) {
                                                setFocus(true);
                                            }
                                        }}
                                        delayedCall
                                    >
                                        <h1>
                                            {i === 2 ? "+$" : "+"}
                                            <CountUp style={{ fontSize: 50 }} start={focus ? null : 0} end={qty}></CountUp>
                                        </h1>
                                    </VisibilitySensor>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer exploreFunctionHandler={exploreFunctionHandler} />
        </div>
    );
};

export default About;

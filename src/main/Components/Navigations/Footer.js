import React from "react";
import classes from "./Footer.module.css";
import FooterLogo from "../../../shared/assets/Images/FooterLogo.png";
import FacebookWhite from "../../../shared/assets/Images/FacbookWhite.png";
import LinkedinWhite from "../../../shared/assets/Images/LinkedinWhite.png";
import TwitterWhite from "../../../shared/assets/Images/TwitterWhite.png";
import YoutubeWhite from "../../../shared/assets/Images/YoutubeWhite.png";
import InstagramWhite from "../../../shared/assets/Images/InstagramWhite.png";
import Phone from "../../../shared/assets/Images/Phone.png";
import Email1 from "../../../shared/assets/Images/Email1.png";
import { useHistory } from "react-router-dom";

const Footer = (props) => {
    const { exploreFunctionHandler } = props;

    const history = useHistory();

    console.log({ exploreFunctionHandler });

    const handleRoutes = (id) => {
        exploreFunctionHandler(id);
        history.push("/");
    };

    return (
        <div className={classes.Footer}>
            <div className={classes.footerContentMainDiv}>
                <div className={[classes.footerContentColumn].join("")}>
                    <div style={{ width: "280px" }}>
                        <img src={FooterLogo} style={{ maxWidth: "65%" }} alt="Logo" />
                    </div>
                    <div>
                        <div style={{ padding: "5px 0" }}>
                            <div>
                                <h2 style={{ color: "#ED2324" }}>Contact Us</h2>
                            </div>
                        </div>
                        <div style={{ padding: "10px 0" }}>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "3px 0",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ marginRight: "10px" }}>
                                    <img src={Phone} alt="Call" />
                                </div>
                                <div>
                                    <a target="_blank" rel="noreferrer" href="tel:+1 514 550 3281" style={{ color: "#fff" }}>
                                        +1 514 550 3281
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "3px 0",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ marginRight: "10px" }}>
                                    <img src={Email1} alt="Email" />
                                </div>
                                <div>
                                    <a className={classes.sendEmailButton} href="mailto:ceo@softapps.io">
                                        ceo@softapps.io
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "3px 0",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ marginRight: "10px" }}>
                                    <img src={Email1} alt="Email" />
                                </div>
                                <div>
                                    <a className={classes.sendEmailButton} href="mailto:management@softapps.io">
                                        management@softapps.io
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "3px 0",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ marginRight: "10px" }}>
                                    <img src={Email1} alt="Email" />
                                </div>
                                <div>
                                    <a className={classes.sendEmailButton} href="mailto:careers@softapps.io">
                                        careers@softapps.io
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={[classes.footerContentColumn1].join(" ")}>
                    <div className={classes.footerContentColumn1Heading}>
                        <h1>Information</h1>
                    </div>
                    <div className={classes.footerContentColumn1Link}>
                        <p onClick={() => handleRoutes(0)}>Home</p>
                    </div>
                    <div className={classes.footerContentColumn1Link}>
                        <p onClick={() => handleRoutes(1)}>Services</p>
                    </div>
                    <div className={classes.footerContentColumn1Link}>
                        <p onClick={() => handleRoutes(2)}>About Us</p>
                    </div>
                    <div className={classes.footerContentColumn1Link}>
                        <p onClick={() => handleRoutes(3)}>Portfolio</p>
                    </div>
                    <div className={classes.footerContentColumn1Link}>
                        <p onClick={() => handleRoutes(4)}>Career</p>
                    </div>
                    <div className={classes.footerContentColumn1Link}>
                        <p onClick={() => handleRoutes(5)}>Contact Us</p>
                    </div>
                </div>
                <div className={[classes.footerContentColumn1].join(" ")}>
                    <div className={classes.footerContentColumn1Heading}>
                        <h1>Address</h1>
                    </div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/search/2192,+Avenue+d'Orleans+Montreal,+H1W249,+Canada./@45.5581968,-73.8703851,11z/data=!3m1!4b1"
                    >
                        <div style={{ margin: "10px 0" }} className={classes.footerContentColumn1Link}>
                            <p>2192, Avenue d'Orleans Montreal, H1W249, Canada.</p>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/search/87%2F12+Sugerland+Houston,+TX+7218,+USA./@29.5399778,-95.6063779,17z/data=!3m1!4b1"
                    >
                        <div style={{ margin: "10px 0" }} className={classes.footerContentColumn1Link}>
                            <p>87/12 Sugerland Houston, TX 7218, USA.</p>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/search/A26,+Block-6,+PECHS,+Karachi,+Sindh,+Pakistan./@24.8636431,67.070835,17z/data=!3m1!4b1"
                    >
                        <div style={{ margin: "10px 0" }} className={classes.footerContentColumn1Link}>
                            <p>A26, Block-6, PECHS, Karachi, Sindh, Pakistan.</p>
                        </div>
                    </a>
                </div>
                <div className={[classes.footerContentColumn1].join(" ")}>
                    <div className={classes.footerContentColumn1Heading}>
                        <h1 style={{ color: "#fff" }}>Connect with us</h1>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/softapps.io"
                            style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}
                        >
                            <img alt="Social" src={FacebookWhite} style={{ maxWidth: "100%" }} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/softapps.io/"
                            style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}
                        >
                            <img alt="Social" src={InstagramWhite} style={{ maxWidth: "100%" }} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/SoftappsI"
                            style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}
                        >
                            <img alt="Social" src={TwitterWhite} style={{ maxWidth: "100%" }} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/softapps-io/mycompany/"
                            style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}
                        >
                            <img alt="Social" src={LinkedinWhite} style={{ maxWidth: "100%" }} />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCmm8i8hNtK590FedEUtW4XA"
                            style={{ margin: "0 8px 0 0", width: "20px", height: "25px" }}
                        >
                            <img alt="Social" src={YoutubeWhite} style={{ maxWidth: "100%" }} />
                        </a>
                    </div>
                    <div style={{ padding: "10px 0" }}>
                        <div>
                            <h2 style={{ color: "#ED2324", padding: "0 0 20px 0" }}>About Us</h2>
                        </div>
                        <div>
                            <p style={{ width: "275px", fontSize: "90%", color: "#fff" }}>
                                SoftApps.io is a Canada-based sofware development company, with branches extended to the US and Pakistan. We
                                are a complete cycle application development company.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className={[classes.footerContentColumn1].join(" ")}>
                    <div>
                        <div className={classes.footerContentColumn1Heading}>
                            <h1>Subscribed</h1>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "#fff",
                                borderRadius: "20px",
                                height: "35px",
                                margin: "10px 0",
                            }}
                        >
                            <input
                                placeholder="Enter Email"
                                style={{
                                    flex: 1,
                                    backgroundColor: "transparent",
                                    border: "none",
                                    padding: "0 15px",
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button
                                style={{
                                    backgroundColor: "#ED2324",
                                    border: "none",
                                    color: "#fff",
                                    width: "35%",
                                    padding: "5px 0",
                                    borderRadius: "5px",
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;

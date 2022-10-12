import React from "react";
import classes from "./ContactInfo.module.css";
import PhoneRed from "../../../shared/assets/Images/PhoneRed.png";
import EmailRed from "../../../shared/assets/Images/EmailRed.png";

import FacebookWhite from "../../../shared/assets/Images/FacbookWhite.png";
import LinkedinWhite from "../../../shared/assets/Images/LinkedinWhite.png";
import TwitterWhite from "../../../shared/assets/Images/TwitterWhite.png";
import YoutubeWhite from "../../../shared/assets/Images/YoutubeWhite.png";
import InstagramWhite from "../../../shared/assets/Images/InstagramWhite.png";
import Map from "../../../shared/components/UIElements/Map";

const ContactInfo = (props) => {
    return (
        <div className={classes.ContactInfo} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "200px",
                    zIndex: 9999,
                    pointerEvents: "none",
                    margin: "auto",
                }}
            >
                <iframe
                    style={{ display: "inline-block", margin: "10px 7px", padding: 0 }}
                    title="unique"
                    src="https://free.timeanddate.com/clock/i7vd7m21/n757/szw110/szh100/hoc009/hbw1/hfc555/cf100/hnc000/fan2/facfff/fnu3/fdi84/mqcfff/mqs4/mql18/mqw8/mqd62/mhcfff/mhs4/mhl9/mhw4/mhd62/mmv0/hhcfff/hhs2/hhl50/hhb0/hhw30/hhr16/hmcfff/hms2/hml70/hmb0/hmw16/hmr10/hss3/hsl70/hsb0/hsw11/hsr7"
                    frameborder="0"
                    height="110"
                ></iframe>
                <iframe
                    title="unique"
                    style={{ display: "inline-block", margin: "10px 7px", padding: 0 }}
                    src="https://free.timeanddate.com/clock/i7vdlox9/n134/szw110/szh110/hoc009/hbw1/hfc555/cf100/hnc000/fan2/facfff/fnu3/fdi84/mqcfff/mqs4/mql18/mqd50/mhcfff/mhw4/mhd62/mmv0/hhcfff/hhs2/hhl50/hhb0/hhw30/hhr16/hmcfff/hms2/hml70/hmb0/hmw16/hmr10/hss3/hsl70/hsb0/hsw11/hsr7"
                    frameborder="0"
                    width="110"
                    height="110"
                ></iframe>
                <iframe
                    title="unique"
                    style={{ display: "inline-block", margin: "10px 7px", padding: 0 }}
                    src="https://free.timeanddate.com/clock/i7vdlox9/n165/szw110/szh110/hoc009/hbw1/hfc555/cf100/hnc000/fan2/facfff/fnu3/fdi84/mqcfff/mqs4/mql18/mqd50/mhcfff/mhw4/mhd62/mmv0/hhcfff/hhs2/hhl50/hhb0/hhw30/hhr16/hmcfff/hms2/hml70/hmb0/hmw16/hmr10/hss3/hsl70/hsb0/hsw11/hsr7"
                    frameborder="0"
                    width="110"
                    height="110"
                ></iframe>
            </div> */}
            <div className={classes.contactDetailDiv}>
                <div className={classes.detailDiv}>
                    <div>
                        <div>
                            <h1 className={classes.colHeading}>Address</h1>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <div>
                                <h2>Canada</h2>
                            </div>
                            <div>
                                <p>2192, Avenue d'Orleans Montreal, H1W249, Canada.</p>
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <div>
                                <h2>USA</h2>
                            </div>
                            <div>
                                <p>87/12 Sugerland Houston, TX 7218, USA.</p>
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <div>
                                <h2>Pakistan</h2>
                            </div>
                            <div>
                                <p>A26, Block-6, PECHS, Karachi, Sindh, Pakistan.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                            <h1 className={classes.colHeading}>Phone</h1>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                <img alt="Call" src={PhoneRed} style={{ maxWidth: "100%" }} />
                            </div>
                            <div>
                                <a href="tel:+15145503281" style={{ textDecoration: "none", fontWeight: "bold" }}>
                                    +1(514)550-3281
                                </a>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                            <h1 className={classes.colHeading}>Email</h1>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                            <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }}>
                                    <a href="mailto:ceo@softapps.io" style={{ textDecoration: "none", fontWeight: "bold" }}>
                                        ceo@softapps.io
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                            <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }}>
                                    <a href="mailto:management@softapps.io" style={{ textDecoration: "none", fontWeight: "bold" }}>
                                        management@softapps.io
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                            <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }}>
                                    <a href="mailto:careers@softapps.io" style={{ textDecoration: "none", fontWeight: "bold" }}>
                                        careers@softapps.io
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                                <h1 className={classes.colHeading}>Connect With Us</h1>
                            </div>
                            <div className={classes.socials} style={{ display: "flex", alignItems: "center" }}>
                                <a
                                    href="https://www.facebook.com/softapps.io/"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={FacebookWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://www.instagram.com/softapps.io/"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={InstagramWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://twitter.com/SoftappsI"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={TwitterWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://pk.linkedin.com/company/softapps-io"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={LinkedinWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCmm8i8hNtK590FedEUtW4XA"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={YoutubeWhite} style={{ maxWidth: "100%" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Map />
                {/* <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/SoftApps.io/@24.8682356,67.0730781,16.44z/data=!4m5!3m4!1s0x3eb33fd36cfaff9f:0x3c18dea14684aaf8!8m2!3d24.8682893!4d67.077202"
                    className={classes.mapDiv}
                >
                    {null}
                </a> */}
                {/* <iframe
                    title="map"
                    src="https://www.google.com/maps/d/u/0/embed?mid=14Zu3aTDWOm3PQ4kqiSlctzK_2AiurilS"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    style={{ marginTop: 40 }}
                ></iframe> */}
            </div>
        </div>
    );
};

export default ContactInfo;

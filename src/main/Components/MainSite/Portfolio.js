import React from "react";
import classes from "./Portfolio.module.css";
import PortfolioImage from "../../../shared/assets/Images/Portfolio.png";
import Clock from "../../../shared/components/UIElements/Clock";

const Portfolio = (props) => {
    return (
        <div className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <p>OUR</p>
                        <h1>PORTFOLIO</h1>

                        <div style={{ display: "flex", width: "100%", marginLeft: "-25px" }}>
                            <Clock small width={125} height={125} title={"Canada"} canada />
                            <Clock small width={125} height={125} title={"Pakistan"} pakistan />
                            <Clock small width={125} height={125} title={"USA"} usa />
                        </div>

                        {/* <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                width: "200px",
                                zIndex: 9999,
                                pointerEvents: "none",
                                margin: "0 auto 0 200px",
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
                        <span>
                            Here are some of our portfolios which are based on new and trending technologies with attractive UX & UI{" "}
                        </span>
                        <a href="#portfolio" onClick={() => props.exploreFunctionHandler("portfolio")}>
                            Explore
                        </a>
                    </div>
                </div>

                <div className={classes.Right}>
                    <img src={PortfolioImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

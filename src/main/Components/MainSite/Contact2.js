import React, { useState } from "react";
import ContactInfo from "../Navigations/ContactInfo";
import Footer from "../Navigations/Footer";
import classes from "./Contact2.module.css";

const Contact2 = (props) => {
    return (
        <div id="contact2" className={classes.Home}>
            <div className={classes.HomeWidth}>
                <ContactInfo />
            </div>
        </div>
    );
};

export default Contact2;

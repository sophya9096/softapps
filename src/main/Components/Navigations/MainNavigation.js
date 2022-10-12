import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import classes from "./MainNavigation.module.css";
import Logo from "../../../shared/assets/Images/Logo.png.svg";
import Whatsapp from "../../../shared/assets/Images/Whatsapp.png";
import Email from "../../../shared/assets/Images/Email.png";
import Call from "../../../shared/assets/Images/Call.png";
import { Drawer, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const MainNavigation = (props) => {
    const { exploreFunctionHandler, slideNumber } = props;
    const [headerOpen, setHeaderOpen] = useState(false);

    const home = useRef();
    const services = useRef();
    const portfolio = useRef();
    const about = useRef();
    const careers = useRef();
    const contact = useRef();
    const address = useRef();

    useEffect(() => {
        window.addEventListener("resize", () => {
            setHeaderOpen(false);
        });

        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    const exploreFalseFunctionHandler = (state) => {
        // state.current.click();
        exploreFunctionHandler(state);
    };

    const drawer = (
        <Drawer open={headerOpen} anchor="right" onClose={() => setHeaderOpen(false)}>
            <div className={classes.drawerOpen}>
                <img src={Logo} alt="" onClick={() => setHeaderOpen(false)} />
                <div className={classes.drawerOpenLinks}>
                    <Link to="/" className={slideNumber === 0 && classes.active} onClick={() => exploreFalseFunctionHandler(0)} ref={home}>
                        Home
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 1 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(1)}
                        ref={services}
                    >
                        Services
                    </Link>
                    <Link to="/" className={slideNumber === 2 && classes.active} onClick={() => exploreFalseFunctionHandler(2)} ref={about}>
                        About
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 3 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(3)}
                        ref={portfolio}
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 4 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(4)}
                        ref={careers}
                    >
                        Careers
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 5 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(5)}
                        ref={contact}
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/"
                        className={(slideNumber === 7 || slideNumber === 6) && classes.active}
                        onClick={() => exploreFalseFunctionHandler(6)}
                        ref={address}
                    >
                        Address
                    </Link>
                </div>
                <div className={classes.drawerIcons}>
                    <a href="mailto:softapps.io2@gmail.com">
                        <img src={Email} alt="Email SoftApps" />
                    </a>

                    <a href="tel:+15145503281">
                        <img src={Call} alt="Call SoftApps" />
                    </a>

                    <a target="_blank" rel="noreferrer" href="htto://wa.me/+15145503281">
                        <img src={Whatsapp} alt="Whatsapp SoftApps" />
                    </a>
                </div>
            </div>
        </Drawer>
    );

    return (
        <MainHeader>
            <div className={classes.MainNavigation}>
                <div className={classes.Logo}>
                    <div style={{ width: "90%" }}>
                        <Link onClick={() => exploreFalseFunctionHandler(0)} style={{ cursor: "pointer" }} to={`/`}>
                            <img src={Logo} alt="Logo SoftApps" />
                        </Link>
                    </div>
                </div>
                <div className={classes.NavLinks}>
                    <Link to="/" className={slideNumber === 0 && classes.active} onClick={() => exploreFalseFunctionHandler(0)} ref={home}>
                        Home
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 1 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(1)}
                        ref={services}
                    >
                        Services
                    </Link>
                    <Link to="/" className={slideNumber === 2 && classes.active} onClick={() => exploreFalseFunctionHandler(2)} ref={about}>
                        About Us
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 3 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(3)}
                        ref={portfolio}
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 4 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(4)}
                        ref={careers}
                    >
                        Careers
                    </Link>
                    <Link
                        to="/"
                        className={slideNumber === 5 && classes.active}
                        onClick={() => exploreFalseFunctionHandler(5)}
                        ref={contact}
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/"
                        className={(slideNumber === 7 || slideNumber === 6) && classes.active}
                        onClick={() => exploreFalseFunctionHandler(6)}
                        ref={address}
                    >
                        Address
                    </Link>
                </div>
                <div className={classes.RightNavLinks}>
                    <a href="mailto:softapps.io2@gmail.com">
                        <img src={Email} alt="Email SoftApps" />
                    </a>

                    <a href="tel:+15145503281">
                        <img src={Call} alt="Call SoftApps" />
                    </a>

                    <a target="_blank" rel="noreferrer" href="htto://wa.me/+15145503281">
                        <img src={Whatsapp} alt="Whatsapp SoftApps" />
                    </a>
                </div>
                <IconButton className={classes.headerMenuBtn} onClick={() => setHeaderOpen(true)}>
                    <Menu />
                </IconButton>
                {drawer}
            </div>
        </MainHeader>
    );
};

export default MainNavigation;

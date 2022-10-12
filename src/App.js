import React, { useEffect } from "react";
import Layout from "./Main/Layout/Layout";
import LayoutMobTab from "./Main/Layout/Layout2";
import classes from "./App.module.css";
import { isMobile, isTablet } from "react-device-detect";
import SubcriptionForm from "./shared/components/SubscriptionForm";
// import { useSlide } from "./shared/hooks/slide-hook";
// import { SlideContext } from "./shared/context/slide-context";
// import { Helmet } from "react-helmet";

function App() {
    useEffect(() => {
        window.location.origin === "https://softapp-io.web.app" && window.location.replace("https://softapps.io/");
    }, []);

    let content;
    content = <Layout />;

    if (isMobile || isTablet) {
        content = <LayoutMobTab />;
    }
    return (
        <div className={classes.App}>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="SoftApps.io is a Canada-based sofware development company, with branches extended to the US and Pakistan. We are a complete cycle application development company."
                />
                <meta
                    name="og:description"
                    content="SoftApps.io is a Canada-based sofware development company, with branches extended to the US and Pakistan. We are a complete cycle application development company."
                />
            </Helmet> */}

            <SubcriptionForm />
            {content}
        </div>
    );
}

export default App;

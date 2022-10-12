import { Backdrop, CircularProgress } from "@material-ui/core";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainNavigation from "../Components/Navigations/MainNavigation";
import classes from "./Layout.module.css";

const MainPage = React.lazy(() => import("../Components/MainSite/0MainPage"));
const Blogs = React.lazy(() => import("../Components/Pages/Blogs"));

// localStorage.setItem(
//     "userData",
//     JSON.stringify({
//         email,
//         userId: uId,
//         token: token,
//         userName,
//         userCell,
//         // expirationDate: tokenExpirationDate.toISOString(),
//     }),
// );
// const storedData = JSON.parse(localStorage.getItem("userData"));

const Layout = (props) => {
    // const { exploreState, setExploreStateHandler } = useSlide();
    const [exploreState, setExploreState] = useState(undefined);
    const [slideNumber, setSlideNumber] = useState(0);

    useEffect(() => {
        localStorage.setItem(
            "exploreState",
            JSON.stringify({
                exploreState: undefined,
            }),
        );
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            const localState = JSON.parse(localStorage.getItem("exploreState"));
            if (!localState?.exploreState && event.key === "ArrowRight") {
                setSlideNumber((prState) => {
                    if (prState === 6) return 6;
                    return (prState += 1);
                });
            }
            if (!localState?.exploreState && event.key === "ArrowLeft") {
                setSlideNumber((prState) => {
                    if (prState === 0) return 0;
                    return (prState -= 1);
                });
            }
        });

        return () => window.removeEventListener("keydown", (event) => {});
    }, []);

    const setSlideNumberHandler = (id) => {
        setSlideNumber(id);
    };

    const exploreStateHandler = (state) => {
        console.log("exploreStateHandler", { state });
        if (state >= 0) {
            localStorage.setItem(
                "exploreState",
                JSON.stringify({
                    exploreState: undefined,
                }),
            );
            setExploreState(undefined);
            setSlideNumberHandler(state);
        } else {
            setExploreState(state);
            localStorage.setItem(
                "exploreState",
                JSON.stringify({
                    exploreState: state,
                }),
            );
        }
    };

    const setPreviousSlideNumberHandler = (id) => {
        setSlideNumber((prState) => {
            if (prState === 0) return 0;
            return (prState -= 1);
        });
    };
    const setNextSlideNumberHandler = (id) => {
        setSlideNumber((prState) => {
            if (prState === 6) return 6;
            return (prState += 1);
        });
    };

    const transformScroll = useCallback(async (event) => {
        const exploreState1 = await JSON.parse(localStorage.getItem("exploreState")).exploreState;
        // console.log("event", event, exploreState1);
        // console.log({ deltaY: event.deltaY, deltaX: event.deltaX, deltaZ: event.deltaZ, wheelDelta: event });
        if (exploreState1) {
            console.log("If", { exploreState1 });
            if (event.deltaY < 0) {
                window.scrollBy(0, -350);
                // event.preventDefault();
            } else {
                window.scrollBy(0, 350);
                // event.preventDefault();
            }
            return;
        } else {
            console.log("Else", { exploreState1 });
            if (event.deltaY < 0) {
                setPreviousSlideNumberHandler();
            } else {
                setNextSlideNumberHandler();
            }
        }
    }, []);
    // const transformScroll = useCallback(
    //     (event) => {
    //         const exploreState = JSON.parse(localStorage.getItem("exploreState")).exploreState;
    //         console.log("event", event, exploreState);
    //         if (exploreState) {
    //             console.log("If");
    //             if (event.deltaY < 0) {
    //                 window.scrollBy(0, -350);
    //                 event.preventDefault();
    //             } else {
    //                 window.scrollBy(0, 350);
    //                 event.preventDefault();
    //             }
    //             return;
    //         } else {
    //             console.log("Else");
    //             if (event.deltaY < 0) {
    //                 setPreviousSlideNumberHandler();
    //                 event.preventDefault();
    //             } else {
    //                 setNextSlideNumberHandler();
    //                 event.preventDefault();
    //             }
    //         }
    //         // window.scrollBy(0, -350);
    //     },
    //     [exploreState],
    // );
    // var element = document.scrollingElement;
    // element.addEventListener("wheel", transformScroll);
    // window.addEventListener("wheel", (event) => {

    //     console.log("eventScroll", event);
    // });
    window.addEventListener("wheel", transformScroll);

    let routes;
    routes = (
        <Switch>
            <Route
                path="/"
                exact
                render={(props) => (
                    <MainPage
                        {...props}
                        setPreviousSlideNumberHandler={setPreviousSlideNumberHandler}
                        setNextSlideNumberHandler={setNextSlideNumberHandler}
                        slideNumber={slideNumber}
                        exploreState={exploreState}
                        exploreStateHandler={exploreStateHandler}
                    />
                )}
            />
            <Route path={`/blog/:id`} exact render={(props) => <Blogs exploreStateHandler={exploreStateHandler} {...props} />} />
            <Redirect from="/*" to="/" />
        </Switch>
    );

    return (
        <div className={classes.Layout}>
            <div className={classes.Layout__Contaienr}>
                <Suspense
                    fallback={
                        <Backdrop className={classes.backdrop} open={true}>
                            <CircularProgress style={{ color: "red" }} />
                        </Backdrop>
                    }
                >
                    <MainNavigation
                        slideNumber={slideNumber}
                        setSlideNumberHandler={setSlideNumberHandler}
                        exploreFunctionHandler={exploreStateHandler}
                    />
                    <div>{routes}</div>
                </Suspense>
            </div>
        </div>
    );
};

export default Layout;

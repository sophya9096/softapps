import { useState } from "react";

export const useSlide = () => {
    const [exploreState, setExploreState] = useState(undefined);
    const [slideNumber, setSlideNumber] = useState(2);

    const setExploreStateHandler = async (id) => {
        console.log("setExploreStateHandler", id);
        setExploreState(id);
    };
    const setSlideNumberHandler = async (id) => {
        setSlideNumber(id);
    };

    return {
        exploreState,
        setExploreStateHandler,
        slideNumber,
        setSlideNumberHandler,
    };
};

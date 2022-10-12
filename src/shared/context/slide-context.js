import { createContext } from "react";

export const SlideContext = createContext({
    exploreState: "",
    setExploreStateHandler: () => {},
    slideNumber: 2,
    setSlideNumberHandler: () => {},
});

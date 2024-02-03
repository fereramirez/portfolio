import { useContext } from "react";

import AnimationContext from "../contexts/AnimationContext.jsx";

const useAnimationContext = () => {
  const {
    runFadeOut,
    runPop,
    runCoverFadeOut,
    linkSelected,
    handleLinkSelected,
  } = useContext(AnimationContext);

  return {
    runFadeOut,
    runPop,
    runCoverFadeOut,
    linkSelected,
    handleLinkSelected,
  };
};

export default useAnimationContext;

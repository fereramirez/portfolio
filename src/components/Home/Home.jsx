import { Outlet, useLocation } from "react-router-dom";

import useLanguageContext from "../../hooks/useLanguageContext";
import useAnimationContext from "../../hooks/useAnimationContext";
import GridBackground from "../common/GridBackground";
import Title from "./Title";
import {
  GRID_ITEMS_QUANTITY,
  SECTION_ABOUT,
  SECTION_CONTACT,
  SECTION_PROJECTS,
} from "../../utils/constants";

import "./Home.scss";

const Home = () => {
  const location = useLocation();

  const { texts } = useLanguageContext();
  const { runCoverFadeOut, handleLinkSelected } = useAnimationContext();

  return (
    <>
      <div
        className={`home-container${
          location.pathname !== "/" ? " not-home" : ""
        }`}
      >
        {location.pathname === "/" && (
          <>
            <GridBackground position="left" quantity={GRID_ITEMS_QUANTITY} />

            <Title
              text={SECTION_PROJECTS}
              label={texts.home[SECTION_PROJECTS]}
              onClick={() => handleLinkSelected(SECTION_PROJECTS)}
              onKeyDown={() => handleLinkSelected(SECTION_PROJECTS)}
            />
            <Title
              text={SECTION_ABOUT}
              label={texts.home[SECTION_ABOUT]}
              onClick={() => handleLinkSelected(SECTION_ABOUT)}
              onKeyDown={() => handleLinkSelected(SECTION_ABOUT)}
            />
            <Title
              text={SECTION_CONTACT}
              label={texts.home[SECTION_CONTACT]}
              onClick={() => handleLinkSelected(SECTION_CONTACT)}
              onKeyDown={() => handleLinkSelected(SECTION_CONTACT)}
            />
          </>
        )}

        <div
          className={`total-cover${
            runCoverFadeOut ? " total-cover-active" : ""
          }`}
        >
          <GridBackground
            color="purple"
            position="right"
            quantity={GRID_ITEMS_QUANTITY}
          />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;

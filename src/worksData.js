import { v4 as uuidv4 } from "uuid";

import reactIcon from "./icons/react.svg";
import sassIcon from "./icons/sass.svg";
import routerIcon from "./icons/react-router.svg";
import reduxIcon from "./icons/redux.svg";
import styledIcon from "./icons/styled.svg";
import nodejsIcon from "./icons/nodejs.svg";
import framerIcon from "./icons/framer.svg";
import typescript from "./icons/typescript.svg";
import formikIcon from "./icons/formik.svg";

import wavesVid from "./videos/Waves.webm";
import captureVid from "./videos/Capture.webm";
import igniteVid from "./videos/Ignite.webm";
import divineVid from "./videos/Divine.webm";
import marvelVid from "./videos/Marvel.webm";

const worksData = [
  {
    id: uuidv4(),
    title: "Waves",
    video: wavesVid,
    icons: [reactIcon, sassIcon],
    description: "Music streaming website, with Lo-Fi songs.",
    githubUrl: "https://github.com/IsekaiGuy/Waves-Music-App",
    projectUrl: "https://affectionate-curran-cbb49b.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Capture",
    video: captureVid,
    icons: [reactIcon, routerIcon, styledIcon, framerIcon],
    description:
      "Landing page for video editing / photo studios, photographers.",
    githubUrl: "https://github.com/IsekaiGuy/Capture",
    projectUrl: "https://relaxed-nobel-9a0077.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Marvel Information Portal",
    video: marvelVid,
    icons: [reactIcon, routerIcon, formikIcon, sassIcon],
    description:
      "Marvel information portal, where you can find information about any Marvel hero or comicbook.",
    githubUrl: "https://github.com/IsekaiGuy/Marvel-Portal",
    projectUrl: "https://hungry-curie-192bea.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Ignite",
    video: igniteVid,
    icons: [
      reactIcon,
      reduxIcon,
      routerIcon,
      styledIcon,
      framerIcon,
      typescript,
    ],
    description:
      "Videogames search database, with auto updating infomation about upcoming games. Using Rawg.io API.",
    githubUrl: "https://github.com/IsekaiGuy/Ignite",
    projectUrl: "https://stupefied-northcutt-cb1b60.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Divination Market (In Progress)",
    video: divineVid,
    icons: [nodejsIcon, reactIcon, reduxIcon, routerIcon, sassIcon, framerIcon],
    description:
      "Market for extraordinary services: astrologists, shamans and other gifted people, can sell here their services.",
    githubUrl: "https://github.com/IsekaiGuy/DivineProject",
    projectUrl: "https://eloquent-kirch-1e81b7.netlify.app/",
  },
  // {
  //   id: "0004",
  //   title: "VideoChat",
  //   image: webrtc,
  //   description: "App for video calls",
  //   githubUrl: "githuburl",
  //   projectUrl: "projectUrl",
  // },
];

export default worksData;

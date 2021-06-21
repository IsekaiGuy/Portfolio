import React, { useEffect, useState, Suspense } from "react";
import { Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Startscreen from "./components/Startscreen";
import AboutMe from "./components/AboutMe";
// import MyWorks from "./components/MyWorks";
import ContactMe from "./components/ContactMe";
import GlobalStyle from "./components/GlobalStyle";

const MyWorks = React.lazy(() => import("./components/MyWorks"));

function App() {
  const [state, setState] = useState(false);
  const [bgVideo, setBgvideo] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setBgvideo(!bgVideo);
  }, [inView]);

  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/">
        <Startscreen bgVideo={bgVideo} snap={state} />
        <div ref={ref2}>
          <AboutMe />
        </div>
        <Suspense
          fallback={
            <h2 style={{ textAlign: "center" }}>Projects Loading...</h2>
          }
        >
          <MyWorks />
        </Suspense>
        <div ref={ref}>
          <ContactMe neonChanger={setState} />
        </div>
      </Route>
    </div>
  );
}

export default App;

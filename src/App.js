import React, { useEffect, useState, Suspense } from "react";
import { Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Startscreen from "./components/Startscreen";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import GlobalStyle from "./components/GlobalStyle";

const MyWorks = React.lazy(() => import("./components/MyWorks"));

function App() {
  const [state, setState] = useState(false);
  const [bgVideo, setBgvideo] = useState(false);

  const { ref, inView } = useInView();

  useEffect(() => {
    setBgvideo(!bgVideo);
  }, [inView]);

  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/">
        <Startscreen bgVideo={bgVideo} snap={state} />
        <AboutMe />

        <Suspense
          fallback={
            <h2 style={{ textAlign: "center" }}>Projects Loading...</h2>
          }
        >
          <MyWorks />
        </Suspense>
        <div ref={ref}>
          <ContactMe neonChanger={setState} inView={inView} />
        </div>
      </Route>
    </div>
  );
}

export default App;

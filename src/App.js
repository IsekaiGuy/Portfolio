import { useState, Suspense, useCallback, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Startscreen from "./components/Startscreen";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import GlobalStyle from "./components/GlobalStyle";
import Background from "./components/Background";

const MyWorks = lazy(() => import("./components/MyWorks"));

function App() {
  const [state, setState] = useState(false);

  const { ref, inView } = useInView({threshold: .5});

  const View = useCallback(() => {
    return (
      <div ref={ref}>
        <ContactMe neonChanger={setState} inView={inView} />
      </div>
    );
  }, [inView, ref]);

  return (
    <div className="App">
      <GlobalStyle />
      <Startscreen snap={state} />
      <AboutMe />
      <Suspense
        fallback={
            <h2 style={{ textAlign: "center" }}>
                Projects Loading...
            </h2>
        }
      >
        <MyWorks />
      </Suspense>
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
      <Background bgVideo={inView} />
    </div>
  );
}

export default App;

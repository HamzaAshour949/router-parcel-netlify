import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function MainView() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ul>
                  <li>
                    <Link to={`/`}>homepagee</Link>
                  </li>
                  <li>
                    <Link to={`/page2`}>page2</Link>
                  </li>
                  <li>
                    <Link to={`/page3`}>page3</Link>
                  </li>
                </ul>
                <div>this is the homepage at /</div>
              </>
            }
          />
          <Route
            path="/page2"
            element={
              <>
                <div>this is the page2 at /page2</div>
                <Link to={`/`}>back</Link>
              </>
            }
          />
          <Route
            path="/page3"
            element={
              <>
                <div>this is the page3 at /page3</div>
                <Link to={`/`}>back</Link>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainView;

import "./App.css";
import { Route, unstable_HistoryRouter as HistoryRouter, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from './page/Home'
import About from './page/About'
import {history} from './utils/history'
function App() {
  return (
    <div className="App">
      <HistoryRouter>
        <Suspense
          fallback={
            <div
              style={{
                textAlign: "center",
                marginTop: 200,
              }}
            >
              loading...
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </Suspense>
      </HistoryRouter>
    </div>
  );
}

export default App;

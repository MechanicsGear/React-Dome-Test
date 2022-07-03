import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from './page/Home'
import About from './page/About'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            <Route path='/about' element={<about/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from "react";
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
          <Routes></Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

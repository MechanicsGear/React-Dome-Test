import "./App.css";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from "react";
import Home from './page/Home'
import About from './page/About'
import Login from './page/Login'
import Layout from "./page/Layout";
import { AuthComponent } from "./component/Bar/AuthComponent";
import {history} from './utils/history'
function App() {
  return (
    <div className="App">
      <HistoryRouter history={history}>
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
          <Routes >
            <Route path='/' element={
            <AuthComponent>
              <Layout></Layout>
            </AuthComponent>
          }>
            <Route index element={<Home/>}></Route>
            {/* <Route path='/' element={<Home/>}></Route> */}
            <Route path='/about' element={<About/>}></Route>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
          </Routes>
         
        </Suspense>
      </HistoryRouter>
    </div>
  );
}

export default App;

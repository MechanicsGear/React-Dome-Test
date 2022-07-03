import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import { Suspense } from 'react';
function App() {
  return (
    <div className="App">
      <Suspense fallback = {
        <div style={{
          textAlign:'center',
          marginTop:200
        }}>
          loading...
        </div>
      }>

      </Suspense>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

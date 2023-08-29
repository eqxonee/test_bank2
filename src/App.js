
import {Route, Routes} from "react-router-dom";
import Test2 from "./Test2";


function App() {
  return (
      <div>
          <Routes>
        <Route path="/" element={<Test2/>}/>
          </Routes>
      </div>
  );
}

export default App;

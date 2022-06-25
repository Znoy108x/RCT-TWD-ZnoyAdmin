import Home from "./pages/Home"
import Login from "./pages/Login"
import New from "./pages/New"
import Single from "./pages/Single"
import List from "./pages/List"

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New title={"New User"}/>}/>
        </Route>
        <Route path ="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New title={"New Product"}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
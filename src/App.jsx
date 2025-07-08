import "./App.css"
import {Routes, Route, Navigate} from "react-router-dom";
import Overview from "./pages/Overview/Overview.jsx";
import Login from "./pages/Login/Login.jsx";
import AccessManagement from "./pages/AccessManagement/AccessManagement.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import Search from "./pages/Search/Search.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
      <>
          <div>
              <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/login" element={<Login />}/>
                  <Route path="/account" element={<AccessManagement />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="*" element={<NotFound />}/>
              </Routes>
          </div>
      </>
  )
}

export default App

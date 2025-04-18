import Form from "./components/Form"
import Home from "./components/Home"
import MyCareerPath from "./components/MyCareerPath"
import Navbar from "./components/Navbar"
import {Routes,Route, BrowserRouter} from 'react-router-dom'

MyCareerPath
function App() {
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/MyCareerPath" element={<MyCareerPath/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

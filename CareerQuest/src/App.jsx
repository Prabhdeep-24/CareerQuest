import Form from "./components/Form"
import Home from "./components/Home"
import MyCareerPath from "./components/MyCareerPath"
import Navbar from "./components/Navbar"
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import { FormProvider } from "./utilities/FormContext"
import CareerDetails from "./components/CareerDetails"
import CareerPath from "./components/CareerPath"


function App() {
  return(
    <div>
      <BrowserRouter>
      <FormProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/MyCareerPath" element={<MyCareerPath/>}/>
          <Route path="/career/:title" element={<CareerDetails/>}/>
          <Route path="/careerPath/:title" element={<CareerPath/>}/>
        </Routes>
      </FormProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

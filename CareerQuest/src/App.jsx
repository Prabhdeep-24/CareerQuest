import {Routes,Route, BrowserRouter} from 'react-router-dom'
import { FormProvider } from "./utilities/FormContext"
import { lazy } from "react"
const Home=lazy(()=>import("./components/Home"));
const Navbar=lazy(()=>import("./components/Navbar"))
const MyCareerPath=lazy(()=>import("./components/MyCareerPath"))
const CareerDetails=lazy(()=>import("./components/CareerDetails"))
const CareerPath=lazy(()=>import("./components/CareerPath"))
const Form=lazy(()=>import("./components/Form"))

function App() {
  return(
    <div>
      <BrowserRouter basename='/CareerQuest'>
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

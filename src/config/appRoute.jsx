import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Blog from "../screen/blog"
import DetailBlog from "../screen/detailblog"
import HeaderType from "../component/headertype"
import ModelActorinFluence from "../screen/modelactoinflu"
import Aboutus from "../screen/aboutus"
import ModelProfile from "../screen/modelprofile"
import ApplyForm from "../screen/applyform"
import Testimonial from "../screen/Testimonial"
import AllTalent from "../screen/allTalent"

export default function AppRoute() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<HeaderType/>}/>
            <Route path="/blog" element={<DetailBlog/>}/>
            <Route path="/tbitalent" element={<ModelActorinFluence/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/profile" element={<ModelProfile/>}/>
            <Route path="/apply" element={<ApplyForm/>}/>
            <Route path="/testimonial" element={<Testimonial/>}/>
            <Route path="/collection" element={<AllTalent/>}/>
        </Routes>
      </Router>
    </>
  )
}

import "./Component CSS/Tentang.css"
import Footer from "../assets/Footer"
import Navbar from "../assets/Navbar"
import Datadiri from "./Datadiri"
import Biodata from "./Biodata"

import Pagetentang from "./Sub Component/Pagetentang"


function Tentang() {
  return (
    <div className="tentang">
      <div className="tentang-nav">

      </div>

      <Navbar/>
      <div className="tentang-body">
      <Pagetentang/>
      <Datadiri/>
      <Biodata/>
      </div>
      <Footer/>
    </div>
  )
}

export default Tentang
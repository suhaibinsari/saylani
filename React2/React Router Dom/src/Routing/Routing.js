import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Section from '../components/Section/Section'

import React from 'react'

export default function Routing() {
    return (
        <div>

<Router>
<Header/>
      <Routes>
         
        <Route>
          <Route path="/" element={<Header />} />
          <Route path="Section" element={<Section />} />
          <Route path="Footer" element={<Footer />} />
        
        </Route>
      </Routes>
      <Footer/>
    </Router>

        </div>
    )
}

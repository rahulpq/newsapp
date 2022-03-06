import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (

              <Router>
              
            <Navbar />
            <Routes> <Route exact path="/ae" element ={<News key="ae" country="ae"/>}/>
            <Route exact path="/ar" element ={<News key="ar" country="ar"/>}/>
            <Route exact path="/at" element ={<News key="at" country="at"/>}/>
            <Route exact path="/au" element ={<News key="au" country="au"/>}/>
            <Route exact path="/be" element ={<News key="be" country="be"/>}/>
            <Route exact path="/bg" element ={<News key="bg" country="bg"/>}/>
            <Route exact path="/br" element ={<News key="br" country="br"/>}/>
            <Route exact path="/ca" element ={<News key="ca" country="ca"/>}/>
            <Route exact path="/ch" element ={<News key="ch" country="ch"/>}/>
            <Route exact path="/cn" element ={<News key="cn" country="cn"/>}/>
            <Route exact path="/co" element ={<News key="co" country="co"/>}/>
            <Route exact path="/cu" element ={<News key="cu" country="cu"/>}/>
            <Route exact path="/cz" element ={<News key="cz" country="cz"/>}/>
            <Route exact path="/de" element ={<News key="de" country="de"/>}/>
            <Route exact path="/eg" element ={<News key="eg" country="eg"/>}/>
            <Route exact path="/fr" element ={<News key="fr" country="fr"/>}/>
            <Route exact path="/gb" element ={<News key="gb" country="gb"/>}/>
            <Route exact path="/gr" element ={<News key="gr" country="gr"/>}/>
            <Route exact path="/hk" element ={<News key="hk" country="hk"/>}/>
            <Route exact path="/hu" element ={<News key="hu" country="hu"/>}/>
            <Route exact path="/id" element ={<News key="id" country="id"/>}/>
            <Route exact path="/ie" element ={<News key="ie" country="ie"/>}/>
            <Route exact path="/il" element ={<News key="il" country="il"/>}/>
            <Route exact path="/in" element ={<News key="in" country="in"/>}/>
            <Route exact path="/it" element ={<News key="it" country="it"/>}/>
            <Route exact path="/jp" element ={<News key="jp" country="jp"/>}/>
            <Route exact path="/kr" element ={<News key="kr" country="kr"/>}/>
            <Route exact path="/lt" element ={<News key="lt" country="lt"/>}/>
            <Route exact path="/lv" element ={<News key="lv" country="lv"/>}/>
            <Route exact path="/ma" element ={<News key="ma" country="ma"/>}/>
            <Route exact path="/mx" element ={<News key="mx" country="mx"/>}/>
            <Route exact path="/my" element ={<News key="my" country="my"/>}/>
            <Route exact path="/ng" element ={<News key="ng" country="ng"/>}/>
            <Route exact path="/nl" element ={<News key="nl" country="nl"/>}/>
            <Route exact path="/no" element ={<News key="no" country="no"/>}/>
            <Route exact path="/nz" element ={<News key="nz" country="nz"/>}/>
            <Route exact path="/ph" element ={<News key="ph" country="ph"/>}/>
            <Route exact path="/pl" element ={<News key="pl" country="pl"/>}/>
            <Route exact path="/pt" element ={<News key="pt" country="pt"/>}/>
            <Route exact path="/ro" element ={<News key="ro" country="ro"/>}/>
            <Route exact path="/rs" element ={<News key="rs" country="rs"/>}/>
            <Route exact path="/ru" element ={<News key="ru" country="ru"/>}/>
            <Route exact path="/sa" element ={<News key="sa" country="sa"/>}/>
            <Route exact path="/se" element ={<News key="se" country="se"/>}/>
            <Route exact path="/sg" element ={<News key="sg" country="sg"/>}/>
            <Route exact path="/si" element ={<News key="si" country="si"/>}/>
            <Route exact path="/sk" element ={<News key="sk" country="sk"/>}/>
            <Route exact path="/th" element ={<News key="th" country="th"/>}/>
            <Route exact path="/tr" element ={<News key="tr" country="tr"/>}/>
            <Route exact path="/tw" element ={<News key="tw" country="tw"/>}/>
            <Route exact path="/ua" element ={<News key="ua" country="ua"/>}/>
            <Route exact path="/us" element ={<News key="us" country="us"/>}/>
            <Route exact path="/ve" element ={<News key="ve" country="ve"/>}/>
            <Route exact path="/za" element ={<News key="za" country="za"/>}/>
              
            <Route exact path= "/general"  element= {<News key="general" pageSize={this.pageSize} country='in' category="general"/>}/>
            <Route exact path= "/business"  element={<News key="business" pageSize={this.pageSize}  country='in'  category="business"/>}/>
            <Route exact path= "/entertainment"  element={<News key="entertainment" pageSize={this.pageSize} country='in'  category="entertainment"/>}/>
            <Route exact path= "/health" element= {<News  key="health" pageSize={this.pageSize}  country='in' category="health"/>}/>
            <Route exact path= "/science"  element= {<News key="science" pageSize={this.pageSize}  country='in'  category="science"/>}/>
            <Route exact path= "/sports"  element=  {<News key="sports" pageSize={this.pageSize}  country='in'  category="sports"/>}/>
            <Route exact path= "/technology"  element={<News key="technology" pageSize={this.pageSize}  country='in'  category="technology"/>}/>
            </Routes>
      
            </Router>
    )
  }
}

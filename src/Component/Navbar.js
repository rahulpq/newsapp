import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
        </ul>
        
        </div>
        <div className="dropdown">
            
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Country
        </button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1  collapse bd-links">
            <li><Link className="dropdown-item"to="/ae">ae</Link></li>
            <li><Link className="dropdown-item"to="/ar">ar</Link></li>
            <li><Link className="dropdown-item"to="/at">at</Link></li>
            <li><Link className="dropdown-item"to="/au">au</Link></li>
            <li><Link className="dropdown-item"to="/be">be</Link></li>
            <li><Link className="dropdown-item"to="/bg">bg</Link></li>
            <li><Link className="dropdown-item"to="/br">br</Link></li>
            <li><Link className="dropdown-item"to="/ca">ca</Link></li>
            <li><Link className="dropdown-item"to="/ch">ch</Link></li>
            <li><Link className="dropdown-item"to="/cn">cn</Link></li>
            <li><Link className="dropdown-item"to="/co">co</Link></li>
            <li><Link className="dropdown-item"to="/cu">cu</Link></li>
            <li><Link className="dropdown-item"to="/cz">cz</Link></li>
            <li><Link className="dropdown-item"to="/de">de</Link></li>
            <li><Link className="dropdown-item"to="/eg">eg</Link></li>
            <li><Link className="dropdown-item"to="/fr">fr</Link></li>
            <li><Link className="dropdown-item"to="/gb">gb</Link></li>
            <li><Link className="dropdown-item"to="/gr">gr</Link></li>
            <li><Link className="dropdown-item"to="/hk">hk</Link></li>
            <li><Link className="dropdown-item"to="/hu">hu</Link></li>
            <li><Link className="dropdown-item"to="/id">id</Link></li>
            <li><Link className="dropdown-item"to="/ie">ie</Link></li>
            <li><Link className="dropdown-item"to="/il">il</Link></li>
            <li><Link className="dropdown-item"to="/in">in</Link></li>
            <li><Link className="dropdown-item"to="/it">it</Link></li>
            <li><Link className="dropdown-item"to="/jp">jp</Link></li>
            <li><Link className="dropdown-item"to="/kr">kr</Link></li>
            <li><Link className="dropdown-item"to="/lt">lt</Link></li>
            <li><Link className="dropdown-item"to="/lv">lv</Link></li>
            <li><Link className="dropdown-item"to="/ma">ma</Link></li>
            <li><Link className="dropdown-item"to="/mx">mx</Link></li>
            <li><Link className="dropdown-item"to="/my">my</Link></li>
            <li><Link className="dropdown-item"to="/ng">ng</Link></li>
            <li><Link className="dropdown-item"to="/nl">nl</Link></li>
            <li><Link className="dropdown-item"to="/no">no</Link></li>
            <li><Link className="dropdown-item"to="/nz">nz</Link></li>
            <li><Link className="dropdown-item"to="/ph">ph</Link></li>
            <li><Link className="dropdown-item"to="/pl">pl</Link></li>
            <li><Link className="dropdown-item"to="/pt">pt</Link></li>
            <li><Link className="dropdown-item"to="/ro">ro</Link></li>
            <li><Link className="dropdown-item"to="/rs">rs</Link></li>
            <li><Link className="dropdown-item"to="/ru">ru</Link></li>
            <li><Link className="dropdown-item"to="/sa">sa</Link></li>
            <li><Link className="dropdown-item"to="/se">se</Link></li>
            <li><Link className="dropdown-item"to="/sg">sg</Link></li>
            <li><Link className="dropdown-item"to="/si">si</Link></li>
            <li><Link className="dropdown-item"to="/sk">sk</Link></li>
            <li><Link className="dropdown-item"to="/th">th</Link></li>
            <li><Link className="dropdown-item"to="/tr">tr</Link></li>
            <li><Link className="dropdown-item"to="/tw">tw</Link></li>
            <li><Link className="dropdown-item"to="/ua">ua</Link></li>
            <li><Link className="dropdown-item"to="/us">us</Link></li>
            <li><Link className="dropdown-item"to="/ve">ve</Link></li>
            <li><Link className="dropdown-item"to="/za">za</Link></li>
    </ul>
    </div>
</div>

    </nav>
        </div>
)
}
}

export default Navbar

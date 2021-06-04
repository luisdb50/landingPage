import React from "react"

import "../css/header.css"

import steve_icon from "../img/home_icon.png"
import about_icon from "../img/about_icon.png"
import info_icon from "../img/info_icon.png"
import contact_icon from "../img/contact_icon.gif"
import down_icon from "../img/down_icon.png"

import {Content} from "./Content"
import {Footer} from "./Footer"

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            print: "home"
        }

        this.action = this.action.bind(this);
    }

    action(pag){
        this.setState({print: pag})
    }

    render(){
        return(
            <div className="div_content">

                <header className="content_header">
                    <div className="header_logo">
                        <img alt="icono" src="https://unbloquemas.files.wordpress.com/2013/08/minecraft_logo.png" />
                    </div>

                    <nav className="header_nav">
                        <ul className="nav_ul">
                            <li>
                                <p onClick={()=> this.action("home")}>CASA</p>
                                <img alt="icono" src={steve_icon} />
                            </li>

                            <li>
                                <p onClick={()=> this.action("about")}>SOBRE</p>
                                <img alt="icono" src={about_icon} />
                            </li>

                            <li>
                                <p onClick={()=> this.action("info")}>INFORMACION</p>
                                <img alt="icono" src={info_icon} />
                            </li>

                            <li>
                                <p onClick={()=> this.action("down")}>DESCARGAR</p>
                                <img alt="icono" src={down_icon} />
                            </li>

                            <li>
                                <p onClick={()=> this.action("cont")}>CONTACTO</p>
                                <img alt="icono" src={contact_icon} />
                            </li>
                        </ul>
                    </nav>
                </header>

                <Content pag={this.state.print} />
                <Footer />
            </div>
        );
    }
} 
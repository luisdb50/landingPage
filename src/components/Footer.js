import React from "react";

import "../css/footer.css"

import creeper from "../img/footer_1.gif"
import piglin from "../img/footer_2.gif"
import face_logo from "../img/face_logo.png"
import mobile_logo from "../img/mobile_logo.png"
import mail_logo from "../img/mail_logo.png"
import mojang_logo from "../img/mojang_logo.png"

export function Footer(){

    function active(par){
        if(par === 1){
            let element = document.querySelector(".ul_fli img");
            element.style.cssText= "transition: 1s; margin-left: 215px; padding-right: 1px"

        } else if(par === 2){
            let element = document.querySelector(".ul_sli img");
            element.style.cssText= "transition: 1s; margin-left: 215px; padding-right: 1px"
        
        } else if(par === 3){
            let element = document.querySelector(".ul_tli img");
            element.style.cssText= "transition: 1s; margin-left: 215px; padding-right: 1px"
        } 
    }

    return(

        <footer className="content_footer">

            <div className="footer_social">
                <ul className="social_ul">
                    <li className="title_1">Diseñador de la pagina</li>
                    <li className="ul_fli">
                        <a href="https://www.facebook.com/davilaluisdaniel5018/">Luis Daniel Davila</a>
                        <img onClick={()=> active(1)} alt="facebook" src={face_logo} />
                    </li>
                    <li className="ul_sli">
                        <p>+5804163670629</p>
                        <img onClick={()=> active(2)} alt="whatsapp" src={mobile_logo} />
                    </li>
                    <li className="ul_tli">
                        <p className="small">luisdanieldb4@gmail.com</p>
                        <img onClick={()=> active(3)} alt="mail" src={mail_logo} />
                    </li>
                </ul>
            </div>

            <div className="footer_copyright">
                <div className="image_copy">
                    <img alt="creeper" src={creeper} />
                </div>
                <div className="info_copy">
                    <img alt="logo_mojang" src={mojang_logo} />
                    <p className="copyr">
                        Los recursos multimedia usados para realizar esta pagina contienen 
                        derechos de autor ajenos. Y son utilizados sin fines lucrativos. No se 
                        obtiene ningun beneficio economico con los mismos
                    </p>
                </div>
                <div className="image_copy">
                    <img alt="piglin" src={piglin} />
                </div>
            </div>

            <div className="footer_nav">
                <p className="footer_nav_text">
                    Estructura
                </p>
                <ul className="footer_nav_estruc">
                    <li>Casa</li>
                    <li>Sobre</li>
                    <li>Informacion</li>
                    <li>Descargar</li>
                    <li>Contacto</li>
                </ul>
            </div>
            
        </footer>
    );
}
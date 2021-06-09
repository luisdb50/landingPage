import React from "react";
import {Slider} from "../components/Slider"

import steve_icon from "../img/home_icon.png"
import img_1 from "../img/slider_1.webp"
import img_2 from "../img/slider_2.jpg"
import img_3 from "../img/slider_3.jpeg"
import img_4 from "../img/story_logo.jpeg"
import normal_logo from "../img/normal_logo.png"
import dungeons_logo from "../img/dungeons_logo.png"
import earth_logo from "../img/earth_logo.png"
import story_logo from "../img/story_logo.png"
import steve_content from "../img/steve_content.png"
import windows_logo from "../img/windows_logo.png"
import macos_logo from "../img/macos_logo.png"
import linux_logo from "../img/linux_logo.png"
import android_logo from "../img/android_logo.png"
import ios_logo from "../img/ios_logo.png"
import switch_logo from "../img/switch_logo.png"
import xbox_logo from "../img/xbox_logo.png"
import check from "../img/check.png"
import cross from "../img/cross.png"

import "../css/content.css"

export function Content(props){
    
    function print_content(){
        
        if(props.pag === "home"){ return(<Home />); }

        else if(props.pag === "about"){ return(<About />); } 
        
        else if(props.pag === "info"){ return(<Information />); }
        
        else if(props.pag === "down"){ return(<Download />);
        
        } else if(props.pag === "cont"){ return(<Contact />);

        } else { return(<div className="div_error">404 Page not fount</div>); }
    }
    
    return(
        <div className="content_main">
            <div className="content_body">
                {print_content()}
            </div>
        </div>
    )
}

function Home(){
    return(

        <div className="body_home">
            
            <div className="home_text">
                <h1>Descripcion</h1>
                <p className="div_p">
                <br /><br /><br />
                    Videojuego de construcción desarrollado por Mojang Studios donde los 
                    jugadores pueden interactuar en un entorno tridimensional. Con una 
                    jugabilidad diversa, un jugador puede elegir su manera de jugar permitiendo 
                    obtener una experiencia personalizada. Posee 3 ediciones principales en 
                    las cuales se puede jugar: Java Edition, Bedrock Edition y Education Edition.
                    <br /><br />
                    Un mes antes del lanzamiento de su versión completa, el 18 de octubre de 2011, 
                    fue estrenada una versión para Android, y el 17 de noviembre del mismo año fue 
                    lanzada la versión para iOS. El 9 de mayo de 2012 fue lanzada la versión del 
                    juego para Xbox 360 y PS3.
                </p>
            </div>

            <div className="home_frame">
                <div className="frame_cube">
                    <div className="cube_into">
                        <img alt="steve_icon" src={steve_icon} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function About(){

    const url1= img_1;
    const url2= img_2;
    const url3= img_3;
    const url4= img_4;

    return(

        <div className="body_about">
            <div className="about_slider">
                <Slider src1={url1} src2={url2} src3={url3} src4={url4} timer={5000}/>
            </div>
            <h1 className="title">Videojuegos de Minecraft</h1>
            <div className="content_modes">
                
                <div className="modes_normal">

                    <div className="modes_img">
                        <img alt="normal_logo" src={normal_logo} />
                    </div>
                    <p className="p_styled">
                        Videojuego de construcción desarrollado por Mojang Studios donde los jugadores 
                        pueden interactuar en un entorno tridimensional. Con una jugabilidad diversa, un 
                        jugador puede elegir su manera de jugar permitiendo obtener una experiencia 
                        personalizada. Posee 3 ediciones principales en las cuales se puede jugar: Java 
                        Edition, Bedrock Edition y Education Edition.
                    </p>
                </div>

                <div className="modes_dungeons">
                    
                    <div className="modes_img">
                        <img alt="dungeons_logo" src={dungeons_logo} />
                    </div>
                    <p className="p_styled">
                        Videojuego de acción y aventura en el que hasta cuatro jugadores viajan a través de 
                        niveles generados proceduralmente, luchan contra monstruos y se enfrentan al 
                        antagonista principal, el Archimaldeano. Minecraft Dungeons ArcadeMinecraft Dungeons 
                        Arcade es un spin-off que requiere cuatro jugadores, en donde pueden obtener elementos 
                        escaneando tarjetas coleccionables para superar niveles.
                    </p>
                </div>
                    
                <div className="modes_earth">

                    <div className="modes_img">
                        <img alt="earth_logo" src={earth_logo} />
                    </div>
                    
                    <p className="p_styled">
                        Videojuego móvil de realidad aumentada en el que los jugadores viajan por lugares de la 
                        vida real para construir y recolectar recursos. Cuenta con muchos aspectos similares al 
                        juego principal, así como otros únicos. Será descontinuado el 30 de junio de 2021.
                    </p>
                </div>

                <div className="modes_story">
                    <div className="modes_img">
                        <img alt="story_logo" src={story_logo} />
                    </div>

                    <div className="p_styled">
                        Fue un videojuego episódico de aventura gráfica basado en el universo de Minecraft, 
                        desarrollado por Telltale Games, en el cual debían completar capítulos para progresar 
                        y sus acciones influenciaban en la trama. Minecraft Story Mode - Season Two fue su 
                        secuela con una nueva historia que continuaba las aventuras de la entrega anterior, 
                        trayendo elementos de versiones nuevas de Minecraft.
                    </div>
                </div>
                <img className="c_img" alt="steve_content" src={steve_content} />
            </div>
            <h2 className="title ab">Plataformas</h2>
            <div className="content_plataforms">
                <div className="plataforms_table">
                    <div className="e"></div>
                    <div className="E"><img alt="windows" src={windows_logo} /></div>
                    <div className="E"><img alt="macOS" src={macos_logo} /></div>
                    <div className="E"><img alt="linux" src={linux_logo} /></div>
                    <div className="E"><img alt="android" src={android_logo} /></div>
                    <div className="E"><img alt="ios" src={ios_logo} /></div>
                    <div className="E"><img alt="switch" src={switch_logo} /></div>
                    <div className="E"><img alt="xbox" src={xbox_logo} /></div>
                    <div className="e"><img alt="Minecraft" src={normal_logo} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="e"><img alt="Dungeons" src={dungeons_logo} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="e"><img alt="Earth" src={earth_logo} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="e"><img alt="Story" src={story_logo} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="No" src={cross} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                    <div className="E"><img alt="Si" src={check} /></div>
                </div>
            </div>
        </div>
    );
}

function Information(){

}

function Download(){

}

function Contact(){

}
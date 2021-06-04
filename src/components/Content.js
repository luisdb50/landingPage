import React from "react";

import steve_icon from "../img/home_icon.png"

import "../css/content.css"

export function Content(props){
    
    function print_content(){

        if(props.pag === "home"){
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

        } else if(props.pag === "about"){
            return(

                <div>
                    about
                </div>
            );
        
        } else if(props.pag === "info"){
            return(

                <div>
                    information
                </div>
            );

        } else if(props.pag === "down"){
            return(

                <div>
                    download
                </div>
            );
        
        } else if(props.pag === "cont"){
            return(

                <div>
                    contact
                </div>
            );

        } else {
            return(

                <div className="div_error">
                    404 Page not fount
                </div>
            );
        }
    }

    
    
    
    
    return(
        <div className="content_main">
            <div className="content_body">
                {print_content()}
            </div>
        </div>
    )
}
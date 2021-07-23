import React from "react";

export class DownContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            srcs: [],
            jsx: props.jsx,
            urls: props.urls,
            url: props.urls[0],
            renderer: props.jsx[0]
        }
        
    }

    change(point){
        this.setState((state)=>({
            renderer: state.jsx[point],
            url: state.urls[point]
        }))
    }

    render(){

        return(
            <div className="download_content">
                <img className="img_background" src={this.state.url} alt="background_image"/>
                {this.state.renderer}
                <div className="mnav">    
                    <div className="mnav_sep">
                        <img 
                            className="" 
                            onClick={()=>this.change(0)} 
                            src={this.state.urls[0]}
                            alt="minecraft"
                        />
                    </div>

                    <div className="mnav_sep">
                        <img 
                            className="" 
                            onClick={()=>this.change(1)} 
                            src={this.state.urls[1]}
                            alt="dungueon"
                        />
                    </div>

                    <div className="mnav_sep">
                        <img 
                            className="" 
                            onClick={()=>this.change(2)} 
                            src={this.state.urls[2]}
                            alt="earth"
                        />
                    </div>

                    <div className="mnav_sep">
                        <img 
                            className="" 
                            onClick={()=>this.change(3)} 
                            src={this.state.urls[3]}
                            alt="history_mode"
                        />
                    </div>
                </div>
            </div>
        );
    }

}
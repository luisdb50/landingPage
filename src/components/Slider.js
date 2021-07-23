import React from "react"

import "../css/slider.css"

export class Slider extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            sources: props.sources,
            style: [],
            timer: props.timer,
            i: 1,
        }
    }
    

    componentDidMount(){
        
        let aux = [];
        this.state.sources.map( (srcs,index)=> aux[index] = "img_inactive" );
        aux[0] = "img_active";

        this.setState({style: aux});

        this.timerID = setInterval(()=> this.tick(aux), this.state.timer);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(aux){

        let srcs = this.state.sources;
        srcs.map((srcs,index)=>{
            
            if(index === this.state.i){
                aux[index] = "img_active";
                aux[index-1] = "img_inactive";
            }
            return 0; 
        })

        this.setState((state)=> ({ i: state.i + 1 }));

        if(srcs.length === this.state.i){
            this.setState((state)=> ({i: 0 }));
            aux[srcs.length -1] = "img_inactive";
        }
    }

    contentSlider() {

        let renderer;
        let images = this.state.sources;

        renderer = images.map((images,index)=> {
            return(
                <div className={this.state.style[index]}>
                    <img alt={"image" + index} key={index} src={images}/>
                </div>
            );
        });
        
        return(renderer);
    }

    render(){

        return(
            <div className="slider_content">
                {this.contentSlider()}
            </div>
        );
    }
    
}

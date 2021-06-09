import React from "react"

import "../css/slider.css"

import img_default from "../img/slider_default.jpg"

export class Slider extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            url1: props.src1,
            url2: props.src2,
            url3: props.src3,
            url4: props.src4,
            style1: "img_active",
            style2: "img_inactive",
            style3: "img_inactive",
            style4: "img_inactive",
            bool: 0,
            timer: props.timer
        }
        this.validate();
    }
    
    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(), this.state.timer);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){

        if(this.state.bool === 0){
            this.setState({style1: "img_inactive", style2: "img_active", bool: 1})
        } else if(this.state.bool === 1) {
            this.setState({style2: "img_inactive", style3: "img_active", bool: 2})
        } else if(this.state.bool === 2) {
            this.setState({style3: "img_inactive", style4: "img_active", bool: 3})
        } else if(this.state.bool === 3) {
            this.setState({style4: "img_inactive", style1: "img_active", bool: 0})
        } else {
            alert("Error")
        }
    }

    validate(){

        let data = this.state

        const urlAux = img_default;
        if(data.url1 === "") {data.url1 = urlAux}
        if(data.url2 === "") {data.url2 = urlAux}
        if(data.url3 === "") {data.url3 = urlAux}
        if(data.url4 === "") {data.url4 = urlAux}
    }

    render(){
        
        return(
            <div className="slider_content">
                <img className={this.state.style1} alt="image1" src={this.state.url1}/>
                <img className={this.state.style2} alt="image2" src={this.state.url2}/>
                <img className={this.state.style3} alt="image3" src={this.state.url3}/>
                <img className={this.state.style4} alt="image4" src={this.state.url4}/>
            </div>
        );
    }
    
}
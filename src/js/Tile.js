import React, { Component } from 'react';
import '../Style/Gallery.css';


class Tile extends Component{
  constructor(props){
    super(props);
    this.state = {
      hover: false,
      process: false
    }
  };

  tileInfo=()=>{
      this.setState({
        hover:true
      })
  };

  tileNormal=()=>{
    this.setState({
      hover:false
    })
  };

  process=()=>{
    this.setState({
      process:!this.state.process
    })
  };

  render(){

      // const name = this.props.name
      // const img = this.props.image
      // const model = this.props.model

      const { name, image, model, description } = this.props


      return(
        <div>
          <div >
            <div onMouseEnter={this.tileInfo} onMouseLeave={this.tileNormal} onClick={this.process} className="gallery-tiles" >
              <img className="gallery-tiles-image" src={this.props.image}/>
                {this.state.hover ? (
                  <div className="gallery-tiles-image-info">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.model}</p>
                  </div>)
                  : null}
                  {this.state.process ?(<img className="process slideRight" src={this.props.description}/>): null}
            </div>
          </div>
        </div>
      )
  };
};
export default Tile;

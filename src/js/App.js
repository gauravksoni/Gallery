import React, { Component } from 'react';
import '../Style/Gallery.css';
import Tile from './Tile'

const GalleryTiles = [
  {
    img: require('../Docs/spark.jpg'),
    name: "Spark Plug",
    model: "Modeling Process of Spark Plug using CATIA V5.",
    description: require('../Docs/009.png')
  },
  {
    img: require('../Docs/0101.png'),
    name: "Cross Head",
    model: "Modeling Process of Engine Cross Head using CATIA V5.",
    description: require('../Docs/010.png')
  },
  {
    img: require('../Docs/0111.png'),
    name: "Tyre Rim",
    model: "Modeling Process of Tyre Rim using CATIA V5.",
    description: require('../Docs/011.png')
  },
  {
    img: require('../Docs/0121.png'),
    name: "Blower Housing",
    model: "Modeling Process of Blower Housing using CATIA V5.",
    description: require('../Docs/012.png')
  },
  {
    img: require('../Docs/0131.png'),
    name: "Connecting Rod",
    model: "Modeling Process of Connecting Rod using CATIA V5.",
    description: require('../Docs/013.png')
  },
  {
    img: require('../Docs/0141.png'),
    name: "Propeller Blade",
    model: "Modeling Process of Propeller Blade using CATIA V5.",
    description: require('../Docs/014.png')
  },
  {
    img: require('../Docs/0021.png'),
    name: "Crane Hook",
    model: "Drafting of component on AutoCAD",
    description: require('../Docs/002.png')
  },
  {
    img: require('../Docs/0031.png'),
    name: "Geneva Plate",
    model: "Drafting of component on AutoCAD.",
    description: require('../Docs/003.png')
  },
  {
    img: require('../Docs/0061.png'),
    name: "Adjustable Bracket",
    model: "Drafting of component on AutoCAD.",
    description: require('../Docs/004.png')
  },
  {
    img: require('../Docs/0051.png'),
    name: "Round Gasket",
    model: "Drafting of component on AutoCAD.",
    description: require('../Docs/005.png')
  },
  {
    img: require('../Docs/0041.png'),
    name: "Idler Plate",
    model: "Drafting of component on AutoCAD.",
    description: require('../Docs/006.png')
  },
  {
    img: require('../Docs/0071.png'),
    name: "Rocker Arm",
    model: "Drafting of component on AutoCAD.",
    description: require('../Docs/007.png')
  },
  {
    img: require('../Docs/bracket.png'),
    name: "Steel Bracket",
    model: "Drafting of component on AutoCAD.",
    description: require('../Docs/008.png')
  },
];

class App extends Component {

  render() {
    return (
      <div>
        <div className="app-head">
          <h2>GALLERY</h2>
        </div>
        <div className="gallery">
          {GalleryTiles.map((tile)=>{
            return(
              <Tile key={tile.img} image={tile.img} model={tile.model} name={tile.name}
                description={tile.description}/>
            )
          })}
        </div>
      </div>
   )
  };
 }
export default App;

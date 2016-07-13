import React from 'react';
import ReactCanvas from 'react-canvas';
// import Canvas from './components/canvas';

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;

const styles = {
  canvas: {
    border: "1px solid black",
  }
}

class App extends React.Component {
  constructor (){
    super();

    this.state = {
      playerImage: "https://pbs.twimg.com/profile_images/679634619998842880/L9Y-i7rM.jpg",
      playerImageStyle: {
        top: 300,
        left: 150,
        height: 20,
        width: 20,
      }
    }
  }

  render() {
    var surfaceWidth = window.innerHeight;
    var surfaceHeight = window.innerHeight;

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={this.state.playerImageStyle} src={this.state.playerImage} />
      </Surface>
    );
  }
}

export default App;

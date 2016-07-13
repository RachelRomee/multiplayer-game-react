import React from 'react';
import ReactCanvas from 'react-canvas';
// import Canvas from './components/canvas';

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;

const styles = {
  layer: {
    top: 25,
    left: 25,
    height: 20,
    width: 20,
    backgroundColor: "#000"
  }
}

class App extends React.Component {
  render() {
    var surfaceWidth = window.innerWidth;
    var surfaceHeight = window.innerHeight;

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={styles.layer} src="https://pbs.twimg.com/profile_images/679634619998842880/L9Y-i7rM.jpg" />
        <h1>hopla</h1>
      </Surface>
    );
  }
}

export default App;

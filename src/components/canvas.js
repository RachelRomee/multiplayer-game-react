import React from 'react';

const styles = {
	canvas: {
		width: "500px",
		height: "500px",
		border: "1px solid #000",
		display: "block"
	}
}

class Canvas extends React.Component {


  render() {
    return (
			<canvas style={styles.canvas} />

    );
  }
}

export default Canvas;

import './App.css';
import React, { useState } from 'react'
import SelectionPage from './SelectionPage';
function App() {

  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (e) => {
    console.log("gab gwapo")
    const { clientX: x, clientY: y } = e;
    const point = { x, y }

    const newPoints = [...points, point]
    setPoints(newPoints)
  };

  const handleUndo = () => {
    const currentPoints = [...points]
    const poppedPoint = currentPoints.pop()

    const newPoppedArray = [...popped, poppedPoint];
    setPopped(newPoppedArray)
    setPoints(currentPoints)
  };

  const handleRedo = () => {
    const poppedArray = [...popped];
    const lastPoppedItem = poppedArray.pop();

    const newPointsArray = [...points, lastPoppedItem];
    setPoints(newPointsArray);
    setPopped(poppedArray)

  };

  const handleSetImage = (image) => {
    console.log("HANDLE SET IMAGE")
    setSelectedImage(image)
  }

  return (
    <>
      <div className="App">
        {
          selectedImage ? <>
            <div>
              <button disabled={!points.length} onClick={handleUndo}>UNDO</button>
              <button disabled={!popped.length} onClick={handleRedo}>REDO</button>
            </div>
            <p>NEW CHANGES HERE</p>
            <p>ANOTHER NEW CHANGES HERE</p>
            <p>ANOTHER NEW NEW CHANGES HERE</p>
            <p>GAB BRANCH ONLY</p>
            <div className='points-container' onClick={handleClick}>
              {
                points.map(point => (
                  // <div style={{ borderRadius: '50%', height: '10px', width: '10px', backgroundColor: 'white', left: point.x, top: point.y, position: 'absolute' }}>
                  // </div>
                  <img style={{ borderRadius: '50%', height: '100px', width: '100px', backgroundColor: 'white', left: point.x, top: point.y, position: 'absolute' }} alt='menard' src={require(`${selectedImage}`)} />
                ))
              }
            </div>
          </> : <SelectionPage setSelectedImage={handleSetImage}/>
        }


      </div>
    </>
  );
}

export default App;

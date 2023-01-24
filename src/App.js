import React, { useState, useEffect } from "react";

const withMousePosition = (WrappedCompoenent) => {
  return (props) => {
    const [mousePosition,setMousePosition] = useState ({
    x: 0,
    y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove",handleMousePositionChange)

      return () => ( 
        window.removeEventListener("mousemove",handleMousePositionChange)
      ) 
    }, []);

    return <WrappedCompoenent {...props} mousePosition={mousePosition} />
  };
}

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="PanelTracker">
        <p>Mouse Position : </p>
        <div>
          <span>x: {mousePosition.x}</span>
          <span>y: {mousePosition.y}</span>
        </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x} , {mousePosition.y})
    </p>
  )
  }

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

function App() {

  return (
    <div className="App">
      <header className="Header">Mouse Tracker</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;

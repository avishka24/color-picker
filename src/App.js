import './App.css';
import {useState} from "react";
import {SketchPicker} from 'react-color'

function App() {
  const [color,setColor] = useState("#1A2330");
  const [hidden,setHidden] = useState(false);

  const pickerStyle={
    default:{
      picker:{
        position:'absolute',
        top:'30px',
        left:'40px'
      }
    }
  }
  return (
    <>
    <h1>Color Picker</h1>
    <div style={{background:color}} className="App">
      <div className="picker">
      {hidden &&
        <SketchPicker styles={pickerStyle} color={color} onChange={(changedColor) => setColor(changedColor.hex)} />
      }
        <button onClick={() => setHidden(!hidden)}>
        {hidden ? ' ' : ' '}
        </button>
        <p>{color}</p>
      </div>
    </div>
    </>
  );
}

export default App;

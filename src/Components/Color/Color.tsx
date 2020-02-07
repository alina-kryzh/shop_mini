import React from "react";
import './Color.css'
import {useColorLogic} from "./useColorLogic";

const Color: React.FC = () => {

    const {setValues, changeValueForGradient, changeColorForGradient,
        addInputElement, deleteInputElement, changeDeg,
        changeColor, color, styles, deg, inputMass} = useColorLogic();

    return (
        <div className='colorContainer'>
            <h1>Chose color</h1>
            <input type="color" onChange={changeColor} value={color}/>
            <div className='choseColor' style={{backgroundColor: color}}/>
            <div style={styles.div}/>
            <button onClick={setValues}>Start</button>
            <input type="number" value={deg} onChange={changeDeg}/>
            {inputMass.map((c: any, i) => {
                return (
                    <div key={i}>
                        <input type="color" value={c.color} onChange={(e) => changeColorForGradient(e, c.id)}/>
                        <input type="number" value={c.value} onChange={(e) => changeValueForGradient(e, c.id)}/>
                        <button onClick={() => deleteInputElement(c.id)}>delete</button>
                    </div>)
            })}
            <button onClick={addInputElement}>Add</button>
        </div>
    );
};

export default Color;

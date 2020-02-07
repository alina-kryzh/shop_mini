import React, {CSSProperties, useEffect, useState} from "react";


const ModalComponentMessage: React.FC = () => {

    let [paddingTop, changeTop] = useState(-50)
    // let [valueToChange, changeValue] = useState(false)


            useEffect(()=> {if (!(paddingTop <= -50))showModal()}, [paddingTop])
            // useEffect(()=> {dontShowModal()}, [paddingTop])

    let showModal = () => {
        if (paddingTop < 150) {setTimeout(() => {
            changeTop(paddingTop+1)
        }, 10)} else {
            changeTop(150)
            dontShowModal()
        }
    }

    let dontShowModal = () => {
        setTimeout(()=>{
            setTimeout(()=> {
                changeTop(-50)
            }, 10)
        }, 5000)
    }




    let messageStyle: CSSProperties = {
        width: 80,
        height: 50,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: paddingTop,
        left: 'calc(50vw-40px)'
    }

    return (
        <div>
            <div style={messageStyle}>
                <span>message Modal</span>
            </div>
            <button onClick={showModal}>show message Modal</button>
        </div>);
};


export default ModalComponentMessage;
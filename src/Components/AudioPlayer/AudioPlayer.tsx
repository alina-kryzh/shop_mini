import React, {createRef} from "react";


const Audio = () => {

    let inputRef = createRef<HTMLInputElement>();

    let downloadFileOnClick = () => {
        debugger
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    return (
        <div className={'Audio'}>
            <label><input type={'file'} ref={inputRef} style={{display: 'none'}}/></label>
            <button onClick={downloadFileOnClick}>Download</button>
        </div>
    )
};


export default Audio;
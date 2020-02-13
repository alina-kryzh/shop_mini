import React, {useState} from "react";


const Audio = () => {

    let [inputValue, changeInputValue] = useState('')

    let [initialImage, changeImageInWindow] = useState('https://jwinters.ru/wp-content/media/tutorial65_howtodrawpatrick_fromspongebob/p1_.jpg')

    let fileSelected = (e: React.FormEvent<HTMLInputElement>) => {
        changeInputValue(e.currentTarget.value)
    }

    let changeImage = () => {
        changeInputValue('')
        changeImageInWindow(inputValue)
    }

    return (
        <div className={'Audio'}>
            <input value={inputValue} onChange={fileSelected}/>
            <button onClick={changeImage}>Download</button>
            <img src={initialImage}/>
        </div>
    )
};


export default Audio;
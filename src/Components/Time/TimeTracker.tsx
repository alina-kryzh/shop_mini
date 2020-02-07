import React, {useEffect, useState} from 'react';
import s from './Time.module.css'

const Time = (props: any) => {

    let [time] = useState(new Date().toLocaleTimeString())
    let [timeInThisMoment, changeTimeInThisMoment] = useState(new Date().toLocaleTimeString())

    let changeValueFalse = () => {
        changeTimeInThisMoment(new Date().toLocaleTimeString())
        changeValueButton(false)
    }

    let [newTime, checkTime] = useState(time)
    let [buttonStartStopChange, changeValueButton] = useState(true)
    let [buttonStartPlayPause, changeValueButtonPlay] = useState(true)
    let [pauseValue, changeValuePause] = useState("00:00:00")

    useEffect(() => {
        setInterval(() => {
            checkTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [newTime])

    let valueTime = buttonStartStopChange ? newTime : timeInThisMoment

    let firstTimeInObject: any = new Date('December 17, 1995 ' + valueTime)

    let secondTimeInObject: any = new Date('December 17, 1995 ' + newTime)

    let differenceTime1: any = (-(new Date().getTimezoneOffset()/60)*2)

    let differenceTime: any = new Date(1970, 1, 1, differenceTime1)

    let difference: any = new Date('December 17, 1995 ' + pauseValue)


    let elapsedTime = time  > newTime ? new Date(firstTimeInObject- secondTimeInObject - differenceTime - difference) : new Date(secondTimeInObject - firstTimeInObject - differenceTime - difference)

    let elapsedTime1: string = elapsedTime.toLocaleTimeString()

    let changeValueTrueStart = () => {
        changeValueButtonPlay(true)
        changeValueButton(true)
        let value = buttonStartPlayPause ? elapsedTime1 : pauseValue
        props.addedTimeInArray(value)
    }


    let changeValueTruePause = () => {
        changeValueButtonPlay(false)
        changeValuePause(elapsedTime1)
    }

    let changeValueTruePlay = () => {
        changeValueButtonPlay(true)
        changeValuePause(elapsedTime1)

    }

    let allTimeTracker =  buttonStartPlayPause ? elapsedTime1 : pauseValue

    return (

        <div className={s.time}>
            <span>time tracker</span>
            <span>({newTime})</span>
            <div>
                <span>(start time: {buttonStartStopChange ? newTime : timeInThisMoment})-(end time: {newTime})=(all time: {allTimeTracker})</span>
            </div>
            {buttonStartStopChange ?
                <button onClick={changeValueFalse}>start</button> : <div>
                    <button onClick={changeValueTrueStart}>stop</button>
                    {buttonStartPlayPause ?
                        <button onClick={changeValueTruePause}>pause</button> :
                        <button onClick={changeValueTruePlay}>play</button>
                    }
                </div>
            }
        </div>
    );
};

export default Time;
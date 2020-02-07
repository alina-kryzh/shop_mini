import React, {useEffect, useState} from 'react';
import s from './Time.module.css'
import TimeTracker from './TimeTracker'
import ArrayResult from './arrayResult/ArrayResult'

interface ITimes {
    t: string
}

const Time: React.FC = () => {
    let [newArr, setNewArr] = useState([])
    let [time] = useState(new Date().toLocaleTimeString())
    let [firstTime, changeFirstTime] = useState(new Date().toLocaleTimeString())
    let [secondTime, changeSecondTime] = useState(new Date().toLocaleTimeString())


    let changeFirst = (e: any) => {
        changeFirstTime(e.currentTarget.value)
    }

    let changeSecond = (e: any) => {
        changeSecondTime(e.currentTarget.value)
    }

    let firstTimeInObject: any = new Date('December 17, 1995 ' + firstTime)

    let secondTimeInObject: any = new Date('December 17, 1995 ' + secondTime)

    let differenceTime1: any = (-(new Date().getTimezoneOffset() / 60) * 2)

    let differenceTime: any = new Date(1991, 2, 2, differenceTime1)

    let elapsedTime = firstTime > secondTime ? new Date(firstTimeInObject - secondTimeInObject - differenceTime) : new Date(secondTimeInObject - firstTimeInObject - differenceTime)

    let elapsedTime1 = elapsedTime.toLocaleTimeString()

    let arrayTime: Array<string> = []

    let element = newArr.map(times => {
        return <ArrayResult time={times}/>
    })

    let addedTimeInArray = (elapsedTime1: string) => {
        if (!('00:00:00' === elapsedTime1))
            arrayTime.push(elapsedTime1)
        let arr: any = newArr
        arr = [...arr, elapsedTime1]
        setNewArr(arr)
    }

    return (
        <div className={s.time}>
            <h2>Time</h2>
            <div>{time}</div>
            <input type={'time'}/>
            <div>
                <input type={'time'} value={firstTime} onChange={changeFirst}/>---<input type={'time'}
                                                                                         value={secondTime}
                                                                                         onChange={changeSecond}/>===<input
                type={'time'} value={elapsedTime1}/>
            </div>
            <TimeTracker addedTimeInArray={addedTimeInArray}/>
            {element}
            {/*<ArrayResult time={time}/>*/}
        </div>
    );
};

export default Time;
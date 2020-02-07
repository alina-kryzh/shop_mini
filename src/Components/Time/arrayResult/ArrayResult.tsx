import React from 'react';

interface IProps {
    time: string
}

const ArrayResult = (props: IProps) => {

    return (
        <div>
            <div>{props.time}</div>
        </div>
    );
};

export default ArrayResult;
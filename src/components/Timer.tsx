import React, { useState } from 'react';
import '../css/Timer.css';

function Timer() {
    const [minutes, SetMinutes] = useState<number>(25);
    const [seconds, SetSeconds] = useState<number>(0);
    const [isOn, SetIsOn] = useState<boolean>(true);

    const startTimer = () => {
        console.log('Starting timer.');
    }

    const stopTimer = () => {
        console.log('Stopping timer.');
    }

    const resetTimer = () => {
        console.log('Resetting timer.');
    }

    return (
        <div className="timer-container">

        </div>
    );
}

export default Timer;
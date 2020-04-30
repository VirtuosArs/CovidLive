import EjectRoundedIcon from '@material-ui/icons/EjectRounded';
import React from 'react';
import CountUp from 'react-countup';
import './Delta.css';


const Delta = ({ inpCnt, color, size, fromCard }) => {
    return (
        <>
            <div className={fromCard ? `space` : null}>
            <span className={`delta-data-${color} delta-data-${size}`}>
                <EjectRoundedIcon fontSize="small" className={fromCard ? `delta-data-${size} delta-data-icon-${size}` :
                `delta-data-${size} delta-data-icon-${size} space1 tableSpace`
                } />
                <CountUp start={0} end={inpCnt ? inpCnt : 0} duration={2.5} separator="," />{' '}
            </span>
            </div>
        </>
    );
}

export default Delta;
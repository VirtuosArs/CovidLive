import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-container">
            <Typography color="textSecondary" display="block" align='center'>
                Created with <span style={{color: '#e25555'}}>&hearts;</span> by <a href="https://virtuosArs.github.io/ARSOnePage" target="_blank" rel="noopener noreferrer">Ankush Sankhe</a>
            </Typography>
            <Typography  color="textSecondary" display="block" align='center'>
                Data Sources:
                &nbsp;|&nbsp;<a href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">Covid19India</a>
                &nbsp;|&nbsp;<a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">Mathdroid</a>
            </Typography>
            <Typography  color="textSecondary" display="block" align='center'>
                UI Inspiration by:
                &nbsp;|&nbsp;<a href="https://github.com/covid19india/covid19india-react" target="_blank" rel="noopener noreferrer">Covid19India</a>
                &nbsp;|&nbsp;<a href="https://github.com/adrianhajdin/project_corona_tracker" target="_blank" rel="noopener noreferrer">JavaScript Mastery</a>
            </Typography>
        </div>
    );
}

export default Footer;
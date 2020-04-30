import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-container">
            <Typography color="textSecondary" display="block" align='center'>
                Corona Virus Live Statistics ©2020 Created with <span style={{color: '#e25555'}}>&hearts;</span> by <a href="https://virtuosArs.github.io/ARSOnePage" target="_blank" rel="noopener noreferrer">Ankush Sankhe</a>
            </Typography>
            <Typography  color="textSecondary" display="block" align='center'>
                Data Sources:
                &nbsp;|&nbsp;<a href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">Covid19India</a>
                &nbsp;|&nbsp;<a href="https://covid19.mathdro.id/api/" target="_blank" rel="noopener noreferrer">Mathdro</a>
            </Typography>
        </div>
    );
}

export default Footer;
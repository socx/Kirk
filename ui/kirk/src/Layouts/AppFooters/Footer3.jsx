import React from 'react';

const style = {
    display :'block'
}

const Footer3 = (props) => (
    <div  className={`page-footer ${props.hidden ? 'hidden' : ''}`}>
        <div className='page-footer-inner'>
            2017 &copy; Kirk  By <a> Socx Solutions </a> &nbsp;|&nbsp; 
            {process.env.NODE_ENV !== 'production' ? process.env.NODE_ENV : ''}
        </div>
        <div className='scroll-to-top' style={style}>
            <i className='icon-arrow-up'></i>
        </div>
    </div>
)

export default Footer3;

import React from 'react';
import s from './Work.module.css'

const Work = (props) => {
    return (
        <div>
            <div className={s.content}>
                <a href={props.project}> <img src={props.img} className={s.img} alt=""/></a>
                <h3 className={s.title}>{props.title}</h3>
                <p className={s.textDescription}>{props.textDescription}</p>
            </div>
        </div>
    );
};

export default Work;
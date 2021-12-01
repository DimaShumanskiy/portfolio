import React from 'react';
import s from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={s.content}>
            <img src={props.img} className={s.img} alt=""/>
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.textDescription}>{props.textDescription}</p>
        </div>
    );
};

export default Skill;
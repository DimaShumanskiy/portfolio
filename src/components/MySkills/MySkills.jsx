import React from 'react';
import s from './MySkills.module.css'
import Skill from "./Skill/Skill";

const MySkills = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <h3 className={s.title}> My skills</h3>
                <div className={s.skills}>
                    <Skill title={'React'} textDescription={'подробное описание навыка'}/>
                    <Skill title={'React'} textDescription={'подробное описание навыка'}/>
                    <Skill title={'React'} textDescription={'подробное описание навыка'}/>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
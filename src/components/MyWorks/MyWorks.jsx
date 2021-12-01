import React from 'react';
import s from './MyWorks.module.css'
import Work from "./Work/Work";

const MyWorks = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <h3 className={s.title}>MyWorks</h3>
                <div className={s.myWorks}>
                    <Work project={'#'} title={'React'} textDescription={'описание проекта'}/>
                    <Work project={'#'} title={'React'} textDescription={'описание проекта'}/>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
import React from 'react';
import s from './OfferWorks.module.css'

const OfferWorks = () => {
    return (
        <div className={s.wrapper}>
           <h3 className={s.title}> Pассматриваю варианты удаленной работы</h3>
            <button className={s.btn}>Нанять меня</button>
        </div>
    );
};

export default OfferWorks;
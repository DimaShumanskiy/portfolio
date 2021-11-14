import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <p className={s.text}>
                    <span>Привет</span>,<br/>
                    меня завут Шуманский Дмитрий. <br/>
                    Я front-end разрабодчик
                </p>
                <img src="" alt="фото" className={s.photo}/>
            </div>
        </div>
    );
};

export default Main;
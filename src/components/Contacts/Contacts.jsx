import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <form className={s.form}>
                <h3 className={s.title}>Контакты</h3>
                <input className={s.inputName} type="text" name="name"/>
                <input className={s.inputMail} type="text" name="mail"/>
                <textarea className={s.inputText} type="text" name="text"/>
                <input className={s.btm} type="submit"/>
            </form>
        </div>
    );
};

export default Contacts;
import { Checkbox } from '@gravity-ui/uikit';
import { Xmark } from '@gravity-ui/icons';
import React from 'react';

export default function RegForm({ setOpen }) {
    return (
        <>
            <div className='form__container'>
                <div className='form__wrapper'>
                    <div className='form__close' onClick={() => setOpen(false)}> <Xmark /></div>
                    <div className='form__enter-system'>Войти в систему</div>
                    <input type="text" placeholder="Email/Телефон" className='form__email' />
                    <input type="password" placeholder="Пароль" className='form__password' />
                    <div className='form__remember'><Checkbox size="l">Запомнить пароль</Checkbox></div>
                    <div className='form__restore'>Восстановить</div>
                    <button className='form__enter'>Войти</button>
                    <button className='form__reg'>Зарегистрироваться</button>
                </div >
            </div >
        </>
    );
}
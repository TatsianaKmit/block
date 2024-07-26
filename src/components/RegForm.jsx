import { Checkbox } from '@gravity-ui/uikit';
import { Xmark } from '@gravity-ui/icons';
import React from 'react';

export default function RegForm() {
    return (
        <>
            <div>Войти в систему</div>
            <input type="text" placeholder="Email/Телефон" />
            <input type="password" placeholder="Пароль" />
            <Checkbox /> Запомнить пароль
            <div>Восстановить</div>
            <button>Войти</button>
            <button>Зарегистрироваться</button>
        </>
    );
}
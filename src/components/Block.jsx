import React from 'react'
import { Modal } from '@gravity-ui/uikit';
import RegForm from './RegForm';
import image from '../assets/image 15.png'

export default function Block() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className='block__container'>
            <div className='block__wrapper'>
                <div className='block__content'>
                    <div className='block__description'>
                        <h1 className='block__title'>Демо-версия</h1>
                        <div className='block__text'>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить </div>
                        <div className="block__button" onClick={() => setOpen(true)}>
                            <div className='button__text'>Попробовать бесплатно</div>
                            <div className='button__circle'>
                                <div className='button__arrow'>
                                    <div className='arrow__edge'>
                                    </div>
                                    <div className="arrow__diagonal"></div>
                                </div>
                            </div>
                        </div>
                        <Modal open={open} onClose={() => setOpen(false)}>
                            <RegForm setOpen={setOpen} />
                        </Modal>
                    </div>
                    <div className='block__image'>
                        <img src={image} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

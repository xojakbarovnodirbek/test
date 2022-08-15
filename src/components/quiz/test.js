import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Test = () => (
    <Fragment>
        <Helmet><title> Quiz Instruction</title></Helmet>
        <div className="instructions-container">
            {/*<h1>How to play the game</h1>*/}
            <p>O'yinni shartlari</p>
            <ul className="browser-default" id="main-list">
                <li>O'yin 2 daqiqa davom etadi va vaqt tugashi bilan tugaydi</li>
                <li>Har bir o'yinda 15 ta savol bor</li>
                <li>
                    Har bir savolda 4 ta variant bor
                </li>
                <li>
                    eng tori javobni tanlang

                </li>
                <li>
                    Har bir o'yinda 2 ta  chizig'i bor
                    <ul id="sublist">
                        <li>Ikkita imkoniyat tenga teng yani 50/50</li>
                        <li>besh dona maslahat</li>
                    </ul>
                </li>
                <li>

                   50/50 ga ni tanlasez bitta notog'risni va bitta torisni qoldiradi qolganini olib tashlaydi

                </li>
                <li>

                  tugami bosish orqali undan foydalanish
                    ikkita noto'g'ri javob va bitta to'g'ri javob qoldirib, bitta noto'g'ri javobni olib tashlaydi Siz  foydalanishingiz mumkin
                </li>
                <li>
                    hohlagan vaqtizda oyinni tugaishiz mumkin bu sizni ixtiyoriz
                </li>
            </ul>
            <div className="confirm-button">
                <span className="left"><Link to="/" className="confirm-buttons" id="back">qaytarib ol</Link></span>
                <br></br>
                <span className="right"><Link to="/play/quiz" className="confirm-buttons" id="proceed">oldinga</Link></span>
            </div>
        </div>
    </Fragment>
);

export default Test;
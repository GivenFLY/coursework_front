import React from 'react';
import './style.scss'
import nupp_logo from "../../static/nupp-logo.png";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img src={nupp_logo} alt="" className="logo"/>
                <div className="info">
                    <p className="name">Кафедра суспільних наук. Національний університет «Полтавська політехніка імені
                        Юрія
                        Кондратюка»</p>
                    <p className="author">Зроблено в рамках курсової роботи Мошурою Олексієм 301-ТН</p>
                    <p className="address">м. Полтава, просп. Першотравневий 24</p>
                </div>
            </div>
        );
    }
}

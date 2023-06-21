import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav">
                    <Link to="/" className="nav-item">Головна</Link>
                    <Link to="/news" className="nav-item">Новини</Link>
                    <Link to="/about" className="nav-item">Про Сайт</Link>
                    <Link to="/gallery" className="nav-item">Галерея</Link>
                    <Link to="/contacts" className="nav-item">Контакти</Link>
                </div>
            </div>
        );
    }
}

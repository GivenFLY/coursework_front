import React from 'react';
import './style.scss'
import nupp_logo from '../../static/nupp-logo.png'
import Navbar from "../navbar";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="inner">
                    <img src={nupp_logo} alt="" className="logo"/>
                    <div className="text">
                        <p className="top">Кафедра суспільних наук</p>
                        <p className="bottom">Національного університету «Полтавська політехніка імені Юрія
                            Кондратюка»</p>
                    </div>
                </div>
                <Navbar/>
            </div>
        );
    }
}

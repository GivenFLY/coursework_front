import React from 'react';
import './style.scss'
import Slider from "../slider";
import NewsPage from "../news_page";


export default class MainPage extends React.Component {
    render() {
        return (
            <div className="main container">
                <Slider/>
                <h2>Останні новини</h2>
                <NewsPage list={true} start={3} end={10}/>
            </div>
        );
    }
}

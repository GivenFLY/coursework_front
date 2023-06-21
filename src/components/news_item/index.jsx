import React from 'react';
import './style.scss'
import empty from '../../static/empty.png'
import {Link} from "react-router-dom";
import {formatDate} from "../../functions/date";

export default class NewsItem extends React.Component {
    render() {
        return (
            <div className={`news-item ${this.props.list && 'list'}`} >
                <img src={this.props.image || empty} className="image" alt=""/>
                <div className="text">
                    <Link to={`${this.props.id}`} className="title">{this.props.title}</Link>
                    <p className="date">{formatDate(this.props.date)}</p>
                </div>
            </div>
        );
    }
}

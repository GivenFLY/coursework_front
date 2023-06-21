import React, {useEffect, useState} from 'react';
import './style.scss'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BackendAPI from "../../classes/backend";
import empty from '../../static/empty.png'
import {Link} from "react-router-dom";

export default function Slider() {
    const [articles, setArticles] = useState(null);
    const api = new BackendAPI();

    useEffect(() => {
        api.getNews().then((data) => {
            setArticles(data);
        }).catch((error) => {
            console.error("An error occurred while fetching the article:", error);
        });
    }, []); // dependency array includes id so effect runs again if id changes

    if (articles === null) {
        return <div>Loading...</div>;
    }

    const spanStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '1.5rem',
        backgroundImage: 'linear-gradient(to top, #0c0c0c 0%, rgba(0,0,0,0) 100%)',
        color: '#fff',
        width: '100%',
        height: '50%',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'flex-end',
        backgroundSize: 'cover',
        height: '400px'
    }

    return (
        <Slide>
            {articles.slice(0,3).map((article, index)=> (
                <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${article.picture ? article.picture.contents : empty})` }}>
                        <Link to={'/news/'+article.id} style={spanStyle}>{article.title}</Link>
                    </div>
                </div>
            ))}
        </Slide>
    );

}

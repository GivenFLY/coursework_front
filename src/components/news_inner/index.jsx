import React, {useEffect, useState} from 'react';
import './style.scss'
import {formatDate} from "../../functions/date";
import {useParams} from "react-router-dom";
import BackendAPI from "../../classes/backend";
import empty from '../../static/empty.png'


export default function NewsInner() {
    const [article, setArticle] = useState(null);
    const {id} = useParams();
    const api = new BackendAPI();

    useEffect(() => {
        api.getArticle(id).then((data) => {
            setArticle(data);
        }).catch((error) => {
            console.error("An error occurred while fetching the article:", error);
        });
    }, [id]); // dependency array includes id so effect runs again if id changes

    if (article === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="news-inner container">
            <div className="bg-image"
                 style={{"--img": `url('${article.picture ? article.picture.contents : empty}')`}}>
                {/*<img src={article.picture.contents} className="image" alt=""/>*/}
            </div>
            <div className="contents">
                <div className="meta">
                    <h1>{article.title}</h1>
                    <p>{formatDate(article.pub_date)}</p>
                </div>
                <div className="body" dangerouslySetInnerHTML={{__html: article.body}}/>
            </div>
        </div>
    );
}

import React, {useEffect, useState} from 'react';
import './style.scss'
import BackendAPI from "../../classes/backend";


export default function ContactsPage() {
    const [contents, setContents] = useState(null);
    const api = new BackendAPI();

    useEffect(() => {
        api.getArticle('contacts').then((data) => {
            setContents(data);
        }).catch((error) => {
            console.error("An error occurred while fetching the article:", error);
        });
    }, []); // dependency array includes id so effect runs again if id changes

    if (contents === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="about-inner container">
            <div className="contents">
                <div className="meta">
                    <h1>{contents.title}</h1>
                </div>
                <div className="body" dangerouslySetInnerHTML={{__html: contents.body}}/>
            </div>
        </div>
    );
}


import React, {useEffect, useState} from 'react';
import './style.scss'
import {useParams} from "react-router-dom";
import BackendAPI from "../../classes/backend";

export default function GalleryPage() {
    const [gallery, setGallery] = useState(null);
    const {id} = useParams();
    const api = new BackendAPI();

    useEffect(() => {
        api.getPictures().then((data) => {
            setGallery(data);
        }).catch((error) => {
            console.error("An error occurred while fetching the article:", error);
        });
    }, [id]); // dependency array includes id so effect runs again if id changes

    if (gallery === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="gallery container">
            <h1>Галерея</h1>
            <div className="items">
                {gallery.map((picture) => {
                    return (
                        <div className="picture">
                            <img src={picture.contents} className="image" alt=""/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

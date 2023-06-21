import React, {useEffect, useState} from 'react';
import './style.scss'
import NewsItem from "../news_item";
import BackendAPI from "../../classes/backend";

export default function NewsPage(props) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const api = new BackendAPI();

        api.getNews().then((data) => {
            setNews(data);
        }).catch((error) => {
            console.error("An error occurred while fetching the news:", error);
        });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="news container">
            {news.slice(props.start || 0, props.end).map((item) => (
                <NewsItem
                    key={item.id}
                    title={item.title}
                    date={item.pub_date}
                    image={item.picture?.contents}
                    list={props.list}
                    id={item.id}
                />
            ))}
        </div>
    );
}

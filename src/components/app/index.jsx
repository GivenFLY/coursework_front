import React from 'react';
import './style.scss'
import Header from "../header";
import {Route, Routes} from "react-router-dom";
import MainPage from "../main_page";
import NewsPage from "../news_page";
import NewsInner from "../news_inner";
import GalleryPage from "../gallery_page";
import AboutPage from "../about_page";
import ContactsPage from "../contacts_page";
import Footer from "../footer";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/news" element={<NewsPage list={true}/>}/>
                    <Route path="/news/:id" element={<NewsInner/>}/>
                    <Route path="/gallery" element={<GalleryPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                </Routes>
                <Footer/>
            </div>
        );
    }
}

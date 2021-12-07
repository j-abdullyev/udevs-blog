import Footer from "../home-page/footer/footer"
import ContentBody from "./content-body/content-body"
import ContentHeader from "./content-header/content-header"
import React from 'react';
import Header from "../home-page/header/header";


const ContentPage = () => {
    return(
        <div>
            <Header />
            <ContentBody />
            <Footer />
        </div>
    )
}


export default ContentPage
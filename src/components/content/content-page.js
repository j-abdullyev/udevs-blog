import Footer from "../home-page/footer/footer"
import ContentBody from "./content-body/content-body"
import ContentHeader from "./content-header/content-header"
import React from 'react';


const ContentPage = () => {
    return(
        <div>
            <ContentHeader />
            <ContentBody />
            <Footer />
        </div>
    )
}


export default ContentPage
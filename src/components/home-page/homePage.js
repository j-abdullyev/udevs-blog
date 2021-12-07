import Footer from "./footer/footer"
import Header from "./header/header"
import BlogList from "./blog-list/blog-list"
import React from 'react';




const HomePage = () =>{
    return(
        <div>
            <Header/>
            <BlogList />
            <Footer />
        </div>
    )
}


export default HomePage
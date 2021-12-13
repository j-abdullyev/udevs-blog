import { useState } from "react/cjs/react.development"
import Footer from "../home-page/footer/footer"
import Header from "../home-page/header/header"
import style from './publishSettings.module.css'
import {db}  from "../../firebase"

import React, { useEffect } from "react"
import { collection, getDocs, addDoc } from "@firebase/firestore"



const PublishSettings = () => {
    const [post, setPost] = useState({});
    const [newTitle, setNewTitle] = useState("")
    const [newText, setNewText] = useState("")  
    // const [newImage, setnewImage] = useState("")
    const postsCollectionRef = collection(db, '7');

    const createPost = async () => {
        await addDoc(postsCollectionRef, {title: newTitle, text: newText})
        window.location.reload(false);
        alert("Your post succesfully posted. Go to home page to see it!")
    }
 

    useEffect(() => {
        getPosts()
    },[])

    function getPosts() {
        getDocs(postsCollectionRef).then((res) => {
            setPost(res.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        })
    }


    return(
        <div>
            <Header />

            <div className={style.publish}>

                <h2 className={style.h2}> Настройки публикации </h2>
                <div className={style.title_header}>Название</div>
                <input
                    id="title"
                    placeholder="Text Input"
                    className={style.publish_title}
                    onChange={(e) => { setNewTitle(e.target.value) }}
                />
                <div className={style.text_header}>Описание</div>
                <textarea
                    placeholder="Write your text here"
                    className={style.publish_text}
                    rows="10"
                    onChange={(e) => {setNewText(e.target.value)}}
                />
                {/* <input
                                value={this.state.image}
                                placeholder="Input image URL here"
                                onChange={(e) => this.setState({image: e.target.value})}
                            /> */}
                <button className={style.publish_btn} onClick={createPost}>Publish</button>
            </div>


            <Footer />
        </div>
       
    )

}


export default PublishSettings




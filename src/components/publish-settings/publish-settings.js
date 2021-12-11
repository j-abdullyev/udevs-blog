import { useState } from "react/cjs/react.development"
import Footer from "../home-page/footer/footer"
import Header from "../home-page/header/header"
import style from './publishSettings.module.css'
import {database}  from "../../firebase"
import { get, child } from "@firebase/database"
import instance from "./instance"
import React from "react"
import GetResult from "./getResult"



class PublishSettings extends React.Component{

    state = {
        title: '',
        text: '',
        image: ""
    }

    postDataHandler = (e) => {
        e.preventDefault();
        const Data ={
            title: this.state.title,
            text: this.state.text,
            // image: this.state.image
        }
        instance.post('/post.json', Data).then(res => {
            console.log(res)
        })
    }   

    render(){
        return(
            <div>
            <Header />
            
                <div className={style.publish}>

                    <h2 className={style.h2}> Настройки публикации </h2>
                    <div className={style.title_header}>Название</div>
                    <input
                        placeholder="Text Input"
                        className={style.publish_title}
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })}
                    />
                    <div className={style.text_header}>Описание</div>
                    <textarea
                        placeholder="Write your text here"
                        className={style.publish_text}
                        rows="10"
                        value={this.state.text}
                        onChange={(e) => this.setState({ text: e.target.value })}
                    />
                    {/* <input
                        value={this.state.image}
                        placeholder="Input image URL here"
                        onChange={(e) => this.setState({image: e.target.value})}
                    /> */}
                    <button onClick={this.postDataHandler}>Publish</button>
                </div>


            <Footer />
        </div>
        )
    }

}


// const PublishSettings = () => {
// //     const initialValues = {
// //         title: '',
// //         text: ''
// //     }

// //     var [values, setValues] =useState(initialValues)

// //     const InputChange = e => {
// //         var {name, value} = e.target
// //         setValues({
// //             ...values,
// //             [name]:value
// //         })
// //     }
// //     const Publicate = e =>{
// //         e.preventDefault()
// //         addToFireBase(values)
// //     }

    

//     const postDataHandler = (e) => {
//         e.preventDefault();
//         const Data ={
//             title: this.state.title,
//             text: this.state.text
//         }
//         result.post('/post.json', Data).then(res => {
//             console.log(res)
//         })
//     }   

//     return(
//         <div>
//             <Header />
//             <div className={style.publish}>
              
//                 <h2 className={style.h2}> Настройки публикации </h2>
//                 <div className={style.title_header}>Название</div>
//                 <input
//                     placeholder="Text Input"
//                     className={style.publish_title}
//                     value={this.state.title}
//                     onChange={(e) => this.setState({title:e.target.value})}
//                     name="title"
//                 />
//                 <div className={style.text_header}>Описание</div>
//                 <textarea
//                     placeholder="Write your text here"
//                     className={style.publish_text}
//                     rows="10"
//                     value={this.state.text}
//                     onChange={(e) => this.setState({text:e.target.value})}
//                     name="text"
//                 />
//             <button onClick={postDataHandler}>Publish</button>
//             </div>

//             <Footer />
//         </div>
//     )
// }

export default PublishSettings
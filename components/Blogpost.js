import Style from '../styles/Blogpost.module.css'
import Commentbox from "./Commentbox";
// import Modal from "../components/Modal"
import Imagemodal from "../components/Imagemodal"
import { useState } from 'react';
import { TrafficRounded } from '@material-ui/icons';

function Blogpost(props){

    const [showPostImg, setShowPostImg] = useState(false)

    const showModal = () =>{
        setShowPostImg(true)
    }

    const closeModal = () =>{
        setShowPostImg(false)
    }

    return (
        <div className={Style.Blogpost}>
            <div className={Style.Header}>
                <div className={Style.Row}>
                    <img alt={props.details.author} src={props.details.authorImg}/>
                </div>
                <div className={Style.Row}>
                    <span className={Style.Author}><b>{props.details.author}</b> shared a <b>post</b></span>
                    <span className={Style.Date}>{props.details.date}</span>
                </div>
            </div>

            <div className={Style.Body}>
                {props.details.postText}
                { props.details.postImg && 
                    <div> 
                        <Imagemodal show={()=> showModal()} close={()=> closeModal()} isModalMode={showPostImg} class={Style.PostImg} src={props.details.postImg}/>
                    </div>
                
                }
            </div>

            <div className={Style.Footer}>
                <Commentbox />
            </div>
        </div>
    )
}


export default Blogpost
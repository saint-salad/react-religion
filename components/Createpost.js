import { useState } from "react";
import Style from "../styles/Createpost.module.css";
import Modal from "../components/Modal"
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

function Createpost(){

    const authorImg = "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"

    const [isShow, setIsShow] = useState(false)
    const handleClick = () => {
        setIsShow(true)
    }

    const closeModal = () =>{
        setIsShow(false)
    }

    const handleTextareaChange =(e) =>{
        const textarea = e.target
        const newlines = textarea.value.match(/\n/g)
        if(newlines){
            let newLinesCount = newlines.length + 1
            if(newLinesCount >= 7 ) {
                textarea.style.fontSize = "15px"
                textarea.style.fontWeight = 400
            }else{
                textarea.style.fontSize = "23px"
                textarea.style.fontWeight = 600
            }
        }
    }
 

    return(
        <div className={Style.Createpost} >
            <div className={Style.Row}>
                <img className={Style.Authorimg} src={authorImg} />
            </div>
            <div className={Style.Row}>
                <input className={Style.Textbox} 
                placeholder="What's on your mind..."
                onClick={()=> handleClick()}/>
            </div>

            <Modal show={isShow} close={() => closeModal()}>

                <div className={Style.Postbox} >
                    <div className={Style.Header}>
                        <div className={Style.Text}>Create Post</div>
                        <a href="#" onClick={()=> closeModal()} className={Style.Close}></a>
                    </div>
                    <div className={Style.Body}>
                        <textarea onChange={(e)=>handleTextareaChange(e)} className={Style.Textarea} rows="8"></textarea>
                        
                    </div>
                    <div className={Style.Footer}>
                        <div className={Style.Addtopost}>
                            <div className={Style.Text}>Add to Your Post</div>
                            <div className={Style.Items}><SentimentSatisfiedOutlinedIcon className={Style.Icon} fontSize="medium" color='secondary' /></div>
                            <div className={Style.Items}><PhotoLibraryOutlinedIcon className={Style.Icon} fontSize="medium" color='primary' /></div>
                        </div>
                        <button className={Style.Postbtn}>Post</button>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default Createpost
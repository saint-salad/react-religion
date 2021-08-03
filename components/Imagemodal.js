import Style from '../styles/Imagemodal.module.css'
import { v4 as uuidv4 } from 'uuid'


function Imagemodal(props){

    
    const MODAL_ID = "modal6969"

    const handleOutsideClick = (e) =>{
        if(e.target.id=== MODAL_ID) props.close()
    }




    const RenderMode = () =>{
        const arr = []

        if(props.isModalMode ){
            arr.push(
                <div id={MODAL_ID}  key={uuidv4()} className={Style.Imagemodal} onClick={(e) => handleOutsideClick(e)}>
                    <div className={Style.Imagecontainer}>
                        <a href="#" onClick={()=> props.close()} className={Style.Close}></a>
                        <img src={props.src} onClick={()=>  props.show()}/>
                    </div>
                </div>
            )
        }else{
            arr.push(
                <img  key={uuidv4()} src={props.src} style={{ cursor: 'pointer'}} className={props.class} onClick={()=>  props.show()}/>
            )
        }

        return arr
    }

    return <RenderMode />
}


export default Imagemodal
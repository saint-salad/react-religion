import Style from "../styles/Modal.module.css";

function Modal(props){

    const MODAL_ID = "modal6969"

    const handleOutsideClick = (e) =>{
        if(e.target.id=== MODAL_ID) props.close()
    }

    return(
        props.show && (
            <div 
            id={MODAL_ID} 
            className={Style.Modal} 
            onClick={(e) => handleOutsideClick(e)}>
                { props.children }
            </div>
        )
        
    )
}

export default Modal
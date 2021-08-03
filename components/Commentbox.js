import Style from "../styles/Commentbox.module.css";

function Commentbox(){
    return(
        <input className={Style.Commentbox} placeholder="Write a commment..." />
    )
}

export default Commentbox
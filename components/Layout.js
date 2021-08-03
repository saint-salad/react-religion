import Navigation from "./Navigation";
import Style from "../styles/Layout.module.css";

function Layout(props){

    return (
        <div className={Style.Layout}> 
            <Navigation />
            <div className={Style.Content} >
                {props.children}
            </div>
        </div>

    )

}


export default Layout
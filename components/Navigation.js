import Style from "../styles/Navigation.module.css";
import Link from 'next/link'

function Navigation(){
    return (
        <div className={Style.Navigation}>
            <Link href="#">
                <span className={Style.Logo}>React Religion</span>
            </Link>
            <Link href="/home">
                <a className={Style.Tab}>Home</a>
            </Link>
            <Link href="/blog">
                <a className={Style.Tab}>Blog</a>
            </Link>
            <Link href="/tutorial">
                <a className={Style.Tab}>Tutorial</a>
            </Link>
        </div>
    )
}


export default Navigation
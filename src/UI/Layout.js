import Landing from "../Components/Landing"
import Footer from "./Footer";
import Header from "./Header"
import styles from '../static/css/Footer.module.css'
const Layout=props=>{
    return(
        <>
        <div className={styles.wrapper}>
        <Header/>
        {props.children}
        </div>
        <Footer/>
        </>
    )
}
export default Layout;
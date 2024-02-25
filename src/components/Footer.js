import './../styles/Footer.scss';
import {IoIosArrowDown} from "react-icons/io";
const Footer = () => {
    const category = ["Web Builder", "Hosting", "Data Center", "Robotic-Automation"];
    const contact = ["Contact", "Privacy Policy", "Terms Of Service", "Categories", "About"]

    const categoryRender = category.map((item, idx) => (
        <li>
            {item}
        </li>
    ))

      const contactRender = contact.map((item, idx) => (
        <li>
            {item}
        </li>
    ))

    return (
        <div className="base_footer">
            <div className="base_footer__element">
                <div className="base_footer__element__category">
                    <h1>CATEGORIES</h1>
                    <ul>{categoryRender}</ul>
                </div>
                <div className="base_footer__element__contact">
                    <h1>CONTACT</h1>
                    <ul>{contactRender}</ul>
                </div>
                <div className="base_footer__element__country">
                    <p>United State </p><span><IoIosArrowDown className="down_cont"/></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
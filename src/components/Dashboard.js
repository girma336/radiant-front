import './../styles/Dashboard.scss';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiWarningCircleThin } from "react-icons/pi";
import { HiOutlineChevronDown } from "react-icons/hi2";
import {dataBox, deals, linkArrow, navButton} from "../constants";
import { RxCaretRight } from "react-icons/rx";
import Box from "./Box";
import Card from "./Card";
const Dashboard = () => {
    return(
        <div className="base-dashboard">
            <div className="base-dashboard__element">
                <h1 className="base-dashboard__element__h1">
                    Best Website builders in the us
                </h1>
                <div className="base-dashboard__element__div">
                    <div>
                        <p className="base-dashboard__element__div__p"><span><IoIosCheckmarkCircleOutline
                            className="base-dashboard__element__div__p__icon"/></span>Last Updated - February 22, 2020
                        </p>
                        <p className="base-dashboard__element__div__p"><span><PiWarningCircleThin
                            className="base-dashboard__element__div__p__icon"/></span>Advertising Disclosure</p>
                    </div>
                    <div>
                        <p className="base-dashboard__element__div__p">
                            Top Relevant<span><HiOutlineChevronDown
                            className="base-dashboard__element__div__p__icon base-dashboard__element__div__p__last_icon"/></span>
                        </p>
                    </div>
                </div>
                <div className="base-dashboard__element__button">
                    <ul>
                        {navButton.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="base-dashboard__element__arrow">
                    <ul>
                        {linkArrow.map((item, idx) => (
                            <li key={idx}>{item} <span>{idx <= linkArrow.length - 2 && <RxCaretRight />}</span> </li>
                        ))}
                    </ul>
                </div>
                <div className="base-dashboard__element__box">
                    {dataBox.map((item, idx) => (
                        <Box item={item} key={idx} />
                    ))}
                </div>
                <div className="base-dashboard__element__card">
                    <h1>Related deals you might like for</h1>
                    <div className="base-dashboard__element__card__div">
                        {deals.map((item, idx) => (
                        <Card item={item} key={idx}/>
                    ))}
                    </div>
                </div>
                <div className="base-dashboard__element__contact">
                    <div className="base-dashboard__element__contact__headers">
                        <h1>Sign up and get exclusive<br/> special deals</h1>
                        <div>
                            <input />
                            <button>Sinup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
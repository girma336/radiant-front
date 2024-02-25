import '../styles/Box.scss'
import Rating from "./Rating";
import cup from "./../asset/IMAGE (1).png";
import dim from "./../asset/IMAGE.png";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { IoCheckmarkOutline } from "react-icons/io5";
const Box = ({item}) => {
    const maxRating = 5;
    const renderDis = item.highlights?.disc.map((item, index) => (
        <li key={index}>
            <span>{Object.values(item)[0]} </span> {Object.keys(item)[0]}
        </li>
    ));

    const whyLoveIt = item.whyWeLoveIt.map((item, idx) => (
        <li key={idx}>
            <span className="mark"><IoCheckmarkOutline  /></span>   <span>{item}</span>
        </li>
    ))

    const bage = <div className="base_box__element__bage">
        {item.id === 1 && <p>
            <img src={cup} alt="base cap" />
            <span> Best Choice</span>
        </p>}{item.id=== 2 && <p>
        <img src={dim} alt="base dim" /> <pan>Bast
        Value</pan> </p>}</div>
    return (
        <div className={`base_box ${item.id === 4 ? 'last-child' : ''}`}>
            <div className="base_box__element">
                <div className="base_box__element__image">
                    <img src={item.bg} alt={item.alt}/>
                </div>
                <div className="base_box__element__grade">{item.id}</div>
                {(item.id === 1 || item.id === 2) && bage}
                <div className="base_box__element__header">
                    <div dangerouslySetInnerHTML={{__html: item.description}}/>
                    <h3>Main highlights</h3>
                    <p>{item.highlights?.header}</p>
                    { item.highlights?.disc.length > 0 && <ul>{renderDis}</ul>}
                    {item.whyWeLoveIt.length > 0 &&
                        <div className="base_box__element__header_love">
                            <p>Why we love it</p>
                            <ul>
                                {whyLoveIt}
                            </ul>
                        </div>
                    }
                    <h4>Show More <HiOutlineChevronDown /></h4>
                </div>
                <div className="base_box__element__right">
                    <div className="base_box__element__right__mark">
                        <div>
                            <h2>{item.rating}</h2>
                            <p>{item.rank}</p>
                            <Rating value={item.rating / 2} max={maxRating} />
                        </div>
                    </div>
                    <div className="base_box__element__right__view">
                        <button>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Box;
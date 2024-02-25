import './../styles/Card.scss'
const Card = ({item}) => {
    return(
        <div className="base_card">
            <div className="base_card__element">
                <div className="base_card__element__image">
                    <img src={item.bg} alt="bg"/>
                </div>
                <div className="base_card__element__detail">
                    <p className="base_card__element__detail__p">
                        <span className="base_card__element__detail__p__discount">{item.discount}% Off</span>
                        <span className="base_card__element__detail__p__discount">{item.dis_time}</span
                        ></p>
                    <h2>{item.name}</h2>
                    <p className="base_card__element__detail__text">{item.text}</p>
                    <p className="base_card__element__detail__amount">
                        <span className="base_card__element__detail__amount__dis_value">${parseFloat(item.amount - item.amount * 20 / 100).toFixed(2)}</span>
                        <span className="base_card__element__detail__amount__value">${item.amount}</span>
                        <span className="base_card__element__detail__amount__persent">({item.discount}% Off)</span></p>
                </div>
                <div className="base_card__element__detail__view_2">
                        <button>View Deal</button>
                </div>
            </div>
        </div>
    )
}

export  default Card;
import { stars } from '../../data/Data'

interface Props {
    css: string;
    imgSrc: string;
    price: string;
    title: string;
}

export const MenuCard = ({ css, imgSrc, price, title }: Props) => {

    return (
        <div className={`menu__card ${css} mix`}>
            <div className="menu__img-wrapper">
                <img src={imgSrc} alt={title} className="menu__img" />
            </div>
            <div className="menu__card-body">
                <h3 className="menu__title">{title}</h3>
                <div className="rating">
                    {
                        stars.map((star, index) => (
                            <span key={index} className="rating__star">
                                <i className={star}></i>
                            </span>
                        ))
                    }
                </div>
                <span className="menu__price">{price}</span>
            </div>
        </div>
    )
}

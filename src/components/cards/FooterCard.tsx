import { socialNet as items } from '../../data/Data'

interface Props {
    title: string;
    items: string[];
}

export const FooterCard = ({ title, items }: Props) => {
    return (
        <div className="footer__content">
            <h4 className="footer__title">{title}</h4>
            <ul className="footer__list">
                {
                    items.map((item, index) => (
                        <li key={index} className="footer__item">
                            <a href='https://jean-santos.web.app/' className="footer__link">{item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export const FooterSocialCard = () => {
    return (
        <div className="footer__content">
            <h4 className="footer__brand"><span>Food</span>Lover</h4>
            <p className="footer__description">Repellendus animi, et quo blanditiis in illo, nisi iusto qui eligendi
                sunt beatae numquam.</p>
            <ul className="social__list footer__list">
                {
                    items.map(item => (
                        <li key={item.name} className="social__item">
                            <a href={item.url} className="social__link">
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

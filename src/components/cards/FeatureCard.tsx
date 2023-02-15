
interface Props {
    icon: string;
    title: string;
}

export const FeatureCard = ({ icon, title }: Props) => {
    return (
        <div className="feature__card">
            <div className="feature__icon">
                <i className={icon}></i>
            </div>
            <h3 className="feature__title">{title}</h3>
            <p className="feature__description">
                Live wanted yet best journey now options own explore silently.
                Eod solutions savvy stand
            </p>
        </div>
    )
}

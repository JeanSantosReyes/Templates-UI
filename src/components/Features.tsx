import { FeatureCard } from "./cards/FeatureCard"

export const Features = () => {
    return (
        <section id="feature" className="section feature">
            <div className="section__header">
                <span className="section__subtitle">Features</span>
                <h2 className="section__title">Why Choose Us?</h2>
            </div>
            <div className="d-grid feature__wrapper container">
                {/* <!------- feature card 1 --------> */}
                <FeatureCard
                    title='Extensive Menu'
                    icon='ri-file-list-3-line'
                />
                {/* <!------- feature card 2 --------> */}
                <FeatureCard
                    title='Fast Delivery'
                    icon='ri-takeaway-line'
                />
                {/* <!------- feature card 3 --------> */}
                <FeatureCard
                    title='High Quality'
                    icon='ri-medal-2-line'
                />
            </div>
        </section>
    )
}

import { FooterCard, FooterSocialCard } from "./cards/FooterCard"

export const Footer = () => {

    const anio = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="d-grid footer__wrapper container">

                <FooterSocialCard />

                <FooterCard
                    title='Our Menu'
                    items={['Breakfast', 'Lunch', 'Dinner', 'Desserts']}
                />

                <FooterCard
                    title='Quick Links'
                    items={['Menu', 'About Us', 'Testimonials', 'Blog']}
                />

                <FooterCard
                    title='Support'
                    items={['Contact', 'Terms Of Use', 'Privacy Policy']}
                />

            </div>

            <p className="footer__copyright">
                &copy; {anio} Jean Santos. All Rights Reserved
            </p>

        </footer>
    )
}

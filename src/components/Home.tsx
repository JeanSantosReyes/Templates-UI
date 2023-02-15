
export const Home = () => {
    return (
        <section id="home" className="home" >
            <div className="d-grid home__wrapper container">
                <div className="home__content">
                    <h1 className="home__title">A taste that will make you feel emotions!</h1>
                    <p className="home__description">Lorem ipsum dolor sit amet consectetur.
                        Varius nisl volutpat ultricies pharetra suspendisse.
                        Sit commodo arcu diam lectus.</p>
                    <a href="https://jean-santos.web.app/" className="btn btn--primary">Explore Our Menu</a>
                </div>
                <img src="assets/img/home.png" alt="" className="home__img" />
            </div>
        </section>
    )
}

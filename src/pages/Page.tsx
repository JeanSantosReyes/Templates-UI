import { useEffect } from "react";
import { About, Features, Footer, Header, Home, Menu, Sidebar } from "../components"
// ScrollReveal
import scrollReveal from "scrollreveal";
// import scrollReveal from "scrollreveal";

export const Page = () => {

    useEffect(() => {
        const sr = scrollReveal({
            distance: "100px",
            duration: 2000,
            delay: 400
        })
        sr.reveal(".home__content");
        sr.reveal(".home__img", { origin: "top" });
        sr.reveal(".feature__card", { interval: 200 });
        sr.reveal(".about__img", { origin: "left" });
        sr.reveal(".about__content", { origin: "right" });
        sr.reveal(".footer__content", { interval: 200, });
    }, [])


    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <Home />
                <Features />
                <About />
                <Menu />
            </main>
            <Footer />
        </>
    )
}

import { useEffect, useState } from "react";
import { changeToggleIcon } from "../hooks/ChangeToggleIcon";
import { itemsHeader as items } from '../data/Data'

export const Header = () => {

    const [toggle, setToggle] = useState<boolean>(true);

    useEffect(() => {
        const navToggle = document.getElementById("nav-toggle"),
            navMenu = document.getElementById("nav-menu"),
            navLink = document.querySelectorAll(".nav__link"),
            sidebarToggle = document.getElementById("sidebar-toggle"),
            sidebar = document.getElementById("sidebar");

        /* Open and close navigation menu */
        navToggle!.addEventListener('click', () => {
            setToggle(true)
            navMenu!.classList.toggle('nav__menu--open');

            // Close the sidebar when we open the navigation menu
            if (sidebar!.classList.contains('sidebar--open')) {
                sidebar!.classList.remove('sidebar--open')
            }

            // change nav toggle icon
            changeToggleIcon(navMenu!, "nav__menu--open", navToggle!, "ri-menu-3-line", "ri-close-line")

            // change sidebar toggle icon
            changeToggleIcon(sidebar!, "sidebar--open", sidebarToggle!, "ri-more-2-fill", "ri-close-line");
        })

        // Close the mobile navigation menu when we click on each nav link
        navLink.forEach(link => link.addEventListener('click', () => {
            if (navMenu!.classList.contains('nav__menu--open')) {
                setToggle(false)
                navMenu!.classList.remove('nav__menu--open')
            }
            setToggle(true)

            // change nav toggle icon
            changeToggleIcon(navMenu!, "nav__menu--open", navToggle!, "ri-menu-3-line", "ri-close-line");
        }))

        return () => {
            setToggle(false)
        }

    }, [toggle])

    return (
        <header id="header" className="header">
            <nav className="nav container">
                <a href="#home" className="nav__brand"><span>Food</span>Lover</a>
                <div id="nav-menu" className="nav__menu">
                    <ul className="nav__list">
                        {
                            items.map(item => (
                                <li key={item.name} className="nav__item">
                                    <a href={item.path} className={`nav__link`}>{item.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="nav__buttons">
                    <div className="nav__icon shop__icon">
                        <i className="ri-shopping-bag-line"></i>
                        <span className="shop__number">0</span>
                    </div>
                    <div className="nav__icon nav__toggle">
                        <i id="nav-toggle" className="ri-menu-3-line"></i>
                    </div>
                    <div className="nav__icon sidebar__toggle">
                        <i id="sidebar-toggle" className="ri-more-2-fill"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}
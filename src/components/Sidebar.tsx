import { useEffect, useState } from 'react';
import { changeToggleIcon } from '../hooks/ChangeToggleIcon';
import { socialNet as items } from '../data/Data'

export const Sidebar = () => {

    const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

    useEffect(() => {
        const navToggle = document.getElementById("nav-toggle"),
            navMenu = document.getElementById("nav-menu"),
            sidebarToggle = document.getElementById("sidebar-toggle"),
            sidebar = document.getElementById("sidebar");

        /* Open and close sidebar */
        sidebarToggle!.addEventListener('click', () => {
            setToggleSidebar(true);
            sidebar!.classList.toggle('sidebar--open')

            // Close the mobile menu when we open the sidebar
            if (navMenu!.classList.contains('nav__menu--open')) {
                navMenu!.classList.remove('nav__menu--open')
            }

            // change nav toggle icon
            changeToggleIcon(navMenu!, "nav__menu--open", navToggle!, "ri-menu-3-line", "ri-close-line");

            // change sidebar toggle icon
            changeToggleIcon(sidebar!, "sidebar--open", sidebarToggle!, "ri-more-2-fill", "ri-close-line");
        })

        return () => {
            setToggleSidebar(false)
        }

    }, [toggleSidebar])

    return (
        <div id="sidebar" className="sidebar">
            <div className="sidebar__header">
                <h2 className="sidebar__title">Contact</h2>
                <p className="sidebar__description">Lorem ipsum dolor sit amet consectetur.
                    Varius nisl volutpat ultricies pharetra suspendisse.
                    Sit commodo arcu diam lectus.</p>
            </div>
            <div className="sidebar__content">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <span className="sidebar__subtitle">Address:</span>
                        <span>London, 5102 West College</span>
                    </li>
                    <li className="sidebar__item">
                        <span className="sidebar__subtitle">Open Hours:</span>
                        <span>8:00 AM - 9:00 PM</span>
                    </li>
                    <li className="sidebar__item">
                        <span className="sidebar__subtitle">Call Us:</span>
                        <span>+(528) 987-025</span>
                    </li>
                    <li className="sidebar__item">
                        <span className="sidebar__subtitle">Mail Us:</span>
                        <span>info@example.com</span>
                    </li>
                    <li className="sidebar__item">
                        <span className="sidebar__subtitle">Follow Us:</span>
                        <ul className="social__list">
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
                    </li>
                </ul>
            </div>
        </div>
    )
}
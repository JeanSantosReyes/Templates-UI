import { useEffect } from "react";
import { MenuCard } from "./cards/MenuCard"
var mixitup = require('mixitup');
// import mixitup from 'mixitup';

/* 
Ejemplo de como usar mixitup
https://codepen.io/SitePoint/pen/MJQVEa?editors=1000
*/

export const Menu = () => {

    /* Filtrar con mixitup */
    useEffect(() => {
        mixitup(".menu__wrapper", {
            load: {
                filter: ".breakfast",
            },
            selectors: {
                target: ".menu__card",
            },
            animation: {
                duration: 800,
            }
        });
    }, [])

    /* Añadir clase menu__item--active al hacer clic */
    useEffect(() => {
        const menuItems = document.querySelectorAll('.menu__item');
        menuItems.forEach(item => item.addEventListener('click', () => {
            menuItems.forEach(item => item.classList.remove('menu__item--active'));
            item.classList.add('menu__item--active');
        }))
    }, [])

    return (
        <section id="menu" className="section menu">
            <div className="section__header">
                <span className="section__subtitle">Our Menu</span>
                <h2 className="section__title">Today Special Menu</h2>
            </div>
            <div className="menu__filter">
                <span className="menu__item menu__item--active" data-filter=".breakfast">Breakfast</span>
                <span className="menu__item" data-filter=".lunch">Lunch</span>
                <span className="menu__item" data-filter=".dinner">Dinner</span>
                <span className="menu__item" data-filter=".dessert">Desserts</span>
            </div>
            <div className="d-grid menu__wrapper container">
                {/* <!------ breakfast 1 ----------> */}
                <MenuCard
                    title='Banana Sandwich'
                    css='breakfast'
                    imgSrc='assets/img/breakfast1.jpg'
                    price='$12.00'
                />
                {/* <!------ breakfast 2 ----------> */}
                <MenuCard
                    title='Chicken Burguer'
                    css='breakfast'
                    imgSrc='assets/img/breakfast2.jpg'
                    price='$10.00'
                />
                {/* <!------ breakfast 3 ----------> */}
                <MenuCard
                    title='Sliced Egg Sandwich'
                    css='breakfast'
                    imgSrc='assets/img/breakfast3.jpg'
                    price='$15.00'
                />
                {/* <!------ Lunch 1 ----------> */}
                <MenuCard
                    title='Stuffed Eggplants with Salad'
                    css='lunch'
                    imgSrc='assets/img/lunch1.jpg'
                    price='$8.00'
                />
                {/* <!------ Lunch 2 ----------> */}
                <MenuCard
                    title='Cauliflower and Hazelnut Salad'
                    css='lunch'
                    imgSrc='assets/img/lunch2.jpg'
                    price='$5.00'
                />
                {/* <!------ Lunch 3 ----------> */}
                <MenuCard
                    title='Pesto Pasta with Salad'
                    css='lunch'
                    imgSrc='assets/img/lunch3.jpg'
                    price='$10.00'
                />
                {/* <!------ dinner 1 ----------> */}
                <MenuCard
                    title='Spaghetti with meat sauce'
                    css='dinner'
                    imgSrc='assets/img/dinner1.jpg'
                    price='$12.00'
                />
                {/* <!------ dinner 2 ----------> */}
                <MenuCard
                    title='Salmon and Zucchini'
                    css='dinner'
                    imgSrc='assets/img/dinner2.jpg'
                    price='$10.00'
                />
                {/* <!------ dinner 3 ----------> */}
                <MenuCard
                    title='Grilled Meat with Vegetables'
                    css='dinner'
                    imgSrc='assets/img/dinner3.jpg'
                    price='$14.00'
                />
                {/* <!------ desserts 1 ----------> */}
                <MenuCard
                    title='Oreo Ice Cream'
                    css='dessert'
                    imgSrc='assets/img/dessert1.jpg'
                    price='$9.00'
                />
                {/* <!------ desserts 2 ----------> */}
                <MenuCard
                    title='Raspeberry Cake'
                    css='dessert'
                    imgSrc='assets/img/dessert2.jpg'
                    price='$7.00'
                />
                {/* <!------ desserts 3 ----------> */}
                <MenuCard
                    title='Chocolate Cake'
                    css='dessert'
                    imgSrc='assets/img/dessert3.jpg'
                    price='$10.00'
                />
            </div>
        </section>

    )
}
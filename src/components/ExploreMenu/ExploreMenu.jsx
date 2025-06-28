import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {

    // JS snippet for better horizontal scroll (optional)
    const scrollContainer = document.querySelector('.explore-menu-list');
    scrollContainer.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
        }
    });

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>
                Craving something delicious? With our food ordering app, you can browse your favorite dishes, customize orders, and get fresh meals delivered right to your doorstep. Fast, easy, and just a tap away—satisfy your hunger anytime, anywhere!
            </p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}>
                            <img src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>

                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;

import RestaurantCard from "./RestaurantCard"
import Filters from "./Filters";
import { useState } from 'react';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { RestaurantCardFastDelivery } from "./RestaurantCard";

const RestaurantContainer = () => {

    const [restaurantData, setRestaurantData] = useState([]);

    const [origianlRestaurantData, setOriginalRestaurantData] = useState([]);

    const RestaurantClosingSoon = RestaurantCardFastDelivery(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2156354&lng=72.63694149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data)
            setRestaurantData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setOriginalRestaurantData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.log(error);
        }
    }
    function filterRestaurantOnRating() {
        const filteredRestaurant = restaurantData.filter((restaurant) => parseFloat(restaurant.info.avgRatingString) >= 4.0);
        setRestaurantData(filteredRestaurant);
    }

    function filterRestaurantsByDeliveryTime() {
        const filteredRestaurant = restaurantData.filter((restaurant) => restaurant.info.sla.deliveryTime <= 30);
        setRestaurantData(filteredRestaurant);
    }

    function filterRestaurantsByOpenStatus() {
        const filteredRestaurant = restaurantData.filter((restaurant) => restaurant.info.availability.opened === true);
        setRestaurantData(filteredRestaurant);
    }
    function resetFilters() {
        setRestaurantData(origianlRestaurantData);
    }

    return (
        <div className="flex flex-col">
            <Filters filterRatingFunction={filterRestaurantOnRating} filterDeliveryTimeFunction={filterRestaurantsByDeliveryTime} filterOpenRestaurant={filterRestaurantsByOpenStatus} resetFilters={resetFilters} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 py-2 gap-10 mb-5">
                {restaurantData.map((restaurant) => {
                    return <Link to={"/restaurants/" + restaurant.info.id} >
                        {restaurant.info.sla.deliveryTime < 40 ? <RestaurantCard restaurant={restaurant} key={restaurant.info.id} /> : <RestaurantClosingSoon restaurant={restaurant} key={restaurant.info.id} />}
                    </Link>
                })}
            </div>
        </div>
    )
}

export default RestaurantContainer
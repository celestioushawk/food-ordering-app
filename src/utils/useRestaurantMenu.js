import { useState, useEffect } from 'react'

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchRestaurantData()
    }, [])

    const fetchRestaurantData = async () => {
        const data = await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2156354&lng=72.63694149999999&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER')

        const restaurantJson = await data.json()

        setResInfo(restaurantJson.data)
    }

    return resInfo
}

export default useRestaurantMenu;
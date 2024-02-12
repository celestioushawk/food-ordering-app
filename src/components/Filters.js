import { useState } from "react";
const Filters = ({ filterRatingFunction, filterDeliveryTimeFunction, filterOpenRestaurant, resetFilters }) => {

    const [filerApplied, setFilterApplied] = useState(false);

    const filterRating = () => {
        filterRatingFunction();
        setFilterApplied(true);
    }

    const filterDeliveryTime = () => {
        filterDeliveryTimeFunction();
        setFilterApplied(true);
    }

    const filterOpenStatus = () => {
        filterOpenRestaurant();
        setFilterApplied(true);
    }



    return (
        <>
            <div className="flex items-center justify-end gap-3 px-10 py-3">
                <button className="px-4 py-2 border rounded-full text-sm" onClick={filterRating}>Ratings 4.0+</button>
                <button className="px-4 py-2 border rounded-full text-sm" onClick={filterDeliveryTime}>Fast Delivery</button>
                <button className="px-4 py-2 border rounded-full text-sm" onClick={filterOpenStatus}>Currently Open</button>
                {filerApplied && <button className="px-4 py-2 border rounded-full bg-gray-100 text-sm" onClick={resetFilters}>Reset</button>}
            </div>
        </>
    )
}

export default Filters;
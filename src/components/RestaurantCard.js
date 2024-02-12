import { v4 as uuidv4 } from 'uuid';

const RestaurantCard = ({ restaurant }) => {
    return (
        <a href="" className="flex flex-col gap-2 hover:scale-105 transition duration-300 transform">
            <div className="">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.info.cloudinaryImageId} alt="" className="aspect-video object-cover object-center rounded-xl" />
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{restaurant.info.name}</span>
                    <span className="text-xs whitespace-nowrap bg-gray-100 p-1.5 rounded-md border">{restaurant.info.costForTwo}</span>
                </div>
                <span className="flex gap-3 items-center text-gray-500">
                    <span className="flex gap-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-600">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span>
                            {restaurant.info.avgRating}
                        </span>
                    </span>
                    <span>{restaurant.info.sla.slaString}</span>
                </span>
                <div className="flex gap-1 flex-wrap">
                    {restaurant.info.cuisines.slice(0, 3).map((tag) => {
                        return <span className="px-3 py-1 border rounded-full bg-gray-100 text-xs" key={uuidv4()}>{tag}</span>
                    })}
                </div>
                <span className="text-sm">{restaurant.info.locality}</span>
                <span className="text-sm">{restaurant.info.areaName}</span>
            </div>
        </a>
    )
}

// Higher Order Component
export const RestaurantCardFastDelivery = (RestaurantCard) => {
    return (props) => {
        return (
            <div className='relative'>
                <span className='p-2 bg-gray-100 top-2 right-2 text-xs font-medium rounded-md z-10 absolute'>Fast Delivery</span>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;
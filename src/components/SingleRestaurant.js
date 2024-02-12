import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { v4 as uuidv4 } from 'uuid';

const SingleRestaurant = ({ match }) => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    console.log(resInfo)

    return (
        <section className="flex flex-col divide-y items-center p-10 justify-center">
            <div className="flex justify-between w-full md:w-2/3">
                <div className="flex flex-col gap-1">
                    <span className="font-bold text-xl text-gray-800">{resInfo?.cards[0]?.card?.card?.info.name}</span>
                    <div className="flex flex-col text-gray-500 text-sm">
                        <span>{resInfo?.cards[0]?.card?.card?.info.locality}</span>
                        <span>{resInfo?.cards[0]?.card?.card?.info.areaName}</span>
                    </div>
                    <div className="flex gap-2">
                        {resInfo?.cards[0]?.card?.card?.info.cuisines.map(cuisine => <span className="px-3 py-1 border rounded-full bg-gray-100 text-sm" key={uuidv4()}>{cuisine}</span>)}
                    </div>
                </div>
                <div className="text-green-600 p-3 border h-min rounded flex justify-center items-center flex-col gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span>
                        {resInfo?.cards[0]?.card?.card?.info.avgRating}
                    </span>
                </div>
            </div>
            <div className="flex justify-between py-5 gap-2 mt-5 w-full md:w-2/3">
                <span className="flex gap-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </span>
                    <span className="text-gray-500">{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</span>
                </span>
                <span className="flex gap-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span className="text-gray-500">{resInfo?.cards[0]?.card?.card?.info.sla.slaString}</span>
                </span>
            </div>
            <div className="w-full md:w-2/3 overflow-y-auto scr flex gap-2 py-3">
                {resInfo?.cards[0]?.card?.card?.info?.aggregatedDiscountInfo?.descriptionList.map(desc => <span className="flex p-3 justify-center border items-center rounded bg-gray-50 text-sm font-medium">{desc.meta}</span>)}
            </div>
            <div className="w-full md:w-2/3 overflow-y-auto scr flex flex-col gap-2 py-3 divide-y">
                <span className="text-lg font-bold">Recommended</span>
                {resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(dish => <div className="flex items-center justify-between py-3">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold">{dish.card.info?.name}</span>
                        <span>₹{dish.card.info?.defaultPrice ? dish.card.info?.defaultPrice/ 100 : dish.card.info?.price/100}</span>
                        <span className="text-ellipsis text-gray-400 overflow-hidden text-xs whitespace-nowrap w-96">{dish.card.info?.description}</span>
                    </div>
                    <div>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + dish.card.info?.imageId} alt="" className="aspect-video object-cover object-center rounded-xl" />
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default SingleRestaurant
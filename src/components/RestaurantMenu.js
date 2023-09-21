import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import { useDispatch,  } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  useEffect(() => {
    getRestaurantInfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState("");
//   const cartItems = useSelector((store) => store.cart.items);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
//   console.log(cartItems);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6984428&lng=77.207394&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1].card.card.itemCards)
    const menu = await json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR
      ?.cards[2]?.card?.card?.itemCards;
    setMenu(menu);
    // console.log(menu);
    // console.log(menu[0]?.card.info.name);
    menu.map((item) => console.log(item.card.info.name));
    //    console.log(json?.data?.cards[0]?.card?.card?.info)
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="RestaurantDetails">
        <div className="ml-3">
          <h1>Restaurant id is {restaurant.id}</h1>
          <h2>Restaurant name {restaurant.name}</h2>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
          <h2>Location {restaurant.areaName}</h2>
          <h2>{restaurant.isOpen ? "Open" : "Close"}</h2>
          <h2>{restaurant.costForTwoMessage}</h2>
        </div>
        <div className="menu">
          <h1>Menu</h1>
          <div className="flex flex-wrap justify-between ml-2 mr-2">
            {menu.map((item) => (
              <div key={item.card?.info?.id} className="item">
                <div key={item.card?.info?.id}>{item.card?.info?.name}</div>
                <button
                  className="p-2 m-5 bg-green-400"
                  onClick={()=>handleAddItem(item.card?.info)}
                >
                  ADD to Cart
                </button>
                <img
                  style={{ height: "20vh" }}
                  src={IMG_CDN_URL + item.card?.info?.imageId}
                  alt=""
                />
                <h3>
                  {" "}
                  {item.card?.info?.price
                    ? item.card?.info?.price / 100 + " rupees"
                    : ""}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOffline from "../utils/useOffline";
function filterData(searchtxt, resturants) {
  const filteredData = resturants.filter((resturant) =>
    resturant?.info?.name?.toLowerCase().includes(searchtxt.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [searchtxt, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [AllRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    //   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.758513&lng=77.1995558&page_type=DESKTOP_WEB_LISTING")
    //   const json =await data.json();
    //   console.log(json);
    // console.log(json?.data?.cards[1]?.data?.data?.cards)
    //   setFilteredRestaurants(json?.data?.cards[1]?.data?.data?.cards)
    //   setAllRestaurants(json?.data?.cards[1]?.data?.data?.cards)

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.758513&lng=77.1995558&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const offline = useOffline(false);

  if (offline) return <h1>hmmm..... looks like you are offline....</h1>;

  if (!AllRestaurants) return <h1>all resturant not found</h1>;
  // if(filteredResturants?.length===0) return <h1>No resturants found</h1>

  return AllRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {console.log("render")}
      <div className="search-container p-3 bg-blue-50">
        <input
          className="search-input"
          type="text"
          value={searchtxt}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-btn bg-blue-400 rounded-md ml-2 hover:bg-blue-700"
          onClick={() => {
            const data = filterData(searchtxt, AllRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <h1>No resturants found</h1>
      ) : (
        <div className="flex flex-wrap justify-between ml-2 mr-2">
          {filteredRestaurants?.map((restaurant) => (
            // <Link to={"/restaurant/"+restaurant?.data?.id} > <RestaurantCard key={restaurant?.data?.id} {...restaurant.data} /> </Link>
            <Link to={"/restaurant/" + restaurant?.info?.id}>
              {" "}
              <RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant.info}
              />{" "}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;

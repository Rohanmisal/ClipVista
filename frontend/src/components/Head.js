import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice.js";
import { Youtube_Search_Api } from "../utils/constants.js";
//import store from "../utils/store.js";
import { cacheResults } from "../utils/searchSlice.js";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const[showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
 
  /**
   * {
   * "iphone":["iphone", "iphone 11", "iphone"]}
   */
  useEffect(() => {
    //Api call
    console.log(searchQuery);

    // make an Api call after ever key press
    // but if the difference between 2 Api calls is <200ms
    // decline the Api call
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    if(searchCache[searchQuery]) {
      setShowSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions();
    }
   
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
     * key -i
     *  -render the component
     *  - useEffect() 
        - start timer => make api call after 200 ms

      key - ip
       - destroy the component (useEffect return method)
       - re-render the component
        - useEffect()
        - start timer => make api call after 200 ms
    */

  const getSearchSuggestions = async () => {
    const data = await fetch(Youtube_Search_Api + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache 
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://th.bing.com/th/id/OIP.tQmL3J28pFPoRIHXj_RQhQHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="hamburg"
        />

        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 p-2 bg-gray-100 rounded-r-full">  🔍
          </button>
        </div>
        {showSuggestions && (
          <div className=" fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
          {suggestions.map((s) => (
            <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
              {s}
            </li>
          ))}
            {/* <li className="py-2 px-3 shadow-sm bg-gray-200">Iphone</li>
            <li>Samsung</li>
            <li>Apple</li>
            <li>Google</li>
            <li>Amazon</li>
            <li>Netflix</li> */}
          </ul>
        </div>
        )}
        
      </div>
      <div>
        <img
          className="col-span-1 h-8"
          src="https://www.bing.com/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;

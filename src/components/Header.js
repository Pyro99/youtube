import {
  hamburger,
  user_logo,
  youtube_logo,
  youtube_search_api,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cacheSearchResults } from "../utils/searchSlice";
const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestions(searchCache[search]);
      } else {
        getSearchResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSearchResults = async () => {
    const data = await fetch(youtube_search_api + search);
    const response = await data.json();
    setSuggestions(response[1]);
    dispatch(
      cacheSearchResults({
        [search]: response[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src={hamburger}
          alt="hamburger_icon"
        />
        <Link to="/">
          <img className="h-8 mx-2" src={youtube_logo} alt="logo" />
        </Link>
      </div>
      <div className="col-span-10 ml-80">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li className="py-2 shadow-sm hover:bg-gray-100" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" src={user_logo} alt="user_icon" />
      </div>
    </div>
  );
};

export default Header;

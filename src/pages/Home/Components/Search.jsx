import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import StorageIcon from "../../../assets/images/armazem.png";
import UserIcon from "../../../assets/images/user.png";
export const Search = () => {
  return (
    <div className="search-bar">
      <div className="input-container">
        <input type="text" placeholder="Search" />
        <CiSearch />
      </div>

      <ul>
        <li>
          <Link>
            <img src={StorageIcon} alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={UserIcon} alt="" />
          </Link>
        </li>
      </ul>

     
    </div>
  );
};

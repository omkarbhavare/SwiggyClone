import React, { useState } from "react";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MenuCategory = ({ title, itemCards, resDetailsData }) => {
  const menuData = itemCards.map((x) => x.card.info);

  const [isOpen, setIsOpen] = useState(true);
  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-3 cursor-pointer">
      {/* Category Title */}
      <div
        className="flex justify-between items-center px-4 md:px-6 lg:px-8"
        onClick={toggleCategory}
      >
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
          {title} ({itemCards.length})
        </h3>
        <div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Items List */}
      <div className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        {menuData.map((item) => (
          <Item
            {...item}
            key={item.id}
            resDetailsData={resDetailsData}
          />
        ))}
      </div>

      {/* Separator */}
      <div className="bg-gray-200 py-2 mt-3 mx-4 md:mx-6 lg:mx-8 rounded"></div>
    </div>
  );
};

export default MenuCategory;

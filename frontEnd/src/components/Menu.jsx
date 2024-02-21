import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Menu = ({ menu }) => {
  return (
    <>
      <div className="col-span-1 mx-auto">
        <Link to={`/menu-detail/${menu._id}`}>
          <Card
            className="max-w-sm"
            // imgSrc={require(`../assets${cookList.image[0]}`)}
            imgSrc={menu.image[0]}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
              {menu.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {menu.description}
            </p>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Menu;

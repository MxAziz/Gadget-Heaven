import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-5 p-3 text-center rounded-xl bg-white">
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 bg-gray-100 rounded-full font-semibold ${
              isActive
                ? "bg-purple-500 text-white font-semibold"
                : "hover:text-purple-700"
            }`
          }
          key={category.category}
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "About Us",
      slug: "/about",
      active: true,
    },
    {
      name: "Contact Us",
      slug: "/contact",
      active: true,
    },
  ];
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md text-3xl font-medium text-orange-500"
          id="options-menu"
          onClick={toggleDropdown}
        >
          &#8801;
        </button>
      </div>

      {isOpen && (
        <div className="mx-8 p-2">
          <ul className="flex flex-col ml-auto text-right">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 items-center hover:text-red-600 font-semibold hover:underline decoration-wavy underline-offset-4"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

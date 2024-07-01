import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "./DropDown";

function Header() {
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
    <header className="py-3 shadow bg-white">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="mr-4 flex">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div className="hidden md:block mx-8 p-2">
            <ul className="flex ml-auto">
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
          <div className="md:hidden mx-8 p-2">
            <Dropdown />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

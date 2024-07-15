import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/slices/loginSlice";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => state.login.user);

  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const dropDownRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropDownRef?.current?.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropDownRef]);

  useEffect(() => {
    setDropDown(false);
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Successfully Logout");
    navigate("/");
  };
  useEffect(() => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    const toggleMenu = () => {
      for (let j = 0; j < menu.length; j++) {
        menu[j].classList.toggle("hidden");
      }
    };

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", toggleMenu);
      }
    }

    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", toggleMenu);
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", toggleMenu);
      }
    }

    return () => {
      if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].removeEventListener("click", toggleMenu);
        }
      }

      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].removeEventListener("click", toggleMenu);
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].removeEventListener("click", toggleMenu);
        }
      }
    };
  }, []);

  return (
    <div className="w-[100%] bg-gray-100 sticky top-0 shadow-lg z-20">
      <div className="bg-blue-500 w-11/12 ">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-gray-100  ">
          <Link className="text-3xl font-bold leading-none" to="/">
            <div
              className="ml-5 h-10 flex gap-2"
              alt="logo"
              viewBox="0 0 10240 10240"
            >
              <Link to="/" className="flex gap-2">
                <img src="logo.png" alt="" className="h-8 w-8 " />
                <h1 className="font-medium font-[Times New Roman]">Resumate</h1>
              </Link>
            </div>
          </Link>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-md text-black hover:text-gray-500"
              >
                Home
              </NavLink>
            </li>
            <li className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className="text-md text-black  hover:text-gray-500"
                to="/about"
              >
                AboutUs
              </NavLink>
            </li>
            <li className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <NavLink
                    className="text-md text-black hover:text-gray-500 text-center"
                    to="/FAQ"
                  >
                    FAQ
                  </NavLink>
                </li>
            <li className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>

            <li>
              <NavLink
                className="text-md text-black hover:text-gray-500"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className="text-md text-black hover:text-gray-500"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            {isLoggedIn && user.isAdmin &&
              <>
                <li className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <NavLink
                    className="text-md text-black hover:text-gray-500 text-center"
                    to="/admindashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            }
          </ul>
          {!isLoggedIn && (
            <div>
              <Link
                to="/login"
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 text-decoration-none"
              >
                Sign In
              </Link>
              <Link
                to="/CreateAccount"
                className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 text-decoration-none"
              >
                Sign up
              </Link>
            </div>
          )}

          {isLoggedIn && (
            <div className="hidden lg:flex items-center gap-2 font-medium relative">
              <p>{`${user.firstName} ${user.lastName}`}</p>
              <img
                src={user.imgUrl}
                className="rounded-full w-[35px]"
                alt="img"
              />
              <div className="cursor-pointer">
                {dropDown ? (
                  <IoMdArrowDropup
                    onClick={() => {
                      setDropDown(!dropDown);
                    }}
                  />
                ) : (
                  <IoMdArrowDropdown
                    onClick={() => {
                      setDropDown(!dropDown);
                    }}
                  />
                )}
              </div>
              <div ref={dropDownRef}>
                {dropDown && (
                  <div className="absolute top-9 left-6">
                    <div className="w-[20px] h-[20px] bg-slate-100 rounded-md absolute -top-2 rotate-45 right-[82px]"></div>
                    <div className="w-[200px] h-[80px] bg-slate-100 rounded-md flex flex-col justify-center p-5 gap-2">
                      <div className="flex items-center gap-2">
                        <FaUser />
                        <Link to="/profile">Your Profile</Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <RiLogoutBoxRFill />
                        <p onClick={logoutHandler} className="cursor-pointer">
                          Logout
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
        <div className="navbar-menu relative hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-100 border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link className="mr-auto text-3xl font-bold leading-none" to="/">
                <div
                  className="ml-5 h-10 flex gap-2"
                  alt="logo"
                  viewBox="0 0 10240 10240"
                >
                  <img src="logo.png" alt="" className="h-8 w-8 " />
                  <h1 className="font-medium font-serif">Resumate</h1>
                </div>
              </Link>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/about"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/faq"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/blog"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-1">

                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/contact"
                    onClick={() => {
                      toggleMenu();

                    }}
                  >
                    Contact
                  </Link>

                </li>
                {isLoggedIn &&
                  <li className="mb-1">

                    <Link
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      to="/profile"
                      onClick={() => {
                        toggleMenu();
                      }}
                    >
                      Your Profile
                    </Link>
                  </li>
                }
                {isLoggedIn &&
                  <li className="mb-1">
                    <Link
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      to="/admindashboard"
                      onClick={() => {
                        toggleMenu();
                      }}
                    >
                      Admin Dashboard
                    </Link>
                  </li>
                }
              </ul>
            </div>
            <div className="mt-auto">
              {!isLoggedIn && (
                <div className="pt-6">
                  <Link
                    to="/login"
                    className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl text-decoration-none"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    Sign in
                  </Link>

                  <Link
                    to="/CreateAccount"
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl text-decoration-none"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
              {isLoggedIn && (
                <div className="pt-6">
                  <Link
                    to="/"
                    className=" block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl text-decoration-none"
                    onClick={() => {
                      logoutHandler();
                      toggleMenu();
                    }}
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

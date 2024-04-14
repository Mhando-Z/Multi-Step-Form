import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import avatar from "../Assets/images/image-avatar.png";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import Product1 from "../Assets/Mimages/image-product-1-thumbnail.jpg";
import ProductsContex from "../Context/ProductContext";
import DeleteIcon from "@mui/icons-material/Delete";
import logo from "../Assets/images/logo.svg";

function Navbar() {
  const { data } = useContext(ProductsContex);
  const { count } = useContext(ProductsContex);
  const { showContent1 } = useContext(ProductsContex);
  const { showContent2 } = useContext(ProductsContex);
  const { handleHideContent } = useContext(ProductsContex);
  const [open, setOpen] = React.useState(false);
  const [showContent, setShow] = useState(false);
  const handleShow = () => {
    setShow(!showContent);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <div className="lg:sticky top-0 bg-gray-50">
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <div className="flex flex-col items-start gap-y-5 gap-x-10 justify-between p-10">
            <div onClick={toggleDrawer(false)} className="mb-10">
              <CloseIcon />
            </div>
            <Link
              onClick={toggleDrawer(false)}
              className="text-xl font-bold hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
              to={"/"}
            >
              Collection
            </Link>
            <Link
              onClick={toggleDrawer(false)}
              className="text-xl font-bold hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
              to={`/`}
            >
              Men
            </Link>
            <Link
              onClick={toggleDrawer(false)}
              className="text-xl font-bold hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
              to={`/`}
            >
              Women
            </Link>
            <Link
              onClick={toggleDrawer(false)}
              className="text-xl font-bold hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
              to={`/`}
            >
              About
            </Link>
            <Link
              onClick={toggleDrawer(false)}
              className="text-xl font-bold hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
              to={`/`}
            >
              Contact
            </Link>
          </div>
        </Drawer>
        <div className="sticky lg:container lg:mx-auto mx-0 bg-inherit top-0  md:p-5 p-3 md:mb-16 mb-3 mt-5 flex  items-center justify-between">
          <div className="flex relative flex-row gap-x-16 items-center justify-around">
            <div className="flex flex-row items-center justify-between gap-x-5">
              <div onClick={toggleDrawer(true)} className="md:hidden block">
                <MenuIcon />
              </div>
              <Link className="" to={"/"}>
                <img src={logo} alt="" className="" />
              </Link>
            </div>
            <div className="md:flex hidden items-center gap-x-10 justify-between">
              <Link
                className="text-xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
                to={"/"}
              >
                Collection
              </Link>
              <Link
                className="text-xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
                to={`/`}
              >
                Men
              </Link>
              <Link
                className="text-xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
                to={`/`}
              >
                Women
              </Link>
              <Link
                className="text-xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
                to={`/`}
              >
                About
              </Link>
              <Link
                className="text-xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
                to={`/`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between space-x-5">
            <Badge onClick={handleShow} badgeContent={count} color="warning">
              <ShoppingCartOutlinedIcon
                sx={{ color: "black", fontSize: "2.2rem" }}
              />
            </Badge>
            <img src={avatar} alt="avg" className="md:h-14 h-10" />
            {showContent && (
              <div className="flex flex-col py-10 bg-gray-50 space-y-3 rounded-lg p-5 shadow-xl absolute right-0 sm:left-auto left-0 top-20 sm:top-24 z-50 ">
                <div className="mb-5">
                  <h1 className="font-bold mb-5 text-xl text-black">Cart</h1>
                  <div className="border-b-2"></div>
                </div>
                {showContent1 && (
                  <div className="">
                    <div className="flex flex-row items-center justify-between space-x-5">
                      <img src={Product1} alt="" className="h-16 rounded-lg " />
                      <div>
                        <h1 className="font-normal text-xl text-black">
                          {data[0].product_name}
                        </h1>
                        <h1 className="font-normal text-xl text-black">
                          {data[0].price}x{count} ${data[0].prices * count}
                        </h1>
                      </div>
                      <DeleteIcon
                        onClick={handleHideContent}
                        sx={{ color: "gray" }}
                      />
                    </div>
                    <button className="w-full bg-orange-400 text-white text-lg py-4 rounded-lg mt-3">
                      Checkout
                    </button>
                  </div>
                )}
                {showContent2 && (
                  <div className="flex items-center justify-center p-20">
                    <h1 className="text-xl ">Cart is Empty</h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;

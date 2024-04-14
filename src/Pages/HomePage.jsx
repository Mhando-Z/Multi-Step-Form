import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductsContex from "../Context/ProductContext";
import product1 from "../Assets/images/image-product-1.jpg";
import product2 from "../Assets/images/image-product-2.jpg";
import product3 from "../Assets/images/image-product-3.jpg";
import product4 from "../Assets/images/image-product-4.jpg";
import mone from "../Assets/Mimages/image-product-1-thumbnail.jpg";
import mtwo from "../Assets/Mimages/image-product-2-thumbnail.jpg";
import mthree from "../Assets/Mimages/image-product-3-thumbnail.jpg";
import mfour from "../Assets/Mimages/image-product-4-thumbnail.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Dialog from "@mui/material/Dialog";

function HomePage() {
  const { data } = useContext(ProductsContex);
  const { handledecrement } = useContext(ProductsContex);
  const { handleincrement } = useContext(ProductsContex);
  const { handleShowContent } = useContext(ProductsContex);
  const { count } = useContext(ProductsContex);
  const [picture, setpicture] = useState(product1);
  const [selection, setSelection] = useState("");
  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");
  const [selection3, setSelection3] = useState("");
  const [open, setOpen] = React.useState(false);

  //button logics
  const handleNext = () => {
    if (picture === product1) {
      setpicture(product2);
    }
    if (picture === product2) {
      setpicture(product3);
    }
    if (picture === product3) {
      setpicture(product4);
    }
    if (picture === product4) {
      setpicture(product1);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePicture = () => {};

  return (
    <div>
      <div className="p-10 items-center justify-center flex h-auto">
        <div className="flex flex-col gap-y-4 lg:flex-row items-center gap-x-20 justify-between">
          {/* Dialog Logic */}
          <Dialog
            open={open}
            sx={{
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,30,0.4)",
              display: { lg: "block", sm: "none", xs: "none", md: "block" },
            }}
            onClose={handleClose}
          >
            <div className="flex   bg-black bg-opacity-75 flex-col gap-y-2 max-w-lg items-center justify-center">
              <img
                src={picture}
                alt="one"
                className="max-w-screen h-auto rounded-xl"
              />
              <div className="flex justify-between items-center">
                <button
                  onClick={handleNext}
                  className="absolute left-0 top-64 p-3 bg-white rounded-full"
                >
                  <ArrowBackIosIcon />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-64 p-3 bg-white rounded-full"
                >
                  <ArrowForwardIosIcon />
                </button>
              </div>
              {/* image thumbnails */}
              <div className="lg:flex  hidden flex-wrap items-center justify-center gap-x-5 mt-5">
                <img
                  onClick={() =>
                    handlePicture(
                      setpicture(product1),
                      setSelection("opacity-40 ring-4 ring-orange-500"),
                      setSelection2(""),
                      setSelection1(""),
                      setSelection3("")
                    )
                  }
                  src={mone}
                  alt="one"
                  className={`h-28 rounded-xl ${selection} hover:opacity-40`}
                />
                <img
                  onClick={() =>
                    handlePicture(
                      setpicture(product2),
                      setSelection1("opacity-40 ring-4 ring-orange-500"),
                      setSelection(""),
                      setSelection2(""),
                      setSelection3("")
                    )
                  }
                  src={mtwo}
                  alt="one"
                  className={`h-28 rounded-xl ${selection1}  hover:opacity-40`}
                />
                <img
                  onClick={() =>
                    handlePicture(
                      setpicture(product3),
                      setSelection2("opacity-40 ring-4 ring-orange-500"),
                      setSelection(""),
                      setSelection1(""),
                      setSelection3("")
                    )
                  }
                  src={mthree}
                  alt="one"
                  className={`h-28 rounded-xl ${selection2} hover:opacity-40`}
                />
                <img
                  onClick={() =>
                    handlePicture(
                      setpicture(product4),
                      setSelection3("opacity-40 ring-4 ring-orange-500"),
                      setSelection(""),
                      setSelection2(""),
                      setSelection1("")
                    )
                  }
                  src={mfour}
                  alt="one"
                  className={`h-28 rounded-xl ${selection3}  hover:opacity-40`}
                />
              </div>
            </div>
          </Dialog>
          {/* Pictures side */}
          <div className="flex flex-col gap-y-2 max-w-lg items-center justify-center">
            <div className="relative">
              <img
                onClick={handleClickOpen}
                src={picture}
                alt="one"
                className="max-w-screen h-auto rounded-xl"
              />
              <div className="flex lg:hidden justify-between items-center">
                <button
                  onClick={handleNext}
                  className=" absolute left-0 sm:top-48 top-32 p-4 text-center bg-white rounded-full"
                >
                  <ArrowBackIosIcon />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 sm:top-48 top-32 p-4 text-center bg-white rounded-full"
                >
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </div>
            {/* image thumbnails */}
            <div className="lg:flex hidden flex-wrap items-center justify-center gap-x-5 mt-5">
              <img
                onClick={() =>
                  handlePicture(
                    setpicture(product1),
                    setSelection("opacity-40 ring-4 ring-orange-500"),
                    setSelection2(""),
                    setSelection1(""),
                    setSelection3("")
                  )
                }
                src={mone}
                alt="one"
                className={`h-28 rounded-xl ${selection} hover:opacity-40`}
              />
              <img
                onClick={() =>
                  handlePicture(
                    setpicture(product2),
                    setSelection1("opacity-40 ring-4 ring-orange-500"),
                    setSelection(""),
                    setSelection2(""),
                    setSelection3("")
                  )
                }
                src={mtwo}
                alt="one"
                className={`h-28 rounded-xl ${selection1}  hover:opacity-40`}
              />
              <img
                onClick={() =>
                  handlePicture(
                    setpicture(product3),
                    setSelection2("opacity-40 ring-4 ring-orange-500"),
                    setSelection(""),
                    setSelection1(""),
                    setSelection3("")
                  )
                }
                src={mthree}
                alt="one"
                className={`h-28 rounded-xl ${selection2} hover:opacity-40`}
              />
              <img
                onClick={() =>
                  handlePicture(
                    setpicture(product4),
                    setSelection3("opacity-40 ring-4 ring-orange-500"),
                    setSelection(""),
                    setSelection2(""),
                    setSelection1("")
                  )
                }
                src={mfour}
                alt="one"
                className={`h-28 rounded-xl ${selection3}  hover:opacity-40`}
              />
            </div>
          </div>
          {/* Details side */}
          <div className="flex max-w-md gap-y-3 flex-col  justify-center">
            <h1 className="text-left text-orange-500 font-semibold  ">
              {data[0].product_brand}
            </h1>
            <h1 className="text-4xl font-bold mb-8 ">{data[0].product_name}</h1>
            <h1 className="text-lg">{data[0].product_description}</h1>
            <div className="flex flex-row items-center gap-x-6 justify-between">
              <div className="flex flex-row items-center gap-x-5">
                <h1 className="font-bold text-black text-2xl">
                  {data[0].price}
                </h1>
                <h1 className="font-semibold px-2 text-orange-500 bg-orange-200 text-xl">
                  {data[0].rate}
                </h1>
              </div>
              <h1 className="font-normal md:hidden text-black text-lg">
                {data[0].lastprice}
              </h1>
            </div>
            <h1 className="font-normal md:flex hidden text-black text-lg">
              {data[0].lastprice}
            </h1>
            {/* Buttons */}
            <div className="flex md:flex-row gap-y-2 gap-x-14 flex-col items-center justify-between">
              <div className="flex flex-row w-full  items-center gap-10 justify-between rounded-lg bg-gray-200  py-3">
                {/* icon buttons add and minus */}
                <Link onClick={handleincrement}>
                  <AddOutlinedIcon
                    fontSize="large"
                    sx={{ color: "orange", fontWeight: "bold" }}
                  />
                </Link>
                <h1 className="text-xl font-bold">{count}</h1>
                <Link onClick={handledecrement}>
                  <RemoveOutlinedIcon
                    fontSize="large"
                    sx={{ color: "orange", fontWeight: "bold" }}
                  />
                </Link>
              </div>

              <button
                onClick={handleShowContent}
                className="py-4 px-16 rounded-xl w-full text-center shadow-xl hover:bg-orange-300 text-white text-md bg-orange-400"
              >
                <ShoppingCartOutlinedIcon sx={{ fontSize: "1rem" }} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

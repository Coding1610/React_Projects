import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFirebaseContext } from "../Context/Firebase";

export default function BookDetails_Page() {
  
  const firebase = useFirebaseContext();

  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [url, setURL] = useState(null);
  const [qty, setQty] = useState(1);

  // Getting Book Id
  const param = useParams();

  // Get Data
  useEffect(() => {
    firebase
      .getBookDetails(param.bookID)
      .then((details) => setDetails(details.data()));
  }, []);

  // Get Image
  useEffect(() => {
    if (details) {
      firebase.getImageURL(details.imgURL).then((url) => setURL(url));
    }
  }, []);

  // Loading
  if (details === null) {
    return (
      <h1 className="max-w-screen h-[calc(100vh-60px)] flex justify-center items-center text-blue-800 font-semibold text-[2rem]">
        {" "}
        Loading...
      </h1>
    );
  }

  // Place Order
  const handleOrders = async () => {
    if (firebase.isLoggedIn) {
      const result = await firebase
        .placeOrder(param.bookID, qty)
        .then((res) => alert("Order Placed"));
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <div className="max-w-screen h-[calc(100vh-60px)] bg-gray-200 flex justify-center items-center">
        <div className="w-[80%] h-[85%] max-h-[600px] flex bg-white max-w-[900px] rounded-xl shadow-xl">
          <div className="w-[50%] flex-1 flex flex-col justify-center items-center gap-6 p-5 overflow-scroll hide-scrollbar">
            <div>
              <h1 className="font-semibold text-blue-800 text-[35px]">
                {details.title}
              </h1>
            </div>

            <div>
              <p className="text-[19px] sm:text-xl font-medium text-purple-600">
                {" "}
                <span className="sm:text-[20px] text-gray-500 text-[19px]">
                  Author :
                </span>{" "}
                {details.author}
              </p>
              <p className="text-[19px] sm:text-xl font-medium text-orange-600">
                {" "}
                <span className="sm:text-[20px] text-gray-500 text-[19px]">
                  Language :{" "}
                </span>
                {details.language}
              </p>
              <p className="text-[19px] sm:text-xl font-medium text-yellow-600">
                {" "}
                <span className="sm:text-[20px] text-gray-500 text-[19px]">
                  Category :{" "}
                </span>
                {details.categories}
              </p>
              <p className="text-[19px] sm:text-xl font-medium text-pink-600">
                {" "}
                <span className="sm:text-[20px] text-gray-500 text-[19px]">
                  Price :{" "}
                </span>
                {details.price}
              </p>
            </div>

            <div className="w-[80%]">
              <button
                type="submit"
                className="w-[100%] bg-blue-800 text-white rounded-md py-3 text-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:bg-blue-700 shadow-lg hover:shadow-xl"
                onClick={(e) => navigate("/")}
              >
                {" "}
                More Books{" "}
              </button>
            </div>

            <div>
              <p className="text-[19px] sm:text-xl font-thin">
                Name : {details.displayName}{" "}
              </p>
              <p className="text-[19px] sm:text-xl font-thin">
                Email : {details.userEmail}
              </p>
              <div className="flex gap-2 justify-center items-center mt-2 flex-wrap">
                <label
                  className="text-[19px] sm:text-xl font-thin"
                  htmlFor="qty"
                >
                  Quantity
                </label>
                <input
                  onChange={(e) => setQty(e.target.value)}
                  value={qty}
                  type="number"
                  min={1}
                  className="bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your email..."
                  required
                />
              </div>
            </div>

            <div className="w-[80%]">
              <button
                type="submit"
                className="w-[100%] bg-green-800 text-white rounded-md py-3 text-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:bg-green-700 shadow-lg hover:shadow-xl"
                onClick={handleOrders}
              >
                {" "}
                Buy Now{" "}
              </button>
            </div>
          </div>

          <div className="md:flex-1 md:justify-center md:items-center md:flex hidden p-5">
            <img
              src={url}
              alt="Book_Cover_Image"
              className="w-[100%] max-w-[800px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
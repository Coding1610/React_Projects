import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFirebaseContext } from "../Context/Firebase";

export default function Card(props) {

  const firebase = useFirebaseContext();

  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imgURL).then((url) => setURL(url));
  }, []);

  // View Book Details
  const navigate = useNavigate();
  const handleBook = () => {
    navigate(props.link);
  };

  return (
    <div className="max-w-[200px] h-[350px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between items-center">
      <div className="flex justify-center items-center w-[100%]">
        <img className="rounded-lg w-[100%]" src={url} />
      </div>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        This book has a title{" "}
        <span className="text-gray-100">{props.title}</span> and this book is
        sold by {props.displayName} and this book costs {props.price}.
      </p>
      <button
        className="w-max text-[15px] bg-blue-800 text-white rounded-md py-1 px-3 text-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:bg-blue-700 shadow-lg hover:shadow-xl"
        onClick={handleBook}
      >
        {" "}
        Details{" "}
      </button>
    </div>
  );
}
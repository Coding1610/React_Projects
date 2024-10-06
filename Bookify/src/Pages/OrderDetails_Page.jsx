import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFirebaseContext } from "../Context/Firebase";

export default function OrderDetails_Page() {

  const param = useParams();
  const firebase = useFirebaseContext();
  const navigate = useNavigate();

  const [orders, setorders] = useState([]);

  useEffect(() => {
    firebase
      .fetchBookOrders(param.bookID)
      .then((orders) => setorders(orders.docs));
  }, []);

  return (
    <>
      <div className="max-w-screen h-screen bg-gray-200 p-6">
        <h1 className="text-[2rem] font-semiBold text-blue-800 flex justify-center mb-4">
          {" "}
          Orders{" "}
        </h1>
        <div className="w-[100%] flex justify-center gap-4 flex-wrap">
          {orders.map((order) => {
            const data = order.data();
            return (
              <div className="max-w-[270px] h-max bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between items-center">
                <p className="text-[18px] text-gray-400">
                  {" "}
                  <span className="text-white">Buyer : </span>
                  {data.displayName}
                </p>
                <p className="text-[18px] text-gray-400">
                  {" "}
                  <span className="text-white">Email : </span>
                  {data.userEmail}
                </p>
                <p className="text-[18px] text-gray-400">
                  {" "}
                  <span className="text-white">Book Quantity : </span>
                  {data.qty}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-[100%] flex justify-center mt-5">
          <button
            className="w-max bg-blue-800 text-white rounded-md py-3 px-5 text-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:bg-blue-700 shadow-lg hover:shadow-xl"
            onClick={(e) => navigate("/book/order")}
          >
            {" "}
            Back{" "}
          </button>
        </div>
      </div>
    </>
  );
}
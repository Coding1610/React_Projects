import React, { useState } from "react";
import { useEffect } from "react";
import { useFirebaseContext } from "../Context/Firebase";
import Card from "../Components/Card";
import Login_Page from "./Login_Page";

export default function Order_Page() {

  const firebase = useFirebaseContext();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      firebase
        .fetchMyBooks(firebase.user.email)
        .then((books) => setBooks(books.docs));
    }
  }, [firebase]);

  if (!firebase.isLoggedIn) {
    return <Login_Page />;
  }

  return (
    <>
      <div className="max-w-screen bg-gray-200 p-6">
        <h1 className="sm:text-[2rem] font-semiBold text-blue-800 flex justify-center mb-6 text-[25px]">
          {" "}
          User Books{" "}
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {books.map((book) => (
            <Card
              value={"Order"}
              link={`/book/order/${book.id}`}
              key={book.id}
              id={book.id}
              {...book.data()}
            />
          ))}
        </div>
      </div>
    </>
  );
}
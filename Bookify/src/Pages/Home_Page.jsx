import React from "react";
import { useState, useEffect } from "react";
import { useFirebaseContext } from "../Context/Firebase";
import Card from "../Components/Card";

export default function Home_Page() {

  const firebase = useFirebaseContext();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.getBookList().then((books) => setBooks(books.docs));
  }, []);

  // Loading
  if (books === null) {
    return (
      <h1 className="w-screen h-screen flex justify-center items-center text-blue-800 font-semibold text-[2rem]">
        {" "}
        Loading...
      </h1>
    );
  }

  return (
    <>
      <div className="max-w-screen bg-gray-200 p-6">
        <h1 className="sm:text-[2rem] font-semiBold text-blue-800 flex justify-center mb-6 text-[25px]">
          {" "}
          Books Overview{" "}
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {books.map((book) => (
            <Card
              value={"Details"}
              link={`/book/view/${book.id}`}
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
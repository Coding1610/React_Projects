import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebaseContext } from "../Context/Firebase";

export default function List_Page() {

  const firebase = useFirebaseContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [categories, setCategories] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImg, setCoverImg] = useState("");

  const handleList = async (e) => {
    e.preventDefault();
    await firebase.handleBooks(
      title,
      language,
      isbn,
      categories,
      price,
      author,
      coverImg
    );
    setCategories("");
    setCoverImg("");
    setIsbn("");
    setLanguage("");
    setPrice("");
    setTitle("");
    setAuthor("");
  };

  if( !firebase.isLoggedIn ){
    navigate("/login");
  }

  return (
    <>
      <div className="w-screen h-[calc(100vh-60px)] bg-gray-200 flex justify-center items-center">
        <form className="w-[80%] h-[85%] max-h-[600px] flex bg-white max-w-[900px] rounded-xl shadow-xl justify-center items-center">
          <div className="w-[80%] h-[90%] flex-1 flex flex-col justify-center items-center gap-5">
            <h1 className="text-[2rem] font-semiBold text-blue-800">
              {" "}
              Listing Book{" "}
            </h1>

            <div className="flex flex-row flex-wrap overflow-scroll hide-scrollbar md:flex-col gap-4 w-[100%] md:w-[80%] h-[80%] justify-center items-center md:pr-6">
              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[20px] text-wrap" htmlFor="title">
                  {" "}
                  Title{" "}
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your book title..."
                  required
                />
              </div>

              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[20px] text-wrap" htmlFor="author">
                  {" "}
                  Author{" "}
                </label>
                <input
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                  type="text"
                  className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your book author..."
                  required
                />
              </div>

              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[20px] text-wrap" htmlFor="language">
                  {" "}
                  Language{" "}
                </label>
                <input
                  onChange={(e) => setLanguage(e.target.value)}
                  value={language}
                  type="text"
                  className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your book language..."
                  required
                />
              </div>

              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[20px] text-wrap" htmlFor="isbn">
                  {" "}
                  ISBN Number{" "}
                </label>
                <input
                  onChange={(e) => setIsbn(e.target.value)}
                  value={isbn}
                  type="text"
                  className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your ISBN number..."
                  required
                />
              </div>

              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[20px] text-wrap" htmlFor="categories">
                  {" "}
                  Categories{" "}
                </label>
                <input
                  onChange={(e) => setCategories(e.target.value)}
                  value={categories}
                  type="text"
                  className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your book categories..."
                  required
                />
              </div>

              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[20px] text-wrap" htmlFor="price">
                  {" "}
                  Price{" "}
                </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="text"
                  className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your book price..."
                  required
                />
              </div>

              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[20px] text-wrap" htmlFor="coverImg">
                  {" "}
                  Cover Image{" "}
                </label>
                <input
                  onChange={(e) => setCoverImg(e.target.files[0])}
                  type="file"
                  className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="enter your book cover image..."
                  required
                />
              </div>
            </div>

            <div className="w-max">
              <button
                onClick={handleList}
                type="submit"
                className="w-[100%] bg-blue-800 text-white rounded-md py-3 px-10 text-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:bg-blue-700 shadow-lg hover:shadow-xl"
              >
                {" "}
                Create{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
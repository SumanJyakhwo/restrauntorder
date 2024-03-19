import React, { useState } from "react";

import categories from "../dashboard/categorylist";
import itemswithoutID from "../dashboard/items";

function Mainscreen() {
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Biscuits");
  const [showCategories, setShowCategories] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const items = itemswithoutID.map((item, index) => ({
    ...item,
    id: index + 1,
    image:
      "https://static.toiimg.com/thumb/62403305.cms?imgsize=566439&width=800&height=800",
  }));

  const handleCategoryChange = (name) => {
    setSearchTerm("");
    setActiveCategory(name);
    setStartIndex(0);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setStartIndex(0);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const itemsPerScreen = 9;
  const endIndex = startIndex + itemsPerScreen;

  const handleNext = () => {
    if (endIndex < items.length) {
      setStartIndex(startIndex + itemsPerScreen);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerScreen);
    }
  };

  return (
    <div className="flex">
      <button className="fixed top-0 left-0" onClick={toggleCategories}></button>

      <section className={`p-4 ${showCategories ? "" : "hidden"} sm:block w-20% min-h-screen`}>
        <h2 className="flex items-center mb-1 text-xl ml-1 font-bold">Categories</h2>
        {categories.map((category) => (
          <button
            key={category.cid}
            className="block w-full py-2 px-3 mb-3 rounded-lg shadow-md text-base font-medium"
            onClick={() => handleCategoryChange(category.name)}
            style={{ backgroundColor: "rgba(33, 150, 243, 0.5)" }}
          >
            {category.name}
          </button>
        ))}
      </section>

      <section>
        <div className={`w-full md:w-3/4 ${window.innerWidth < 720 ? "w-0.60" : ""}`}>
          <div className="mb-3 flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-3 rounded-lg shadow-md text-black text-sm placeholder-gray-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="h-screen flex flex-wrap justify-center items-center overflow-y-auto">
            <div className="flex flex-wrap justify-center items-center">
              {items
                .filter((item) => item.category === activeCategory)
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .slice(startIndex, endIndex)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-3 flex flex-col items-center ${
                      index % 3 === 0 ? "w-full" : "w-1/3"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg mb-1"
                    />
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600">{`$${item.price.toFixed(2)}`}</p>
                    <h3 className="text-gray-400 text-sm">Item No. : {item.id}</h3>
                    <button
                      className="mt-1 py-1 px-2 rounded-lg text-sm"
                      onClick={() => addToCart(item)}
                    >
                      Add
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="mr-2 py-2 px-4 rounded-lg text-sm"
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              Previous
            </button>
            <button
              className="py-2 px-4 rounded-lg text-sm"
              onClick={handleNext}
              disabled={endIndex >= items.length}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section className={`w-full md:w-1/4 ${window.innerWidth < 720 ? "w-0.40" : ""}`}>
        <h2 className="text-xl font-bold mb-4">Cart</h2>

        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-lg mb-1"
                  />
                </td>
                <td className="text-sm">{item.name}</td>
                <td className="text-gray-400 text-sm">Price: ${item.price}</td>
                <td>
                  <button> - </button>
                  <span>1</span>
                  <button> + </button>
                  <button>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Mainscreen;

const Sidebar = () => {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="w-64 bg-white flex flex-col h-[400px] items-start py-10 border-r">
      {/* <h2 className="text-xl font-bold mb-4">Categories</h2> */}
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-gray-700 hover:bg-gray-200 py-2 rounded cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

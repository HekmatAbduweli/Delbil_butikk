import { useContext } from "react";
import { CarPartContext } from "./CarPartContext";

export default function List() {
  const { carParts, deleteCarPart, setSelectedPart } = useContext(CarPartContext);


  return (
    <>
      <ul className="w-full">
        {carParts.map((part) => (
          <li
            key={part.id}
            className="flex items-center justify-between w-full p-4 border-b border-gray-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={part.image}
                alt={`Bilde av ${part.title}`}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {part.title}
                </h3>
                <p className="text-gray-500">${part.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedPart(part)}
                className="bg-blue-500 text-white rounded-md py-1 px-3 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCarPart(part.id)}
                className="bg-red-500 text-white rounded-md py-1 px-3 ml-2 hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

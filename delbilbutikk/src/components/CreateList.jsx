import { useState, useContext, useEffect } from "react";
import { CarPartContext } from "./CarPartContext";

export default function CreateNewList() {
  const [newPart, setNewPart] = useState({ title: "", price: 0, image: "" });
  const { addCarPart, updateCarPart, selectedPart, setSelectedPart } =
    useContext(CarPartContext);

  // Når `selectedPart` endrer seg, oppdater `newPart`-staten
  useEffect(() => {
    if (selectedPart) {
      setNewPart(selectedPart);
    } else {
      setNewPart({ title: "", price: 0, image: "" });
    }
  }, [selectedPart]);

  const handleChange = (e) => {
    setNewPart({ ...newPart, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdatePart = () => {
    if (selectedPart) {
      updateCarPart(newPart); // Oppdater delen
    } else {
      addCarPart(newPart); // Legg til ny del
    }
    setNewPart({ title: "", price: 0, image: "" });
  };
  return (
    <form className="space-y-2 max-w-64">
      <p>Legg til en ny bildel:</p>
      <input
        name="title"
        type="text"
        value={newPart.title}
        onChange={handleChange}
        placeholder="Legg navnet til delen"
        className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6; block w-full"
      />
      <input
        name="price"
        type="number"
        value={newPart.price}
        onChange={handleChange}
        placeholder="legg pris (usd$)"
        className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6; block w-full"
      />
      <input
        name="image"
        type="text"
        value={newPart.image}
        onChange={handleChange}
        placeholder="legg elnken på bilde her"
        className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6; block w-full"
      />
      <button
        type="button"
        onClick={handleAddOrUpdatePart}
        className="bg-black text-white rounded-md py-1.5 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full"
      >
        {selectedPart ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

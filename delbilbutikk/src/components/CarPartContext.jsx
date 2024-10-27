import { createContext, useState } from "react";

export const CarPartContext = createContext();

export function CarPartContextProvider({ children }) {
  const [carParts, setCarParts] = useState([
    {
      id: 1,
      title: "Headlight",
      price: 500,
      image:
        "https://mercedesgenuineparts.co.uk/cdn/shop/files/LR_20210916_115428.jpg?v=1686227297",
    },
    {
      id: 2,
      title: "Bumper",
      price: 1000,
      image: "https://i.ebayimg.com/images/g/WaMAAOSwnk1nD~Ts/s-l1600.webp",
    },
  ]);

  const [selectedPart, setSelectedPart] = useState(null); // Ny state for valgt del

  const addCarPart = (part) => {
    setCarParts([...carParts, { ...part, id: carParts.length + 1 }]);
  };

  const updateCarPart = (updatedPart) => {
    setCarParts(
      carParts.map((part) => (part.id === updatedPart.id ? updatedPart : part))
    );
    setSelectedPart(null);
  };

  const deleteCarPart = (id) => {
    setCarParts(carParts.filter((part) => part.id !== id));
  };

  return (
    <CarPartContext.Provider
      value={{
        carParts,
        addCarPart,
        updateCarPart,
        deleteCarPart,
        selectedPart,
        setSelectedPart,
      }}
    >
      {children}
    </CarPartContext.Provider>
  );
}

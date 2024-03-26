import { useState } from "react";
import arrowl from "../assets/arrow_le.svg";
import arrowr from "../assets/arrow_ri.svg";

const List: React.FC = () => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleNextClick = () => {
    setCurrentElementIndex(currentElementIndex + 1);
    setShowLeftArrow(true);
    if (currentElementIndex + 7 >= elements.length - 1) {
      setShowRightArrow(false);
    }
  };

  const handlePrevClick = () => {
    setCurrentElementIndex(Math.max(0, currentElementIndex - 1));
    setShowRightArrow(true);
    if (currentElementIndex <= 1) {
      setShowLeftArrow(false);
    }
  };

  const highlightElement = (index: number) => {
    const img = document.getElementById(`element-img-${index}`);
    const text = document.getElementById(`element-text-${index}`);
    if (img) {
      img.classList.remove("opacity-50");
    }
    if (text) {
      text.classList.add("text-black");
    }
  };

  const softenElement = (index: number) => {
    const img = document.getElementById(`element-img-${index}`);
    const text = document.getElementById(`element-text-${index}`);
    if (img) {
      img.classList.add("opacity-50");
    }
    if (text) {
      text.classList.remove("text-black");
    }
  };

  const elements = [
    [
      "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
      "Casas del árbol",
    ],
    [
      "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
      "Viñedos",
    ],
    [
      "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
      "Casas rurales",
    ],
    [
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      "Vistas increíbles",
    ],
    [
      "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
      "Diseño",
    ],
    [
      "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
      "Ciudades famosas",
    ],
    [
      "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
      "Granjas",
    ],
    [
      "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
      "Autosuficientes",
    ],
    [
      "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
      "Playa",
    ],
    [
      "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
      "Cabañas",
    ],
    [
      "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
      "Castillos",
    ],
    [
      "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
      "Habitaciones",
    ],
    [
      "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
      "Parques nacionales",
    ],
    [
      "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
      "Islas",
    ],
  ];

  return (
    <div className="flex items-center">
      <div className="h-7 w-7">
        {showLeftArrow && (
          <button
            className="text-black text-lg h-7 w-7 border rounded-full bg-white flex justify-center items-center hover:shadow-md"
            onClick={handlePrevClick}
          >
            <img className="h-3 w-3" src={arrowl} alt="" />
          </button>
        )}
      </div>

      <div className="flex">
        {elements
          .slice(currentElementIndex, currentElementIndex + 7)
          .map((_, index) => (
            <div
              className="px-6"
              key={index}
              onMouseEnter={() => highlightElement(index)}
              onMouseLeave={() => softenElement(index)}
            >
              <button className="flex flex-col items-center justify-center hover:cursor-pointer px-4 w-14 h-14">
                <img
                  className="opacity-50"
                  id={`element-img-${index}`}
                  src={elements[currentElementIndex + index][0]}
                  alt={elements[currentElementIndex + index][1]}
                />
                <p
                  className="pt-2 font-semibold text-xs truncate"
                  id={`element-text-${index}`}
                >
                  {elements[currentElementIndex + index][1]}
                </p>
              </button>
            </div>
          ))}
      </div>
      <div className="h-7 w-7">
        {showRightArrow && (
          <button
            className="text-black text-lg h-7 w-7 border rounded-full bg-white flex justify-center items-center hover:shadow-md"
            onClick={handleNextClick}
          >
            <img className="h-3 w-3" src={arrowr} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};
export default List;
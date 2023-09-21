import React, { useState } from "react";
import Layout from '../components/Layout';

const tourismData = [
  {
    id: 1,
    name: "Playa Punta Sol",
    imageSrc: "/static/punta_sol.jpg",
    description: "Descripción de Playa Punta Sol...",
  },
  {
    id: 2,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 3,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 4,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 5,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 6,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 7,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 8,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 9,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 10,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 11,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 12,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 13,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 14,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 15,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 16,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 17,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 18,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 19,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
  {
    id: 20,
    name: "Vista al Barco",
    imageSrc: "/static/vistaBarco.jpg",
    description: "Descripción de Vista al Barco...",
  },
 
];

export default function Turismo() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const openPlaceModal = (place) => {
    setSelectedPlace(place);
  };

  const closePlaceModal = () => {
    setSelectedPlace(null);
    setIsImageExpanded(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.className === "tourism-modal") {
      closePlaceModal();
    }
  };

  return (
    <Layout>
      <div>
        <h1>Turismo</h1>
        <p>Se muestran los lugares turísticos en México</p>
        <div className="tourism-gallery">
          {tourismData.map((place) => (
            <div key={place.id} className="tourism-item">
              <img
                src={place.imageSrc}
                alt={place.name}
                onClick={() => openPlaceModal(place)}
                className="tourism-image"
              />
              <p>{place.name}</p>
            </div>
          ))}
        </div>
        {selectedPlace && (
          <div className="tourism-modal" onClick={handleBackgroundClick}>
            <div className="tourism-modal-content" onClick={closePlaceModal} >
              <div className="place-details">
                <div className="image-container">
                  <img
                    src={selectedPlace.imageSrc}
                    alt={selectedPlace.name}
                    className={`place-image ${isImageExpanded ? "expanded" : ""}`}
                    onClick={closePlaceModal}
                  />
                </div>
                <div className="text-container">
                  <h2>{selectedPlace.name}</h2>
                  <p>{selectedPlace.description}</p>
                </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .tourism-gallery {
          display: flex;
          flex-wrap: wrap;
        }
        .tourism-item {
          margin: 10px;
          cursor: pointer;
        }
        .tourism-image {
          width: 200px;
          height: auto;
        }
        .place-image {
          max-width: 100%;
          height: auto;
          transition: max-width 0.3s ease; /* Agregar transición */
        }
        .place-image.expanded {
          max-width: 30%; /* Cambiar el tamaño cuando se amplía */
        }
        .tourism-modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }
        .tourism-modal-content {
          background-color: purple;
          padding: 20px;
          border-radius: 5px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 15px;
          cursor: pointer;
          color: black;
          background-color: red;
          border-radius: 50%;
          padding: 5px;
        }
        .close-button:hover {
          background-color: darkred;
        }
        .place-details {
          padding: 20px;
          text-align: center;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .image-container {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        .text-container {
          flex: 1;
          padding-left: 20px;
          text-align: left;
        }
        button {
          background-color: red;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

      `}</style>
    </Layout>
  );
}

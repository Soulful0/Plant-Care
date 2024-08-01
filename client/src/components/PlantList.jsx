import React from "react";
import { useMutation } from "@apollo/client";
import { SAVE_PLANT } from "../utils/mutations";
import Auth from "../utils/auth";
import placeholderImage from "../assets/placeholder.jpg";

const PlantList = ({ plants }) => {
  const loggedIn = Auth.loggedIn();
  const [savePlant] = useMutation(SAVE_PLANT);

  const handleSave = async (plant) => {
    if (!loggedIn) {
      alert("Please log in to save plants.");
      return;
    }

    try {
      await savePlant({
        variables: {
          common_name: plant.common_name,
          scientific_name:
            plant.scientific_name && plant.scientific_name.length > 0
              ? plant.scientific_name[0]
              : "",
          sunlight: plant.sunlight,
          watering: plant.watering,
          cycle: plant.cycle,
          default_image: plant.default_image
            ? plant.default_image.regular_url
            : placeholderImage,
        },
      });
    } catch (e) {
      console.error("Error saving plant:", e);
      alert("Failed to save plant.");
    }
  };

  return (
    <div className="columns is-multiline">
      {plants.length === 0 ? (
        <p></p>
      ) : (
        plants.map((plant) => (
          <div
            key={plant.id}
            className="column is-one-quarter is-flex is-flex-direction-column is-fullheight"
          >
            <div
              className="card is-flex is-flex-direction-column is-fullheight"
              style={{
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(
                  ".image-container"
                ).style.opacity = "0";
                e.currentTarget.querySelector(".plant-details").style.opacity =
                  "1";
                if (loggedIn) {
                  e.currentTarget.querySelector(".save-button").style.display =
                    "inline-block";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(
                  ".image-container"
                ).style.opacity = "1";
                e.currentTarget.querySelector(".plant-details").style.opacity =
                  "0";
                if (loggedIn) {
                  e.currentTarget.querySelector(".save-button").style.display =
                    "none";
                }
              }}
            >
              <div
                className="image-container"
                style={{ transition: "opacity 0.3s" }}
              >
                <figure className="image is-4by3">
                  <img
                    src={
                      plant.default_image
                        ? plant.default_image.regular_url
                        : placeholderImage
                    }
                    alt={plant.common_name}
                    onError={(e) => {
                      e.target.src = placeholderImage;
                    }}
                  />
                </figure>
                <div className="card-content">
                  <div className="media">
                    <div
                      className="media-content"
                      style={{
                        height: "10rem",
                      }}
                    >
                      <p className="title is-4">{plant.common_name}</p>
                      <p className="subtitle is-6">
                        {plant.scientific_name &&
                        plant.scientific_name.length > 0
                          ? plant.scientific_name.join(", ")
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="plant-details is-flex is-flex-direction-column is-align-items-center is-justify-content-center has-background-white-ter p-3"
                style={{
                  opacity: 0,
                  transition: "opacity 0.3s",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  textAlign: "center",
                }}
              >
                <p className="has-text-black">
                  <strong className="has-text-black">Watering:</strong>{" "}
                  {plant.watering || "N/A"}
                </p>
                <p className="has-text-black">
                  <strong className="has-text-black">Sunlight:</strong>{" "}
                  {plant.sunlight || "N/A"}
                </p>
                <p className="has-text-black">
                  <strong className="has-text-black">Cycle:</strong>{" "}
                  {plant.cycle || "N/A"}
                </p>
                {loggedIn && (
                  <button
                    className="button is-success save-button has-text-centered"
                    style={{
                      margin: "1rem",
                    }}
                    onClick={() => handleSave(plant)}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PlantList;
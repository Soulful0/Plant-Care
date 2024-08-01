import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Navbar from "./Navbar";
import { GET_ME } from "../utils/queries";
import { REMOVE_PLANT, UPDATE_PLANT_NOTE } from "../utils/mutations";
import placeholderImage from "../assets/placeholder.jpg";

const SavedGuides = () => {
  const { loading, data, error } = useQuery(GET_ME);
  const [removePlant] = useMutation(REMOVE_PLANT, {
    refetchQueries: [{ query: GET_ME }],
  });
  const [updatePlantNote] = useMutation(UPDATE_PLANT_NOTE);

  const [savedPlants, setSavedPlants] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (data && data.me && data.me.savedPlants) {
      setSavedPlants(data.me.savedPlants);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleRemove = async (plantId) => {
    try {
      await removePlant({
        variables: { plantId },
      });
      setSavedPlants(savedPlants.filter((plant) => plant._id !== plantId));
    } catch (e) {
      console.error("Error removing plant:", e);
      alert("Failed to remove plant.");
    }
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = async (plantId) => {
    try {
      const { data } = await updatePlantNote({
        variables: { plantId, note },
      });
      const updatedPlant = data.updatePlantNote;
      setSavedPlants(
        savedPlants.map((plant) =>
          plant._id === plantId ? updatedPlant : plant
        )
      );
      setEditingNote(null);
    } catch (e) {
      console.error("Error updating note:", e);
      alert("Failed to update note.");
    }
  };

  const handleRemoveNote = async (plantId) => {
    try {
      const { data } = await updatePlantNote({
        variables: { plantId, note: "" },
      });
      const updatedPlant = data.updatePlantNote;
      setSavedPlants(
        savedPlants.map((plant) =>
          plant._id === plantId ? updatedPlant : plant
        )
      );
    } catch (e) {
      console.error("Error removing note:", e);
      alert("Failed to remove note.");
    }
  };

  return (
    <div style={{ backgroundColor: '#85c88a', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <h1
          className="title"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            color: "#000"
          }}
        >
          Saved Guides
        </h1>
        <div className="columns is-multiline">
          {savedPlants.length > 0 ? (
            savedPlants.map((plant) => (
              <div key={plant._id} className="column is-one-third">
                <div
                  className="card plant-card"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".plant-details"
                    ).style.display = "flex";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".plant-details"
                    ).style.display = "none";
                  }}
                >
                  <div
                    className="image-container"
                    style={{ transition: "opacity 0.3s" }}
                  >
                    <figure className="image is-4by3">
                      <img
                        src={plant.default_image || placeholderImage}
                        alt={plant.common_name}
                        onError={(e) => {
                          e.target.src = placeholderImage;
                        }}
                      />
                    </figure>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{plant.common_name}</p>
                          <p className="subtitle is-6">
                            {plant.scientific_name || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="plant-details"
                    style={{
                      display: "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(255, 255, 255, 0.9)",
                      padding: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <p class="has-text-black">
                      <strong class="has-text-black">Watering:</strong>{" "}
                      {plant.watering || "N/A"}
                    </p>
                    <p class="has-text-black">
                      <strong class="has-text-black">Sunlight:</strong>{" "}
                      {plant.sunlight.join(", ") || "N/A"}
                    </p>
                    <p class="has-text-black">
                      <strong class="has-text-black">Cycle:</strong>{" "}
                      {plant.cycle || "N/A"}
                    </p>
                    <p class="has-text-black">
                      <strong class="has-text-black">Note:</strong>{" "}
                      {editingNote === plant._id ? (
                        <textarea
                          className="textarea"
                          value={note}
                          onChange={handleNoteChange}
                          style={{ maxHeight: "4em", overflow: "auto" }}
                        />
                      ) : (
                        <span
                          class="has-text-black"
                          style={{
                            maxHeight: "4em",
                            overflow: "auto",
                            display: "block",
                            wordBreak: "break-word",
                          }}
                        >
                          {plant.note || "N/A"}
                        </span>
                      )}
                    </p>
                    {editingNote === plant._id ? (
                      <div style={{ width: "100%" }}>
                        <button
                          className="button is-success mt-2"
                          onClick={() => handleSaveNote(plant._id)}
                          style={{ width: "100%" }}
                        >
                          Save Note
                        </button>
                      </div>
                    ) : (
                      <button
                        className="button is-primary mt-2"
                        onClick={() => {
                          setEditingNote(plant._id);
                          setNote(plant.note || "");
                        }}
                        style={{ width: "100%" }}
                      >
                        Edit Note
                      </button>
                    )}
                    {plant.note && (
                      <button
                        className="button is-warning mt-2"
                        onClick={() => handleRemoveNote(plant._id)}
                        style={{ width: "100%" }}
                      >
                        Remove Note
                      </button>
                    )}
                    <button
                      className="button is-danger mt-2"
                      onClick={() => handleRemove(plant._id)}
                      style={{ width: "100%" }}
                    >
                      Remove Plant
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              No saved plants yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedGuides;

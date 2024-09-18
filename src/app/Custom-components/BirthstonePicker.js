import React from "react";

const BirthstonePicker = ({
  color,
  setColor,
  setCameraPosTarget,
  setLastCameraPosition,
  lastCameraPosition,
  cameraPosTarget,
}) => {
  // Define your array of birthstone colors
  const birthstoneColors = [
    { "#83201B": "January" },
    { "#8A556C": "February" },
    { "#C5D1EA": "March" },
    { "#EBDFEB": "April" },
    { "#4C787C": "May" },
    { "#DCC2D0": " June" },
    { "#A8565F": "July" },
    { "#D2D7C8": "August" },
    { "#A6B0EA": "September" },
    { "#DB8BAF": "October" },
    { "#E7AE79": "November" },
    { "#68A4BB": "December" },
    { "#1A1A1A": "BLACK ONYX" },
  ];

  // Function to handle color change
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
    setCameraPosTarget([
      0.11897903732754415, 2.645647462415288, -0.7147422547287468,
      0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
    ]);
    lastCameraPosition[0] === cameraPosTarget[0]
      ? ""
      : setLastCameraPosition([
          0.11897903732754415, 2.645647462415288, -0.7147422547287468,
          0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
        ]);
  };

  return (
    <div className="flex gap-[1rem] flex-wrap">
      {/* Radio buttons for each birthstone color */}
      {birthstoneColors.map((c, index) => {
        const objectIntoArray = Object.entries(c);
        console.log(objectIntoArray);
        return (
          <label
            key={index}
            style={{ cursor: "pointer" }}
            className="flex items-center flex-col"
          >
            <input
              type="radio"
              name="birthstoneColor"
              value={objectIntoArray[0][0]}
              checked={c === color}
              style={{ display: "none" }}
              onChange={() => handleColorChange(objectIntoArray[0][0])}
            />
            <div className="inline-block border p-1 rounded-full  hover:border-red-500 transition-all">
              <span
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  backgroundColor: objectIntoArray[0][0],

                  border:
                    objectIntoArray[0][0] !== color
                      ? "2px solid white"
                      : "1px solid #000", // Add white border if color is selected
                }}
                className="border rounded-full text-center"
                onClick={() => handleColorChange(c)}
              ></span>
            </div>
            <p className="text-[10px]">{objectIntoArray[0][1]}</p>
          </label>
        );
      })}
    </div>
  );
};

export default BirthstonePicker;

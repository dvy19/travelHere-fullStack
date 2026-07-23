import React from "react";

const colorClasses = {
  yellow: "bg-yellow-100 border-yellow-400 text-yellow-700",
  blue: "bg-blue-100 border-blue-400 text-blue-700",
  green: "bg-green-100 border-green-400 text-green-700",
  red: "bg-red-100 border-red-400 text-red-700",
  purple: "bg-purple-100 border-purple-400 text-purple-700",
  gray: "bg-gray-100 border-gray-400 text-gray-700",
};

const MoodPlaceCard = ({ mood }) => {
  const cardColor =
    colorClasses[mood.color] ||
    "bg-gray-100 border-gray-300 text-gray-700";

  return (
    <div
      className={`rounded-xl border-l-4 shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cardColor}`}
    >
      <div className="flex items-center gap-3">
       

        <div>
          <h2 className="text-xl font-bold">{mood.name}</h2>
          <p className="text-sm opacity-80 mt-1">
            {mood.reason}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoodPlaceCard;
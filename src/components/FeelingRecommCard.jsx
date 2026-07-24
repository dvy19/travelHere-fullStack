import React from 'react'
import {useNavigate} from 'react-router-dom'
const FeelingRecommCard = () => {
  const navigate = useNavigate();

  const onExplore = () => {
    navigate("/feelingsPlaces");
  };

  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm my-5">
      {/* Reference Text (Left) */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">
          Feelings & Places
        </h3>
        <p className="text-sm text-gray-500">
          Discover locations matched to your current mood.
        </p>
      </div>

      {/* Button (Right) */}
      <button
        onClick={onExplore}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800 whitespace-nowrap"
      >
        <span>Explore</span>
        {/* Simple inline arrow icon */}
        <svg 
          className="h-4 w-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default FeelingRecommCard

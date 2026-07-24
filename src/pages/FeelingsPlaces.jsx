import React, { useState } from 'react'
import PlaceService from '../services/PlaceService';
import MoodPlaceCard from '../components/MoodPlaceCard';
const MOODS = [
  { id: 'relax', title: 'Relax', emoji: '🧘‍♂️', description: 'Quiet spaces to unwind, breathe, and clear your mind.' },
  { id: 'chill', title: 'Chill', emoji: '☕', description: 'Laid-back spots for good coffee, soft music, and easy vibes.' },
  { id: 'happy', title: 'Happy', emoji: '☀️', description: 'Bright, vibrant places full of energy, light, and joy.' },
  { id: 'romance', title: 'Romance', emoji: '🌹', description: 'Intimate settings perfect for date nights and special moments.' },
  { id: 'friendship', title: 'Friendship', emoji: '🍻', description: 'Lively venues ideal for group hangouts and shared laughs.' },
];
const FeelingsPlaces = () => {

    const [recPlaces, setRecPlaces]=useState([]);
    const[loading,setLoading]=useState(false);
    const[err,setErr]=useState("");


    const get_feelings_places=async()=>{
      setLoading(true)

        try{
            const data=await PlaceService.getFeelingsPlaces({
                mood:mood
            });

            setRecPlaces(data.data)
            console.log(data.data)
        }
        catch(err){
            setErr(err)
        }
    }

    
 
    const [mood, setMood] = useState("");
return (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    {/* Mood Selector Card */}
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Select Your Mood</h2>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {/* Dropdown Input */}
        <div className="relative flex-1">
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            <option value="">-- Choose Mood --</option>
            <option value="😊 Happy">😊 Happy</option>
            <option value="😢 Sad">😢 Sad</option>
            <option value="😡 Angry">😡 Angry</option>
            <option value="😴 Sleepy">😴 Sleepy</option>
            <option value="🤩 Excited">🤩 Excited</option>
          </select>
          
          {/* Custom Dropdown Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-red-600 active:bg-red-700 disabled:opacity-50"
         disabled={loading}
         onClick={get_feelings_places}
>
  {loading ? (
    <>
      {/* SVG Loading Spinner */}
      <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Loading...</span>
    </>
  ) : (
    <span>Find</span>
  )}
        </button>
      </div>

      {/* Selected Mood Preview */}
      <p className="mt-4 text-sm font-medium text-gray-600">
        Your mood is:{" "}
        <span className="font-semibold text-gray-900">
          {mood || "Not Selected"}
        </span>
      </p>
    </div>

    {/* Recommendations Section */}
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Today's Moods</h1>

      {recPlaces && recPlaces.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recPlaces.map((item) => (
            <MoodPlaceCard key={item.id} mood={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm italic">
          No places found yet. Select a mood and click Find!
        </p>
      )}
    </div>
  </div>
);
}

export default FeelingsPlaces;

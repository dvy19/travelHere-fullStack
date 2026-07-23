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
    <div>
      <h2>Select Your Mood</h2>

      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        <option value="">-- Choose Mood --</option>
        <option value="😊 Happy">😊 Happy</option>
        <option value="😢 Sad">😢 Sad</option>
        <option value="😡 Angry">😡 Angry</option>
        <option value="😴 Sleepy">😴 Sleepy</option>
        <option value="🤩 Excited">🤩 Excited</option>
      </select>

      <p>Your mood is: {mood || "Not Selected"}</p>

      <button className='bg-red-300 text-white-900' onClick={get_feelings_places}>Find</button>

      <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Today's Moods</h1>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recPlaces.map((item) => (
          <MoodPlaceCard key={item.id} mood={item} />
        ))}
      </div>
    </div>
    </div>

    

  )

  


 
}

export default FeelingsPlaces;

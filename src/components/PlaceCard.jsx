import { useNavigate } from "react-router-dom";

function PlaceCard({ place }) {

    const navigate = useNavigate();

    return (
      <div className="group relative bg-white border border-slate-100 rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">

       <div className="w-full h-40 rounded-xl overflow-hidden bg-slate-50">
        
    </div>
    
    <div>
        
        <div className="flex justify-between items-start gap-3 mb-3">
            <h2 className="font-bold text-lg text-slate-900 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                {place.name}
            </h2>
            
            
           
        </div>

        
        <div className="space-y-1.5 text-sm">
          
            <p className="text-slate-500 flex items-center gap-1.5 truncate">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                {place.state}
            </p>
            
           
           
        </div>
    </div>

    
    <button
        className="w-full mt-4 py-2.5 bg-indigo-200 hover:bg-indigo-600 group-hover:bg-indigo-600 text-slate-700 group-hover:text-white font-medium text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-1"
        
    >
        <span>View </span>
        <svg className="w-4 h-4 opaplace-0 group-hover:opaplace-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
    </button>
    
</div>
    );
}

export default PlaceCard;
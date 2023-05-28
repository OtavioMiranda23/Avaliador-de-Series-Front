import { useState } from "react";
import { FaStar } from "react-icons/fa"
interface IRatingSystem {
    qtdStar: number,
    sizeStarFig: number,
    setAvaliacao: (number: number) => void
}


export function RatingSystem({qtdStar, sizeStarFig, setAvaliacao}:IRatingSystem){
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>();
    setAvaliacao(rating); 
    return (
        <div className="flex m-5">
            {[...Array(qtdStar)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input className="hidden" 
                        type="radio"
                         name="rating"
                         value={currentRating}
                         onClick={()=> setRating(currentRating)} />
                     <FaStar
                     className=" cursor-pointer"
                     size={sizeStarFig}
                     color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                     onMouseEnter={()=> setHover(currentRating)} 
                     onMouseLeave={()=> setHover(0)} />
                    </label>
                     )
            })}
        </div>
    )
}
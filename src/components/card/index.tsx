import { AiFillStar, AiOutlineDelete, AiOutlineEdit, AiOutlineStar } from "react-icons/ai";
import { ISerie } from "../../interfaces/ISerie";
import { useState } from "react";

export function Card(props:ISerie) {
    const colorValue = "border-l-red-400";


    function converteNotas(key: number) {
        switch (key) {
            case 0:
                return (

                    <>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                </>
     
                    )      
            case 1:
                return (

                    <>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                </>
                    )

            case 2:
                return (

                    <>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                </>
                    )
                
            case 3: 
                return (

                    <>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                </> 
                    )
                
            case 4:
                return (

                    <>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiOutlineStar/></div>
                </> 
                
                )
            case 5:
                return (
                    
                    <>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                    <div className=" text-red-500 m-auto"><AiFillStar/></div>
                </> 
            )
            
        }
    }
    return (
        <div className={`flex p-2 bg-slate-100 border-2 border-gray-300 border-l-8 ${colorValue} rounded`} >      
            <div className="flex-1 ">
                <strong className="text-lg text-gray-700 font-semibold font-sans">{props.nomeUsuario}</strong>
            </div>
            <div className="flex-1">
                <strong className="text-lg text-gray-700 font-semibold font-sans">{props.titulo}</strong>
            </div>            
            <div className="flex text-2xl">
                <>{converteNotas(props.avaliacao)}</>
            </div>
            <div className="px-2 flex cursor-pointer">
                < AiOutlineEdit 
                value={props.id} 
                onClick={()=> console.log(props.id)} 
                size={20} 
                className="mr-2"/>
                < AiOutlineDelete size={20}/>
            </div>
        </div>
        )
}
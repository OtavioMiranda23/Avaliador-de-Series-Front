import {  useState } from "react";
import { Card } from "./components/card";
import "./index.css";
import { ISerie } from "./interfaces/ISerie";

import Modal from "react-modal"
import {  useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { RatingSystem } from "./components/ratingSystem";


function App() {
  const queryClient = useQueryClient();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [titulo, setTitulo] = useState<string>("");
  const [avaliacao, setAvaliacao] = useState(0);

  function closeModal() {
    setModalIsOpen(false);
  }
  function openModal() {
    setModalIsOpen(true);
  }
  const { data } = useQuery<ISerie[]>('series', async ()=>{
    const response = await axios.get('http://localhost:5214/serie');
    console.log(response.data)
    return response.data;
  })

  const postData = async (newSerie:ISerie) => {
    const response = await fetch('http://localhost:5214/serie', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nomeUsuario: name,
        titulo: titulo,
        avaliacao:avaliacao
      })
    })
      
    return response.json();
  }
  

  const {mutate} = useMutation(postData, {
    onSuccess:(sucessData) => {
      console.log(sucessData);
      queryClient.invalidateQueries("series")

    }
  })

  

  

  const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: '20%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
 
    },
  };
  return (    
    <main className="container m-5 flex flex-col">
      <div className="flex justify-center m-2">
        <button className="py-1 px-4 bg-slate-100 border-2 border-gray-300 hover:bg-white rounded"
        onClick={()=> openModal()} >Add</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <form className="flex flex-col px-10 text-lg gap-2">
          <input value={name} onChange={(e)=> setName(e.target.value)}
          className=" focus:outline-none focus:border-yellow-300  p-2 rounded-md border-b border-gray-300 text-slate-600" type="text" placeholder="Seu nome" />
          <input value={titulo} onChange={(e)=> setTitulo(e.target.value)}
          className=" focus:outline-none focus:border-yellow-300  p-2 rounded-md border-b border-gray-300 text-slate-600" type="text" placeholder="Série" />
          <input 
          value={avaliacao} 
          //onChange={(e)=> setAvaliacao(parseInt(e.target.value))} 
          type="number" />
          <div className="m-auto">
            <RatingSystem qtdStar={5} sizeStarFig={30} setAvaliacao={setAvaliacao} />
          </div>
          <button
           onClick={(e) => {
            e.preventDefault();
            mutate({ nomeUsuario: name, titulo: titulo, avaliacao: avaliacao });
          }}
            className="text-yellow-600 hover:text-white border border-yellow-600
             hover:bg-yellow-400 hover:border-yellow-400 rounded p-1 transition delay-75">Enviar</button>
        </form>
      </Modal>

       {data && data.map( serie => (
         <Card key={serie.id} id={serie.id} nomeUsuario={serie.nomeUsuario} titulo={serie.titulo} avaliacao={serie.avaliacao}/>
         ))}
    </main>  

   )
}

export default App

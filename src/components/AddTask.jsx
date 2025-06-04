import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  // função que adiciona a tarefa
  const [title, setTitle] = useState(""); // estado do título da tarefa
  const [description, setDescription] = useState(""); // estado da descrição da tarefa

  return (
    <div className="bg-slate-200 shadow p-6 rounded-md flex flex-col spacebetween gap-4">
      <input
        type="text"
        placeholder="digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // atualiza o estado do título da tarefa
      />
      <input
        type="text"
        placeholder="digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // atualiza o estado da descrição da tarefa
      />
      <button
        onClick={() => {
            if (!title.trim() || !description.trim()) { // verifica se o título e a descrição não estão vazios
                return alert("Preencher todos os campos corretamente!!"); // se estiverem vazios, exibe um alerta
            } 
            onAddTaskSubmit(title, description)// chama a função onAddTaskSubmit com o título e descrição da tarefa
            setTitle("") // limpa o estado do título da tarefa
            setDescription("") // limpa o estado da descrição da tarefa
        } 
         } 
        className="bg bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

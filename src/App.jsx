//import { useState } from "react";
//import AddTask from "./components/AddTask";
//import Tasks from "./components/Task";
import ImageCarousel from "./components/ImageCarousel";
import reactLogo from "./assets/logoLostTails.png";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";
import info3 from "./assets/info3.png";
import info4 from "./assets/info4.png";

function App() {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "Estudar programação",
  //     description: "Estudar programação e ser um desenvolvedor full stack.",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Estudar inglês",
  //     description: "Estudar ingles para se tornar fluente.",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Estudar matematica",
  //     description: "Esttudar matematica e ser um desenvolvedor full stack.",
  //     isCompleted: false,
  //   },
  // ]);

  // function onTaskClick(taskId) {
  //   // função que altera o estado da tarefa
  //   const newTasks = tasks.map((task) => {
  //     if (task.id === taskId) {
  //       // verifica se o id da tarefa é igual ao id da tarefa clicada
  //       return {
  //         ...task, // os ... são para copiar as propriedades do objeto
  //         isCompleted: !task.isCompleted, // inverte o valor de isCompleted
  //       };
  //     }
  //     return task; // se não for a tarefa clicada, retorna a tarefa original
  //   });

  //   setTasks(newTasks); // atualiza o estado das tarefas
  // }

  // function deleteTask(taskId) {
  //   // função que deleta a tarefa
  //   const newTasks = tasks.filter((task) => task.id !== taskId); // filtra as tarefas e remove a tarefa com o id igual ao id da tarefa clicada
  //   setTasks(newTasks); // atualiza o estado das tarefas
  // }

  // function onAddTaskSubmit(title, description) {
  //   // função que adiciona a tarefa
  //   const newTask = {
  //     id: tasks.length + 1, // id da nova tarefa
  //     title: title, // título da nova tarefa
  //     description: description, // descrição da nova tarefa
  //     isCompleted: false, // estado da nova tarefa
  //   };

  //   setTasks([...tasks, newTask]); // atualiza o estado das tarefas com a nova tarefa
  // }

  return (
    <div className="w-screen h- bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white w-11/12 h-16 flex items-center justify-between space font-sans font-bold ml-8 mr-8 rounded-md shadow-gray-400 shadow-lg">
        <div className="ml-4 w-14">
          <img src={reactLogo} alt="Logo React" />
        </div>
        <div className="mr-4 flex gap-4 ">
          <button className="rounded-md p-1 hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <a href="/">Product</a>
          </button>
          <button className="rounded-md p-1 hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <a href="/">Solutions</a>
          </button>
          <button className="rounded-md p-1 hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <a href="/">About us</a>
          </button>
          <button className="rounded-md p-1 hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <a href="/">Ongs</a>
          </button>
          <button className="rounded-md p-1 hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <a href="/">Contact</a>
          </button>
          <button className="bg-gray-300 rounded-md p-1 hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out">
            <a href="/">Sign in</a>
          </button>
          <button className="bg-blue-500 rounded-md p-1 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out">
            <a href="/">Register</a>
          </button>
        </div>
      </div>
      <div className="w-screen flex items-center flex-wrap h-screen justify-center">
        <img
          className="w-1/5  -mr-10 hover:scale-95 transition"
          src={info1}
          alt=""
        />
        <img className="w-2/4 hover:scale-95 transition" src={info2} alt="" />
        <img
          className="w-1/3 -mt-52 mr-40 hover:scale-95 transition"
          src={info3}
          alt=""
        />
        <img
          className="w-1/5 -mt-28 hover:scale-95 transition"
          src={info4}
          alt=""
        />
      </div>
      <div className="w-2/3 flex items-center justify-center ">
        <ImageCarousel />
      </div>
      <div className="w-screen h-16 bg--200 flex items-center justify-center font-sans font-bold">
        <p className="text-gray-600">© 2023 Lost Tails. All rights reserved.</p>
      </div>
    </div>
  );
}

{
  /*<h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
        {/* Componente de navegação */
}
{
  /* Passando as tarefas e a função de clique como props para o componente Tasks */
}

export default App;

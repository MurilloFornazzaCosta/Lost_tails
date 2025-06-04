import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, deleteTask }) {
    const navigate = useNavigate(); // Hook do React Router para navegação

    function onSeeDatailsClick(task) {
        const queryParams = new URLSearchParams({// Cria um objeto URLSearchParams para manipular os parâmetros de consulta da URL
            title: task.title,
            description: task.description,
        }).toString(); // Cria os parâmetros de consulta para a URL
        return navigate(`/task?${queryParams}`); // Navega para a página de detalhes da tarefa
    }
  // Componente que renderiza a lista de tarefas
  return (
    <ul className="space-y-4 p-6 bg-slate-200 shadow rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {" "}
            {/* Adicionando a classe line-through se a tarefa estiver completa */}
            {task.title}
            {task.isCompleted ? (
              <span className="text-green-500">✔</span>
            ) : (
              <span className="text-red-500">✘</span>
            )}{" "}
            {/* Adicionando o ícone de verificação ou X dependendo do estado da tarefa */}
          </button>
          <button onClick={() => onSeeDatailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
            Ver detalhes
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [serachParams] = useSearchParams();
  const title = serachParams.get("title") || "Task Page";
  const description =
    serachParams.get("description") || "This is the task page.";
  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
            <button className="absolute left-0 bg-slate-600 p-1 rounded-md text-slate-100 hover:bg-slate-700 transition duration-300 ease-in-out">
                <a href="/">voltar</a>
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
                Detalhes da Tarefa
            </h1>
        </div>
        <div className="bg-slate-400 shadow p-6 rounded-md flex flex-col space-between gap-4">
            <h2 className="text-2xl text-slate-100 font-bold text-center">{title}</h2>
            <p className="text-slate-100 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

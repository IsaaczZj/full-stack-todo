import { Task } from "@/types/task";
import { Button } from "../ui/button";
import { TaskItem } from "./TaskItem";
import { useState } from "react";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";

export function TasksList() {
  const [isLoading, setIsLoading] = useState(false);

  const tasks: Task[] = [
    {
      id: "1",
      title: "Estudar React e TypeScript",
      concluded: false,
      status: "created",
    },
    {
      id: "2",
      title: "Fazer exercícios físicos",
      concluded: true,
      status: "created",
    },
    {
      id: "3",
      title: "Preparar apresentação do projeto",
      concluded: false,
      status: "creating",
    },
    {
      id: "4",
      title: "Comprar ingredientes para o jantar",
      concluded: true,
      status: "created",
    },
    {
      id: "5",
      title: "Revisar código da aplicação",
      concluded: false,
      status: "created",
    },
  ];

  return (
    <section
      className="flex justify-center flex-col w-full mt-4
    "
    >
      <Button>Adicionar tarefa</Button>
      <div className="flex gap-2 items-start mt-7">
        <div className="flex items-center gap-2">
        
          <Badge variant="primary" className="cursor-pointer">
            Todos
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="cursor-pointer">
            Não finalizados
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="cursor-pointer">
            Concluidos
          </Badge>
        </div>
      </div>
      {tasks.length === 0 && !isLoading ? (
        <Text
          as="p"
          variant="body-md-bold"
          className="text-gray-300 text-center mt-5"
        >
          Nenhuma tarefa foi criada...
        </Text>
      ) : (
        !isLoading && tasks.map((task, i) => <TaskItem key={i} task={task} />)
      )}
      {isLoading && <TaskItem task={{} as Task} isLoading />}
    </section>
  );
}

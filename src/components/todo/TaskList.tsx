"use client";
import { Task } from "@/types/task";
import { Button } from "../ui/button-styled";
import { TaskItem } from "./TaskItem";
import { useEffect, useState } from "react";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { ModalTaskProps } from "./ModalTaskProps";
import { getTasks } from "@/actions/get-tasks";

export function TasksList() {
  const [isLoading, setIsLoading] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await getTasks();
    if (response) setTasks(response);
    console.log(response);
  };

  function handleAddTask(taskData: { title: string }) {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskData.title,
      concluded: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function handleEditTask(taskData: { title: string; id?: string }) {
    if (taskData.id) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskData.id ? { ...task, title: taskData.title } : task
        )
      );
    }
  }

  function handleToggleTask(taskId: string, concluded: boolean) {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, concluded } : task))
    );
  }

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <section
      className="flex justify-center flex-col w-full mt-4
    "
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button>Adicionar tarefa</Button>
        </DialogTrigger>
        <ModalTaskProps onSave={handleAddTask} />
      </Dialog>
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
        !isLoading &&
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEditTask}
            onToggle={handleToggleTask}
          />
        ))
      )}
      {isLoading && <TaskItem task={{} as Task} isLoading />}
    </section>
  );
}

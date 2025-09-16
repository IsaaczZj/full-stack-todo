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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "@/api/fetchTasks";
import { createNewTask } from "@/api/createNewTask";
import { toast } from "sonner";
export function TasksList() {
  const queryClient = useQueryClient();
  const { data: tasks = [], isLoading } = useQuery<Task[]>({
    queryFn: fetchTasks,
    queryKey: ["tasks"],
  });

  const { mutateAsync: createTask } = useMutation({
    mutationFn: createNewTask,
    onSuccess: (newTask) => {
      queryClient.setQueryData(["tasks"], (cache = []) => [newTask, ...cache as Task[]]);
      toast.success("Tarefa criada com sucesso");
    },
  });

  function handleSaveTask(taskData: { title: string; id?: string }) {
    if (!taskData.id) {
      createTask(taskData.title);
    }
  }

  function handleEditTask(taskData: { title: string; id?: string }) {}

  function handleToggleTask(taskId: string, concluded: boolean) {}

  return (
    <section
      className="flex justify-center flex-col w-full mt-4
    "
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button>Adicionar tarefa</Button>
        </DialogTrigger>
        <ModalTaskProps onSave={handleSaveTask} />
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
            key={task.id!}
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

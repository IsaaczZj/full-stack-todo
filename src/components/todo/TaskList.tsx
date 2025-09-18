"use client";
import { Task } from "@/types/task";
import { Button } from "../ui/button-styled";
import { TaskItem } from "./TaskItem";
import { useEffect, useState } from "react";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { ModalTaskProps } from "./ModalTask";
import { getTasks } from "@/actions/get-tasks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "@/api/fetchTasks";
import { createNewTask } from "@/api/createNewTask";
import { toast } from "sonner";
import { deleteTask } from "@/api/deleteTask";
import { toggleTask } from "@/api/toggleTask";
import { updateTasks } from "@/api/updateTasks";
import { Filters, FilterType } from "./Filters";
export function TasksList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const queryClient = useQueryClient();

  const { data: tasks = [], isLoading } = useQuery<Task[]>({
    queryFn: fetchTasks,
    queryKey: ["tasks"],
  });

  const { mutate: createTask } = useMutation({
    mutationFn: createNewTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      toast.success("Tarefa criada com sucesso");
      setIsDialogOpen(false);
    },
  });
  const { mutate: deletingTask } = useMutation({
    mutationFn: deleteTask,
    onSuccess: (e) => {
      toast.success("Tarefa deletada com sucesso");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: toggleTasks } = useMutation({
    mutationFn: toggleTask,
    onMutate: ({ taskId, concluded }) => {
      const previusTask = queryClient.getQueryData(["tasks"]);

      queryClient.setQueryData<Task[]>(["tasks"], (previus = []) =>
        previus.map((task) =>
          task.id === taskId ? { ...task, concluded } : task
        )
      );
      return { previusTask };
    },
    onError: (_, __, context) => {
      if (context?.previusTask) {
        queryClient.setQueryData(["tasks"], context.previusTask);
      }
      toast.error("Erro ao atualizar a tarefa");
    },
  });

  const { mutate: updateTaskTitle } = useMutation({
    mutationFn: updateTasks,
    onMutate({ id, title }) {
      const previusTask = queryClient.getQueryData<Task[]>(["tasks"]);
      queryClient.setQueryData<Task[]>(["tasks"], (previus = []) =>
        previus.map((task) => (task.id === id ? { ...task, title } : task))
      );
      return { previusTask };
    },
    onError: (_, __, context) => {
      if (context?.previusTask) {
        queryClient.setQueryData(["tasks"], context.previusTask);
        toast.warning("Erro ao atualizar a tarefa");
      }
    },
    onSuccess: () => {
      toast.success("Tarefa atuzalizada com sucesso");
    },
  });

  function handleSaveTask(taskData: { title: string; id?: string }) {
    if (!taskData.id) {
      if (taskData.title.trim() === "") {
        toast.warning("Insira uma tarefa");
        return;
      }
      createTask(taskData.title);
      return;
    }
  }

  function handleToggleTask(taskId: string, concluded: boolean) {
    toggleTasks({ taskId, concluded });
  }

  function handleEditTask(taskData: { title: string; id?: string }) {
    if (taskData.id)
      updateTaskTitle({ id: taskData.id, title: taskData.title });
  }

  useEffect(() => {
    switch (currentFilter) {
      case "all":
        setFilteredTasks(tasks);
        break;
      case "pending":
        const pendingTasks = tasks.filter((task) => !task.concluded);
        setFilteredTasks(pendingTasks);
        break;
      case "completed":
        const completedTasks = tasks.filter((task) => task.concluded);
        setFilteredTasks(completedTasks);
        break;
    }
  }, [currentFilter, tasks]);

  return (
    <section
      className="flex justify-center flex-col w-full mt-4
    "
    >
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Adicionar tarefa</Button>
        </DialogTrigger>
        <ModalTaskProps onSave={handleSaveTask} />
      </Dialog>
      <Filters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
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
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id!}
            task={task}
            onEdit={handleEditTask}
            onDeleteTask={deletingTask}
            onToggle={handleToggleTask}
          />
        ))
      )}
      {isLoading && <TaskItem task={{} as Task} isLoading />}
    </section>
  );
}

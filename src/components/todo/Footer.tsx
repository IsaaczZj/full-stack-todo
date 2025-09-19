"use client";
import { Container } from "../ui/container";
import { Text } from "../ui/text";
import { ListCheck, Trash } from "lucide-react";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ConfirmClearTasksModal } from "./ConfirmClearTasksModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "@/api/fetchTasks";
import { deleteCompletedTasks } from "@/api/deleteCompletedTasks";
import { toast } from "sonner";
import { Task } from "@/generated/prisma";

export function Footer() {
  const { data: tasks = [] } = useQuery({
    queryFn: fetchTasks,
    queryKey: ["tasks"],
  });
  const concludedTasks = tasks?.filter((tasks:Task) => tasks.concluded) || [];
  const queryClient = useQueryClient();

  function handleDelete() {
    if (concludedTasks.length === 0) {
      toast.warning("Não há tarefas concluidas para excluir");
      return;
    }
    deleteCompleteTasksMutation();
  }
  const { mutate: deleteCompleteTasksMutation } = useMutation({
    mutationFn: deleteCompletedTasks,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Tarefas deletadas com sucesso");
    },
  });

  return (
    <Container className="flex items-center  mt-3 md:mt-10 flex-col">
      <div className=" flex justify-center md:justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          <ListCheck size={18} className="hidden md:block" />
          <Text variant="body-md-bold" className="hidden md:block">
            Tarefas concluidas {concludedTasks?.length} / {tasks?.length}
          </Text>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="flex items-center justify-center cursor-pointer transition rounded-lg gap-2 bg-gray-200 hover:bg-pink-light h-15 px-4  border-pink-200 border-2">
              <Trash size={18} className="text-gray-400" />
              <Text variant="body-md-bold" className="text-gray-400">
                Limpar tarefas concluidas
              </Text>
            </button>
          </AlertDialogTrigger>
          <ConfirmClearTasksModal
            deleteCompleteTasks={handleDelete}
            concludedTasks={concludedTasks}
          />
        </AlertDialog>
      </div>

      <div className="h-2 w-full bg-gray-200 rounded-md ">
        <div
          style={{
            width:
              tasks.length > 0
                ? `${(concludedTasks.length / tasks.length) * 100}%`
                : "0%",
          }}
          className={`h-full bg-green-dark rounded-md transition-all`}
        ></div>
      </div>
    </Container>
  );
}

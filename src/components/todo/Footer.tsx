"use client";
import { Container } from "../ui/container";
import { Text } from "../ui/text";
import { ListCheck, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ConfirmClearTasksModal } from "./ConfirmClearTasksModal";
export function Footer() {
  return (
    <Container className="flex items-center  mt-3 md:mt-10 flex-col">
      <div className=" flex justify-center md:justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          <ListCheck size={18} className="hidden md:block" />
          <Text variant="body-md-bold" className="hidden md:block">
            Tarefas concluidas (2 / 5)
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
          <ConfirmClearTasksModal />
        </AlertDialog>
      </div>

      <div className="h-2 w-full bg-gray-200 rounded-md ">
        <div className="h-full w-[50%] bg-green-dark rounded-md "></div>
      </div>
    </Container>
  );
}

import { useState } from "react";
import { Input } from "../ui/input";
import { ButtonIcon } from "../ui/button-icon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Text } from "../ui/text";
import { Task } from "@/types/task";

interface ModalTaskProps {
  task?: Task;
  onSave?: (taskData: { title: string; id?: string }) => void;
}

export function ModalTaskProps({ task, onSave }: ModalTaskProps) {
  const [taskTitle, setTaskTitle] = useState(task?.title ?? "");
  const isEditing = !!task;

  const handleSave = () => {
    if (taskTitle.trim()) {
      onSave?.({
        title: taskTitle.trim(),
        id: task?.id,
      });
      
      if (!isEditing) {
        setTaskTitle("");
      }
    }
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <Text variant="body-md-bold" className="text-gray-300 text-2xl">
            {isEditing ? "Editar tarefa" : "Escreva sua tarefa"}
          </Text>
        </DialogTitle>
      </DialogHeader>
      <form
        className="flex items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <Input
          className="flex-1 w-full"
          onChange={({ target }) => setTaskTitle(target.value)}
          value={taskTitle}
          required
          autoFocus
        />
        <div className="flex items-center gap-1">
          <DialogClose asChild>
            <div
              className="h-6 w-6 p-1 inline-flex items-center justify-center rounded cursor-pointer transition bg-gray-200 hover:bg-pink-base"
              onClick={() => {}}
            >
             <ButtonIcon icon="x" variant="secondary"/>
            </div>
          </DialogClose>
          <DialogClose asChild>
            <div
              className="h-6 w-6 p-1 inline-flex items-center justify-center rounded cursor-pointer transition bg-green-base hover:bg-green-dark"
              onClick={handleSave}
            >
             <ButtonIcon icon="check"/>
             
            </div>
          </DialogClose>
        </div>
      </form>
    </DialogContent>
  );
}

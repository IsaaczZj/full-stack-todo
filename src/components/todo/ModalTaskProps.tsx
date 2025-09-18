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
import { toast } from "sonner";
interface ModalTaskProps {
  task?: Task;
  onSave?: (taskData: { title: string; id?: string }) => void;
  isLoading?: boolean;
}

export function ModalTaskProps({ task, onSave, isLoading }: ModalTaskProps) {
  const [taskTitle, setTaskTitle] = useState(task?.title ?? "");
  const isEditing = !!task;

  const handleSave = () => {
    onSave?.({
      title: taskTitle.trim(),
      id: task?.id,
    });

    if (!isEditing) {
      setTaskTitle("");
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
        }}
      >
        <Input
          className="flex-1 w-full"
          onChange={({ target }) => setTaskTitle(target.value)}
          value={taskTitle}
          autoFocus
        />
        <div className="flex items-center gap-1">
          <div
            className="h-6 w-6 p-1 inline-flex items-center justify-center rounded cursor-pointer transition bg-gray-200 hover:bg-pink-base"
            onClick={() => {}}
          >
            <ButtonIcon
              icon="x"
              variant="secondary"
              onClick={() => setTaskTitle("")}
            />
          </div>

          <div className="h-6 w-6 p-1 inline-flex items-center justify-center rounded cursor-pointer transition bg-green-base hover:bg-green-dark">
            <ButtonIcon
              icon="check"
              loading={isLoading}
              onClick={handleSave}
            />
          </div>
        </div>
      </form>
    </DialogContent>
  );
}

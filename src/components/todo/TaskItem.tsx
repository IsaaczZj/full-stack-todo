import { Task } from "@/types/task";
import { useState } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { CheckBox } from "../ui/checkbox";
import { Text } from "../ui/text";
import { ButtonIcon } from "../ui/button-icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModalTaskProps } from "./ModalTask";

interface TaskItemProps {
  task: Task;
  isLoading?: boolean;
  onEdit?: (taskData: { title: string; id?: string }) => void;
  onToggle?: (taskId: string, concluded: boolean) => void;
  onDeleteTask?: (taskId: string) => void;
}

export function TaskItem({
  task,
  isLoading,
  onEdit,
  onToggle,
  onDeleteTask,
}: TaskItemProps) {
  if (isLoading || !task) {
    return (
      <Card className="w-full mt-4">
        <div className="flex items-center gap-4">
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="flex-1 h-6" />
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-6 h-6" />
        </div>
      </Card>
    );
  }
  return (
    <Card className="mt-4 w-full">
      <div className="flex items-center gap-4">
        <CheckBox
          checked={task.concluded}
          onChange={(checked) => {
            onToggle?.(task.id, checked);
          }}
          loading={isLoading}
        />
        <Text
          className={`flex-1 ${task.concluded && "line-through text-gray-300"}`}
        >
          {task.title}
        </Text>

        <div className="flex items-center gap-1">
          <ButtonIcon
            variant="tertiary"
            icon="trash"
            loading={isLoading}
            onClick={() => onDeleteTask?.(task.id)}
          />
          <Dialog>
            <DialogTrigger asChild>
              <ButtonIcon
                variant="tertiary"
                icon="pencil"
                loading={isLoading}
              />
            </DialogTrigger>
            <ModalTaskProps task={task} onSave={onEdit} />
          </Dialog>
        </div>
      </div>
    </Card>
  );
}

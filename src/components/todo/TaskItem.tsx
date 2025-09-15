import { Task } from "@/types/task";
import { useState } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { CheckBox } from "../ui/checkbox";
import { Text } from "../ui/text";
import { ButtonIcon } from "../ui/button-icon";
import { Input } from "../ui/input";

interface TaskItemProps {
  task: Task;
  isLoading?: boolean;
}
export function TaskItem({ task, isLoading }: TaskItemProps) {
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const [isEditing, setIsEditing] = useState(
    task.status === "creating" || false
  );
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
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <CheckBox
            checked={task.concluded}
            onClick={() => alert("Concluido")}
            loading={isLoading}
          />
          <Text
            className={`flex-1 ${
              task.concluded && "line-through text-gray-300"
            }`}
          >
            {task.title}
          </Text>

          <div className="flex items-center gap-1">
            <ButtonIcon variant="tertiary" icon="trash" loading={isLoading} />
            <ButtonIcon
              variant="tertiary"
              icon="pencil"
              loading={isLoading}
              onClick={() => setIsEditing(true)}
            />
          </div>
        </div>
      ) : (
        <>
          <form className="flex items-center gap-4">
            <Input
              className="flex-1 w-full"
              onChange={({ target }) => setTaskTitle(target.value)}
              value={taskTitle}
              required
              autoFocus
            />
            <div className="flex items-center gap-1">
              <ButtonIcon
                icon="x"
                variant="secondary"
                onClick={() => setIsEditing(false)}
              />
              <ButtonIcon icon="check" variant="primary" />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}

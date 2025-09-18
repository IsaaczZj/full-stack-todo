import { Task } from "@/types/task";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Text } from "../ui/text";

interface ConfirmTasksModalProps {
  deleteCompleteTasks: () => void;
  concludedTasks: Task[];
}
export function ConfirmClearTasksModal({
  deleteCompleteTasks,
  concludedTasks,
}: ConfirmTasksModalProps) {
  return (
    <AlertDialogContent className="bg-gray-100">
      <AlertDialogHeader>
        <AlertDialogTitle>
          <Text variant="body-md-bold" className="text-gray-400">
            Tem certeza que deseja excluir as {concludedTasks.length} atividades
            concluidas?
          </Text>
        </AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="bg-gray-200 hover:bg-pink-light cursor-pointer">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction
          className="cursor-pointer bg-green-base hover:bg-green-dark"
          onClick={deleteCompleteTasks}
        >
          Confirmar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

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

export function ConfirmClearTasksModal() {
  return (
    <AlertDialogContent className="bg-gray-100">
      <AlertDialogHeader>
        <AlertDialogTitle>
          <Text variant="body-md-bold" className="text-gray-400">
            Tem certeza que deseja excluir as 2 atividades concluidas?
          </Text>
        </AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="bg-gray-200 hover:bg-pink-light cursor-pointer">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction className="cursor-pointer bg-green-base hover:bg-green-dark">
          Confirmar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

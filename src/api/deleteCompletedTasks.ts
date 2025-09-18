import { deleteCompletedTask } from "@/actions/delete-completed-task";
export async function deleteCompletedTasks() {
  await deleteCompletedTask();
}

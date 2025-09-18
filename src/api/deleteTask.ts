import { deleteTaskAction } from "@/actions/delete-task";

export async function deleteTask(id: string) {
  return await deleteTaskAction(id);
}

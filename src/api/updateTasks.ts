import { updateTask } from "@/actions/update-task";

export async function updateTasks(taskData: { id: string; title: string }) {
  const response = await updateTask(taskData);
  return response;
}

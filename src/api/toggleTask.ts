import { toggleTasks } from "@/actions/toggle-task";

export async function toggleTask({
  taskId,
  concluded,
}: {
  taskId: string;
  concluded: boolean;
}) {
  const response = await toggleTasks(taskId, concluded);
  return response;
}

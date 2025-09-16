import { getTasks } from "@/actions/get-tasks";

export const fetchTasks = async () => {
  const response = await getTasks();
  return response || []
};

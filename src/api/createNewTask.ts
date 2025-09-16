import { createTask } from "@/actions/create-task";

export const createNewTask = async (title: string) => {
  const response = await createTask(title);
  return response;
};

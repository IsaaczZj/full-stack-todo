"use server";

import { prisma } from "@/lib/prisma";

export const toggleTasks = async (taskId: string, concluded: boolean) => {
  try {
    const task = await prisma.task.findFirst({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      return;
    }

    const taskToggle = await prisma.task.update({
      where: { id: taskId },
      data: { concluded },
    });
    return taskToggle
  } catch (error) {
    throw error
  }
};

"use server";

import { prisma } from "@/lib/prisma";

export const updateTask = async (taskData: { id: string; title: string }) => {
  try {
    const task = await prisma.task.findFirst({
      where: { id: taskData.id },
    });
    if (!task) return;
    const updatedTaskTitle = await prisma.task.update({
      where: { id: taskData.id },
      data: {
        title: taskData.title,
      },
    });
    return updatedTaskTitle;
  } catch (error) {
    throw error;
  }
};

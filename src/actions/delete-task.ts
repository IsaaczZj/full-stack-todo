"use server";

import { prisma } from "@/lib/prisma";

export async function deleteTaskAction(id: string) {
  try {
    const isTaskExist = await prisma.task.findFirst({
      where: {
        id,
      },
    });
    if (!isTaskExist) {
      return;
    }
    await prisma.task.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
}

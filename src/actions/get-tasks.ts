"use server";
import { prisma } from "@/lib/prisma";

export const getTasks = async () => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (!tasks) {
      return;
    }
    return tasks;
  } catch (error) {
    throw error;
  }
};

"use server";

import { prisma } from "@/lib/prisma";

export const createTask = async (title: string) => {
  try {
    if (!title) return;
    const newTask = await prisma.task.create({
      data: {
        title,
      },
    });
    return newTask
  } catch (error) {
    throw error;
  }
};

"use server";

import { prisma } from "@/lib/prisma";

export const deleteCompletedTask = async () => {
  const tasksConcluded = await prisma.task.findMany({
    where: {
      concluded: true,
    },
  });
  if (!tasksConcluded) {
    throw new Error("Não há tarefas concluidas");
  }
  await prisma.task.deleteMany({
    where: {
      concluded: true,
    },
  });
};

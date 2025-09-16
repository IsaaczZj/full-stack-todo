"use client";
import { Task } from "@/types/task";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button-styled";
import { Container } from "../ui/container";
import { Text } from "../ui/text";
import { useQuery } from "@tanstack/react-query";

import { fetchTasks } from "@/api/fetchTasks";
export function TasksSummary() {
  const allTasks = 5;
  const concluded = 2;
  const { data: tasks = [] } = useQuery<Task[]>({
    queryFn: fetchTasks,
    queryKey: ["tasks"],
  });
  const concludedTasks = tasks.filter((task) => task.concluded);
  return (
    <Container className="flex justify-between items-baseline mt-4 md:mt-8">
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{tasks.length}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">
          Concluidas
        </Text>
        <Badge>
          {concludedTasks.length} de {tasks.length}
        </Badge>
      </div>
    </Container>
  );
}

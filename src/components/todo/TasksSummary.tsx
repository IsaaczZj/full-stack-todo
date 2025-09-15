import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Text } from "../ui/text";

export function TasksSummary() {
  const allTasks = 5;
  const concluded = 2;
  return (
    <Container className="flex justify-between items-baseline mt-4 md:mt-8">
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{5}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">
          Concluidas
        </Text>
        <Badge>
          {concluded} de {allTasks}
        </Badge>
      </div>
    </Container>
  );
}

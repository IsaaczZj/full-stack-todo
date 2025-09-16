
import { Container } from "@/components/ui/container";
import { Header } from "@/components/todo/Header";
import { TasksSummary } from "@/components/todo/TasksSummary";
import { Footer } from "@/components/todo/Footer";
import { TasksList } from "@/components/todo/TaskList";

export default function Home() {
  return (
    <Container>
      <Header />
      <TasksSummary />
      <TasksList />
      <Footer />
    </Container>
  );
}

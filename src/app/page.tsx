"use client";

import { Button } from "@/components/ui/button-styled";
import { Card } from "@/components/ui/card";
import { CheckBox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Text } from "@/components/ui/text";
import Trash from "@/assets/icons/plus.svg";
import { ButtonIcon } from "@/components/ui/button-icon";
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

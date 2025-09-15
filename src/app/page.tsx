"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckBox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Text } from "@/components/ui/text";
import Trash from '@/assets/icons/plus.svg'
import { ButtonIcon } from "@/components/ui/button-icon";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <Card>
          <Text variant="body-md-bold">Testando</Text>
          <Text variant="body-md">Testando</Text>
          <Text variant="body-sm-bold">Testando</Text>
          <ButtonIcon icon="trash" variant="tertiary"/>
        </Card>
         
        <Input />
        <Skeleton className="h-10 w-20" />
        <CheckBox />
      </div>
       <Button className="w-full">Adicionar</Button>
    </div>
  );
}
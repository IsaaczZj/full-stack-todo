import { Badge } from "@/components/ui/badge";

export type FilterType = "all" | "pending" | "completed";

interface FiltersProps {
  currentFilter: FilterType;
  setCurrentFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}
export function Filters({ currentFilter, setCurrentFilter }: FiltersProps) {
  return (
    <div className="flex gap-2 items-start mt-7">
      <div className="flex items-center gap-2">
        <Badge
          variant={`${currentFilter === "all" ? "primary" : "outline"}`}
          className="cursor-pointer"
          onClick={() => setCurrentFilter("all")}
        >
          Todos
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge
          variant={`${currentFilter === "pending" ? "primary" : "outline"}`}
          className="cursor-pointer"
          onClick={() => setCurrentFilter("pending")}
        >
          Não finalizados
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge
          variant={`${currentFilter === "completed" ? "primary" : "outline"}`}
          className="cursor-pointer"
          onClick={() => setCurrentFilter("completed")}
        >
          Concluidos
        </Badge>
      </div>
    </div>
  );
}

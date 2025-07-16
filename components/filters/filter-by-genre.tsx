import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RotateCcwIcon } from "lucide-react";
import { Badge } from "../ui/badge";

const FilterByGenre = () => {
  const [genres, setGenres] = React.useState<string[]>([]);
  return (
    <div className="flex w-full flex-col gap-2 border-b py-4">
      <h2 className="font-semibold">Filter by Genre/Tags</h2>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const input = form.elements.namedItem("genre") as HTMLInputElement;
          const value = input.value.trim();
          if (value && !genres.includes(value)) {
            setGenres([...genres, value]);
          }
          input.value = "";
        }}
      >
        <Input
          name="genre"
          placeholder="Add a genre or tag"
          autoComplete="off"
          className="flex-1"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setGenres([])}
          title="Clear all"
        >
          <RotateCcwIcon className="h-4 w-4" />
        </Button>
      </form>

      <div className="mt-2 flex max-w-[200px] flex-wrap gap-2">
        {genres.map((genre, idx) => (
          <Badge
            key={genre}
            className="flex max-w-[200px] items-center overflow-hidden rounded-full px-2 py-1 text-sm"
          >
            <span className="max-w-[200px] truncate">{genre}</span>
            <button
              type="button"
              className="text-muted-foreground hover:text-destructive ml-1 flex-shrink-0"
              onClick={() => setGenres(genres.filter((_, i) => i !== idx))}
              aria-label={`Remove ${genre}`}
            >
              ×
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default FilterByGenre;

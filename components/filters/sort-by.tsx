import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  EyeIcon,
  HeartIcon,
  HourglassIcon,
  SortAscIcon,
  TrendingUpIcon,
} from "lucide-react";

const SortBy = () => {
  const [filterValue, setFilterValue] = React.useState("most-loved");

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <SortAscIcon /> Sort By:{" "}
            {filterValue
              .replace("-", " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Sorting Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={filterValue}
            onValueChange={setFilterValue}
          >
            <DropdownMenuRadioItem value="most-loved">
              <HeartIcon className="mr-1" /> Most Loved
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="most-viewed">
              <EyeIcon className="mr-1" />
              Most Viewed
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="recent">
              <HourglassIcon className="mr-1" />
              Recent
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="trending">
              <TrendingUpIcon className="mr-1" />
              Trending
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortBy;

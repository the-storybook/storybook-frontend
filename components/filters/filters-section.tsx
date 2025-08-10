"use client";

import { Button } from "@/components/ui/button";
import { CircleXIcon } from "lucide-react";
import React from "react";
import FilterByGenre from "./filter-by-genre";
import FilterByStatus from "./filter-by-status";
import SelectDateRange from "./select-date-range";

const FiltersSection = () => {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <h1 className="border-b py-2 text-center text-xl font-bold">Filters</h1>
      <FilterByGenre />
      <FilterByStatus />
      <SelectDateRange />
      <Button>
        <CircleXIcon className="mr-1" />
        Clear Filters
      </Button>
    </div>
  );
};

export default FiltersSection;

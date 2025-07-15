import React from "react";
import { Checkbox } from "../ui/checkbox";

const FilterByStatus = () => {
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isInProgress, setIsInProgress] = React.useState(false);
  const [isInteractive, setIsInteractive] = React.useState(false);

  return (
    <div className="flex w-full flex-col gap-2 border-b pb-4">
      <h2 className="font-semibold">Filter by Status</h2>
      <div className="flex items-center justify-between gap-2">
        <p>Completed</p>
        <Checkbox
          checked={isCompleted}
          onCheckedChange={() => setIsCompleted(!isCompleted)}
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p>In Progress</p>
        <Checkbox
          checked={isInProgress}
          onCheckedChange={() => setIsInProgress(!isInProgress)}
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p>Interactive</p>
        <Checkbox
          checked={isInteractive}
          onCheckedChange={() => setIsInteractive(!isInteractive)}
        />
      </div>
    </div>
  );
};

export default FilterByStatus;

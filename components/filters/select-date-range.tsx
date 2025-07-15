import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const SelectDateRange = () => {
  return (
    <div className="flex w-full flex-col gap-2 border-b pb-4">
      <h2 className="font-semibold">Select Date Range</h2>
      <RadioGroup defaultValue="all-time">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="24h" id="24h" />
          <Label htmlFor="24h">Last 24 Hours</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="1w" id="1w" />
          <Label htmlFor="1w">Last Week</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="1m" id="1m" />
          <Label htmlFor="1m">Last Month</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all-time" id="all-time" />
          <Label htmlFor="all-time">All Time</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SelectDateRange;

"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}
const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}>
          <div className="line-clamp-1 flex-1 text-left">
          <SelectValue placeholder="Select a filter" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-light-800 dark:bg-dark-300 text-dark100_light900 border-none">
          <SelectGroup>
            {filters.map(item=>{
                return(
                    <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
                )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;

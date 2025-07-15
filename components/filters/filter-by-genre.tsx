import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { RotateCcwIcon } from 'lucide-react'

const FilterByGenre = () => {
  return (
    <div className="flex w-full flex-col gap-2 border-b py-4">
        <h2 className="font-semibold">Filter by Genre/Tags</h2>
        <div className="flex gap-2">
          <Input type="search" placeholder="Search..." />
          <Button variant="outline">
            <RotateCcwIcon />
          </Button>
        </div>
      </div>
  )
}

export default FilterByGenre
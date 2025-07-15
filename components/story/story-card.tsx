import { EyeIcon, HeartIcon, ListIcon } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";

interface StoryCardProps {
  imageUrl?: string;
  title: String;
  author: String;
  tags?: string[];
  description?: string;
  views?: string;
  loves?: string;
  parts?: number;
}

const StoryCard = (props: StoryCardProps) => {
  return (
    <div className="flex max-w-[80%] flex-col items-center justify-center gap-2 border-b pb-4">
      <div className="flex items-center">
        <img
          src={props.imageUrl || "/default-image.jpg"}
          alt="Story Thumbnail"
          className="aspect-16/25 h-[250px] w-[160px] object-cover"
        />
        <div className="ml-4 flex h-full flex-col justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold">
              {props.title || "Story Title"}
            </h3>
            <p className="text-lg opacity-75">{props.author || "Uknown"}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* if tags are more than 3 then show 3 tags and put +{remaining tags} */}
            {props.tags && props.tags.length > 0 ? (
              props.tags
                .slice(0, 3)
                .map((tag, index) => <Badge key={index}>{tag}</Badge>)
                .concat(
                  props.tags.length > 3 ? (
                    <span key="more">+{props.tags.length - 3} more</span>
                  ) : (
                    []
                  ),
                )
            ) : (
              <Badge>No Tags</Badge>
            )}
          </div>
          {/* if description is longer than 3 lines, cut it with ... */}
          <p className="line-clamp-3 opacity-80">
            {props.description || "No description available for this story."}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex gap-2">
          <EyeIcon /> {props.views || "0"}
        </div>
        <div className="flex gap-2">
          <HeartIcon /> {props.loves || "0"}
        </div>
        <div className="flex gap-2">
          <ListIcon /> {props.parts || "0"}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

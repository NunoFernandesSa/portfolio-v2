// -----  Shadcn components -----
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/shadcn/tooltip";

// ----- Custom Types -----
import { TechIconType } from "@/types/techIconsTypes";

export default function TechIcon({ name, icon }: TechIconType) {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent>
          <span>{name}</span>
        </TooltipContent>
      </Tooltip>
    </>
  );
}

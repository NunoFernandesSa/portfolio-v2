// ----- Custom Types -----
import { TechIconType } from "@/types/techIconsTypes";

export default function TechIconAndTitle({ name, icon }: TechIconType) {
  return (
    <div className="flex flex-col items-center justify-center">
      {icon}
      <i>{name}</i>
    </div>
  );
}

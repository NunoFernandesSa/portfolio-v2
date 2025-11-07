// ----- Custom Types -----
import { TechIconType } from "@/types/techIconsTypes";

export default function TechIconAndTitle({ name, icon, style }: TechIconType) {
  return (
    <div
      className={`flex flex-col items-center justify-center min-w-[130px] ${style}`}
    >
      {icon}
      {name && <i>{name}</i>}
    </div>
  );
}

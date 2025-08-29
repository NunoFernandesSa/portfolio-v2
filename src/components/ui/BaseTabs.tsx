/**
 * Shadcn Components
 */
import { Tabs, TabsList } from "@/components/ui/shadcn/tabs";

/**
 * Interface for the base tabs component
 */
interface AboutTabsProps {
  tabsTrigger: React.ReactNode[];
  tabsContent: React.ReactNode[];
  value: string;
  fontStyle?: string;
  className?: string;
}

export default function AboutTabs({
  tabsTrigger,
  tabsContent,
  value,
}: AboutTabsProps) {
  return (
    <div className={`flex w-full max-w-sm flex-col gap-6`}>
      <Tabs defaultValue={value}>
        <TabsList>{tabsTrigger}</TabsList>
        {tabsContent}
      </Tabs>
    </div>
  );
}

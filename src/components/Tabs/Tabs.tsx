import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const renderTabContent = () => {
    return tabs[activeTab].content;
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-sm font-semibold text-center text-slate-600 border-b border-slate-400 dark:text-slate-600 dark:border-slate-400">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, index) => (
            <li key={tab.label} className="me-2">
              <button
                type="button"
                onClick={() => setActiveTab(index)}
                className={cn(
                  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 dark:hover:text-slate-300",
                  activeTab === index &&
                    "text-[#008550] border-b-2 border-[#008550] rounded-t-lg active dark:text-[#00E58A] hover:border-[#008550] dark:hover:border-[#00E58A] dark:border-[#00E58A] hover:text-[#008550] dark:hover:text-[#00E58A]"
                )}
              >
                <span className="mr-1">{index + 1}</span>
                <span className="ml-1">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

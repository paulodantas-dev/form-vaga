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
    <div>
      <div className="text-sm font-medium text-center text-slate-500 border-b border-slate-200 dark:text-slate-400 dark:border-slate-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, index) => (
            <li key={tab.label} className="me-2">
              <a
                href="#"
                onClick={() => setActiveTab(index)}
                className={cn(
                  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 dark:hover:text-slate-300",
                  activeTab === index
                    ? "text-emerald-600 border-b-2 border-emerald-600 rounded-t-lg active dark:text-emerald-500 dark:border-emerald-500"
                    : ""
                )}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

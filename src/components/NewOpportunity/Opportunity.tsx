import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
import { Tab3 } from "./Tab3";
import { Tab4 } from "./Tab4";
import { Tab5 } from "./Tab5";
import { Tabs } from "../Tabs/Tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { opportunityFormSchema } from "./validation";
import { z } from "zod";

export const Opportunity: React.FC = () => {
  const methods = useForm<z.infer<typeof opportunityFormSchema>>({
    resolver: zodResolver(opportunityFormSchema),
  });
  const [currentTab, setCurrentTab] = useState(0);

  const nextTab = () => setCurrentTab(currentTab + 1);

  const prevTab = () => setCurrentTab(currentTab - 1);

  const onSubmit: SubmitHandler<z.infer<typeof opportunityFormSchema>> = (
    data
  ) => {
    console.log(data);
  };

  const tabs = [
    { label: "Tab 1", content: <Tab1 nextTab={nextTab} /> },
    { label: "Tab 2", content: <Tab2 nextTab={nextTab} prevTab={prevTab} /> },
    { label: "Tab 3", content: <Tab3 nextTab={nextTab} prevTab={prevTab} /> },
    { label: "Tab 4", content: <Tab4 nextTab={nextTab} prevTab={prevTab} /> },
    {
      label: "Tab 5",
      content: (
        <Tab5 prevTab={prevTab} onSubmit={methods.handleSubmit(onSubmit)} />
      ),
    },
  ];

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        <Tabs tabs={tabs} activeTab={currentTab} setActiveTab={setCurrentTab} />
      </form>
    </FormProvider>
  );
};

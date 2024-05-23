import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Tab1 } from "@/components/NewOpportunity/Tab1";
import { Tab2 } from "@/components/NewOpportunity/Tab2";
import { Tab3 } from "@/components/NewOpportunity/Tab3";
import { Tab4 } from "@/components/NewOpportunity/Tab4";
import { Tab5 } from "@/components/NewOpportunity/Tab5";
import { Tabs } from "@/components/Tabs/Tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { opportunityFormSchema } from "@/components/NewOpportunity/validation";
import { z } from "zod";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Opportunity = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const navigate = useNavigate();

  const methods = useForm<z.infer<typeof opportunityFormSchema>>({
    resolver: zodResolver(opportunityFormSchema),
  });

  const nextTab = () => setCurrentTab(currentTab + 1);

  const prevTab = () => setCurrentTab(currentTab - 1);

  const onSubmit: SubmitHandler<z.infer<typeof opportunityFormSchema>> = (
    data
  ) => {
    console.log(data);
  };

  const tabs = [
    { label: "Requisitantes", content: <Tab1 nextTab={nextTab} /> },
    {
      label: "Informações da vaga",
      content: <Tab2 nextTab={nextTab} prevTab={prevTab} />,
    },
    {
      label: "Pagina da vaga",
      content: <Tab3 nextTab={nextTab} prevTab={prevTab} />,
    },
    {
      label: "Etapas da vaga",
      content: <Tab4 nextTab={nextTab} prevTab={prevTab} />,
    },
    {
      label: "Publicar vaga",
      content: (
        <Tab5 prevTab={prevTab} onSubmit={methods.handleSubmit(onSubmit)} />
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex items-center gap-2">
        <X onClick={() => navigate("/")} className="w-6 h-6 cursor-pointer" />
        <h2 className="font-bold text-2xl">Criar vaga</h2>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs
            tabs={tabs}
            activeTab={currentTab}
            setActiveTab={setCurrentTab}
          />
        </form>
      </FormProvider>
    </div>
  );
};

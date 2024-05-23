import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { opportunityFormSchema } from "./validation";
import { Info, UserRound } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const Tab1: React.FC<{ nextTab: () => void }> = ({ nextTab }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<z.infer<typeof opportunityFormSchema>>();

  const handleNext = async () => {
    const isValid = await trigger("jobTitle");
    if (isValid) {
      nextTab();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <UserRound className="w-20 h-20" />
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">Requisitantes</h3>
            <span className="text-slate-400 text-base ">
              lerolerolerolerolerolerolerolerolerolerole
              rolerolerolerolerolerolerolerolerolerolerolerolerolerolerole
              rolerolerolerolerolerolerolerolerolerolero
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="jobTitle">
            Usar um modelo de fluxo de requisição
          </Label>
          <Input {...register("jobTitle")} />
          <div className="rounded-lg px-4 py-3 flex items-center gap-3 bg-[#D4E7FC] dark:bg-[#081B30]">
            <Info className="text-[#2A89EF]" />
            <div className="flex flex-col gap-1">
              <span className="text-[#113760] dark:text-[#AAD0F9] text-base font-semibold">
                O que são os modelos de fluxo de requisição
              </span>
              <p className="font-normal text-sm text-slate-600">
                Os modelos são vaga prontas que você pode usar para dar mais
                agilidade no processo
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>grid 2</div>
    </div>
  );
};

export default Tab1;

import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { opportunityFormSchema } from "./validation";
import { Info, UserRound } from "lucide-react";
import { Label } from "../ui/label";
import { Combobox } from "../ui/Combobox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const Tab1: React.FC<{ nextTab: () => void }> = ({ nextTab }) => {
  const [open1, setOpen1] = React.useState(false);
  const [value1, setValue1] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [value2, setValue2] = React.useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<z.infer<typeof opportunityFormSchema>>();

  const handleNext = async () => {
    const isValid = await trigger(["approvalflow", "reason", "approvers"]);
    if (isValid) {
      nextTab();
    }
  };

  const options = [
    {
      value: "template1",
      label: "template 1",
    },
    {
      value: "template2",
      label: "template 2",
    },
    {
      value: "template3",
      label: "template 3",
    },
    {
      value: "template4",
      label: "template 4",
    },
    {
      value: "template5",
      label: "template 5",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <UserRound className="w-20 h-20" />
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">Requisitantes</h3>
            <span className="text-slate-400 text-base ">
              lerolerole rolerolerolerolerolerol erolerol erol
              erolerolerolerolero leroleroler oleroleroler oler oleroler ole
              rolerol erolerolerolerol erole rolerolerolero
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="template">
            Usar um modelo de fluxo de requisição
          </Label>
          <Combobox
            {...register("template")}
            open={open1}
            options={options}
            setOpen={setOpen1}
            setValue={setValue1}
            value={value1}
            placeholder=" "
          />

          <div className="rounded-lg px-4 py-3 flex items-center gap-3 bg-[#D4E7FC] dark:bg-[#081B30]">
            <Info className="text-[#2A89EF] h-6 w-6" />
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
        <div className="flex flex-col gap-2">
          <Label htmlFor="reason">Motivo da requisição desta vaga</Label>
          <Input {...register("reason")} />
          {errors.reason && (
            <span className="text-red-500"> {errors.reason.message} </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="approvalflow">
            Usar um modelo de fluxo de requisição
          </Label>

          {errors.approvalflow && (
            <span className="text-red-500">{errors.approvalflow.message}</span>
          )}

          <div className="rounded-lg px-4 py-3 flex items-center gap-3 bg-[#D4E7FC] dark:bg-[#081B30]">
            <Info className="text-[#2A89EF] h-6 w-6 flex-shrink-0" />
            <div className="flex flex-col gap-1 flex-grow-0">
              <span className="text-[#113760] dark:text-[#AAD0F9] text-base font-semibold">
                Envio sequencial
              </span>
              <p className="font-normal text-sm text-slate-600">
                A aprovação será solicitada às pessoas aprovadoras na ordem
                definida, o requisitante numero 2 apenas poderá aprovar ou
                reprovar após o requisitante numero 1 e assim em diante
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="approvers">
            Usar um modelo de fluxo de requisição
          </Label>
          <Combobox
            {...register("approvers")}
            open={open2}
            options={options}
            setOpen={setOpen2}
            setValue={setValue2}
            value={value2}
            placeholder="Busque pelo nome ou cargo do aprovador"
          />
          {errors.approvers && (
            <span className="text-red-500"> {errors.approvers.message} </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="w-full"
            variant={"destructive"}
            onClick={() => navigate("/")}
          >
            Cancelar
          </Button>
          <Button className="w-full" variant={"outline"} onClick={handleNext}>
            Próximo passo
          </Button>
        </div>
      </div>

      <div>
        <div className="bg-white h-80 flex items-center justify-center">
          grid2
        </div>
      </div>
    </div>
  );
};

export default Tab1;

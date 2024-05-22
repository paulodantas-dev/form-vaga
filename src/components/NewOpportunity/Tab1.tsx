import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { opportunityFormSchema } from "./validation";

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
    <div>
      <h2 className="text-2xl font-bold">Tab 1</h2>
      <div className="form-group">
        <label htmlFor="jobTitle" className="form-label">
          Job Title
        </label>
        <input
          id="jobTitle"
          {...register("jobTitle")}
          className="text-slate-950"
        />
        {errors.jobTitle && (
          <span className="text-red-500">{errors.jobTitle.message}</span>
        )}
      </div>
      <button
        type="button"
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Tab1;

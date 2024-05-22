import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { opportunityFormSchema } from "./validation";

export const Tab2: React.FC<{ nextTab: () => void; prevTab: () => void }> = ({
  nextTab,
  prevTab,
}) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<z.infer<typeof opportunityFormSchema>>();

  const handleNext = async () => {
    const isValid = await trigger(["jobDescription", "companyName"]);
    if (isValid) {
      nextTab();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Tab 2</h2>
      <div className="form-group">
        <label htmlFor="jobDescription" className="form-label">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          {...register("jobDescription")}
          className="form-input"
        />
        {errors.jobDescription && (
          <span className="text-red-500">{errors.jobDescription.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="companyName" className="form-label">
          Company Name
        </label>
        <input
          id="companyName"
          {...register("companyName")}
          className="form-input"
        />
        {errors.companyName && (
          <span className="text-red-500">{errors.companyName.message}</span>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevTab}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

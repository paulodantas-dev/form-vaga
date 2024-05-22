import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { opportunityFormSchema } from "./validation";

export const Tab5: React.FC<{ prevTab: () => void; onSubmit: () => void }> = ({
  prevTab,
  onSubmit,
}) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<z.infer<typeof opportunityFormSchema>>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await trigger(["salary", "jobBenefits"]);
    if (isValid) {
      onSubmit();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Tab 5</h2>
      <div className="form-group">
        <label htmlFor="salary" className="form-label">
          Salary
        </label>
        <input
          id="salary"
          type="number"
          {...register("salary", { valueAsNumber: true })}
          className="form-input"
        />
        {errors.salary && (
          <span className="text-red-500">{errors.salary.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="jobBenefits" className="form-label">
          Job Benefits
        </label>
        <textarea
          id="jobBenefits"
          {...register("jobBenefits")}
          className="form-input"
        />
        {errors.jobBenefits && (
          <span className="text-red-500">{errors.jobBenefits.message}</span>
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
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

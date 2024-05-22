import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { opportunityFormSchema } from "./validation";

export const Tab4: React.FC<{ nextTab: () => void; prevTab: () => void }> = ({
  nextTab,
  prevTab,
}) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<z.infer<typeof opportunityFormSchema>>();

  const handleNext = async () => {
    const isValid = await trigger(["jobLocation", "jobType"]);
    if (isValid) {
      nextTab();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Tab 4</h2>
      <div className="form-group">
        <label htmlFor="jobLocation" className="form-label">
          Job Location
        </label>
        <input
          id="jobLocation"
          {...register("jobLocation")}
          className="form-input"
        />
        {errors.jobLocation && (
          <span className="text-red-500">{errors.jobLocation.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="jobType" className="form-label">
          Job Type
        </label>
        <select id="jobType" {...register("jobType")} className="form-input">
          <option value="">Select job type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
        </select>
        {errors.jobType && (
          <span className="text-red-500">{errors.jobType.message}</span>
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

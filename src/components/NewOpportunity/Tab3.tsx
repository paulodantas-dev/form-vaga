import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { opportunityFormSchema } from "./validation";

export const Tab3: React.FC<{ nextTab: () => void; prevTab: () => void }> = ({
  nextTab,
  prevTab,
}) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<z.infer<typeof opportunityFormSchema>>();

  const handleNext = async () => {
    const isValid = await trigger(["jobRequirements", "applicationDeadline"]);
    if (isValid) {
      nextTab();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Tab 3</h2>
      <div className="form-group">
        <label htmlFor="jobRequirements" className="form-label">
          Job Requirements
        </label>
        <textarea
          id="jobRequirements"
          {...register("jobRequirements")}
          className="form-input"
        />
        {errors.jobRequirements && (
          <span className="text-red-500">{errors.jobRequirements.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="applicationDeadline" className="form-label">
          Application Deadline
        </label>
        <input
          id="applicationDeadline"
          type="date"
          {...register("applicationDeadline")}
          className="form-input"
        />
        {errors.applicationDeadline && (
          <span className="text-red-500">
            {errors.applicationDeadline.message}
          </span>
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

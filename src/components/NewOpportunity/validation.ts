import { z } from "zod";

export const opportunityFormSchema = z.object({
  // Campos de Tab1
  template: z.string().optional(),
  reason: z.string().min(1, "Reason is required"),
  approvalflow: z.string().min(1, "Approval flow is required"),
  approvers: z.string().min(1, "Approvers are required"),

  // Campos de Tab2
  jobDescription: z.string().min(1, "Job description is required"),
  companyName: z.string().min(1, "Company name is required"),

  // Campos de Tab3
  jobRequirements: z.string().min(1, "Job requirements are required"),
  applicationDeadline: z.string().min(1, "Application deadline is required"),

  // Campos de Tab4
  jobLocation: z.string().min(1, "Job location is required"),
  jobType: z.string().min(1, "Job type is required"),

  // Campos de Tab5
  salary: z.number().min(0, "Salary must be positive"),
  jobBenefits: z.string().min(1, "Job benefits are required"),
});

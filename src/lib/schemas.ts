// ----- zod -----
import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "The name must be at least 2 characters.",
    })
    .max(50, {
      message: "The username must be a maximum of 50 characters.",
    }),
  email: z.email(),
  message: z.string().min(2, {
    message: "The message must be at least 2 characters long.",
  }),
});

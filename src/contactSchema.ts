import { z } from "zod";

const genders = ["male", "female", "other"] as const;

export type Genders = (typeof genders)[number];

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must have at least 3 characters",
    })
    .max(20, {
      message: "Name must have less than 20 characters",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "Lastname must have at least 3 characters",
    })
    .max(20, {
      message: "Lastname must have less than 20 characters",
    }),
  age: z.coerce
    .number({
      message: "Age must be a number",
    })
    .min(18, {
      message: "Age must be 18 at least",
    }),
  email: z.string().email({
    message: "Email must be valid",
  }),
  country: z
    .string()
    .min(3, {
      message: "Country must have at least 3 characters",
    })
    .max(20, {
      message: "Country must have less than 20 characters",
    }),
  address: z
    .string()
    .min(3, {
      message: "Address must have at least 3 characters",
    })
    .max(20, {
      message: "Address must have less than 20 characters",
    }),
  gender: z.enum(genders, {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  message: z
    .string()
    .min(1, {
      message: "Message must not be empty",
    })
    .max(500, {
      message: "Message must be less than 501 characters",
    }),
});

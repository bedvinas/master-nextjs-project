import { ZodError } from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    console.log(error.flatten().fieldErrors);
    // if validation error with Zod, return first error message
    return {
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    // if another error instance, return error message
    return { message: error.message, fieldErrors: {}, payload: formData };
  } else {
    // if not an error instance but something else crashed
    // return generic error message
    return {
      message: "An unknown error occured",
      fieldErrors: {},
      payload: formData,
    };
  }
};

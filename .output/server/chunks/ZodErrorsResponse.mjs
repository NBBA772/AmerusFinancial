import { s as sendError, c as createError } from './nitro/node-server.mjs';
import { g as getMappedZodErrors } from './DefaultErrorsResponse.mjs';

async function sendZodErrorResponse(event, errorData) {
  const parsedErrors = getMappedZodErrors(errorData);
  return sendError(event, createError({ statusCode: 422, statusMessage: "Invalid Data Provided", data: parsedErrors }));
}

export { sendZodErrorResponse as s };
//# sourceMappingURL=ZodErrorsResponse.mjs.map

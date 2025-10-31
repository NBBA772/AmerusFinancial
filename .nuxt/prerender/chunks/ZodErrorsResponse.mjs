import { sendError, createError } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/h3/dist/index.mjs';
import { g as getMappedZodErrors } from './DefaultErrorsResponse.mjs';

async function sendZodErrorResponse(event, errorData) {
  const parsedErrors = getMappedZodErrors(errorData);
  return sendError(event, createError({ statusCode: 422, statusMessage: "Invalid Data Provided", data: parsedErrors }));
}

export { sendZodErrorResponse as s };
//# sourceMappingURL=ZodErrorsResponse.mjs.map

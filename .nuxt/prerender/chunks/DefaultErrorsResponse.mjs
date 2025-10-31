import { sendError, createError } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/h3/dist/index.mjs';

function getMappedZodErrors(zodError) {
  const errors = /* @__PURE__ */ new Map();
  JSON.parse(zodError).forEach((zodError2) => {
    errors.set(zodError2.path[0], { "message": zodError2.message });
  });
  return JSON.stringify(Object.fromEntries(errors));
}
function getMappedError(errorType, message) {
  const errors = /* @__PURE__ */ new Map();
  errors.set(errorType, { "message": message });
  return JSON.stringify(Object.fromEntries(errors));
}

async function sendDefaultErrorResponse(event, errorType, statusCode, error) {
  const parsedErrors = getMappedError(errorType, error);
  return sendError(event, createError({ statusCode, statusMessage: "Invalid Data Provided", data: parsedErrors }));
}

export { getMappedError as a, getMappedZodErrors as g, sendDefaultErrorResponse as s };
//# sourceMappingURL=DefaultErrorsResponse.mjs.map

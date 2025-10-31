import { h as useRoute } from "../server.mjs";
import { H3Error, createError } from "h3";
const getParam = (param) => {
  const route = useRoute();
  const value = route.params[param];
  if (value == null) {
    const paramNotFound = new H3Error();
    paramNotFound.statusCode = 501;
    paramNotFound.message = param + " not found on this route. Are you sure you spelled it correctly? params for this route are " + JSON.stringify(route.params);
    throw createError(paramNotFound);
  }
  return value;
};
export {
  getParam as g
};
//# sourceMappingURL=getParam-DqNSwp4_.js.map

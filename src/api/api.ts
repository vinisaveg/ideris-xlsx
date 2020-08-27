import axios from "axios";
import { environment } from "../environment/environment";

export const api = axios.create({
  baseURL: environment.api.baseURL,
  timeout: environment.api.timeout,
  headers: environment.api.headers,
});

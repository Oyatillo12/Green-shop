import axios from "axios";
import { APi } from "./useEnv";

export const useAxios = () => axios.create({baseURL:APi})
import axios from "axios";
import { APi } from "./useEnv";
import { useContext } from "react";
import { Context } from "@/context/FilterContext";

export const useAxios = () => {
    const {accessToken} = useContext(Context);
    const api = axios.create({
        baseURL: APi,
    });
    if(accessToken){
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    return api;
}
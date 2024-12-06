"use client";

import axios from "axios";
import { APi } from "./useEnv";
import { useContext, useMemo } from "react";
import { Context } from "@/context/FilterContext";

export const useAxios = () => {

    const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useContext(Context);

    const api = useMemo(() => {
        const instance = axios.create({
            baseURL: APi,
        });

        if (accessToken) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }

        instance.interceptors.request.use(
            (config) => config,
            (error) => Promise.reject(error)
        );

        instance.interceptors.response.use(
            (response) => response, 
            async (error) => {
                if (error.response?.status === 401 && refreshToken) {
                    try {
                        const response = await instance.get(`/token/${refreshToken}`);

                        const newAccessToken = response.data.access_token;
                        setAccessToken(newAccessToken);
                        setRefreshToken(response.data.refresh_token);

                        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                        return instance(error.config);
                    } catch (refreshError) {
                        console.log('Failed to refresh token:', refreshError);
                        return Promise.reject(refreshError);
                    }
                }

                return Promise.reject(error);
            }
        );

        return instance;
    }, [accessToken, refreshToken, setAccessToken]);

    return api;
};

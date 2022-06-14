import { Request } from "@fujia/fetch";
import { getToken } from "./index";

const HOST_MAP = {
  // development: 'http://192.168.31.103:8084/api/v1',
  development: "https://api.fujia.site/api/v1",
  production: "https://api.fujia.site/api/v1",
};

const env = (process.env.NODE_ENV || "production") as "production" | "development";

export const request = Request.create({
  baseUrl: HOST_MAP[env],
  requestInterceptor: (config) => {
    const token = getToken();

    if (config.headers && token) {
      config.headers.authorization = token;
    }

    return config;
  },
});

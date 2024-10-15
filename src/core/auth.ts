import qs from "qs";
import { toBase64 } from "js-base64";

import { RUNTIME } from "./runtime";
import { RequestConfig } from "./core-client";

export interface AuthProvider {
  applyAuth(cfg: RequestConfig): RequestConfig;
}

const AUTHORIZATION = "Authorization";
const COOKIE = "Cookie";

export class AuthBasic implements AuthProvider {
  username: string | null;
  password: string | null;

  constructor(username?: string, password?: string) {
    this.username = username ?? null;
    this.password = password ?? null;
  }

  applyAuth(cfg: RequestConfig): RequestConfig {
    if (this.username !== null && this.password !== null) {
      const headers = cfg.headers ?? {};
      const encoded = toBase64(`${this.username}:${this.password}`);
      headers[AUTHORIZATION] = `Basic ${encoded}`;
      cfg.headers = headers;
    }

    return cfg;
  }
}

export class AuthBearer implements AuthProvider {
  token: string | null;

  constructor(token?: string) {
    this.token = token ?? null;
  }

  applyAuth(cfg: RequestConfig): RequestConfig {
    if (this.token !== null) {
      const headers = cfg.headers ?? {};
      headers[AUTHORIZATION] = `Bearer ${this.token}`;
      cfg.headers = headers;
    }

    return cfg;
  }
}

export class AuthKeyQuery implements AuthProvider {
  name: string;
  key: string | null;

  constructor(name: string, key?: string) {
    this.name = name;
    this.key = key ?? null;
  }

  applyAuth(cfg: RequestConfig): RequestConfig {
    if (this.key !== null) {
      const query = cfg.query ?? [];
      query.push(qs.stringify({ [this.name]: this.key }));
      cfg.query = query;
    }

    return cfg;
  }
}

export class AuthKeyHeader implements AuthProvider {
  name: string;
  key: string | null;

  constructor(name: string, key?: string) {
    this.name = name;
    this.key = key ?? null;
  }

  applyAuth(cfg: RequestConfig): RequestConfig {
    if (this.key !== null) {
      const headers = cfg.headers ?? {};
      headers[this.name] = this.key;
      cfg.headers = headers;
    }

    return cfg;
  }
}

export class AuthCookieHeader implements AuthProvider {
  name: string;
  key: string | null;

  constructor(name: string, key?: string) {
    this.name = name;
    this.key = key ?? null;
  }

  applyAuth(cfg: RequestConfig): RequestConfig {
    if (RUNTIME.type === "browser") {
      cfg.withCredentials = true;
    } else if (this.key !== null) {
      const headers = cfg.headers ?? {};
      const cookies: string = headers[COOKIE] ?? "";
      headers[COOKIE] = `${cookies.length > 0 ? ";" : ""}${this.name}=${
        this.key
      }`;
      cfg.headers = headers;
    }

    return cfg;
  }
}
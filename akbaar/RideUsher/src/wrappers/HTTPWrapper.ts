import { HTTP } from "@ionic-native/http";

export type HTTPMethods =
  | "head"
  | "download"
  | "get"
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "options"
  | "upload";

interface SendRequestProps {
  method: HTTPMethods;
  url: string;
  data: object;
  headers?: { [index: string]: string } | undefined;
}

export class HTTPWrapper {
  private static instance: HTTPWrapper;

  private constructor() {
    HTTP.setServerTrustMode("default"); // It could either be default, pinned, nocheck, legacy
    HTTP.setDataSerializer("json");
  }

  public static getInstance(): HTTPWrapper {
    if (!HTTPWrapper.instance) {
      HTTPWrapper.instance = new HTTPWrapper();
    }

    return HTTPWrapper.instance;
  }

  public async sendRequest(options: SendRequestProps): Promise<any> {
    const opts = {
      method: options.method,
      data: options.data,
      headers: options.headers,
    };
    let response = await HTTP.sendRequest(options.url, opts);

    return response;
  }
}

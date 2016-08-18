declare module "client-sessions" {
  import * as express from "express";

  namespace clientsessions {
    interface ICookie {
      ephemeral?: boolean;
      httpOnly?: boolean;
      maxAge?: number;
      secure?: boolean;
      [key: string]: any;
    }

    interface IOptions {
      secret?: string;
      encryptionKey?: Buffer;
      signatureKey?: Buffer;
      cookieName?: string;
      duration?: number;
      activeDuration?: number;
      encryptionAlgorithm?: string;
      signatureAlgorithm?: string;
      cookie?: clientsessions.ICookie;
      requestKey?: string;
    }
  }

  function clientSessionFactory(opts: clientsessions.IOptions): express.RequestHandler;
}
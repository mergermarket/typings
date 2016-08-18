declare module "client-sessions" {
  import * as express from "express";

  namespace ClientSessions {
    interface ICookie {
      ephemeral?: boolean;
      httpOnly?: boolean;
      maxAge?: number;
      secure?: boolean;
      [key: string]: any;
    }

    interface IOptions {
      activeDuration?: number;
      cookie?: ClientSessions.ICookie;
      cookieName?: string;
      duration?: number;
      encryptionAlgorithm?: string;
      encryptionKey?: Buffer;
      requestKey?: string;
      secret?: string;
      signatureAlgorithm?: string;
      signatureKey?: Buffer;
    }
  }

  function clientSessionFactory(opts: ClientSessions.IOptions): express.RequestHandler;
}

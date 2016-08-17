declare module "console-logger" {
  import * as winston from "winston";

  function createLogger(logLevel: string, component: string, env: string, module: string): winston.LoggerInstance;

  export = createLogger;
}

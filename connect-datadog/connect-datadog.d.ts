declare module "connect-datadog" {
  import * as express from "express";
  import * as statsd from "node-statsd";

  function createLogger(options: createLogger.DatadogLoggerOptions): express.RequestHandler;

  namespace createLogger {
    interface DatadogLoggerOptions {
      dogstatsd?: statsd.StatsD;
      response_code?: boolean;
      stat?: string;
      tags?: string[];
      base_url?: boolean;
      path?: boolean;
    }
  }

  export = createLogger;
}

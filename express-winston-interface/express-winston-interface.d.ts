declare module "express-winston-interface" {

  import * as winston from "winston"
  import * as express from "express"

  export interface IExpressWinstonStatusLevels {
    success?: string,
    warn?: string,
    error?: string,
  }

  export interface IExpressWinstonOptions {
    requestWhitelist?: string[],
    bodyWhitelist?: string[],
    bodyBlacklist?: string[],
    responseWhitelist?: string[],
    requestFilter?: (req: {}, propName: string) => any,
    responseFilter?: (res: {}, propName: string) => any,
    ignoredRoutes?: string[],
    winstonInstance?: winston.LoggerInstance,
    level?: string,
    statusLevels?: IExpressWinstonStatusLevels,
    msg?: string,
    baseMeta?: {},
    metaField?: string,
    colorize?: boolean,
    expressFormat?: string,
    ignoreRoute?: () => boolean,
    skip?: () => boolean,
  }

  export interface IExpressWinston {

    /**
     * A default list of properties in the request body that are allowed to be logged.
     * This will normally be empty here, since it should be done at the route level.
     * @type {Array}
     */
    bodyWhitelist: string[],

    /**
     * A default list of properties in the request body that are not allowed to be logged.
     * @type {Array}
     */
    bodyBlacklist: string[],

    /**
     * A list of request routes that will be skipped instead of being logged. This would be useful if routes for health checks or pings would otherwise pollute
     * your log files.
     * @type {Array}
     */
    ignoredRoutes: string[],

    /**
     * A default list of properties in the request object that are allowed to be logged.
     * These properties will be safely included in the meta of the log.
     * 'body' is not included in this list because it can contains passwords and stuff that are sensitive for logging.
     * TODO: Include 'body' and get the defaultRequestFilter to filter the inner properties like 'password' or 'password_confirmation', etc. Pull requests anyone?
     * @type {Array}
     */
    requestWhitelist: string[],

    /**
     * A default list of properties in the response object that are allowed to be logged.
     * These properties will be safely included in the meta of the log.
     * @type {Array}
     */
    responseWhitelist: string[],

    /**
     * A default function to filter the properties of the req object.
     * @param req
     * @param propName
     * @return {*}
     */
    defaultRequestFilter(req: {}, propName: string): any,

    /**
     * A default function to filter the properties of the res object.
     * @param res
     * @param propName
     * @return {*}
     */
    defaultResponseFilter(res: {}, propName: string): any,

    /**
     * A default function to decide whether skip logging of particular request. Doesn't skip anything (i.e. log all requests).
     * @return always false
     */
    defaultSkip(): boolean,

    errorLogger(options: IExpressWinstonOptions): express.ErrorRequestHandler,

    logger(options: IExpressWinstonOptions): express.RequestHandler,
  }
}

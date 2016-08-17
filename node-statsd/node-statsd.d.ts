declare module "node-statsd" {
  export interface IStatsdOptions {
    host: string;
    port: string | number;
    prefix?: string;
    suffix?: string;
    globalise?: boolean;
    cacheDns?: boolean;
    mock?: boolean;
    global_tags?: string[];
  }

  export class Client {
    host: string;
    port: string | number;
    prefix: string;
    suffix: string;
    globalise: boolean;
    cacheDns: boolean;
    mock: boolean;
    global_tags: string[];

    constructor(
      host: IStatsdOptions | string,
      port?: string | number,
      prefix?: string,
      suffix?: string,
      globalize?: boolean,
      cacheDns?: boolean,
      mock?: boolean,
      global_tags?: string[]
    );

    trackHttpResponseTime(
      responseTime: Number,
      httpCallee: string,
      operation: string,
      status: string
    ): void

    trackSqlConnectTime(
      connectTime: Number,
      db: string
    ): void

    trackSqlQueryTime(
      queryTime: Number,
      db: string,
      operation: string,
      productId: string
    ): void

    histogram(stat: string, value: Number, sample_rate?: Number | string[], tags?: string[]): void

    gauge(stat: string, value: Number, sample_rate?: Number | string[], tags?: string[]): void

    increment(stat: string, sample_rate?: Number | string[], tags?: string[]): void
  }

  export interface DummyStatsObject {
    trackHttpResponseTime(
      responseTime: Number,
      httpCallee: string,
      operation: string,
      status: string
    ): void

    trackSqlConnectTime(
      connectTime: Number,
      db: string
    ): void

    trackSqlQueryTime(
      queryTime: Number,
      db: string,
      operation: string,
      productId: string
    ): void

    histogram(stat: string, value: Number, sample_rate?: Number | string[], tags?: string[]): void

    gauge(stat: string, value: Number, sample_rate?: Number | string[], tags?: string[]): void

    increment(stat: string, sample_rate?: Number | string[], tags?: string[]): void
  }
}

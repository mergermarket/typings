declare module "stream-equal" {
  import {Readable} from "stream"
  function streamEqual(leftStream: Readable, rightStrean: Readable, callback: (err: Error, result: boolean) => void): void

  export = streamEqual
}

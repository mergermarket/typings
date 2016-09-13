declare module "stream-equal" {
  import {ReadStream} from "fs"
  function streamEqual(leftStream: ReadStream, rightStrean: ReadStream, callback: (err: Error, result: boolean) => void): void

  export = streamEqual
}

import { tree_builder } from "./tree_builder.ts";

export type message = {
  status: number,
  time: number,
  message: string,
  stack?: Error
}

export type configuration = {
  logger: typeof tree_builder,
  refresh: number,
}

export default class  {
  private configuration: configuration;
  constructor(configuration?: never) { 
    configuration ? this.configuration = configuration : this.configuration = {
      logger: tree_builder,
      refresh: 24 // update at 24fps.
    }
  }

  log() {
    tree_builder.log()
  }

  ok() {
    tree_builder.ok()
  }
  
  info() {
    tree_builder.info()
  }

  warn() {
    tree_builder.warn()
  }

  error() {
    tree_builder.error()
  }

  fatal() {
    tree_builder.fatal()
  }
  
}

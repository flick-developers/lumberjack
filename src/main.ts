
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
    
  }

  ok() {
    
  }
  
  info() {
    
  }

  warn() {
    
  }

  error() {
    
  }

  fatal() {
    
  }
  
}

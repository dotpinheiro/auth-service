import { createLogger, transports, format } from 'winston';
import {LogInterface} from "./log.interface";

const { printf, combine, timestamp, label } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export class LogHandler {
  private static instance: any;

  private constructor() {}

  public static getInstance(): LogInterface {
    if (!LogHandler.instance) {
      LogHandler.instance = createLogger({
        format: combine(
          label({ label: 'AuthService' }),
          timestamp(),
          logFormat,
        ),
        transports: [
          new transports.Console(),
          new transports.File({ filename: 'application.log' }),
        ],
      })
    }
    return LogHandler.instance;
  }


}

export const Logger = LogHandler.getInstance();

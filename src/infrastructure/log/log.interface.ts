export interface LogInterface {
  log: (message: string, level?: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
}

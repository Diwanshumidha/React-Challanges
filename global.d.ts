export {};

declare global {
  interface Window {
    enableDebugMode: () => void;
    disableDebugMode: () => void;
    toggleDevtools: () => void;
  }
}
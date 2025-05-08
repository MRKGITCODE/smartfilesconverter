// This file contains global type declarations

// Fix "allowedHosts: boolean" issue in vite.ts
declare module 'vite' {
  interface ServerOptions {
    allowedHosts?: true | string[] | boolean;
  }
}

// Fix multer typings if needed
declare module 'multer' {
  interface DiskStorageOptions {
    destination?: string | ((req: any, file: any, callback: (error: Error | null, destination: string) => void) => void);
    filename?: (req: any, file: any, callback: (error: Error | null, filename: string) => void) => void;
  }
}
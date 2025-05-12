import { createContext } from 'react';

interface ToastContextData {
  showToast: (
    message: string,
    type?: 'success' | 'error' | 'warning' | 'info'
  ) => void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

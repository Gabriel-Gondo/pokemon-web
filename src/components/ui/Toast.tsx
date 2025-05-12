import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Icon } from './Icon';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
  duration?: number;
}

const styles = {
  success: 'bg-green-50 text-green-800 border-green-200',
  error: 'bg-red-50 text-red-800 border-red-200',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  info: 'bg-blue-50 text-blue-800 border-blue-200',
};

export function Toast({
  message,
  type = 'info',
  onClose,
  duration = 5000,
}: ToastProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md transition-all duration-300',
        isClosing
          ? 'opacity-0 translate-y-[-100%]'
          : 'opacity-100 translate-y-0'
      )}
    >
      <div
        className={cn(
          'flex items-center p-4 rounded-lg border shadow-lg',
          styles[type]
        )}
      >
        <div className="flex-shrink-0">
          <Icon type={type} />
        </div>
        <div className="ml-3 flex-1">{message}</div>
        <button
          onClick={() => {
            setIsClosing(true);
            setTimeout(onClose, 300);
          }}
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
        <div
          className={cn('h-full rounded-full', {
            'bg-green-500': type === 'success',
            'bg-red-500': type === 'error',
            'bg-yellow-500': type === 'warning',
            'bg-blue-500': type === 'info',
          })}
          style={{
            width: '100%',
            animation: `shrink ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
}

const style = document.createElement('style');
style.textContent = `
  @keyframes shrink {
    from { width: 100%; }
    to { width: 0%; }
  }
`;
document.head.appendChild(style);

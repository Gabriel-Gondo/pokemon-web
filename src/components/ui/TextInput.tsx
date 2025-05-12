import { forwardRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, className = '', ...props }, ref) => {
    return (
      <div className="flex-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-colors ${
            error
              ? 'border-red-300 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-500'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

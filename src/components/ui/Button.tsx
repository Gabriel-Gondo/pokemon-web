import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-lg transition-colors font-medium';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
    danger: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300',
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Icon type="circle-loading" />
          Carregando...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

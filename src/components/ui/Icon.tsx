import { lazy, Suspense } from 'react';
import { cn } from '../../lib/utils';
import type { IconType } from './icons/icon-types';

interface IconProps {
  type: IconType;
  className?: string;
}

export function Icon({ type, className }: IconProps) {
  const SvgComponent = lazy(() => import(`./icons/${type}.svg?react`));

  return (
    <Suspense fallback={'-'}>
      <SvgComponent className={cn('w-5 h-5', className)} alt={`${type} icon`} />
    </Suspense>
  );
}

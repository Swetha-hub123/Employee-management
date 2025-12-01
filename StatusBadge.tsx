import { DeviceStatus } from '@/types/device';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: DeviceStatus;
  className?: string;
}

const statusConfig = {
  active: {
    label: 'Active',
    dotClass: 'bg-status-active',
    containerClass: 'status-active',
  },
  warning: {
    label: 'Warning',
    dotClass: 'bg-status-warning',
    containerClass: 'status-warning',
  },
  offline: {
    label: 'Offline',
    dotClass: 'bg-status-offline',
    containerClass: 'status-offline',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn('status-badge', config.containerClass, className)}>
      <span 
        className={cn(
          'h-2 w-2 rounded-full',
          config.dotClass,
          status === 'active' && 'pulse-active'
        )} 
      />
      {config.label}
    </span>
  );
}

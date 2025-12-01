import { Device } from '@/types/device';
import { StatusBadge } from './StatusBadge';
import { Thermometer, Zap, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DeviceCardProps {
  device: Device;
  onClick: (device: Device) => void;
  isSelected?: boolean;
}

export function DeviceCard({ device, onClick, isSelected }: DeviceCardProps) {
  const isOffline = device.status === 'offline';
  
  return (
    <div
      onClick={() => onClick(device)}
      className={cn(
        'card-glow group cursor-pointer rounded-lg border bg-card p-5 transition-smooth',
        'hover:bg-card-hover hover:border-primary/30 hover:shadow-glow',
        isSelected && 'border-primary bg-card-hover shadow-glow',
        !isSelected && 'border-border'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg',
            'bg-primary/10 text-primary transition-smooth',
            'group-hover:bg-primary/20'
          )}>
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{device.name}</h3>
            <p className="font-mono text-xs text-muted-foreground">{device.deviceId}</p>
          </div>
        </div>
        <StatusBadge status={device.status} />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className={cn(
          'flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2',
          isOffline && 'opacity-50'
        )}>
          <Thermometer className={cn(
            'h-4 w-4',
            device.status === 'warning' ? 'text-status-warning' : 'text-muted-foreground'
          )} />
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Temp</p>
            <p className="font-mono text-sm font-medium text-foreground">
              {device.temperature !== null ? `${device.temperature}°C` : '—'}
            </p>
          </div>
        </div>
        
        <div className={cn(
          'flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2',
          isOffline && 'opacity-50'
        )}>
          <Zap className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Voltage</p>
            <p className="font-mono text-sm font-medium text-foreground">
              {device.voltage !== null ? `${device.voltage}V` : '—'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

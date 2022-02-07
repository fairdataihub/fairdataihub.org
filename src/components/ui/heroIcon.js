import {
  DesktopComputerIcon,
  LightningBoltIcon,
  ScaleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';

export default function HeroIcon({ icon }) {
  return (
    <div>
      {icon == 'DesktopComputerIcon' && (
        <DesktopComputerIcon className="h-6 w-6" aria-hidden="true" />
      )}
      {icon == 'LightningBoltIcon' && (
        <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
      )}
      {icon == 'ScaleIcon' && (
        <ScaleIcon className="h-6 w-6" aria-hidden="true" />
      )}
      {icon == 'ExclamationCircleIcon' && (
        <ExclamationCircleIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </div>
  );
}

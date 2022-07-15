import { ButtonStyleVariant } from '@molitio/system-schema';

export interface DynamicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    styleVariant: ButtonStyleVariant;
    label?: string;
    padding?: string;
    fontSize?: string;
}

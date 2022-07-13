import { ButtonStyleVariant } from '@molitio/molitio-schema';

export interface DynamicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    styleVariant: ButtonStyleVariant;
    label?: string;
    padding?: string;
    fontSize?: string;
}

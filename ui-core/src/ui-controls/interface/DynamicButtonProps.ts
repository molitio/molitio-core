import { ButtonStyleVariant } from 'ui-core-schema';

export interface DynamicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    styleVariant: ButtonStyleVariant;
    label?: string;
    padding?: string;
    fontSize?: string;
}

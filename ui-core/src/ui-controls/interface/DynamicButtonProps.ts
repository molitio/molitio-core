import { ButtonStyleVariant } from 'ui-core-models';

export interface DynamicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    styleVariant: ButtonStyleVariant;
    label?: string;
    padding?: string;
    fontSize?: string;
}

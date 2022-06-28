import { ButtonStyleVariant } from 'ui-core-schema';

export const getStyleVariantRules = (variant: ButtonStyleVariant) => {
    switch (variant) {
        case 'btn-rounded':
            return {
                border: 0,
                borderRadius: '6px',
                cursor: 'pointer',
                backgroundColor: '#222',
                color: '#fff',
            };
        case 'btn-rectangle':
            return {
                border: 0,
                cursor: 'pointer',
            };

        default:
            return {};
    }
};

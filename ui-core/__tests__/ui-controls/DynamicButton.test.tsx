import React from 'react';
//import { render, screen, waitFor } from '@testing-library/react';
import { render } from '@testing-library/react';

import { describe, expect, it } from '@jest/globals';
import { DynamicButton, DynamicButtonProps } from '../../src';
/* import '@testing-library/jest-dom'; */

const renderDynamicButton = (props: Partial<DynamicButtonProps> = {}) => {
    const defaultProps: DynamicButtonProps = {
        styleVariant: 'btn-rounded',
        label: 'test button',
    };

    return render(<DynamicButton {...defaultProps} {...props}></DynamicButton>);
};

describe('dynamic button works as expected', async () => {
    //const button = jest.spyOn(DynamicButton, 'propTypes');
    it('should display label on button', async () => {
        // arrange
        const testText = 'test button';

        const { findByTestId } = renderDynamicButton();

        const button = await findByTestId('dynamic-button');

        // act
        // render(button);

        //const renderResult = await waitFor(() => screen.getByText(testText));
        // assert
        expect(button).toHaveBeenCalled();
        expect(button.innerText).toBe(testText);

        expect(1 + 1).toBe(2);
    });
});

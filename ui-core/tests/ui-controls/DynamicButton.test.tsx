import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import { DynamicButton } from '../../dist';
import '@testing-library/jest-dom';

describe('dynamic button works as expected', () => {
    it('should display label on button', async () => {
        // arrange
        const testText = 'test button';

        const button = <DynamicButton styleVariant="btn-rounded" label={testText} />;
        // act
        render(button);
        //render(<DynamicButton styleVariant="btn-rounded" label={testText} />);
        const renderResult = await waitFor(() => screen.getByText(testText));
        // assert
        expect(renderResult.innerText).toBe(testText);
        expect(1 + 1).toBe(2);
    });
});

import { render } from '@testing-library/react';

import UiModels from './ui-models';

describe('UiModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiModels />);
    expect(baseElement).toBeTruthy();
  });
});

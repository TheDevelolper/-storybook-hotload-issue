import { render } from '@testing-library/react';

import UiServices from './ui-services';

describe('UiServices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiServices />);
    expect(baseElement).toBeTruthy();
  });
});

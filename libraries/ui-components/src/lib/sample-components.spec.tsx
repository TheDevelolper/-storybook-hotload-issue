import { render } from '@testing-library/react';

import SampleComponents from './sample-components';

describe('SampleComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleComponents />);
    expect(baseElement).toBeTruthy();
  });
});

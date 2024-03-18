import type { Meta, StoryObj } from '@storybook/react';
import { SampleComponent } from './sample-components';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SampleComponent> = {
  component: SampleComponent,
  title: 'SampleComponent',
};
export default meta;
type Story = StoryObj<typeof SampleComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SampleComponent!/gi)).toBeTruthy();
  },
};

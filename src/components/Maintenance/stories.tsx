import { StoryFn, Meta } from '@storybook/react';
import Maintenance, { MaintenanceProps } from '.';

export default {
  title: 'Maintenance',
  component: Maintenance,
  args: {
    children: `Maintenance`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<MaintenanceProps>;

export const Default: StoryFn<MaintenanceProps> = (args) => {
  return (
    <div>
      <Maintenance {...args} />
    </div>
  );
};

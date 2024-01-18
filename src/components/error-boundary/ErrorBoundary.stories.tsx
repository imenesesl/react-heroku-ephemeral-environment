import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from './ErrorBoundary';

const meta = {
  component: ErrorBoundary,
  title: 'Components/ErrorBoundary',
  argTypes: {
    id: {
      description: 'unique id to track errors'
    },
    children: {
      description: 'component as children to render'
    }
  }
} satisfies Meta<typeof ErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

type MyComponentProps = {
  user?: {
    name: string;
  };
};

const MyComponent = ({ user }: MyComponentProps) => <h1>{user!.name}</h1>;

export const ComponentWithOutError: Story = {
  args: {
    id: 'no-errors',
    children: <MyComponent user={{ name: 'Hey there, working fine' }} />
  }
};

export const ComponentWithError: Story = {
  args: {
    id: 'with-errors',
    children: <MyComponent />
  }
};

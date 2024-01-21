import type { Meta, StoryObj } from '@storybook/react';

import { IF } from './IF';

const meta = {
  component: IF,
  title: 'Components/IF/IF',
  argTypes: {
    condition: {
      description: 'conditional rendering'
    },
    data: {
      description: 'data passed as props at element'
    },
    element: {
      description: 'custom component to render if condition is true'
    }
  }
} satisfies Meta<typeof IF>;

export default meta;

type Story = StoryObj<typeof meta>;

type MyComponentProps = {
  user?: {
    name: string;
  };
};

const MyComponent = ({ user }: MyComponentProps) => <h1>{user!.name}</h1>;

export const IFByControls: Story = {
  render: (props) => {
    return <IF {...props} element={MyComponent} />;
  },
  args: {
    data: {
      user: { name: 'Hi! Im IF Component' }
    },
    element: MyComponent,
    condition: true
  }
};

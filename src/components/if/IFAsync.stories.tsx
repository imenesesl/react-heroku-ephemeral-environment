import type { Meta, StoryObj } from '@storybook/react';

import { IFAsync } from './IFAsync';

const meta = {
  component: IFAsync,
  title: 'Components/IF/IFAsync',
  argTypes: {
    error: {
      description: 'error provided'
    },
    loading: {
      description: 'loading state'
    },
    data: {
      description: 'data passed as props at element'
    },
    element: {
      description: 'custom component to render if condition is true'
    }
  }
} satisfies Meta<typeof IFAsync>;

export default meta;

type Story = StoryObj<typeof meta>;

type MyComponentProps = {
  user?: {
    name: string;
  };
};

const MyComponent = ({ user }: MyComponentProps) => <h1>{user!.name}</h1>;

export const IFAsyncByControls: Story = {
  render: (props) => {
    return <IFAsync {...props} element={MyComponent} />;
  },
  args: {
    data: {
      user: { name: 'Hi! Im IFAsync Component' }
    },
    element: MyComponent,
    loading: true,
    error: null
  }
};

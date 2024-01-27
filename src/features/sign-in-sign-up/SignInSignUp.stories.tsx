import type { Meta, StoryObj } from '@storybook/react';

import { SignInSignUp } from './SignInSignUp';

const meta = {
  component: SignInSignUp,
  title: 'Features/SignInSignUp',
  argTypes: {
    middleSection: {
      description: 'structure defined for auth method and cta'
    }
  }
} satisfies Meta<typeof SignInSignUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {
    middleSection: {
      ctaAnnouncementLabel: 'No account?',
      ctaLabel: 'Create one',
      ctaLink: '/signup',
      googleLabel: 'Sign in with Google',
      facebookLabel: 'Sign in with Facebook'
    }
  }
};

export const SignUp: Story = {
  args: {
    middleSection: {
      ctaAnnouncementLabel: 'Already have an account?',
      ctaLabel: 'Sign in',
      ctaLink: '/signin',
      googleLabel: 'Sign up with Google',
      facebookLabel: 'Sign up with Facebook'
    }
  }
};

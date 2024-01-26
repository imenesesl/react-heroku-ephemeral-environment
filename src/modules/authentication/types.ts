const PROVIDER_NAMES = ['google', 'facebook'] as const;

export type ProviderTypes = (typeof PROVIDER_NAMES)[number];

export type AuthMethods = {
  signIn: () => Promise<void>;
  signUp: () => Promise<void>;
  signOut: () => Promise<void>;
};

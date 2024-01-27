export type MiddleSectionProps<T = string> = {
  googleLabel: string;
  onSignInSignUpWithGoogle?: () => Promise<void>;
  facebookLabel: string;
  onSignInSignUpWithFacebook?: () => Promise<void>;
  ctaAnnouncementLabel: string;
  ctaLabel: string;
  ctaLink: T;
};

export type SignInSignUpProps<T = string> = {
  middleSection: MiddleSectionProps<T>;
};

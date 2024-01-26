export type MiddleSectionProps = {
  googleLabel: string;
  onSignInSignUpWithGoogle?: () => Promise<void>;
  facebookLabel: string;
  onSignInSignUpWithFacebook?: () => Promise<void>;
  ctaAnnouncementLabel: string;
  ctaLabel: string;
  ctaLink: string;
};

export type SignInSignUpProps = {
  middleSection: MiddleSectionProps;
};

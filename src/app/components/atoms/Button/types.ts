type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'card' | 'campaign';

export type ButtonProps = {
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

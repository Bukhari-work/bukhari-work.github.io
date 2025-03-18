export interface Feature {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
}

export interface ButtonProps {
  label: string;
  link: string;
  target?: string;
  style?: "outline" | "solid";
  rel?: "nofollow" | "follow";
  fileName?: string;
  isDownload?: boolean;
  showIcon?: boolean;
}
export interface Button extends ButtonProps {
  enable: boolean;
}

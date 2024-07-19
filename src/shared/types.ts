export type SelectedPage = 'home' | 'benefits' | 'ourclasses' | 'contactus';

export type SetSelectedPageType = (value: SelectedPage) => void;

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

import { ReactNode } from 'react';
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="bg-secondary-500 hover:bg-primary-500 rounded-md px-10 py-2 hover:text-white"
      onClick={() => setSelectedPage('contactus')}
      href="#contactus"
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;

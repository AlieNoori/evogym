import { ReactNode } from 'react';
import { SelectedPage, SetSelectedPageType } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: ReactNode;
  setSelectedPage: SetSelectedPageType;
  to: SelectedPage;
  type?: 'action' | 'regular';
};

function ActionButton({
  type = 'action',
  to,
  children,
  setSelectedPage,
}: Props) {
  return (
    <AnchorLink
      className={`${type === 'action' ? 'rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white' : 'text-sm font-bold text-primary-500 underline hover:text-secondary-500'} `}
      onClick={() => setSelectedPage(to)}
      href={`#${to}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;

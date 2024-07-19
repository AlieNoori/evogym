import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage, SetSelectedPageType } from '@/shared/types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: SetSelectedPageType;
  setIsMenuToggled?: (value: (curState: boolean) => boolean) => void;
};

function Link({
  setIsMenuToggled,
  page,
  selectedPage,
  setSelectedPage,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => {
        if (setIsMenuToggled) setIsMenuToggled((toggled) => !toggled);
        setSelectedPage(lowerCasePage);
      }}
      className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;

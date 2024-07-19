import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage, SetSelectedPageType } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

const navItems = [
  { page: 'Home' },
  { page: 'Benefits' },
  { page: 'Our Classes' },
  { page: 'Contact Us' },
];

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: SetSelectedPageType;
};

function Navbar({ selectedPage, setSelectedPage, isTopOfPage }: Props) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const flexBetween = 'flex items-center justify-between';

  function handleClickMenuModal() {
    setIsMenuToggled((toggled) => !toggled);
  }

  return (
    <nav>
      <div
        className={`${isTopOfPage ? '' : 'bg-primary-100 drop-shadow'} ${flexBetween} fixed top-0 z-50 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <ul className={`${flexBetween} gap-8 text-sm`}>
                  {navItems.map((navItem) => (
                    <li key={navItem.page}>
                      <Link
                        page={navItem.page}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </li>
                  ))}
                </ul>
                <ul className={`${flexBetween} gap-8`}>
                  <li>Sign In</li>
                  <li>
                    <ActionButton
                      to="contactus"
                      setSelectedPage={setSelectedPage}
                    >
                      Become a Memeber
                    </ActionButton>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() =>
                  setIsMenuToggled((isMenuToggled) => !isMenuToggled)
                }
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-[60] h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button
              onClick={() =>
                setIsMenuToggled((isMenuToggled) => !isMenuToggled)
              }
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <ul className="ml-[33%] flex flex-col gap-10 text-2xl">
            {navItems.map((navItem) => (
              <li key={navItem.page}>
                <Link
                  page={navItem.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onClick={handleClickMenuModal}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

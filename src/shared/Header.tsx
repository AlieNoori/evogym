import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function Header({ children }: Props) {
  return (
    <h2 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h2>
  );
}

export default Header;

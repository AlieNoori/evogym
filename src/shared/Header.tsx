import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  upperCase?: boolean;
};

function Header({ upperCase = true, children }: Props) {
  return (
    <h2
      className={`${upperCase ? 'uppercase' : ''} basis-3/5 font-montserrat text-3xl font-bold`}
    >
      {children}
    </h2>
  );
}

export default Header;

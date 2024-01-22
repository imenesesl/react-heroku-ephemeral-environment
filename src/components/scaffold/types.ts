import React from 'react';

export enum IDs {
  Scaffold = 'Scaffold__Scaffold',
  Header = 'Scaffold__Header',
  Children = 'Scaffold__Children',
  Footer = 'Scaffold__Footer'
}

export type ScaffoldProps = {
  children: React.ReactNode;
};

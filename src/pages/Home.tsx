import * as React from "react";
import { AppHeader } from 'components/AppHeader';
import { AppFooter } from 'components/AppFooter';
import { MuiStyleGuide } from 'components/MuiStyleGuide';


export const Home = () => {
  return (
    <>
      <AppHeader/>
      <MuiStyleGuide/>
      <AppFooter/>
    </>
  );
}

import * as React from 'react';
import {Hidden} from '@material-ui/core';
import ForMobile from './ForMobile';
import ForDesktop from './ForDesktop';

interface Props {
  /**
   * Key of the selected nav item
   */
  selected?: string;
}

export default function NavTop(props: Props) {
  const {selected} = props;

  return (
    <nav>
      {/* Desktop */}
      <Hidden smDown>
        <ForDesktop selected={selected}/>
      </Hidden>

      {/*	Mobile */}
      <Hidden mdUp>
        <ForMobile selected={selected}/>
      </Hidden>
    </nav>
  );
};

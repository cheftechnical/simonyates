// import {Hidden} from '@material-ui/core';
import ForMobile from './ForMobile/ForMobile';
import ForDesktop from './ForDesktop/ForDesktop';

interface Props {
  /**
   * Key of the selected nav item
   */
  selected?: string;
}

export default function NavTop(props: Props) {
  const {selected} = props;

  // return (
  //   <nav aria-label="Global">
  //     {/* Desktop */}
  //     <Hidden smDown>
  //       <ForDesktop selected={selected}/>
  //     </Hidden>
  //
  //     {/*	Mobile */}
  //     <Hidden mdUp>
  //       <ForMobile selected={selected}/>
  //     </Hidden>
  //   </nav>
  // );

    // @todo mui5
    return (
        <div>[NavTop]</div>
    )
};
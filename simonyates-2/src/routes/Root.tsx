import {Outlet} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

export interface Props {
  /**
   * If `true`, layout will use the full height of the viewport
   */
  fullHeight?: boolean;
}

export default function Root(props: Props) {
  const {fullHeight} = props;

  return (
    <DefaultLayout>
      <Outlet/>
    </DefaultLayout>
  )
}
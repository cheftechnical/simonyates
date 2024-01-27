import {Outlet} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

export interface Props {

}

export default function Root(props: Props) {
  return (
    <DefaultLayout>
      <Outlet/>
    </DefaultLayout>
  )
}
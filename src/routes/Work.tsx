import { Outlet } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

export function Work() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default Work;

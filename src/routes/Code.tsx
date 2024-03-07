import DefaultLayout from "../layouts/DefaultLayout";
import CodePage from "../pages/CodePage";
import { Outlet } from "react-router-dom";

export function Code() {
  return (
    <DefaultLayout>
      {/*<CodePage />*/}
      <Outlet />
    </DefaultLayout>
  )
}

export default Code;

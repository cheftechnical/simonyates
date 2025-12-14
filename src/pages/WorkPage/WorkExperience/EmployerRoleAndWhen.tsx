import { Link as ReactRouterDom } from "react-router-dom";

interface Props {
  /**
   * The employer name.
   */
  employer: string;
  /**
   * The link to the employer's work page.
   */
  href: string;
  /**
   * The role performed.
   */
  role: string;
  /**
   * The time period worked.
   */
  when: string;
}

export default function EmployerRollAndWhen(props: Props) {
  const { employer, href, role, when } = props;

  return (
    <>
      <h2 className="font-normal text-xl leading-normal">
        <ReactRouterDom to={href} className="text-gray-900 hover:text-gray-600 hover:underline">
          {employer}  
        </ReactRouterDom>
      </h2>
      <p className="font-normal text-base leading-normal mt-3 text-gray-500">
        {role}
      </p>
      <p className="font-normal text-base leading-normal  mt-3 mb-8 text-gray-700">
        <span className="whitespace-nowrap">{when}</span>
      </p>
    </>
  );
}

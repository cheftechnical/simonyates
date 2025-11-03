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
    <h2 className="font-normal text-2xl leading-8 mb-[20px]">
      <ReactRouterDom to={href} className="text-gray-600 hover:text-gray-600 hover:underline">
        {employer}<br />
        {role}<br />
        <span className="whitespace-nowrap">{when}</span>
      </ReactRouterDom>
    </h2>
  );
}

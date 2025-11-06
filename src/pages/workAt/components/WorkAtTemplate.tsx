import { ReactElement, useMemo } from "react";
import MyContainer from "../../../styling/MyContainer/MyContainer";
import WorkAtEmployer from "./WorkAtEmployer";
import WorkAtRole from "./WorkAtRole";
import WorkAtWhenWhere from "./WorkAtWhenWhere";
import { Sections } from "../../../types/Sections.ts";
import NavRight from "../../../components/NavRight";

interface Props {
  /**
   * The main content
   */
  content: ReactElement;
  /**
   * The name of the employer
   */
  employer: string;
  /**
   * The employer's logo
   */
  logo: ReactElement;
  /**
   * The role I performed
   */
  role: ReactElement | string;
  /**
   * A collection of sections
   */
  sections?: Sections;
  /**
   * When I worked here
   */
  when: string;
  /**
   * Where the work was located
   */
  where: string;
}

export default function WorkAtTemplate(props: Props) {
  const {
    content,
    employer,
    logo,
    role,
    sections,
    when,
    where
  } = props;

  const renderedWorkAtEmployer = useMemo(() => {
    return <WorkAtEmployer employer={employer} />;
  }, [employer]);

  const renderedWorkAtRole = useMemo(() => {
    return <WorkAtRole>{role}</WorkAtRole>;
  }, [role]);

  const renderedWorkAtWhenWhere = useMemo(() => {
    return <WorkAtWhenWhere when={when} where={where} />;
  }, [when, where]);

  return (
    <MyContainer>
      <div className="flex flex-wrap">
        {/* pr-32 = 128 or 3 visual octaves * 1.5 line height = pr-48 192 */}
        <div className="w-full md:w-9/12 md:pr-48 xborder-1 xborder-[magenta] xbg-[pink]">
          <div className="flex">
            {/* Avatar */}
            {/* maxWidth = 2.0 rem = 32 px * 1.5 lineHeight = 48 px + pl-6 = 48 px + 24 px = */}
            <div className="flex-shrink-0 max-h-[48px] max-w-[72px] flex items-center justify-center xborder-1 border-[magenta] pr-6">
              {logo}
            </div>

            {/* Employer, Role, When, Where */}
            <div className="flex-1 xborder-1 border-[lime]">
              <div>{renderedWorkAtEmployer}</div>
              <div>{renderedWorkAtRole}</div>
              <div>{renderedWorkAtWhenWhere}</div>

              {content}
            </div>

            


            {/* Show for mobile (xs, sm) */}
            {/* <div className="md:hidden w-5/6 sm:w-1/2 pl-6">
              <div className="h-full flex items-center">{renderedWorkAtEmployer}</div>
            </div>
            <div className="md:hidden w-full pl-6">
              {renderedWorkAtRole}
              {renderedWorkAtWhenWhere}
              {content}
            </div> */}

            {/* Show for desktop (md, lg, xl) */}
            {/* <div className="hidden md:block md:w-1/2 pl-6">
              <div>{renderedWorkAtEmployer}</div>
              <div>{renderedWorkAtRole}</div>
              {renderedWorkAtWhenWhere}
              {content}
            </div> */}

          </div>

         
        </div>

        {/* Navigation */}
        <div className="hidden md:block md:w-3/12 xborder-1 border-[blue]">
          <NavRight sections={sections} />
        </div>
                 
      </div>
    </MyContainer>
  );
}

export default { title: "Style Guide/Typography" };

export const _default = () => (
  <>
    Primary &mdash; Tiempo
    <table width="100%">
      <thead>
        <tr>
          <td width="25%">Name</td>
          <td width="25%" />
          <td width="25%" />
          <td width="25%" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Headline 1</td>
          <td>
            <span className="font-primary font-normal text-[3.375rem] leading-[5.5rem] tracking-[0.5px]">
              H1 &ndash; Regular 54
            </span>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Headline 2</td>
          <td>
            <span className="font-primary font-normal text-[2.125rem] leading-[3.5rem] tracking-[0.25px]">
              H2 &ndash; Regular 34
            </span>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Headline 3</td>
          <td>
            <span className="font-primary font-normal text-2xl leading-8">
              H3 &ndash; Regular 24
            </span>
          </td>
          <td>
            <span className="font-primary font-medium text-2xl leading-8 tracking-[0.25px]">
              H3 &ndash; Medium 24
            </span>
          </td>
          <td>
            <span className="font-primary font-semibold text-2xl leading-8">
              H3 &ndash; Semibold 24
            </span>
          </td>
        </tr>
        <tr>
          <td>Headline 4</td>
          <td>
            <span className="font-primary font-medium text-base leading-normal tracking-[0.5px]">
              H4 &ndash; Medium 16
            </span>
          </td>
          <td>
            <span className="font-primary font-semibold text-base leading-normal tracking-[0.5px]">
              H4 &ndash; Semibold
            </span>
          </td>
          <td>Tiempo Bold?</td>
        </tr>
        <tr>
          <td>Body</td>
          <td>
            <span className="font-primary font-normal text-base leading-normal tracking-[0.5px]">
              Body &ndash; Regular 16
            </span>
          </td>
          <td>
            <span className="font-primary font-semibold text-base leading-normal tracking-[0.5px]">
              Body &ndash; Semibold 16
            </span>
          </td>
        </tr>
        <tr>
          <td>Subtitle</td>
          <td>
            <span className="font-primary font-normal text-sm leading-4 tracking-[0.25px]">
              Subtitle &ndash; Regular 14
            </span>
          </td>
          <td />
          <td />
        </tr>
        {/*<tr>*/}
        {/*	<td>Button Text Button</td>*/}
        {/*	<td><Typography element="button" variant="primary" weight="regular">Button &ndash; Regular 14</Typography></td>*/}
        {/*	<td><Typography element="button" variant="primary" weight="bold">Button &ndash; Bold 14</Typography></td>*/}
        {/*	<td/>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*	<td>Button 2 (contained button)</td>*/}
        {/*	<td><Typography element="button2" variant="primary" weight="regular">Button 2 &ndash; Medium 16</Typography></td>*/}
        {/*	<td/>*/}
        {/*	<td/>*/}
        {/*</tr>*/}
        <tr>
          <td>Caption</td>
          <td>
            <span className="font-primary font-normal text-xs leading-4">
              Caption &ndash; Regular 12
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    Secondary &mdash; Apercu
    <table width="100%">
      <thead>
        <tr>
          <td width="25%">Name</td>
          <td width="25%" />
          <td width="25%" />
          <td width="25%" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Heading 3</td>
          <td>
            <span className="font-secondary font-light text-2xl leading-8 tracking-[0.5px]">
              H3 &ndash; Light 24
            </span>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Body</td>
          <td>
            <span className="font-secondary font-normal text-base leading-normal tracking-[0.5px]">
              Body &ndash; Regular 16
            </span>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Subtitle</td>
          <td>
            <span className="font-secondary font-normal text-sm leading-4 tracking-[0.25px]">
              Subtitle &ndash; Regular 14
            </span>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Caption</td>
          <td>
            <span className="font-secondary font-normal text-xs leading-4">
              Caption &ndash; Regular 12
            </span>
          </td>
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  </>
);

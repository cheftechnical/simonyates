import { Typography } from "@mui/material";
import DefaultTheme from "../ThemeProviderWrapper";

export default { title: "Style Guide/Typography" };

export const _default = () => (
  <DefaultTheme>
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
            <Typography variant="primaryH1">H1 &ndash; Regular 54</Typography>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Headline 2</td>
          <td>
            <Typography variant="primaryH2">H2 &ndash; Regular 34</Typography>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Headline 3</td>
          <td>
            <Typography variant="primaryH3">H3 &ndash; Regular 24</Typography>
          </td>
          <td>
            <Typography variant="primaryH3Medium">
              H3 &ndash; Medium 24
            </Typography>
          </td>
          <td>
            <Typography variant="primaryH3Semibold">
              H3 &ndash; Semibold 24
            </Typography>
          </td>
        </tr>
        <tr>
          <td>Headline 4</td>
          <td>
            <Typography variant="primaryH4">H4 &ndash; Medium 16</Typography>
          </td>
          <td>
            <Typography variant="primaryH4Semibold">
              H4 &ndash; Semibold
            </Typography>
          </td>
          <td>Tiempo Bold?</td>
        </tr>
        <tr>
          <td>Body</td>
          <td>
            <Typography variant="primaryBody">
              Body &ndash; Regular 16
            </Typography>
          </td>
          <td>
            <Typography variant="primaryBodySemibold">
              Body &ndash; Semibold 16
            </Typography>
          </td>
        </tr>
        <tr>
          <td>Subtitle</td>
          <td>
            <Typography variant="primarySubtitle">
              Subtitle &ndash; Regular 14
            </Typography>
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
            <Typography variant="primaryCaption">
              Caption &ndash; Regular 12
            </Typography>
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
            <Typography variant="secondaryH3">H3 &ndash; Light 24</Typography>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Body</td>
          <td>
            <Typography variant="secondaryBody">
              Body &ndash; Regular 16
            </Typography>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Subtitle</td>
          <td>
            <Typography variant="secondarySubtitle">
              Subtitle &ndash; Regular 14
            </Typography>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Caption</td>
          <td>
            <Typography variant="secondaryCaption">
              Caption &ndash; Regular 12
            </Typography>
          </td>
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  </DefaultTheme>
);

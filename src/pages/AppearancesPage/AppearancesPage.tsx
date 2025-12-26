import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import Section from "../../components/Section/Section";
import appearancesData from "./appearances.tsx";

export default function AppearancesPage() {
  const appearances = appearancesData;

  return (
    <PageWrapper title="Appearances">
      <MyContainer>
        <div className="w-full">
          <Section id="appearances">
              {/* mb-6 = 16 px (child font size)  * 1.5 (1x row separaration for related content) = 24 px */}
              {/* between each appearance, 48 px or (2x 24 px) for separation of similar but distinct items */}
              <h1 className="font-normal text-2xl leading-relaxed">
                Appearances
              </h1>

              <table className="border-gray-700 border-2 mt-6 w-full">
                <thead>
                  <tr>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-right text-gray-50 text-sm">When</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-left text-gray-50 text-sm">Host</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-left text-gray-50 text-sm">Title</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-right text-gray-50 text-sm">Where</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50 text-sm">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {appearances.map((appearance, index) => (
                    <tr key={index}>
                      <td className="border-gray-100 border-1 p-2 text-right text-sm">
                        {typeof appearance.when === "string" ? (
                          <span className="whitespace-nowrap">{appearance.when}</span>
                        ) : (
                          <div className="flex flex-col items-end gap-1">
                            <span className="whitespace-nowrap">{appearance.when.start} to</span>
                            <span className="whitespace-nowrap">{appearance.when.end}</span>
                          </div>
                        )}
                      </td>
                      <td className="border-gray-100 border-1 p-2 text-sm">{appearance.host}</td>
                      <td className="border-gray-100 border-1 p-2 text-sm">{appearance.title}</td>
                      <td className="border-gray-100 border-1 p-2 text-sm text-right">
                        <span className="whitespace-nowrap">
                          {appearance.where.city}
                          {appearance.where.state && `, ${appearance.where.state}`}
                        </span>
                        <br />
                        {appearance.where.country}
                      </td>
                      <td className="border-gray-100 border-1 p-2 text-sm text-center">
                        {(appearance.links && appearance.links.length > 0) || (appearance.downloads && appearance.downloads.length > 0) ? (
                          <div className="flex flex-col gap-1 items-center">
                            {appearance.links && appearance.links.map((link, linkIndex) => (
                              <a
                                key={`link-${linkIndex}`}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 no-underline hover:underline inline-flex items-center whitespace-nowrap"
                              >
                                {link.text}
                                {link.external && (
                                  <svg
                                    className="ml-1 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </a>
                            ))}
                            {appearance.downloads && appearance.downloads.map((download, downloadIndex) => (
                              <a
                                key={`download-${downloadIndex}`}
                                href={download.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 no-underline hover:underline inline-flex items-center whitespace-nowrap"
                              >
                                {download.label}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}

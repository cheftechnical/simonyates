import type { Metadata } from 'next';

export function workCompanyMetadata(companyName: string): Metadata {
  return {
    title: `${companyName} · Work`,
    description: `Work at ${companyName}, including roles, projects, talks, and contributions, with context about the organisation and its domain.`,
  };
}



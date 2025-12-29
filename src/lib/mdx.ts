import type { ResourceMetadata } from "./data/types";

export type ContentType = "blog" | "resources";

export interface ContentItem {
  slug: string;
  metadata: ResourceMetadata;
  content: string;
}

export async function getAllContent(type: ContentType): Promise<ContentItem[]> {
  return [];
}

export async function getContentBySlug(
  type: ContentType,
  slug: string
): Promise<ContentItem | null> {
  return null;
}

export function sortByDate(items: ContentItem[]): ContentItem[] {
  return items.sort(
    (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

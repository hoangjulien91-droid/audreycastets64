import { describe, it, expect } from "vitest";
import { generateBreadcrumbs, getBreadcrumbSchema } from "./breadcrumbs";

describe("Breadcrumbs Utility", () => {
  it("should generate root breadcrumb for empty path or /", () => {
    const crumbs = generateBreadcrumbs("/");
    expect(crumbs).toEqual([{ label: "Accueil", href: "/" }]);
  });

  it("should generate nested breadcrumbs for sub-paths", () => {
    const crumbs = generateBreadcrumbs("/bilan-de-competences");
    expect(crumbs).toHaveLength(2);
    expect(crumbs[0]?.label).toBe("Accueil");
    expect(crumbs[1]?.href).toBe("/bilan-de-competences");
  });

  it("should use custom label when provided", () => {
    const crumbs = generateBreadcrumbs("/blog/mon-article", "Mon super article");
    expect(crumbs[crumbs.length - 1]?.label).toBe("Mon super article");
  });

  it("should generate valid Schema.org BreadcrumbList", () => {
    const crumbs = generateBreadcrumbs("/contact");
    const schema = getBreadcrumbSchema(crumbs);
    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0]?.name).toBe("Accueil");
    expect(schema.itemListElement[1]?.name).toBe("Contact");
  });
});

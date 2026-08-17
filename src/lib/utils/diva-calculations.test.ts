import { describe, it, expect } from "vitest";
import { calculateDivaResults } from "./diva-calculations";
import { DivaAnswer, DivaImpactAnswer } from "@/types/diva";

describe("DIVA Calculations", () => {
  it("should return zero symptoms when empty", () => {
    const answers: DivaAnswer[] = [];
    const impactAnswers: DivaImpactAnswer[] = [];

    const result = calculateDivaResults(answers, impactAnswers);
    expect(result.inattentionScore.adult).toBe(0);
    expect(result.hyperactivityScore.adult).toBe(0);
    expect(result.totalImpactScore.adult).toBe(0);
    expect(result.globalAssessment).toBe("Aucune tendance significative détectée.");
  });

  it("should detect inattentive profile when >= 6 symptoms and >= 2 impacts", () => {
    const answers: DivaAnswer[] = [
      {
        criterionId: "A1_1",
        presentAdult: true,
        presentChild: true,
        examplesAdultChecked: [],
        examplesChildChecked: [],
      },
      {
        criterionId: "A1_2",
        presentAdult: true,
        presentChild: true,
        examplesAdultChecked: [],
        examplesChildChecked: [],
      },
      {
        criterionId: "A1_3",
        presentAdult: true,
        presentChild: true,
        examplesAdultChecked: [],
        examplesChildChecked: [],
      },
      {
        criterionId: "A1_4",
        presentAdult: true,
        presentChild: true,
        examplesAdultChecked: [],
        examplesChildChecked: [],
      },
      {
        criterionId: "A1_5",
        presentAdult: true,
        presentChild: true,
        examplesAdultChecked: [],
        examplesChildChecked: [],
      },
      {
        criterionId: "A1_6",
        presentAdult: true,
        presentChild: true,
        examplesAdultChecked: [],
        examplesChildChecked: [],
      },
    ];

    const impactAnswers: DivaImpactAnswer[] = [
      { domainId: "work", presentAdult: true, presentChild: false },
      { domainId: "social", presentAdult: true, presentChild: false },
    ];

    const result = calculateDivaResults(answers, impactAnswers);
    expect(result.inattentionScore.adult).toBe(6);
    expect(result.totalImpactScore.adult).toBe(2);
    expect(result.globalAssessment).toContain("Profil TDAH Inattentif");
  });
});

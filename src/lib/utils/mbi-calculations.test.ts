import { describe, it, expect } from "vitest";
import { calculateMBIResults } from "./mbi-calculations";
import { MBIAnswer } from "@/types/mbi";

describe("MBI Calculations", () => {
  it("should calculate low risk when all scores are 0", () => {
    const answers: MBIAnswer[] = [
      { questionId: 1, value: 0 },
      { questionId: 2, value: 0 },
      { questionId: 3, value: 0 },
    ];

    const result = calculateMBIResults(answers);
    expect(result.dimensions.SEP.level).toBe("low");
    expect(result.dimensions.SD.level).toBe("low");
    expect(result.dimensions.SAP.level).toBe("low");
    expect(result.date).toBeDefined();
  });

  it("should detect severe burnout if SEP and SD are high and SAP is low", () => {
    // 9 questions for SEP (each 4 = 36 -> high >= 30)
    // 5 questions for SD (each 3 = 15 -> high >= 12)
    // 8 questions for SAP (each 1 = 8 -> low <= 33)
    const answers: MBIAnswer[] = [
      { questionId: 1, value: 4 },
      { questionId: 2, value: 4 },
      { questionId: 3, value: 4 },
      { questionId: 6, value: 4 },
      { questionId: 8, value: 4 },
      { questionId: 13, value: 4 },
      { questionId: 14, value: 4 },
      { questionId: 16, value: 4 },
      { questionId: 20, value: 4 }, // SEP = 36 -> High
      { questionId: 5, value: 3 },
      { questionId: 10, value: 3 },
      { questionId: 11, value: 3 },
      { questionId: 15, value: 3 },
      { questionId: 22, value: 3 }, // SD = 15 -> High
      { questionId: 4, value: 1 },
      { questionId: 7, value: 1 }, // SAP = 2 -> Low
    ];

    const result = calculateMBIResults(answers);
    expect(result.dimensions.SEP.level).toBe("high");
    expect(result.dimensions.SD.level).toBe("high");
    expect(result.dimensions.SAP.level).toBe("low");
    expect(result.globalAssessment).toContain("Burnout Sévère");
  });
});

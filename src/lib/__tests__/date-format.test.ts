import {describe, expect, test} from "vitest";

import {formatDate} from "../date-format";

describe("formatDate", () => {
  test("formats date correctly", () => {
    const date = new Date("2021-09-01");
    expect(formatDate(date)).toBe("September 01, 2021");
  });

  test("formats date correctly with custom pattern", () => {
    const date = new Date("2021-09-01");
    expect(formatDate(date, "dd/MM/yyyy")).toBe("01/09/2021");
  });
});

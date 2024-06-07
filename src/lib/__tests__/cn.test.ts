import {describe, expect, test} from "vitest";

import {cn} from "../cn";

describe("cn", () => {
  test("empty", () => {
    expect(cn()).toBe("");
  });

  test("single", () => {
    expect(cn("a")).toBe("a");
  });

  test("multiple", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  test("empty strings", () => {
    expect(cn("")).toBe("");
    expect(cn("", "")).toBe("");
    expect(cn("", "", "")).toBe("");
  });

  test("empty strings with non-empty", () => {
    expect(cn("", "a")).toBe("a");
    expect(cn("a", "")).toBe("a");
    expect(cn("", "a", "")).toBe("a");
  });
});

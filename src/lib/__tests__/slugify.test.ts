import {describe, expect, test} from "vitest";

import {slugify} from "../slugify";

describe("slugify", () => {
  test("empty", () => {
    expect(slugify("")).toBe("");
  });

  test("lowercase", () => {
    expect(slugify("a")).toBe("a");
  });

  test("spaces", () => {
    expect(slugify("a b")).toBe("a-b");
  });

  test("special characters", () => {
    expect(slugify("a!b")).toBe("a-b");
  });

  test("multiple spaces", () => {
    expect(slugify("a   b")).toBe("a-b");
  });

  test("multiple special characters", () => {
    expect(slugify("a!@b")).toBe("a-b");
  });

  test("uppercase", () => {
    expect(slugify("A")).toBe("a");
  });

  test("uppercase and lowercase", () => {
    expect(slugify("A b")).toBe("a-b");
  });

  test("uppercase and special characters", () => {
    expect(slugify("A!B")).toBe("a-b");
  });

  test("uppercase and multiple spaces", () => {
    expect(slugify("A   B")).toBe("a-b");
  });

  test("uppercase and multiple special characters", () => {
    expect(slugify("A!@B")).toBe("a-b");
  });

  test("uppercase, lowercase, and special characters", () => {
    expect(slugify("A!@B")).toBe("a-b");
  });

  test("uppercase, lowercase, and multiple spaces", () => {
    expect(slugify("A   B")).toBe("a-b");
  });

  test("uppercase, lowercase, and multiple special characters", () => {
    expect(slugify("A!@B")).toBe("a-b");
  });

  test("uppercase, lowercase, special characters, and multiple spaces", () => {
    expect(slugify("A!@   B")).toBe("a-b");
  });

  test("uppercase, lowercase, special characters, and multiple special characters", () => {
    expect(slugify("A!@B")).toBe("a-b");
  });
});

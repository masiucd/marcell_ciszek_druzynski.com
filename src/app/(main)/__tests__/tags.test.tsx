import {render, screen} from "@testing-library/react";
import {expect, test} from "vitest";

import TagsPage from "../tags/page";

test("TagsPage", () => {
  render(<TagsPage />);
  expect(screen.getByRole("heading", {level: 1, name: "Tags"})).toBeDefined();
});

import {render, screen} from "@testing-library/react";
import {expect, test} from "vitest";

import BlogPage from "../blog/page";

test("BlogPage", () => {
  render(<BlogPage />);

  expect(
    screen.getByRole("heading", {level: 1, name: "My Blog"}),
  ).toBeDefined();

  let posts = screen.getAllByTestId("data-posts-list");
  // make sure there are posts
  expect(posts.length).toBeGreaterThan(0);
});

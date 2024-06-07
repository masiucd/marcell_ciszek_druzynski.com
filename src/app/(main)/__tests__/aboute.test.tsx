import {render, screen} from "@testing-library/react";
import {expect, test} from "vitest";

import AboutPage from "../about/page";

test("AboutPage", () => {
  render(<AboutPage />);
  expect(
    screen.getByRole("heading", {level: 1, name: "About me"}),
  ).toBeDefined();
  // expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
});

import {render, screen} from "@testing-library/react";
import {expect, test} from "vitest";

import AboutPage from "../about/page";

let socialHrefs = [
  "https://twitter.com/masiu_cd",
  "https://www.instagram.com/masiu_cd/",
  "https://www.threads.net/@masiu_cd",
  "https://bsky.app/profile/masiucd.bsky.social",
  "https://github.com/masiucd",
];

test("AboutPage", () => {
  render(<AboutPage />);
  expect(
    screen.getByRole("heading", {level: 1, name: "About me"}),
  ).toBeDefined();

  let links = screen.getAllByRole("link");
  for (let link of links) {
    // href is set
    expect(link.hasAttribute("href")).toBeTruthy();
    let url = link.getAttribute("href");
    // href is in socialHrefs
    expect(socialHrefs).toContain(url);
  }
});

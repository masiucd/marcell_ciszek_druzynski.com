import {describe} from "node:test";

import {render} from "@testing-library/react";
import {expect, test} from "vitest";

import {Footer} from "../footer";

describe("Footer", () => {
  test("Footer with providing props", () => {
    let year = 2024;
    let name = "Marcell Ciszek Druzynski";
    let result = render(<Footer fullYear={year} name={name} />);

    let time = result.getByRole("time");
    expect(time).toBeDefined();
    expect(time.textContent).toBe(year.toString());
    expect(result.getByText(name)).toBeDefined();

    // Rerender without new props
    result.rerender(<Footer />);
    time = result.getByRole("time");
    expect(time).toBeDefined();
    expect(time.textContent).toBe(year.toString());
    expect(result.getByText(name)).toBeDefined();

    // Rerender with new props
    year = 2025;
    name = "John Doe";
    result.rerender(<Footer fullYear={year} name={name} />);

    time = result.getByRole("time");
    expect(time).toBeDefined();
    expect(time.textContent).toBe(year.toString());
    expect(result.getByText(name)).toBeDefined();
  });
});

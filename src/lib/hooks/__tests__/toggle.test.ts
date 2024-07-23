import {act, renderHook} from "@testing-library/react";
import {describe, expect, test} from "vitest";

import {useToggle} from "../toggle";

describe("useToggle", () => {
  test("Initial state is false", () => {
    let {result} = renderHook(() => useToggle(false));

    expect(result.current[0]).toBe(false);
    // toggle is a function that toggles the state
    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(true);
  });

  test("Initial state is true", () => {
    let {result} = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
    // toggle is a function that toggles the state
    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(false);
  });

  test("on", () => {
    let {result} = renderHook(() => useToggle(false));

    expect(result.current[0]).toBe(false);
    // on is a function that sets the state to true
    act(() => result.current[1].on());
    expect(result.current[0]).toBe(true);
  });

  test("off", () => {
    let {result} = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
    // off is a function that sets the state to false
    act(() => result.current[1].off());
    expect(result.current[0]).toBe(false);
  });

  test("reset", () => {
    let {result} = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
    // reset is a function that sets the state to the initial state
    act(() => result.current[1].reset());
    expect(result.current[0]).toBe(true);
  });
});

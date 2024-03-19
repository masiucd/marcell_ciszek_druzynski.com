import {useMemo, useState} from "react";

export function useToggle(initialState: boolean) {
  let [state, setState] = useState(initialState);
  return [
    state,
    useMemo(() => {
      return {
        on: () => setState(true),
        off: () => setState(false),
        toggle: () => setState((state) => !state),
        reset: () => setState(initialState),
      };
    }, [initialState]),
  ] as const;
}

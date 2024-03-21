"use client";
import Typewriter from "typewriter-effect";

export function TypeIt({strings}: {strings: string[]}) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

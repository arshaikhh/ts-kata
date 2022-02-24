import robotTracker from "./robot-kata";

test("check if robot reaches direction", () => {
  expect(robotTracker(["s", "e", "e", "n", "n", "e", "n"])).toBe(true);
  expect(
    robotTracker(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"])
  ).toBe(false);
  expect(
    robotTracker([
      "n",
      "s",
      "n",
      "n",
      "e",
      "n",
      "w",
      "w",
      "s",
      "w",
      "w",
      "w",
      "n",
    ])
  ).toBe(true);
});

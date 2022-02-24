import rotateString from "./rotate-string";
test("check rotated string with positive k", () => {
  expect(rotateString("Abdulmynameis", 5)).toBe("mynameisAbdul");
  expect(rotateString("Brothisisnotfair", 3)).toBe("thisisnotfairBro");
});

test("check rotated string with negative k", () => {
  expect(rotateString("Abdulmynameis", -2)).toBe("isAbdulmyname");
  expect(rotateString("thisisnotfairBro", -3)).toBe("Brothisisnotfair");
});

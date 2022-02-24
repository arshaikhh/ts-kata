import maxListofList from "./maximum-of-listoflist";

test("return maximum of each list as a list",() => {
  expect(
    maxListofList([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ])
  ).toStrictEqual([3, 3, 3]);
  expect(
    maxListofList([
      [10, 15, 5],
      [1, 2, 3],
      [7, 2, 3],
    ])
  ).toStrictEqual([15, 3, 7]);
});


import paranthesisValidate from "./paranthesis-validate";

test("paranthesis checking", () => {
  expect(paranthesisValidate("{[]()}")).toBe(true);
  expect(paranthesisValidate("{[(])}")).toBe(false);
  expect(paranthesisValidate("{[}")).toBe(false);
});

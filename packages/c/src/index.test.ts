import char from "./";
const expected = "c";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});

import char from "./";
const expected = "j";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});

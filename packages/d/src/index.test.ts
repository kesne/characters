import char from "./";
const expected = "d";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});

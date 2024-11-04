import { sum } from "../components/sum";

test("test if sum is coorect", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});

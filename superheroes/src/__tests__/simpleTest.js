const summ = (a, b) => a + b;

describe("simple test", () => {
  test("simple test", () => {
    expect(summ(5, 5)).toBe(10);
  });
});

const summ = (a, b) => a + b;

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

describe("simple test", () => {
  test("simple test", () => {
    expect(summ(5, 5)).toBe(10);
  });
	
});

// import { fibonacci } from "..";
const { fibonacci } = require("..");

describe("fibonacci", () => {
  test("вызов с аргументом любого типа кроме числового вернет ноль", () => {
    const memo = {};
    expect(fibonacci("0", memo)).toBe(0);
    expect(fibonacci(true, memo)).toBe(0);
    expect(fibonacci({}, memo)).toBe(0);
    expect(fibonacci([], memo)).toBe(0);
    expect(fibonacci(() => {}, memo)).toBe(0);
    expect(fibonacci(null, memo)).toBe(0);
    expect(fibonacci(undefined, memo)).toBe(0);
    expect(fibonacci(Symbol(0), memo)).toBe(0);
    expect(fibonacci(BigInt(10), memo)).toBe(0);
  });

  test("вызов с нулем вернет ноль", () => {
    const memo = {};
    expect(fibonacci(0, memo)).toBe(0);
  });

  test("вызов с единицей вернет единицу", () => {
    const memo = {};
    expect(fibonacci(1, memo)).toBe(1);
  });

  test("вернет результат вычисления числа Фибоначчи до указанного значения", () => {
    const memo = {};
    expect(fibonacci(6, memo)).toBe(8);
  });
});

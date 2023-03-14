const { max, min, avg, sort, median, mode } = require("./stats");

// describe 내부에 또 describe 쓰기 가능!
// toEqual 은 객체 또는 배열을 비교해야할 때 사용!

describe("stats", () => {
  it("gets maximum value", () => {
    expect(max([1, 2, 3, 4])).toBe(4);
  });
  it("gets minimum value", () => {
    expect(min([1, 2, 3, 4])).toBe(1);
  });
  it("gets average value", () => {
    expect(avg([1, 2, 3, 4, 5])).toBe(3);
  });

  describe("median", () => {
    it("sorts the array", () => {
      expect(sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
    it("gets the median for odd length", () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
    });
    it("gets the median for even length", () => {
      expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });

  describe("mode", () => {
    it("has one mode", () => {
      expect(mode([1, 2, 2, 3])).toBe(2);
    });
    it("has no mode", () => {
      expect(mode([1, 2, 3])).toBe(null);
    });
    it("has multiple mode", () => {
      expect(mode([1, 2, 2, 3, 3, 5])).toEqual([2, 3]);
    });
  });
});

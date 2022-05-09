const ExplorerService = require("../../lib/services/ExplorerService");

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Filter Explorers By Mission', () => {

      const explorers = [{mission:"node"}]

      const explorersInNode = ExplorerService.filterByMision(students);

      expect(explorersInNode.length).toBe(1)


    });
  
    test("2) Test applyValidationNumber", () => {
        const trick1 = FizzbuzzService.applyValidationNumber(1);
        const trick2 = FizzbuzzService.applyValidationNumber(3);
        const trick3 = FizzbuzzService.applyValidationNumber(5);
        const trick4 = FizzbuzzService.applyValidationNumber(15);

        expect(trick1).toBe(1);
        expect(trick2).toBe("fizz");
        expect(trick3).toBe("buzz");
        expect(trick4).toBe("fizzbuzz");
    });
});

test("1) Test apply Validation Number", () => {
    const trick1 = FizzbuzzService.applyValidationInNumber(1);
    const trick2 = FizzbuzzService.applyValidationInNumber(3);
    const trick3 = FizzbuzzService.applyValidationInNumber(5);
    const trick4 = FizzbuzzService.applyValidationInNumber(15);

    expect(trick1).toBe(1);
    expect(trick2).toBe("FIZZ");
    expect(trick3).toBe("BUZZ");
    expect(trick4).toBe("FIZZBUZZ");
});
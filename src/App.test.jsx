import { parse, match, toNormalised } from 'postcode';


const postcodeLookup = {
  // Salford Postcodes
  M17: "Salford",
  M27: "Salford",
  M28: "Salford",
  M29: "Salford",
  M3: "Salford",
  M30: "Salford",
  M38: "Salford",
  M44: "Salford",
  M5: "Salford",
  M50: "Salford",
  M6: "Salford",
  M60: "Salford",
  M7: "Salford",
  M8: "Salford",
  M9: "Salford",
  M40: "Salford",

  // Hoot Postcodes
  BL0: "Hoot",
  BL1: "Hoot",
  BL2: "Hoot",
  BL3: "Hoot",
  BL4: "Hoot",
  BL5: "Hoot",
  BL6: "Hoot",
  BL7: "Hoot",
  BL8: "Hoot",
  BL9: "Hoot",
  M25: "Hoot",
  M26: "Hoot",
  M45: "Hoot",

  // South Manchester Postcodes
  M1: "South Manchester",
  M2: "South Manchester",
  M4: "South Manchester",
  M11: "South Manchester",
  M12: "South Manchester",
  M13: "South Manchester",
  M14: "South Manchester",
  M15: "South Manchester",
  M16: "South Manchester",
  M18: "South Manchester",
  M19: "South Manchester",
  M20: "South Manchester",
  M21: "South Manchester",
  M22: "South Manchester",
  M23: "South Manchester",
  M31: "South Manchester",
  M32: "South Manchester",
  M33: "South Manchester",
  M41: "South Manchester",
  SK4: "South Manchester",
  M90: "South Manchester",
  WA13: "South Manchester",
  WA14: "South Manchester",
  WA15: "South Manchester",

  // CashBox Postcodes
  M34: "CashBox",
  M43: "CashBox",
  SK13: "CashBox",
  SK14: "CashBox",
  SK15: "CashBox",
  SK16: "CashBox",
  OL5: "CashBox",
  OL6: "CashBox",
  OL7: "CashBox",

  // Oldham Postcodes
  OL1: "Oldham",
  OL2: "Oldham",
  OL3: "Oldham",
  OL4: "Oldham",
  OL8: "Oldham",
  OL9: "Oldham",
  M35: "Oldham",

  // Unify Postcodes
  PR1: "Unify",
  PR4: "Unify",
  PR5: "Unify",
  PR6: "Unify",
  PR7: "Unify",
  PR25: "Unify",
  PR26: "Unify",
  L40: "Unify",
  BL5: "Unify",
  BL6: "Unify",
  WN1: "Unify",
  WN2: "Unify",
  WN3: "Unify",
  WN4: "Unify",
  WN5: "Unify",
  WN6: "Unify",
  WN7: "Unify",
  WN8: "Unify",
  WA2: "Unify",
  WA3: "Unify",
  WA4: "Unify",
  WA5: "Unify",
  WA8: "Unify",
  WA9: "Unify",
  WA11: "Unify",
  WA12: "Unify",
  WA13: "Unify",
  M46: "Unify",
  M29: "Unify",
  M38: "Unify",
  M28: "Unify",
  M30: "Unify",
  M44: "Unify",

  // Manchester Postcodes
  OL11: "Manchester",
  OL12: "Manchester",
  OL16: "Manchester",

  // Stockport Postcodes
  SK1: "Stockport",
  SK2: "Stockport",
  SK3: "Stockport",
  SK5: "Stockport",
  SK6: "Stockport",
  SK7: "Stockport",
  SK8: "Stockport",
  SK9: "Stockport",
  SK10: "Stockport",
  SK11: "Stockport",
  SK12: "Stockport",
  SK17: "Stockport",
  SK22: "Stockport",
  SK23: "Stockport",
};

function extractPostcode(input) {
  const parsedInput = parse(input);
  return parsedInput ? parsedInput.district.toUpperCase() : null;
}

// Test suite
describe("Postcode Extraction and Mapping Tests", () => {
  describe("Valid postcode inputs", () => {
    Object.entries(postcodeLookup).forEach(([district, expectedArea]) => {
      const testPostcodes = [
        `${district} 1AB`,
        `${district}1AB`,
        `${district.toLowerCase()} 1ab`,
        `${district.toLowerCase()}1ab`,
      ];

      testPostcodes.forEach((postcode) => {
        it(`should extract district '${district}' from input '${postcode}'`, () => {
          const result = extractPostcode(postcode);
          expect(result).not.toBeNull();
          expect(result).toEqual(district.toUpperCase());
        });

        it(`should map district '${district}' to area '${expectedArea}'`, () => {
          const districtCode = extractPostcode(postcode);
          expect(districtCode).not.toBeNull();
          const area = postcodeLookup[districtCode];
          expect(area).toEqual(expectedArea);
        });
      });
    });
  });

  describe("Invalid postcode inputs", () => {
    const invalidPostcodes = [
      "INVALID",
      "1234",
      "XYZ 123",
      "AB12 CD",
      "",
      null,
      undefined,
      "   ",
    ];

    invalidPostcodes.forEach((postcode) => {
      it(`should return null for invalid input '${postcode}'`, () => {
        const result = extractPostcode(postcode);
        expect(result).toBeNull();
      });
    });
  });

  describe("Edge cases and overlapping districts", () => {
    const edgeCasePostcodes = [
      { input: "M60 1AB", expectedDistrict: "M60", expectedArea: "Salford" },
      { input: "M6 1AB", expectedDistrict: "M6", expectedArea: "Salford" },
      { input: "M25 1AB", expectedDistrict: "M25", expectedArea: "Hoot" },
      { input: "M2 1AB", expectedDistrict: "M2", expectedArea: "South Manchester" },
      { input: "BL6 1AB", expectedDistrict: "BL6", expectedArea: "Hoot" },
    ];

    edgeCasePostcodes.forEach(({ input, expectedDistrict, expectedArea }) => {
      it(`should correctly extract and map '${expectedDistrict}' from input '${input}'`, () => {
        const result = extractPostcode(input);
        expect(result).toEqual(expectedDistrict);
        const area = postcodeLookup[result];
        expect(area).toEqual(expectedArea);
      });
    });
  });
});

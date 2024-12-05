import { parse, match, toNormalised } from 'postcode';
import postcodeLookupFile from "./postcode_lookup.json";

const postcodeLookup = postcodeLookupFile

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

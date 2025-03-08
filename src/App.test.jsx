import { parse, match, toNormalised } from "postcode";
import postcodeLookupFile from "./postcode_lookup.json";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./postcodeSearch";

function generatePostcodeVariants(postcode) {
  const upper = postcode.toUpperCase();
  const lower = postcode.toLowerCase();
  const noSpaces = postcode.replace(/\s+/g, "");
  const variants = new Set([postcode, upper, lower, noSpaces]);
  return Array.from(variants);
}

describe("Full postcode lookup tests", () => {
  // Loop through each entry in the postcode lookup data
  Object.entries(postcodeLookupFile).forEach(
    ([originalPostcode, expectedCreditUnions]) => {
      const variants = generatePostcodeVariants(originalPostcode);

      // For each variant of the postcode, ensure that the app displays the expected credit unions
      variants.forEach((variant) => {
        test(`Entering "${variant}" shows correct credit union options: ${expectedCreditUnions.join(
          ", "
        )}`, async () => {
          render(<App />);

          // Enter the postcode variant
          const inputField = screen.getByPlaceholderText(/Full Postcode/i);
          fireEvent.change(inputField, { target: { value: variant } });
          // Click the search button
          fireEvent.click(screen.getByRole("button", { name: /search/i }));

          // Wait for the results to appear
          await waitFor(() => {
            // Check that each expected credit union is displayed
            expectedCreditUnions.forEach((creditUnion) => {
              // The UI text includes "Credit Union" after the name, so we match that.
              const regex = new RegExp(`${creditUnion}`);
              expect(screen.getByText(regex)).toBeInTheDocument();
            });
          });
        });
      });
    }
  );
});

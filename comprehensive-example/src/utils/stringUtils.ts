/**
 *  Capitalizes the first letter of the given string.
 *
 * @param input - The string to capitalize.
 * @returns The capitalized string.
 */

export function capitalizeFirstLetter(input: string): string {
  return input ? input.charAt(0).toUpperCase() + input.substring(1) : "";
}

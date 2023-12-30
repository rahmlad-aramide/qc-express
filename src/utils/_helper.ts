export function formatNumberWithDenomination(number: number): string {
  const absNumber = Math.abs(number);

  if (absNumber >= 1e12) {
    return `₦${(number / 1e12).toFixed(2)}T`;
  } else if (absNumber >= 1e9) {
    return `₦${(number / 1e9).toFixed(2)}B`;
  } else if (absNumber >= 1e6) {
    return `₦${(number / 1e6).toFixed(2)}M`;
  } else {
    return `₦${number.toFixed(2)}`;
  }
}

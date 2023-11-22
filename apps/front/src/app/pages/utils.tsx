// Utility function to apply date mask
export const maskDate = (input: string): string => {
  // Basic implementation of date masking, adjust as needed
  const formattedDate = input
    .replace(/\D/g, '') // Remove non-numeric characters
    .replace(/(\d{2})(\d)/, '$1/$2') // Add a slash after the first two digits
    .replace(/(\d{2})(\d)/, '$1/$2'); // Add another slash after the next two digits

  return formattedDate;
};

// Utility function to format price as float
export const formatPrice = (input: string): string => {
  // Remove non-numeric and non-dot characters
  const cleanedInput = input.replace(/[^0-9.]/g, '');

  // Split input by dot to get integer and decimal parts
  const parts = cleanedInput.split('.');

  // Ensure there is at most one dot in the formatted result
  const formattedFloat =
    parts.length > 1 ? `${parts[0]}.${parts[1].slice(0, 2)}` : parts[0];

  return formattedFloat;
};

export const formatStringToDate = (input: string): Date => {
  const parts = input.split('/');

  const formattedDate = new Date(
    Number(parts[2]),
    Number(parts[1]) - 1,
    Number(parts[0])
  );

  return formattedDate;
}
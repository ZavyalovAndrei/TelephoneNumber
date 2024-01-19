export function standardize (phoneNumber) {
  return phoneNumber.replace(/^[8]{1}/, '+7').replace(/[^0-9+]/g, '');
}
import { standardize } from "../app.js";

test.each([
  ["8 (927) 000-00-00", "+79270000000"],
  ["+7 960 000 00 00", "+79600000000"],
  ["+86 000 000 0000", "+860000000000"],
  ["+ 39(351)778-05-54", "+393517780554"],
])(
  "%s should convert to %s",
  (phoneNumber, convertedPhoneNumber) => {
    const result = standardize(phoneNumber);
    expect(result).toEqual(convertedPhoneNumber);
  }
);

/* HTTP */

export const HTTP_CODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502
}

/* PASSWORD VALIDATORS */

export const PASS_MUST_INCLUDE_NUMBERS = true;
export const PASS_MUST_INCLUDE_LOWER_AND_UPPER_CASE = true;
export const PASS_MUST_INCLUDE_SPECIAL_CHAR = false;
export const PASS_MIN_LENGTH = 8;

/* TEXT TYPES */

export const LIGHT_TEXT = 'light';
export const MEDIUM_TEXT = 'medium';
export const BOLD_TEXT = 'bold';

/* BUTTON TYPES */

export const SECONDARY_BUTTON = 'secondary';
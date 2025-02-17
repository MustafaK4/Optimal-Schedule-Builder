import * as z from "zod";

/**
 * Every export should be a Zod object whose keys/values are
 * JSON-serializable (i.e., records/arrays of strings, numbers,
 * booleans, and nulls). Further, each must have either a default
 * or be nullable.
 */

/**
 * Using `.catch(...)` on the schema gives a default value if there 
 * is an error parsing the value in localStorage (or if the key is 
 * not present in localStorage). The default value passed to
 * `.catch(...)` must match the original schema.
 */
export const example2 = z
  .object({
    foo: z.string(),
  })
  .catch({
    foo: "defaultValue",
  });

/**
 * Using `.nullable()` is identical in behavior to `.catch(null)`, 
 * except the schema does not necessarily have to match null.
 */
export const test2 = z
  .object({
    bar: z.string(),
  })
  .nullable();

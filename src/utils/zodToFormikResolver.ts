import type { ZodSchema, ParseParams } from "zod";

/**
 * Referencia:
 * https://github.com/Glazy/formik-validator-zod/blob/main/lib/index.ts
 */

export const zodToFormikResolver =
    <T>(schema: ZodSchema<T>, params?: Partial<ParseParams>) =>
    (values: T): Partial<T> => {
        const result = schema.safeParse(values, params);

        if (result.success) return {};

        return result.error.issues.reduce((acc, curr) => {
            const key = curr.path.join(".");
            return {
                ...acc,
                [key]: curr.message,
            };
        }, {});
    };

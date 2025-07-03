import z from "zod";

export const productFormSchema = z.object({
    title: z
        .string({ message: "El título es inválido" })
        .min(1, "El título es requerido")
        .max(256, "El título es demasiado largo"),
    brand: z
        .string({ message: "La marca es inválida" })
        .min(1, "La marca es requerida")
        .max(50, "La marca es demasiado larga"),
    price: z
        .number({ message: "El precio es inválido" })
        .positive("El precio debe ser un número positivo")
        .max(10000000, "El precio es demasiado alto"),
    referencePrice: z
        .number({ message: "El precio es inválido" })
        .positive("El precio debe ser un número positivo")
        .max(10000000, "El precio es demasiado alto"),
    stock: z
        .number({ message: "El stock es inválido" })
        .int("El stock debe ser un número entero")
        .min(0, "El stock debe ser un número positivo")
        .max(9999, "El stock es demasiado alto"),
    description: z
        .string({ message: "La descripción es inválida" })
        .min(1, "La descripción es requerida")
        .max(1000, "La descripción es demasiado larga"),
});

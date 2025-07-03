import { productFormSchema } from "@/app/new-product/components/form/validations/productFormSchema";
import { InputFormik } from "@/components/pure/form/InputFormik";
import { InputTextareaFormik } from "@/components/pure/form/InputTextareaFormik";
import { zodToFormikResolver } from "@/utils/zodToFormikResolver";
import { Form, Formik } from "formik";

type ProductFormProps = {
    initialValues?: ProductFormFields;
    onSubmit: (fields: ProductFormFields) => void;
};

export type ProductFormFields = {
    title: string;
    brand: string;
    price: number;
    referencePrice: number;
    stock: number;
    description: string;
};

const defaultValues: ProductFormFields = {
    title: "",
    brand: "",
    price: 0,
    referencePrice: 0,
    stock: 0,
    description: "",
};

export const ProductForm = ({
    initialValues = defaultValues,
    onSubmit,
}: ProductFormProps) => {
    return (
        <Formik
            initialValues={initialValues}
            validate={zodToFormikResolver(productFormSchema)}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4 px-4 py-6 sm:px-6 bg-white rounded-md shadow-lg">
                    <h3 className="font-semibold text-base sm:text-xl">
                        New Product
                    </h3>

                    <InputFormik name="title" label="Título" />

                    <div className="grid grid-cols-2 gap-4">
                        <InputFormik name="brand" label="Marca" />
                        <InputFormik type="number" name="stock" label="Stock" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <InputFormik
                            type="number"
                            name="price"
                            label="Precio"
                        />
                        <InputFormik
                            type="number"
                            name="referencePrice"
                            label="Precio referencial"
                        />
                    </div>

                    <InputTextareaFormik
                        name="description"
                        label="Description"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-primary py-3 px-4 text-white rounded-md font-medium shadow-md ${
                            isSubmitting ? "cursor-not-allowed" : ""
                        }`}
                    >
                        {isSubmitting ? "Guardando..." : "Guardar"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

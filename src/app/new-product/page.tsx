"use client";

import { ProductForm } from "@/app/new-product/components/form/ProductForm";
import toast from "react-hot-toast";

const NewProductPage = () => {
    const addProductAction = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Producto creado");
    };

    return (
        <div>
            <div className="mx-auto max-w-screen-sm p-4 sm:py-6">
                <ProductForm onSubmit={addProductAction} />
            </div>
        </div>
    );
};

export default NewProductPage;

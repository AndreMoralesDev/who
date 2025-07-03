import {
    GetProductInput,
    GetProductResponse,
} from "@/api/models/products/querys/getProduct/getProductTypes";
import { API_PRODUCTS_URL } from "@/utils/constants";

export const getProduct = async ({
    productId,
}: GetProductInput): Promise<GetProductResponse> => {
    try {
        const productResponse = await fetch(
            `${API_PRODUCTS_URL}/products/${productId}`
        );

        const product =
            (await productResponse.json()) as GetProductResponse["product"];

        return {
            error: false,
            status: productResponse.status,
            product,
        };
    } catch (error) {
        // Loggear el error
        console.error(error);

        return {
            error: true,
            status: 500,
            product: null,
        };
    }
};

import {
    GetProductsInput,
    GetProductsResponse,
} from "@/api/models/products/querys/getProducts/getProductsTypes";
import { API_PRODUCTS_URL } from "@/utils/constants";

export const getProducts = async (
    input: GetProductsInput
): Promise<GetProductsResponse> => {
    try {
        const { limit, skip } = input;

        const productsResponse = await fetch(
            `${API_PRODUCTS_URL}/products?limit=${limit}&skip=${skip}`
        );

        const products = (await productsResponse.json())
            .products as GetProductsResponse["products"];

        return {
            error: false,
            status: productsResponse.status,
            products,
        };
    } catch (error) {
        // Loggear el error
        console.error(error);

        return {
            error: true,
            status: 500,
            products: [],
        };
    }
};

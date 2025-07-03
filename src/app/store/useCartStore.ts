import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

type CartStore = {
    products: ProductCartSchema[];
    addProduct: (product: ProductCartSchema) => void;
    updateProduct: (input: ProductCartSchema) => void;
    removeProduct: (input: { productId: string }) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            products: [],
            addProduct: (newProduct) => {
                // Obtenemos los productos actuales
                const { products } = get();

                const { stock, title, isAvailable } = newProduct;

                // Verificamos si el producto ya fue agregado
                const productExist = products.find(
                    ({ id }) => id === newProduct.id
                );
                if (productExist) {
                    console.log("El producto ya fue agregado");
                    toast.error(`El producto ${title} ya existe en tu carrito`);
                    return;
                }

                // Verificamos que el producto tenga stock disponible
                if (stock === 0) {
                    toast.error(
                        `El producto ${title} no tiene stock disponible`
                    );
                    return;
                }

                // Si la cantidad solicitada es mayor al stock del producto, entonces actualizamos con el stock máximo disponible
                if (newProduct.quantity > newProduct.stock) {
                    newProduct.quantity = newProduct.stock;
                }

                // Verificamos que el producto esté disponible
                if (!isAvailable) {
                    toast.error(`El producto ${title} no está disponible`);
                    return;
                }

                // Agregamos el producto al carrito
                set({ products: [...products, newProduct] });
            },
            updateProduct: (newProduct) => {
                const { products, addProduct, removeProduct } = get();

                // Buscamos el producto solicitado
                const productIndex = products.findIndex(
                    ({ id }) => id === newProduct.id
                );

                // Si el producto no existe, lo agregamos
                if (productIndex === -1) {
                    addProduct(newProduct);
                    return;
                }

                // Eliminamos el producto si:
                //  - La cantidad es 0
                //  - El stock es 0
                //  - El producto no está disponible
                const invalidQuantity = newProduct.quantity <= 0;
                const invalidStock = newProduct.stock <= 0;
                const { isAvailable } = newProduct;

                if (invalidQuantity || invalidStock || !isAvailable) {
                    if (invalidStock) {
                        toast.error(
                            `El producto ${newProduct.title} no tiene stock disponible`
                        );
                    } else if (!isAvailable) {
                        toast.error(
                            `El producto ${newProduct.title} no está disponible`
                        );
                    }

                    removeProduct({ productId: newProduct.id });

                    return;
                }

                // Si la cantidad solicitada es mayor al stock del producto, entonces actualizamos con el stock máximo disponible
                if (newProduct.quantity > newProduct.stock) {
                    newProduct.quantity = newProduct.stock;
                }

                // Actualizamos el producto
                const productsUpdated: ProductCartSchema[] = [
                    ...products.slice(0, productIndex),
                    newProduct,
                    ...products.slice(productIndex + 1),
                ];

                // Guardamos los cambios
                set({ products: productsUpdated });
            },
            removeProduct: ({ productId }) => {
                // Obtenemos los productos actuales
                const { products } = get();

                // Eliminamos el producto
                const newProducts = products.filter(
                    (product) => product.id !== productId
                );

                // Actualizamos el carrito
                set({ products: newProducts });
            },
            clearCart: () => {
                set({ products: [] });
            },
        }),
        {
            name: "cart",
        }
    )
);

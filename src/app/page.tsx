import { ProductItemListContainer } from "@/components/container/async/ProductItemListContainer";
import { ProductItemListContainerFallback } from "@/components/fallbacks/ProductItemListContainerFallback";
import { Suspense } from "react";

export default function Home() {
    const limit = 15;
    const skip = 0;

    return (
        <main className="flex flex-col gap-4 p-4">
            <h1 className="text-center text-2xl sm:text-3xl font-bold py-4">
                Welding Helmets Online
            </h1>

            <section className="max-w-screen-xl mx-auto w-full">
                <Suspense
                    fallback={
                        <ProductItemListContainerFallback limit={limit} />
                    }
                >
                    <ProductItemListContainer limit={limit} skip={skip} />
                </Suspense>
            </section>
        </main>
    );
}

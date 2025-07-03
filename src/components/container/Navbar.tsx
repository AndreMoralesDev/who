import Link from "next/link";

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 left-0 w-full py-4 bg-white border-b-[1px] border-b-gray-300 shadow-sm">
            <nav>
                <ul className="flex gap-y-2- gap-x-6 justify-center items-center flex-wrap">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/new-product" className="hover:underline">
                            New Product
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

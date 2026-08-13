import Link from "next/link";

export default function ProductListPage() {
    return 
    <div>
        <h1>Product List</h1>
        <div>
            <Link href="/product/1">Product 1</Link>
            <Link href="/product/2">Product 2</Link>
            <Link href="/product/3">Product 3</Link>
        </div>
    </div>
}
import Link from "next/link";

export default function ProductListPage() {
    return (
        <div>
            <h1>Product List</h1>
            <div className="product-grid">
                <Link className="card" href="/product/1">Product 1</Link>
                <Link className="card" href="/product/2">Product 2</Link>
                <Link className="card" href="/product/3">Product 3</Link>
            </div>
        </div>
    );
}
import Link from "next/link";

export default function layout(children) {
    return <div>
        <header>
            <Link href = "/">Home</Link>
            <Link href = "/product">Product</Link>
            <Link href = "/about">About</Link>
            <Link href = "/contact">Contact</Link>
        </header>
        {children}
    </div>
}
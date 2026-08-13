import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <div className="container site-header">
                    <div className="brand">
                        <Link href="/">MyPortfolio</Link>
                    </div>
                    <nav>
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/product">Product</Link>
                        <Link className="nav-link" href="/about">About</Link>
                        <Link className="nav-link" href="/contact">Contact</Link>
                    </nav>
                </div>
            </header>
            <main className="container">{children}</main>
            <footer>
                <div className="container">© {new Date().getFullYear()} MyPortfolio</div>
            </footer>
        </div>
    );
}
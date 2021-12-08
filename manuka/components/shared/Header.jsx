import Link from "next/link";

const Header = () => {
    return <div className="container px-6 lg:px-0 mx-auto grid grid-cols-3 py-4 text-primary">
        <section className="flex items-center lg:hidden">
            {/* should probably be anchors */}
            <button type="button" title="Search" className="">
                <img src="/images/Icon map-search.svg" alt="Search" />
            </button>

            <button type="button" title="Cart">
                <img src="/images/shopping-cart.svg" alt="Cart" />
            </button>
        </section>
        <section>
        {/* next js should use <Image> */}
        <Link href="/" >
        <a title="Home">
            <img 
            src="/images/Manuka-South-Gold-Gradient-Logo_Horizontal-1.png" alt="Manuka">

            </img>
        </a>
        </Link>
        </section>


        <section className="flex items-center justify-end lg:block">
            {/* insert desktop menu and search */}
            <button type="button" title="Menu" className="lg:hidden">
                <img src="/images/Icon ionic-ios-menu.svg" alt="menu" />
            </button>
        </section>

    </div>;
};

export default Header;
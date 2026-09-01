import { ArrowUpRight } from 'lucide-react'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
    return (<header className="fixed left-0 top-0 z-50 w-full px-6 py-5 md:px-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between"> <a
        href="#home"
        className="text-lg font-semibold tracking-tight"
        aria-label="Amarnath K S - Home"
    >
        AKS </a>
        <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                    {item.label}
                </a>
            ))}
        </div>

        <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
        >
            Let's Talk
            <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
        </a>
    </nav>
    </header>

    )
}

export default Navbar

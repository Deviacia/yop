import { Link } from 'react-router-dom'

export function AppFooter() {
  const navLinks = [
    { id: 'link-1', href: '#', label: 'Vilkår og betingelser' },
    { id: 'link-2', href: '#', label: 'Personvernerklæring' },
    { id: 'link-3', href: '#', label: 'Kontakt' },
    { id: 'link-4', href: '#', label: 'Schjødt personvern' }
  ]

  return (
    <footer className="flex flex-col gap-y-11 text-center text-xs text-gray-400 space-y-1 mb-[118px]">
      <ul className="flex flex-col gap-8">
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <Link to={navLink.href}>{navLink.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center space-x-2 mt-2">
        <img src="/visa.png" alt="Visa" className="h-4" />
        <img src="/mastercard.png" alt="Mastercard" className="h-4" />
        <img src="/vipps.png" alt="Vipps" className="h-4" />
        <img src="/applepay.png" alt="Apple Pay" className="h-4" />
      </div>

      <p className="mt-2">
        © {new Date().getFullYear()} Myluck by Gymnation AS
      </p>
    </footer>
  )
}

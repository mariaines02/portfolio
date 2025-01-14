import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: '' },
  { label: 'LinkedIn', href: '' },
  { label: 'Twitter X', href: '' },
  { label: 'Instagram', href: '' },
];

function Footer() {
  return (
    <footer className="section bg-zinc-900 text-white">
      <div className="container">
        <hr className="border-zinc-700 my-8" />
        <div className="lg:grid lg:grid-cols-2 gap-10">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let's work together today!
            </h2>
            <ButtonPrimary
              href="mailto:mariahaddad@hotmail.fr"
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-700">
          <a href="" className="">
            <img
              src="/images/logo.png" 
              width={210}
              height={90}
              alt="Logo"
            />
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">Maria Inés</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

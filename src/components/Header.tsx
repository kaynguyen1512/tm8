import { useEffect, useState, useRef } from 'react';
import { Menu, Phone, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Chi Nhánh', href: '/chi-nhanh' },
  { label: 'Thư Viện', href: '#thu-vien' },
];

const introSubLinks = [
  { label: 'Về Chúng Tôi', href: '/gioi-thieu#ve-chung-toi' },
  { label: 'Giảng Viên', href: '/gioi-thieu#giang-vien' },
  { label: 'Thành Tích Học Viên', href: '/gioi-thieu#thanh-tich-hoc-vien' },
  { label: 'Hoạt Động Ngoại Khóa', href: '/gioi-thieu#hoat-dong-ngoai-khoa' },
];

const courseSubLinks = [
  { label: 'Khóa Luyện Thi HSK/HSKK', href: '/khoa-hoc/luyen-thi-hsk-hskk' },
  { label: 'Khóa Doanh Nghiệp', href: '/khoa-hoc/doanh-nghiep' },
  { label: 'Hán Ngữ Tích Hợp 3.0 Trực Tuyến', href: '/khoa-hoc/han-ngu-tich-hop-truc-tuyen' },
  { label: 'Khóa Tiếng Trung Trẻ Em', href: '/khoa-hoc/tre-em' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [introDropdownOpen, setIntroDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileIntroOpen, setMobileIntroOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const introTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const coursesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openIntroDropdown = () => {
    if (introTimeout.current) clearTimeout(introTimeout.current);
    setIntroDropdownOpen(true);
  };

  const closeIntroDropdown = () => {
    introTimeout.current = setTimeout(() => setIntroDropdownOpen(false), 150);
  };

  const openCoursesDropdown = () => {
    if (coursesTimeout.current) clearTimeout(coursesTimeout.current);
    setCoursesDropdownOpen(true);
  };

  const closeCoursesDropdown = () => {
    coursesTimeout.current = setTimeout(() => setCoursesDropdownOpen(false), 150);
  };

  const scrollToTop = () => {
    const path = window.location.pathname;
    if (path !== '/' && !path.startsWith('/#')) {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-brand-red/95 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="px-4 py-3 sm:px-8 sm:py-4 lg:px-16">
        <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo — clickable to scroll to top on all screen sizes */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex min-w-0 items-center gap-2 justify-self-start rounded-md py-1 pr-2 text-left transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold sm:gap-3"
            aria-label="Về đầu trang"
          >
            <img
              src="https://res.cloudinary.com/qugyphlv/image/upload/v1789008137/logo-removebg-preview.png"
              alt="ThanhMai HSK Logo"
              className="h-9 w-9 shrink-0 object-contain drop-shadow-lg sm:h-12 sm:w-12"
            />
            <div className="flex min-w-0 flex-col leading-none">
              <span className="whitespace-nowrap font-display text-base font-bold tracking-wide text-brand-ivory sm:text-xl">
                ThanhMai HSK
              </span>
              <span className="hidden font-script text-xs italic tracking-wide text-brand-gold sm:block sm:text-sm">
                Trung tâm tiếng Trung
              </span>
            </div>
          </button>

          <nav className="hidden items-center justify-self-center gap-8 md:flex">
            {/* Giới Thiệu with dropdown */}
            <div
              className="relative"
              onMouseEnter={openIntroDropdown}
              onMouseLeave={closeIntroDropdown}
            >
              <a
                href="/gioi-thieu"
                className="group relative flex items-center gap-1 font-sans text-sm text-white transition-colors duration-200 hover:text-brand-gold focus:text-brand-gold"
              >
                Giới Thiệu
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${introDropdownOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-gold transition-all duration-300 ease-out group-hover:w-full" />
              </a>

              <div
                className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                  introDropdownOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="mx-auto h-3 w-3 -translate-y-1.5 rotate-45 border-l border-t border-brand-gold bg-brand-cream" />
                <div className="relative -mt-1.5 w-56 rounded-lg border border-brand-gold bg-brand-cream py-2 shadow-xl shadow-black/20">
                  {introSubLinks.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      className="group flex items-center border-l-2 border-transparent px-4 py-2.5 font-sans text-sm text-brand-red transition-all duration-200 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold-deep"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Khóa Học — dropdown only, no direct navigation */}
            <div
              className="relative"
              onMouseEnter={openCoursesDropdown}
              onMouseLeave={closeCoursesDropdown}
            >
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="group relative flex cursor-pointer items-center gap-1 font-sans text-sm text-white transition-colors duration-200 hover:text-brand-gold focus:text-brand-gold"
                aria-haspopup="true"
                aria-expanded={coursesDropdownOpen}
              >
                Khóa Học
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-gold transition-all duration-300 ease-out group-hover:w-full" />
              </button>

              <div
                className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                  coursesDropdownOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="mx-auto h-3 w-3 -translate-y-1.5 rotate-45 border-l border-t border-brand-gold bg-brand-cream" />
                <div className="relative -mt-1.5 w-64 rounded-lg border border-brand-gold bg-brand-cream py-2 shadow-xl shadow-black/20">
                  {courseSubLinks.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      className="group flex items-center border-l-2 border-transparent px-4 py-2.5 font-sans text-sm text-brand-red transition-all duration-200 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold-deep"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-sans text-sm text-white transition-colors duration-200 hover:text-brand-gold focus:text-brand-gold"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-gold transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center justify-self-end gap-4 md:flex">
            <a
              href="tel:0398519485"
              className="flex items-center gap-2 font-sans text-sm text-white transition-colors duration-200 hover:text-brand-gold focus:text-brand-gold"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">0398519485</span>
            </a>
            <a
              href="https://zalo.me/0398519485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-brand-gold px-5 py-2.5 font-sans text-sm font-semibold text-brand-brown shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-deep hover:text-white"
            >
              Học Thử Miễn Phí
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-3 md:hidden">
            <a
              href="tel:0398519485"
              className="flex items-center gap-1.5 font-sans text-[11px] font-medium text-white transition-colors hover:text-brand-gold focus:text-brand-gold sm:text-xs"
              aria-label="Gọi 0398519485"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span>0398519485</span>
            </a>
            <button
              type="button"
              className="rounded-md p-1 text-brand-gold transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/50 px-6 py-4 backdrop-blur-md animate-fade-in md:hidden">
            {/* Giới Thiệu accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileIntroOpen(!mobileIntroOpen)}
                className="flex w-full items-center justify-between border-b border-white/5 py-2.5 font-sans text-sm text-white transition-colors duration-200 hover:text-brand-gold focus:text-brand-gold"
                aria-expanded={mobileIntroOpen}
              >
                Giới Thiệu
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${mobileIntroOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileIntroOpen && (
                <div className="flex flex-col gap-0.5 pb-1 pl-4">
                  {introSubLinks.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className="border-b border-white/5 py-2 font-sans text-sm text-white/80 transition-colors duration-200 last:border-0 hover:text-brand-gold focus:text-brand-gold"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Khóa Học accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="flex w-full items-center justify-between border-b border-white/5 py-2.5 font-sans text-sm text-white transition-colors duration-200 hover:text-brand-gold focus:text-brand-gold"
                aria-expanded={mobileCoursesOpen}
              >
                Khóa Học
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileCoursesOpen && (
                <div className="flex flex-col gap-0.5 pb-1 pl-4">
                  {courseSubLinks.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className="border-b border-white/5 py-2 font-sans text-sm text-white/80 transition-colors duration-200 last:border-0 hover:text-brand-gold focus:text-brand-gold"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-2.5 font-sans text-sm text-white transition-colors duration-200 last:border-0 hover:text-brand-gold focus:text-brand-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://zalo.me/0398519485"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-brand-gold px-5 py-2.5 text-center font-sans text-sm font-semibold text-brand-brown transition-all duration-300 hover:bg-brand-gold-deep hover:text-white"
            >
              Học Thử Miễn Phí
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

import { useMemo, useRef, useState } from 'react';
import { ChevronDown, Mail, MapPin, MessageCircle, Phone, Search } from 'lucide-react';
import Header from '@/components/Header';
import Medallion from '@/components/Medallion';
import CtaSection from '@/components/CtaSection';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';
import Footer from '@/components/Footer';

type City = 'Hà Nội' | 'Hồ Chí Minh' | 'Bắc Ninh' | 'Thái Bình';

type Branch = {
  id: string;
  city: City;
  district: string;
  name: string;
  address: string;
  phone: string;
  mapEmbedUrl: string;
};

const branches: Branch[] = [
  {
    id: 'hai-ba-trung',
    city: 'Hà Nội',
    district: 'Hai Bà Trưng',
    name: 'Cơ Sở Hai Bà Trưng',
    address: 'Số 166 Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội',
    phone: '036 258 1166',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.71200739984!2d105.84552000000001!3d20.995523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad4b2f8e5d49%3A0xe34688a5b3184146!2zVHJ1bmcgdMOibSB0aeG6v25nIFRydW5nIFRoYW5obWFpaHNrIGPGoSBz4bufIEhhaSBCw6AgVHLGsG5n!5e0!3m2!1svi!2sus!4v1790385706738!5m2!1svi!2sus',
  },
  {
    id: 'ha-dong',
    city: 'Hà Nội',
    district: 'Hà Đông',
    name: 'Cơ Sở Hà Đông',
    address: 'Số 139K Chiến Thắng, Hà Đông',
    phone: '1900 633 018',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3725.3051416719886!2d105.795333!3d20.980402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc50cce879b%3A0x200a96200675ef4f!2zMTM5SyBDaGnhur9uIFRo4bqvbmcsIFRoYW5oIExp4buHdCwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1790385730762!5m2!1svi!2sus',
  },
  {
    id: 'quan-1',
    city: 'Hồ Chí Minh',
    district: 'Quận 1',
    name: 'Cơ Sở Quận 1',
    address: '345/84 Trần Hưng Đạo, Phường Cầu Kho, Quận 1, TP.HCM',
    phone: '028.668.19261',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.65457503921!2d106.689742!3d10.760385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b4bdac54ed%3A0xe4f9ac41a2c37200!2zVHJ1bmcgdMOibSB0aeG6v25nIFRydW5nIFRoYW5obWFpaHNrIGPGoSBz4bufIFF14bqtbiAx!5e0!3m2!1svi!2sus!4v1790385763323!5m2!1svi!2sus',
  },
  {
    id: 'tan-binh',
    city: 'Hồ Chí Minh',
    district: 'Tân Bình',
    name: 'Cơ Sở Tân Bình',
    address: '67 Nguyễn Thái Bình, Phường 4, Quận Tân Bình, TP.HCM',
    phone: '08.6786.2428',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.620842256218!2d106.658396!3d10.799422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fce0906ea3b%3A0x397fd84b3ff67f50!2zVHJ1bmcgdMOibSB0aeG6v25nIFRydW5nIFRoYW5obWFpaHNrIGPGoSBz4bufIFTDom4gQsOsbmg!5e0!3m2!1svi!2sus!4v1790385784602!5m2!1svi!2sus',
  },
  {
    id: 'bac-ninh-1',
    city: 'Bắc Ninh',
    district: 'Bắc Ninh',
    name: 'Cơ Sở Bắc Ninh 1',
    address: 'Tòa nhà ParkView City 125 Huyền Quang, Phường Võ Cường, Bắc Ninh',
    phone: '0372.403.848',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7441.037550507053!2d106.067227!3d21.171541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6785c9e72d3a8601%3A0x87484845e1c6c54b!2sTi%E1%BA%BFng%20Trung%20ThanhMaiHSK%20B%E1%BA%AFc%20Ninh!5e0!3m2!1svi!2sus!4v1790385815650!5m2!1svi!2sus',
  },
  {
    id: 'thai-binh-1',
    city: 'Thái Bình',
    district: 'Thái Bình',
    name: 'Cơ Sở Thái Bình 1',
    address: '114 Nguyễn Văn Năng, TP Thái Bình',
    phone: '0983.739.592',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7477.256054012394!2d106.350953!3d20.439383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fb42e8ecbc89%3A0x8d79e357d7acfd9c!2zVGnhur9uZyBUcnVuZyBUaGFuaG1haWhzayBUaMOhaSBCw6xuaA!5e0!3m2!1svi!2sus!4v1790385835266!5m2!1svi!2sus',
  },
];

const cities: Array<'Tất Cả' | City> = ['Tất Cả', 'Hà Nội', 'Hồ Chí Minh', 'Bắc Ninh', 'Thái Bình'];

function SectionHeading({ label, children, light = false }: { label: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className="text-center">
      <div className="mb-6 flex items-center justify-center gap-4" aria-hidden="true">
        <div className={`h-px w-12 bg-gradient-to-r from-transparent sm:w-20 ${light ? 'to-brand-gold/70' : 'to-brand-gold-deep/60'}`} />
        <div className="h-2.5 w-2.5 rotate-45 border border-brand-gold bg-brand-gold/20" />
        <div className={`h-px w-12 bg-gradient-to-l from-transparent sm:w-20 ${light ? 'to-brand-gold/70' : 'to-brand-gold-deep/60'}`} />
      </div>
      <p className={`mb-4 font-sans text-xs uppercase tracking-[0.3em] ${light ? 'text-brand-gold' : 'text-brand-gold-deep'}`}>{label}</p>
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-brand-ivory' : 'text-brand-red'}`}>{children}</h2>
    </div>
  );
}

function BranchHero() {
  return (
    <div className="relative">
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-red">
        <img
          src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005177/hoat-dong_01.jpg"
          alt="Hoạt động tại ThanhMaiHSK"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C0A0A]/45 via-[#3C0A0A]/65 to-[#3C0A0A]/90" />
        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-brand-gold sm:text-sm">Hệ Thống Cơ Sở</p>
          <h1 className="font-display text-4xl leading-tight text-brand-ivory sm:text-5xl lg:text-6xl">Chi Nhánh ThanhMaiHSK Toàn Quốc</h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans leading-relaxed text-white/80 sm:text-lg">Hệ thống đào tạo tiếng Trung toàn diện tại Hà Nội, TP. Hồ Chí Minh và nhiều tỉnh thành trên cả nước.</p>
        </div>
      </section>
      <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 translate-y-1/2">
        <Medallion />
      </div>
    </div>
  );
}

function ContactBar() {
  return (
    <section className="bg-brand-cream px-6 py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col divide-y divide-brand-gold/30 border-y border-brand-gold/30 sm:flex-row sm:divide-x sm:divide-y-0">
        <a href="tel:0931715889" className="flex flex-1 items-center justify-center gap-3 py-4 font-sans text-sm font-semibold text-brand-red transition-colors hover:text-brand-gold-deep sm:px-6 sm:py-2">
          <Phone className="h-5 w-5 text-brand-gold-deep" />
          <span>Hotline: 0931.715.889 – 1900.633.018</span>
        </a>
        <a href="mailto:marketing@tmedu.vn" className="flex flex-1 items-center justify-center gap-3 py-4 font-sans text-sm font-semibold text-brand-red transition-colors hover:text-brand-gold-deep sm:px-6 sm:py-2">
          <Mail className="h-5 w-5 text-brand-gold-deep" />
          <span>marketing@tmedu.vn</span>
        </a>
        <a href="https://www.facebook.com/kaynguyen1512" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-3 py-4 text-center font-sans text-sm font-semibold text-brand-red transition-colors hover:text-brand-gold-deep sm:px-6 sm:py-2">
          <MessageCircle className="h-5 w-5 shrink-0 text-brand-gold-deep" />
          <span>Fanpage: Tiếng Trung THANHMAIHSK</span>
        </a>
      </div>
    </section>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full appearance-none rounded-full border border-brand-gold/60 bg-brand-cream px-5 py-3 pr-10 font-sans text-sm font-semibold text-brand-red outline-none transition-colors focus:border-brand-gold-deep focus:ring-2 focus:ring-brand-gold/20">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gold-deep" />
    </label>
  );
}

function BranchCard({ branch, selected, onSelect }: { branch: Branch; selected: boolean; onSelect: (branch: Branch) => void }) {
  const handleSelect = () => {
    onSelect(branch);
    if (window.innerWidth < 1024) {
      document.getElementById('branch-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article onClick={handleSelect} className={`group cursor-pointer rounded-xl border p-5 transition-all duration-300 ${selected ? 'border-brand-red bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'border-brand-gold/40 bg-white/80 text-gray-700 hover:-translate-y-0.5 hover:border-brand-gold hover:shadow-lg'}`}>
      <div className="flex items-start justify-between gap-4">
        <h4 className={`font-sans text-base font-bold ${selected ? 'text-brand-gold' : 'text-brand-red'}`}>{branch.name}</h4>
        {selected && <span className="shrink-0 rounded-full border border-brand-gold/50 px-2 py-1 font-sans text-[10px] uppercase tracking-wide text-brand-gold">Đang xem</span>}
      </div>
      <div className={`mt-3 flex items-start gap-2 font-sans text-sm leading-relaxed ${selected ? 'text-white/80' : 'text-gray-600'}`}>
        <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${selected ? 'text-brand-gold' : 'text-brand-gold-deep'}`} />
        <span>{branch.address}</span>
      </div>
      <a href={`tel:${branch.phone.replace(/[^\d+]/g, '')}`} onClick={(event) => event.stopPropagation()} className={`mt-3 inline-flex items-center gap-2 font-sans text-sm font-semibold transition-colors ${selected ? 'text-white hover:text-brand-gold' : 'text-brand-red hover:text-brand-gold-deep'}`}>
        <Phone className="h-4 w-4" />
        {branch.phone}
      </a>
      <button type="button" onClick={(event) => { event.stopPropagation(); handleSelect(); }} className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-xs font-bold transition-all ${selected ? 'bg-brand-gold text-brand-brown hover:bg-brand-gold-light' : 'bg-brand-gold/15 text-brand-gold-deep hover:bg-brand-gold hover:text-brand-brown'}`}>
        <MapPin className="h-3.5 w-3.5" />
        Xem Trên Bản Đồ
      </button>
    </article>
  );
}

function BranchLocator() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);
  const [city, setCity] = useState<'Tất Cả' | City>('Tất Cả');
  const [district, setDistrict] = useState('Tất Cả');
  const [openCities, setOpenCities] = useState<Record<string, boolean>>({ 'Hà Nội': true });

  const districtOptions = useMemo(() => {
    const source = city === 'Tất Cả' ? branches : branches.filter((branch) => branch.city === city);
    return ['Tất Cả', ...Array.from(new Set(source.map((branch) => branch.district)))];
  }, [city]);

  const filteredBranches = useMemo(() => branches.filter((branch) => (city === 'Tất Cả' || branch.city === city) && (district === 'Tất Cả' || branch.district === district)), [city, district]);

  const groupedBranches = useMemo(() => cities.slice(1).map((groupCity) => ({ city: groupCity, branches: filteredBranches.filter((branch) => branch.city === groupCity) })).filter((group) => group.branches.length > 0), [filteredBranches]);

  const handleCityChange = (value: string) => {
    const nextCity = value as 'Tất Cả' | City;
    setCity(nextCity);
    setDistrict('Tất Cả');
  };

  const handleSelect = (branch: Branch) => {
    setSelectedBranch(branch);
    setOpenCities((current) => ({ ...current, [branch.city]: true }));
    requestAnimationFrame(() => mapRef.current?.classList.add('opacity-60'));
    window.setTimeout(() => mapRef.current?.classList.remove('opacity-60'), 160);
  };

  return (
    <section className="bg-brand-cream px-6 pb-20 sm:pb-28" id="chi-nhanh">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <SectionHeading label="Tìm cơ sở phù hợp">Hệ Thống Chi Nhánh</SectionHeading>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans leading-relaxed text-gray-600">Chọn thành phố và cơ sở gần bạn để xem thông tin địa chỉ, số điện thoại và vị trí trên bản đồ.</p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div id="branch-map" ref={mapRef} className="order-2 transition-opacity duration-150 lg:sticky lg:top-24 lg:order-1">
            <div className="relative h-[360px] overflow-hidden rounded-2xl border-2 border-brand-gold bg-white p-2 shadow-xl shadow-brand-red/10 sm:h-[460px] lg:h-[640px]">
              <iframe key={selectedBranch.id} src={selectedBranch.mapEmbedUrl} title={`Bản đồ ${selectedBranch.name}`} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className="rounded-xl" />
              <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-brand-gold/50 bg-brand-cream/95 px-4 py-2 font-sans text-xs font-bold text-brand-red shadow-md">{selectedBranch.name}</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-brand-gold/40 bg-white/60 p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-brand-gold"><Search className="h-4 w-4" /></span>
                <div><p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-gold-deep">Tìm kiếm</p><p className="font-display text-xl text-brand-red">Chọn cơ sở của bạn</p></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <FilterSelect label="Chọn Thành Phố" value={city} onChange={handleCityChange} options={cities} />
                <FilterSelect label="Quận/Huyện" value={district} onChange={setDistrict} options={districtOptions} />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {groupedBranches.length === 0 ? (
                <div className="rounded-xl border border-brand-gold/40 bg-white/70 p-8 text-center font-sans text-sm text-gray-600">Không tìm thấy cơ sở phù hợp.</div>
              ) : groupedBranches.map((group) => (
                <div key={group.city} className="rounded-2xl border border-brand-gold/25 bg-white/40 p-3 sm:p-4">
                  <button type="button" onClick={() => setOpenCities((current) => ({ ...current, [group.city]: !current[group.city] }))} className="flex w-full items-center justify-between px-2 py-2 text-left">
                    <h3 className="font-display text-2xl text-brand-red">{group.city}</h3>
                    <ChevronDown className={`h-5 w-5 text-brand-gold-deep transition-transform duration-300 lg:hidden ${openCities[group.city] ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`space-y-3 pt-2 ${openCities[group.city] ? 'block' : 'hidden'} lg:block`}>
                    {group.branches.map((branch) => <BranchCard key={branch.id} branch={branch} selected={selectedBranch.id === branch.id} onSelect={handleSelect} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BranchesPage() {
  return (
    <div className="relative w-full">
      <BranchHero />
      <ContactBar />
      <BranchLocator />
      <FeaturedStudentsSection enableFadeIn={false} />
      <CtaSection enableFadeIn={false} label="Gần bạn nhất" heading="Tìm Cơ Sở ThanhMaiHSK Gần Bạn Ngay Hôm Nay" paragraph="Ghé thăm cơ sở gần nhất hoặc liên hệ để được tư vấn lộ trình học phù hợp với bạn." buttonText="Đăng Ký Nhận Tư Vấn" />
      <Footer enableFadeIn={false} />
    </div>
  );
}

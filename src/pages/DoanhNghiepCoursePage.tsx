import { useEffect, useState, useCallback } from 'react';
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  CalendarClock,
  CheckCheck,
  ClipboardCheck,
  GraduationCap,
  Headphones,
  MessageCircle,
  Route,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
} from 'lucide-react';
import CourseHero from '@/components/CourseHero';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';

/* ─── Shared section heading (matches HskCoursePage pattern) ─── */
type SectionHeadingProps = { label: string; children: React.ReactNode; light?: boolean };

function SectionHeading({ label, children, light = false }: SectionHeadingProps) {
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

function CornerOrnaments() {
  return (
    <>
      <span className="absolute left-3 top-3 h-7 w-7 border-l border-t border-brand-gold/70" aria-hidden="true" />
      <span className="absolute right-3 top-3 h-7 w-7 border-r border-t border-brand-gold/70" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 h-7 w-7 border-b border-l border-brand-gold/70" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-7 w-7 border-b border-r border-brand-gold/70" aria-hidden="true" />
    </>
  );
}

function DiamondIcon({ icon: Icon }: { icon: typeof Globe }) {
  return (
    <span className="mb-5 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold-deep/70 bg-brand-cream shadow-[3px_3px_0_rgba(186,117,23,0.13)]">
      <Icon className="h-5 w-5 -rotate-45 text-brand-red" />
    </span>
  );
}

/* ─── SECTION 2: Why corporate Chinese (cream) ─── */
function WhySection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">企</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Bối cảnh">Vì Sao Cần Tiếng Trung Doanh Nghiệp?</SectionHeading>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div className="border-l-2 border-brand-gold pl-5 sm:pl-7">
            <p className="font-sans leading-relaxed text-gray-600">
              Trung Quốc là một trong những thị trường lớn nhất thế giới. Đội ngũ nhân sự sử dụng tiếng Trung thành thạo mở ra cơ hội hợp tác, mở rộng kinh doanh và tiếp cận đối tác chiến lược.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-brand-gold/15 blur-2xl" aria-hidden="true" />
            <div className="rounded-2xl border border-brand-gold/50 bg-gradient-to-br from-white to-brand-cream/70 p-8 text-center shadow-lg shadow-brand-red/5">
              <p className="font-sans text-5xl font-extrabold text-brand-red sm:text-6xl">1.4 Tỷ+</p>
              <p className="mt-3 font-sans text-sm leading-snug text-gray-600">dân số Trung Quốc<br />thị trường hợp tác tiềm năng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: 5 criteria (deep red) ─── */
const criteria = [
  { num: '01', title: 'Thương Hiệu Uy Tín', desc: 'Đơn vị đào tạo được nhiều doanh nghiệp tin chọn.' },
  { num: '02', title: 'Chương Trình Rõ Ràng', desc: 'Lộ trình học minh bạch, có mục tiêu cụ thể.' },
  { num: '03', title: 'Đội Ngũ Chất Lượng', desc: 'Giảng viên chuyên môn cao, kinh nghiệm thực chiến.' },
  { num: '04', title: 'Môi Trường Thực Tế', desc: 'Không gian học gần gũi với môi trường làm việc.' },
  { num: '05', title: 'Cam Kết Đầu Ra', desc: 'Đảm bảo kết quả học tập theo lộ trình đã thống nhất.' },
];

function CriteriaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">準</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Tiêu chí đánh giá" light>5 Tiêu Chí Chọn Đơn Vị Đào Tạo</SectionHeading>
        {/* Desktop: horizontal timeline */}
        <div className="mt-14 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" aria-hidden="true" />
            <div className="grid grid-cols-5 gap-4">
              {criteria.map((item) => (
                <div key={item.num} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold bg-brand-red">
                    <span className="font-sans text-sm font-extrabold text-brand-gold">{item.num}</span>
                  </div>
                  <h3 className="mt-5 font-sans text-sm font-bold text-brand-ivory">{item.title}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile: vertical timeline */}
        <div className="mt-10 space-y-6 md:hidden">
          {criteria.map((item) => (
            <div key={item.num} className="flex items-start gap-4">
              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-gold bg-brand-red">
                <span className="font-sans text-xs font-extrabold text-brand-gold">{item.num}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-sans text-sm font-bold text-brand-ivory">{item.title}</h3>
                <p className="mt-1 font-sans text-xs leading-relaxed text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: Standout points — bento grid (cream) ─── */
const standoutPoints = [
  { icon: GraduationCap, title: '100% GV Thạc Sĩ / Tiến Sĩ', desc: 'Đội ngũ giảng viên trình độ cao, kinh nghiệm doanh nghiệp.', featured: false },
  { icon: BookMarked, title: 'Giáo Trình Độc Quyền MSUTONG', desc: 'Đại học Phúc Đán biên soạn riêng cho ThanhMaiHSK — bám sát nhu cầu doanh nghiệp, cập nhật theo xu hướng thị trường.', featured: true },
  { icon: Headphones, title: 'Hỗ Trợ 24/7', desc: 'Giải đáp và đồng hành xuyên suốt khóa học.', featured: false },
  { icon: Route, title: 'Lộ Trình Riêng Biệt', desc: 'Thiết kế theo từng doanh nghiệp và ngành nghề.', featured: false },
  { icon: CalendarClock, title: 'Linh Hoạt Thời Gian & Địa Điểm', desc: 'Tùy biến thời lượng, địa điểm, số lượng học viên.', featured: false },
  { icon: BarChart3, title: 'Báo Cáo Minh Bạch', desc: 'Cập nhật tiến độ định kỳ cho doanh nghiệp.', featured: false },
];

function StandoutSection() {
  const featured = standoutPoints.find((p) => p.featured)!;
  const others = standoutPoints.filter((p) => !p.featured);

  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">優</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Giá trị khác biệt">Điểm Nổi Trội Tại ThanhMaiHSK</SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Featured tile — spans 2 cols, 2 rows */}
          <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-brand-gold bg-gradient-to-br from-white to-brand-cream/80 p-8 shadow-lg shadow-brand-red/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 md:row-span-2">
            <CornerOrnaments />
            <div>
              <span className="absolute right-6 top-6 rounded-full bg-brand-red px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wide text-brand-gold shadow-md">Độc quyền</span>
              <DiamondIcon icon={featured.icon} />
              <h3 className="font-display text-2xl text-brand-red sm:text-3xl">{featured.title}</h3>
              <p className="mt-4 max-w-md font-sans leading-relaxed text-gray-600">{featured.desc}</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/60 to-transparent" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-deep">Đại học Phúc Đán</span>
            </div>
          </article>
          {/* 5 smaller tiles */}
          {others.map((item, index) => (
            <article
              key={item.title}
              className={`group border border-brand-gold/40 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-deep hover:shadow-md ${
                index % 2 === 0 ? 'rounded-tr-2xl rounded-bl-2xl' : 'rounded-tl-2xl rounded-br-2xl'
              }`}
            >
              <DiamondIcon icon={item.icon} />
              <h3 className="font-sans text-sm font-bold text-brand-red">{item.title}</h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: 3 course levels — horizontal progression (deep red) ─── */
const courseLevels = [
  { name: 'Doanh Nghiệp 1', audience: 'Người mới bắt đầu', duration: '30 buổi / 60 giờ', outcome: 'Đạt HSK2 + HSKK sơ cấp' },
  { name: 'Doanh Nghiệp 2', audience: 'Đã hoàn thành cấp 1', duration: '30 buổi / 60 giờ', outcome: 'Đạt HSK3, soạn thảo email' },
  { name: 'Doanh Nghiệp Chuyên Ngành', audience: 'Theo nhu cầu doanh nghiệp', duration: 'Tùy biến', outcome: 'Tiếng Trung chuyên ngành' },
];

function LevelsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">級</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Lộ trình đào tạo" light>3 Cấp Độ Đào Tạo</SectionHeading>
        {/* Desktop: horizontal with arrows */}
        <div className="mt-14 hidden items-stretch gap-0 md:flex">
          {courseLevels.map((level, index) => (
            <div key={level.name} className="flex items-stretch">
              <article className={`relative flex-1 border border-brand-gold/70 bg-[#711818]/70 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_14px_30px_rgba(250,199,117,0.12)] ${
                index === 0 ? 'rounded-l-2xl' : index === courseLevels.length - 1 ? 'rounded-r-2xl' : ''
              }`}>
                {index === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-brand-brown">Phổ biến nhất</span>
                )}
                <h3 className="font-sans text-lg font-bold text-brand-gold">{level.name}</h3>
                <p className="mt-3 font-sans text-sm text-white/60">{level.audience}</p>
                <p className="mt-4 font-sans text-xl font-extrabold text-brand-ivory">{level.duration}</p>
                <div className="mt-5 flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-gold" aria-hidden="true" />
                  <p className="font-sans text-sm leading-relaxed text-white/80">{level.outcome}</p>
                </div>
              </article>
              {index < courseLevels.length - 1 && (
                <div className="flex items-center px-2" aria-hidden="true">
                  <ArrowRight className="h-6 w-6 text-brand-gold/60" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile: vertical with connectors */}
        <div className="mt-10 space-y-4 md:hidden">
          {courseLevels.map((level, index) => (
            <div key={level.name}>
              <article className="relative border border-brand-gold/70 bg-[#711818]/70 p-6 backdrop-blur-sm">
                {index === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-brand-brown">Phổ biến nhất</span>
                )}
                <h3 className="font-sans text-base font-bold text-brand-gold">{level.name}</h3>
                <p className="mt-2 font-sans text-xs text-white/60">{level.audience}</p>
                <p className="mt-3 font-sans text-lg font-extrabold text-brand-ivory">{level.duration}</p>
                <div className="mt-3 flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-gold" aria-hidden="true" />
                  <p className="font-sans text-sm leading-relaxed text-white/80">{level.outcome}</p>
                </div>
              </article>
              {index < courseLevels.length - 1 && (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <ArrowRight className="h-5 w-5 rotate-90 text-brand-gold/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: Partnership process — 4 steps (cream) ─── */
const processSteps = [
  { icon: MessageCircle, title: 'Trao Đổi Nhu Cầu', desc: 'Tư vấn lộ trình phù hợp.' },
  { icon: ClipboardCheck, title: 'Kiểm Tra Năng Lực', desc: 'Đánh giá trình độ đầu vào.' },
  { icon: GraduationCap, title: 'Khai Giảng', desc: 'Bắt đầu theo lộ trình đã thống nhất.' },
  { icon: CheckCheck, title: 'Đánh Giá Đầu Ra', desc: 'Kiểm tra kết quả & hỗ trợ sau khóa.' },
];

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">合</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Cách thức hợp tác">Quy Trình Hợp Tác</SectionHeading>
        {/* Desktop: horizontal with dashed line */}
        <div className="mt-14 hidden md:block">
          <div className="relative">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 border-t-2 border-dashed border-brand-gold/40" aria-hidden="true" />
            <div className="grid grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-cream shadow-md">
                    <step.icon className="h-6 w-6 text-brand-red" />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red font-sans text-[10px] font-bold text-brand-gold">{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-sans text-sm font-bold text-brand-red">{step.title}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile: vertical */}
        <div className="mt-10 space-y-5 md:hidden">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-cream shadow-md">
                <step.icon className="h-5 w-5 text-brand-red" />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red font-sans text-[9px] font-bold text-brand-gold">{index + 1}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-sans text-sm font-bold text-brand-red">{step.title}</h3>
                <p className="mt-1 font-sans text-xs leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: Partners — mixed media wall (deep red) ─── */
type PhotoTile = { url: string; caption: string; alt: string };
type TextPlate = { name: string };

const photoTiles: PhotoTile[] = [
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789276840/lop-tieng-trung-doanh-nghiep-vietnam-airlines.png', caption: 'Vietnam Airlines', alt: 'Lớp tiếng Trung doanh nghiệp Vietnam Airlines' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789276970/tieng-trung-doanh-nghiep-adflex-1-600x400.jpg', caption: 'AdFlex', alt: 'Lớp tiếng Trung doanh nghiệp AdFlex' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789276973/tieng-trung-doanh-nghiep-adflex-2-600x400.jpg', caption: 'AdFlex', alt: 'Lớp tiếng Trung doanh nghiệp AdFlex' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277007/tieng-trung-doanh-nghiep-VNGGames-1-600x400.jpg', caption: 'VNGGames', alt: 'Lớp tiếng Trung doanh nghiệp VNGGames' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277009/tieng-trung-doanh-nghiep-VNGGames-2-600x400.jpg', caption: 'VNGGames', alt: 'Lớp tiếng Trung doanh nghiệp VNGGames' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277004/tieng-trung-doanh-nghiep-hoa-phat.jpg', caption: 'Hòa Phát', alt: 'Lớp tiếng Trung doanh nghiệp Hòa Phát' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277047/tieng-trung-doanh-nghiep-western-pacific-1.jpg', caption: 'Western Pacific', alt: 'Lớp tiếng Trung doanh nghiệp Western Pacific' },
];

const textPlates: TextPlate[] = [
  { name: 'FPT' },
  { name: 'BAF' },
  { name: 'Tasco' },
  { name: 'Tổng Công ty Thăng Long' },
  { name: 'Trung Chính' },
];

function PartnersSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + photoTiles.length) % photoTiles.length));
  }, []);
  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % photoTiles.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">伴</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Đối tác tin tưởng" light>Đối Tác Doanh Nghiệp Tiêu Biểu</SectionHeading>
        <p className="mx-auto mt-5 max-w-2xl text-center font-sans leading-relaxed text-white/70">
          THANHMAIHSK vinh dự đồng hành cùng nhiều doanh nghiệp lớn tại Việt Nam trong hành trình chinh phục tiếng Trung.
        </p>

        {/* Bento/collage grid */}
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {/* Vietnam Airlines — large 2x2 */}
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="group relative col-span-2 row-span-2 overflow-hidden rounded-xl border-2 border-brand-gold/60 shadow-lg transition-all duration-300 hover:border-brand-gold hover:shadow-xl"
            aria-label="Xem ảnh Vietnam Airlines"
          >
            <img src={photoTiles[0].url} alt={photoTiles[0].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-4 left-4 font-display text-xl font-bold text-brand-gold">{photoTiles[0].caption}</span>
          </button>

          {/* AdFlex 1 */}
          <button
            type="button"
            onClick={() => setLightboxIndex(1)}
            className="group relative overflow-hidden rounded-xl border border-brand-gold/50 shadow-md transition-all duration-300 hover:border-brand-gold hover:shadow-lg"
            aria-label="Xem ảnh AdFlex"
          >
            <img src={photoTiles[1].url} alt={photoTiles[1].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-brand-gold">{photoTiles[1].caption}</span>
          </button>

          {/* VNGGames 1 */}
          <button
            type="button"
            onClick={() => setLightboxIndex(3)}
            className="group relative overflow-hidden rounded-xl border border-brand-gold/50 shadow-md transition-all duration-300 hover:border-brand-gold hover:shadow-lg"
            aria-label="Xem ảnh VNGGames"
          >
            <img src={photoTiles[3].url} alt={photoTiles[3].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-brand-gold">{photoTiles[3].caption}</span>
          </button>

          {/* AdFlex 2 */}
          <button
            type="button"
            onClick={() => setLightboxIndex(2)}
            className="group relative overflow-hidden rounded-xl border border-brand-gold/50 shadow-md transition-all duration-300 hover:border-brand-gold hover:shadow-lg"
            aria-label="Xem ảnh AdFlex"
          >
            <img src={photoTiles[2].url} alt={photoTiles[2].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-brand-gold">{photoTiles[2].caption}</span>
          </button>

          {/* VNGGames 2 */}
          <button
            type="button"
            onClick={() => setLightboxIndex(4)}
            className="group relative overflow-hidden rounded-xl border border-brand-gold/50 shadow-md transition-all duration-300 hover:border-brand-gold hover:shadow-lg"
            aria-label="Xem ảnh VNGGames"
          >
            <img src={photoTiles[4].url} alt={photoTiles[4].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-brand-gold">{photoTiles[4].caption}</span>
          </button>

          {/* Hòa Phát */}
          <button
            type="button"
            onClick={() => setLightboxIndex(5)}
            className="group relative overflow-hidden rounded-xl border border-brand-gold/50 shadow-md transition-all duration-300 hover:border-brand-gold hover:shadow-lg"
            aria-label="Xem ảnh Hòa Phát"
          >
            <img src={photoTiles[5].url} alt={photoTiles[5].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-brand-gold">{photoTiles[5].caption}</span>
          </button>

          {/* Western Pacific — wide 2x1 */}
          <button
            type="button"
            onClick={() => setLightboxIndex(6)}
            className="group relative col-span-2 overflow-hidden rounded-xl border border-brand-gold/50 shadow-md transition-all duration-300 hover:border-brand-gold hover:shadow-lg"
            aria-label="Xem ảnh Western Pacific"
          >
            <img src={photoTiles[6].url} alt={photoTiles[6].alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-brand-gold">{photoTiles[6].caption}</span>
          </button>

          {/* Text-only partner plates */}
          {textPlates.map((plate) => (
            <div
              key={plate.name}
              className="flex items-center justify-center rounded-xl border border-brand-gold/40 bg-[#711818]/60 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/70 hover:bg-[#711818]/80"
            >
              <span className="font-display text-sm font-bold text-brand-gold sm:text-base">{plate.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Ảnh đối tác doanh nghiệp phóng to"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute right-4 top-4 rounded-full p-3 text-white transition-colors hover:bg-white/15 hover:text-brand-gold sm:right-7 sm:top-7"
            aria-label="Đóng"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-brand-gold/50 p-2 text-white transition-colors hover:bg-brand-gold hover:text-brand-brown sm:left-5 sm:p-3"
            aria-label="Trước"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img
              src={photoTiles[lightboxIndex].url}
              alt={photoTiles[lightboxIndex].alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center font-display text-lg font-bold text-brand-gold">{photoTiles[lightboxIndex].caption}</figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-brand-gold/50 p-2 text-white transition-colors hover:bg-brand-gold hover:text-brand-brown sm:right-5 sm:p-3"
            aria-label="Sau"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {photoTiles.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                className={`h-2.5 rounded-full transition-all ${index === lightboxIndex ? 'w-6 bg-brand-gold' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Đến ảnh ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── PAGE ─── */
export default function DoanhNghiepCoursePage() {
  return (
    <div className="relative w-full">
      <CourseHero
        imageSrc="https://res.cloudinary.com/qugyphlv/image/upload/v1789277126/dao-tao-tieng-trung-cho-doanh-nghiep.png"
        imageAlt="Đào tạo tiếng Trung doanh nghiệp tại ThanhMaiHSK"
        label="Khóa Học"
        heading="Tiếng Trung Doanh Nghiệp"
        paragraph="Giải pháp đào tạo tiếng Trung theo lộ trình riêng, dành cho doanh nghiệp muốn mở rộng hợp tác với thị trường Trung Quốc."
        buttonText="Đăng Ký Tư Vấn Doanh Nghiệp"
      />
      <div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" />
      <WhySection />
      <CriteriaSection />
      <StandoutSection />
      <LevelsSection />
      <ProcessSection />
      <PartnersSection />
      <div className="flex items-center justify-center gap-4 bg-brand-red py-6" aria-hidden="true">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/50 sm:w-24" />
        <div className="h-3 w-3 rotate-45 border border-brand-gold/60 bg-brand-gold/20" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/50 sm:w-24" />
      </div>
      <FeaturedStudentsSection enableFadeIn={false} />
      <CtaSection
        enableFadeIn={false}
        label="Bắt đầu hợp tác cùng ThanhMaiHSK"
        heading="Sẵn Sàng Đào Tạo Tiếng Trung Cho Đội Ngũ Của Bạn?"
        paragraph="Đăng ký nhận tư vấn lộ trình đào tạo tiếng Trung doanh nghiệp phù hợp nhất với quy mô và mục tiêu của công ty bạn."
        buttonText="Đăng Ký Tư Vấn Doanh Nghiệp"
      />
      <Footer enableFadeIn={false} />
    </div>
  );
}

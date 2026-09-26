import { useEffect, useState, useCallback } from 'react';
import {
  BookOpen,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  Headphones,
  Layers,
  Lightbulb,
  Monitor,
  Route,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from 'lucide-react';
import CourseHero from '@/components/CourseHero';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';

/* ─── Shared section heading ─── */
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

function DiamondIcon({ icon: Icon }: { icon: typeof Star }) {
  return (
    <span className="mb-5 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold-deep/70 bg-brand-cream shadow-[3px_3px_0_rgba(186,117,23,0.13)]">
      <Icon className="h-5 w-5 -rotate-45 text-brand-red" />
    </span>
  );
}

/* ─── SECTION 2: Dành cho ai? (cream) ─── */
const audiencePills = [
  'Người Mới Bắt Đầu',
  'Bận Rộn, Ở Xa',
  'Phát Âm Chưa Chuẩn',
  'Muốn Học Nhanh, Cấp Tốc',
  'Phục Vụ Công Việc',
  'Du Học & Sở Thích',
];

function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">線</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Đối tượng học viên">Dành Cho Ai?</SectionHeading>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_0.9fr] md:gap-16">
          <div>
            <p className="border-l-2 border-brand-gold pl-5 font-sans leading-relaxed text-gray-600 sm:pl-7">
              Khóa học trực tuyến dành cho mọi đối tượng muốn học tiếng Trung bài bản nhưng không thể tham gia lớp Offline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {audiencePills.map((pill, index) => (
                <span
                  key={pill}
                  className={`inline-flex items-center rounded-full border border-brand-gold/50 bg-white/70 px-4 py-2 font-sans text-sm font-semibold text-brand-red transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 ${index % 2 === 0 ? 'translate-y-0' : '-translate-y-1'}`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-brand-gold/60" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl border-2 border-brand-gold bg-white p-2 shadow-2xl shadow-black/15">
              <img
                src="https://res.cloudinary.com/qugyphlv/image/upload/v1789277133/hoc-tieng-trung-truc-tuyen-cho-nguoi-moi.png"
                alt="Học tiếng Trung trực tuyến cho người mới"
                className="h-[280px] w-full rounded-lg object-cover sm:h-[340px]"
              />
            </div>
            <img
              src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
              alt="Ấn triện ThanhMaiHSK"
              className="absolute -bottom-4 -left-4 h-[64px] w-[64px] -rotate-12 object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: 6 ưu điểm — bento grid (deep red) ─── */
const advantages = [
  { icon: Clock, title: 'Tiết Kiệm Thời Gian & Chi Phí', desc: 'Không cần di chuyển, học ngay tại nhà.', featured: false },
  { icon: CalendarClock, title: 'Lịch Học Linh Hoạt', desc: 'Sắp xếp giờ học theo thời gian của bạn.', featured: false },
  { icon: Route, title: 'Lộ Trình Bài Bản', desc: 'Giảng viên giàu kinh nghiệm, giáo trình chuẩn.', featured: false },
  { icon: Users, title: 'Tương Tác Cao', desc: 'Sửa phát âm, giải đáp trực tiếp như lớp Offline.', featured: false },
  { icon: Monitor, title: 'Nền Tảng Hiện Đại', desc: 'Học qua Classin — nền tảng trực tuyến hàng đầu.', featured: true },
  { icon: Headphones, title: 'Hỗ Trợ 24/7', desc: 'Trợ giảng đồng hành xuyên suốt khóa học.', featured: false },
];

function AdvantagesSection() {
  const featured = advantages.find((a) => a.featured)!;
  const others = advantages.filter((a) => !a.featured);

  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">優</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Lợi thế học online" light>6 Ưu Điểm Học Trực Tuyến</SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Featured tile — spans 2 cols with Classin screenshot */}
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-brand-gold bg-[#711818]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(250,199,117,0.12)] md:col-span-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg border border-brand-gold/50 bg-white p-2">
                <img
                  src="https://res.cloudinary.com/qugyphlv/image/upload/v1789277130/hoc-tieng-trung-qua-classin.png"
                  alt="Học tiếng Trung qua nền tảng Classin"
                  className="h-[160px] w-full rounded object-cover sm:h-[180px]"
                />
              </div>
              <div>
                <span className="mb-4 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold/70 bg-brand-cream shadow-[3px_3px_0_rgba(250,199,117,0.13)]">
                  <featured.icon className="h-5 w-5 -rotate-45 text-brand-red" />
                </span>
                <h3 className="font-display text-2xl text-brand-ivory">{featured.title}</h3>
                <p className="mt-3 max-w-sm font-sans leading-relaxed text-white/70">{featured.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/60 to-transparent" aria-hidden="true" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">Học qua Classin</span>
                </div>
              </div>
            </div>
          </article>
          {/* 5 smaller tiles */}
          {others.map((item, index) => (
            <article
              key={item.title}
              className={`group border border-brand-gold/50 bg-[#711818]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_14px_30px_rgba(250,199,117,0.12)] ${
                index % 2 === 0 ? 'rounded-tr-2xl rounded-bl-2xl' : 'rounded-tl-2xl rounded-br-2xl'
              }`}
            >
              <span className="mb-4 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold/70 bg-brand-cream shadow-[3px_3px_0_rgba(250,199,117,0.13)]">
                <item.icon className="h-5 w-5 -rotate-45 text-brand-red" />
              </span>
              <h3 className="font-sans text-sm font-bold text-brand-ivory">{item.title}</h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-white/60">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: Các khóa học trực tuyến — card grid (cream) ─── */
const onlineCourses = [
  { code: 'TH3', name: 'Tích Hợp NEW HSK3', audience: 'Người mới bắt đầu', output: 'NEW HSK3 + HSKK Sơ Cấp', vocab: '1.000 từ vựng', vip: false },
  { code: 'TH4', name: 'Tích Hợp NEW HSK4', audience: 'Đã hoàn thành TH3 / ~700-800 từ', output: 'HSK4 + HSKK Trung Cấp', vocab: '1.500-2.000 từ vựng', vip: false },
  { code: 'TH5', name: 'Tích Hợp NEW HSK5', audience: 'Đã hoàn thành TH2/MST2 / 1.200+ từ', output: 'HSK5', vocab: '2.000-2.200 từ vựng', vip: false },
  { code: 'Luyện Thi', name: 'NEW HSK4/5/6', audience: 'Đã học hoặc đang học tương ứng', output: 'Củng cố ngữ pháp + kỹ năng làm bài', vocab: 'Theo cấp độ', vip: false },
  { code: 'Luyện Thi', name: 'HSKK Cao Cấp', audience: 'Thí sinh dự thi HSK5-6 / ~2.500 từ', output: '70+ điểm HSKK Cao Cấp', vocab: '~2.500 từ vựng', vip: false },
  { code: 'VIP', name: 'Khóa 1 Kèm 1', audience: 'Bận rộn, cần lộ trình cấp tốc riêng', output: 'Giáo trình tùy chỉnh, 1 GV : 1-3 HV', vocab: 'Theo yêu cầu', vip: true },
];

function CoursesSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">网</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Chương trình đào tạo">Các Khóa Học Trực Tuyến</SectionHeading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {onlineCourses.map((course) => (
            <article
              key={course.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                course.vip
                  ? 'border-brand-gold bg-gradient-to-br from-brand-gold to-brand-gold-deep shadow-lg'
                  : 'border-brand-gold/40 bg-white/80 shadow-sm hover:border-brand-gold-deep'
              }`}
            >
              {course.vip && (
                <span className="absolute right-0 top-0 flex items-center gap-1 bg-brand-red px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-wide text-brand-gold shadow-md">
                  <Star className="h-3 w-3" /> VIP
                </span>
              )}
              <div className={`inline-flex w-fit items-center gap-2 rounded-md border px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-wide ${
                course.vip ? 'border-brand-red/30 bg-brand-red/10 text-brand-red' : 'border-brand-gold/50 bg-brand-gold/10 text-brand-gold-deep'
              }`}>
                {course.code}
              </div>
              <h3 className={`mt-4 font-display text-xl ${course.vip ? 'text-brand-red' : 'text-brand-red'}`}>{course.name}</h3>
              <p className={`mt-2 font-sans text-sm leading-relaxed ${course.vip ? 'text-brand-brown/80' : 'text-gray-600'}`}>{course.audience}</p>
              <div className={`mt-4 border-t pt-4 ${course.vip ? 'border-brand-red/20' : 'border-brand-gold/20'}`}>
                <p className={`font-sans text-[11px] font-semibold uppercase tracking-[0.15em] ${course.vip ? 'text-brand-red/70' : 'text-brand-gold-deep'}`}>Đầu ra</p>
                <p className={`mt-1 font-sans text-sm font-bold ${course.vip ? 'text-brand-red' : 'text-brand-red'}`}>{course.output}</p>
                <p className={`mt-1 font-sans text-xs ${course.vip ? 'text-brand-brown/60' : 'text-gray-500'}`}>{course.vocab}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: Trải nghiệm lớp học online — image showcase (deep red) ─── */
const showcaseImages = [
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277136/hoc-tieng-trung-truc-tuyen-online-640x400.png', alt: 'Lớp học tiếng Trung trực tuyến sinh động', caption: 'Lớp học tương tác trực tiếp' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789276834/lop-tieng-trung-truc-tuyen.png', alt: 'Học viên học online tại ThanhMaiHSK', caption: 'Giáo viên đồng hành sát sao' },
  { url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277138/hoc-tieng-trung-truc-tuyen-tai-thanhmaihsk.png', alt: 'Nền tảng học online ThanhMaiHSK', caption: 'Nền tảng học hiện đại' },
];

function ShowcaseSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + showcaseImages.length) % showcaseImages.length));
  }, []);
  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % showcaseImages.length));
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
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">活</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Trải nghiệm thực tế" light>Không Gian Học Online Sinh Động</SectionHeading>
        <p className="mx-auto mt-5 max-w-2xl text-center font-sans leading-relaxed text-white/70">
          Dù học từ xa, học viên vẫn được tương tác trực tiếp với giảng viên và bạn học như lớp Offline.
        </p>

        <div className="mt-12 grid items-start gap-6 sm:grid-cols-12 sm:gap-8">
          <figure className="sm:col-span-5">
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border-2 border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/20 sm:translate-y-6"
              aria-label="Xem ảnh lớp học online"
            >
              <CornerOrnaments />
              <img src={showcaseImages[0].url} alt={showcaseImages[0].alt} className="h-[280px] w-full rounded-lg object-cover sm:h-[370px] transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </button>
            <figcaption className="mt-4 border-l-2 border-brand-gold pl-4 font-sans text-sm font-semibold text-brand-gold">{showcaseImages[0].caption}</figcaption>
          </figure>

          <figure className="sm:col-span-4">
            <button
              type="button"
              onClick={() => setLightboxIndex(1)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border-2 border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/20"
              aria-label="Xem ảnh học viên online"
            >
              <img src={showcaseImages[1].url} alt={showcaseImages[1].alt} className="h-[300px] w-full rounded-lg object-cover sm:h-[430px] transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </button>
            <figcaption className="mt-4 text-center font-sans text-sm font-semibold text-brand-gold">{showcaseImages[1].caption}</figcaption>
          </figure>

          <figure className="sm:col-span-3 sm:translate-y-14">
            <button
              type="button"
              onClick={() => setLightboxIndex(2)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border-2 border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/20"
              aria-label="Xem ảnh nền tảng học online"
            >
              <img src={showcaseImages[2].url} alt={showcaseImages[2].alt} className="h-[260px] w-full rounded-lg object-cover sm:h-[340px] transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </button>
            <figcaption className="mt-4 text-right font-sans text-sm font-semibold text-brand-gold">{showcaseImages[2].caption}</figcaption>
          </figure>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Ảnh lớp học online phóng to"
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
              src={showcaseImages[lightboxIndex].url}
              alt={showcaseImages[lightboxIndex].alt}
              className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center font-display text-lg font-bold text-brand-gold">{showcaseImages[lightboxIndex].caption}</figcaption>
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
            {showcaseImages.map((_, index) => (
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

/* ─── SECTION 6: Vì sao chọn ThanhMaiHSK online — stat strip (cream) ─── */
const trustSignals = [
  { icon: GraduationCap, text: '100% GV Thạc Sĩ / Tiến Sĩ' },
  { icon: BookOpen, text: 'Giáo Trình Độc Quyền' },
  { icon: Zap, text: 'Lộ Trình Thần Tốc' },
  { icon: Headphones, text: 'Trợ Giảng 24/7' },
  { icon: Sparkles, text: 'Nền Tảng Hiện Đại Nhất VN' },
];

function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">信</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Cam kết chất lượng">Vì Sao Chọn ThanhMaiHSK Online?</SectionHeading>
        <div className="mt-12">
          {/* Desktop: horizontal strip with dividers */}
          <div className="hidden items-stretch justify-center md:flex">
            {trustSignals.map((signal, index) => (
              <div key={signal.text} className="flex items-stretch">
                {index > 0 && (
                  <div className="mx-6 w-px bg-brand-gold/30" aria-hidden="true" />
                )}
                <div className="flex flex-col items-center text-center">
                  <span className="mb-4 inline-flex h-14 w-14 rotate-45 items-center justify-center border border-brand-gold-deep/70 bg-white shadow-[3px_3px_0_rgba(186,117,23,0.13)]">
                    <signal.icon className="h-6 w-6 -rotate-45 text-brand-red" />
                  </span>
                  <p className="max-w-[140px] font-sans text-sm font-bold text-brand-red">{signal.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile: wrapped grid */}
          <div className="grid grid-cols-2 gap-6 md:hidden">
            {trustSignals.map((signal) => (
              <div key={signal.text} className="flex flex-col items-center text-center">
                <span className="mb-3 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold-deep/70 bg-white shadow-[3px_3px_0_rgba(186,117,23,0.13)]">
                  <signal.icon className="h-5 w-5 -rotate-45 text-brand-red" />
                </span>
                <p className="font-sans text-xs font-bold text-brand-red">{signal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function TrucTuyenCoursePage() {
  return (
    <div className="relative w-full">
      <CourseHero
        imageSrc="https://res.cloudinary.com/qugyphlv/image/upload/v1789277138/hoc-tieng-trung-truc-tuyen-tai-thanhmaihsk.png"
        imageAlt="Học tiếng Trung trực tuyến tại ThanhMaiHSK"
        label="Khóa Học"
        heading="Hán Ngữ Tích Hợp 3.0 Trực Tuyến"
        paragraph="Học tiếng Trung online bài bản, linh hoạt mọi lúc mọi nơi — cam kết đầu ra như các lớp Offline."
        buttonText="Đăng Ký Học Thử Miễn Phí"
      />
      <div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" />
      <AudienceSection />
      <AdvantagesSection />
      <CoursesSection />
      <ShowcaseSection />
      <TrustSection />
      <div className="flex items-center justify-center gap-4 bg-brand-red py-6" aria-hidden="true">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/50 sm:w-24" />
        <div className="h-3 w-3 rotate-45 border border-brand-gold/60 bg-brand-gold/20" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/50 sm:w-24" />
      </div>
      <FeaturedStudentsSection enableFadeIn={false} />
      <CtaSection
        enableFadeIn={false}
        label="Học mọi lúc, mọi nơi"
        heading="Sẵn Sàng Chinh Phục Tiếng Trung Ngay Tại Nhà?"
        paragraph="Đăng ký học thử miễn phí khóa Hán Ngữ Tích Hợp 3.0 Trực Tuyến ngay hôm nay cùng ThanhMaiHSK."
        buttonText="Đăng Ký Học Thử Miễn Phí"
      />
      <Footer enableFadeIn={false} />
    </div>
  );
}

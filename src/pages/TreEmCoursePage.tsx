import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Lightbulb,
  Music,
  Palette,
  Smile,
  Sparkles,
  Star,
  Users,
  Volume2,
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

/* ─── SECTION 2: Dành cho bé nào? (cream) ─── */
const audiencePills = ['8-12 Tuổi', 'Mới Bắt Đầu', 'Chưa Biết Pinyin', 'Muốn Củng Cố Nền Tảng', 'Phát Âm Chưa Chuẩn', 'Tiểu Học & Đầu THCS'];

function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">小</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Đối tượng học viên">Dành Cho Bé Nào?</SectionHeading>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_0.9fr] md:gap-16">
          <div>
            <p className="border-l-2 border-brand-gold pl-5 font-sans leading-relaxed text-gray-600 sm:pl-7">
              Khóa học dành cho trẻ em tiểu học và đầu THCS — từ bé mới làm quen tiếng Trung đến bé đã học nhưng cần củng cố nền tảng.
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
                src="https://res.cloudinary.com/qugyphlv/image/upload/v1789277122/tieng-trung-tre-em-1-6.webp"
                alt="Trẻ em học tiếng Trung tại ThanhMaiHSK"
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

/* ─── SECTION 3: Hành trình học của bé — 4-stage roadmap (deep red) ─── */
const stages = [
  { name: 'Làm Quen', outcome: 'Bé đọc đúng âm cơ bản và tự tin bắt chước phát âm.' },
  { name: 'Xây Nền', outcome: 'Bé ghi nhớ từ vựng và mẫu câu gần gũi.' },
  { name: 'Rèn Luyện', outcome: 'Bé kết hợp nghe — nói — đọc — viết.' },
  { name: 'Ứng Dụng', outcome: 'Bé giao tiếp tự tin theo tình huống thực tế.' },
];

function StagesSection() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">路</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Lộ trình học" light>Hành Trình Học Của Bé</SectionHeading>
        {/* Desktop: horizontal with arrows */}
        <div className="mt-14 hidden items-stretch gap-0 md:flex">
          {stages.map((stage, index) => (
            <div key={stage.name} className="flex items-stretch">
              <article className={`relative flex-1 border border-brand-gold/70 bg-[#711818]/70 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_14px_30px_rgba(250,199,117,0.12)] ${
                index === 0 ? 'rounded-l-2xl' : index === stages.length - 1 ? 'rounded-r-2xl' : ''
              }`}>
                <span className="mb-4 inline-flex h-10 w-10 rotate-45 items-center justify-center border border-brand-gold/70 bg-brand-cream">
                  <span className="font-sans text-sm font-extrabold -rotate-45 text-brand-red">{index + 1}</span>
                </span>
                <h3 className="font-sans text-lg font-bold text-brand-gold">{stage.name}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{stage.outcome}</p>
              </article>
              {index < stages.length - 1 && (
                <div className="flex items-center px-2" aria-hidden="true">
                  <ArrowRight className="h-6 w-6 text-brand-gold/60" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile: vertical with connectors */}
        <div className="mt-10 space-y-4 md:hidden">
          {stages.map((stage, index) => (
            <div key={stage.name}>
              <article className="relative border border-brand-gold/70 bg-[#711818]/70 p-6 backdrop-blur-sm">
                <span className="mb-3 inline-flex h-9 w-9 rotate-45 items-center justify-center border border-brand-gold/70 bg-brand-cream">
                  <span className="font-sans text-xs font-extrabold -rotate-45 text-brand-red">{index + 1}</span>
                </span>
                <h3 className="font-sans text-base font-bold text-brand-gold">{stage.name}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">{stage.outcome}</p>
              </article>
              {index < stages.length - 1 && (
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

/* ─── SECTION 4: Phương pháp học qua trải nghiệm — bento grid (cream) ─── */
const activities = [
  { icon: Music, title: 'Học Hát', desc: 'Ghi nhớ âm điệu và từ vựng qua bài hát.', image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277120/tieng-trung-tre-em-1-5.webp', alt: 'Trẻ em học tiếng Trung qua hát', featured: true },
  { icon: Users, title: 'Trò Chơi Tương Tác', desc: 'Giảm áp lực học, tăng phản xạ.', image: null, featured: false },
  { icon: BookOpen, title: 'Kể Chuyện', desc: 'Hiểu ngữ cảnh qua câu chuyện sinh động.', image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277117/tieng-trung-tre-em-1-4.webp', alt: 'Trẻ em nghe kể chuyện tiếng Trung', featured: false },
  { icon: Palette, title: 'Thẻ Từ & Hình Ảnh', desc: 'Ghi nhớ từ vựng qua hình ảnh trực quan.', image: null, featured: false },
  { icon: Sparkles, title: 'Hoạt Động Nhóm', desc: 'Tăng phản xạ giao tiếp cùng bạn học.', image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789277114/tieng-trung-tre-em-1-3.webp', alt: 'Trẻ em hoạt động nhóm học tiếng Trung', featured: false },
];

function ActivitiesSection() {
  const featured = activities.find((a) => a.featured)!;
  const others = activities.filter((a) => !a.featured);

  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">趣</div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading label="Cách bé học">Phương Pháp Học Qua Trải Nghiệm</SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Featured tile — photo + text, spans 2 cols */}
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-brand-gold bg-white shadow-lg shadow-brand-red/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2">
            <CornerOrnaments />
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="relative w-full overflow-hidden sm:max-w-[320px]">
                <img src={featured.image!} alt={featured.alt} className="h-[200px] w-full object-cover sm:h-full sm:rounded-l-xl" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <DiamondIcon icon={featured.icon} />
                <h3 className="font-display text-2xl text-brand-red">{featured.title}</h3>
                <p className="mt-3 max-w-sm font-sans leading-relaxed text-gray-600">{featured.desc}</p>
              </div>
            </div>
          </article>
          {/* 4 smaller tiles — mix of photo and text-only */}
          {others.map((item, index) => (
            <article
              key={item.title}
              className={`group overflow-hidden rounded-2xl border border-brand-gold/40 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-deep hover:shadow-md ${
                index % 2 === 0 ? 'rounded-tr-2xl rounded-bl-2xl' : 'rounded-tl-2xl rounded-br-2xl'
              }`}
            >
              {item.image ? (
                <>
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.alt!} className="h-[140px] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="mb-3 inline-flex h-10 w-10 rotate-45 items-center justify-center border border-brand-gold-deep/70 bg-brand-cream shadow-[3px_3px_0_rgba(186,117,23,0.13)]">
                      <item.icon className="h-4 w-4 -rotate-45 text-brand-red" />
                    </span>
                    <h3 className="font-sans text-sm font-bold text-brand-red">{item.title}</h3>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                </>
              ) : (
                <div className="p-6">
                  <DiamondIcon icon={item.icon} />
                  <h3 className="font-sans text-sm font-bold text-brand-red">{item.title}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: Giáo trình chuẩn Bộ GD (deep red) ─── */
const materials = [
  { icon: BookOpen, label: 'SGK Chính Thức' },
  { icon: CheckCircle2, label: 'Sách Bài Tập' },
  { icon: Palette, label: 'Vở Tập Viết' },
  { icon: Volume2, label: 'Audio Bài Hát' },
  { icon: Lightbulb, label: 'PPT & Game Tương Tác' },
];

function CurriculumSection() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">教</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Giáo trình" light>Chuẩn Bộ Giáo Dục</SectionHeading>
        <p className="mx-auto mt-7 max-w-3xl text-center font-sans leading-relaxed text-white/70">
          Bộ SGK Tiếng Trung Quốc (NXB Giáo Dục), biên soạn theo Thông tư 19/2021 — Bộ GD&ĐT.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {materials.map((mat, index) => (
            <div key={mat.label} className="flex items-center gap-2.5">
              {index > 0 && <div className="hidden h-8 w-px bg-brand-gold/30 sm:block" aria-hidden="true" />}
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-[#711818]/70 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-[#711818]/90">
                <mat.icon className="h-4 w-4 text-brand-gold" />
                <span className="font-sans text-sm font-semibold text-brand-ivory">{mat.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: Lộ trình & học phí — TE3/TE4 cards (cream) ─── */
const courseLevels = [
  {
    code: 'TE3',
    name: 'Tiếng Trung Trẻ Em 3',
    sessions: '35 buổi',
    hours: '1.5 giờ / buổi',
    vocab: '~110 từ vựng',
    topics: 'Phát âm, em & trường học, gia đình, thế giới quanh em',
    goal: 'Nghe & phát âm chuẩn, đọc đúng pinyin, nhận biết chữ Hán cơ bản',
    badge: 'Khởi đầu',
  },
  {
    code: 'TE4',
    name: 'Tiếng Trung Trẻ Em 4',
    sessions: '45 buổi',
    hours: '1.5 giờ / buổi',
    vocab: '~120 từ vựng',
    topics: 'Mở rộng giao tiếp, đọc hiểu, viết câu ngắn',
    goal: 'Giao tiếp mở rộng, đọc hiểu & viết câu ngắn',
    badge: 'Nâng cao',
  },
];

function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">学</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Lộ trình & học phí">Các Lớp Dành Cho Bé</SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courseLevels.map((course) => (
            <article
              key={course.code}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-gold/40 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-deep hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md border border-brand-gold/50 bg-brand-gold/10 px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-wide text-brand-gold-deep">
                  {course.code}
                </span>
                <span className="rounded-full bg-brand-red px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wide text-brand-gold shadow-md">
                  {course.badge}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-brand-red">{course.name}</h3>
              <div className="mt-5 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-2xl font-extrabold text-brand-red">{course.sessions}</span>
                  <span className="font-sans text-sm text-gray-500">· {course.hours}</span>
                </div>
                <p className="font-sans text-sm leading-relaxed text-gray-600">
                  <span className="font-bold text-brand-gold-deep">{course.vocab}</span> — {course.topics}
                </p>
              </div>
              <div className="mt-5 border-t border-brand-gold/20 pt-4">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-gold-deep">Mục tiêu</p>
                <p className="mt-1 font-sans text-sm font-bold text-brand-red">{course.goal}</p>
              </div>
            </article>
          ))}
        </div>
        {/* Fee note */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-gold/50 bg-white/80 px-6 py-3 shadow-sm">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand-gold-deep">Học phí tham khảo</span>
            <span className="font-sans text-sm font-extrabold text-brand-red">150.000₫ – 250.000₫ / buổi</span>
            <span className="font-sans text-xs text-gray-500">tùy lớp & lịch học</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: Giáo viên đồng hành cùng bé — trust strip (deep red) ─── */
const teacherTrust = [
  { icon: GraduationCap, text: '100% GV Chuyên Ngành Tiếng Trung' },
  { icon: BookOpen, text: 'Đào Tạo Phương Pháp M-Contask' },
  { icon: Volume2, text: 'Phát Âm Chuẩn Bắc Kinh' },
  { icon: HeartHandshake, text: 'Trợ Giảng HSK5/6 Đồng Hành' },
];

function TeacherSection() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">师</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="Đội ngũ giảng dạy" light>Giáo Viên Đồng Hành Cùng Bé</SectionHeading>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-brand-gold/60" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl border-2 border-brand-gold bg-white p-2 shadow-2xl shadow-black/20">
              <img
                src="https://res.cloudinary.com/qugyphlv/image/upload/v1789277050/tieng-trung-tre-em-1-1.webp"
                alt="Giáo viên tiếng Trung trẻ em tại ThanhMaiHSK"
                className="h-[300px] w-full rounded-lg object-cover sm:h-[360px]"
              />
            </div>
            <img
              src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
              alt="Ấn triện ThanhMaiHSK"
              className="absolute -bottom-4 -right-4 h-[60px] w-[60px] rotate-12 object-contain drop-shadow-lg"
            />
          </div>
          <div>
            {/* Desktop: horizontal strip with dividers */}
            <div className="hidden flex-wrap items-stretch md:flex">
              {teacherTrust.map((item, index) => (
                <div key={item.text} className="flex items-stretch">
                  {index > 0 && <div className="mx-5 w-px bg-brand-gold/30" aria-hidden="true" />}
                  <div className="flex flex-col">
                    <span className="mb-4 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold/70 bg-brand-cream shadow-[3px_3px_0_rgba(250,199,117,0.13)]">
                      <item.icon className="h-5 w-5 -rotate-45 text-brand-red" />
                    </span>
                    <p className="max-w-[150px] font-sans text-sm font-bold text-brand-ivory">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile: wrapped grid */}
            <div className="grid grid-cols-2 gap-5 md:hidden">
              {teacherTrust.map((item) => (
                <div key={item.text} className="flex flex-col">
                  <span className="mb-3 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold/70 bg-brand-cream shadow-[3px_3px_0_rgba(250,199,117,0.13)]">
                    <item.icon className="h-5 w-5 -rotate-45 text-brand-red" />
                  </span>
                  <p className="font-sans text-xs font-bold text-brand-ivory">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: Phụ huynh luôn được cập nhật (cream) ─── */
const parentUpdates = [
  { icon: CheckCircle2, title: 'Theo Dõi Tiến Độ', desc: 'Cập nhật sát sao từng bước tiến của bé.' },
  { icon: Headphones, title: 'Nhắc Nhở Bài Tập', desc: 'Trợ giảng theo sát lịch ôn luyện.' },
  { icon: Smile, title: 'Tạo Động Lực Học Tập', desc: 'Khen thưởng, khích lệ bé thường xuyên.' },
  { icon: BookOpen, title: 'Báo Cáo Phụ Huynh', desc: 'Gửi báo cáo định kỳ về tiến độ của bé.' },
];

function ParentSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">心</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading label="An tâm cho phụ huynh">Phụ Huynh Luôn Được Cập Nhật</SectionHeading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {parentUpdates.map((item, index) => (
            <article
              key={item.title}
              className={`group border border-brand-gold/40 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-deep hover:shadow-md ${
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

/* ─── PAGE ─── */
export default function TreEmCoursePage() {
  return (
    <div className="relative w-full">
      <CourseHero
        imageSrc="https://res.cloudinary.com/qugyphlv/image/upload/v1789256928/khoa-hoc-tre-em.webp"
        imageAlt="Khóa học tiếng Trung trẻ em tại ThanhMaiHSK"
        label="Khóa Học"
        heading="Tiếng Trung Trẻ Em"
        paragraph="Xây nền tiếng Trung vững chắc cho bé 8-12 tuổi qua phương pháp học sinh động, phù hợp tâm lý lứa tuổi."
        buttonText="Đăng Ký Nhận Tư Vấn"
      />
      <div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" />
      <AudienceSection />
      <StagesSection />
      <ActivitiesSection />
      <CurriculumSection />
      <PricingSection />
      <TeacherSection />
      <ParentSection />
      <div className="flex items-center justify-center gap-4 bg-brand-red py-6" aria-hidden="true">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/50 sm:w-24" />
        <div className="h-3 w-3 rotate-45 border border-brand-gold/60 bg-brand-gold/20" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/50 sm:w-24" />
      </div>
      <FeaturedStudentsSection enableFadeIn={false} />
      <CtaSection
        enableFadeIn={false}
        label="Cho con một khởi đầu vững chắc"
        heading="Sẵn Sàng Đồng Hành Cùng Con Học Tiếng Trung?"
        paragraph="Đăng ký nhận tư vấn để chọn lớp phù hợp với độ tuổi, trình độ và lịch học của bé."
        buttonText="Đăng Ký Nhận Tư Vấn"
      />
      <Footer enableFadeIn={false} />
    </div>
  );
}

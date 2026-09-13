import { useState } from 'react';
import { BookMarked, BookOpen, Briefcase, Check, ChevronDown, Globe, GraduationCap, ShieldCheck } from 'lucide-react';
import classroomImage from '@/assets/images/courses/hsk-course/image copy 3.png';
import bookImage from '@/assets/images/courses/hsk-course/image copy 4.png';
import certificateImage from '@/assets/images/courses/hsk-course/image copy 5.png';
import CourseHero from '@/components/CourseHero';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';

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
  return <>
    <span className="absolute left-3 top-3 h-7 w-7 border-l border-t border-brand-gold/70" aria-hidden="true" />
    <span className="absolute right-3 top-3 h-7 w-7 border-r border-t border-brand-gold/70" aria-hidden="true" />
    <span className="absolute bottom-3 left-3 h-7 w-7 border-b border-l border-brand-gold/70" aria-hidden="true" />
    <span className="absolute bottom-3 right-3 h-7 w-7 border-b border-r border-brand-gold/70" aria-hidden="true" />
  </>;
}

function DiamondIcon({ icon: Icon }: { icon: typeof Globe }) {
  return <span className="mb-5 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold-deep/70 bg-brand-cream shadow-[3px_3px_0_rgba(186,117,23,0.13)]"><Icon className="h-5 w-5 -rotate-45 text-brand-red" /></span>;
}

const valueProps = [
  { icon: Globe, title: 'Công Nhận Toàn Cầu', desc: 'Có giá trị quốc tế, hiệu lực 2 năm.' },
  { icon: GraduationCap, title: 'Miễn Thi Ngoại Ngữ', desc: 'Miễn thi tốt nghiệp THPT & một số học phần đại học.' },
  { icon: BookOpen, title: 'Cửa Vào Du Học TQ', desc: 'Căn cứ xét tuyển của các trường đại học Trung Quốc.' },
  { icon: Briefcase, title: 'Cơ Hội Việc Làm', desc: 'Chứng chỉ bắt buộc để làm việc tại Trung Quốc.' },
];

function HskIntroSection() {
  return <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
    <div className="pointer-events-none absolute -left-16 top-16 select-none font-display text-[15rem] leading-none text-brand-red/[0.035]" aria-hidden="true">試</div>
    <div className="relative z-10 mx-auto max-w-6xl">
      <SectionHeading label="Tìm hiểu về HSK">HSK Là Gì?</SectionHeading>
      <div className="mx-auto mt-7 max-w-3xl border-l-2 border-brand-gold pl-5 sm:pl-7"><p className="font-sans leading-relaxed text-gray-600">HSK (Hanyu Shuiping Kaoshi - 汉语水平考试) là kỳ thi khảo sát trình độ tiếng Hán dành cho người không sử dụng tiếng Hán là tiếng mẹ đẻ, được công nhận giá trị trên toàn thế giới trong vòng 2 năm kể từ ngày cấp.</p></div>
      <div className="mt-12 grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((prop, index) => <article key={prop.title} className={`group border-t border-brand-gold/50 bg-gradient-to-br from-white to-brand-cream/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-deep hover:shadow-[0_12px_28px_rgba(139,30,30,0.12)] ${index % 2 === 0 ? 'sm:translate-y-4' : 'sm:-translate-y-1'} ${index === 1 ? 'rounded-br-3xl' : index === 2 ? 'rounded-tl-3xl' : 'rounded-2xl'}`}>
          <DiamondIcon icon={prop.icon} /><h3 className="font-sans text-base font-bold text-brand-red">{prop.title}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-gray-600">{prop.desc}</p>
        </article>)}
      </div>
      <div className="mt-20 grid items-center gap-10 border-y border-brand-gold/30 py-10 md:grid-cols-[0.75fr_1.25fr]">
        <div className="relative mx-auto w-full max-w-[220px] rotate-[-2deg] border border-brand-gold/60 bg-white p-2 shadow-xl shadow-brand-red/10"><img src={certificateImage} alt="Giấy chứng nhận chứng chỉ HSK" className="block h-auto w-full" /></div>
        <div><p className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-deep">Một chứng chỉ, nhiều cánh cửa</p><h3 className="mt-3 font-display text-2xl text-brand-red sm:text-3xl">Giá Trị Được Công Nhận</h3><p className="mt-4 max-w-2xl font-sans leading-relaxed text-gray-600">Chứng chỉ HSK là căn cứ rõ ràng để học tập, làm việc và tiếp tục hành trình chuyên môn trong môi trường sử dụng tiếng Trung.</p></div>
      </div>
    </div>
  </section>;
}

const hskTiers = [
  { name: 'SƠ CẤP', levels: 'HSK 1-3', cefr: 'Tương đương A1-B1 (CEFR)' },
  { name: 'TRUNG CẤP', levels: 'HSK 4-6', cefr: 'Tương đương B2-C2 (CEFR)' },
  { name: 'CAO CẤP', levels: 'HSK 7-9', cefr: 'Trình độ chuyên sâu' },
];

function HskLevelsSection() {
  return <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
    <div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">考</div>
    <div className="relative z-10 mx-auto max-w-5xl"><SectionHeading label="Phân cấp trình độ" light>HSK Có <span className="font-sans font-extrabold">9</span> Cấp Độ</SectionHeading>
      <div className="mt-12 grid items-end gap-6 sm:grid-cols-3">{hskTiers.map((tier, index) => <article key={tier.name} className={`relative border border-brand-gold/70 bg-[#711818]/70 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_14px_30px_rgba(250,199,117,0.12)] ${index === 1 ? 'sm:-translate-y-2 sm:p-9 sm:shadow-[0_18px_36px_rgba(250,199,117,0.16)]' : ''} ${index === 0 ? 'rounded-tl-3xl rounded-br-3xl' : index === 2 ? 'rounded-tr-3xl rounded-bl-3xl' : 'rounded-2xl'}`}>
        {index === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-brand-brown">Mục tiêu phổ biến</span>}
        <h3 className="font-sans text-lg font-bold uppercase tracking-[0.15em] text-brand-gold">{tier.name}</h3><p className="mt-4 font-sans text-2xl font-extrabold text-brand-ivory sm:text-3xl">{tier.levels}</p><p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{tier.cefr}</p>
      </article>)}</div>
      <p className="mx-auto mt-10 max-w-2xl border-l-2 border-brand-gold pl-4 font-sans text-sm leading-relaxed text-white/70">Đăng ký thi ở cấp độ nào sẽ được đánh giá và cấp chứng chỉ đúng cấp độ đó.</p>
    </div>
  </section>;
}

const courseLevels = [
  { level: 'NEW HSK 2', sessions: '30 buổi', target: 'Thí sinh dự thi HSK1-2 hoặc đã học Hán ngữ tích hợp New HSK2', content: 'Củng cố ngữ pháp, luyện kỹ năng làm bài, bổ sung từ vựng trọng tâm.' },
  { level: 'NEW HSK 3', sessions: '30 buổi', target: 'Thí sinh dự thi HSK3 hoặc đã học Hán ngữ tích hợp New HSK3', content: 'Luyện đề sát cấu trúc thi, nâng cao kỹ năng Nghe - Đọc - Viết.' },
  { level: 'NEW HSK 4', sessions: '30 buổi', target: 'Thí sinh dự thi HSK4 hoặc đã học Hán ngữ tích hợp New HSK4', content: 'Chiến thuật làm bài, thực hành đề thật, mở rộng từ vựng học thuật.' },
  { level: 'NEW HSK 5', sessions: '35 buổi', target: 'Thí sinh dự thi HSK5 hoặc đã học Hán ngữ tích hợp New HSK5', content: 'Luyện tập chuyên sâu, kỹ năng viết luận, phân tích đề thi khó.' },
  { level: 'NEW HSK 6', sessions: '40 buổi', target: 'Thí sinh dự thi HSK6 hoặc đã học Hán ngữ tích hợp New HSK6', content: 'Ôn tập toàn diện, kỹ năng đọc hiểu nâng cao, viết học thuật chuyên sâu.' },
];

function CourseLevelsSection() {
  return <section className="bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}><div className="relative mx-auto max-w-6xl border border-brand-gold/40 px-4 py-10 sm:px-8 sm:py-14"><CornerOrnaments /><SectionHeading label="Chương trình đào tạo">Các Lớp Luyện Thi HSK Tại ThanhMaiHSK</SectionHeading>
    <div className="mt-12 hidden overflow-hidden border-y border-brand-gold/40 md:block"><table className="w-full"><thead><tr className="bg-brand-gold/15"><th className="px-6 py-4 text-left font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Cấp Độ</th><th className="px-6 py-4 text-left font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Đối Tượng</th><th className="px-6 py-4 text-left font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Nội Dung</th><th className="px-6 py-4 text-center font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Số Buổi</th></tr></thead><tbody>{courseLevels.map((row, index) => <tr key={row.level} className={`border-t border-brand-gold/20 transition-colors hover:bg-brand-gold/10 ${index % 2 === 0 ? 'bg-white/70' : 'bg-brand-cream'}`}><td className="whitespace-nowrap px-6 py-4 font-sans text-sm font-extrabold text-brand-red">{row.level}</td><td className="px-6 py-4 font-sans text-sm leading-relaxed text-gray-600">{row.target}</td><td className="px-6 py-4 font-sans text-sm leading-relaxed text-gray-600">{row.content}</td><td className="whitespace-nowrap px-6 py-4 text-center font-sans text-sm font-extrabold text-brand-gold-deep">{row.sessions}</td></tr>)}</tbody></table></div>
    <div className="mt-8 space-y-4 md:hidden">{courseLevels.map((row) => <article key={row.level} className="border-l-2 border-brand-gold bg-white/80 p-5 shadow-sm transition-all hover:border-brand-red hover:shadow-md"><div className="flex items-center justify-between gap-4"><h3 className="font-sans text-base font-extrabold text-brand-red">{row.level}</h3><span className="font-sans text-sm font-extrabold text-brand-gold-deep">{row.sessions}</span></div><p className="mt-3 font-sans text-sm leading-relaxed text-gray-600">{row.target}</p><p className="mt-2 font-sans text-sm leading-relaxed text-gray-500">{row.content}</p></article>)}</div><p className="mt-8 text-center font-sans text-sm text-gray-500">Học viên có thể lựa chọn hình thức học Online hoặc Offline.</p>
  </div></section>;
}

function ClassImagesSection() {
  return <section className="relative overflow-hidden bg-brand-red px-6 py-16 sm:py-20" style={{ scrollMarginTop: '88px' }}><div className="pointer-events-none absolute -left-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">課</div><div className="relative z-10 mx-auto max-w-6xl"><SectionHeading label="Không gian học tập" light>Hình Ảnh Lớp Học</SectionHeading><div className="mt-12 grid items-start gap-6 sm:grid-cols-12 sm:gap-8">
    <figure className="sm:col-span-5"><div className="relative border border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/20 sm:translate-y-6"><CornerOrnaments /><img src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005178/hoat-dong_2.jpg" alt="Lớp học sôi động tại ThanhMaiHSK" className="h-[280px] w-full object-cover sm:h-[370px]" /></div><figcaption className="mt-8 border-l-2 border-brand-gold pl-4 font-sans text-sm font-semibold text-brand-gold">Lớp học sôi động, tương tác cao</figcaption></figure>
    <figure className="sm:col-span-4"><div className="relative border border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/20"><img src={classroomImage} alt="Học viên luyện thi HSK" className="h-[300px] w-full object-cover sm:h-[430px]" /></div><figcaption className="mt-4 text-center font-sans text-sm font-semibold text-brand-gold">Tập trung vào từng kỹ năng</figcaption></figure>
    <figure className="sm:col-span-3 sm:translate-y-14"><div className="relative border border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/20"><img src="https://res.cloudinary.com/qugyphlv/image/upload/v1789256928/khoa-hoc-hsk.webp" alt="Giáo trình luyện đề HSK" className="h-[260px] w-full object-cover sm:h-[340px]" /></div><figcaption className="mt-4 text-right font-sans text-sm font-semibold text-brand-gold">Luyện đề sát cấu trúc thi thật</figcaption></figure>
  </div></div></section>;
}

const bookPoints = ['Bám sát cấu trúc đề thi HSK mới nhất', 'Hệ thống từ vựng trọng tâm theo từng cấp độ', 'Bài tập Nghe - Đọc - Viết có đáp án và giải thích', 'Chiến thuật phân bổ thời gian, tối ưu điểm số'];

function ExclusiveBookSection() {
  return <section className="bg-brand-cream px-6 py-16 sm:py-20" style={{ scrollMarginTop: '88px' }}><div className="relative mx-auto grid max-w-5xl items-center gap-10 border-y border-brand-gold/40 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16"><CornerOrnaments /><div className="relative mx-auto w-full max-w-[280px] rotate-[-3deg]"><div className="absolute inset-0 translate-x-4 translate-y-4 border border-brand-gold/60 bg-brand-gold/10" aria-hidden="true" /><img src={bookImage} alt="Sách luyện thi HSK độc quyền ThanhMaiHSK" className="relative block h-auto w-full border border-brand-gold bg-white p-2 shadow-2xl" /></div><div><p className="font-sans text-xs uppercase tracking-[0.3em] text-brand-gold-deep">Tài liệu đồng hành</p><h2 className="mt-3 font-display text-3xl leading-tight text-brand-red sm:text-4xl">Sách Luyện Thi HSK Độc Quyền</h2><p className="mt-4 font-sans leading-relaxed text-gray-600">Bộ tài liệu được xây dựng để biến mỗi buổi học thành một bước tiến rõ ràng trên hành trình chinh phục chứng chỉ.</p><ul className="mt-6 space-y-3">{bookPoints.map((point) => <li key={point} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-gray-700"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-brand-gold-deep text-brand-gold-deep"><Check className="h-3.5 w-3.5" /></span>{point}</li>)}</ul></div></div></section>;
}

function CommitmentSection() {
  return <section className="relative overflow-hidden bg-brand-red px-6 py-16 sm:py-20" style={{ scrollMarginTop: '88px' }}><div className="pointer-events-none absolute -left-16 top-8 select-none font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">信</div><div className="relative z-10 mx-auto max-w-4xl"><SectionHeading label="Điểm tựa trên hành trình" light>Cam Kết & Giáo Trình</SectionHeading><div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8"><article className="rounded-tl-3xl rounded-br-3xl border border-brand-gold/50 bg-[#711818]/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_14px_30px_rgba(250,199,117,0.12)]"><span className="mb-5 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold/70 bg-brand-cream shadow-[3px_3px_0_rgba(250,199,117,0.13)]"><BookMarked className="h-5 w-5 -rotate-45 text-brand-red" /></span><h3 className="font-display text-2xl text-brand-ivory">Giáo Trình Độc Quyền</h3><p className="mt-4 font-sans leading-relaxed text-white/70">Biên soạn riêng bởi giảng viên nhiều năm kinh nghiệm, bám sát format đề thi mới nhất của Hanban.</p></article><article className="relative rounded-tr-3xl rounded-bl-3xl border-2 border-brand-gold bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(186,117,23,0.2)]"><div className="absolute -top-3 right-6 bg-brand-red px-4 py-1 font-sans text-xs font-bold uppercase tracking-wide text-brand-gold shadow-md">Cam Kết</div><span className="mb-5 inline-flex h-12 w-12 rotate-45 items-center justify-center border border-brand-gold-deep/70 bg-brand-cream shadow-[3px_3px_0_rgba(186,117,23,0.13)]"><ShieldCheck className="h-5 w-5 -rotate-45 text-brand-red" /></span><h3 className="font-display text-2xl text-brand-red">Cam Kết Đầu Ra</h3><p className="mt-4 font-sans leading-relaxed text-gray-600">Cam kết đỗ nếu học và ôn thi đầy đủ theo lộ trình. Trượt kỹ năng nào, học lại kỹ năng đó miễn phí.</p></article></div></div></section>;
}

const faqItems = [
  { q: 'Chứng chỉ HSK do cơ quan nào cấp và tổ chức thi ở đâu?', a: 'HSK do Hanban (Bộ Giáo dục Trung Quốc) quản lý, thiết kế bởi Đại học Ngôn ngữ Bắc Kinh. Tại Việt Nam, HSK được tổ chức tại 5 điểm thi: Viện Khổng Tử - ĐH Hà Nội, ĐH Ngoại ngữ - ĐHQG Hà Nội, ĐH Thái Nguyên, ĐH Ngoại ngữ Huế và ĐH Sư phạm TP.HCM.' },
  { q: 'HSK có mấy cấp độ và quy đổi sang khung châu Âu (CEFR) thế nào?', a: 'HSK có 9 cấp độ: Sơ cấp (HSK 1-3), Trung cấp (HSK 4-6), Cao cấp (HSK 7-9). Quy đổi CEFR: HSK1=A1, HSK2=A2, HSK3=B1, HSK4=B2, HSK5=C1, HSK6=C2.' },
  { q: 'Có bắt buộc phải thi lần lượt từng cấp độ HSK không?', a: 'Không. Bạn có thể làm đề thử để xác định trình độ rồi chọn cấp thi phù hợp, không cần thi tuần tự từ thấp lên cao.' },
  { q: 'Lệ phí thi HSK hiện nay khoảng bao nhiêu?', a: 'Tham khảo: HSK3+HSKK sơ cấp ~1.330.000đ, HSK4+HSKK trung cấp ~1.600.000đ, HSK5+HSKK cao cấp ~1.900.000đ, HSK6+HSKK cao cấp ~2.150.000đ, HSK7-9 ~2.400.000đ. Lệ phí có thể thay đổi theo từng thời điểm.' },
  { q: 'Cấu trúc đề thi HSK có khó không?', a: 'Đề thi tăng dần độ khó qua các cấp, gồm phần Nghe, Đọc hiểu và Viết (từ HSK3 trở lên), thời lượng từ 40 phút (HSK1) đến 140 phút (HSK6). ThanhMaiHSK sẽ giúp bạn luyện tập sát cấu trúc đề thi thật.' },
];

function FaqCourseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}><div className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[18rem] leading-none text-brand-red/[0.035]" aria-hidden="true">問</div><div className="relative z-10 mx-auto max-w-3xl"><SectionHeading label="Giải đáp thắc mắc">Câu Hỏi Thường Gặp Về HSK</SectionHeading><div className="mt-10 border-t border-brand-gold-deep/25">{faqItems.map((item, index) => { const isOpen = openIndex === index; return <div key={item.q} className="border-b border-brand-gold-deep/25"><button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left font-sans text-base font-semibold text-brand-red transition-colors hover:text-brand-gold-deep focus:outline-none sm:text-lg" aria-expanded={isOpen}><span>{item.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-brand-gold-deep transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} /></button><div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}><div className="overflow-hidden"><p className="border-l border-brand-gold-deep/60 pb-6 pl-4 pr-10 font-sans leading-relaxed text-gray-600">{item.a}</p></div></div></div>; })}</div></div></section>;
}

export default function HskCoursePage() {
  return <div className="relative w-full"><CourseHero imageSrc="https://res.cloudinary.com/qugyphlv/image/upload/v1789005192/hoat-dong_9.jpg" imageAlt="Hoạt động tại ThanhMaiHSK" label="Khóa Học" heading="Luyện Thi HSK/HSKK Cấp Tốc" paragraph="Lộ trình bài bản, bám sát đề thi thật — chinh phục HSK với điểm số mong muốn chỉ sau 1 khóa học." buttonText="Đăng Ký Nhận Tư Vấn" /><div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" /><HskIntroSection /><HskLevelsSection /><CourseLevelsSection /><ClassImagesSection /><ExclusiveBookSection /><CommitmentSection /><div className="flex items-center justify-center gap-4 bg-brand-red py-6" aria-hidden="true"><div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/50 sm:w-24" /><div className="h-3 w-3 rotate-45 border border-brand-gold/60 bg-brand-gold/20" /><div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/50 sm:w-24" /></div><FeaturedStudentsSection enableFadeIn={false} /><FaqCourseSection /><CtaSection enableFadeIn={false} label="Bắt đầu hành trình chinh phục HSK" heading="Sẵn Sàng Đạt Điểm Số Mơ Ước Cùng ThanhMaiHSK?" paragraph="Đăng ký nhận tư vấn lộ trình luyện thi HSK/HSKK phù hợp nhất với trình độ và mục tiêu của bạn." buttonText="Đăng Ký Nhận Tư Vấn" /><Footer enableFadeIn={false} /></div>;
}

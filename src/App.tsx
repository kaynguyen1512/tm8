import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Medallion from '@/components/Medallion';
import AboutSection from '@/components/AboutSection';
import RoadmapSection from '@/components/RoadmapSection';
import CoursesSection from '@/components/CoursesSection';
import CtaSection from '@/components/CtaSection';
import TeachersSection from '@/components/TeachersSection';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import IntroductionPage from '@/pages/IntroductionPage';
import HskCoursePage from '@/pages/HskCoursePage';
import DoanhNghiepCoursePage from '@/pages/DoanhNghiepCoursePage';
import TrucTuyenCoursePage from '@/pages/TrucTuyenCoursePage';
import TreEmCoursePage from '@/pages/TreEmCoursePage';

function HomePage() {
  return (
    <div className="relative w-full">
      <Hero />
      <AboutSection />
      <RoadmapSection />
      <CoursesSection />
      <CtaSection />
      <TeachersSection />
      <FeaturedStudentsSection />
      <FaqSection />
      <Footer />
      <div className="absolute left-1/2 top-[100vh] z-50 -translate-x-1/2 -translate-y-1/2">
        <Medallion />
      </div>
    </div>
  );
}

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return pathname;
}

export default function App() {
  const pathname = usePathname();
  const isIntroductionPage = pathname.startsWith('/gioi-thieu');
  const isHskCoursePage = pathname === '/khoa-hoc/luyen-thi-hsk-hskk';
  const isDoanhNghiepPage = pathname === '/khoa-hoc/doanh-nghiep';
  const isTrucTuyenPage = pathname === '/khoa-hoc/han-ngu-tich-hop-truc-tuyen';
  const isTreEmPage = pathname === '/khoa-hoc/tre-em';

  useEffect(() => {
    if (!isIntroductionPage || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [isIntroductionPage]);

  return (
    <>
      {isTreEmPage ? (
        <TreEmCoursePage />
      ) : isTrucTuyenPage ? (
        <TrucTuyenCoursePage />
      ) : isDoanhNghiepPage ? (
        <DoanhNghiepCoursePage />
      ) : isHskCoursePage ? (
        <HskCoursePage />
      ) : isIntroductionPage ? (
        <IntroductionPage />
      ) : (
        <HomePage />
      )}
      <FloatingContact />
    </>
  );
}

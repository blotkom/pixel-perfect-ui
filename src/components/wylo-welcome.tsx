import { ArrowRight, Brain, GraduationCap, Mail, Target, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import mascot from "@/assets/wylo-mascot.png";

type Language = "en" | "ar";

const content = {
  en: {
    tagline: "Think Money Better.",
    note: <>Better<br />decisions<br />today...</>,
    title: <>Your AI financial<br />learning companion</>,
    subtitle: <>Learn. Make decisions. See the consequences.<br />Build better money habits.</>,
    features: ["Interactive\nLearning", "AI Guidance", "Real-Life\nScenarios", "Better\nDecisions"],
    google: "Continue with Google",
    apple: "Continue with Apple",
    email: "Continue with Email",
    or: "OR",
    login: "Log In",
    create: "Create Account",
    terms: <>By continuing, you agree to our <u>Terms &amp; Conditions</u> and <u>Privacy Policy</u>.</>,
  },
  ar: {
    tagline: "افهم فلوسك... وفكّر أحسن.",
    note: <>قرارات أفضل<br />للمستقبل...</>,
    title: <>شريكك الذكي في<br />التعلم المالي</>,
    subtitle: <>تعلّم. اتخذ قراراتك. شاهد النتائج.<br />وابنِ عادات مالية أفضل.</>,
    features: ["التعلم\nالتفاعلي", "توجيه بالذكاء\nالاصطناعي", "سيناريوهات من\nالحياة الواقعية", "قرارات أفضل"],
    google: "متابعة باستخدام جوجل",
    apple: "متابعة باستخدام آبل",
    email: "متابعة باستخدام البريد الإلكتروني",
    or: "أو",
    login: "تسجيل الدخول",
    create: "إنشاء حساب جديد",
    terms: <>بالاستمرار، فإنك توافق على <u>الشروط والأحكام</u> و<u>سياسة الخصوصية</u>.</>,
  },
} as const;

const featureIcons = [GraduationCap, Brain, TrendingUp, Target];
const featureClasses = ["feature-mint", "feature-violet", "feature-orange", "feature-green"];

function WyloLogo({ language }: { language: Language }) {
  if (language === "ar") {
    return (
      <div className="wylo-logo wylo-logo-ar" aria-label="وايلو WYLO">
        <span className="logo-arabic">وايلو</span><span className="logo-w">W</span>
      </div>
    );
  }

  return (
    <div className="wylo-logo" aria-label="WYLO">
      <span className="logo-w">W</span><span className="logo-word">ylo</span>
    </div>
  );
}

function GoogleMark() {
  return <span className="google-mark" aria-hidden="true">G</span>;
}

function AppleMark() {
  return <span className="apple-mark" aria-hidden="true">●</span>;
}

export function WyloWelcome({ language }: { language: Language }) {
  const isArabic = language === "ar";
  const copy = content[language];

  return (
    <main className={`wylo-page ${isArabic ? "wylo-ar" : "wylo-en"}`} dir={isArabic ? "rtl" : "ltr"}>
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <div className="status-bar" aria-hidden="true">
        <span>9:41</span>
        <div className="status-icons"><span className="signal">▮▮▮▮</span><span>⌁</span><span className="battery" /></div>
      </div>

      <section className="welcome-content">
        <header className="brand-lockup">
          <WyloLogo language={language} />
          <p>{copy.tagline}</p>
        </header>

        <div className="mascot-stage">
          <img src={mascot} alt="WYLO mascot holding a phone" width={1024} height={1024} />
          <div className="mascot-note">{copy.note}</div>
          <svg className="note-arrow" viewBox="0 0 80 70" aria-hidden="true">
            <path d="M66 4C64 29 50 49 19 56" />
            <path d="m27 47-10 10 13 5" />
          </svg>
        </div>

        <section className="intro">
          <h1>{copy.title}</h1>
          <p>{copy.subtitle}</p>
        </section>

        <section className="feature-list" aria-label={isArabic ? "مميزات وايلو" : "WYLO features"}>
          {copy.features.map((label, index) => {
            const Icon = featureIcons[index];
            return (
              <div className="feature" key={label}>
                <span className={`feature-icon ${featureClasses[index]}`}><Icon /></span>
                <span>{label.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
              </div>
            );
          })}
        </section>

        <section className="auth-actions" aria-label={isArabic ? "خيارات المتابعة" : "Continue options"}>
          <Button variant="outline" className="auth-button"><GoogleMark /><span>{copy.google}</span><ArrowRight /></Button>
          <Button className="auth-button auth-button-dark"><AppleMark /><span>{copy.apple}</span><ArrowRight /></Button>
          <Button variant="outline" className="auth-button"><Mail /><span>{copy.email}</span><ArrowRight /></Button>
        </section>

        <div className="divider"><span />{copy.or}<span /></div>
        <nav className="account-links" aria-label={isArabic ? "الحساب" : "Account"}>
          <a href="#login">{copy.login}</a>
          <a href="#create">{copy.create}</a>
        </nav>
        <p className="legal">{copy.terms}</p>
      </section>
    </main>
  );
}
export default function TranslationOfficeSite() {
  return (
    <div style={{ backgroundColor: "#0D2A3F", color: "white", fontFamily: "sans-serif", minHeight: "100vh", padding: "2rem" }}>
      <header style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <img src="/MELENI LOGO-Photoroom-2.jpg" alt="Logo" width={60} height={60} />
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Meleni Tercüme ve Danışmanlık</h1>
          <p style={{ fontSize: "0.875rem", color: "#CBD5E0" }}>Profesyonel ve Hızlı Tercüme Hizmetleri</p>
        </div>
      </header>
      <main>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Hakkımızda</h2>
        <p>
          Meleni Tercüme ve Danışmanlık, noter yeminli tercümanlar ile profesyonel çeviri hizmetleri sunar.
          Apostil şerhli tercümeler Türkiye’nin tüm illerine posta ile gönderilir.
          Çalışma dillerimiz Almanca ve Arapçadır.
        </p>
      </main>
    </div>
  );
}
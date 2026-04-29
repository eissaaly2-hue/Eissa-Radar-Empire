import React, { useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [credits, setCredits] = useState(1250); // تجريبي: الكريديت المجمع
  const [trends] = useState(["Smart AI Glasses", "Magnetic Power Banks", "Retro Gaming Consoles"]);

  const handleSecretEntry = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 5) {
      const password = prompt("ENTER EMPEROR KEY:");
      if (password === "777") { setIsAdmin(true); setClickCount(0); }
    }
  };

  return (
    <div style={{ background: "#050505", color: "#00FF00", minHeight: "100vh", fontFamily: 'Segoe UI', direction: 'rtl' }}>
      
      {/* Navbar */}
      <nav style={{ background: "#000", padding: "15px", borderBottom: "1px solid #00FF00", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 onClick={handleSecretEntry} style={{ cursor: "pointer", margin: 0 }}>عيسى <span style={{ color: "#fff" }}>Empire</span></h2>
        <div style={{ color: isAdmin ? "#00FF00" : "#444" }}>{isAdmin ? "⚡ وضع المخابرات نشط" : "الوضع العام"}</div>
      </nav>

      <div style={{ padding: "20px" }}>
        {!isAdmin ? (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ color: "#fff" }}>رادار المنتجات الأكثر طلباً</h1>
            <p>نظام ذكي يعرض لك أفضل الصفقات المتاحة حالياً.</p>
            <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
              {trends.map((t, i) => (
                <div key={i} style={{ border: "1px solid #222", padding: "20px", borderRadius: "10px" }}>{t} 🔥</div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ background: "#0a0a0a", padding: "25px", borderRadius: "20px", border: "1px solid #00FF00" }}>
            <h2 style={{ color: "#fff", borderBottom: "1px solid #222", paddingBottom: "10px" }}>🕵️ لوحة تحكم الإمبراطور (V9.0)</h2>
            
            <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
              <div style={statBox}>
                <small>إجمالي الكريديت المجمع</small>
                <div style={{ fontSize: "2rem", color: "#fff" }}>{credits} CP</div>
              </div>
              <div style={statBox}>
                <small>جيش الحسابات النشط</small>
                <div style={{ fontSize: "2rem", color: "#fff" }}>45 حساب</div>
              </div>
            </div>

            <h3 style={{ marginTop: "30px", color: "#00FF00" }}>📈 رادار السوق الحالي:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {trends.map((t, i) => <li key={i} style={{ padding: "10px", background: "#111", marginBottom: "5px" }}>✅ مطلوب حالياً: {t}</li>)}
            </ul>

            <div style={{ marginTop: "30px", borderTop: "1px solid #222", paddingTop: "20px" }}>
              <button onClick={() => alert("جاري الاتصال بـ Gmail API...")} style={btnStyle}>تحديث بيانات الكريديت من الإيميلات</button>
              <button onClick={() => setIsAdmin(false)} style={{ ...btnStyle, background: "#333", marginRight: "10px" }}>الخروج من النظام</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const statBox = { background: "#111", padding: "20px", borderRadius: "10px", border: "1px solid #00FF00", flex: "1", minWidth: "200px", textAlign: "center" };
const btnStyle = { background: "#00FF00", color: "#000", border: "none", padding: "12px 25px", fontWeight: "bold", cursor: "pointer", borderRadius: "8px" };

export default App;
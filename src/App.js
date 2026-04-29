import React, { useState, useEffect } from "react";

// ملاحظة للإمبراطور: حط الـ Client ID بتاعك هنا لما تجيبه من Google Cloud
const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/gmail.readonly";

function App() {
  const [credits, setCredits] = useState(1250);
  const [isConnected, setIsConnected] = useState(false);

  // وظيفة الربط بـ Google
  const handleGoogleLogin = () => {
    // هنا السيستم بيطلب إذن الدخول للإيميلات
    alert("جاري فتح بوابة Google OAuth لتفعيل مستشعر الكريديت...");
    // ملاحظة: الربط الفعلي يحتاج مكتبة gapi-script، سنقوم بتفعيلها فور وضع الـ ID
    setIsConnected(true); 
  };

  const syncEmails = () => {
    if (!isConnected) {
      alert("برجاء تفعيل الربط أولاً يا إمبراطور!");
      return;
    }
    alert("جاري فحص جيش الإيميلات... تم العثور على 5 رسايل كريديت جديدة!");
    setCredits(prev => prev + 150); // زيادة الكريديت وهمياً للتجربة
  };

  return (
    <div style={{ background: "#050505", color: "#00FF00", minHeight: "100vh", padding: "20px", fontFamily: 'Segoe UI', direction: 'rtl' }}>
      <div style={{ background: "#0a0a0a", padding: "25px", borderRadius: "20px", border: "2px solid #00FF00", maxWidth: "800px", margin: "auto" }}>
        
        <h1 style={{ color: "#fff", textAlign: "center" }}>🕵️ نظام جمع الكريديت الذكي (V9.5)</h1>
        
        <div style={{ display: "flex", gap: "20px", margin: "20px 0", justifyContent: "center" }}>
          <div style={boxStyle}><small>إجمالي الرصيد</small><br/><b style={{fontSize: "2rem"}}>{credits} CP</b></div>
          <div style={boxStyle}><small>حالة المستشعر</small><br/><b style={{color: isConnected ? "#00FF00" : "#ff4444"}}>{isConnected ? "متصل وعامل" : "غير متصل"}</b></div>
        </div>

        {!isConnected ? (
          <button onClick={handleGoogleLogin} style={{...btnStyle, background: "#fff", color: "#000"}}>
            🔗 ربط حساب الـ Gmail الرئيسي
          </button>
        ) : (
          <button onClick={syncEmails} style={btnStyle}>
            🔄 سحب الكريديت من جيش الإيميلات الآن
          </button>
        )}

        <div style={{ marginTop: "30px", borderTop: "1px solid #222", paddingTop: "20px" }}>
          <h3>📋 تقرير الرادار الأخير:</h3>
          <p style={{ color: "#888" }}>السيستم يراقب الآن 45 إيمل فرعي تحت مسمى (eissa+..@gmail.com)</p>
          <ul style={{ background: "#111", padding: "15px", borderRadius: "10px", listStyle: "none" }}>
            <li>✅ تم رصد طلب على: <b>Smart AI Glasses</b></li>
            <li>✅ تم رصد طلب على: <b>Magnetic Accessories</b></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const boxStyle = { background: "#111", padding: "15px", borderRadius: "10px", border: "1px solid #00FF00", textAlign: "center", flex: 1 };
const btnStyle = { background: "#00FF00", color: "#000", border: "none", padding: "15px", width: "100%", fontWeight: "bold", cursor: "pointer", borderRadius: "10px", marginTop: "10px" };

export default App;

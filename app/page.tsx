import Image from "next/image";

// URL หลักของหลังบ้าน
const WP_URL = "https://backend.deklnw.com"; 
// ID ของหน้า
const PAGE_ID = "6"; 

async function getPageData() {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/pages/${PAGE_ID}`, {
      cache: 'no-store' // ดึงข้อมูลสดใหม่เสมอ
    });
    
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export default async function SalePage() {
  const wpData = await getPageData();
  const shopeeLink = "https://s.shopee.co.th/4qBE3Td8JE";

  // ดึงข้อมูลจาก WordPress
  const headlineTitle = wpData?.title?.rendered || "พาดหัวโปรโมชั่น";
  const mainContent = wpData?.content?.rendered || "<p>กำลังโหลดเนื้อหา...</p>";
  
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-sans">
      {/* กล่องเนื้อหาหลัก (สีขาว คลีนๆ มีเงาบางๆ) */}
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* 1. ส่วนหัว (Title) */}
        <div className="text-center pt-14 pb-8 px-8 md:px-12">
          <h1 
            className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            dangerouslySetInnerHTML={{ __html: headlineTitle }}
          />
        </div>

        {/* 2. ส่วนเนื้อหาจาก WordPress (Content) 
            กำหนดพื้นหลังสีขาว ทำให้รูปที่ดึงมาเนียนไปกับเว็บ 
            และจัดรูปแบบตัวอักษรให้พอดีกับการอ่าน */}
        <div 
          className="px-8 md:px-12 pb-10 text-lg text-gray-600 leading-relaxed 
                     [&>p]:mb-6 
                     [&>img]:mx-auto [&>img]:rounded-2xl [&>img]:shadow-sm [&>img]:mb-8
                     [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-800 [&>h2]:mt-10 [&>h2]:mb-4
                     [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-3
                     [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                     [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6"
          dangerouslySetInnerHTML={{ __html: mainContent }}
        />

        {/* 3. ส่วนปุ่มสั่งซื้อ (CTA Section) */}
        <div className="p-10 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-lg font-medium text-teal-700 mb-5">
            🔥 รีบสอยก่อนหมดโปร! กดรับโค้ดส่วนลดเพิ่มที่ Shopee
          </p>
          <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white text-2xl font-bold py-5 px-14 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
              🛒 สั่งซื้อเลยที่ Shopee
          </a>
        </div>

      </div>
    </main>
  );
}
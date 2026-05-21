import Image from "next/image";

// URL หลัก (ระวังอย่าให้มีเครื่องหมาย / ต่อท้ายนะครับ)
const WP_URL = "https://backend.deklnw.com"; 
// ID ของหน้า
const PAGE_ID = "6"; 

async function getPageData() {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/pages/${PAGE_ID}`, {
      // ใช้คำสั่งนี้เพื่อบังคับให้ Next.js ไม่จำข้อมูลเก่า ดึงใหม่สดๆ ทุกครั้ง
      cache: 'no-store' 
    });
    
    if (!res.ok) {
      console.log("เชื่อมต่อ API ไม่สำเร็จ สถานะ:", res.status);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("ดึงข้อมูลจาก WordPress ไม่ได้:", error);
    return null;
  }
}

export default async function SalePage() {
  const wpData = await getPageData();
  const shopeeLink = "https://s.shopee.co.th/4qBE3Td8JE";

  // ดึงข้อความพาดหัว และ เนื้อหา จาก WordPress
  const headlineTitle = wpData?.title?.rendered || "🐱🚨 ทาสแมวต้องดู! ไอเทมลับที่สายแบกเจ้านายต้องมี💖";
  const mainContent = wpData?.content?.rendered || "<p>หมดปัญหาเจ้านายอึดอัด ร้องงอแงในกระเป๋าแคบๆ! จบปัญหาด้วย YTL เป้สัตว์เลี้ยงใบใหญ่จุใจ ✨</p>";
  
  return (
    <main className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-sky-100">
        
        {/* ส่วนหัวดึงมาจาก WordPress */}
        <div className="bg-[#5BC3B9] text-white text-center py-12 px-6">
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight"
            dangerouslySetInnerHTML={{ __html: headlineTitle }}
          />
          <div 
            className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: mainContent }}
          />
        </div>

        {/* รูปภาพหลักสินค้า */}
        <div className="p-6 md:p-10 flex flex-col items-center border-b border-gray-100">
          <div className="w-full relative aspect-square max-w-lg mb-8 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/images/hero.png"
              alt="เป้สัตว์เลี้ยง YTL ใบใหญ่จุใจ"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-2xl font-semibold text-center text-teal-600">
            ระบายอากาศดีเยี่ยม กันสาดเปิด-ปิด พับเก็บได้ สบายเจ้านายสุดๆ!
          </p>
        </div>

        {/* ปุ่มสั่งซื้อ */}
        <div className="p-8 md:p-10 bg-white text-center">
          <div className="inline-block p-4 bg-orange-100 rounded-xl border border-orange-200 text-orange-900 font-medium mb-6">
            🔥 รีบสอยก่อนหมดโปร! ช่วงโปร Shopee กดโค้ดลดเพิ่มได้อีก คุ้มยิ่งกว่าคุ้ม!
          </div>
          
          <div className="pt-4">
            <a
                href={shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-3xl font-extrabold py-6 px-16 rounded-full shadow-lg transition transform hover:scale-110"
            >
                🛒 สอยให้เจ้านายเดี๋ยวนี้! (ลดพิเศษที่ Shopee)
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
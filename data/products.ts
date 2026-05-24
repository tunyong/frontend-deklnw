export type Product = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  price: string;
  oldPrice?: string;
  badge: string;
  image: string;
  shopeeUrl: string;
  tiktokUrl?: string;
  benefits: string[];
  details: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "neck-fan",
    title: "พัดลมคล้องคอพกพา",
    shortDescription:
      "ไอเท็มคลายร้อนสำหรับทำงานกลางแจ้ง เดินทาง ออกกำลังกาย หรือใช้ในชีวิตประจำวัน",
    price: "เริ่มต้น ฿99",
    oldPrice: "฿199",
    badge: "ขายดี",
    image: "/images/hero.png",
    shopeeUrl: "https://s.shopee.co.th/4qBE3Td8JE",
    tiktokUrl: "https://www.tiktok.com/",
    benefits: [
      "พกพาง่าย น้ำหนักเบา",
      "เหมาะกับอากาศร้อน",
      "ใช้ได้ทั้งในบ้านและนอกบ้าน",
      "กดดูโปรล่าสุดได้ทันที",
    ],
    details:
      "พัดลมคล้องคอเหมาะสำหรับคนที่ต้องการความเย็นแบบพกพา ใช้งานง่าย เหมาะกับการเดินทาง ทำงานกลางแจ้ง หรือใช้ระหว่างออกกำลังกาย",
  },
  {
    id: 2,
    slug: "solar-fan-hat",
    title: "หมวกพัดลมโซลาร์เซลล์",
    shortDescription:
      "หมวกกันแดดพร้อมพัดลม เหมาะสำหรับทำสวน เดินตลาด ตกปลา หรือทำงานกลางแจ้ง",
    price: "เริ่มต้น ฿159",
    oldPrice: "฿299",
    badge: "เหมาะกับแดดไทย",
    image: "/images/details.png",
    shopeeUrl: "https://s.shopee.co.th/4qBE3Td8JE",
    tiktokUrl: "https://www.tiktok.com/",
    benefits: [
      "กันแดดพร้อมช่วยระบายอากาศ",
      "เหมาะกับงานกลางแจ้ง",
      "ดีไซน์ใช้งานง่าย",
      "ช่วยเพิ่มความสบายระหว่างวัน",
    ],
    details:
      "หมวกพัดลมโซลาร์เซลล์เป็นสินค้าที่เหมาะกับสภาพอากาศเมืองไทย โดยเฉพาะคนทำงานกลางแจ้งหรือกิจกรรมกลางแดด",
  },
  {
    id: 3,
    slug: "cat-treat",
    title: "ขนมแมวเลีย",
    shortDescription:
      "ของโปรดน้องแมว เหมาะสำหรับให้เป็นรางวัล ฝึกแมว หรือเพิ่มความสุขระหว่างวัน",
    price: "เริ่มต้น ฿39",
    oldPrice: "฿79",
    badge: "ทาสแมวแนะนำ",
    image: "/images/hero.png",
    shopeeUrl: "https://s.shopee.co.th/4qBE3Td8JE",
    tiktokUrl: "https://www.tiktok.com/",
    benefits: [
      "กินง่าย ถูกใจน้องแมว",
      "เหมาะสำหรับให้เป็นรางวัล",
      "พกพาสะดวก",
      "มีหลายรสให้เลือก",
    ],
    details:
      "ขนมแมวเลียเป็นสินค้ายอดนิยมสำหรับคนเลี้ยงแมว ใช้เป็นของว่าง รางวัล หรือช่วยสร้างความคุ้นเคยกับน้องแมวได้ดี",
  },
  {
    id: 4,
    slug: "massage-device",
    title: "เครื่องนวดคอ บ่า ไหล่",
    shortDescription:
      "เหมาะสำหรับคนทำงานนั่งนาน ปวดเมื่อยคอ บ่า ไหล่ หรืออยากผ่อนคลายที่บ้าน",
    price: "เริ่มต้น ฿299",
    oldPrice: "฿599",
    badge: "สายออฟฟิศ",
    image: "/images/details.png",
    shopeeUrl: "https://s.shopee.co.th/4qBE3Td8JE",
    tiktokUrl: "https://www.tiktok.com/",
    benefits: [
      "ช่วยผ่อนคลายหลังทำงาน",
      "ใช้งานที่บ้านได้",
      "เหมาะกับคนปวดเมื่อย",
      "ของใช้สุขภาพยอดนิยม",
    ],
    details:
      "เครื่องนวดคอ บ่า ไหล่ เหมาะกับคนทำงานหน้าคอม หรือคนที่ต้องการผ่อนคลายกล้ามเนื้อเบื้องต้นในชีวิตประจำวัน",
  },
];
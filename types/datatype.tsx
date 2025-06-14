export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  variants: Variant[];
}

export interface Variant {
  id: string;
  size: string; // เช่น 'S', 'M', 'L', 'XL'
  color: string; // เช่น 'แดง', 'ดำ', 'ขาว'
  unit: number; // จำนวนคงเหลือในสต็อก
  sku?: string; // รหัสสินค้า (optional)
  imageUrl?: string; // URL รูปภาพ (optional)
}

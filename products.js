/*
  ====================================================
  商品資料檔（可隨時編輯替換）
  ====================================================
  只要修改這個檔案，網頁內容就會自動更新，不需要動 index.html。

  每一筆商品欄位說明：
    category    分類，必須跟下面 CATEGORIES 清單裡的 id 對應
    brand       品牌名稱
    name        商品名稱
    spec        規格／容量
    price       售價（數字，不用打 NT$）
    originalPrice  原價（選填。若有填，會顯示劃線原價 + 折扣標籤；不需要就整行刪掉或設 null）
    note        備註（選填，例如「新品」「熱銷」「限量」）
    image       圖片檔名，圖片放在 images 資料夾裡
    desc        產品簡介（點擊圖片時彈出的介紹文字，可自行改寫）

  ※ 目前售價為「示意範例」，請自行改成實際售價。
  ※ desc 產品簡介為初稿文字，建議依實際商品資訊確認後再對外使用。
  ====================================================
*/

const CATEGORIES = [
  { id: "shampoo",    name: "洗髮 Shampoo" },
  { id: "conditioner",name: "潤髮 Conditioner" },
  { id: "treatment",  name: "護髮膜 Treatment" },
  { id: "leave-in",   name: "免沖洗 / 精華油 Leave-in & Oil" },
  { id: "styling",    name: "造型 Styling" },
  { id: "scalp",      name: "頭皮養護 Scalp Care" },
];

const PRODUCTS = [
  // ---------- 洗髮 Shampoo ----------
  {
    category: "shampoo",
    brand: "óben",
    name: "Le bonheur Paris High Wall 洗髮精",
    spec: "800ml",
    price: 999,
    originalPrice: null,
    note: "",
    image: "oben-paris-highwall-shampoo.jpg",
    desc: "保護毛鱗片、補充頭髮缺失的水分，保濕鎖色，增加髮絲韌度，減少分岔及斷裂。",
  },
  {
    category: "shampoo",
    brand: "óben",
    name: "Le bonheur Luxembourg Gardens 洗髮精",
    spec: "800ml",
    price: 1280,
    originalPrice: 1480,
    note: "",
    image: "oben-luxembourg-shampoo.jpg",
    desc: "鎮定舒緩頭皮敏感不適，減少換季時頭皮乾癢帶來的刺激感。",
  },
  {
    category: "shampoo",
    brand: "TOKIO INKARAMI",
    name: "PREMIUM 洗髮精",
    spec: "400ml",
    price: 980,
    originalPrice: null,
    note: "熱銷",
    image: "tokio-inkarami-shampoo.jpg",
    desc: "TOKIO INKARAMI 系列洗髮精，溫和清潔的同時為後續護髮膜做好吸收準備，沙龍護髮療程首選。",
  },
  {
    category: "shampoo",
    brand: "EDNA",
    name: "保濕洗髮精 Ribes Rubrum",
    spec: "500ml",
    price: 880,
    originalPrice: null,
    note: "",
    image: "edna-ribes-rubrum-shampoo.webp",
    desc: "紅醋栗香調保濕洗髮精，平衡頭皮油水、滋養髮絲，適合乾燥、缺水髮質。",
  },
  {
    category: "shampoo",
    brand: "EDNA",
    name: "順滑洗髮精 Citrus Limon",
    spec: "500ml",
    price: 880,
    originalPrice: null,
    note: "",
    image: "edna-citrus-limon-shampoo.webp",
    desc: "檸檬清香順滑洗髮精，幫助理順毛鱗片、減少打結，洗後髮絲滑順好整理。",
  },
  {
    category: "shampoo",
    brand: "EDNA",
    name: "蘊頭皮活化洗髮精 Mint Therapy",
    spec: "500ml",
    price: 980,
    originalPrice: 980,
    note: "",
    image: "edna-mint-therapy-shampoo.webp",
    desc: "薄荷頭皮活化洗髮精，清涼感潔淨毛孔、舒緩頭皮，適合油性頭皮或想要清爽感的顧客。",
  },

  // ---------- 潤髮 Conditioner ----------
  {
    category: "conditioner",
    brand: "óben",
    name: "Le bonheur Tuileries Garden 潤髮乳",
    spec: "500ml",
    price: 1180,
    originalPrice: null,
    note: "",
    image: "oben-tuileries-conditioner.jpg",
    desc: "與髮絲表面角蛋白緊密結合，保護毛鱗片、補充水分，減少分岔。",
  },

  // ---------- 護髮膜 Treatment ----------
  {
    category: "treatment",
    brand: "TOKIO INKARAMI",
    name: "PREMIUM 護髮膜",
    spec: "400g",
    price: 1580,
    originalPrice: null,
    note: "招牌",
    image: "tokio-inkarami-treatment.jpg",
    desc: "沙龍等級深層護髮膜，修護受損髮絲結構、補充蛋白質與水分，打造柔順有光澤的髮質。",
  },
  {
    category: "treatment",
    brand: "TOKIO INKARAMI",
    name: "居家護髮膜 HOME",
    spec: "180g",
    price: 1280,
    originalPrice: 1480,
    note: "",
    image: "tokio-inkarami-home.png",
    desc: "居家版護髮膜，延續沙龍護髮效果，建議每週使用 1-2 次維持髮質柔順與光澤。",
  },

  // ---------- 免沖洗 / 精華油 Leave-in & Oil ----------
  {
    category: "leave-in",
    brand: "napla N.",
    name: "SHEA OIL 乳木果護髮油",
    spec: "150ml",
    price: 880,
    originalPrice: null,
    note: "",
    image: "napla-n-shea-oil.jpg",
    desc: "蘊含乳油木果油、馬魯拉果油及高壓處理種子油，適合受損髮質的免沖洗護髮，推薦細軟髮質使用。",
  },
  {
    category: "leave-in",
    brand: "Purifica MiL",
    name: "護髮精華液",
    spec: "120ml",
    price: 780,
    originalPrice: null,
    note: "",
    image: "purifica-mil-essence.jpg",
    desc: "免沖洗護髮精華液，質地清爽好吸收，修護毛鱗片、防止分岔，適合日常保養使用。",
  },
  {
    category: "leave-in",
    brand: "TOKIO",
    name: "OUTKARAMI PREMIUM AIR.TR 外油",
    spec: "100ml",
    price: 1380,
    originalPrice: null,
    note: "新品",
    image: "tokio-outkarami-airtr.jpg",
    desc: "TOKIO 外油系列，質地輕盈不厚重，修飾毛躁、增加髮絲柔軟度與光澤感，適合造型前使用。",
  },
  {
    category: "leave-in",
    brand: "milk_shake",
    name: "Whipped Cream 免沖洗慕斯（花香）",
    spec: "200ml",
    price: 780,
    originalPrice: null,
    note: "",
    image: "milkshake-whipped-cream-flower.jpg",
    desc: "花香免沖洗慕斯，含大豆蛋白與辣木籽萃取，蓬鬆質地保濕護色，適合所有髮質。",
  },
  {
    category: "leave-in",
    brand: "milk_shake",
    name: "Silver Shine 紫控色慕斯",
    spec: "200ml",
    price: 820,
    originalPrice: 920,
    note: "",
    image: "milkshake-silver-shine.png",
    desc: "紫控色慕斯，中和挑染／漂髮後的黃橘色調，維持銀灰髮色乾淨透亮。",
  },

  // ---------- 造型 Styling ----------
  {
    category: "styling",
    brand: "napla N.",
    name: "HOLD SPRAY 5 定型噴霧",
    spec: "170g",
    price: 680,
    originalPrice: null,
    note: "",
    image: "napla-n-hold-spray.png",
    desc: "有機定型噴霧，強力持久定型不僵硬，維持自然蓬鬆感與造型持久度。",
  },
  {
    category: "styling",
    brand: "Qufra",
    name: "Rough Ridge Whip 蓬鬆造型慕斯",
    spec: "200g",
    price: 720,
    originalPrice: null,
    note: "",
    image: "qufra-rough-ridge-whip.jpg",
    desc: "蓬鬆感造型慕斯，打造自然粗糙質感與空氣感層次，適合短髮、瀏海造型使用。",
  },
  {
    category: "styling",
    brand: "LABEL.M",
    name: "捲捲活力凝露",
    spec: "200ml",
    price: 1200,
    originalPrice: null,
    note: "",
    image: "捲捲活力凝露 250ml.PNG",
    desc: "含有蘆薈和荷荷芭籽油的完美捲髮打底修護產品，可以深層滋潤並塑造頭髮捲度紋理，讓你的捲度更具有活力與彈性，且我們獨特的「對抗環境汙染複方」技術，有助於抵抗高溫、潮濕和紫外線，讓捲髮的你可以擁有更加柔順且不毛躁的頭髮捲度。",
  },

  // ---------- 頭皮養護 Scalp Care ----------
  {
    category: "scalp",
    brand: "VIRTUE",
    name: "Flourish Density Booster 密度養髮精華",
    spec: "120ml",
    price: 2280,
    originalPrice: null,
    note: "限量",
    image: "virtue-flourish-density-booster.png",
    desc: "為疲勞的毛囊補充能量，滋養脆弱及新生髮，使髮絲增厚並茁壯生長。",
  },
];

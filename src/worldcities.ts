// 全球城市时区目录。仅收录固定 UTC 偏移，不做夏令时换算：
// 英欧北美等实行夏令时的城市在夏季会偏差 1 小时，以官方全年约数为准。
export interface WorldCity {
  key: string;
  zh: string;
  en: string;
  offsetMinutes: number;
}

export const WORLD_CITIES: WorldCity[] = [
  { key: "auckland", zh: "奥克兰", en: "Auckland", offsetMinutes: 720 },
  { key: "suva", zh: "苏瓦", en: "Suva", offsetMinutes: 720 },
  { key: "sydney", zh: "悉尼", en: "Sydney", offsetMinutes: 600 },
  { key: "canberra", zh: "堪培拉", en: "Canberra", offsetMinutes: 600 },
  { key: "melbourne", zh: "墨尔本", en: "Melbourne", offsetMinutes: 600 },
  { key: "brisbane", zh: "布里斯班", en: "Brisbane", offsetMinutes: 600 },
  { key: "vladivostok", zh: "符拉迪沃斯托克", en: "Vladivostok", offsetMinutes: 600 },
  { key: "tokyo", zh: "东京", en: "Tokyo", offsetMinutes: 540 },
  { key: "seoul", zh: "首尔", en: "Seoul", offsetMinutes: 540 },
  { key: "osaka", zh: "大阪", en: "Osaka", offsetMinutes: 540 },
  { key: "pyongyang", zh: "平壤", en: "Pyongyang", offsetMinutes: 540 },
  { key: "beijing", zh: "北京", en: "Beijing", offsetMinutes: 480 },
  { key: "shanghai", zh: "上海", en: "Shanghai", offsetMinutes: 480 },
  { key: "guangzhou", zh: "广州", en: "Guangzhou", offsetMinutes: 480 },
  { key: "shenzhen", zh: "深圳", en: "Shenzhen", offsetMinutes: 480 },
  { key: "chengdu", zh: "成都", en: "Chengdu", offsetMinutes: 480 },
  { key: "chongqing", zh: "重庆", en: "Chongqing", offsetMinutes: 480 },
  { key: "hongkong", zh: "香港", en: "Hong Kong", offsetMinutes: 480 },
  { key: "macau", zh: "澳门", en: "Macau", offsetMinutes: 480 },
  { key: "taipei", zh: "台北", en: "Taipei", offsetMinutes: 480 },
  { key: "manila", zh: "马尼拉", en: "Manila", offsetMinutes: 480 },
  { key: "singapore", zh: "新加坡", en: "Singapore", offsetMinutes: 480 },
  { key: "kualalumpur", zh: "吉隆坡", en: "Kuala Lumpur", offsetMinutes: 480 },
  { key: "perth", zh: "珀斯", en: "Perth", offsetMinutes: 480 },
  { key: "bangkok", zh: "曼谷", en: "Bangkok", offsetMinutes: 420 },
  { key: "hanoi", zh: "河内", en: "Hanoi", offsetMinutes: 420 },
  { key: "hochiminh", zh: "胡志明市", en: "Ho Chi Minh City", offsetMinutes: 420 },
  { key: "jakarta", zh: "雅加达", en: "Jakarta", offsetMinutes: 420 },
  { key: "yangon", zh: "仰光", en: "Yangon", offsetMinutes: 390 },
  { key: "dhaka", zh: "达卡", en: "Dhaka", offsetMinutes: 360 },
  { key: "mumbai", zh: "孟买", en: "Mumbai", offsetMinutes: 330 },
  { key: "delhi", zh: "新德里", en: "New Delhi", offsetMinutes: 330 },
  { key: "colombo", zh: "科伦坡", en: "Colombo", offsetMinutes: 330 },
  { key: "karachi", zh: "卡拉奇", en: "Karachi", offsetMinutes: 300 },
  { key: "tashkent", zh: "塔什干", en: "Tashkent", offsetMinutes: 300 },
  { key: "dubai", zh: "迪拜", en: "Dubai", offsetMinutes: 240 },
  { key: "muscat", zh: "马斯喀特", en: "Muscat", offsetMinutes: 240 },
  { key: "tehran", zh: "德黑兰", en: "Tehran", offsetMinutes: 210 },
  { key: "moscow", zh: "莫斯科", en: "Moscow", offsetMinutes: 180 },
  { key: "petersburg", zh: "圣彼得堡", en: "Saint Petersburg", offsetMinutes: 180 },
  { key: "istanbul", zh: "伊斯坦布尔", en: "Istanbul", offsetMinutes: 180 },
  { key: "baghdad", zh: "巴格达", en: "Baghdad", offsetMinutes: 180 },
  { key: "riyadh", zh: "利雅得", en: "Riyadh", offsetMinutes: 180 },
  { key: "nairobi", zh: "内罗毕", en: "Nairobi", offsetMinutes: 180 },
  { key: "cairo", zh: "开罗", en: "Cairo", offsetMinutes: 120 },
  { key: "jerusalem", zh: "耶路撒冷", en: "Jerusalem", offsetMinutes: 120 },
  { key: "athens", zh: "雅典", en: "Athens", offsetMinutes: 120 },
  { key: "helsinki", zh: "赫尔辛基", en: "Helsinki", offsetMinutes: 120 },
  { key: "johannesburg", zh: "约翰内斯堡", en: "Johannesburg", offsetMinutes: 120 },
  { key: "kyiv", zh: "基辅", en: "Kyiv", offsetMinutes: 120 },
  { key: "berlin", zh: "柏林", en: "Berlin", offsetMinutes: 60 },
  { key: "rome", zh: "罗马", en: "Rome", offsetMinutes: 60 },
  { key: "paris", zh: "巴黎", en: "Paris", offsetMinutes: 60 },
  { key: "madrid", zh: "马德里", en: "Madrid", offsetMinutes: 60 },
  { key: "amsterdam", zh: "阿姆斯特丹", en: "Amsterdam", offsetMinutes: 60 },
  { key: "vienna", zh: "维也纳", en: "Vienna", offsetMinutes: 60 },
  { key: "zurich", zh: "苏黎世", en: "Zurich", offsetMinutes: 60 },
  { key: "stockholm", zh: "斯德哥尔摩", en: "Stockholm", offsetMinutes: 60 },
  { key: "warsaw", zh: "华沙", en: "Warsaw", offsetMinutes: 60 },
  { key: "prague", zh: "布拉格", en: "Prague", offsetMinutes: 60 },
  { key: "budapest", zh: "布达佩斯", en: "Budapest", offsetMinutes: 60 },
  { key: "london", zh: "伦敦", en: "London", offsetMinutes: 0 },
  { key: "dublin", zh: "都柏林", en: "Dublin", offsetMinutes: 0 },
  { key: "lisbon", zh: "里斯本", en: "Lisbon", offsetMinutes: 0 },
  { key: "accra", zh: "阿克拉", en: "Accra", offsetMinutes: 0 },
  { key: "reykjavik", zh: "雷克雅未克", en: "Reykjavik", offsetMinutes: 0 },
  { key: "casablanca", zh: "卡萨布兰卡", en: "Casablanca", offsetMinutes: 0 },
  { key: "saopaulo", zh: "圣保罗", en: "Sao Paulo", offsetMinutes: -180 },
  { key: "buenosaires", zh: "布宜诺斯艾利斯", en: "Buenos Aires", offsetMinutes: -180 },
  { key: "riodejaneiro", zh: "里约热内卢", en: "Rio de Janeiro", offsetMinutes: -180 },
  { key: "newyork", zh: "纽约", en: "New York", offsetMinutes: -300 },
  { key: "toronto", zh: "多伦多", en: "Toronto", offsetMinutes: -300 },
  { key: "lima", zh: "利马", en: "Lima", offsetMinutes: -300 },
  { key: "bogota", zh: "波哥大", en: "Bogota", offsetMinutes: -300 },
  { key: "havana", zh: "哈瓦那", en: "Havana", offsetMinutes: -300 },
  { key: "chicago", zh: "芝加哥", en: "Chicago", offsetMinutes: -360 },
  { key: "mexicocity", zh: "墨西哥城", en: "Mexico City", offsetMinutes: -360 },
  { key: "phoenix", zh: "凤凰城", en: "Phoenix", offsetMinutes: -420 },
  { key: "denver", zh: "丹佛", en: "Denver", offsetMinutes: -420 },
  { key: "losangeles", zh: "洛杉矶", en: "Los Angeles", offsetMinutes: -480 },
  { key: "vancouver", zh: "温哥华", en: "Vancouver", offsetMinutes: -480 },
  { key: "seattle", zh: "西雅图", en: "Seattle", offsetMinutes: -480 },
  { key: "sanfrancisco", zh: "旧金山", en: "San Francisco", offsetMinutes: -480 },
  { key: "anchorage", zh: "安克雷奇", en: "Anchorage", offsetMinutes: -540 },
  { key: "honolulu", zh: "檀香山", en: "Honolulu", offsetMinutes: -600 },
  { key: "papeete", zh: "帕皮提", en: "Papeete", offsetMinutes: -600 },
  { key: "pagopago", zh: "帕果帕果", en: "Pago Pago", offsetMinutes: -660 }
]

// 默认只选中国的城市，其余在编辑页自行添加
export const DEFAULT_SELECTION: string[] = ["beijing", "shanghai", "hongkong"]

export function OffsetLabel(offsetMinutes: number): string {
  const sign = offsetMinutes >= 0 ? "+" : "-"
  const abs = Math.abs(offsetMinutes)
  return "UTC" + sign + Math.floor(abs / 60) + (abs % 60 ? ":" + (abs % 60) : "")
}

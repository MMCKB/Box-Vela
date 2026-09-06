// 全球国家时区目录，国家清单取自 time.global/zh/countries/ 的完整收录（197 国）。
// 汉化与 UTC 标准偏移为整理数据；dst 字段为夏令时规则，在夏季对标准偏移 +60 分钟：
//   us=3月第2个周日至11月第1个周日  eu=3月最后周日至10月最后周日
//   il=3月最后周日前的周五至10月最后周日  eg=4月最后周五至10月最后周四
//   au=10月第1个周日至次年4月第1个周日  nz=9月最后周日至次年4月第1个周日
//   cl=9月第1个周日至次年4月第1个周日
export interface WorldCountry {
  key: string;
  zh: string;
  en: string;
  offsetMinutes: number;
  dst: string;
}

export const WORLD_COUNTRIES: WorldCountry[] = [
  { key: "afghanistan", zh: "阿富汗", en: "Afghanistan", offsetMinutes: 270, dst: "" },
  { key: "albania", zh: "阿尔巴尼亚", en: "Albania", offsetMinutes: 60, dst: "eu" },
  { key: "algeria", zh: "阿尔及利亚", en: "Algeria", offsetMinutes: 60, dst: "" },
  { key: "andorra", zh: "安道尔", en: "Andorra", offsetMinutes: 60, dst: "eu" },
  { key: "angola", zh: "安哥拉", en: "Angola", offsetMinutes: 60, dst: "" },
  { key: "antigua-and-barbuda", zh: "安提瓜和巴布达", en: "Antigua and Barbuda", offsetMinutes: -240, dst: "" },
  { key: "argentina", zh: "阿根廷", en: "Argentina", offsetMinutes: -180, dst: "" },
  { key: "armenia", zh: "亚美尼亚", en: "Armenia", offsetMinutes: 240, dst: "" },
  { key: "australia", zh: "澳大利亚", en: "Australia", offsetMinutes: 600, dst: "au" },
  { key: "austria", zh: "奥地利", en: "Austria", offsetMinutes: 60, dst: "eu" },
  { key: "azerbaijan", zh: "阿塞拜疆", en: "Azerbaijan", offsetMinutes: 240, dst: "" },
  { key: "bahamas", zh: "巴哈马", en: "Bahamas", offsetMinutes: -300, dst: "us" },
  { key: "bahrain", zh: "巴林", en: "Bahrain", offsetMinutes: 180, dst: "" },
  { key: "bangladesh", zh: "孟加拉国", en: "Bangladesh", offsetMinutes: 360, dst: "" },
  { key: "barbados", zh: "巴巴多斯", en: "Barbados", offsetMinutes: -240, dst: "" },
  { key: "belarus", zh: "白俄罗斯", en: "Belarus", offsetMinutes: 180, dst: "" },
  { key: "belgium", zh: "比利时", en: "Belgium", offsetMinutes: 60, dst: "eu" },
  { key: "belize", zh: "伯利兹", en: "Belize", offsetMinutes: -360, dst: "" },
  { key: "benin", zh: "贝宁", en: "Benin", offsetMinutes: 60, dst: "" },
  { key: "bhutan", zh: "不丹", en: "Bhutan", offsetMinutes: 360, dst: "" },
  { key: "bolivia", zh: "玻利维亚", en: "Bolivia", offsetMinutes: -240, dst: "" },
  { key: "bosnia-and-herzegovina", zh: "波斯尼亚和黑塞哥维那", en: "Bosnia and Herzegovina", offsetMinutes: 60, dst: "eu" },
  { key: "botswana", zh: "博茨瓦纳", en: "Botswana", offsetMinutes: 120, dst: "" },
  { key: "brazil", zh: "巴西", en: "Brazil", offsetMinutes: -180, dst: "" },
  { key: "brunei", zh: "文莱", en: "Brunei", offsetMinutes: 480, dst: "" },
  { key: "bulgaria", zh: "保加利亚", en: "Bulgaria", offsetMinutes: 120, dst: "eu" },
  { key: "burkina-faso", zh: "布基纳法索", en: "Burkina Faso", offsetMinutes: 0, dst: "" },
  { key: "burundi", zh: "布隆迪", en: "Burundi", offsetMinutes: 120, dst: "" },
  { key: "cabo-verde", zh: "佛得角", en: "Cape Verde", offsetMinutes: -60, dst: "" },
  { key: "cambodia", zh: "柬埔寨", en: "Cambodia", offsetMinutes: 420, dst: "" },
  { key: "cameroon", zh: "喀麦隆", en: "Cameroon", offsetMinutes: 60, dst: "" },
  { key: "canada", zh: "加拿大", en: "Canada", offsetMinutes: -300, dst: "us" },
  { key: "central-african-republic", zh: "中非共和国", en: "Central African Republic", offsetMinutes: 60, dst: "" },
  { key: "chad", zh: "乍得", en: "Chad", offsetMinutes: 60, dst: "" },
  { key: "chile", zh: "智利", en: "Chile", offsetMinutes: -240, dst: "cl" },
  { key: "china", zh: "中国", en: "China", offsetMinutes: 480, dst: "" },
  { key: "colombia", zh: "哥伦比亚", en: "Colombia", offsetMinutes: -300, dst: "" },
  { key: "comoros", zh: "科摩罗", en: "Comoros", offsetMinutes: 180, dst: "" },
  { key: "costa-rica", zh: "哥斯达黎加", en: "Costa Rica", offsetMinutes: -360, dst: "" },
  { key: "cote-divoire", zh: "科特迪瓦", en: "Côte d'Ivoire", offsetMinutes: 0, dst: "" },
  { key: "croatia", zh: "克罗地亚", en: "Croatia", offsetMinutes: 60, dst: "eu" },
  { key: "cuba", zh: "古巴", en: "Cuba", offsetMinutes: -300, dst: "us" },
  { key: "cyprus", zh: "塞浦路斯", en: "Cyprus", offsetMinutes: 120, dst: "eu" },
  { key: "czech-republic", zh: "捷克", en: "Czech Republic", offsetMinutes: 60, dst: "eu" },
  { key: "democratic-republic-of-the-congo", zh: "刚果民主共和国", en: "DR Congo", offsetMinutes: 60, dst: "" },
  { key: "denmark", zh: "丹麦", en: "Denmark", offsetMinutes: 60, dst: "eu" },
  { key: "djibouti", zh: "吉布提", en: "Djibouti", offsetMinutes: 180, dst: "" },
  { key: "dominica", zh: "多米尼克", en: "Dominica", offsetMinutes: -240, dst: "" },
  { key: "dominican-republic", zh: "多米尼加共和国", en: "Dominican Republic", offsetMinutes: -240, dst: "" },
  { key: "ecuador", zh: "厄瓜多尔", en: "Ecuador", offsetMinutes: -300, dst: "" },
  { key: "egypt", zh: "埃及", en: "Egypt", offsetMinutes: 120, dst: "eg" },
  { key: "el-salvador", zh: "萨尔瓦多", en: "El Salvador", offsetMinutes: -360, dst: "" },
  { key: "equatorial-guinea", zh: "赤道几内亚", en: "Equatorial Guinea", offsetMinutes: 60, dst: "" },
  { key: "eritrea", zh: "厄立特里亚", en: "Eritrea", offsetMinutes: 180, dst: "" },
  { key: "estonia", zh: "爱沙尼亚", en: "Estonia", offsetMinutes: 120, dst: "eu" },
  { key: "eswatini", zh: "斯威士兰", en: "Eswatini", offsetMinutes: 120, dst: "" },
  { key: "ethiopia", zh: "埃塞俄比亚", en: "Ethiopia", offsetMinutes: 180, dst: "" },
  { key: "fiji", zh: "斐济", en: "Fiji", offsetMinutes: 720, dst: "" },
  { key: "finland", zh: "芬兰", en: "Finland", offsetMinutes: 120, dst: "eu" },
  { key: "france", zh: "法国", en: "France", offsetMinutes: 60, dst: "eu" },
  { key: "gabon", zh: "加蓬", en: "Gabon", offsetMinutes: 60, dst: "" },
  { key: "gambia", zh: "冈比亚", en: "Gambia", offsetMinutes: 0, dst: "" },
  { key: "georgia", zh: "格鲁吉亚", en: "Georgia", offsetMinutes: 240, dst: "" },
  { key: "germany", zh: "德国", en: "Germany", offsetMinutes: 60, dst: "eu" },
  { key: "ghana", zh: "加纳", en: "Ghana", offsetMinutes: 0, dst: "" },
  { key: "greece", zh: "希腊", en: "Greece", offsetMinutes: 120, dst: "eu" },
  { key: "grenada", zh: "格林纳达", en: "Grenada", offsetMinutes: -240, dst: "" },
  { key: "guatemala", zh: "危地马拉", en: "Guatemala", offsetMinutes: -360, dst: "" },
  { key: "guinea", zh: "几内亚", en: "Guinea", offsetMinutes: 0, dst: "" },
  { key: "guinea-bissau", zh: "几内亚比绍", en: "Guinea-Bissau", offsetMinutes: 0, dst: "" },
  { key: "guyana", zh: "圭亚那", en: "Guyana", offsetMinutes: -240, dst: "" },
  { key: "haiti", zh: "海地", en: "Haiti", offsetMinutes: -300, dst: "us" },
  { key: "honduras", zh: "洪都拉斯", en: "Honduras", offsetMinutes: -360, dst: "" },
  { key: "hungary", zh: "匈牙利", en: "Hungary", offsetMinutes: 60, dst: "eu" },
  { key: "iceland", zh: "冰岛", en: "Iceland", offsetMinutes: 0, dst: "" },
  { key: "india", zh: "印度", en: "India", offsetMinutes: 330, dst: "" },
  { key: "indonesia", zh: "印度尼西亚", en: "Indonesia", offsetMinutes: 420, dst: "" },
  { key: "iran", zh: "伊朗", en: "Iran", offsetMinutes: 210, dst: "" },
  { key: "iraq", zh: "伊拉克", en: "Iraq", offsetMinutes: 180, dst: "" },
  { key: "ireland", zh: "爱尔兰", en: "Ireland", offsetMinutes: 0, dst: "eu" },
  { key: "israel", zh: "以色列", en: "Israel", offsetMinutes: 120, dst: "il" },
  { key: "italy", zh: "意大利", en: "Italy", offsetMinutes: 60, dst: "eu" },
  { key: "jamaica", zh: "牙买加", en: "Jamaica", offsetMinutes: -300, dst: "" },
  { key: "japan", zh: "日本", en: "Japan", offsetMinutes: 540, dst: "" },
  { key: "jordan", zh: "约旦", en: "Jordan", offsetMinutes: 180, dst: "" },
  { key: "kazakhstan", zh: "哈萨克斯坦", en: "Kazakhstan", offsetMinutes: 300, dst: "" },
  { key: "kenya", zh: "肯尼亚", en: "Kenya", offsetMinutes: 180, dst: "" },
  { key: "kiribati", zh: "基里巴斯", en: "Kiribati", offsetMinutes: 720, dst: "" },
  { key: "kosovo", zh: "科索沃", en: "Kosovo", offsetMinutes: 60, dst: "eu" },
  { key: "kuwait", zh: "科威特", en: "Kuwait", offsetMinutes: 180, dst: "" },
  { key: "kyrgyzstan", zh: "吉尔吉斯斯坦", en: "Kyrgyzstan", offsetMinutes: 360, dst: "" },
  { key: "laos", zh: "老挝", en: "Laos", offsetMinutes: 420, dst: "" },
  { key: "latvia", zh: "拉脱维亚", en: "Latvia", offsetMinutes: 120, dst: "eu" },
  { key: "lebanon", zh: "黎巴嫩", en: "Lebanon", offsetMinutes: 120, dst: "eu" },
  { key: "lesotho", zh: "莱索托", en: "Lesotho", offsetMinutes: 120, dst: "" },
  { key: "liberia", zh: "利比里亚", en: "Liberia", offsetMinutes: 0, dst: "" },
  { key: "libya", zh: "利比亚", en: "Libya", offsetMinutes: 120, dst: "" },
  { key: "liechtenstein", zh: "列支敦士登", en: "Liechtenstein", offsetMinutes: 60, dst: "eu" },
  { key: "lithuania", zh: "立陶宛", en: "Lithuania", offsetMinutes: 120, dst: "eu" },
  { key: "luxembourg", zh: "卢森堡", en: "Luxembourg", offsetMinutes: 60, dst: "eu" },
  { key: "madagascar", zh: "马达加斯加", en: "Madagascar", offsetMinutes: 180, dst: "" },
  { key: "malawi", zh: "马拉维", en: "Malawi", offsetMinutes: 120, dst: "" },
  { key: "malaysia", zh: "马来西亚", en: "Malaysia", offsetMinutes: 480, dst: "" },
  { key: "maldives", zh: "马尔代夫", en: "Maldives", offsetMinutes: 300, dst: "" },
  { key: "mali", zh: "马里", en: "Mali", offsetMinutes: 0, dst: "" },
  { key: "malta", zh: "马耳他", en: "Malta", offsetMinutes: 60, dst: "eu" },
  { key: "marshall-islands", zh: "马绍尔群岛", en: "Marshall Islands", offsetMinutes: 720, dst: "" },
  { key: "mauritania", zh: "毛里塔尼亚", en: "Mauritania", offsetMinutes: 0, dst: "" },
  { key: "mauritius", zh: "毛里求斯", en: "Mauritius", offsetMinutes: 240, dst: "" },
  { key: "mexico", zh: "墨西哥", en: "Mexico", offsetMinutes: -360, dst: "" },
  { key: "micronesia", zh: "密克罗尼西亚", en: "Micronesia", offsetMinutes: 660, dst: "" },
  { key: "moldova", zh: "摩尔多瓦", en: "Moldova", offsetMinutes: 120, dst: "eu" },
  { key: "monaco", zh: "摩纳哥", en: "Monaco", offsetMinutes: 60, dst: "eu" },
  { key: "mongolia", zh: "蒙古", en: "Mongolia", offsetMinutes: 480, dst: "" },
  { key: "montenegro", zh: "黑山", en: "Montenegro", offsetMinutes: 60, dst: "eu" },
  { key: "morocco", zh: "摩洛哥", en: "Morocco", offsetMinutes: 60, dst: "" },
  { key: "mozambique", zh: "莫桑比克", en: "Mozambique", offsetMinutes: 120, dst: "" },
  { key: "myanmar", zh: "缅甸", en: "Myanmar", offsetMinutes: 390, dst: "" },
  { key: "namibia", zh: "纳米比亚", en: "Namibia", offsetMinutes: 120, dst: "" },
  { key: "nauru", zh: "瑙鲁", en: "Nauru", offsetMinutes: 720, dst: "" },
  { key: "nepal", zh: "尼泊尔", en: "Nepal", offsetMinutes: 345, dst: "" },
  { key: "netherlands", zh: "荷兰", en: "Netherlands", offsetMinutes: 60, dst: "eu" },
  { key: "new-zealand", zh: "新西兰", en: "New Zealand", offsetMinutes: 720, dst: "nz" },
  { key: "nicaragua", zh: "尼加拉瓜", en: "Nicaragua", offsetMinutes: -360, dst: "" },
  { key: "niger", zh: "尼日尔", en: "Niger", offsetMinutes: 60, dst: "" },
  { key: "nigeria", zh: "尼日利亚", en: "Nigeria", offsetMinutes: 60, dst: "" },
  { key: "north-korea", zh: "朝鲜", en: "North Korea", offsetMinutes: 540, dst: "" },
  { key: "north-macedonia", zh: "北马其顿", en: "North Macedonia", offsetMinutes: 60, dst: "eu" },
  { key: "norway", zh: "挪威", en: "Norway", offsetMinutes: 60, dst: "eu" },
  { key: "oman", zh: "阿曼", en: "Oman", offsetMinutes: 240, dst: "" },
  { key: "pakistan", zh: "巴基斯坦", en: "Pakistan", offsetMinutes: 300, dst: "" },
  { key: "palau", zh: "帕劳", en: "Palau", offsetMinutes: 540, dst: "" },
  { key: "palestine", zh: "巴勒斯坦", en: "Palestine", offsetMinutes: 120, dst: "il" },
  { key: "panama", zh: "巴拿马", en: "Panama", offsetMinutes: -300, dst: "" },
  { key: "papua-new-guinea", zh: "巴布亚新几内亚", en: "Papua New Guinea", offsetMinutes: 600, dst: "" },
  { key: "paraguay", zh: "巴拉圭", en: "Paraguay", offsetMinutes: -180, dst: "" },
  { key: "peru", zh: "秘鲁", en: "Peru", offsetMinutes: -300, dst: "" },
  { key: "philippines", zh: "菲律宾", en: "Philippines", offsetMinutes: 480, dst: "" },
  { key: "poland", zh: "波兰", en: "Poland", offsetMinutes: 60, dst: "eu" },
  { key: "portugal", zh: "葡萄牙", en: "Portugal", offsetMinutes: 0, dst: "eu" },
  { key: "qatar", zh: "卡塔尔", en: "Qatar", offsetMinutes: 180, dst: "" },
  { key: "republic-of-the-congo", zh: "刚果共和国", en: "Republic of the Congo", offsetMinutes: 60, dst: "" },
  { key: "romania", zh: "罗马尼亚", en: "Romania", offsetMinutes: 120, dst: "eu" },
  { key: "russia", zh: "俄罗斯", en: "Russia", offsetMinutes: 180, dst: "" },
  { key: "rwanda", zh: "卢旺达", en: "Rwanda", offsetMinutes: 120, dst: "" },
  { key: "saint-kitts-and-nevis", zh: "圣基茨和尼维斯", en: "Saint Kitts and Nevis", offsetMinutes: -240, dst: "" },
  { key: "saint-lucia", zh: "圣卢西亚", en: "Saint Lucia", offsetMinutes: -240, dst: "" },
  { key: "saint-vincent-and-the-grenadines", zh: "圣文森特和格林纳丁斯", en: "Saint Vincent and the Grenadines", offsetMinutes: -240, dst: "" },
  { key: "samoa", zh: "萨摩亚", en: "Samoa", offsetMinutes: 780, dst: "" },
  { key: "san-marino", zh: "圣马力诺", en: "San Marino", offsetMinutes: 60, dst: "eu" },
  { key: "sao-tome-and-principe", zh: "圣多美和普林西比", en: "São Tomé and Príncipe", offsetMinutes: 0, dst: "" },
  { key: "saudi-arabia", zh: "沙特阿拉伯", en: "Saudi Arabia", offsetMinutes: 180, dst: "" },
  { key: "senegal", zh: "塞内加尔", en: "Senegal", offsetMinutes: 0, dst: "" },
  { key: "serbia", zh: "塞尔维亚", en: "Serbia", offsetMinutes: 60, dst: "eu" },
  { key: "seychelles", zh: "塞舌尔", en: "Seychelles", offsetMinutes: 240, dst: "" },
  { key: "sierra-leone", zh: "塞拉利昂", en: "Sierra Leone", offsetMinutes: 0, dst: "" },
  { key: "singapore", zh: "新加坡", en: "Singapore", offsetMinutes: 480, dst: "" },
  { key: "slovakia", zh: "斯洛伐克", en: "Slovakia", offsetMinutes: 60, dst: "eu" },
  { key: "slovenia", zh: "斯洛文尼亚", en: "Slovenia", offsetMinutes: 60, dst: "eu" },
  { key: "solomon-islands", zh: "所罗门群岛", en: "Solomon Islands", offsetMinutes: 660, dst: "" },
  { key: "somalia", zh: "索马里", en: "Somalia", offsetMinutes: 180, dst: "" },
  { key: "south-africa", zh: "南非", en: "South Africa", offsetMinutes: 120, dst: "" },
  { key: "south-korea", zh: "韩国", en: "South Korea", offsetMinutes: 540, dst: "" },
  { key: "south-sudan", zh: "南苏丹", en: "South Sudan", offsetMinutes: 120, dst: "" },
  { key: "spain", zh: "西班牙", en: "Spain", offsetMinutes: 60, dst: "eu" },
  { key: "sri-lanka", zh: "斯里兰卡", en: "Sri Lanka", offsetMinutes: 330, dst: "" },
  { key: "sudan", zh: "苏丹", en: "Sudan", offsetMinutes: 120, dst: "" },
  { key: "suriname", zh: "苏里南", en: "Suriname", offsetMinutes: -180, dst: "" },
  { key: "sweden", zh: "瑞典", en: "Sweden", offsetMinutes: 60, dst: "eu" },
  { key: "switzerland", zh: "瑞士", en: "Switzerland", offsetMinutes: 60, dst: "eu" },
  { key: "syria", zh: "叙利亚", en: "Syria", offsetMinutes: 180, dst: "" },
  { key: "taiwan", zh: "台湾", en: "Taiwan", offsetMinutes: 480, dst: "" },
  { key: "tajikistan", zh: "塔吉克斯坦", en: "Tajikistan", offsetMinutes: 300, dst: "" },
  { key: "tanzania", zh: "坦桑尼亚", en: "Tanzania", offsetMinutes: 180, dst: "" },
  { key: "thailand", zh: "泰国", en: "Thailand", offsetMinutes: 420, dst: "" },
  { key: "timor-leste", zh: "东帝汶", en: "Timor-Leste", offsetMinutes: 540, dst: "" },
  { key: "togo", zh: "多哥", en: "Togo", offsetMinutes: 0, dst: "" },
  { key: "tonga", zh: "汤加", en: "Tonga", offsetMinutes: 780, dst: "" },
  { key: "trinidad-and-tobago", zh: "特立尼达和多巴哥", en: "Trinidad and Tobago", offsetMinutes: -240, dst: "" },
  { key: "tunisia", zh: "突尼斯", en: "Tunisia", offsetMinutes: 60, dst: "" },
  { key: "turkey", zh: "土耳其", en: "Turkey", offsetMinutes: 180, dst: "" },
  { key: "turkmenistan", zh: "土库曼斯坦", en: "Turkmenistan", offsetMinutes: 300, dst: "" },
  { key: "tuvalu", zh: "图瓦卢", en: "Tuvalu", offsetMinutes: 720, dst: "" },
  { key: "uganda", zh: "乌干达", en: "Uganda", offsetMinutes: 180, dst: "" },
  { key: "ukraine", zh: "乌克兰", en: "Ukraine", offsetMinutes: 120, dst: "eu" },
  { key: "united-arab-emirates", zh: "阿联酋", en: "United Arab Emirates", offsetMinutes: 240, dst: "" },
  { key: "united-kingdom", zh: "英国", en: "United Kingdom", offsetMinutes: 0, dst: "eu" },
  { key: "united-states", zh: "美国", en: "United States", offsetMinutes: -300, dst: "us" },
  { key: "uruguay", zh: "乌拉圭", en: "Uruguay", offsetMinutes: -180, dst: "" },
  { key: "uzbekistan", zh: "乌兹别克斯坦", en: "Uzbekistan", offsetMinutes: 300, dst: "" },
  { key: "vanuatu", zh: "瓦努阿图", en: "Vanuatu", offsetMinutes: 660, dst: "" },
  { key: "vatican-city", zh: "梵蒂冈", en: "Vatican City", offsetMinutes: 60, dst: "eu" },
  { key: "venezuela", zh: "委内瑞拉", en: "Venezuela", offsetMinutes: -240, dst: "" },
  { key: "vietnam", zh: "越南", en: "Vietnam", offsetMinutes: 420, dst: "" },
  { key: "yemen", zh: "也门", en: "Yemen", offsetMinutes: 180, dst: "" },
  { key: "zambia", zh: "赞比亚", en: "Zambia", offsetMinutes: 120, dst: "" },
  { key: "zimbabwe", zh: "津巴布韦", en: "Zimbabwe", offsetMinutes: 120, dst: "" }
]

// 默认只选中国，其余在编辑页自行添加
export const DEFAULT_SELECTION: string[] = ["china"]

export function OffsetLabel(offsetMinutes: number): string {
  const sign = offsetMinutes >= 0 ? "+" : "-"
  const abs = Math.abs(offsetMinutes)
  return "UTC" + sign + Math.floor(abs / 60) + (abs % 60 ? ":" + (abs % 60) : "")
}

// 月份用 0-11，与 Date 一致；返回当天 0 点的 UTC 时间戳，避免时区干扰
function NthSundayMs(year: number, month0: number, n: number): number {
  const first = new Date(year, month0, 1)
  const offset = (7 - first.getDay()) % 7
  return new Date(year, month0, 1 + offset + (n - 1) * 7).getTime()
}

function LastSundayMs(year: number, month0: number): number {
  const last = new Date(year, month0 + 1, 0)
  const offset = (last.getDay() % 7)
  return new Date(year, month0, last.getDate() - offset).getTime()
}

function LastWeekdayMs(year: number, month0: number, weekday: number): number {
  const last = new Date(year, month0 + 1, 0)
  const offset = (last.getDay() - weekday + 7) % 7
  return new Date(year, month0, last.getDate() - offset).getTime()
}

// 判断给定时刻是否处于夏令时窗口内
export function IsDstActive(now: Date, rule: string): boolean {
  if (!rule) {
    return false
  }
  const year = now.getFullYear()
  const t = now.getTime()
  // 北半球规则：当年窗口内
  if (rule == "us") {
    return t >= NthSundayMs(year, 2, 2) && t < NthSundayMs(year, 10, 1)
  }
  if (rule == "eu") {
    return t >= LastSundayMs(year, 2) && t < LastSundayMs(year, 9)
  }
  if (rule == "il") {
    // 以色列：3月最后周日前的周五开始
    return t >= LastWeekdayMs(year, 2, 5) && t < LastSundayMs(year, 9)
  }
  if (rule == "eg") {
    // 埃及：4月最后周五至10月最后周四
    return t >= LastWeekdayMs(year, 3, 5) && t < LastWeekdayMs(year, 9, 4)
  }
  // 南半球规则：跨年窗口
  if (rule == "au") {
    return t >= NthSundayMs(year, 9, 1) || t < NthSundayMs(year, 3, 1)
  }
  if (rule == "nz") {
    return t >= LastSundayMs(year, 8) || t < NthSundayMs(year, 3, 1)
  }
  if (rule == "cl") {
    return t >= NthSundayMs(year, 8, 1) || t < NthSundayMs(year, 3, 1)
  }
  return false
}

export function EffectiveOffset(country: WorldCountry, now: Date): number {
  return country.offsetMinutes + (IsDstActive(now, country.dst) ? 60 : 0)
}

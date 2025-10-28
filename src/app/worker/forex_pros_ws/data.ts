import { QuoteCategory } from "../../domain/enum/quote_category.enum";

export const favorites = [
    {
        origem: "Índice Dólar",
        sigla: "DX",
        pid: "8827",
        position: 1,
        category: QuoteCategory.FAVORITE
    },
    {
        origem: "Dólar Brasil",
        sigla: "USD/BRL",
        pid: "2103",
        position: 2,
        category: QuoteCategory.FAVORITE
    },
    {
        origem: "Petróleo EUA",
        sigla: "WTI Oil",
        pid: "8849",
        position: 3,
        category: QuoteCategory.FAVORITE
    },
    {
        origem: "Índice S&P 500",
        sigla: "S&P 500",
        pid: "8839",
        position: 4,
        category: QuoteCategory.FAVORITE
    },
    {
        origem: "Índice VIX",
        sigla: "VIX",
        pid: "44336",
        position: 5,
        category: QuoteCategory.FAVORITE
    },
    {
        origem: "Bitcoin",
        sigla: "USD/BTC",
        pid: "1057391",
        position: 6,
        category: QuoteCategory.FAVORITE
    },
];

const eua = [
    {
        origem: "Índice S&P 500",
        sigla: "S&P 500",
        pid: "8839",
        position: 1,
        category: QuoteCategory.EUA
    },
    {
        origem: "Índice Nasdaq",
        sigla: "Nasdaq",
        pid: "8874",
        position: 2,
        category: QuoteCategory.EUA
    },
    {
        origem: "Índice Dow Jones",
        sigla: "Dow Jones",
        pid: "8873",
        position: 3,
        category: QuoteCategory.EUA
    },
    {
        origem: "Índice VIX",
        sigla: "VIX",
        pid: "44336",
        position: 4,
        category: QuoteCategory.EUA
    },
    {
        origem: "US 500",
        sigla: "US 500",
        pid: "1175153",
        position: 5,
        category: QuoteCategory.EUA
    },
    {
        origem: "US 30",
        sigla: "US 30",
        pid: "1175152",
        position: 6,
        category: QuoteCategory.EUA
    },
    {
        origem: "NVIDIA",
        sigla: "NVIDIA",
        pid: "6497",
        position: 7,
        category: QuoteCategory.EUA
    },
    {
        origem: "JP Morgan",
        sigla: "JP Morgan",
        pid: "267",
        position: 8,
        category: QuoteCategory.EUA
    },
    {
        origem: "Apple",
        sigla: "APPL",
        pid: "6408",
        position: 9,
        category: QuoteCategory.EUA
    },
];

const jurosEua = [
    {
        origem: "Título US 2Y",
        sigla: "US2Y",
        pid: "23701",
        position: 1,
        category: QuoteCategory.JUROS_EUA
    },
    {
        origem: "Título US 10Y",
        sigla: "US10Y",
        pid: "23705",
        position: 2,
        category: QuoteCategory.JUROS_EUA
    },
    {
        origem: "Título US 30Y",
        sigla: "US30Y",
        pid: "23706",
        position: 3,
        category: QuoteCategory.JUROS_EUA
    },
];

const commodities = [
    {
        origem: "Petróleo EUA",
        sigla: "WTI Oil",
        pid: "8849",
        position: 1,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Petróleo Brent",
        sigla: "Brent",
        pid: "8833",
        position: 2,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Ouro Futuro CME",
        sigla: "Gold",
        pid: "8830",
        position: 3,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Prata",
        sigla: "Prata",
        pid: "8836",
        position: 4,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Cobre",
        sigla: "Cobre",
        pid: "8831",
        position: 5,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Bloomberg Commod.",
        sigla: "BCOM",
        pid: "948434",
        position: 6,
        category: QuoteCategory.COMMODITIES
    },
];

const commoditiesAgricolas = [
    {
        origem: "Trigo",
        sigla: "US Wheat",
        pid: "8917",
        position: 7,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Milho",
        sigla: "US Corn",
        pid: "8918",
        position: 8,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Soja",
        sigla: "US Soybeans",
        pid: "8916",
        position: 9,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Farelo de Soja",
        sigla: "US Soybean Meal",
        pid: "8919",
        position: 10,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Óleo de soja",
        sigla: "US Soybean Oil",
        pid: "8915",
        position: 11,
        category: QuoteCategory.COMMODITIES
    },
    {
        origem: "Café",
        sigla: "US Coffee C",
        pid: "8832",
        position: 12,
        category: QuoteCategory.COMMODITIES
    },
];


const brasil = [
    {
        origem: "Dólar Brasil",
        sigla: "USD/BRL",
        pid: "2103",
        position: 1,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "Real_F CME",
        sigla: "6L",
        pid: "1097481",
        position: 2,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "IBOV Futuro",
        sigla: "INDFUT",
        pid: "941612",
        position: 3,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "BRL 10 Anos",
        sigla: "BRL10Y",
        pid: "24029",
        position: 4,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "CDS 5 Anos Brasil",
        sigla: "CDS5YBRL",
        pid: "1116031",
        position: 5,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "PETR ADR",
        sigla: "PETR ADR",
        pid: "8028",
        position: 6,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "VALE ADR",
        sigla: "VALE ADR",
        pid: "13059",
        position: 7,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "ITUB ADR",
        sigla: "ITUB ADR",
        pid: "32307",
        position: 8,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "BB ADR",
        sigla: "Banco do Brasil SA ADR",
        pid: "941759",
        position: 9,
        category: QuoteCategory.BRASIL
    },
    {
        origem: "EWZ",
        sigla: "EWZ",
        pid: "509",
        position: 10,
        category: QuoteCategory.BRASIL
    },
];

const cryptos = [
    {
        origem: "Bitcoin",
        sigla: "USD/BTC",
        pid: "1057391",
        position: 0,
        category: QuoteCategory.CRYPTO
    },
    {
        origem: "Ethereum",
        sigla: "USD/ETH",
        pid: "1061443",
        position: 0,
        category: QuoteCategory.CRYPTO
    },
];

const dx = [
    {
        origem: "Índice Dólar",
        sigla: "DX",
        pid: "8827",
        position: 1,
        category: QuoteCategory.DX
    },
    {
        origem: "Euro",
        sigla: "USD/EUR",
        pid: "2124",
        position: 2,
        category: QuoteCategory.DX
    },
    {
        origem: "Japão",
        sigla: "USD/JPY",
        pid: "3",
        position: 3,
        category: QuoteCategory.DX
    },
    {
        origem: "Inglaterra",
        sigla: "USD/GBP",
        pid: "2126",
        position: 4,
        category: QuoteCategory.DX
    },
    {
        origem: "Canadá",
        sigla: "USD/CAD",
        pid: "7",
        position: 5,
        category: QuoteCategory.DX
    },
    {
        origem: "Suécia",
        sigla: "USD/SEK",
        pid: "41",
        position: 6,
        category: QuoteCategory.DX
    },
    {
        origem: "Suíça",
        sigla: "USD/CHF",
        pid: "4",
        position: 7,
        category: QuoteCategory.DX
    },
];

const emergentes = [
    {
        origem: "Brasil",
        sigla: "USD/BRL",
        pid: "2103",
        position: 1,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "México",
        sigla: "USD/MXN",
        pid: "39",
        position: 2,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "China",
        sigla: "USD/CNY",
        pid: "2111",
        position: 3,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "Rússia",
        sigla: "USD/RUB",
        pid: "2186",
        position: 4,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "Índia",
        sigla: "USD/INR",
        pid: "160",
        position: 5,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "África do Sul",
        sigla: "USD/ZAR",
        pid: "17",
        position: 6,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "Turquia",
        sigla: "USD/TRY",
        pid: "18",
        position: 7,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "Hungria",
        sigla: "USD/HUF",
        pid: "91",
        position: 8,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "Polônia",
        sigla: "USD/PLN",
        pid: "40",
        position: 9,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "Chéquia",
        sigla: "USD/CZK",
        pid: "103",
        position: 10,
        category: QuoteCategory.EMERGENTES
    },
    {
        origem: "Indonésia",
        sigla: "USD/IDR",
        pid: "2138",
        position: 11,
        category: QuoteCategory.EMERGENTES
    },
];

const latam = [
    {
        origem: "Brasil",
        sigla: "USD/BRL",
        pid: "2103",
        position: 1,
        category: QuoteCategory.LATAM
    },
    {
        origem: "Argentina",
        sigla: "USD/ARS",
        pid: "2090",
        position: 2,
        category: QuoteCategory.LATAM
    },
    {
        origem: "Chile",
        sigla: "USD/CLP",
        pid: "2110",
        position: 0,
        category: QuoteCategory.LATAM
    },
    {
        origem: "Colômbia",
        sigla: "USD/COP",
        pid: "2112",
        position: 0,
        category: QuoteCategory.LATAM
    },
    {
        origem: "Peru",
        sigla: "USD/PEN",
        pid: "2177",
        position: 0,
        category: QuoteCategory.LATAM
    },
    {
        origem: "Paraguai",
        sigla: "USD/PYG",
        pid: "2181",
        position: 0,
        category: QuoteCategory.LATAM
    },
    {
        origem: "Uruguai",
        sigla: "USD/UYU",
        pid: "2210",
        position: 0,
        category: QuoteCategory.LATAM
    },
    {
        origem: "Bolívia",
        sigla: "USD/BOB",
        pid: "2102",
        position: 0,
        category: QuoteCategory.LATAM
    },
];

const europa = [
    {
        origem: "Stoxx 600",
        sigla: "Stoxx 600",
        pid: "40823",
        position: 0,
        category: QuoteCategory.EUROPA
    },
    {
        origem: "Reino Unido (FTSE 100)",
        sigla: "Reino Unido",
        pid: "27",
        position: 0,
        category: QuoteCategory.EUROPA
    },
    {
        origem: "Alemanha (DAX)",
        sigla: "Alemanha",
        pid: "8826",
        position: 0,
        category: QuoteCategory.EUROPA
    },
    {
        origem: "Milão",
        sigla: "Milão",
        pid: "177",
        position: 0,
        category: QuoteCategory.EUROPA
    },
    {
        origem: "Madri",
        sigla: "Madri",
        pid: "24228",
        position: 0,
        category: QuoteCategory.EUROPA
    },
    {
        origem: "França (CAC 40)",
        sigla: "França",
        pid: "167",
        position: 0,
        category: QuoteCategory.EUROPA
    },
    {
        origem: "Euro",
        sigla: "USD/EUR",
        pid: "2124",
        position: 0,
        category: QuoteCategory.EUROPA
    },
];

const asia = [
    {
        origem: "Hang Seng",
        sigla: "Hang Seng",
        pid: "40",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "China A50",
        sigla: "China A50",
        pid: "44486",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "Shanghai",
        sigla: "Shanghai",
        pid: "40820",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "SZSE Component",
        sigla: "SZSE Component",
        pid: "942630",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "Kospi (Coreia do Sul)",
        sigla: "Kospi (Sul-coreano)",
        pid: "37426",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "Taiex (Taiwan)",
        sigla: "Taiex (Taiwan)",
        pid: "38017",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "DJ Shanghai",
        sigla: "DJ Shanghai",
        pid: "954522",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "China A50",
        sigla: "China A50",
        pid: "28930",
        position: 0,
        category: QuoteCategory.ASIA
    },
    {
        origem: "S&P/ASX 200",
        sigla: "S&P/ASX 200",
        pid: "171",
        position: 0,
        category: QuoteCategory.ASIA
    },
];

const dolar = [
    {
        origem: "Costa Rica",
        sigla: "USD/CRC",
        pid: "2113",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "República Dominicana",
        sigla: "USD/DOP",
        pid: "2118",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Honduras",
        sigla: "USD/HNL",
        pid: "2135",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Haiti",
        sigla: "USD/HTG",
        pid: "2137",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Jamaica",
        sigla: "USD/JMD",
        pid: "2142",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Nicarágua",
        sigla: "USD/NIO",
        pid: "2172",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "El Salvador",
        sigla: "USD/SVC",
        pid: "2199",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Dinamarca",
        sigla: "USD/DKK",
        pid: "43",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Noruega",
        sigla: "USD/NOK",
        pid: "59",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Egito",
        sigla: "USD/EGP",
        pid: "2122",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Nigéria",
        sigla: "USD/NGN",
        pid: "2171",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Hong Kong",
        sigla: "USD/HKD",
        pid: "155",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Israel",
        sigla: "USD/ILS",
        pid: "63",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Coreia do Sul",
        sigla: "USD/KRW",
        pid: "650",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Filipinas",
        sigla: "USD/PHP",
        pid: "2179",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Cingapura",
        sigla: "USD/SGD",
        pid: "42",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Tailândia",
        sigla: "USD/THB",
        pid: "147",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Taiwan",
        sigla: "USD/TWD",
        pid: "2206",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Austrália",
        sigla: "USD/AUD",
        pid: "2091",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Nova Zelândia",
        sigla: "USD/NZD",
        pid: "2174",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Cuba",
        sigla: "USD/CUP",
        pid: "2114",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Panamá",
        sigla: "USD/PAB",
        pid: "2176",
        position: 0,
        category: QuoteCategory.DOLAR
    },
    {
        origem: "Malásia",
        sigla: "USD/MYR",
        pid: "2168",
        position: 0,
        category: QuoteCategory.DOLAR
    },
];

export const quotes = [
    ...eua,
    ...jurosEua,
    ...commodities,
    ...commoditiesAgricolas,
    ...brasil,
    ...cryptos,
    ...dx,
    ...emergentes,
    ...latam,
    ...europa,
    ...asia,
    ...dolar
]
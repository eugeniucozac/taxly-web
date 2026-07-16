import type { Comparison } from "./en";

// Authored Spanish comparisons — same slugs as en.ts (routing/sitemap depend on it).
export const comparisons: Comparison[] = [
  {
    slug: "turbotax",
    rival: "TurboTax",
    title: "Taxly vs TurboTax: una comparación honesta",
    description:
      "TurboTax es el software de impuestos más pulido de EE. UU. Esto es lo que genuinamente hace mejor, lo que cuesta al pagar, y cuándo Taxly con precio fijo es la mejor opción.",
    verdictTitle: "El veredicto honesto",
    verdict:
      "TurboTax es el software de impuestos más completo y pulido de Estados Unidos — y eso se paga al final, a menudo más de lo que viste al empezar. Si quieres la máxima cobertura y la marca más grande, es genuinamente buen software. El argumento de Taxly es más simple: el precio que ves al empezar es el precio que pagas al presentar.",
    rows: [
      {
        feature: "Precio anunciado vs precio al pagar",
        taxly: "Idéntico — garantía de precio fijo",
        rival: "Frecuentemente difiere; mejoras sugeridas a mitad del proceso",
        winner: "taxly",
      },
      {
        feature: "Precio federal para trabajo independiente / 1099",
        taxly: "$69 fijo",
        rival: "Típicamente $100+ antes del estado (verifica el precio actual)",
        winner: "taxly",
      },
      {
        feature: "Precio por declaración estatal",
        taxly: "Primer estado incluido, luego $29 fijo",
        rival: "A menudo $40–$60+ por estado",
        winner: "taxly",
      },
      {
        feature: "Amplitud de situaciones fiscales",
        taxly: "Enfocado: W-2, 1099/gig, créditos comunes, estados de lanzamiento",
        rival: "Casi todo, incluidos casos raros",
        winner: "rival",
      },
      {
        feature: "Revisión de CPA/EA en vivo",
        taxly: "Planeada como complemento posterior, no al lanzamiento",
        rival: "Red madura de expertos a nivel nacional",
        winner: "rival",
      },
      {
        feature: "Importación de documentos",
        taxly: "Importaciones básicas al lanzamiento",
        rival: "Importa de casi cualquier empleador y bróker",
        winner: "rival",
      },
      {
        feature: "Ventas adicionales durante el proceso",
        taxly: "Ninguna — niveles revelados desde el inicio",
        rival: "Persistentes; la queja #1 de los usuarios",
        winner: "taxly",
      },
      {
        feature: "Orientación en lenguaje claro",
        taxly: "Es el producto central",
        rival: "Buena, pero optimizada para vender mejoras",
        winner: "taxly",
      },
      {
        feature: "Historial",
        taxly: "Nuevo para el año fiscal 2026 — sin historial aún",
        rival: "Décadas, decenas de millones de declaraciones al año",
        winner: "rival",
      },
    ],
    theyWin: [
      "Amplitud: TurboTax maneja casi cualquier situación fiscal, incluidas las raras que Taxly no cubrirá al lanzamiento.",
      "Ayuda experta en vivo: su red de CPA/EA es madura y genuinamente útil para declaraciones complejas.",
      "Importaciones: se conecta con más empleadores, bancos y brókers que nadie.",
      "Historial: décadas de declaraciones frente a nuestra primera temporada.",
    ],
    stayWith: [
      "Tu declaración tiene situaciones raras o complejas (K-1, negocio multiestatal, ingresos extranjeros).",
      "Quieres que un CPA en vivo revise tu declaración antes de presentarla este año.",
      "Lo has usado por años, tus datos se importan sin problema y el precio al pagar no te molesta.",
    ],
    taxlyFits: [
      "Eres trabajador gig o freelancer y te empujan al nivel más caro de TurboTax.",
      "Te ha pasado que el precio al pagar no coincide con el anunciado.",
      "Tu situación es común — W-2, 1099, hijos, créditos estándar — y prefieres pagar un precio fijo conocido.",
    ],
    faqs: [
      {
        q: "¿Es TurboTax un mal software?",
        a: "No — es el software de impuestos más pulido que existe, y para declaraciones complejas su amplitud es una ventaja real. La queja que llevó a la FTC a actuar en 2024 no fue la calidad; fue la publicidad engañosa de 'gratis' y las ventas adicionales al pagar. Si eso no te molesta, funciona bien.",
      },
      {
        q: "¿Por qué TurboTax es más caro para freelancers?",
        a: "El ingreso de trabajo independiente requiere su nivel de consumo más alto, y las declaraciones estatales se cobran aparte. Un trabajador gig con un estado puede llegar razonablemente a $150+ al pagar. El equivalente de Taxly es $69 todo incluido — la primera declaración estatal está incluida — revelado antes de empezar. Verifica los precios actuales de TurboTax en su sitio — cambian a mitad de temporada.",
      },
      {
        q: "¿Puedo cambiarme a Taxly si usé TurboTax el año pasado?",
        a: "Sí — es una función de lanzamiento: importa tu declaración del año pasado para no volver a escribir todo. Taxly abre para declaraciones del año fiscal 2026 en enero de 2027; unirte a la lista de espera reserva tu lugar.",
      },
      {
        q: "¿De verdad Taxly no hace ventas adicionales?",
        a: "Si tu situación resulta necesitar un nivel superior a mitad del proceso (aparece un 1099, por ejemplo), Taxly te lo dice en esa respuesta exacta, muestra el nuevo total exacto y te deja deshacerlo con un toque. Lo que nunca hace es cotizar un precio y cobrar otro al final — esa es la garantía de precio fijo.",
      },
    ],
  },
  {
    slug: "freetaxusa",
    rival: "FreeTaxUSA",
    title: "Taxly vs FreeTaxUSA: una comparación honesta",
    description:
      "FreeTaxUSA es la opción económica honesta: $0 federal, unos $15 por estado. Aquí verás cuándo es genuinamente la mejor opción — y qué compra realmente el precio de Taxly.",
    verdictTitle: "El veredicto honesto",
    verdict:
      "FreeTaxUSA es más barato que Taxly — $0 federal y unos $15 por estado, con años de historial sólido y sin emboscadas de precio. Si conoces tu situación fiscal y te sientes cómodo con una interfaz tipo formulario, úsalo; es la opción económica honesta. El precio de Taxly compra una sola cosa: orientación en lenguaje claro para quien no conoce los formularios — especialmente quien presenta un 1099 por primera vez.",
    rows: [
      {
        feature: "Precio federal (trabajo independiente)",
        taxly: "$69",
        rival: "$0",
        winner: "rival",
      },
      {
        feature: "Precio por declaración estatal",
        taxly: "Primer estado incluido, luego $29",
        rival: "~$15 cada uno (verifica el precio actual)",
        winner: "taxly",
      },
      {
        feature: "Precios honestos sin ventas adicionales",
        taxly: "Sí — garantía de precio fijo",
        rival: "Sí — genuinamente",
        winner: "tie",
      },
      {
        feature: "Estilo de interfaz",
        taxly: "Entrevista guiada, lenguaje claro, móvil primero",
        rival: "Tipo formulario; asume que sabes qué va dónde",
        winner: "taxly",
      },
      {
        feature: "Orientación para primer 1099",
        taxly: "El producto central: deducciones sugeridas, impuesto SE explicado",
        rival: "Mínima — necesitas saber qué reclamar",
        winner: "taxly",
      },
      {
        feature: "Presentación en español",
        taxly: "Sitio en español ya; producto en español planeado tras el lanzamiento",
        rival: "Solo inglés",
        winner: "taxly",
      },
      {
        feature: "Historial",
        taxly: "Nuevo para el año fiscal 2026",
        rival: "Millones de declaraciones durante muchos años",
        winner: "rival",
      },
    ],
    theyWin: [
      "Precio: $0 federal es imbatible, y ~$15 por estado es menos que todos.",
      "Historial: lleva años presentando millones de declaraciones sin hacer ruido.",
      "Honestidad: sin emboscadas de precio — merece el mismo crédito que pedimos.",
    ],
    stayWith: [
      "Ya has declarado antes y conoces tu situación — solo necesitas completar los formularios barato.",
      "Una interfaz tipo formulario no te frena.",
      "Cada dólar importa más que la orientación: es la forma creíble más barata de presentar un 1099.",
    ],
    taxlyFits: [
      "Es tu primer año con ingresos 1099 y no sabes qué puedes deducir.",
      "Quieres que el software te entreviste en lenguaje claro en vez de mostrarte formularios del IRS.",
      "Tú o tu familia declaran con más comodidad en español.",
    ],
    faqs: [
      {
        q: "¿Es FreeTaxUSA confiable?",
        a: "Sí. Es un proveedor de e-file autorizado por el IRS que ha presentado millones de declaraciones, y sus precios son genuinamente honestos — $0 federal, unos $15 por estado, sin emboscadas. Lo consideramos la opción económica creíble de este mercado.",
      },
      {
        q: "Si FreeTaxUSA es honesto y más barato, ¿por qué pagar por Taxly?",
        a: "Orientación. FreeTaxUSA asume que sabes en general qué va dónde en una declaración; así se mantiene barato. Taxly está hecho para quien no lo sabe — un freelancer de primer año que nunca oyó del impuesto de trabajo por cuenta propia ni de los pagos trimestrales. Si esa orientación no vale ~$70 para ti, FreeTaxUSA es la decisión correcta, y lo decimos en serio.",
      },
      {
        q: "¿Ambos tienen garantías de precisión?",
        a: "FreeTaxUSA ofrece una garantía de precisión, y Taxly lanzará con una garantía de precisión escrita y respaldada. Lee los términos reales de cualquier garantía antes de confiar en ella — el alcance difiere entre productos.",
      },
      {
        q: "¿Cuál es mejor para una declaración W-2 simple?",
        a: "Honestamente, ninguno es la primera parada obvia: revisa primero IRS Direct File — es gratis y oficial si tu estado y situación están cubiertos. Después, tanto FreeTaxUSA ($0 federal) como el nivel gratis de Taxly manejan declaraciones W-2 simples sin costo federal.",
      },
    ],
  },
  {
    slug: "irs-direct-file",
    rival: "IRS Direct File",
    title: "Taxly vs IRS Direct File: una comparación honesta",
    description:
      "IRS Direct File es gratis y oficial. Si calificas, úsalo — en serio. Aquí está exactamente quién califica, y dónde se queda corto.",
    verdictTitle: "El veredicto honesto",
    verdict:
      "Si IRS Direct File cubre tu estado y tu situación fiscal, úsalo. Es gratis, es oficial, y ningún producto comercial — incluido Taxly — supera a gratis-y-oficial para una declaración W-2 simple. Taxly existe para donde Direct File se queda corto: ingresos de trabajo independiente y gig, estados que no cubre, y quienes quieren más orientación que un flujo de formularios del gobierno.",
    rows: [
      {
        feature: "Precio",
        taxly: "Nivel gratis (declaraciones simples); niveles de pago $39–$69",
        rival: "Gratis, siempre",
        winner: "rival",
      },
      {
        feature: "Quién lo opera",
        taxly: "Una empresa privada",
        rival: "El propio IRS",
        winner: "rival",
      },
      {
        feature: "Ingresos de trabajo independiente / 1099",
        taxly: "Totalmente soportado — es la audiencia central",
        rival: "No soportado",
        winner: "taxly",
      },
      {
        feature: "Cobertura de estados",
        taxly: "Estados de lanzamiento incl. sin impuesto estatal + CA/NY planeados",
        rival: "Solo estados participantes (revisa la lista actual en irs.gov)",
        winner: "tie",
      },
      {
        feature: "Deducciones detalladas",
        taxly: "Soportadas en Deluxe",
        rival: "Solo deducción estándar",
        winner: "taxly",
      },
      {
        feature: "Estilo de orientación",
        taxly: "Entrevista guiada en lenguaje claro",
        rival: "Competente pero mínima; no busca deducciones",
        winner: "taxly",
      },
      {
        feature: "Estabilidad del programa",
        taxly: "Producto comercial con hoja de ruta",
        rival: "Su alcance y futuro han cambiado con la política — verifica cada temporada",
        winner: "taxly",
      },
    ],
    theyWin: [
      "Precio: gratis, sin niveles y sin letra pequeña.",
      "Autoridad: es el IRS — tus datos no van a ningún otro lado.",
      "Para declaraciones simples cubiertas, es simplemente la opción correcta.",
    ],
    stayWith: [
      "Todo tu ingreso es W-2 y tomas la deducción estándar.",
      "Tu estado participa (revisa la lista actual en irs.gov — cambia).",
      "No necesitas búsqueda de deducciones ni ayuda guiada.",
    ],
    taxlyFits: [
      "Tienes cualquier ingreso 1099, gig o de trabajo independiente — Direct File no lo soporta.",
      "Tu estado no está cubierto, o quieres federal + estatal en un solo flujo.",
      "Quieres un software que busque activamente deducciones y créditos que se te escaparían.",
    ],
    faqs: [
      {
        q: "¿IRS Direct File es realmente gratis?",
        a: "Sí — completamente. Lo opera el propio IRS para declaraciones federales, y los estados participantes manejan la parte estatal mediante sus propias herramientas vinculadas. No hay nivel de pago ni ventas adicionales.",
      },
      {
        q: "¿Por qué una empresa de impuestos me diría que use una herramienta gratuita del gobierno?",
        a: "Porque para declaraciones simples cubiertas es la respuesta honesta, y la honestidad es la razón entera por la que Taxly existe. Enviar a alguien a un producto de pago que no necesita es exactamente el comportamiento por el que esta industria se metió en problemas. Cuando tu situación supere a Direct File — llega un 1099, te mudas de estado — nos gustaría ser el producto que recuerdes.",
      },
      {
        q: "¿Direct File maneja ingresos gig o freelance?",
        a: "No. El ingreso de trabajo independiente (Anexo C) está fuera de su alcance, y es la razón más común por la que los contribuyentes lo superan. Esa es precisamente la declaración alrededor de la cual está construido Taxly.",
      },
      {
        q: "¿Existirá Direct File la próxima temporada?",
        a: "Su alcance y financiamiento han cambiado con la política desde su lanzamiento, así que verifica su estado actual y la lista de estados en irs.gov cada temporada en vez de asumir. Esa incertidumbre es real, pero mientras esté disponible y califiques, sigue siendo la opción correcta para declaraciones simples.",
      },
    ],
  },
];

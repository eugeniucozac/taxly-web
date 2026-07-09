import type { GlossaryTerm } from "./en";

// Authored Spanish glossary — same slugs as en.ts (routing/anchors depend on it).
export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "adjusted-gross-income",
    term: "Ingreso bruto ajustado (AGI)",
    definition:
      "Tu ingreso total del año menos una lista corta de ajustes específicos, como aportes deducibles a una IRA o intereses de préstamos estudiantiles. Casi todo lo demás en tu declaración — créditos, límites de deducciones, incluso la elegibilidad para Free File del IRS — se mide contra este número.",
    link: { href: "/refund-estimator", label: "Estima tu reembolso" },
  },
  {
    slug: "taxable-income",
    term: "Ingreso sujeto a impuestos",
    definition:
      "Tu AGI menos tu deducción estándar o detallada — el número al que realmente se aplican los tramos de impuestos. Dos personas con el mismo salario pueden tener ingresos gravables muy distintos según sus deducciones.",
  },
  {
    slug: "standard-deduction",
    term: "Deducción estándar",
    definition:
      "Una cantidad fija que cualquiera puede restar de su ingreso sin necesidad de recibos; el IRS la ajusta por inflación cada año. Aproximadamente nueve de cada diez contribuyentes la toman porque supera la suma de sus deducciones detalladas.",
  },
  {
    slug: "itemized-deductions",
    term: "Deducciones detalladas",
    definition:
      "La ruta de los recibos: intereses hipotecarios, impuestos estatales y locales (con tope), donaciones grandes y gastos médicos altos, listados en el Anexo A. Solo conviene cuando el total supera tu deducción estándar — un buen software compara ambas y elige la mejor.",
  },
  {
    slug: "tax-deduction",
    term: "Deducción fiscal",
    definition:
      "Algo que reduce el ingreso sobre el que pagas impuestos, no el impuesto en sí. Una deducción de $1,000 en el tramo del 22% te ahorra unos $220 — útil, pero mucho menos que un crédito de $1,000.",
  },
  {
    slug: "tax-credit",
    term: "Crédito fiscal",
    definition:
      "Una reducción dólar por dólar del impuesto que debes — un crédito de $1,000 te ahorra $1,000. Algunos créditos son reembolsables: pueden llevar tu impuesto por debajo de cero y poner dinero en tu bolsillo.",
  },
  {
    slug: "filing-status",
    term: "Estado civil tributario",
    definition:
      "La categoría bajo la que declaras: soltero, casado declarando en conjunto, casado declarando por separado, cabeza de familia o cónyuge sobreviviente calificado. Define tu deducción estándar y los umbrales de tus tramos, así que elegir bien importa más de lo que la gente cree.",
  },
  {
    slug: "head-of-household",
    term: "Cabeza de familia",
    definition:
      "Un estado tributario para personas no casadas que pagan más de la mitad del costo de mantener un hogar para una persona calificada, normalmente un hijo. Trae una deducción estándar mayor y tramos más amplios que declarar como soltero — y es una de las mejoras que más se pasan por alto.",
  },
  {
    slug: "dependent",
    term: "Dependiente",
    definition:
      "Un hijo o pariente que mantienes económicamente y que cumple las reglas del IRS sobre edad, residencia e ingresos. Reclamar un dependiente puede desbloquear el Crédito Tributario por Hijos, el estado de cabeza de familia y otros créditos.",
  },
  {
    slug: "form-w-2",
    term: "Formulario W-2",
    definition:
      "El formulario que tu empleador envía a fin de enero mostrando salarios pagados e impuestos retenidos. Si tu único ingreso está en un W-2 y tomas la deducción estándar, tu declaración es de las más simples que existen.",
  },
  {
    slug: "withholding",
    term: "Retención (Formulario W-4)",
    definition:
      "El impuesto que tu empleador descuenta de cada cheque y envía al IRS, controlado por el W-4 que llenaste al ser contratado. Un reembolso grande significa que retuviste de más todo el año; una factura sorpresa, que retuviste de menos.",
  },
  {
    slug: "form-1099-nec",
    term: "Formulario 1099-NEC",
    definition:
      "El formulario que un cliente envía cuando te pagó $600 o más por trabajo independiente o por contrato. Reporta el pago bruto con cero impuestos retenidos — por eso el ingreso de trabajos gig produce tantas facturas sorpresa.",
    link: { href: "/tools/quarterly-tax", label: "Calculadora de pagos trimestrales" },
  },
  {
    slug: "form-1099-k",
    term: "Formulario 1099-K",
    definition:
      "El formulario que las plataformas de pago (Stripe, PayPal, marketplaces) envían reportando los pagos que procesaron para ti. El IRS recibe una copia, así que ese ingreso debe aparecer en tu declaración aunque se superponga con otros 1099.",
  },
  {
    slug: "schedule-c",
    term: "Anexo C (Schedule C)",
    definition:
      "El formulario donde los trabajadores independientes reportan ingresos y gastos del negocio; la ganancia fluye a tu 1040. Los gastos legítimos — millaje, materiales, oficina en casa — reducen tanto el impuesto sobre la renta como el de trabajo por cuenta propia, así que registrarlos paga doble.",
  },
  {
    slug: "self-employment-tax",
    term: "Impuesto de trabajo por cuenta propia",
    definition:
      "El impuesto del 15.3% de Seguro Social y Medicare sobre la ganancia del trabajo independiente — la parte que los empleados W-2 comparten con su empleador, pero que tú pagas completa. Se aplica además del impuesto sobre la renta y es la mayor sorpresa del primer año como freelancer.",
    link: { href: "/tools/quarterly-tax", label: "Estima tus pagos trimestrales" },
  },
  {
    slug: "quarterly-estimated-taxes",
    term: "Pagos trimestrales estimados",
    definition:
      "Cuatro pagos al año (aproximadamente abril, junio, septiembre y enero) que hacen los trabajadores independientes porque ningún empleador retiene por ellos. Si los omites, el IRS cobra una multa por pago insuficiente aunque pagues todo antes del 15 de abril.",
    link: { href: "/tools/quarterly-tax", label: "Calculadora de pagos trimestrales" },
  },
  {
    slug: "safe-harbor",
    term: "Puerto seguro (impuestos estimados)",
    definition:
      "La regla que te protege de multas por pago insuficiente: paga al menos el 90% del impuesto de este año o el 100% del año pasado (110% si tu AGI superó $150,000) entre retenciones y pagos estimados. La mayoría apunta al número del año anterior porque se conoce por adelantado.",
  },
  {
    slug: "earned-income-tax-credit",
    term: "Crédito por Ingreso del Trabajo (EITC)",
    definition:
      "Un crédito reembolsable para trabajadores con ingresos bajos a moderados, que puede valer varios miles de dólares según el ingreso y los hijos. El propio IRS estima que una quinta parte de los trabajadores elegibles no lo reclama — es el crédito valioso que más se pierde.",
  },
  {
    slug: "child-tax-credit",
    term: "Crédito Tributario por Hijos (CTC)",
    definition:
      "Un crédito por cada hijo calificado menor de 17 años, parcialmente reembolsable para ingresos bajos y eliminado gradualmente en los altos. El monto exacto y la porción reembolsable han cambiado varias veces en años recientes: verifica la cifra del año actual en vez de una recordada.",
  },
  {
    slug: "marginal-tax-rate",
    term: "Tasa marginal (tramos)",
    definition:
      "La tasa sobre tu último dólar de ingreso — el tramo en el que 'estás'. Pasar a un tramo superior solo grava a la tasa más alta el ingreso por encima del umbral; nunca reduce tu pago neto.",
  },
  {
    slug: "effective-tax-rate",
    term: "Tasa efectiva",
    definition:
      "Tu impuesto total dividido entre tu ingreso total — la tasa promedio que realmente pagaste. Siempre es menor que tu tasa marginal y es el número honesto para juzgar tu carga fiscal.",
  },
  {
    slug: "form-1040",
    term: "Formulario 1040",
    definition:
      "La declaración principal de impuestos individuales de EE. UU. a la que todo lo demás se adjunta. Los anexos y formularios alimentan sus líneas, y las últimas te dicen los únicos dos números que importan: reembolso o saldo a pagar.",
  },
  {
    slug: "state-return",
    term: "Declaración estatal",
    definition:
      "Una declaración separada que la mayoría de los estados exige además de la federal, normalmente partiendo de tus números federales. Nueve estados — incluidos Texas, Florida y Washington — no tienen impuesto estatal sobre la renta, así que sus residentes solo declaran la federal.",
  },
  {
    slug: "e-file",
    term: "E-file (presentación electrónica)",
    definition:
      "Presentar electrónicamente mediante software autorizado por el IRS en lugar de enviar papel. Las declaraciones electrónicas se confirman en unas 48 horas y el reembolso llega en semanas; las de papel pueden tardar meses.",
  },
  {
    slug: "irs-direct-file",
    term: "IRS Direct File",
    definition:
      "La herramienta gratuita del propio IRS para declaraciones simples en estados participantes. Si calificas, es genuinamente una buena opción — sus límites son de alcance (pocos tipos de ingreso, no todos los estados), no de calidad.",
    link: { href: "/vs/irs-direct-file", label: "Taxly vs IRS Direct File" },
  },
  {
    slug: "irs-free-file",
    term: "IRS Free File",
    definition:
      "Una alianza donde compañías de software ofrecen presentación federal gratuita a personas bajo un umbral de AGI, accesible desde irs.gov. Es distinto de las ediciones 'gratis' propias de esas compañías, que suelen tener límites más estrechos y rutas de venta adicional.",
  },
  {
    slug: "tax-extension",
    term: "Prórroga (Formulario 4868)",
    definition:
      "Una extensión automática de seis meses para presentar — normalmente hasta el 15 de octubre — que cualquiera puede pedir antes de la fecha límite de abril. Extiende el papeleo, no el pago: el impuesto se debe igual en abril, así que paga tu mejor estimación con la prórroga.",
    link: { href: "/tools/penalty-estimator", label: "Calculadora de multas" },
  },
  {
    slug: "amended-return",
    term: "Declaración enmendada (Formulario 1040-X)",
    definition:
      "El formulario para corregir una declaración ya presentada — un 1099 olvidado, un estado civil incorrecto, un crédito omitido. Generalmente tienes tres años desde la fecha límite original para enmendar y reclamar un reembolso mayor.",
  },
  {
    slug: "failure-to-file-penalty",
    term: "Multa por no presentar",
    definition:
      "La multa por presentar tarde cuando debes impuestos: 5% del impuesto no pagado por mes, con tope del 25% — diez veces más dura que la multa por pagar tarde. La regla práctica: siempre presenta a tiempo (o pide prórroga), aunque aún no puedas pagar.",
    link: { href: "/tools/penalty-estimator", label: "Estima tu multa" },
  },
  {
    slug: "failure-to-pay-penalty",
    term: "Multa por no pagar",
    definition:
      "La multa por pagar tarde: 0.5% del impuesto no pagado por mes (más intereses), con tope del 25%. Es lo bastante pequeña como para que presentar a tiempo y pagar tarde sea mucho mejor que no presentar — y el IRS ofrece planes de pago.",
    link: { href: "/tools/penalty-estimator", label: "Estima tu multa" },
  },
];

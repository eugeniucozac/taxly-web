import type { BlogPost } from "./en";

export type { BlogPost };

export const posts: BlogPost[] = [
  {
    slug: "tax-filing-deadlines-2026",
    category: "deadlines",
    status: "published",
    readTime: 5,
    title: "Fechas límite para declarar impuestos en 2026 — Todo lo que necesitas saber",
    excerpt:
      "Perder una fecha límite fiscal te cuesta dinero en multas e intereses. Aquí están todas las fechas federales y estatales clave para el año fiscal 2025, declarado en 2026.",
    date: "2026-01-05",
    author: "Equipo Taxly",
    tags: ["fechas-límite", "básicos"],
    content: `
Perder una fecha límite fiscal no es solo estresante — cuesta dinero. El IRS cobra una multa por no presentar del 5% de los impuestos no pagados por mes (hasta el 25%), más intereses. Aquí están las fechas importantes para el año fiscal 2025.

## Fechas Límite Federales

**15 de abril de 2026 — Vencimiento de declaraciones individuales (Formulario 1040)**

Esta es la fecha límite principal para la mayoría de los estadounidenses. Tu declaración federal de impuestos sobre la renta para el año fiscal 2025 vence el 15 de abril de 2026. Si debes impuestos, el pago también vence en esta fecha, incluso si solicitas una prórroga.

**15 de abril de 2026 — Primer pago trimestral estimado**

Si eres trabajador independiente, freelancer, o tienes ingresos sin retención, tu primer pago estimado de impuestos para el año fiscal 2026 vence el 15 de abril.

**15 de abril de 2026 — Fecha límite de contribución a IRA**

Tienes hasta el 15 de abril para hacer una contribución a una IRA tradicional o Roth y que cuente para el año fiscal 2025.

**16 de junio de 2026 — Segundo pago trimestral estimado**

**15 de septiembre de 2026 — Tercer pago trimestral estimado**

**15 de octubre de 2026 — Fecha límite para declaraciones con prórroga**

Si presentaste el Formulario 4868 antes del 15 de abril, tu fecha límite extendida es el 15 de octubre. Recuerda: una prórroga te da más tiempo para presentar, no más tiempo para pagar. Cualquier impuesto adeudado vencía el 15 de abril.

**15 de enero de 2027 — Cuarto pago trimestral estimado**

## Fechas de Recepción de W-2 y 1099

Tu empleador debe enviarte tu W-2 antes del 31 de enero. Los bancos e instituciones financieras tienen hasta el 15 de febrero para la mayoría de los formularios 1099 (algunos formularios corregidos pueden llegar más tarde). Si no los has recibido para mediados de febrero, contacta directamente al emisor.

## Fechas Límite Estatales

La mayoría de los estados siguen la fecha límite federal del 15 de abril, pero hay excepciones:

- **Hawaii:** 20 de abril
- **Delaware, Iowa, Luisiana, Virginia:** 1 de mayo
- **California:** 15 de abril para la mayoría de los declarantes; pueden aplicar extensiones por desastres naturales

Siempre consulta el sitio web del departamento de ingresos de tu estado para las fechas exactas del año en curso.

## ¿Qué Pasa si Pierdes una Fecha Límite?

**Presentación tardía, con impuestos adeudados:** 5% de los impuestos no pagados por mes, hasta el 25%. Más intereses (actualmente alrededor del 7–8% anual).

**Presentación tardía, sin impuestos adeudados:** No hay multa por presentación tardía si te deben un reembolso. Pero solo tienes 3 años para reclamar un reembolso — después de eso, el IRS se queda con el dinero.

**Pago tardío:** 0.5% de los impuestos no pagados por mes, más intereses.

**¿No puedes pagar?** Presenta tu declaración a tiempo de todos modos para evitar la multa mayor por no presentar. Luego establece un plan de pago con el IRS.

## La Manera Más Fácil de Estar al Tanto de las Fechas

Taxly te envía notificaciones de recordatorio antes de cada fecha límite que aplica a tu situación. Configura tu cuenta y nosotros llevaremos el registro de las fechas — para que tú no tengas que hacerlo.
    `.trim(),
  },
  {
    slug: "w2-vs-1099-difference",
    category: "gig",
    status: "published",
    readTime: 5,
    title: "W-2 vs 1099: ¿Cuál es la diferencia y por qué importa al declarar impuestos?",
    excerpt:
      "Si recibes un W-2 o un 1099 cambia cuántos impuestos debes y cómo declaras. Aquí hay un resumen en español claro de ambos formularios.",
    date: "2026-01-19",
    author: "Equipo Taxly",
    tags: ["básicos", "w-2", "1099"],
    content: `
Cada enero, los empleadores y empresas envían formularios fiscales. Los dos más comunes son el W-2 y el 1099. Se parecen — ambos reportan ingresos — pero tienen implicaciones muy diferentes sobre cuánto debes y cómo declaras.

## ¿Qué es un W-2?

Un W-2 lo envía tu empleador si eres un empleado tradicional. Muestra:

- Tus salarios totales del año
- Cuánto impuesto federal y estatal sobre la renta fue retenido
- Impuestos de Seguro Social y Medicare retenidos (FICA)
- Beneficios como seguro médico o contribuciones de jubilación

Si recibes un W-2, tu empleador ya ha estado reteniendo impuestos de cada cheque de pago durante el año. Al momento de declarar, estás ajustando las cuentas — obteniendo un reembolso si se retuvo demasiado, o pagando la diferencia si se retuvo muy poco.

## ¿Qué es un 1099?

Un 1099 se envía cuando recibes ingresos que no estuvieron sujetos a retención. Hay muchos tipos:

- **1099-NEC:** Ingresos freelance o de contratista (reemplaza al antiguo 1099-MISC para este propósito)
- **1099-MISC:** Alquiler, premios, regalías y otros ingresos varios
- **1099-INT:** Ingresos por intereses de un banco o cuenta de ahorros
- **1099-DIV:** Ingresos por dividendos de inversiones
- **1099-B:** Ganancias de la venta de acciones, criptomonedas u otras inversiones
- **1099-R:** Distribuciones de jubilación (401k, IRA, pensión)
- **SSA-1099:** Beneficios del Seguro Social

Cualquier entidad que te pagó $600 o más (por servicios) o $10 o más (por intereses/dividendos) debe emitir un 1099.

## La Diferencia Clave: El Impuesto de Trabajo por Cuenta Propia

Si recibes un W-2, tu empleador paga la mitad de tus impuestos de Seguro Social y Medicare (7.65%). Tú pagas la otra mitad mediante retención.

Si recibes un 1099-NEC como contratista o freelancer, pagas **ambas mitades** — el 15.3% completo del impuesto de trabajo por cuenta propia además de tu impuesto regular sobre la renta. Esta es la sorpresa fiscal más común para las personas que se vuelven freelancers por primera vez.

**Ejemplo:** Ganas $60,000 como freelancer (1099-NEC). Debes:
- Impuesto de trabajo por cuenta propia: ~$8,478 (15.3% del 92.35% de las ganancias netas — hay un pequeño ajuste)
- Impuesto federal sobre la renta: depende de tus deducciones, estado civil y otros ingresos
- Impuesto estatal sobre la renta: depende de tu estado

La buena noticia: puedes deducir **la mitad del impuesto de trabajo por cuenta propia** de tus ingresos. Y si eres trabajador independiente, también puedes deducir primas de seguro médico, una oficina en casa, gastos de negocio y más.

## ¿Puedo Recibir Ambos?

Sí, y muchas personas lo hacen. Si tienes un trabajo de tiempo completo (W-2) y haces trabajo freelance de medio tiempo (1099-NEC), recibirás ambos formularios. Taxly maneja esto en una sola declaración — no necesitas declarar por separado.

## ¿Qué Pasa si No Recibo un Formulario?

Todos los ingresos son gravables incluso si no recibes un 1099 o W-2. Si te pagaron en efectivo por servicios, eso sigue siendo ingreso declarable. El IRS sabe más de lo que piensas — las aplicaciones de pago como Venmo y PayPal están obligadas a emitir 1099-K para pagos comerciales superiores a $600.

## Cómo Taxly Maneja Ambos

Cuando inicias tu declaración en Taxly, te preguntamos sobre tus fuentes de ingresos. Sube tu W-2 directamente, importa tu 1099-NEC, o ingresa las cifras manualmente. Calculamos tu impuesto de trabajo por cuenta propia, sugerimos cada deducción para la que calificas y manejamos ambos en una sola declaración federal.
    `.trim(),
  },
  {
    slug: "how-to-file-self-employment-taxes",
    category: "gig",
    status: "published",
    readTime: 6,
    title: "Cómo declarar impuestos como trabajador independiente (sin volverte loco)",
    excerpt:
      "¿Eres trabajador independiente? Pagas impuestos de manera diferente a los empleados — y tienes deducciones que los empleados no tienen. Aquí se explica exactamente cómo funciona.",
    date: "2026-02-02",
    author: "Equipo Taxly",
    tags: ["trabajador-independiente", "freelance", "schedule-c"],
    content: `
Si eres freelancer, contratista independiente o tienes tu propio negocio — incluso a tiempo parcial — eres trabajador por cuenta propia para propósitos fiscales. Eso cambia cómo declaras, cuánto debes y qué puedes deducir.

## Paso 1: Reúne tus Registros de Ingresos

Recopila todos tus formularios 1099-NEC de clientes que te pagaron $600 o más. Pero también reporta cualquier ingreso que hayas recibido sin un 1099 — pagos en efectivo, transferencias de Venmo, lo que sea.

Tus ingresos totales de trabajo por cuenta propia van en el **Anexo C** (Pérdidas y Ganancias de Negocio), que fluye hacia tu Formulario 1040.

## Paso 2: Calcula el Impuesto de Trabajo por Cuenta Propia (Anexo SE)

Como trabajador independiente, pagas tanto la parte del empleador como la del empleado del Seguro Social y Medicare:

- Seguro Social: 12.4% sobre ganancias netas hasta $176,100 (límite de 2025)
- Medicare: 2.9% sobre todas las ganancias netas
- Medicare adicional: 0.9% sobre ganancias netas superiores a $200,000 (soltero)

**Total: 15.3%** sobre la mayoría de los ingresos de trabajo por cuenta propia, en comparación con el 7.65% para los empleados.

La buena noticia: puedes deducir **la mitad de tu impuesto de trabajo por cuenta propia** de tus ingresos brutos, reduciendo tu ingreso gravable.

## Paso 3: Reclama Cada Deducción a la que Tienes Derecho

Aquí es donde los declarantes por cuenta propia tienen una gran ventaja sobre los empleados. En el Anexo C, puedes deducir gastos ordinarios y necesarios del negocio:

- **Oficina en casa:** Si usas parte de tu hogar exclusivamente para el trabajo, puedes deducir una parte del alquiler/hipoteca, servicios y internet.
- **Seguro médico para trabajadores independientes:** 100% de las primas para ti y tu familia, deducidas del ingreso bruto.
- **Contribuciones de jubilación:** Contribuciones a SEP-IRA, Solo 401(k) o SIMPLE IRA — hasta $70,000/año en un SEP-IRA para 2025.
- **Vehículo:** Millaje de negocios a la tarifa estándar del IRS, o gastos reales del vehículo.
- **Equipo y software:** Computadoras, cámaras, teléfonos (parte de negocios), suscripciones de software.
- **Servicios profesionales:** Honorarios de contadores, honorarios legales relacionados con tu negocio.
- **Educación:** Cursos, libros, conferencias que mantengan o mejoren las habilidades requeridas en tu trabajo actual.

## Paso 4: Paga Impuestos Estimados Trimestralmente

A diferencia de los empleados, nada se retiene de tus pagos durante el año. Se espera que pagues impuestos trimestralmente:

- **T1:** 15 de abril
- **T2:** 16 de junio
- **T3:** 15 de septiembre
- **T4:** 15 de enero (del año siguiente)

Taxly calcula tus pagos estimados automáticamente cuando declaras, para que sepas exactamente cuánto pagar y cuándo.

## Paso 5: Presenta antes del 15 de Abril

Los declarantes por cuenta propia usan el Formulario 1040 con el Anexo C y el Anexo SE adjuntos. Si tuviste una pérdida neta del trabajo por cuenta propia (los gastos superaron los ingresos), esa pérdida puede compensar otros ingresos.

Si no puedes presentar antes del 15 de abril, presenta el Formulario 4868 para una prórroga automática hasta el 15 de octubre. Cualquier impuesto adeudado sigue siendo exigible el 15 de abril.

## Errores Comunes a Evitar

- **No reportar todos los ingresos** — El IRS cruza los 1099 y los registros bancarios.
- **Mezclar gastos personales y de negocios** — Mantén cuentas separadas. Hace las deducciones más claras y te protege en una auditoría.
- **Perder pagos estimados** — La multa es pequeña pero evitable.
- **Olvidar la deducción de oficina en casa** — Es la deducción más perdida para trabajadores remotos y freelancers.
    `.trim(),
  },
  {
    slug: "standard-vs-itemized-deduction",
    category: "basics",
    status: "published",
    readTime: 5,
    title: "Deducción estándar vs. deducción detallada: ¿Cuál debes tomar?",
    excerpt:
      "La mayoría de los estadounidenses toman la deducción estándar. Pero si tienes casa propia, hiciste grandes donaciones caritativas o tuviste altos gastos médicos, detallar podría ahorrarte más.",
    date: "2026-02-16",
    author: "Equipo Taxly",
    tags: ["deducciones", "básicos", "propietarios"],
    content: `
Cada declarante enfrenta la misma elección: tomar la deducción estándar o detallar. No puedes hacer ambas. En la mayoría de los casos, la deducción estándar gana — pero para los propietarios de viviendas y declarantes de altos ingresos, detallar puede ahorrar significativamente más.

## ¿Qué es la Deducción Estándar?

La deducción estándar es una cantidad fija en dólares que reduce tu ingreso gravable. Para el año fiscal 2025:

- **Soltero:** $15,000
- **Casado declarando conjuntamente:** $30,000
- **Cabeza de familia:** $22,500
- **65 años o más / ciego:** Adicional $1,550–$1,950 por condición calificante

Alrededor del 90% de los declarantes estadounidenses toman la deducción estándar porque es mayor de lo que obtendrían al detallar.

## ¿Qué es Detallar?

Detallar significa sumar deducciones específicas en el Anexo A y deducir ese total en su lugar. Las principales deducciones detalladas son:

- **Impuestos estatales y locales (SALT):** Limitados a $10,000 para impuestos sobre la renta/propiedad combinados
- **Intereses hipotecarios:** Sobre hasta $750,000 del capital del préstamo hipotecario
- **Donaciones caritativas:** Donaciones en efectivo y no monetarias a organizaciones calificadas
- **Gastos médicos:** La porción que exceda el 7.5% de tu Ingreso Bruto Ajustado (AGI)
- **Pérdidas por accidentes y robo:** Solo pérdidas en áreas de desastre declaradas federalmente

## ¿Cuándo Tiene Sentido Detallar?

Debes detallar si tus gastos calificados totales exceden tu deducción estándar. Esto es más probable si:

- Tienes una casa con intereses hipotecarios significativos
- Vives en un estado con altos impuestos (Nueva York, California, Nueva Jersey) y alcanzas el límite de $10,000 de SALT
- Hiciste grandes donaciones caritativas
- Tuviste gastos médicos significativos no reembolsados
- Eres declarante soltero — la menor deducción estándar hace que sea más fácil superar al detallar

Taxly compara automáticamente ambas opciones y selecciona la que te da una factura fiscal más baja — no necesitas calcularlo tú mismo.
    `.trim(),
  },
  {
    slug: "what-you-need-to-file-taxes-checklist",
    category: "basics",
    status: "published",
    readTime: 6,
    title: "Qué necesitas para declarar tus impuestos: La lista de verificación completa",
    excerpt:
      "Reúne estos documentos antes de sentarte a declarar y terminarás en menos de una hora. Aquí hay una lista completa por tipo de ingreso.",
    date: "2026-03-02",
    author: "Equipo Taxly",
    tags: ["básicos", "lista-de-verificación"],
    content: `
La razón principal por la que las personas posponen sus impuestos es no tener todo en un solo lugar. Dedica 15 minutos a reunir estos documentos antes de comenzar y navegarás fácilmente por el proceso de declaración.

## Información Personal (Todos)

- Números de Seguro Social para ti, tu cónyuge y cualquier dependiente
- Fecha de nacimiento de todos los miembros del hogar
- Declaración de impuestos del año pasado (útil para el AGI del año anterior, que requiere la presentación electrónica)
- Número de cuenta bancaria y número de ruta para depósito directo de tu reembolso

## Documentos de Ingresos

**Si eres empleado:**
- W-2 de cada empleador (llega antes del 31 de enero)

**Si eres trabajador por cuenta propia o contratista:**
- 1099-NEC de cada cliente que te pagó $600 o más
- Registros de ingresos y gastos del negocio
- Registro de millaje si manejaste para negocios

**Si tienes ingresos de inversiones:**
- 1099-B de tu corretaje (venta de acciones/criptomonedas)
- 1099-DIV (dividendos)
- 1099-INT (intereses bancarios)
- Registros de base de costo de activos que vendiste

**Otros ingresos:**
- 1099-R si tomaste distribuciones de jubilación (401k, IRA, pensión)
- SSA-1099 si recibiste beneficios del Seguro Social
- 1099-G si recibiste reembolsos de impuestos estatales/locales o compensación por desempleo
- Registros de ingresos por alquiler
- Ganancias de juegos de azar (W-2G)

## Deducciones y Créditos

**Si detallas:**
- Estado de cuenta de intereses hipotecarios (Formulario 1098 de tu prestamista)
- Registros de impuestos sobre la propiedad
- Impuesto estatal y local sobre la renta pagado
- Recibos de donaciones caritativas
- Recibos de gastos médicos

**Otras deducciones y créditos:**
- 1098-T de universidades y colegios (créditos educativos)
- 1098-E para intereses de préstamos estudiantiles
- Contribuciones y distribuciones de HSA (Formulario 5498-SA / 1099-SA)
- Nombre, dirección e identificación fiscal del proveedor de cuidado infantil
- Recibos de mejoras del hogar eficientes en energía

## ¿Cuánto Tiempo Toma?

Si tienes un W-2 y tomas la deducción estándar, declarar con Taxly toma unos 15 minutos. Agrega ingresos por cuenta propia o deducciones detalladas, y presupuesta 45–60 minutos.

## Importa en Lugar de Escribir

Taxly puede importar tu W-2 directamente de muchos empleadores, obtener datos de 1099-B de las principales corretajes (Fidelity, Schwab, Vanguard, Robinhood) e importar la declaración del año pasado de TurboTax o H&R Block como PDF.
    `.trim(),
  },
  {
    slug: "how-to-file-a-tax-extension",
    category: "deadlines",
    status: "published",
    readTime: 5,
    title: "Cómo solicitar una prórroga fiscal (y qué realmente te da)",
    excerpt:
      "Una prórroga te da más tiempo para presentar — no más tiempo para pagar. Aquí te explicamos cómo presentar el Formulario 4868, quién debería hacerlo y cuáles son los conceptos erróneos comunes.",
    date: "2026-03-16",
    author: "Equipo Taxly",
    tags: ["prórroga", "fechas-límite", "básicos"],
    content: `
Cada año, alrededor de 19 millones de estadounidenses solicitan una prórroga fiscal. La mayoría lo hace por razones válidas — documentos faltantes, declaraciones complicadas o la vida interponiéndose. Pero las prórrogas son ampliamente malentendidas. Aquí está lo que realmente obtienes.

## Qué Hace (y No Hace) una Prórroga Fiscal

Una prórroga te da **6 meses más para presentar tu declaración** — moviendo la fecha límite del 15 de abril al 15 de octubre.

Una prórroga **no** te da más tiempo para pagar. Cualquier impuesto que debas sigue venciendo el 15 de abril. Si pagas tarde, el IRS cobra intereses y una multa por pago tardío (0.5% por mes). Presentar tarde sin pagar es peor — la multa por no presentar es del 5% por mes.

**La regla:** Siempre presenta a tiempo (o solicita una prórroga). Paga lo más que puedas antes del 15 de abril.

## Quién Debería Solicitar una Prórroga

- Te falta un documento fiscal (K-1 de una sociedad, 1099 corregido, registros de ingresos extranjeros)
- Tu declaración es compleja y quieres más tiempo para hacerla bien
- Tuviste un evento de vida importante (divorcio, muerte en la familia, desastre natural) que interrumpió tus registros
- Eres ciudadano estadounidense viviendo en el extranjero

## Cómo Presentar el Formulario 4868

El Formulario 4868, "Solicitud de Prórroga Automática de Tiempo para Presentar", es simple. Solo necesitas:

- Tu nombre, dirección y número de Seguro Social
- Una estimación de tu obligación fiscal total para el año
- La cantidad que ya has pagado (a través de retención o pagos estimados)
- Pago de cualquier saldo restante adeudado

La prórroga es automática. El IRS no te notifica que fue concedida — si presentas correctamente y a tiempo, la obtienes.

**Fecha límite:** Debes presentar el Formulario 4868 antes del 15 de abril.

Taxly maneja la presentación de prórroga automáticamente — solo dinos que quieres extender y nosotros lo presentaremos por ti.

## Conceptos Erróneos Comunes

**"Debería solicitar una prórroga para evitar una auditoría."** Falso. El IRS no audita más ni menos basándose en si extendiste.

**"Si me deben un reembolso, puedo omitir la prórroga."** Es cierto que no hay multa por presentación tardía cuando te deben un reembolso, pero el IRS tiene 3 años para auditarte y algunos bancos requieren declaraciones recientes para solicitudes de préstamos.

**"Una prórroga significa que debo más intereses."** Solo si debes impuestos y los pagas tarde. Si te deben un reembolso, una prórroga no te cuesta nada — excepto el valor temporal de recibir tu reembolso más tarde.
    `.trim(),
  },
  {
    slug: "crypto-and-your-taxes",
    category: "gig",
    status: "published",
    readTime: 6,
    title: "Criptomonedas y tus impuestos: Qué debes reportar (y qué pasa si no lo haces)",
    excerpt:
      "El IRS trata las criptomonedas como propiedad, no como moneda. Cada venta, intercambio o uso de criptomonedas es un evento gravable. Aquí está lo que necesitas saber.",
    date: "2026-03-30",
    author: "Equipo Taxly",
    tags: ["criptomonedas", "inversiones", "ganancias-de-capital"],
    content: `
El IRS ha sido claro desde 2014: la criptomoneda es propiedad, no moneda. Eso significa que cada vez que vendes, intercambias o usas cripto para comprar algo, puedes deber impuesto sobre ganancias de capital. Así es como funciona en la práctica.

## ¿Qué es un Evento Gravable?

Un evento gravable es cualquier cosa que desencadena una ganancia o pérdida que debes reportar. Para cripto, los eventos gravables incluyen:

- **Vender cripto por dólares estadounidenses** (o cualquier moneda fiduciaria)
- **Intercambiar una cripto por otra** (Bitcoin → Ethereum es un evento gravable)
- **Usar cripto para comprar bienes o servicios** (pagar un café con Bitcoin = gravable)
- **Recibir cripto como pago por trabajo** (tratado como ingreso ordinario, no ganancia de capital)
- **Recompensas de minería, staking y airdrops** (tratados como ingreso ordinario cuando se reciben)

## Lo que NO es un Evento Gravable

- Comprar cripto con dólares
- Mantener cripto
- Transferir cripto entre tus propias carteras
- Regalar cripto

## Ganancias de Capital a Corto vs. Largo Plazo

Cuánto tiempo mantuviste la cripto determina la tasa de impuestos:

- **Corto plazo (mantenido 1 año o menos):** Gravado como ingreso ordinario — misma tasa que tu salario (10–37%)
- **Largo plazo (mantenido más de 1 año):** Gravado a tasas preferenciales — 0%, 15% o 20%, dependiendo de tus ingresos

## Cómo Calcular Ganancias y Pérdidas

La **base de costo** es lo que pagaste por la cripto, incluyendo comisiones. Tu ganancia o pérdida es el precio de venta menos la base de costo.

Taxly importa tu historial de transacciones directamente de los principales exchanges. Calculamos cada ganancia y pérdida e identificamos qué lotes usar, manejando el Formulario 8949 automáticamente.

## ¿Y las Pérdidas?

Las pérdidas de cripto son deducibles. Puedes usar pérdidas de cripto para compensar ganancias de cripto, luego para compensar otras ganancias de capital, y finalmente hasta $3,000 de ingreso ordinario por año. El exceso de pérdidas se traslada a años futuros.

A diferencia de las acciones, la cripto no tiene reglas de venta de lavado (por ahora), lo que significa que puedes vender con pérdida y recomprar inmediatamente la misma cripto.

## ¿Qué Pasa si No Reporto?

El IRS recibe datos de los exchanges de cripto con sede en EE.UU. y los cruza con tu declaración. Las ganancias de cripto no reportadas son una de las áreas de aplicación activa del IRS. Las multas por fraude fiscal comienzan en el 75% del impuesto no pagado, más posibles cargos penales en casos graves.
    `.trim(),
  },
  {
    slug: "first-time-filing-start-here",
    category: "basics",
    status: "published",
    readTime: 6,
    title: "¿Declarando impuestos por primera vez? Empieza aquí.",
    excerpt:
      "Declarar impuestos por primera vez puede parecer abrumador. No tiene por qué serlo. Aquí hay una guía paso a paso en español claro de todo lo que necesitas saber.",
    date: "2026-01-12",
    author: "Equipo Taxly",
    tags: ["básicos", "primera-vez", "comenzar"],
    content: `
Declarar tus impuestos por primera vez no tiene que ser aterrador. La mayoría de los declarantes por primera vez tienen situaciones simples — un trabajo con W-2, sin inversiones, sin trabajo por cuenta propia. Si ese eres tú, puedes declarar gratis y terminar en 20 minutos. Aquí está exactamente cómo.

## ¿Realmente Necesitas Declarar?

No todos están obligados a presentar una declaración de impuestos. Para el año fiscal 2025, generalmente debes declarar si tus ingresos superan estos umbrales:

- **Soltero, menor de 65:** $14,600
- **Casado declarando conjuntamente, ambos menores de 65:** $29,200
- **Cabeza de familia, menor de 65:** $21,900

Incluso si estás por debajo de estos umbrales, debes declarar si te retuvieron impuestos federales sobre la renta — probablemente recibirás un reembolso de ese dinero.

## ¿Qué Estado Civil Debes Usar?

Tu estado civil afecta tu deducción estándar y las tasas de impuestos:

- **Soltero:** No estás casado y no calificas para otro estado
- **Casado declarando conjuntamente:** Estás casado — usualmente el mejor resultado fiscal para las parejas
- **Cabeza de familia:** No estás casado y pagas más de la mitad de los costos de un hogar para un dependiente calificado

## Qué Necesitarás para una Declaración Simple

Para una declaración básica de W-2, necesitas:

- Tu W-2 de tu empleador (llega antes del 31 de enero)
- Tu número de Seguro Social
- Tu AGI del año anterior (usa $0 si es verdaderamente tu primera declaración)
- Datos de cuenta bancaria para depósito directo

Eso es todo. Sin recibos, sin matemáticas complejas.

## Entendiendo tu W-2

- Casilla 1: Salarios (sobre los que se te gravan impuestos)
- Casilla 2: Impuesto federal sobre la renta ya retenido
- Casillas 3–6: Salarios y impuestos del Seguro Social y Medicare
- Casillas 16–17: Salarios e impuestos estatales retenidos

## Créditos Fiscales para los que Podrías Calificar

- **Crédito por Ingreso del Trabajo (EITC):** Para trabajadores de ingresos bajos a moderados, vale hasta $7,830 con tres o más hijos.
- **Crédito del Ahorro:** Si contribuiste a un 401(k) o IRA, podrías obtener un crédito del 10–50% de las contribuciones.
- **Crédito de Oportunidad Americana:** Si estás en tus primeros cuatro años de universidad, hasta $2,500 por año.

## Cómo Declarar Realmente

1. **Software de bricolaje (como Taxly):** Preguntas guiadas, generalmente listo en 20–45 minutos, gratis para declaraciones simples
2. **Free File:** El programa de declaración gratuita del IRS para ingresos menores de $84,000
3. **Profesional de impuestos:** Un contador o agente inscrito

## Qué Pasa Después de Declarar

Si presentas electrónicamente, el IRS generalmente acepta tu declaración dentro de 24–48 horas. Los reembolsos usualmente se depositan dentro de 21 días. Puedes rastrear tu reembolso en IRS.gov usando tu SSN, estado civil y monto del reembolso.

## Guarda una Copia de tu Declaración

Descarga y guarda tu declaración (Taxly también la almacena para ti). Necesitarás tu Ingreso Bruto Ajustado (AGI) del año anterior cuando declares el próximo año — es la forma del IRS de verificar tu identidad para la presentación electrónica.
    `.trim(),
  },
  {
    slug: "quarterly-taxes-first-year-freelancer",
    category: "gig",
    status: "scheduled",
    readTime: 6,
    title: "Pagos trimestrales para freelancers de primer año — La guía que nadie te da",
    excerpt: "Nadie retiene impuestos del ingreso freelance, y el IRS quiere su parte cuatro veces al año. Aquí está la regla de puerto seguro que hace simples los pagos trimestrales.",
    date: "2026-07-13",
    author: "Equipo Taxly",
    tags: ["self-employment","quarterly-taxes"],
    content: `
El primer año como freelancer trae una sorpresa fiscal de la que nadie te avisa: nadie está reteniendo nada. Cada dólar que un cliente te paga llega bruto, y el IRS espera que tú mismo envíes tu impuesto — no una vez al año, sino cuatro.

## Por qué existen los pagos trimestrales

Los empleados W-2 pagan impuestos en cada cheque mediante la retención. El IRS quiere el mismo trato de pago continuo de los trabajadores independientes, así que exige pagos estimados aproximadamente cada trimestre: 15 de abril, 15 de junio, 15 de septiembre y 15 de enero. Si los omites, debes una multa por pago insuficiente — aunque pagues todo lo que debes antes de la fecha límite de abril.

## La regla de puerto seguro (la única que realmente necesitas)

Calcular por adelantado tu impuesto exacto del año actual es difícil. El IRS te da una meta más fácil llamada puerto seguro: paga al menos el **100% del impuesto total del año pasado** (110% si el AGI del año pasado superó $150,000), repartido durante el año, y no aplica ninguna multa — sea cual sea la factura final de este año.

El impuesto total del año pasado es un número que ya conoces: es la línea "impuesto total" de tu Formulario 1040. Divide la meta entre cuatro, y ese es cada pago.

- Busca el impuesto total del año pasado en tu 1040
- Multiplica por 1.0 (o 1.1 si el AGI superó $150k)
- Resta cualquier retención W-2 que aún tengas este año
- Divide el resto entre cuatro

Nuestra calculadora gratuita de pagos trimestrales hace exactamente esta aritmética y muestra las fechas de vencimiento.

## No olvides el impuesto de trabajo por cuenta propia

El otro golpe del primer año: el **impuesto de trabajo por cuenta propia**. Es el 15.3% para Seguro Social y Medicare sobre el 92.35% de tu ganancia neta — además del impuesto sobre la renta. Un empleado comparte ese 15.3% con su empleador; tú pagas ambas mitades. Sobre $50,000 de ganancia son aproximadamente $7,000 antes de que empiece el impuesto sobre la renta.

El consuelo parcial: deduces la mitad del empleador, y los gastos legítimos del negocio reducen ambos impuestos a la vez. Registra cada gasto desde el primer día.

## Cómo pagar en la práctica

El IRS acepta pagos estimados mediante tu cuenta en línea del IRS, IRS Direct Pay, o enviando los comprobantes del Formulario 1040-ES. Paga desde una cuenta del negocio si la tienes, y guarda las confirmaciones — reportarás el total pagado al declarar.

## ¿Y si tu primer año va mal?

Si el impuesto del año pasado fue cero (un año de estudiante, por ejemplo), el puerto seguro del año anterior puede ser literalmente cero — quizás no debas nada hasta abril. Y si el ingreso varía de trimestre a trimestre, el método de ingreso anualizado te permite pagar menos en los trimestres flojos, aunque exige más contabilidad.

**El resumen honesto:** los pagos trimestrales son molestos pero mecánicos. Un número conocido, dividido entre cuatro, pagado en cuatro fechas. Los que salen quemados no son los que calcularon mal — son los que no sabían que el sistema existía.
`,
  },
  {
    slug: "missed-tax-deadline-what-now",
    category: "deadlines",
    status: "scheduled",
    readTime: 5,
    title: "¿Se te pasó la fecha límite de impuestos? Esto es exactamente qué hacer (y cuánto cuesta)",
    excerpt: "La multa por no presentar es diez veces la multa por no pagar. Si se te pasó el 15 de abril, el orden de los pasos importa — aquí está, paso a paso.",
    date: "2026-07-20",
    author: "Equipo Taxly",
    tags: ["deadlines","penalties"],
    content: `
Que se te pase la fecha límite de impuestos se siente catastrófico. Normalmente no lo es — pero el reloj corre, y lo que hagas primero importa más de lo que la mayoría cree.

## El dato que lo cambia todo

El IRS cobra dos multas separadas, y son de tamaños completamente distintos:

- **Por no presentar:** 5% del impuesto no pagado por mes, hasta el 25%
- **Por no pagar:** 0.5% del impuesto no pagado por mes, hasta el 25%

Presentar tarde es **diez veces** más caro por mes que pagar tarde. Eso te da la estrategia completa: presenta de inmediato, aunque no puedas pagar ni un dólar de lo que debes.

## Paso 1: presenta ahora, diga lo que diga tu cuenta bancaria

Cada mes que pasa antes de presentar suma un 5% (una parte de un mes cuenta como mes completo). Presentar hoy detiene ese reloj de inmediato, dejando solo la multa por pago tardío, mucho menor, y los intereses. Si tu declaración tiene más de 60 días de retraso, también aplica una multa mínima — el menor entre un piso ajustado por inflación (alrededor de $500) o el 100% del impuesto adeudado — que golpea más fuerte a los saldos pequeños.

Nuestra calculadora gratuita de multas muestra lo que cuesta tu retraso específico.

## Paso 2: paga lo que puedas y consigue un plan

Los intereses y la multa mensual del 0.5% aplican sobre el saldo *no pagado*, así que cualquier pago parcial los reduce. Para el resto, el IRS ofrece planes de pago que puedes configurar en línea en minutos — y mientras estás en uno, la tasa por no pagar se reduce a la mitad.

## Paso 3: pregunta por la reducción de multa por primera vez

Si es tu primer tropiezo tras años de declarar sin problemas, la **reducción de multa por primera vez** del IRS puede eliminar las multas por completo (no los intereses). Es una llamada o una carta. Una cantidad notable de personas elegibles nunca la pide.

## ¿Y si te deben un reembolso?

Entonces no hay multa alguna — las multas son porcentajes del impuesto no pagado, y el tuyo es cero. Pero no te duermas: tienes tres años desde la fecha límite original para presentar y reclamar el reembolso. Después, ese dinero pasa a ser del gobierno, permanentemente.

## El próximo año, en una frase

Si abril se ve imposible, presenta el **Formulario 4868** antes de la fecha límite — es una prórroga automática de seis meses para presentar que cualquiera puede obtener gratis. No extiende la fecha de pago, pero combinarla con un pago estimado convierte un problema del 5% mensual en un error de redondeo.

**El resumen honesto:** el sistema fiscal castiga el silencio mucho más que la pobreza. Presenta, paga lo que puedas, pide la reducción — en ese orden, empezando hoy.
`,
  },
  {
    slug: "turbotax-alternatives-honest-guide",
    category: "basics",
    status: "scheduled",
    readTime: 6,
    title: "Alternativas a TurboTax en 2026 — Una guía honesta (de un competidor)",
    excerpt: "Sí, somos competidores. Por eso esta guía nombra primero la opción gratuita del gobierno, da crédito al rival económico que lo merece, y te dice quién debería quedarse con TurboTax.",
    date: "2026-07-27",
    author: "Equipo Taxly",
    tags: ["comparisons","basics"],
    content: `
Que una empresa de impuestos escriba sobre alternativas a TurboTax tiene un conflicto de interés evidente. Así que manejémoslo de la única forma honesta: nombrando primero las opciones que no nos dejan un centavo, y diciéndote claramente cuándo la respuesta es "quédate donde estás".

## Empieza aquí: IRS Direct File (gratis, oficial)

Si todo tu ingreso es W-2, tomas la deducción estándar y tu estado participa, **IRS Direct File** es simplemente la opción correcta. Es gratis, lo opera el propio IRS, y tus datos no van a ningún otro lado. Sus límites son de alcance, no de calidad: sin ingreso de trabajo independiente, sin deducciones detalladas, y una lista de estados que cambia cada temporada — revisa la actual en irs.gov.

## La opción económica honesta: FreeTaxUSA

**FreeTaxUSA** cobra $0 por declaraciones federales — incluido el trabajo independiente — y unos $15 por estado. Lleva años presentando millones de declaraciones sin hacer ruido, y sus precios son genuinamente libres de emboscadas. El sacrificio es la interfaz: es tipo formulario y asume que sabes en general qué va dónde. Si ya has declarado antes y conoces tu situación, es la opción creíble más barata, y lo decimos en serio.

## El otro grande: H&R Block

El software de Block es pulido y su comportamiento al cobrar es más suave que el de TurboTax, con un diferenciador real: miles de oficinas físicas si quieres entregarle todo a un humano a mitad del camino. Pagas precios de marca, pero si el respaldo presencial importa, esa es la razón para elegir Block.

## Cash App Taxes

Completamente gratis, federal y estatal — financiado por el resto del ecosistema de Cash App. La cobertura tiene lagunas genuinas (declaraciones multiestatales, algunas situaciones) y el soporte es escaso. Vale la pena para declaraciones simples o moderadas si ya te mueves cómodo en Cash App.

## Cuándo deberías quedarte honestamente con TurboTax

- Tu declaración es genuinamente compleja — K-1, ingreso extranjero, negocio multiestatal
- Quieres la revisión de un CPA en vivo antes de presentar, este año, sin fricción
- Años de tu historial se importan sin problema y el precio al pagar no te duele

El problema de TurboTax nunca fue la calidad. El fallo de la FTC en 2024 fue por publicidad engañosa de "gratis" y la emboscada de ventas — el precio encontrándote al pagar. Si eso no te molesta, el software en sí es excelente.

## Dónde encaja Taxly

Taxly abre para declaraciones del año fiscal 2026 en enero de 2027, construido para el trabajador gig y 1099 al que TurboTax dirige a su nivel más caro: una entrevista guiada en lenguaje claro, $69 federal + $29 estatal para declaraciones de trabajo independiente, y una garantía de precio fijo — el número que ves al empezar es el número que pagas al final. Nuestras comparaciones detalladas contra TurboTax, FreeTaxUSA y Direct File explican exactamente dónde gana cada rival.

**El resumen honesto:** declaración simple en un estado cubierto → Direct File. Conoces tus impuestos y quieres barato → FreeTaxUSA. Declaración compleja o necesitas un humano → TurboTax o Block. Primer año con 1099 y quieres orientación sin emboscada → para eso estamos construyendo.
`,
  },
  {
    slug: "irs-direct-file-who-qualifies",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "IRS Direct File: quién califica, qué cubre y dónde se queda corto",
    excerpt: "La herramienta gratuita del propio IRS es genuinamente buena — si cabes dentro de sus líneas. Aquí está exactamente quién califica, más las tres razones más comunes por las que se le queda corta a la gente.",
    date: "2026-08-03",
    author: "Equipo Taxly",
    tags: ["basics","comparisons"],
    content: `
IRS Direct File es lo más raro de la industria fiscal: una opción genuinamente gratuita sin trampa. Lo opera el propio IRS, no hay nivel de pago, y nadie está minando tu declaración para venderte algo. Si cabes dentro de sus líneas, úsalo. La pregunta es si cabes.

## Quién califica

Direct File está construido alrededor del extremo simple del espectro. En términos generales, entras si:

- Tu ingreso viene de **salarios W-2** (más intereses limitados, Seguro Social y desempleo)
- Tomas la **deducción estándar** en vez de detallar
- Reclamas los créditos principales que soporta — el EITC y el Crédito por Hijos entre ellos
- Vives en un **estado participante**

La lista de estados es la parte móvil. Ha crecido, se ha encogido y ha cambiado con la política desde que el programa se lanzó — nunca asumas la lista de la temporada pasada, revisa la actual en irs.gov antes de planear alrededor de ella.

## Cómo se siente usarlo

Respuesta honesta: competente y limpio. Preguntas en lenguaje claro, soporte móvil decente, y un chat en vivo que responde dudas de procedimiento. Presenta tu declaración federal; los estados participantes luego te pasan a su propia herramienta vinculada para la parte estatal, cuya calidad varía según el estado.

## Las tres formas más comunes de quedársele corto

**1. Llega un 1099.** Cualquier ingreso de trabajo independiente o gig — un 1099-NEC por trabajo freelance, actividad seria de 1099-K — te pone completamente fuera del alcance de Direct File. Esta es la salida más común.

**2. Detallar empieza a ganar.** Compra una casa, y el interés hipotecario más los impuestos estatales y locales pueden superar tu deducción estándar. Direct File solo soporta la deducción estándar.

**3. Tu estado no está en la lista.** Sin estado participante no hay declaración estatal mediante el programa, y para la mayoría eso es descalificante por sí solo.

## ¿Existirá la próxima temporada?

El financiamiento y el alcance del programa han sido balones políticos. No es razón para evitarlo — mientras esté activo y califiques, es la opción correcta — pero verifica su estado cada enero en vez de asumirlo.

## La conclusión

Lo decimos como empresa que vende software de impuestos: si Direct File te cubre, declara con él. Software que no necesitas es exactamente lo que esta industria sobrevendió durante dos décadas. Cuando aparezca un 1099 o tu estado quede fuera de las líneas — ese es el momento en que productos como el nuestro se ganan su precio, y nuestra página de comparación explica exactamente dónde está esa línea.
`,
  },
  {
    slug: "1099-k-what-it-means",
    category: "gig",
    status: "scheduled",
    readTime: 5,
    title: "¿Te llegó un 1099-K? Qué significa realmente para tus impuestos",
    excerpt: "Las apps de pago y los marketplaces ahora reportan mucha más actividad al IRS. Un 1099-K no es una factura de impuestos — pero ignorarlo es como los vendedores pequeños reciben cartas sorpresa.",
    date: "2026-08-10",
    author: "Equipo Taxly",
    tags: ["self-employment","forms"],
    content: `
Un formulario 1099-K en tu buzón causa más pánico innecesario que casi cualquier otro documento fiscal. Aquí está qué es, qué no es, y qué hacer realmente con él.

## Qué es un 1099-K

Es un reporte informativo de una **plataforma de pagos** — Stripe, PayPal, Venmo (negocios), Etsy, eBay, apps de transporte y entregas — que muestra los pagos brutos que procesaron para ti durante el año. Una copia va para ti; otra va al IRS.

El umbral de reporte ha rebotado durante años mientras el Congreso lo revisaba, así que no te sorprendas si te llega uno por una cantidad bastante modesta — revisa el umbral actual en irs.gov en vez de confiar en un número viejo.

## Qué no es

- **No es una factura de impuestos.** Reporta volumen bruto, no ganancia, y no impuesto adeudado.
- **No convierte ventas de hobby en ingreso de negocio gravable por sí solo.** Vender tu sofá viejo por menos de lo que pagaste no es ganancia gravable.
- **No es el único ingreso que reportas.** Tu ingreso real es lo que ganaste, lo reporte un formulario o no.

## El número es bruto — tus impuestos son sobre el neto

El 1099-K muestra todo lo procesado: reembolsos que diste, comisiones que cobró la plataforma, envíos que pagó el comprador. Si tienes un negocio real, tu ganancia gravable es esa cifra bruta menos reembolsos, comisiones, costo de mercancía y gastos — reportada en el Anexo C. Llevar tus propios registros es lo que convierte un número bruto que asusta en un neto preciso.

## La trampa: contar doble

A veces un freelancer recibe un 1099-NEC del cliente *y* un 1099-K de la plataforma que procesó el mismo pago. Reporta el ingreso una vez — desde tus propios registros — y guarda ambos formularios para poder explicar cualquier discrepancia. Un software que pregunta por cada formulario por separado sin conciliarlos infla tu ingreso; esto es exactamente lo que un flujo guiado debe detectar.

## Pagos personales entre amigos

Dividir la renta o una cena en una app de pagos no es ingreso, y las cuentas personales en general no deberían generar 1099-K. Si de todos modos llega uno por transferencias personales, no lo ignores — el IRS tiene copia. Hay una forma designada de anotar el monto erróneo en tu declaración; manéjalo ahí en vez de fingir que el formulario no existe.

## Qué hacer en la práctica

- Compara la cifra bruta contra tus propios registros
- Registra reembolsos, comisiones y gastos — reducen la ganancia gravable
- Reporta el ingreso una sola vez, aunque dos formularios cubran los mismos dólares
- Nunca ignores el formulario: el IRS cruza las declaraciones contra él automáticamente

**El resumen honesto:** un 1099-K es un espejo, no una factura. Si tus registros son buenos, no cambia nada. Si no tienes registros, es la razón para empezar — la copia del IRS llega estés organizado o no.
`,
  },
  {
    slug: "no-income-tax-states-federal-only",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "¿Vives en un estado sin impuesto sobre la renta? Tu declaración es más simple (no gratis)",
    excerpt: "Nueve estados no gravan los salarios — lo que significa que la mayoría de sus residentes no presentan declaración estatal. Qué te ahorra realmente, qué no, y la letra pequeña en dos estados.",
    date: "2026-08-17",
    author: "Equipo Taxly",
    tags: ["states","basics"],
    content: `
Si vives en Texas, Florida, Washington, Nevada, Tennessee, Dakota del Sur, Wyoming, Alaska — o, para ingreso salarial, New Hampshire — estás en uno de los estados sin impuesto personal sobre los salarios. Para la temporada de declaraciones, eso cambia exactamente una cosa, y es buena.

## Qué significa al declarar

**La mayoría de los residentes presenta solo la declaración federal.** Sin declaración estatal que preparar, sin cuota estatal de software, sin segunda fecha límite. Uses la herramienta que uses, el paso entero de "y ahora tu estado" — a menudo de $15 a $60 en cuotas de software, más el tiempo — simplemente desaparece.

Eso también amplía tus opciones gratuitas: la mayor limitación de IRS Direct File para muchos es la cobertura estatal, que es irrelevante cuando no hay declaración estatal que presentar.

## Qué no significa

- **No es una vida libre de impuestos.** Estos estados se financian con impuestos a las ventas y a la propiedad — a menudo por encima del promedio. Cambias dónde golpea el impuesto, no si existe.
- **No es cero complejidad federal.** Impuesto de trabajo por cuenta propia, pagos trimestrales, 1099 — todo completamente federal, todo sigue siendo tuyo.
- **No es automático si tienes ingreso de otro estado.** ¿Trabajaste remoto parte del año desde un estado con impuesto, o tienes renta de un inmueble en uno? Puede que debas una declaración de *no residente* allí aunque tu estado no quiera nada.

## Los dos asteriscos

**Washington** no grava salarios pero sí cobra un impuesto a las ganancias de capital grandes por encima de un umbral considerable — quienes venden mucha acción deberían revisarlo. **New Hampshire** gravó intereses y dividendos durante años; ese impuesto se eliminó gradualmente, pero verifica la regla actual si tienes ingreso de inversiones significativo.

## El año de la mudanza

Si te mudas entre un estado con impuesto y uno sin él a mitad de año, normalmente presentarás una declaración de año parcial para el estado con impuesto cubriendo los meses que viviste allí. El ahorro empieza el día que cambia la residencia — una razón por la que las mudanzas a Texas y Florida se acumulan en diciembre.

## El resumen honesto

Los estados sin impuesto sobre la renta son el único lugar donde declarar es genuinamente tan simple como suena: una declaración federal y listo, para la mayoría. Por eso son los estados de lanzamiento de Taxly — los residentes de TX, FL y WA reciben la experiencia federal guiada completa sin declaración estatal que cobrar. El nivel gratis más un estado sin impuesto es lo más barato que puede ser declarar legítimamente.
`,
  },
];

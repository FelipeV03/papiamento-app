import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

const CURRICULUM = {
  A0: {
    label: "A0", fullLabel: "A0 · Cero", color: "#64B5F6", icon: "🌱",
    description: "Primeras palabras. Cero conocimiento previo.",
    sections: [
      {
        title: "Alfabeto y Pronunciación", type: "grammar",
        content: [
          {
            subtitle: "El papiamento usa el alfabeto latino con algunas particularidades:",
            points: [
              "**ò** — 'o' abierta (como en 'corra'): Kòrsou",
              "**sh** — suena como 'sh' inglesa: shete (siete)",
              "**dj** — sonido 'dj' suave: djis (apenas)",
              "Las vocales son puras como en español: a, e, i, o, u",
              "El acento cae generalmente en la primera sílaba",
            ]
          },
          {
            subtitle: "Aruba vs Curaçao / Bonaire:",
            points: [
              "Aruba escribe **papiamento** — Curaçao escribe **papiamentu**",
              "Aruba: 'Kiko tal?' → Curaçao: 'Con ta bai?'",
              "El vocabulario es casi idéntico; solo varía la ortografía",
            ]
          }
        ]
      },
      {
        title: "Saludos Esenciales", type: "vocab",
        words: [
          { pap: "Bon dia", esp: "Buenos días", pron: "bon DI-a", ex: "Bon dia, kiko tal?", tip: "Hasta el mediodía" },
          { pap: "Bon tardi", esp: "Buenas tardes", pron: "bon TAR-di", ex: "Bon tardi, señora.", tip: "Del español 'tarde'" },
          { pap: "Bon nochi", esp: "Buenas noches", pron: "bon NO-chi", ex: "Bon nochi, ta ora di drumi.", tip: "" },
          { pap: "Halo / Ola", esp: "Hola", pron: "HA-lo / O-la", ex: "Halo! Con ta bai?", tip: "Informal, muy común" },
          { pap: "Kiko tal?", esp: "¿Cómo estás? (Aruba)", pron: "KI-ko tal", ex: "Kiko tal, bo ta bon?", tip: "Literalmente: ¿Qué tal?" },
          { pap: "Con ta bai?", esp: "¿Cómo va? (Curaçao)", pron: "kon ta BAI", ex: "Con ta bai bo bida?", tip: "Literalmente: ¿Cómo va?" },
          { pap: "Ta bon, danki", esp: "Bien, gracias", pron: "ta bon DAN-ki", ex: "Ta bon, danki. I bo?", tip: "" },
          { pap: "Ayo", esp: "Adiós", pron: "A-yo", ex: "Ayo! Te mañan.", tip: "Del holandés 'adieu'" },
          { pap: "Te mañan", esp: "Hasta mañana", pron: "te ma-ÑAN", ex: "Ayo, te mañan amigo.", tip: "" },
          { pap: "Te loke", esp: "Hasta luego", pron: "te LO-ke", ex: "Te loke, sigur.", tip: "Muy popular en Aruba" },
        ]
      },
      {
        title: "Pronombres Personales", type: "grammar",
        content: [
          {
            subtitle: "Los pronombres son invariables (no cambian por género ni caso):",
            table: {
              headers: ["Papiamento", "Español", "Ejemplo"],
              rows: [
                ["Mi", "Yo", "Mi ta Felipe."],
                ["Bo", "Tú", "Bo ta bon?"],
                ["E", "Él / Ella", "E ta mi ruman."],
                ["Nos", "Nosotros/as", "Nos ta bai huntu."],
                ["Boso", "Ustedes", "Boso ta di unda?"],
                ["Nan", "Ellos / Ellas", "Nan ta studia."],
              ]
            }
          },
          {
            subtitle: "Importante:",
            points: [
              "No hay distinción masculino/femenino: **e** es él Y ella",
              "**Ta** es el verbo ser/estar en presente (sin conjugar)",
              "'Mi ta kansa' = Yo estoy cansado/a",
            ]
          }
        ]
      },
      {
        title: "Números 1–20", type: "vocab",
        words: [
          { pap: "Un", esp: "1", pron: "un", ex: "Un awa por fabor.", tip: "" },
          { pap: "Dos", esp: "2", pron: "dos", ex: "Dos yiu.", tip: "= español" },
          { pap: "Tres", esp: "3", pron: "tres", ex: "Tres dia.", tip: "= español" },
          { pap: "Kuater", esp: "4", pron: "KUA-ter", ex: "Kuater ora.", tip: "Del portugués 'quatro'" },
          { pap: "Sinku", esp: "5", pron: "SIN-ku", ex: "Sinku florin.", tip: "Del español 'cinco'" },
          { pap: "Seis", esp: "6", pron: "seis", ex: "Seis luna.", tip: "= español" },
          { pap: "Shete", esp: "7", pron: "SHE-te", ex: "Shete dia den un siman.", tip: "" },
          { pap: "Ocho", esp: "8", pron: "O-cho", ex: "Ocho ora.", tip: "= español" },
          { pap: "Nuebe", esp: "9", pron: "NUE-be", ex: "Nuebe florin.", tip: "" },
          { pap: "Dies", esp: "10", pron: "dies", ex: "Dies estudiantenan.", tip: "" },
          { pap: "Diesun", esp: "11", pron: "dies-UN", ex: "Diesun yiu.", tip: "diez + uno" },
          { pap: "Diesdos", esp: "12", pron: "dies-DOS", ex: "Diesdos luna den un aña.", tip: "" },
          { pap: "Binti", esp: "20", pron: "BIN-ti", ex: "Binti florin.", tip: "Del portugués 'vinte'" },
        ]
      },
    ]
  },
  A1: {
    label: "A1", fullLabel: "A1 · Básico", color: "#81C784", icon: "🌿",
    description: "Frases del día a día. Presentaciones y necesidades básicas.",
    sections: [
      {
        title: "El Verbo 'Ta'", type: "grammar",
        content: [
          {
            subtitle: "Ta es el verbo ser/estar. Es completamente invariable:",
            table: {
              headers: ["Frase", "Traducción"],
              rows: [
                ["Mi ta kansa.", "Estoy cansado/a."],
                ["Bo ta bunita.", "Eres bonita."],
                ["E ta doño.", "Él/Ella es el dueño."],
                ["Nos ta huntu.", "Estamos juntos."],
                ["Boso ta listo?", "¿Están listos?"],
                ["Nan ta feliz.", "Ellos están felices."],
              ]
            }
          },
          {
            subtitle: "Pasado y Futuro:",
            points: [
              "**Tabata** = era / estaba → Mi tabata kansa.",
              "**Tabatin** = había → Tabatin hopi hende.",
              "**Lo** + verbo = futuro → Lo mi ta na kas.",
            ]
          }
        ]
      },
      {
        title: "Familia y Personas", type: "vocab",
        words: [
          { pap: "Mama", esp: "Mamá", pron: "MA-ma", ex: "Mi mama ta kuki bon.", tip: "" },
          { pap: "Tata / Papa", esp: "Papá", pron: "TA-ta", ex: "Mi tata ta trabou.", tip: "Tata es más tradicional" },
          { pap: "Yiu", esp: "Hijo/a", pron: "YIU", ex: "Mi tin dos yiu.", tip: "La 'y' suena como en 'yo'" },
          { pap: "Yiu homber", esp: "Hijo (varón)", pron: "yiu OM-ber", ex: "Mi yiu homber ta doze aña.", tip: "" },
          { pap: "Yiu muher", esp: "Hija", pron: "yiu mu-HER", ex: "Mi yiu muher ta bunita.", tip: "" },
          { pap: "Ruman", esp: "Hermano/a", pron: "RU-man", ex: "Mi tin un ruman.", tip: "Sin distinción de género" },
          { pap: "Tanta", esp: "Tía", pron: "TAN-ta", ex: "Mi tanta biba na Hulanda.", tip: "" },
          { pap: "Tio", esp: "Tío", pron: "TI-o", ex: "Mi tio ta doño di restaurant.", tip: "" },
          { pap: "Opa", esp: "Abuelo", pron: "O-pa", ex: "Mi opa tin setenta aña.", tip: "Del holandés" },
          { pap: "Oma", esp: "Abuela", pron: "O-ma", ex: "Mi oma ta konta historia.", tip: "Del holandés" },
          { pap: "Kasá", esp: "Casado/a", pron: "ka-SA", ex: "Nan ta kasá desde dies aña.", tip: "" },
          { pap: "Amigo / Amigu", esp: "Amigo", pron: "a-MI-go", ex: "E ta mi mehor amigo.", tip: "" },
          { pap: "Hende", esp: "Persona / Gente", pron: "HEN-de", ex: "Hopi hende a bini.", tip: "Muy frecuente" },
        ]
      },
      {
        title: "Frases de Presentación", type: "phrases",
        phrases: [
          { pap: "Mi nomber ta Felipe.", esp: "Mi nombre es Felipe.", context: "Formal" },
          { pap: "Mi yama Felipe.", esp: "Me llamo Felipe.", context: "Informal" },
          { pap: "Mi ta di Colombia.", esp: "Soy de Colombia.", context: "Origen" },
          { pap: "Mi tin binti-sinku aña.", esp: "Tengo 25 años.", context: "Edad" },
          { pap: "Mi ta un desaroyado.", esp: "Soy desarrollador.", context: "Profesión" },
          { pap: "Placer di konosebo.", esp: "Mucho gusto en conocerte.", context: "Al conocer" },
          { pap: "Kiko bo nomber ta?", esp: "¿Cómo te llamas?", context: "Pregunta" },
          { pap: "Kuantu aña bo tin?", esp: "¿Cuántos años tienes?", context: "Pregunta" },
          { pap: "Di unda bo ta?", esp: "¿De dónde eres?", context: "Pregunta" },
          { pap: "Unda bo ta biba?", esp: "¿Dónde vives?", context: "Pregunta" },
        ]
      },
      {
        title: "Colores", type: "vocab",
        words: [
          { pap: "Blou", esp: "Azul", pron: "blou", ex: "E laman ta blou.", tip: "Del holandés 'blauw'" },
          { pap: "Geel", esp: "Amarillo", pron: "geel", ex: "E solo ta geel.", tip: "Del holandés" },
          { pap: "Kòrá", esp: "Rojo", pron: "kò-RA", ex: "Mi kas ta kòrá.", tip: "Origen africano" },
          { pap: "Berde", esp: "Verde", pron: "BER-de", ex: "E palu ta berde.", tip: "Del español" },
          { pap: "Pretu", esp: "Negro", pron: "PRE-tu", ex: "Mi kabei ta pretu.", tip: "" },
          { pap: "Blanku", esp: "Blanco", pron: "BLAN-ku", ex: "E kas ta blanku.", tip: "" },
          { pap: "Oranje", esp: "Naranja", pron: "o-RAN-ye", ex: "E fruta ta oranje.", tip: "Del holandés" },
          { pap: "Roos", esp: "Rosado", pron: "roos", ex: "E wèshi ta roos.", tip: "Del holandés" },
          { pap: "Marón", esp: "Marrón", pron: "ma-RON", ex: "E tabel ta marón.", tip: "" },
          { pap: "Grijs", esp: "Gris", pron: "greis", ex: "E luft ta grijs awe.", tip: "Del holandés" },
        ]
      },
    ]
  },
  A2: {
    label: "A2", fullLabel: "A2 · Elemental", color: "#AED581", icon: "🌾",
    description: "Conversaciones simples. Compras, comida, lugares.",
    sections: [
      {
        title: "En el Restaurante", type: "vocab",
        words: [
          { pap: "Mi ta hungri", esp: "Tengo hambre", pron: "mi ta HUN-gri", ex: "Ay, mi ta hungri masha!", tip: "Del inglés 'hungry'" },
          { pap: "Mi ta dorst", esp: "Tengo sed", pron: "mi ta dorst", ex: "Mi ta dorst, dami awa.", tip: "Del holandés 'dorst'" },
          { pap: "Kuminda", esp: "Comida", pron: "ku-MIN-da", ex: "E kuminda ta dushi!", tip: "" },
          { pap: "Dushi", esp: "Delicioso / Dulce / Querido", pron: "DU-shi", ex: "Ay, e piska ta dushi!", tip: "Palabra MUY versátil" },
          { pap: "Awa", esp: "Agua", pron: "A-wa", ex: "Un glas di awa por fabor.", tip: "" },
          { pap: "Piska", esp: "Pescado", pron: "PIS-ka", ex: "Mi ke kome piska.", tip: "" },
          { pap: "Karni", esp: "Carne", pron: "KAR-ni", ex: "E karni ta duru.", tip: "" },
          { pap: "Kabritu stoba", esp: "Estofado de cabrito", pron: "ka-BRI-tu", ex: "Kabritu stoba ta tipiko.", tip: "Plato nacional de Curaçao" },
          { pap: "Keshi yená", esp: "Queso relleno", pron: "KE-shi ye-NA", ex: "Keshi yená ta famoso.", tip: "Plato típico icónico" },
          { pap: "Kòfi", esp: "Café", pron: "kò-FI", ex: "Un kòpi di kòfi.", tip: "" },
          { pap: "Mi ke", esp: "Yo quiero", pron: "mi ke", ex: "Mi ke un kòpi di kòfi.", tip: "Ke = querer" },
          { pap: "La kenta", esp: "La cuenta", pron: "la KEN-ta", ex: "Por mi haya la kenta?", tip: "" },
        ]
      },
      {
        title: "Estructura de Oraciones", type: "grammar",
        content: [
          {
            subtitle: "Los verbos NO se conjugan. Se usan marcadores de tiempo:",
            table: {
              headers: ["Marcador", "Tiempo", "Ejemplo"],
              rows: [
                ["(sin marcador)", "Presente habitual", "Mi kome piska."],
                ["ta", "Presente continuo", "Mi ta kome awe."],
                ["a", "Pasado simple", "Mi a kome ayer."],
                ["tabata", "Pasado continuo", "Mi tabata kome."],
                ["lo", "Futuro", "Mi lo kome mañan."],
                ["mester", "Deber / Necesitar", "Mi mester kome."],
                ["ke", "Querer", "Mi ke kome."],
                ["por", "Poder", "Mi por kome."],
                ["sa", "Saber hacer", "Mi sa kome bon."],
              ]
            }
          },
          {
            subtitle: "Negación — 'no' después del sujeto:",
            points: [
              "Mi **no** ta kome karni. → No como carne.",
              "E **no** a bini. → Él/ella no vino.",
              "Nos **no** ke bai. → No queremos ir.",
            ]
          }
        ]
      },
      {
        title: "De Compras", type: "phrases",
        phrases: [
          { pap: "Kuantu e ta kosta?", esp: "¿Cuánto cuesta?", context: "Precio" },
          { pap: "Ta masha karo.", esp: "Es muy caro.", context: "Queja" },
          { pap: "Tin algo mas barata?", esp: "¿Hay algo más barato?", context: "Regateo" },
          { pap: "Mi ke kompra esaki.", esp: "Quiero comprar esto.", context: "Comprar" },
          { pap: "Unda ta e tienda?", esp: "¿Dónde está la tienda?", context: "Dirección" },
          { pap: "Tin esaki den otro kolo?", esp: "¿Hay esto en otro color?", context: "Ropa" },
          { pap: "Mi por prubo esaki?", esp: "¿Puedo probarlo?", context: "Probador" },
          { pap: "E ta bon pa mi.", esp: "Me queda bien.", context: "Ropa" },
          { pap: "Mi ta paga ku karta.", esp: "Pago con tarjeta.", context: "Pago" },
          { pap: "Dami un rekibo.", esp: "Dame un recibo.", context: "Comprobante" },
        ]
      },
      {
        title: "Clima y Tiempo", type: "vocab",
        words: [
          { pap: "Awe", esp: "Hoy", pron: "A-we", ex: "Awe ta djárason.", tip: "" },
          { pap: "Mañan", esp: "Mañana", pron: "ma-ÑAN", ex: "Mañan lo mi bai playa.", tip: "" },
          { pap: "Ayera", esp: "Ayer", pron: "a-YE-ra", ex: "Ayera tabatin yobida.", tip: "" },
          { pap: "Siman", esp: "Semana", pron: "si-MAN", ex: "Siman k'abo mi ta bai.", tip: "" },
          { pap: "Luna", esp: "Mes / Luna", pron: "LU-na", ex: "Den dos luna.", tip: "El contexto indica cuál" },
          { pap: "Aña", esp: "Año", pron: "A-ña", ex: "Aña pasá tabata dushi.", tip: "" },
          { pap: "Kalor", esp: "Calor", pron: "ka-LOR", ex: "Masha kalor awe!", tip: "= español" },
          { pap: "Yobida", esp: "Lluvia", pron: "yo-BI-da", ex: "Tin yobida mañan.", tip: "" },
          { pap: "Solo", esp: "Sol", pron: "SO-lo", ex: "E solo ta fuerte.", tip: "= español" },
          { pap: "Biento", esp: "Viento", pron: "BIEN-to", ex: "Tin hopi biento awe.", tip: "" },
        ]
      },
    ]
  },
  B1: {
    label: "B1", fullLabel: "B1 · Intermedio", color: "#FFB74D", icon: "🌻",
    description: "Conversaciones fluidas. Trabajo, opiniones, narración.",
    sections: [
      {
        title: "Verbos Esenciales (+35)", type: "vocab",
        words: [
          { pap: "Papia", esp: "Hablar", pron: "pa-PI-a", ex: "Mi ta papia papiamento.", tip: "" },
          { pap: "Studia", esp: "Estudiar", pron: "STU-dia", ex: "Bo mester studia mas.", tip: "" },
          { pap: "Traha", esp: "Trabajar", pron: "TRA-ha", ex: "Unda bo ta traha?", tip: "" },
          { pap: "Bai", esp: "Ir", pron: "bai", ex: "Mi ta bai kas.", tip: "¡Muy frecuente!" },
          { pap: "Bini", esp: "Venir", pron: "BI-ni", ex: "Bini akí!", tip: "" },
          { pap: "Kome", esp: "Comer", pron: "KO-me", ex: "Mi ke kome.", tip: "" },
          { pap: "Bebe", esp: "Beber", pron: "BE-be", ex: "Mi ta bebe awa.", tip: "" },
          { pap: "Drumi", esp: "Dormir", pron: "DRU-mi", ex: "Mi ke drumi.", tip: "" },
          { pap: "Para", esp: "Parar / Estar de pie", pron: "PA-ra", ex: "Para akí.", tip: "" },
          { pap: "Sinta", esp: "Sentarse", pron: "SIN-ta", ex: "Sinta akí konmigo.", tip: "" },
          { pap: "Lanta", esp: "Levantarse", pron: "LAN-ta", ex: "Lanta tempran.", tip: "" },
          { pap: "Kanta", esp: "Cantar", pron: "KAN-ta", ex: "Mi sa kanta.", tip: "" },
          { pap: "Baila", esp: "Bailar", pron: "BAI-la", ex: "Nos ta baila tumba.", tip: "" },
          { pap: "Skucha", esp: "Escuchar", pron: "SKUCHA", ex: "Skucha bon!", tip: "" },
          { pap: "Mira", esp: "Ver / Mirar", pron: "MI-ra", ex: "Mira e muhé.", tip: "" },
          { pap: "Lesa", esp: "Leer", pron: "LE-sa", ex: "Mi ta lesa un buki.", tip: "" },
          { pap: "Skirbi", esp: "Escribir", pron: "SKIR-bi", ex: "Skirbi bo nomber.", tip: "" },
          { pap: "Kompra", esp: "Comprar", pron: "KOM-pra", ex: "Mi a kompra kome.", tip: "" },
          { pap: "Bende", esp: "Vender", pron: "BEN-de", ex: "E ta bende piska.", tip: "" },
          { pap: "Yuda", esp: "Ayudar", pron: "YU-da", ex: "Por bo yudami?", tip: "" },
          { pap: "Haña", esp: "Encontrar / Obtener", pron: "HA-ña", ex: "Mi a haña trabou.", tip: "¡Muy usada!" },
          { pap: "Keda", esp: "Quedarse", pron: "KE-da", ex: "Keda akí.", tip: "" },
          { pap: "Bolbe", esp: "Volver", pron: "BOL-be", ex: "Mi lo bolbe mañan.", tip: "" },
          { pap: "Hasi", esp: "Hacer", pron: "HA-si", ex: "Kiko bo ta hasi?", tip: "¡Muy usada!" },
          { pap: "Tuma", esp: "Tomar / Coger", pron: "TU-ma", ex: "Tuma e buki.", tip: "" },
          { pap: "Duna", esp: "Dar", pron: "DU-na", ex: "Duna mi e papel.", tip: "" },
          { pap: "Hiba", esp: "Llevar (hacia allá)", pron: "HI-ba", ex: "Hiba e karta.", tip: "" },
          { pap: "Trece", esp: "Traer (hacia aquí)", pron: "TRE-se", ex: "Trece e buki.", tip: "" },
          { pap: "Pensa", esp: "Pensar", pron: "PEN-sa", ex: "Mi ta pensa ku ta bon.", tip: "" },
          { pap: "Sinti", esp: "Sentir", pron: "SIN-ti", ex: "Mi ta sinti dolor.", tip: "" },
          { pap: "Kere", esp: "Creer", pron: "KE-re", ex: "Mi ta kere ku si.", tip: "" },
          { pap: "Konosé", esp: "Conocer", pron: "ko-no-SE", ex: "Mi ta konosé e hende.", tip: "" },
          { pap: "Sabi", esp: "Saber (un hecho)", pron: "SA-bi", ex: "Mi no sabi.", tip: "≠ sa (saber hacer)" },
          { pap: "Manda", esp: "Mandar / Enviar", pron: "MAN-da", ex: "Manda mi un mensahe.", tip: "" },
        ]
      },
      {
        title: "Adjetivos Esenciales", type: "vocab",
        words: [
          { pap: "Grandi", esp: "Grande", pron: "GRAN-di", ex: "E kas ta grandi.", tip: "" },
          { pap: "Chikitu", esp: "Pequeño", pron: "chi-KI-tu", ex: "E mucha ta chikitu.", tip: "" },
          { pap: "Bunita", esp: "Bonito/a", pron: "bu-NI-ta", ex: "Kòrsou ta bunita.", tip: "" },
          { pap: "Nobo", esp: "Nuevo", pron: "NO-bo", ex: "Un karro nobo.", tip: "" },
          { pap: "Bieho", esp: "Viejo", pron: "BIE-ho", ex: "E buki ta bieho.", tip: "" },
          { pap: "Duru", esp: "Duro / Difícil", pron: "DU-ru", ex: "E trabou ta duru.", tip: "" },
          { pap: "Suabe", esp: "Suave / Fácil", pron: "SUA-be", ex: "E tela ta suabe.", tip: "" },
          { pap: "Karo", esp: "Caro", pron: "KA-ro", ex: "E karro ta karo.", tip: "" },
          { pap: "Barata", esp: "Barato", pron: "ba-RA-ta", ex: "Haya algo mas barata.", tip: "" },
          { pap: "Alegre", esp: "Alegre", pron: "a-LE-gre", ex: "E hende ta alegre.", tip: "" },
          { pap: "Tristo", esp: "Triste", pron: "TRIS-to", ex: "Mi ta tristo awe.", tip: "" },
          { pap: "Kansá", esp: "Cansado/a", pron: "kan-SA", ex: "Mi ta kansá.", tip: "" },
          { pap: "Felis", esp: "Feliz", pron: "fe-LIS", ex: "Mi ta felis ku bo.", tip: "" },
          { pap: "Brabo", esp: "Enojado / Bravo", pron: "BRA-bo", ex: "No ta brabo!", tip: "¡Ojo! ≠ valiente" },
          { pap: "Segur", esp: "Seguro / ¡Claro!", pron: "se-GUR", ex: "Segur, mi ta bini!", tip: "También: 'por supuesto'" },
        ]
      },
      {
        title: "Trabajo y Opiniones", type: "phrases",
        phrases: [
          { pap: "Mi ta traha na un kompania di teknologia.", esp: "Trabajo en una empresa de tecnología.", context: "Trabajo" },
          { pap: "Mi ta un programado / desaroyado.", esp: "Soy programador/desarrollador.", context: "Profesión" },
          { pap: "Mi ta studia na universidá.", esp: "Estudio en la universidad.", context: "Estudios" },
          { pap: "Mi tin un reunion awe atardi.", esp: "Tengo una reunión esta tarde.", context: "Trabajo" },
          { pap: "Por nos papia tokante esaki?", esp: "¿Podemos hablar sobre esto?", context: "Reunión" },
          { pap: "Mi no ta di akuerdo.", esp: "No estoy de acuerdo.", context: "Opinión" },
          { pap: "Mi ta di akuerdo ku bo.", esp: "Estoy de acuerdo contigo.", context: "Opinión" },
          { pap: "Kiko bo ta pensa?", esp: "¿Qué piensas?", context: "Pedir opinión" },
          { pap: "Na mi opinion...", esp: "En mi opinión...", context: "Dar opinión" },
          { pap: "Esaki ta importante pa mi.", esp: "Esto es importante para mí.", context: "Énfasis" },
        ]
      },
      {
        title: "Las 7 Preguntas Clave", type: "grammar",
        content: [
          {
            subtitle: "Las palabras interrogativas del papiamento:",
            table: {
              headers: ["Papiamento", "Español", "Ejemplo"],
              rows: [
                ["Kiko", "¿Qué?", "Kiko bo ke?"],
                ["Unda", "¿Dónde?", "Unda bo ta biba?"],
                ["Di unda", "¿De dónde?", "Di unda bo ta?"],
                ["Kuantu", "¿Cuánto/s?", "Kuantu e ta kosta?"],
                ["Ken", "¿Quién?", "Ken a yama?"],
                ["Ki ora", "¿A qué hora?", "Ki ora bo ta bini?"],
                ["Pakiko", "¿Por qué?", "Pakiko bo ta tristo?"],
                ["Komo / Kon", "¿Cómo?", "Kon bo ta hasi esaki?"],
                ["Kua", "¿Cuál?", "Kua bo ta preferá?"],
              ]
            }
          }
        ]
      },
    ]
  },
  B2: {
    label: "B2", fullLabel: "B2 · Intermedio Alto", color: "#FF8A65", icon: "🌺",
    description: "Fluidez natural. Debates, emociones, situaciones complejas.",
    sections: [
      {
        title: "Conectores Avanzados", type: "vocab",
        words: [
          { pap: "Pero", esp: "Pero", pron: "PE-ro", ex: "Mi ke bai, pero mi ta kansá.", tip: "" },
          { pap: "Sinembargo", esp: "Sin embargo", pron: "sin-em-BAR-go", ex: "Sinembargo, mi a bini.", tip: "" },
          { pap: "Porke", esp: "Porque", pron: "por-KE", ex: "Mi ta feliz porke bo ta akí.", tip: "" },
          { pap: "Anto", esp: "Entonces / Así que", pron: "AN-to", ex: "Anto, kiko nos ta hasi?", tip: "¡Muletilla conversacional!" },
          { pap: "Asina", esp: "Así / De ese modo", pron: "a-SI-na", ex: "Hasi asina.", tip: "" },
          { pap: "Tampoko", esp: "Tampoco", pron: "tam-PO-ko", ex: "Mi tampoko sa.", tip: "" },
          { pap: "Ainda", esp: "Todavía / Aún", pron: "a-IN-da", ex: "E ainda ta na kas.", tip: "" },
          { pap: "Ya", esp: "Ya / Ahora mismo", pron: "ya", ex: "Mi ta bai ya.", tip: "" },
          { pap: "Aunke", esp: "Aunque", pron: "aun-KE", ex: "Aunke ta yobe, mi ta bai.", tip: "" },
          { pap: "Mientras", esp: "Mientras", pron: "MIEN-tras", ex: "Mientras mi ta kome...", tip: "" },
          { pap: "Despues ku", esp: "Después de que", pron: "des-PUES ku", ex: "Despues ku mi traha...", tip: "" },
          { pap: "Antes ku", esp: "Antes de que", pron: "AN-tes ku", ex: "Antes ku e bini...", tip: "" },
          { pap: "Den lugá di", esp: "En lugar de", pron: "den lu-GA di", ex: "Den lugá di kome, el a bebe.", tip: "" },
          { pap: "Na tur caso", esp: "En todo caso", pron: "", ex: "Na tur caso, mi lo bai.", tip: "" },
        ]
      },
      {
        title: "Emociones y Sentimientos", type: "vocab",
        words: [
          { pap: "Mi ta stimá bo", esp: "Te quiero / Te amo", pron: "mi ta sti-MA bo", ex: "Mi ta stimá bo masha.", tip: "Estimá = querer/amar" },
          { pap: "Mi ta eksha bo falta", esp: "Te extraño", pron: "mi ta EK-sha", ex: "Mi ta eksha bo falta kada dia.", tip: "¡Expresión muy usada!" },
          { pap: "Mi ta skoní", esp: "Estoy avergonzado/a", pron: "mi ta sko-NI", ex: "Mi ta skoní di esaki.", tip: "" },
          { pap: "Mi ta preokupá", esp: "Estoy preocupado/a", pron: "", ex: "Mi ta preokupá pa bo.", tip: "" },
          { pap: "Mi ta desepshoná", esp: "Estoy decepcionado/a", pron: "", ex: "Mi ta desepshoná.", tip: "" },
          { pap: "Mi ta entusiasma", esp: "Estoy emocionado/a", pron: "", ex: "Mi ta entusiasma ku e notisia!", tip: "" },
          { pap: "Orguyoso", esp: "Orgulloso/a", pron: "or-gu-YO-so", ex: "Mi ta orguyoso di bo.", tip: "" },
          { pap: "Zeloso", esp: "Celoso/a", pron: "se-LO-so", ex: "No ta zeloso asina.", tip: "" },
          { pap: "Nostalgiko", esp: "Nostálgico/a", pron: "", ex: "Mi ta sinti nostalgiko.", tip: "" },
          { pap: "Laga bai", esp: "Déjalo / Suéltalo", pron: "LA-ga bai", ex: "Laga bai, no tin importansia.", tip: "Como 'let it go'" },
        ]
      },
      {
        title: "Salud y Emergencias", type: "phrases",
        phrases: [
          { pap: "Mi tin dolor di kabes.", esp: "Tengo dolor de cabeza.", context: "Salud" },
          { pap: "Mi tin fiber.", esp: "Tengo fiebre.", context: "Salud" },
          { pap: "Mi mester un dòkter.", esp: "Necesito un médico.", context: "Emergencia" },
          { pap: "Yama ambulansia!", esp: "¡Llama una ambulancia!", context: "Emergencia" },
          { pap: "Socoro!", esp: "¡Socorro!", context: "Emergencia" },
          { pap: "Yama polis!", esp: "¡Llama a la policía!", context: "Emergencia" },
          { pap: "Mi tin alerhia na...", esp: "Soy alérgico/a a...", context: "Salud" },
          { pap: "Mi a keda heridá.", esp: "Me herí.", context: "Accidente" },
          { pap: "Mi mester remedi.", esp: "Necesito medicina.", context: "Salud" },
          { pap: "Unda ta e spòtspòt mas serka?", esp: "¿Dónde está el hospital más cercano?", context: "Emergencia" },
        ]
      },
      {
        title: "Expresiones Idiomáticas", type: "vocab",
        words: [
          { pap: "Dushi", esp: "Dulce/delicioso/querido/bueno/bonito", pron: "DU-shi", ex: "Ay dushi, bo ta hopi dushi!", tip: "La palabra más versátil del idioma" },
          { pap: "Hopi bon", esp: "Muy bien / Muy bueno", pron: "HO-pi bon", ex: "Hopi bon! Bo a hasi bon.", tip: "Hopi = mucho/muy" },
          { pap: "Masha bon", esp: "Muy bien (énfasis)", pron: "MA-sha bon", ex: "Masha bon bo a kanta!", tip: "Masha = muchísimo" },
          { pap: "No tin nada", esp: "No hay problema", pron: "", ex: "No tin nada, bo por bai.", tip: "Como 'no worries'" },
          { pap: "Chansa!", esp: "¡Suerte!", pron: "CHAN-sa", ex: "Chansa ku e eksamen!", tip: "" },
          { pap: "Hopi masha", esp: "Muchísimo", pron: "HO-pi MA-sha", ex: "Mi stimá bo hopi masha.", tip: "Doble énfasis" },
          { pap: "Loke ta loke", esp: "Así es la vida / Qué se le hace", pron: "", ex: "Loke ta loke, nos mester sigui.", tip: "Aceptación filosófica" },
          { pap: "Porfin", esp: "Por fin / Al fin", pron: "por-FIN", ex: "Porfin bo a yega!", tip: "" },
          { pap: "Ta bon asina", esp: "Está bien así", pron: "", ex: "Ta bon asina, no mester preokupá.", tip: "Conformidad / resignación" },
          { pap: "Bo sabi", esp: "¿Sabes? / ¿Entiendes?", pron: "bo SA-bi", ex: "Ta komklikado, bo sabi.", tip: "Muletilla conversacional" },
        ]
      },
    ]
  },
  C1: {
    label: "C1", fullLabel: "C1 · Avanzado", color: "#CE93D8", icon: "🌴",
    description: "Dominio completo. Cultura, gramática avanzada, vocabulario formal.",
    sections: [
      {
        title: "Vocabulario Formal", type: "vocab",
        words: [
          { pap: "Gobernashon", esp: "Gobierno", pron: "", ex: "E gobernashon a deside.", tip: "" },
          { pap: "Lei", esp: "Ley", pron: "lei", ex: "Segun e lei...", tip: "" },
          { pap: "Derecho", esp: "Derecho (legal)", pron: "", ex: "Tin derecho na edukashon.", tip: "" },
          { pap: "Ekonomia", esp: "Economía", pron: "", ex: "E ekonomia ta krese.", tip: "" },
          { pap: "Sukseso", esp: "Éxito", pron: "", ex: "E emprendedo a haya sukseso.", tip: "" },
          { pap: "Desaroyo", esp: "Desarrollo", pron: "", ex: "Desaroyo soshal ta importante.", tip: "" },
          { pap: "Investigashon", esp: "Investigación", pron: "", ex: "Nan ta hasi investigashon.", tip: "" },
          { pap: "Medioambiente", esp: "Medio ambiente", pron: "", ex: "Protehé e medioambiente.", tip: "" },
          { pap: "Komunidat", esp: "Comunidad", pron: "", ex: "E komunidat ta fuerte.", tip: "" },
          { pap: "Sosiedad", esp: "Sociedad", pron: "", ex: "E sosiedad ta kambia.", tip: "" },
          { pap: "Kultura", esp: "Cultura", pron: "", ex: "Kultura di Kòrsou ta riku.", tip: "" },
          { pap: "Tradishon", esp: "Tradición", pron: "", ex: "E tradishon ta sigui biba.", tip: "" },
          { pap: "Patrimonio", esp: "Patrimonio", pron: "", ex: "Patrimonio kultural di e isla.", tip: "" },
          { pap: "Independensia", esp: "Independencia", pron: "", ex: "Nan ta lucha pa independensia.", tip: "" },
        ]
      },
      {
        title: "Gramática Avanzada", type: "grammar",
        content: [
          {
            subtitle: "El condicional — 'si... lo...'",
            points: [
              "Si mi tabatin plaka, mi lo a kompra un kas.",
              "→ Si tuviera dinero, habría comprado una casa.",
              "Si bo ta bini mañan, nos lo papia.",
              "→ Si vienes mañana, hablaremos.",
            ]
          },
          {
            subtitle: "Voz pasiva — usando 'a wordo':",
            points: [
              "E buki **a wordo** skirbi na 1950. → El libro fue escrito en 1950.",
              "E kas **a wordo** benta aña pasá. → La casa fue vendida el año pasado.",
            ]
          },
          {
            subtitle: "Deseo / duda con 'ku':",
            points: [
              "Mi ke **ku** bo ta feliz. → Quiero que seas feliz.",
              "E ta spera **ku** nos bini. → Espera que vengamos.",
            ]
          },
          {
            subtitle: "Diminutivos:",
            points: [
              "**-chi** → diminutivo: kas → **kaschi** (casita), yiu → **yiuchi** (hijito)",
              "**Masha** + adj → superlativo: masha bunita (muy bonita)",
            ]
          }
        ]
      },
      {
        title: "Cultura y Frases Nativas", type: "phrases",
        phrases: [
          { pap: "Nos isla ta un paraiso.", esp: "Nuestra isla es un paraíso.", context: "Orgullo" },
          { pap: "Kòrsou ta mi korazon.", esp: "Curaçao es mi corazón.", context: "Identidad" },
          { pap: "Papiamentu ta nos lenga materno.", esp: "El papiamentu es nuestra lengua materna.", context: "Identidad" },
          { pap: "Nos mester preservá nos kultura.", esp: "Debemos preservar nuestra cultura.", context: "Cultural" },
          { pap: "Willemstad ta e kapital di Kòrsou.", esp: "Willemstad es la capital de Curaçao.", context: "Geografía" },
          { pap: "Tambu ta un ritmo tipiko di Kòrsou.", esp: "El tambu es un ritmo típico de Curaçao.", context: "Música" },
          { pap: "Dande ta e musika di aña nobo.", esp: "El dande es la música de año nuevo.", context: "Tradición" },
          { pap: "Nos tin orgulyo di nos identidad.", esp: "Tenemos orgullo de nuestra identidad.", context: "Orgullo" },
          { pap: "E laman ta azul kla na Aruba.", esp: "El mar es azul claro en Aruba.", context: "Naturaleza" },
          { pap: "Bario Otrobanda ta histórico.", esp: "El barrio Otrobanda es histórico.", context: "Geografía" },
        ]
      },
      {
        title: "Palabras Únicas y Raras", type: "vocab",
        words: [
          { pap: "Bèrdat", esp: "Verdad / De verdad", pron: "BER-dat", ex: "Bèrdat? Ku sorpresa!", tip: "Del holandés 'waarheid'" },
          { pap: "Sefuru", esp: "Seguro / Definitivamente", pron: "se-FU-ru", ex: "Sefuru mi lo bini.", tip: "" },
          { pap: "Djis", esp: "Solo / Apenas / Justo", pron: "djis", ex: "Djis un momento.", tip: "Del inglés 'just'" },
          { pap: "Kba", esp: "Ya (terminó) / Listo", pron: "kba", ex: "Kba! Ta listo.", tip: "Del portugués 'acabou'" },
          { pap: "Hòptoe", esp: "Espera / Un momento", pron: "HOP-tue", ex: "Hòptoe, mi ta bini.", tip: "Del holandés 'houd toe'" },
          { pap: "Wowo", esp: "Ojo / Ojos", pron: "WO-wo", ex: "Bo wowo ta bunita.", tip: "Origen africano" },
          { pap: "Kabei", esp: "Cabello", pron: "ka-BEI", ex: "Su kabei ta largo.", tip: "" },
          { pap: "Kushina", esp: "Cocina", pron: "ku-SHI-na", ex: "E ta den kushina.", tip: "" },
          { pap: "Lechi", esp: "Leche", pron: "LE-chi", ex: "Un glas di lechi.", tip: "" },
          { pap: "Muraya", esp: "Pared / Muro", pron: "mu-RAY-a", ex: "Pinta e muraya.", tip: "Del español 'muralla'" },
          { pap: "Stòrf", esp: "Rígido / Mal genio", pron: "storf", ex: "No ta stòrf asina.", tip: "Del holandés 'stijf'" },
          { pap: "Chèk", esp: "Revisar / Checar", pron: "chèk", ex: "Chèk e sistema.", tip: "Del inglés 'check'" },
        ]
      },
    ]
  }
};

const DAYS = [
  { pap: "Djaluna", esp: "Lunes" }, { pap: "Djamars", esp: "Martes" },
  { pap: "Djarason", esp: "Miércoles" }, { pap: "Djaweps", esp: "Jueves" },
  { pap: "Djabierna", esp: "Viernes" }, { pap: "Djasabra", esp: "Sábado" },
  { pap: "Djadumingu", esp: "Domingo" },
];
const MONTHS = [
  { pap: "Yanüari", esp: "Enero" }, { pap: "Febrüari", esp: "Febrero" },
  { pap: "Mart", esp: "Marzo" }, { pap: "Aprel", esp: "Abril" },
  { pap: "Mei", esp: "Mayo" }, { pap: "Yüni", esp: "Junio" },
  { pap: "Yüli", esp: "Julio" }, { pap: "Ougùstùs", esp: "Agosto" },
  { pap: "September", esp: "Septiembre" }, { pap: "Òktober", esp: "Octubre" },
  { pap: "Novèmber", esp: "Noviembre" }, { pap: "Desèmber", esp: "Diciembre" },
];

// ─── GRAMMAR ─────────────────────────────────────────────────
function GrammarSection({ content }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {content.map((block, i) => (
        <div key={i} style={{ background: "#0d1117", borderRadius: 12, padding: 14, border: "1px solid #21262d" }}>
          <p style={{ color: "#8b949e", fontSize: 13, marginBottom: 12, fontStyle: "italic", lineHeight: 1.5 }}>{block.subtitle}</p>
          {block.table && (
            <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 260 }}>
                <thead>
                  <tr>{block.table.headers.map((h, j) => (
                    <th key={j} style={{ padding: "6px 10px", borderBottom: "2px solid #30363d", textAlign: "left", color: "#58a6ff", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
                  ))}</tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row, j) => (
                    <tr key={j} style={{ background: j % 2 === 0 ? "transparent" : "#161b22" }}>
                      {row.map((cell, k) => (
                        <td key={k} style={{ padding: "6px 10px", borderBottom: "1px solid #21262d", color: k === 0 ? "#e6edf3" : "#8b949e", fontSize: 13 }}
                          dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, "<strong style='color:#f0883e'>$1</strong>") }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {block.points && (
            <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
              {block.points.map((p, j) => (
                <li key={j} style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, "<strong style='color:#f0883e'>$1</strong>") }} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── VOCAB ───────────────────────────────────────────────────
function VocabSection({ words, color, isMobile }) {
  const [revealed, setRevealed] = useState({});
  const toggle = (i) => setRevealed(r => ({ ...r, [i]: !r[i] }));
  return (
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(250px, 1fr))", gap: 10 }}>
      {words.map((w, i) => (
        <div key={i} onClick={() => toggle(i)} style={{
          background: revealed[i] ? "#0d1117" : "#161b22",
          border: `1.5px solid ${revealed[i] ? color : "#30363d"}`,
          borderRadius: 12, padding: "13px", cursor: "pointer",
          transition: "border-color 0.2s, background 0.2s", userSelect: "none",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color, fontFamily: "Georgia, serif", lineHeight: 1.3, flex: 1 }}>{w.pap}</div>
            <span style={{ fontSize: 10, color: "#555", marginLeft: 4, flexShrink: 0 }}>{revealed[i] ? "▲" : "▼"}</span>
          </div>
          {w.pron && <div style={{ fontSize: 10, color: "#555", fontStyle: "italic", marginTop: 2 }}>[{w.pron}]</div>}
          {revealed[i] && (
            <div style={{ marginTop: 9, borderTop: "1px solid #21262d", paddingTop: 9 }}>
              <div style={{ fontSize: 14, color: "#e6edf3", marginBottom: 5 }}>{w.esp}</div>
              <div style={{ fontSize: 12, color: "#58a6ff", fontStyle: "italic", marginBottom: w.tip ? 4 : 0, lineHeight: 1.4 }}>"{w.ex}"</div>
              {w.tip && <div style={{ fontSize: 11, color: "#f0883e", marginTop: 4 }}>💡 {w.tip}</div>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PHRASES ─────────────────────────────────────────────────
function PhrasesSection({ phrases, color }) {
  const [revealed, setRevealed] = useState({});
  const toggle = (i) => setRevealed(r => ({ ...r, [i]: !r[i] }));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {phrases.map((p, i) => (
        <div key={i} onClick={() => toggle(i)} style={{
          background: "#161b22", border: `1.5px solid ${revealed[i] ? color : "#30363d"}`,
          borderRadius: 12, padding: "12px 14px", cursor: "pointer", transition: "border-color 0.2s", userSelect: "none"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color, fontFamily: "Georgia, serif", lineHeight: 1.4, flex: 1 }}>{p.pap}</div>
            <span style={{ fontSize: 10, color: "#555", background: "#21262d", padding: "2px 7px", borderRadius: 8, whiteSpace: "nowrap", flexShrink: 0 }}>{p.context}</span>
          </div>
          {revealed[i] && <div style={{ marginTop: 7, fontSize: 13, color: "#8b949e", lineHeight: 1.4 }}>→ {p.esp}</div>}
        </div>
      ))}
    </div>
  );
}

// ─── QUIZ ────────────────────────────────────────────────────
function QuizMode({ section, color, onClose }) {
  const words = section.words || section.phrases || [];
  const [idx, setIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [shuffled] = useState(() => [...words].sort(() => Math.random() - 0.5));
  const current = shuffled[idx];

  function next(isCorrect) {
    if (isCorrect) setCorrect(c => c + 1); else setIncorrect(c => c + 1);
    if (idx + 1 >= shuffled.length) setDone(true);
    else { setIdx(i => i + 1); setShowAnswer(false); }
  }

  if (done) return (
    <div style={{ textAlign: "center", padding: "48px 16px" }}>
      <div style={{ fontSize: 52, marginBottom: 14 }}>🎯</div>
      <div style={{ fontSize: 30, fontWeight: 700, color, marginBottom: 6 }}>{correct}/{shuffled.length}</div>
      <div style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
        {correct === shuffled.length ? "¡Perfecto! Masha bon! 🎉" : correct >= shuffled.length * 0.7 ? "¡Hopi bon! Sigi asina! 👏" : "Sigue practicando. ¡Tú puedes! 💪"}
      </div>
      <button onClick={onClose} style={{ padding: "14px 32px", borderRadius: 12, border: "none", background: color, color: "#000", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "100%", maxWidth: 320 }}>
        Volver al tema
      </button>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 13, color: "#8b949e" }}>
        <span>{idx + 1} / {shuffled.length}</span>
        <span>✓ {correct} &nbsp; ✗ {incorrect}</span>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 13 }}>✕ Salir</button>
      </div>
      <div style={{ height: 3, background: "#21262d", borderRadius: 2, marginBottom: 18, overflow: "hidden" }}>
        <div style={{ height: "100%", background: color, width: `${(idx / shuffled.length) * 100}%`, transition: "width 0.3s", borderRadius: 2 }} />
      </div>
      <div style={{ background: "#161b22", borderRadius: 14, padding: 24, border: `2px solid ${color}`, textAlign: "center", marginBottom: 16, minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 11, color: "#555", marginBottom: 8, textTransform: "uppercase", letterSpacing: 2 }}>¿Cómo se traduce?</div>
        <div style={{ fontSize: 20, fontWeight: 700, color, fontFamily: "Georgia, serif", lineHeight: 1.3 }}>{current.pap || current.esp}</div>
      </div>
      {!showAnswer ? (
        <button onClick={() => setShowAnswer(true)} style={{ width: "100%", padding: 15, borderRadius: 12, border: `2px solid ${color}`, background: "transparent", color, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
          Ver respuesta
        </button>
      ) : (
        <div>
          <div style={{ background: "#0d1117", borderRadius: 12, padding: 14, marginBottom: 12, textAlign: "center" }}>
            <div style={{ fontSize: 16, color: "#e6edf3" }}>{current.esp || current.pap}</div>
            {current.ex && <div style={{ fontSize: 12, color: "#58a6ff", marginTop: 6, fontStyle: "italic" }}>"{current.ex}"</div>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <button onClick={() => next(false)} style={{ padding: 14, borderRadius: 12, border: "2px solid #e63946", background: "#1a0608", color: "#e63946", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>✗ No lo sabía</button>
            <button onClick={() => next(true)} style={{ padding: 14, borderRadius: 12, border: "2px solid #2ec4b6", background: "#091a18", color: "#2ec4b6", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>✓ Lo sabía</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── DAYS VIEW ───────────────────────────────────────────────
function DaysView({ onBack, isMobile }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "'Palatino Linotype', Georgia, serif", paddingBottom: isMobile ? 80 : 40 }}>
      <div style={{ background: "#161b22", borderBottom: "1px solid #21262d", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 10 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#8b949e", cursor: "pointer", fontSize: 22, padding: 0, lineHeight: 1 }}>←</button>
        <span style={{ fontSize: 16, fontWeight: 700 }}>📅 Días, Meses y Tiempo</span>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Días de la semana</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(180px, 1fr))", gap: 8, marginBottom: 24 }}>
          {DAYS.map((d, i) => (
            <div key={i} style={{ background: "#161b22", borderRadius: 10, padding: "12px 14px", border: "1px solid #30363d" }}>
              <div style={{ color: "#FF8A65", fontWeight: 700, fontSize: 14 }}>{d.pap}</div>
              <div style={{ color: "#8b949e", fontSize: 12 }}>{d.esp}</div>
              <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>Dja- = día</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Meses del año</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(180px, 1fr))", gap: 8 }}>
          {MONTHS.map((m, i) => (
            <div key={i} style={{ background: "#161b22", borderRadius: 10, padding: "12px 14px", border: "1px solid #30363d" }}>
              <div style={{ color: "#CE93D8", fontWeight: 700, fontSize: 14 }}>{m.pap}</div>
              <div style={{ color: "#8b949e", fontSize: 12 }}>{m.esp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SEARCH VIEW ─────────────────────────────────────────────
function SearchView({ onBack, isMobile }) {
  const [q, setQ] = useState("");
  const allWords = Object.values(CURRICULUM).flatMap(l =>
    l.sections.flatMap(s => (s.words || s.phrases || []).map(w => ({ ...w, levelLabel: l.label, color: l.color })))
  );
  const results = q.length >= 2
    ? allWords.filter(w => (w.pap || "").toLowerCase().includes(q.toLowerCase()) || (w.esp || "").toLowerCase().includes(q.toLowerCase()))
    : [];

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "'Palatino Linotype', Georgia, serif", paddingBottom: isMobile ? 80 : 40 }}>
      <div style={{ background: "#161b22", borderBottom: "1px solid #21262d", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 10 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#8b949e", cursor: "pointer", fontSize: 22, padding: 0, lineHeight: 1 }}>←</button>
        <span style={{ fontSize: 16, fontWeight: 700 }}>🔍 Diccionario</span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar en español o papiamento..."
          style={{ width: "100%", background: "#21262d", border: "1px solid #30363d", borderRadius: 10, padding: "12px 16px", color: "#e6edf3", fontSize: 15, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          {q.length < 2 && <div style={{ color: "#555", fontStyle: "italic", textAlign: "center", paddingTop: 24 }}>Escribe al menos 2 letras…</div>}
          {q.length >= 2 && results.length === 0 && <div style={{ color: "#555", fontStyle: "italic", textAlign: "center", paddingTop: 24 }}>Sin resultados para "{q}"</div>}
          {results.map((w, i) => (
            <div key={i} style={{ background: "#161b22", borderRadius: 10, padding: "12px 14px", border: `1px solid ${w.color}44` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                <span style={{ color: w.color, fontWeight: 700, fontSize: 15 }}>{w.pap}</span>
                <span style={{ fontSize: 10, color: "#555", background: "#21262d", padding: "2px 7px", borderRadius: 6 }}>{w.levelLabel}</span>
              </div>
              <div style={{ color: "#e6edf3", fontSize: 13 }}>{w.esp}</div>
              {w.ex && <div style={{ color: "#58a6ff", fontSize: 12, fontStyle: "italic", marginTop: 3 }}>"{w.ex}"</div>}
              {w.tip && <div style={{ color: "#f0883e", fontSize: 11, marginTop: 3 }}>💡 {w.tip}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────
export default function App() {
  const isMobile = useIsMobile();
  const [activeLevel, setActiveLevel] = useState("A0");
  const [activeSection, setActiveSection] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [view, setView] = useState("main");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const level = CURRICULUM[activeLevel];
  const section = level.sections[activeSection];

  function changeLevel(key) { setActiveLevel(key); setActiveSection(0); setQuizMode(false); setDrawerOpen(false); }
  function changeSection(i) { setActiveSection(i); setQuizMode(false); setDrawerOpen(false); }

  if (view === "days") return <DaysView onBack={() => setView("main")} isMobile={isMobile} />;
  if (view === "search") return <SearchView onBack={() => setView("main")} isMobile={isMobile} />;

  const renderSection = () => {
    if (quizMode) {
      if (!section.words && !section.phrases) return (
        <div style={{ textAlign: "center", padding: "40px 16px" }}>
          <div style={{ color: "#555", marginBottom: 20 }}>Este tema es de gramática — no aplica modo quiz.</div>
          <button onClick={() => setQuizMode(false)} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: level.color, color: "#000", cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>Volver</button>
        </div>
      );
      return <QuizMode section={section} color={level.color} onClose={() => setQuizMode(false)} />;
    }
    if (section.type === "grammar") return <GrammarSection content={section.content} />;
    if (section.type === "vocab") return <VocabSection words={section.words} color={level.color} isMobile={isMobile} />;
    if (section.type === "phrases") return <PhrasesSection phrases={section.phrases} color={level.color} />;
  };

  const baseStyle = {
    minHeight: "100vh", background: "#0d1117", color: "#e6edf3",
    fontFamily: "'Palatino Linotype', Georgia, serif",
  };

  // ══ MOBILE ══════════════════════════════════════════════════
  if (isMobile) return (
    <div style={{ ...baseStyle, paddingBottom: 64 }}>

      {/* sticky header */}
      <div style={{ background: "#161b22", borderBottom: "1px solid #21262d", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ padding: "12px 14px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>🏝️ PAPIAMENTO</div>
            <div style={{ fontSize: 10, color: "#555" }}>A0 → C1</div>
          </div>
          <button onClick={() => setDrawerOpen(true)} style={{ background: "#21262d", border: "1px solid #30363d", borderRadius: 8, color: "#8b949e", padding: "7px 12px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>☰ Temas</button>
        </div>
        {/* level tabs */}
        <div style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", padding: "8px 14px 0", gap: 2 }}>
          {Object.entries(CURRICULUM).map(([key, val]) => (
            <button key={key} onClick={() => changeLevel(key)} style={{
              padding: "7px 12px", borderRadius: "7px 7px 0 0", border: "none",
              background: activeLevel === key ? "#0d1117" : "transparent",
              color: activeLevel === key ? val.color : "#555",
              cursor: "pointer", fontSize: 12, fontWeight: activeLevel === key ? 700 : 400,
              whiteSpace: "nowrap", borderBottom: activeLevel === key ? `2px solid ${val.color}` : "2px solid transparent",
              fontFamily: "inherit", flexShrink: 0
            }}>{val.icon} {val.label}</button>
          ))}
        </div>
      </div>

      {/* drawer overlay */}
      {drawerOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex" }}>
          <div style={{ flex: 1, background: "rgba(0,0,0,0.6)" }} onClick={() => setDrawerOpen(false)} />
          <div style={{ width: 270, background: "#161b22", borderLeft: "1px solid #21262d", display: "flex", flexDirection: "column", overflowY: "auto" }}>
            <div style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #21262d" }}>
              <span style={{ fontWeight: 700, color: level.color, fontSize: 14 }}>{level.fullLabel}</span>
              <button onClick={() => setDrawerOpen(false)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 20 }}>✕</button>
            </div>
            <div style={{ padding: "8px 16px 12px", fontSize: 11, color: "#555" }}>{level.description}</div>
            {level.sections.map((sec, i) => (
              <div key={i} onClick={() => changeSection(i)} style={{
                padding: "13px 18px", cursor: "pointer", fontSize: 14,
                background: activeSection === i ? level.color + "18" : "transparent",
                borderLeft: `3px solid ${activeSection === i ? level.color : "transparent"}`,
                color: activeSection === i ? level.color : "#8b949e",
                display: "flex", alignItems: "center", gap: 10
              }}>
                <span>{sec.type === "grammar" ? "📐" : sec.type === "vocab" ? "📖" : "💬"}</span>
                <span>{sec.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* section header */}
      <div style={{ padding: "14px 14px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: level.color, lineHeight: 1.3 }}>{section.title}</div>
          <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>
            {section.type === "grammar" ? "Gramática" : section.type === "vocab" ? `${section.words?.length} palabras` : `${section.phrases?.length} frases`}
          </div>
        </div>
        {(section.words || section.phrases) && (
          <button onClick={() => setQuizMode(true)} style={{ padding: "8px 14px", borderRadius: 8, border: `2px solid ${level.color}`, background: "transparent", color: level.color, cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit", flexShrink: 0 }}>
            🎯 Quiz
          </button>
        )}
      </div>
      {!quizMode && section.type !== "grammar" && (
        <div style={{ padding: "0 14px 10px", fontSize: 11, color: "#555", fontStyle: "italic" }}>Toca para revelar</div>
      )}

      <div style={{ padding: "0 14px" }}>{renderSection()}</div>

      {/* bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#161b22", borderTop: "1px solid #21262d", display: "flex", zIndex: 40 }}>
        {[
          { id: "main", icon: "📚", label: "Aprender" },
          { id: "days", icon: "📅", label: "Días" },
          { id: "search", icon: "🔍", label: "Buscar" },
        ].map(tab => (
          <button key={tab.id} onClick={() => { setDrawerOpen(false); setView(tab.id); }} style={{
            flex: 1, padding: "10px 0 8px", background: view === tab.id ? "#21262d" : "transparent",
            border: "none", color: view === tab.id ? "#e6edf3" : "#555",
            cursor: "pointer", fontSize: 10, fontFamily: "inherit",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2
          }}>
            <span style={{ fontSize: 20 }}>{tab.icon}</span>{tab.label}
          </button>
        ))}
      </div>
    </div>
  );

  // ══ DESKTOP ═════════════════════════════════════════════════
  return (
    <div style={{ ...baseStyle, display: "flex", flexDirection: "column" }}>
      {/* header */}
      <div style={{ background: "#161b22", borderBottom: "1px solid #21262d", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px 0" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 3 }}>🏝️ PAPIAMENTO</div>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: 1 }}>De cero a C1 · Aruba · Bonaire · Curaçao</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setView("days")} style={{ background: "none", border: "1px solid #30363d", borderRadius: 8, color: "#8b949e", padding: "7px 14px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>📅 Días</button>
            <button onClick={() => setView("search")} style={{ background: "none", border: "1px solid #30363d", borderRadius: 8, color: "#8b949e", padding: "7px 14px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>🔍 Buscar</button>
          </div>
        </div>
        <div style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", padding: "8px 24px 0", gap: 4 }}>
          {Object.entries(CURRICULUM).map(([key, val]) => (
            <button key={key} onClick={() => changeLevel(key)} style={{
              padding: "9px 18px", borderRadius: "8px 8px 0 0", border: "none",
              background: activeLevel === key ? "#0d1117" : "transparent",
              color: activeLevel === key ? val.color : "#555",
              cursor: "pointer", fontSize: 13, fontWeight: activeLevel === key ? 700 : 400,
              whiteSpace: "nowrap", borderBottom: activeLevel === key ? `2px solid ${val.color}` : "2px solid transparent",
              fontFamily: "inherit"
            }}>{val.icon} {val.fullLabel}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* sidebar */}
        <div style={{ width: 230, minWidth: 230, borderRight: "1px solid #21262d", padding: "18px 0", background: "#0d1117", position: "sticky", top: 79, height: "calc(100vh - 79px)", overflowY: "auto" }}>
          <div style={{ padding: "0 18px 12px", fontSize: 11, color: "#555", lineHeight: 1.5 }}>{level.description}</div>
          {level.sections.map((sec, i) => (
            <div key={i} onClick={() => changeSection(i)} style={{
              padding: "10px 18px", cursor: "pointer", fontSize: 13,
              background: activeSection === i ? level.color + "18" : "transparent",
              borderLeft: `3px solid ${activeSection === i ? level.color : "transparent"}`,
              color: activeSection === i ? level.color : "#8b949e",
              transition: "all 0.15s", display: "flex", alignItems: "center", gap: 8
            }}>
              <span>{sec.type === "grammar" ? "📐" : sec.type === "vocab" ? "📖" : "💬"}</span>
              <span>{sec.title}</span>
            </div>
          ))}
        </div>

        {/* main */}
        <div style={{ flex: 1, padding: "22px 26px", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <span style={{ fontSize: 19, fontWeight: 700, color: level.color }}>{section.title}</span>
              <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 12, background: level.color + "22", color: level.color, fontSize: 11, fontWeight: 700, marginLeft: 10, verticalAlign: "middle" }}>
                {section.type === "grammar" ? "Gramática" : section.type === "vocab" ? `${section.words?.length} palabras` : `${section.phrases?.length} frases`}
              </span>
            </div>
            {(section.words || section.phrases) && (
              <button onClick={() => setQuizMode(true)} style={{ padding: "8px 20px", borderRadius: 8, border: `2px solid ${level.color}`, background: "transparent", color: level.color, cursor: "pointer", fontSize: 13, fontWeight: 700, fontFamily: "inherit" }}>🎯 Quiz</button>
            )}
          </div>
          {!quizMode && section.type !== "grammar" && (
            <p style={{ color: "#555", fontSize: 12, marginBottom: 14, fontStyle: "italic" }}>Haz clic en cada tarjeta para revelar la traducción, pronunciación y ejemplo.</p>
          )}
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

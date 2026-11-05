import type { Locale } from './i18n';
export interface Article { id:string;app:string;category:string;slug:string;title:string;description:string;intro:string;sections:{heading:string;paragraphs:string[];source?:{title:string;url:string}}[];steps:string[];pros:string[];cons:string[];faq:{q:string;a:string}[];verdict:string;imageAlt:string;caption:string; }
export const articles:Record<Locale,Article[]>={
  "en": [
    {
      "id": "lens",
      "app": "lens",
      "category": "tools",
      "slug": "how-to-use-google-lens",
      "title": "Google Lens: a smarter way to search what you see",
      "description": "Search by image, copy text and translate with Google Lens. Learn how to use it on your phone and make sense of the results.",
      "intro": "Google Lens turns an image into a starting point for a search. Instead of guessing the name of a plant, typing a long passage or describing an object, you can start with a photo. The useful part is knowing which result to trust and when a visual match needs another check.",
      "sections": [
        {
          "heading": "What Google Lens can help you do",
          "paragraphs": [
            "Lens can search for similar objects, recognize text and translate words in an image. You can access it through the Google app on supported Android and iOS devices; the exact entry point and available features vary by device. A picture already saved on your phone can be a useful starting point, too.",
            "A visual match is a lead to investigate. Compare details and read the original page before relying on an identification. Similar packaging, lighting and incomplete text can lead to misleading results."
          ]
        },
        {
          "heading": "Copying and translating text",
          "paragraphs": [
            "Frame a clear, well-lit passage and select the text Lens recognizes. Check line breaks, numbers and unfamiliar names before pasting it elsewhere. For translation, compare the result with the original and keep context in mind.",
            "Avoid uploading confidential documents just to save a little typing. Use a non-sensitive example while learning the controls. Google explains visual search history options in its help documentation; review those settings if you want to understand how searches may be saved."
          ]
        }
      ],
      "steps": [
        "Open the Google app and look for the Lens camera icon in the search bar.",
        "Choose an existing image or frame an object with the camera, granting only the access you need.",
        "Adjust the selection so that the relevant object or text fills the frame.",
        "Open the source behind a result, or select and review text before copying or translating."
      ],
      "pros": [
        "Starts a search when you do not know the right words.",
        "Combines visual discovery with practical text tools."
      ],
      "cons": [
        "An image match can be wrong or lack context.",
        "Features and controls differ across devices."
      ],
      "faq": [
        {
          "q": "Do I have to pay to use Google Lens?",
          "a": "Google Lens is free. You can access it from the Google app on supported devices."
        },
        {
          "q": "Can I use a photo already on my phone?",
          "a": "Yes. Google documents using existing photos and screenshots, as well as the camera, with supported Lens entry points."
        },
        {
          "q": "Is the result always accurate?",
          "a": "No. Treat it as a search result and verify the original source, especially for consequential decisions."
        }
      ],
      "verdict": "A useful everyday shortcut for searching and handling text. Start with a simple photo and check the source behind the answer.",
      "imageAlt": "Google Lens",
      "caption": "Google Lens lets you start a search from an image."
    },
    {
      "id": "opinion",
      "app": "opinion",
      "category": "rewards",
      "slug": "google-opinion-rewards-how-it-works",
      "title": "Google Opinion Rewards: how surveys and Play credit work",
      "description": "Understand Google Opinion Rewards on Android, Google Play credits, eligibility and survey availability before you spend time answering surveys.",
      "intro": "Google Opinion Rewards offers rewards for eligible surveys, but it is not a regular income stream. On Android, the reward is Google Play credit. That distinction matters if you are looking for money you can withdraw to a bank account.",
      "sections": [
        {
          "heading": "Know what kind of reward you are earning",
          "paragraphs": [
            "Google describes Android rewards as Play credit rather than a bank transfer. Its iOS product has different availability and payment rules. Check the documentation for your platform and country instead of assuming that a screenshot from another market applies to you.",
            "For Android, Google states that survey credits expire one year after they are credited. Keep track of the balance in your own account and use the same Google account in Play and Opinion Rewards to avoid confusion."
          ]
        },
        {
          "heading": "Why surveys are not a predictable routine",
          "paragraphs": [
            "Eligibility and survey opportunities depend on the service and your profile. There is no reliable daily amount to budget for. Answer honestly and read each question; inventing answers to try to obtain more surveys can undermine the usefulness of the service.",
            "When a survey arrives, check the deadline shown in the app. Some opportunities expire in 24 hours. Keeping your profile up to date and answering carefully helps you make use of surveys that fit you."
          ]
        },
        {
          "heading": "When credit arrives and how to use it",
          "paragraphs": [
            "Google says credits can take a few days to appear. On Android, spend them on eligible Play Store purchases using the same account; each credit expires after one year."
          ],
          "source": {
            "title": "Google: redeem rewards",
            "url": "https://support.google.com/opinionrewards/answer/6322284?hl=en"
          }
        }
      ],
      "steps": [
        "Find Google Opinion Rewards in the official app store and confirm the developer is Google LLC.",
        "Check the supported countries and age requirements for your platform.",
        "Use your own Google account and review the setup questions and terms before accepting them.",
        "Wait for an eligible survey, answer honestly and check the reward type in your account.",
        "On Android, review the Play balance and expiration dates before choosing a purchase."
      ],
      "pros": [
        "A short-survey format from an identifiable provider.",
        "Can offset eligible Google Play spending on Android."
      ],
      "cons": [
        "Play credit is different from withdrawable cash.",
        "Survey availability and reward amounts are not predictable."
      ],
      "faq": [
        {
          "q": "Can I withdraw Android rewards to my bank?",
          "a": "Android rewards are credit for eligible Google Play purchases, with no bank withdrawal."
        },
        {
          "q": "How long does credit take to arrive?",
          "a": "Google says credit can take a few days to appear after a survey. Check your history in the app."
        },
        {
          "q": "Do I have to answer every survey?",
          "a": "No. Participation is optional, and the number of surveys varies."
        }
      ],
      "verdict": "Consider it if you already use Google Play credit. If you need cash for everyday expenses, do not treat this Android reward as a substitute.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "The task area brings together available surveys and options to complete your profile."
    },
    {
      "id": "microsoft",
      "app": "microsoft",
      "category": "rewards",
      "slug": "microsoft-rewards-points-guide",
      "title": "Microsoft Rewards: understand the points before chasing them",
      "description": "Learn how to earn Microsoft Rewards points, choose rewards and track redemptions in your regional catalog.",
      "intro": "Microsoft Rewards uses points that can be exchanged for eligible rewards. Before changing your browsing habits, look at the reward catalog available to your account and decide whether those rewards are useful to you. Points themselves do not have cash value.",
      "sections": [
        {
          "heading": "Start with the reward, then consider the effort",
          "paragraphs": [
            "Microsoft documents several ways to earn points, including eligible activities associated with its services. The available activities and catalogs differ by region. A screenshot from another country is not a guarantee of the same offer in your account.",
            "Check the number of points needed for an item you actually want. Then compare that with the activities you would normally do. Spending money purely to obtain points can cost more than the benefit you receive."
          ]
        },
        {
          "heading": "Redemption is an account-specific step",
          "paragraphs": [
            "Use the official Rewards dashboard to review the current redemption instructions. Microsoft advises users not to use a VPN when redeeming points. Do not automate searches, use misleading location information or share your sign-in with someone promising a shortcut.",
            "Redemption may require confirmation with a mobile or landline number; VoIP numbers are not accepted. Check that your chosen reward is still available and that you are in the same region as your account."
          ]
        },
        {
          "heading": "How to track delivery of a reward",
          "paragraphs": [
            "After redeeming, open Redeem > Order history and check the status. The confirmation email can also help you find your reward. If it does not arrive, use the resend option in your order history.",
            "Check timing in the order and the conditions for the item you chose. A gift card and account credit have different delivery methods; accumulated points are not yet a redeemed reward."
          ],
          "source": {
            "title": "Microsoft: track Rewards orders",
            "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
          }
        }
      ],
      "steps": [
        "Open the official Microsoft Rewards page and read the information for your region.",
        "Sign in with your own Microsoft account if you choose to participate.",
        "Review available activities and the catalog before spending time earning points.",
        "Read the conditions for a specific reward, including any verification required.",
        "Redeem only when the details and account match your intention."
      ],
      "pros": [
        "An official dashboard for tracking eligible points.",
        "Rewards may fit habits you already have."
      ],
      "cons": [
        "Points are not cash and local catalogs vary.",
        "Offers, point requirements and eligibility can change."
      ],
      "faq": [
        {
          "q": "Are Microsoft Rewards points money?",
          "a": "No. Microsoft explicitly says points do not have cash value. They are used within the program for eligible rewards."
        },
        {
          "q": "Are the same rewards available everywhere?",
          "a": "No. Microsoft says offers and redemption catalogs vary by region."
        },
        {
          "q": "Where can I find my reward code?",
          "a": "Open Redeem > Order history and select the reward details. You can find the available code or link there and resend the confirmation email."
        }
      ],
      "verdict": "Review your own catalog first. The program makes more sense when useful rewards fit activities you already want to do.",
      "imageAlt": "Microsoft Rewards",
      "caption": "Microsoft Rewards brings together points and rewards linked to a Microsoft account."
    },
    {
      "id": "freecash",
      "app": "freecash",
      "category": "rewards",
      "slug": "freecash-offers-referrals-guide",
      "title": "Freecash: how it works, invitations and withdrawal times",
      "description": "Explore Freecash offers, invitations, first-withdrawal requirements and payment processing times.",
      "intro": "Freecash brings together games, surveys and other offers that can earn rewards. Each activity has its own goals and deadlines, and availability changes with your device, region and account. Before you start, understand how the offer is credited and how withdrawals work.",
      "sections": [
        {
          "heading": "How offers work",
          "paragraphs": [
            "Check the goal, deadline and required actions before starting. For a game, for example, a reward may depend on reaching a particular level. Keep the offer instructions so you can track your progress.",
            "Consider the time and any purchases involved. Choose activities that interest you and weigh the reward against the effort. If the list is empty, check again later: availability can change."
          ]
        },
        {
          "heading": "How to use the invitation",
          "paragraphs": [
            "Use the button below to open Freecash through the invitation. You can also copy 3C7GKG to save the link identifier. The terms for each promotion appear on Freecash.",
            "Invitations and promotions can depend on your country, account and qualifying activities. Check the requirements before counting a bonus toward your balance."
          ]
        },
        {
          "heading": "First withdrawal: minimum and verification",
          "paragraphs": [
            "Freecash help lists a $25 first-withdrawal threshold, varying by region, plus email and identity verification. Cashout shows your applicable amount. Check the fee before confirming."
          ],
          "source": {
            "title": "Freecash: first-withdrawal requirements",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        },
        {
          "heading": "How long does payment take?",
          "paragraphs": [
            "According to Freecash, security checks can take up to 30 minutes; bank transfers, Stash and Revolut can take 3–5 business days. Timing depends on the method and review.",
            "Track the status in My Withdrawals. An offer reward being released is an earlier step than withdrawal: first check that the amount is available to cash out."
          ],
          "source": {
            "title": "Freecash: pending withdrawals and processing times",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
          }
        }
      ],
      "steps": [
        "Open the official website or its verified app-store listing.",
        "Read account eligibility and the terms shown for your country before joining.",
        "Choose one offer and record its conditions, deadline and any spending requirements.",
        "Check the withdrawal information and verification requirements in your own account.",
        "If using a referral, verify that the program and offer apply to your region before expecting a reward."
      ],
      "pros": [
        "Offer conditions can be reviewed before deciding to start.",
        "Official help explains affiliate qualification and verification."
      ],
      "cons": [
        "Rewards depend on specific actions and eligibility.",
        "Time, spending and verification can reduce the value of an offer."
      ],
      "faq": [
        {
          "q": "What is the invitation code?",
          "a": "The invitation link identifier is 3C7GKG. Copy it or open the invitation directly with the Freecash button on this page."
        },
        {
          "q": "Does the invitation unlock a bonus immediately?",
          "a": "Promotions have their own requirements. Check the qualifying activities and conditions shown in your account."
        },
        {
          "q": "Where can I track my withdrawal?",
          "a": "In Cashout, open My Withdrawals to check the status. Contact support if it is rejected or exceeds the stated processing time."
        }
      ],
      "verdict": "Read the individual offer as carefully as the headline. Start only when the conditions, time involved and verification requirements are clear.",
      "imageAlt": "Freecash",
      "caption": "The invitation area lets you copy the link to open or share Freecash."
    },
    {
      "id": "compare",
      "app": "compare",
      "category": "guides",
      "slug": "reward-apps-cash-points-credit",
      "title": "Cash, points or store credit? How to compare reward apps",
      "description": "Compare Google Opinion Rewards, Microsoft Rewards and Freecash by reward type, time and redemption options.",
      "intro": "Two apps can both advertise rewards and still offer very different things. Play credit, loyalty points and an offer-dependent withdrawal each have different uses. Compare the reward you can actually use before looking at the largest number on the screen.",
      "sections": [
        {
          "heading": "Three models, three different decisions",
          "paragraphs": [
            "Google Opinion Rewards on Android gives Play credit for eligible surveys. Microsoft Rewards uses points toward an account-specific catalog. Freecash has offer-based rewards and withdrawal conditions. These models should not be ranked using a single headline figure.",
            "For a fair comparison, ask what you receive, where you can use it and which steps stand between the activity and the reward. Availability depends on your platform, country and account. Check each official source rather than treating a social-media screenshot as a universal offer."
          ]
        },
        {
          "heading": "Compare the cost of your time",
          "paragraphs": [
            "Estimate the time you are willing to spend and decide whether the reward is something you would otherwise use. Include required purchases, verification and deadlines in your decision. A large offer can be poor value if it demands more spending than you planned.",
            "Try a simple calculation: if an activity takes 30 minutes, decide whether the reward is worth that time and whether you can use it. Compare the net amount, after fees or required purchases, with your other options."
          ]
        }
      ],
      "steps": [
        "Identify the reward: cash option, loyalty points or store credit.",
        "Check country, age, device and account requirements on the official source.",
        "Read withdrawal, redemption and expiration conditions.",
        "Count any spending requirement and the time needed to qualify.",
        "Choose a small, clearly understood activity and keep a record of the conditions."
      ],
      "pros": [
        "Comparing reward types prevents misleading expectations.",
        "A personal time limit makes the decision more practical."
      ],
      "cons": [
        "Catalogs and offer conditions can change.",
        "No single app is the best choice for every country or user."
      ],
      "faq": [
        {
          "q": "Which of these is guaranteed income?",
          "a": "None should be treated as guaranteed income. Availability, conditions and rewards can change."
        },
        {
          "q": "How is store credit different from cash?",
          "a": "Store credit pays for eligible purchases within that service. Withdrawable cash needs a payout method and can involve minimums, fees and verification."
        },
        {
          "q": "Where should I verify the conditions?",
          "a": "Use each provider’s official support and the current offer displayed in your own account."
        }
      ],
      "verdict": "Choose by the usefulness of the reward and the effort required. A smaller benefit you can use may be more valuable than a headline amount you cannot qualify for.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "The Google Opinion Rewards task area shows surveys and profile options."
    }
  ],
  "es": [
    {
      "id": "lens",
      "app": "lens",
      "category": "tools",
      "slug": "como-usar-google-lens",
      "title": "Google Lens: busca lo que ves, sin adivinar las palabras",
      "description": "Busca por imagen, copia texto y traduce con Google Lens. Aprende a usarlo en el móvil y a interpretar los resultados.",
      "intro": "Google Lens permite iniciar una búsqueda a partir de una imagen. Puede ayudarte a explorar un objeto que no sabes nombrar, copiar un texto o entender un cartel. La clave es revisar la fuente detrás de cada resultado y reconocer los límites de una coincidencia visual.",
      "sections": [
        {
          "heading": "Qué puedes hacer con una imagen",
          "paragraphs": [
            "Lens permite buscar objetos similares, reconocer texto y traducirlo. Google documenta su acceso desde la app de Google en dispositivos compatibles con Android y iOS. También puedes partir de una foto o una captura guardada; los controles dependen del dispositivo.",
            "Una coincidencia visual sirve como pista. Compara detalles y abre la página original antes de confiar en una identificación. El encuadre, la iluminación y los objetos parecidos pueden confundir el resultado."
          ]
        },
        {
          "heading": "Copiar y traducir con cuidado",
          "paragraphs": [
            "Selecciona un texto nítido y revisa números, nombres y saltos de línea antes de pegarlo. Una traducción necesita contexto; si el resultado afecta una decisión importante, compruébalo por otra vía.",
            "Para aprender, usa una imagen sin información privada. Consulta la ayuda de Google sobre el historial de búsquedas visuales para entender cómo pueden guardarse las imágenes."
          ]
        }
      ],
      "steps": [
        "Abre la app de Google y busca el icono de cámara de Lens.",
        "Elige una imagen o enfoca un objeto, concediendo solo el acceso necesario.",
        "Ajusta la selección para destacar el objeto o el texto relevante.",
        "Consulta la fuente del resultado o revisa el texto antes de copiarlo o traducirlo."
      ],
      "pros": [
        "Permite buscar sin conocer el nombre de un objeto.",
        "Combina búsqueda visual y herramientas de texto."
      ],
      "cons": [
        "Las coincidencias pueden ser incorrectas.",
        "Los controles y funciones varían entre dispositivos."
      ],
      "faq": [
        {
          "q": "¿Tengo que pagar para usar Google Lens?",
          "a": "Google Lens es gratuito. Puedes acceder desde la app de Google en los dispositivos compatibles."
        },
        {
          "q": "¿Puedo usar una foto guardada?",
          "a": "Sí. Google documenta el uso de fotos y capturas existentes en las interfaces compatibles."
        },
        {
          "q": "¿Siempre acierta?",
          "a": "No. Verifica la página original y el contexto antes de confiar en una respuesta."
        }
      ],
      "verdict": "Un atajo útil para buscar y manejar texto. Empieza con una imagen sencilla y comprueba la fuente detrás de la respuesta.",
      "imageAlt": "Google Lens",
      "caption": "Google Lens permite empezar una búsqueda a partir de una imagen."
    },
    {
      "id": "opinion",
      "app": "opinion",
      "category": "rewards",
      "slug": "google-opinion-rewards-como-funciona",
      "title": "Google Opinion Rewards: encuestas, créditos y expectativas reales",
      "description": "Entiende las recompensas de Google Opinion Rewards en Android, la disponibilidad de encuestas y las diferencias entre saldo de Play y dinero.",
      "intro": "Google Opinion Rewards ofrece recompensas por encuestas elegibles. En Android se reciben créditos de Google Play. Entender esa diferencia es fundamental si buscas dinero que puedas retirar a una cuenta bancaria.",
      "sections": [
        {
          "heading": "Primero identifica la recompensa",
          "paragraphs": [
            "La documentación de Google describe crédito de Play para Android. La versión para iOS tiene reglas y disponibilidad distintas. Consulta la información de tu plataforma y país antes de aplicar una experiencia publicada desde otro mercado.",
            "Google indica que los créditos de las encuestas de Android caducan un año después de recibirlos. Usa la misma cuenta de Google en Play y Opinion Rewards para evitar confusiones sobre el saldo."
          ]
        },
        {
          "heading": "Las encuestas no son un ingreso fijo",
          "paragraphs": [
            "La elegibilidad y las oportunidades dependen del servicio y del perfil. No hay una cantidad diaria fiable para organizar un presupuesto. Lee las preguntas y responde honestamente en lugar de inventar datos para intentar recibir más encuestas.",
            "Cuando llegue una encuesta, revisa el plazo que muestra la app. Algunas oportunidades caducan en 24 horas. Mantener el perfil actualizado y responder con atención te ayuda a aprovechar las encuestas adecuadas para ti."
          ]
        },
        {
          "heading": "Cuándo llega el saldo y dónde usarlo",
          "paragraphs": [
            "Google indica que el crédito puede tardar unos días en aparecer. En Android, úsalo en compras elegibles de Play Store con la misma cuenta; cada abono caduca al año."
          ],
          "source": {
            "title": "Google: canjear recompensas",
            "url": "https://support.google.com/opinionrewards/answer/6322284?hl=es"
          }
        }
      ],
      "steps": [
        "Busca la app oficial y comprueba que el desarrollador sea Google LLC.",
        "Revisa los países disponibles y el requisito de edad de tu plataforma.",
        "Accede con tu cuenta y lee las preguntas y condiciones antes de aceptarlas.",
        "Espera una encuesta elegible y revisa el tipo de recompensa.",
        "En Android, comprueba el saldo de Play y su caducidad antes de utilizarlo."
      ],
      "pros": [
        "Formato de encuestas cortas de un proveedor identificado.",
        "Puede ayudar con compras elegibles de Google Play."
      ],
      "cons": [
        "El crédito de Play es distinto del dinero retirable.",
        "La cantidad y frecuencia de encuestas no son previsibles."
      ],
      "faq": [
        {
          "q": "¿Puedo retirar el saldo de Android a mi banco?",
          "a": "En Android, las recompensas son saldo para compras elegibles en Google Play, sin retiro bancario."
        },
        {
          "q": "¿Cuánto tarda en llegar el saldo?",
          "a": "Según Google, el crédito puede tardar unos días en aparecer después de la encuesta. Revisa el historial de la app."
        },
        {
          "q": "¿Tengo que responder todas las encuestas?",
          "a": "No. Participar es opcional y la cantidad de encuestas varía."
        }
      ],
      "verdict": "Puede tener sentido si ya utilizas crédito de Google Play. No lo consideres un sustituto de dinero para gastos cotidianos.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "El área de tareas reúne encuestas disponibles y opciones para completar el perfil."
    },
    {
      "id": "microsoft",
      "app": "microsoft",
      "category": "rewards",
      "slug": "guia-puntos-microsoft-rewards",
      "title": "Microsoft Rewards: entiende los puntos antes de acumularlos",
      "description": "Aprende a ganar puntos en Microsoft Rewards, elegir recompensas y seguir el canje en el catálogo de tu región.",
      "intro": "Microsoft Rewards utiliza puntos para acceder a recompensas elegibles. Antes de cambiar tus hábitos, revisa el catálogo de tu cuenta y decide si sus opciones te resultan útiles. Los puntos no tienen valor en efectivo.",
      "sections": [
        {
          "heading": "Empieza por el catálogo",
          "paragraphs": [
            "Microsoft explica distintas formas de obtener puntos mediante actividades elegibles en sus servicios. Las actividades y los catálogos varían por región. Una oferta de otro país no garantiza las mismas condiciones en tu cuenta.",
            "Busca una recompensa que realmente quieras y revisa cuántos puntos exige. Después considera las actividades que ya realizarías. Comprar solo para sumar puntos puede costar más que el beneficio obtenido."
          ]
        },
        {
          "heading": "Revisa las reglas antes del canje",
          "paragraphs": [
            "Consulta las instrucciones vigentes en el panel oficial. Microsoft recomienda no utilizar una VPN al canjear. Evita automatizaciones y datos de ubicación engañosos; tampoco compartas tu acceso con quien prometa atajos.",
            "El canje puede pedir la confirmación de un teléfono móvil o fijo; no se aceptan números VoIP. Comprueba también que la recompensa siga disponible y que estés en la misma región de tu cuenta."
          ]
        },
        {
          "heading": "Cómo seguir la entrega de tu recompensa",
          "paragraphs": [
            "Después del canje, abre Canjear > Historial de pedidos y consulta el estado. El correo de confirmación también ayuda a encontrar la recompensa. Si no llega, utiliza la opción de reenvío del historial.",
            "Consulta el plazo en el pedido y las condiciones de la recompensa elegida. Una tarjeta regalo y el saldo de cuenta tienen formas de entrega distintas; acumular puntos todavía no completa un canje."
          ],
          "source": {
            "title": "Microsoft: seguir pedidos de Rewards",
            "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
          }
        }
      ],
      "steps": [
        "Abre Microsoft Rewards y consulta la información de tu región.",
        "Si decides participar, accede con tu propia cuenta de Microsoft.",
        "Revisa actividades y catálogo antes de dedicar tiempo a los puntos.",
        "Lee las condiciones de la recompensa y la verificación requerida.",
        "Realiza el canje solo si los datos y la cuenta son correctos."
      ],
      "pros": [
        "Panel oficial para consultar los puntos elegibles.",
        "Puede encajar con actividades que ya realizas."
      ],
      "cons": [
        "Los puntos no son dinero y los catálogos varían.",
        "Las ofertas y los requisitos pueden cambiar."
      ],
      "faq": [
        {
          "q": "¿Los puntos son dinero?",
          "a": "No. Microsoft indica que no tienen valor en efectivo; se usan dentro del programa."
        },
        {
          "q": "¿Hay las mismas recompensas en todos los países?",
          "a": "No. Las ofertas y los catálogos dependen de la región."
        },
        {
          "q": "¿Dónde encuentro el código de una recompensa?",
          "a": "Abre Canjear > Historial de pedidos y selecciona los detalles de la recompensa. Ahí encontrarás el código o enlace disponible y podrás reenviar la confirmación por correo."
        }
      ],
      "verdict": "Consulta primero tu catálogo. El programa tiene más sentido si ofrece algo útil por actividades que ya quieres hacer.",
      "imageAlt": "Microsoft Rewards",
      "caption": "Microsoft Rewards reúne puntos y recompensas vinculados a la cuenta Microsoft."
    },
    {
      "id": "freecash",
      "app": "freecash",
      "category": "rewards",
      "slug": "freecash-ofertas-invitaciones",
      "title": "Freecash: cómo funciona, invitaciones y plazos de retiro",
      "description": "Conoce Freecash: ofertas, invitaciones, requisitos del primer retiro y plazos de pago.",
      "intro": "Freecash reúne juegos, encuestas y otras ofertas que pueden generar recompensas. Cada actividad tiene objetivos y plazos propios, y las opciones cambian según el dispositivo, la región y la cuenta. Antes de empezar, conviene entender cómo se valida la oferta y cómo se retira el saldo.",
      "sections": [
        {
          "heading": "Cómo funcionan las ofertas",
          "paragraphs": [
            "Revisa el objetivo, el plazo y las acciones requeridas antes de empezar. En un juego, por ejemplo, la recompensa puede depender de alcanzar un nivel concreto. Guarda las instrucciones para seguir tu progreso.",
            "Ten en cuenta el tiempo y cualquier compra necesaria. Elige actividades que te interesen y compara la recompensa con el esfuerzo. Si la lista está vacía, revisa más tarde: la disponibilidad puede cambiar."
          ]
        },
        {
          "heading": "Cómo acceder con la invitación",
          "paragraphs": [
            "Usa el botón de abajo para abrir Freecash con la invitación. También puedes copiar 3C7GKG para guardar el identificador del enlace. Las condiciones de cada promoción aparecen en Freecash.",
            "Las invitaciones y promociones pueden depender del país, la cuenta y las actividades elegibles. Revisa los requisitos antes de contar con un bono en tu saldo."
          ]
        },
        {
          "heading": "Primer retiro: mínimo y verificación",
          "paragraphs": [
            "La ayuda de Freecash indica un mínimo inicial de 25 USD, variable por región, y verificación de correo e identidad. Cashout muestra el importe aplicable. Revisa la comisión antes de confirmar."
          ],
          "source": {
            "title": "Freecash: requisitos del primer retiro",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        },
        {
          "heading": "¿Cuánto tarda el pago?",
          "paragraphs": [
            "Según Freecash, las verificaciones de seguridad pueden durar hasta 30 minutos; transferencias bancarias, Stash y Revolut pueden tardar de 3 a 5 días laborables. El plazo depende del método y la revisión.",
            "Consulta el estado en My Withdrawals. La liberación de la recompensa de una oferta ocurre antes del retiro: comprueba primero que el importe esté disponible."
          ],
          "source": {
            "title": "Freecash: plazos y retiros pendientes",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
          }
        }
      ],
      "steps": [
        "Abre el sitio oficial o su ficha verificada en la tienda.",
        "Lee los requisitos de la cuenta y las condiciones de tu país.",
        "Elige una oferta y registra las acciones, el plazo y los gastos requeridos.",
        "Consulta la información de retiro y verificación en tu cuenta.",
        "Si usas una invitación, comprueba que el programa se aplique a tu región."
      ],
      "pros": [
        "Puedes revisar una oferta antes de decidir participar.",
        "La ayuda oficial explica los requisitos de las invitaciones."
      ],
      "cons": [
        "La recompensa depende de acciones y elegibilidad.",
        "Tiempo, gastos y verificación afectan el valor de la oferta."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código de invitación?",
          "a": "El identificador del enlace es 3C7GKG. Puedes copiarlo o acceder directamente con el botón de Freecash de esta página."
        },
        {
          "q": "¿La invitación activa un bono inmediato?",
          "a": "Las promociones tienen requisitos propios. Revisa las actividades elegibles y las condiciones de tu cuenta."
        },
        {
          "q": "¿Dónde sigo mi retiro?",
          "a": "En Cashout, abre My Withdrawals para consultar el estado. Si se rechaza o supera el plazo indicado, contacta con soporte."
        }
      ],
      "verdict": "Lee cada oferta con atención. Empieza solo cuando entiendas las condiciones, el tiempo necesario y la verificación.",
      "imageAlt": "Freecash",
      "caption": "El área de invitaciones permite copiar el enlace para acceder o compartir Freecash."
    },
    {
      "id": "compare",
      "app": "compare",
      "category": "guides",
      "slug": "apps-recompensas-dinero-puntos-credito",
      "title": "¿Dinero, puntos o crédito? Cómo comparar apps de recompensas",
      "description": "Compara Google Opinion Rewards, Microsoft Rewards y Freecash por recompensa, tiempo y opciones de canje.",
      "intro": "Dos apps pueden anunciar recompensas y ofrecer cosas muy distintas. El crédito de Play, los puntos de fidelidad y los retiros sujetos a ofertas tienen usos diferentes. Identifica lo que realmente podrás usar antes de comparar las cifras más grandes.",
      "sections": [
        {
          "heading": "Tres modelos para decisiones distintas",
          "paragraphs": [
            "Google Opinion Rewards en Android utiliza crédito de Play. Microsoft Rewards ofrece puntos para un catálogo asociado a la cuenta. Freecash tiene recompensas ligadas a ofertas y condiciones de retiro. No es útil comparar estos modelos con una sola cifra promocional.",
            "Pregunta qué recibes, dónde puedes usarlo y qué requisitos separan la actividad de la recompensa. La disponibilidad depende de plataforma, país y cuenta. Comprueba las fuentes oficiales en lugar de asumir que una captura en redes vale para todos."
          ]
        },
        {
          "heading": "Incluye el coste de tu tiempo",
          "paragraphs": [
            "Fija cuánto tiempo dedicarías y si usarías esa recompensa de otra manera. Incluye las compras, la verificación y los plazos. Una oferta grande puede ser poco conveniente si exige gastos que no tenías previstos.",
            "Haz una cuenta sencilla: si una actividad requiere 30 minutos, valora si la recompensa compensa ese tiempo y si podrás usarla. Compara el importe neto, después de comisiones o compras necesarias, con tus otras opciones."
          ]
        }
      ],
      "steps": [
        "Identifica si se trata de una opción de dinero, puntos o crédito de tienda.",
        "Consulta los requisitos de país, edad, dispositivo y cuenta.",
        "Lee las condiciones de retiro, canje y caducidad.",
        "Calcula el tiempo y cualquier compra necesaria para participar.",
        "Elige una actividad pequeña y clara, conservando sus condiciones."
      ],
      "pros": [
        "Comparar tipos de recompensa evita expectativas equivocadas.",
        "Un límite de tiempo personal facilita la decisión."
      ],
      "cons": [
        "Los catálogos y las condiciones pueden cambiar.",
        "No hay una mejor app para todos los países y usuarios."
      ],
      "faq": [
        {
          "q": "¿Cuál garantiza ingresos?",
          "a": "Ninguna debe considerarse un ingreso garantizado. Disponibilidad y condiciones pueden cambiar."
        },
        {
          "q": "¿Qué diferencia hay entre saldo de tienda y dinero?",
          "a": "El saldo de tienda sirve para compras elegibles en ese servicio. El dinero retirable depende de un método de pago y puede tener mínimo, comisiones y verificación."
        },
        {
          "q": "¿Dónde verifico las reglas?",
          "a": "En la ayuda oficial y en la oferta vigente que muestra tu propia cuenta."
        }
      ],
      "verdict": "Elige por utilidad y esfuerzo. Una recompensa pequeña que puedes usar puede valer más que una cifra a la que no puedes acceder.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "En Google Opinion Rewards, el área de tareas muestra encuestas y opciones del perfil."
    }
  ],
  "pt": [
    {
      "id": "lens",
      "app": "lens",
      "category": "tools",
      "slug": "como-usar-google-lens",
      "title": "Google Lens: um jeito mais simples de buscar o que você vê",
      "description": "Busque por imagem, copie textos e traduza com o Google Lens. Veja como usar no celular e aproveitar melhor os resultados.",
      "intro": "O Google Lens transforma uma imagem no ponto de partida de uma busca. Você pode procurar um objeto sem saber o nome, copiar um trecho de texto ou entender uma placa. O mais importante é conferir a fonte por trás do resultado e reconhecer os limites de uma identificação visual.",
      "sections": [
        {
          "heading": "O que dá para fazer com uma imagem",
          "paragraphs": [
            "O Lens permite buscar objetos semelhantes, reconhecer texto e traduzir palavras em uma imagem. O Google documenta o acesso pelo app Google em dispositivos Android e iOS compatíveis. Também é possível começar por uma foto ou captura salva; os controles variam conforme o aparelho.",
            "Uma correspondência visual é uma pista. Compare detalhes e abra a página original antes de confiar em uma identificação. Iluminação, enquadramento e objetos parecidos podem levar a um resultado enganoso."
          ]
        },
        {
          "heading": "Copiar e traduzir com atenção",
          "paragraphs": [
            "Enquadre um texto nítido, selecione as palavras reconhecidas e confira números, nomes e quebras de linha antes de colar. Traduções precisam de contexto; quando o resultado afetar uma decisão importante, verifique por outra fonte.",
            "Para aprender, use uma imagem sem informações privadas. A documentação do Google explica as opções de histórico de pesquisa visual para quem deseja entender como essas buscas podem ser salvas."
          ]
        }
      ],
      "steps": [
        "Abra o app Google e procure o ícone de câmera do Lens na barra de pesquisa.",
        "Escolha uma imagem salva ou enquadre um objeto, concedendo apenas o acesso necessário.",
        "Ajuste a seleção para destacar o objeto ou texto relevante.",
        "Confira a fonte do resultado ou revise o texto antes de copiar e traduzir."
      ],
      "pros": [
        "Ajuda a buscar quando você não conhece o nome do objeto.",
        "Reúne busca visual e ferramentas práticas de texto."
      ],
      "cons": [
        "Uma correspondência visual pode estar errada.",
        "Funções e controles variam entre aparelhos."
      ],
      "faq": [
        {
          "q": "Preciso pagar para usar o Google Lens?",
          "a": "O Google Lens é gratuito. Você pode acessá-lo pelo app Google nos aparelhos compatíveis."
        },
        {
          "q": "Posso usar uma foto que já está no celular?",
          "a": "Sim. O Google documenta o uso de fotos e capturas existentes nas interfaces compatíveis com o Lens."
        },
        {
          "q": "O resultado é sempre correto?",
          "a": "Não. Confira a fonte original e o contexto antes de confiar em uma resposta, especialmente em decisões importantes."
        }
      ],
      "verdict": "Um atalho útil para pesquisar e lidar com texto. Comece com uma foto simples e confira a fonte por trás da resposta.",
      "imageAlt": "Google Lens",
      "caption": "O Google Lens permite começar uma busca a partir de uma imagem."
    },
    {
      "id": "opinion",
      "app": "opinion",
      "category": "rewards",
      "slug": "google-opinion-rewards-como-funciona",
      "title": "Google Opinion Rewards: como funcionam pesquisas e créditos",
      "description": "Saiba como responder pesquisas no Google Opinion Rewards, receber créditos na Play Store e acompanhar o saldo no Android.",
      "intro": "O Google Opinion Rewards oferece recompensas por pesquisas elegíveis. No Android, a recompensa é crédito na Google Play. Essa diferença é essencial para quem procura dinheiro que possa sacar para uma conta bancária.",
      "sections": [
        {
          "heading": "Entenda primeiro o tipo de recompensa",
          "paragraphs": [
            "A documentação do Google descreve crédito de Play no Android. A versão para iOS tem disponibilidade e regras de pagamento diferentes. Consulte a informação da sua plataforma e do seu país antes de aplicar uma experiência publicada em outro mercado.",
            "O Google informa que os créditos de pesquisas no Android expiram um ano depois de recebidos. Use a mesma conta Google no Play e no Opinion Rewards para evitar confusão sobre o saldo."
          ]
        },
        {
          "heading": "Pesquisas não são uma renda previsível",
          "paragraphs": [
            "A elegibilidade e as oportunidades dependem do serviço e do perfil. Não existe um valor diário confiável para organizar o orçamento. Leia as perguntas e responda com honestidade, sem inventar informações para tentar receber mais pesquisas.",
            "Quando chegar uma pesquisa, observe o prazo exibido no aplicativo. Algumas oportunidades expiram em 24 horas. Manter o perfil atualizado e responder com atenção ajuda a aproveitar as pesquisas compatíveis com você."
          ]
        },
        {
          "heading": "Quando o crédito aparece e onde usar",
          "paragraphs": [
            "O Google informa que os créditos podem levar alguns dias para entrar. No Android, use o saldo em compras elegíveis na Play Store com a mesma conta; cada crédito vence após um ano."
          ],
          "source": {
            "title": "Google: resgatar recompensas",
            "url": "https://support.google.com/opinionrewards/answer/6322284?hl=pt-BR"
          }
        }
      ],
      "steps": [
        "Encontre o app na loja oficial e confirme que o desenvolvedor é Google LLC.",
        "Confira os países disponíveis e a idade mínima da sua plataforma.",
        "Use sua conta Google e leia as perguntas e os termos antes de aceitar.",
        "Aguarde uma pesquisa elegível, responda com honestidade e confira o tipo de recompensa.",
        "No Android, revise o saldo de Play e a validade antes de usar o crédito."
      ],
      "pros": [
        "Pesquisas curtas de um fornecedor identificado.",
        "Pode ajudar com compras elegíveis na Google Play."
      ],
      "cons": [
        "Crédito de Play é diferente de dinheiro para sacar.",
        "Quantidade e frequência das pesquisas não são previsíveis."
      ],
      "faq": [
        {
          "q": "Dá para sacar os créditos do Android por Pix?",
          "a": "No Android, as recompensas são créditos para compras elegíveis na Google Play, sem saque por Pix."
        },
        {
          "q": "Quanto tempo demora para receber?",
          "a": "Segundo o Google, o crédito pode levar alguns dias para aparecer depois da pesquisa. Confira o histórico no aplicativo."
        },
        {
          "q": "Preciso responder todas as pesquisas?",
          "a": "Não. A participação é opcional e a quantidade de pesquisas varia."
        }
      ],
      "verdict": "Pode fazer sentido para quem já usa crédito na Google Play. Para despesas que exigem dinheiro, não trate essa recompensa do Android como substituto.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "A área de tarefas reúne pesquisas disponíveis e opções para completar o perfil."
    },
    {
      "id": "microsoft",
      "app": "microsoft",
      "category": "rewards",
      "slug": "guia-pontos-microsoft-rewards",
      "title": "Microsoft Rewards: entenda os pontos antes de acumular",
      "description": "Veja como ganhar pontos no Microsoft Rewards, escolher recompensas e acompanhar o resgate no catálogo da sua região.",
      "intro": "O Microsoft Rewards usa pontos para acessar recompensas elegíveis. Antes de mudar seus hábitos, confira o catálogo da sua conta e veja se as opções são úteis para você. Os pontos não têm valor em dinheiro.",
      "sections": [
        {
          "heading": "Comece pelo catálogo de recompensas",
          "paragraphs": [
            "A Microsoft descreve formas de ganhar pontos com atividades elegíveis em seus serviços. As atividades e os catálogos variam conforme a região. Uma oferta mostrada em outro país não garante as mesmas condições na sua conta.",
            "Escolha uma recompensa que você realmente usaria e confira os pontos necessários. Depois considere as atividades que já faria. Comprar apenas para acumular pontos pode custar mais do que o benefício recebido."
          ]
        },
        {
          "heading": "Confira as regras antes do resgate",
          "paragraphs": [
            "Use o painel oficial para consultar as instruções atuais. A Microsoft recomenda não usar VPN ao resgatar. Evite automação e localização enganosa; não compartilhe seu acesso com quem promete atalhos para acumular pontos.",
            "O resgate pode exigir a confirmação de um telefone celular ou fixo; números VoIP não são aceitos. Confira também se a recompensa ainda está disponível no catálogo e se você está na mesma região da conta."
          ]
        },
        {
          "heading": "Como acompanhar a entrega da recompensa",
          "paragraphs": [
            "Depois do resgate, abra Resgatar > Histórico de pedidos e consulte o status. O e-mail de confirmação também ajuda a localizar a recompensa. Se ele não chegar, use a opção de reenvio no histórico.",
            "O prazo deve ser conferido no pedido e nas condições do item escolhido. Um vale-presente e um crédito na conta têm formas de entrega diferentes; pontos acumulados ainda não são uma recompensa resgatada."
          ],
          "source": {
            "title": "Microsoft: acompanhar pedidos do Rewards",
            "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
          }
        }
      ],
      "steps": [
        "Abra o Microsoft Rewards e leia a informação da sua região.",
        "Se decidir participar, entre com sua própria conta Microsoft.",
        "Confira as atividades e o catálogo antes de dedicar tempo aos pontos.",
        "Leia as condições da recompensa e a verificação exigida.",
        "Faça o resgate apenas quando os dados e a conta estiverem corretos."
      ],
      "pros": [
        "Painel oficial para acompanhar pontos elegíveis.",
        "Pode combinar com atividades que você já realiza."
      ],
      "cons": [
        "Os pontos não são dinheiro e os catálogos variam.",
        "Ofertas, pontuação exigida e elegibilidade podem mudar."
      ],
      "faq": [
        {
          "q": "Pontos do Microsoft Rewards são dinheiro?",
          "a": "Não. A Microsoft informa que os pontos não têm valor em dinheiro e são usados nas recompensas elegíveis do programa."
        },
        {
          "q": "As recompensas são iguais em todos os países?",
          "a": "Não. As ofertas e os catálogos de resgate variam conforme a região."
        },
        {
          "q": "Como encontro o código de uma recompensa?",
          "a": "Abra Resgatar > Histórico de pedidos e selecione os detalhes da recompensa. Ali você encontra o código ou link disponível e pode reenviar o e-mail de confirmação."
        }
      ],
      "verdict": "Consulte primeiro seu catálogo. O programa faz mais sentido se oferecer algo útil por atividades que você já quer fazer.",
      "imageAlt": "Microsoft Rewards",
      "caption": "O Microsoft Rewards reúne pontos e recompensas vinculados à conta Microsoft."
    },
    {
      "id": "freecash",
      "app": "freecash",
      "category": "rewards",
      "slug": "freecash-ofertas-convites",
      "title": "Freecash: como funciona, convites e prazos de saque",
      "description": "Conheça o Freecash: como funcionam as ofertas, os convites, os requisitos do primeiro saque e os prazos de pagamento.",
      "intro": "O Freecash reúne jogos, pesquisas e outras ofertas que podem gerar recompensas. Cada atividade tem objetivos e prazos próprios, e as opções disponíveis mudam conforme o aparelho, a região e a conta. Antes de começar, vale entender como a oferta é validada e como funciona o saque.",
      "sections": [
        {
          "heading": "Como funcionam as ofertas",
          "paragraphs": [
            "Confira o objetivo, o prazo e as ações exigidas antes de iniciar. Em jogos, por exemplo, a recompensa pode depender de alcançar uma fase específica. Guarde as instruções da oferta para acompanhar o progresso.",
            "Considere também o tempo e qualquer compra necessária. Priorize atividades que combinam com seu interesse e compare o valor da recompensa com o esforço exigido. Se a lista estiver vazia, confira depois: a disponibilidade pode mudar."
          ]
        },
        {
          "heading": "Como acessar pelo convite",
          "paragraphs": [
            "Use o botão abaixo para abrir o Freecash pelo convite. Você também pode copiar o código 3C7GKG para guardar o identificador do link. As condições de uma promoção aparecem no próprio Freecash.",
            "Convites e promoções podem depender de país, conta e atividades elegíveis. Confira os requisitos exibidos antes de contar com um bônus no saldo."
          ]
        },
        {
          "heading": "Primeiro saque: mínimo e verificação",
          "paragraphs": [
            "A ajuda do Freecash informa mínimo inicial de US$ 25, variável por região, e verificação de e-mail e identidade. O valor aplicável aparece em Cashout. Confira a taxa antes de confirmar."
          ],
          "source": {
            "title": "Freecash: requisitos do primeiro saque",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
          }
        },
        {
          "heading": "Quanto tempo leva para receber?",
          "paragraphs": [
            "Segundo o Freecash, verificações de segurança podem levar até 30 minutos; transferências bancárias, Stash e Revolut podem levar de 3 a 5 dias úteis. O prazo depende do método e da análise do pedido.",
            "Acompanhe o status em My Withdrawals. A liberação da recompensa de uma oferta é uma etapa anterior ao saque: confira primeiro se o valor está disponível para retirada."
          ],
          "source": {
            "title": "Freecash: prazos e saques pendentes",
            "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
          }
        }
      ],
      "steps": [
        "Abra o site oficial ou sua página verificada na loja de aplicativos.",
        "Leia a elegibilidade da conta e as condições do seu país antes de aderir.",
        "Escolha uma oferta e registre as ações, o prazo e os gastos exigidos.",
        "Confira as informações de saque e verificação na sua própria conta.",
        "Se usar um convite, verifique se o programa se aplica à sua região."
      ],
      "pros": [
        "É possível revisar uma oferta antes de decidir participar.",
        "A ajuda oficial explica os requisitos de indicação."
      ],
      "cons": [
        "A recompensa depende de ações e elegibilidade.",
        "Tempo, gastos e verificação afetam o valor da oferta."
      ],
      "faq": [
        {
          "q": "Qual é o código do convite?",
          "a": "O identificador do link de convite é 3C7GKG. Você pode copiá-lo ou acessar diretamente pelo botão do Freecash nesta página."
        },
        {
          "q": "O convite libera um bônus na hora?",
          "a": "As promoções têm requisitos próprios. Confira as atividades elegíveis e as condições exibidas na sua conta."
        },
        {
          "q": "Onde acompanho meu saque?",
          "a": "Na área Cashout, abra My Withdrawals para conferir o status do pedido. Se houver rejeição ou atraso fora do prazo informado, procure o suporte."
        }
      ],
      "verdict": "Leia cada oferta com atenção. Comece apenas quando entender as condições, o tempo necessário e a verificação.",
      "imageAlt": "Freecash",
      "caption": "A área de convites permite copiar o link para acessar ou compartilhar o Freecash."
    },
    {
      "id": "compare",
      "app": "compare",
      "category": "guides",
      "slug": "apps-recompensas-dinheiro-pontos-credito",
      "title": "Dinheiro, pontos ou crédito? Como comparar apps de recompensas",
      "description": "Compare Google Opinion Rewards, Microsoft Rewards e Freecash por recompensa, tempo necessário e opções de resgate.",
      "intro": "Dois apps podem anunciar recompensas e entregar coisas muito diferentes. Crédito de Play, pontos de fidelidade e saques sujeitos a ofertas têm usos distintos. Identifique o que você realmente poderá usar antes de comparar os maiores números da tela.",
      "sections": [
        {
          "heading": "Três modelos para decisões diferentes",
          "paragraphs": [
            "O Google Opinion Rewards no Android usa crédito de Play. O Microsoft Rewards oferece pontos para um catálogo associado à conta. O Freecash possui recompensas ligadas a ofertas e condições de saque. Comparar esses modelos por uma única cifra promocional pode confundir.",
            "Pergunte o que você recebe, onde pode usar e quais etapas separam a atividade da recompensa. A disponibilidade depende de plataforma, país e conta. Confira as fontes oficiais em vez de assumir que uma captura em rede social vale para todo mundo."
          ]
        },
        {
          "heading": "Inclua o custo do seu tempo",
          "paragraphs": [
            "Defina quanto tempo dedicaria e se usaria aquela recompensa de outra forma. Inclua compras, verificação e prazos. Uma oferta grande pode ser ruim se exigir gastos que você não faria.",
            "Faça uma conta simples: se uma atividade consome 30 minutos, avalie se a recompensa compensa esse tempo e se você conseguirá usá-la. Compare o valor líquido, depois de taxas ou compras exigidas, com as outras opções disponíveis."
          ]
        }
      ],
      "steps": [
        "Identifique se a recompensa é uma opção de dinheiro, pontos ou crédito de loja.",
        "Consulte os requisitos de país, idade, aparelho e conta.",
        "Leia as condições de saque, resgate e validade.",
        "Calcule o tempo e qualquer compra necessária para participar.",
        "Escolha uma atividade pequena e clara, guardando suas condições."
      ],
      "pros": [
        "Comparar tipos de recompensa evita expectativas equivocadas.",
        "Um limite pessoal de tempo torna a decisão mais prática."
      ],
      "cons": [
        "Catálogos e condições podem mudar.",
        "Não existe um melhor app para todos os países e usuários."
      ],
      "faq": [
        {
          "q": "Qual deles garante renda?",
          "a": "Nenhum deve ser tratado como renda garantida. Disponibilidade, condições e recompensas podem mudar."
        },
        {
          "q": "Qual é a diferença entre crédito e dinheiro?",
          "a": "Crédito de loja serve para compras elegíveis naquele serviço. Dinheiro sacável depende de um método de retirada e pode envolver mínimo, taxas e verificação."
        },
        {
          "q": "Onde verifico as regras?",
          "a": "Na ajuda oficial de cada fornecedor e na oferta vigente que aparece na sua própria conta."
        }
      ],
      "verdict": "Escolha pela utilidade da recompensa e pelo esforço. Um benefício menor que você pode usar pode valer mais do que um valor ao qual não consegue ter acesso.",
      "imageAlt": "Google Opinion Rewards",
      "caption": "No Google Opinion Rewards, a área de tarefas mostra as pesquisas e opções do perfil."
    }
  ]
};
export const apps:Record<string,{name:string;url:string;os:string;sources:{title:string;url:string}[]}>= {
  "lens": {
    "name": "Google Lens",
    "url": "https://lens.google/",
    "os": "Android, iOS",
    "sources": [
      {
        "title": "Google: search what you see with Lens",
        "url": "https://blog.google/products-and-platforms/products/search/google-lens-tips-2025/"
      },
      {
        "title": "Google Lens & Circle to Search",
        "url": "https://www.android.com/intl/en_in/articles/google-lens-and-circle-to-search/"
      },
      {
        "title": "Google: visual search and text selection",
        "url": "https://support.google.com/websearch/answer/14516623"
      }
    ]
  },
  "opinion": {
    "name": "Google Opinion Rewards",
    "url": "https://surveys.google.com/google-opinion-rewards/",
    "os": "Android, iOS",
    "sources": [
      {
        "title": "Google: redeem rewards on Android",
        "url": "https://support.google.com/opinionrewards/answer/6322284?hl=en"
      },
      {
        "title": "Google: availability and eligibility on Android",
        "url": "https://support.google.com/opinionrewards/answer/6322274?hl=en"
      },
      {
        "title": "Google: iOS availability",
        "url": "https://support.google.com/opinionrewards/answer/7386064?hl=en"
      }
    ]
  },
  "microsoft": {
    "name": "Microsoft Rewards",
    "url": "https://rewards.microsoft.com/",
    "os": "Web, Android, iOS",
    "sources": [
      {
        "title": "Microsoft: how to earn Rewards points",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/how-to-earn-microsoft-rewards-points"
      },
      {
        "title": "Microsoft: how to redeem points",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/how-to-redeem-microsoft-rewards-points"
      },
      {
        "title": "Microsoft: supported regions",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/microsoft-rewards-regions"
      },
      {
        "title": "Microsoft: track Rewards orders",
        "url": "https://support.microsoft.com/en-us/accounts-billing/rewards/track-my-microsoft-rewards-orders"
      }
    ]
  },
  "freecash": {
    "name": "Freecash",
    "url": "https://freecash.com/",
    "os": "Web, Android",
    "sources": [
      {
        "title": "Freecash: first-withdrawal requirements",
        "url": "https://freecash.com/academy/en/support/withdrawal/issues/first-cashout-requirements"
      },
      {
        "title": "Freecash: withdrawal processing times",
        "url": "https://freecash.com/academy/en/support/withdrawal/issues/why-withdrawal-pending"
      },
      {
        "title": "Freecash: affiliate system, requirements and regions",
        "url": "https://freecash.com/academy/en/support/account/rewards/how-affiliate-system-works"
      },
      {
        "title": "Freecash: affiliate program policy",
        "url": "https://freecash.com/policies/affiliate-policy"
      }
    ]
  }
};
export const sourcesFor=(article:Article)=>article.id==='compare'?[...apps.opinion.sources.slice(0,1),...apps.microsoft.sources.slice(0,1),...apps.freecash.sources.slice(0,1)]:apps[article.app].sources;

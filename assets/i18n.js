(function () {
    'use strict';

    const STORAGE_KEY = 'cocina-con-ia-lang';
    const DEFAULT_LANG = 'es';

    const translations = {
        es: {
            'meta.title': 'Cocina con IA - Tu Recetario Inteligente',
            'meta.description': 'Planifica tus comidas, gestiona tu despensa y crea recetas únicas con inteligencia artificial. La app definitiva para organizar tu cocina.',
            'header.logo': 'Cocina con IA',
            'hero.title': 'Tu cocina,<br>más inteligente.',
            'hero.subtitle': 'Planifica tu semana, gestiona tu presupuesto y crea platos únicos con IA. Todo con una interfaz minimalista diseñada para tu día a día.',
            'hero.cta': 'App en Play Store',
            'features.f1.title': 'Organización de la Semana',
            'features.f1.desc': 'Planifica tus comidas de la semana de forma intuitiva seleccionando tus recetas favoritas para cada día. Controla tus menús y mantén tus hábitos equilibrados.',
            'features.f2.title': 'Magia con IA',
            'features.f2.desc': '¿No sabes qué cocinar? Deja que la IA analice tu despensa, cree recetas creativas o importe platos desde fotos y texto al instante.',
            'features.f3.title': 'Cesta de la Compra',
            'features.f3.desc': 'Genera automáticamente tu lista de la compra sumando las cantidades de ingredientes de tu plan semanal para comprar exactamente lo necesario.',
            'features.f4.title': 'Control de Almacenaje',
            'features.f4.desc': 'Lleva un inventario inteligente de tu despensa y congelador. Organiza tus ingredientes por zonas para evitar que caduquen y reducir desperdicios.',
            'features.f5.title': 'Recetario Completo',
            'features.f5.desc': 'Crea, edita e importa tus recetas. Sigue los pasos cómodamente en la cocina utilizando temporizadores simultáneos incorporados.',
            'features.f6.title': 'Ahorro Real',
            'features.f6.desc': 'Optimiza tu presupuesto de alimentación semanal aprovechando los ingredientes que ya tienes en casa y comprando con inteligencia.',
            'streams.title': 'Próximas Recetas en Directo',
            'streams.subtitle': 'Acompaña a nuestro chef en vivo, aprende trucos únicos y cocina con nosotros en tiempo real.',
            'streams.s1.date': 'Domingo, 14 de Junio',
            'streams.s1.title': 'Filetes de Ternera con Especias Marroquíes y Cuscús',
            'streams.s1.desc': 'Plato exprés marroquí: filetes de ternera salteados con ras el hanout y cebolla, servidos sobre cuscús esponjoso hidratado al momento.',
            'streams.s2.date': 'Lunes, 8 de Junio',
            'streams.s2.title': 'Patatas Bravas Tradicionales',
            'streams.s2.desc': 'El secreto de la salsa brava tradicional sin tomate, elaborada con caldo, pimentón de la Vera y un toque picante ideal.',
            'streams.s3.date': 'Miércoles, 10 de Junio',
            'streams.s3.title': 'Arroz Frito con Cerdo y Verduras al Wok',
            'streams.s3.desc': 'Técnicas avanzadas de salteado para conseguir un arroz frito suelto y aromático con tierna carne y verduras crujientes.',
            'streams.s4.date': 'Viernes, 12 de Junio',
            'streams.s4.title': 'Pasta Carbonara Tradicional',
            'streams.s4.desc': 'Domina la receta auténtica romana sin nata: cremosidad a base de yema de huevo, Pecorino Romano y crujiente guanciale.',
            'streams.addCalendar': 'Añadir a Google Calendar',
            'streams.todayBadge': 'HOY',
            'pastRecipes.btn': '📚 Ver Recetas de Directos Anteriores',
            'tutorials.title': 'Aprende a dominar tu cocina',
            'tutorials.subtitle': 'Descubre cómo sacar el máximo partido a la aplicación con nuestros videotutoriales paso a paso.',
            'tutorials.playerTitle': 'Reproductor de tutoriales',
            'tutorials.youtube': 'Ver lista completa en YouTube',
            'video.playingNow': 'Reproduciendo ahora',
            'video.watchTutorial': 'Ver videotutorial',
            'downloads.title': 'Recetarios de Ejemplo',
            'downloads.subtitle': 'Descarga colecciones de recetas listas para importar directamente en tu aplicación y empezar a cocinar en segundos.',
            'downloads.r1': 'Saltimbocca de pechuga de pollo con emulsión de mantequilla',
            'downloads.r2': 'Patatas bravas tradicional con salsa de pimentón',
            'downloads.r3': 'Arroz frito con carne de cerdo y verduras al Wok',
            'downloads.r4': 'Pasta carbonara tradicional',
            'downloads.r5': 'Filetes de ternera a la plancha con especias marroquíes y cuscús',
            'downloads.downloadBtn': 'Descargar JSON',
            'instructions.title': '¿Cómo importar las recetas en la aplicación?',
            'instructions.step1': '<strong>Descarga el archivo:</strong> Pulsa sobre cualquiera de las colecciones de arriba y guarda el archivo JSON en tu dispositivo (Google Drive abrirá el archivo, haz clic en descargar en la esquina superior derecha).',
            'instructions.step2': '<strong>Abre la aplicación:</strong> Ve a la pantalla principal de <em>Cocina con IA</em>.',
            'instructions.step3': '<strong>Ve a Opciones e Importa:</strong> Abre la pestaña <strong>Opciones</strong>, pulsa en <strong>Importar copia de seguridad</strong>, selecciona tu archivo JSON descargado. <strong>¡Importante!</strong> No selecciones la opción de "pisar/sustituir" recetas si te lo pregunta, ya que esto borraría las que ya tienes guardadas en la aplicación (elige la opción de combinar/añadir).',
            'legal.title': 'Política de Privacidad',
            'legal.updated': 'Última actualización: 20 de Julio de 2026',
            'legal.intro': 'Esta aplicación móvil ha sido diseñada con la privacidad como prioridad. A continuación, se detalla el manejo de la información dentro de la aplicación.',
            'legal.s1.title': '1. Almacenamiento de Datos',
            'legal.s1.body': '<strong>Cocina con IA</strong> funciona de manera local. No recopilamos, transmitimos ni almacenamos ningún dato personal identificable en servidores propios. Toda la información introducida por el usuario (recetas, ingredientes, planes de comidas, despensa, lista de la compra) se guarda exclusivamente en la memoria local del dispositivo mediante AsyncStorage.',
            'legal.s2.title': '2. Permisos y Uso',
            'legal.s2.camera': '<strong>Cámara:</strong> Utilizada para el escaneo de códigos de barras de productos y para capturar fotos de recetas. Las fotos se procesan localmente y no se envían a ningún servidor. La aplicación no captura ni almacena imágenes sin su consentimiento explícito para una acción específica.',
            'legal.s2.microphone': '<strong>Micrófono:</strong> Utilizado para el dictado por voz de compras, ingredientes y fechas de caducidad. El reconocimiento de voz se realiza mediante los servicios del sistema (Google Speech Recognition) en el dispositivo. No se almacenan grabaciones de audio.',
            'legal.s2.calendar': '<strong>Calendario:</strong> Utilizado para que el usuario pueda, de forma opcional, añadir recordatorios o sesiones de cocina a su calendario personal.',
            'legal.s2.notifications': '<strong>Notificaciones:</strong> Utilizadas para enviar recordatorios locales sobre el menú del día, caducidades de la despensa y lista de la compra. Las notificaciones se programan en el dispositivo y no se envían desde servidores externos.',
            'legal.s2.storage': '<strong>Memoria Local:</strong> Necesaria para persistir los datos de la aplicación entre sesiones, incluyendo copias de seguridad internas para prevenir pérdida de datos.',
            'legal.s3.title': '3. Servicios de Terceros',
            'legal.s3.sentry': '<strong>Sentry (informes de errores):</strong> Se utilizan informes anónimos de fallos técnicos para mejorar la estabilidad y el rendimiento de la aplicación. No se envía información personal identificable (PII). Las URLs, cookies, cabeceras y datos sensibles se filtran automáticamente antes de enviar cualquier reporte.',
            'legal.s3.openfoodfacts': '<strong>Open Food Facts:</strong> Al escanear un código de barras, la aplicación consulta la API pública de Open Food Facts para obtener información del producto (nombre, marca, imagen). Únicamente se envía el código de barras; no se envía ningún dato del usuario.',
            'legal.s3.playbilling': '<strong>Google Play Billing:</strong> Las compras dentro de la aplicación se procesan a través de Google Play. No tenemos acceso a los datos de pago del usuario; toda la información financiera es gestionada por Google.',
            'legal.s4.title': '4. Exportación y Compartición de Datos',
            'legal.s4.body': 'El usuario puede exportar sus datos (recetas, planificador, despensa) en formato JSON y compartirlos mediante aplicaciones de terceros (correo, mensajería, etc.). Esta acción es iniciada exclusivamente por el usuario y la aplicación no envía datos automáticamente a ningún servicio externo.',
            'legal.s5.title': '5. Privacidad de Menores',
            'legal.s5.body': 'Esta aplicación no está dirigida a menores de 13 años y no recopilamos conscientemente información personal de niños. Si cree que un menor nos ha proporcionado información, contacte con nosotros para su eliminación inmediata.',
            'legal.s6.title': '6. Retención y Eliminación de Datos',
            'legal.s6.body': 'Todos los datos se almacenan localmente en el dispositivo. Para eliminar toda la información, el usuario puede desinstalar la aplicación o utilizar la opción de borrado de datos dentro de la app. La desinstalación elimina permanentemente todos los datos locales.',
            'legal.s7.title': '7. Cambios en Esta Política',
            'legal.s7.body': 'Podemos actualizar esta política de privacidad periódicamente. Se recomienda revisar esta página regularmente para estar al tanto de cualquier cambio. La fecha de última actualización se indica en la parte superior.',
            'legal.s8.title': '8. Contacto',
            'legal.s8.body': 'Para dudas sobre la privacidad, contactar a través de los canales oficiales de soporte en la página de Google Play de la aplicación.',
            'footer.copyright': '© 2026 Cocina con IA. Todos los derechos reservados.',
            'modal.title': '📚 Recetas Anteriores',
            'modal.intro': 'Todas las recetas cocinadas en directo, agrupadas por semana. ¡Descárgalas y ponlas en práctica!',
            'modal.week1': 'Semana del 6 al 12 de junio de 2026',
            'modal.week2': 'Semana del 30 de mayo al 5 de junio de 2026',
            'modal.viewRecipe': '📄 Ver receta',
            'modal.close': 'Cerrar',
            'modal.r1': '🍗 Saltimbocca de pechuga de pollo con emulsión de mantequilla',
            'modal.r2': '🥔 Patatas bravas tradicional con salsa de pimentón',
            'modal.r3': '🍚 Arroz frito con carne de cerdo y verduras al Wok',
            'modal.r4': '🍝 Pasta carbonara tradicional',
            'modal.r5': '🥧 Empanada de atún tradicional gallega',
            'modal.r6': '🥩 Lomo de cerdo marinado con cítricos y espárragos a la plancha',
            'modal.r7': '🍖 Cerdo agridulce tradicional con control térmico',
            'lang.es': 'Español',
            'lang.eu': 'Euskera',
            'lang.en': 'English'
        },
        eu: {
            'meta.title': 'IArekin Sukaldatu - Zure Errezeta Liburu Adimentsua',
            'meta.description': 'Antolatu zure otorduak, kudeatu zure despentsa eta sortu errezeta bakarrak adimen artifizialarekin. Zure sukaldea antolatzeko aplikazio definitiboa.',
            'header.logo': 'IArekin Sukaldatu',
            'hero.title': 'Zure sukaldea,<br>adimentsuagoa.',
            'hero.subtitle': 'Antolatu zure astea, kudeatu zure aurrekontua eta sortu plater bereziak IA-rekin. Eguneroko erabilerarako diseinatutako interfaze minimalista bat.',
            'hero.cta': 'App Play Store-n',
            'features.f1.title': 'Asteko Antolaketa',
            'features.f1.desc': 'Antolatu zure asteko otorduak modu intuitiboan, egun bakoitzerako zure errezeta gogokoenak hautatuz. Kontrolatu zure menuak eta mantendu zure ohitura orekatuak.',
            'features.f2.title': 'IA-rekin Magia',
            'features.f2.desc': 'Ez dakizu zer prestatu? Utzi IAri zure despentsa azter dezala, errezeta sortzaileak sortu ditzan edo platerak argazki eta testuetatik berehala inportatu.',
            'features.f3.title': 'Erosketa Saskia',
            'features.f3.desc': 'Sortu automatikoki zure erosketa zerrenda, zure aste planaren osagai kopuruak batuz, behar duzuna zehazki erosteko.',
            'features.f4.title': 'Biltegiratze Kontrola',
            'features.f4.desc': 'Mantendu zure despentsa eta izozgailuaren inbentario adimentsua. Antolatu zure osagaiak zonka kaizen, iraungitzea saihestu eta hondakinak murriztu.',
            'features.f5.title': 'Errezeta Liburu Osoa',
            'features.f5.desc': 'Sortu, editatu eta inportatu zure errezetak. Jarraitu urratsak eroso sukaldean, barneko denboragailu simultaneoak erabiliz.',
            'features.f6.title': 'Aurrezki Erreal',
            'features.f6.desc': 'Optimizatu zure asteko elikadura aurrekontua etxean dituzun osagaiak aprobetxatuz eta adimentsu erosiz.',
            'streams.title': 'Hurrengo Errezetak Zuzenean',
            'streams.subtitle': 'Jarraitu gure sukaldari bizirik, ikasi trikimailu bereziak eta sukaldatu gurekin denbora errealean.',
            'streams.s1.date': 'Igandea, ekainaren 14',
            'streams.s1.title': 'Txahal Fileteak Marokoar Speciekin eta Cuscus-arekin',
            'streams.s1.desc': 'Marokoar plater azkarra: txahal fileteak ras el hanout eta tipula salteatuta, une horretan hidratutako cuscus esponjosoaren gainean zerbitzatuta.',
            'streams.s2.date': 'Astelehena, ekainaren 8',
            'streams.s2.title': 'Patata Bravak Tradizionalak',
            'streams.s2.desc': 'Tomate gabeko brava saltsa tradicionalaren sekretua, caldoarekin, Vera piperrekin eta ukitu picante egoki batekin egina.',
            'streams.s3.date': 'Asteazkena, ekainaren 10',
            'streams.s3.title': 'Arroz Fritoa Txerriarekin eta Barazkiekin Wok-ean',
            'streams.s3.desc': 'Salteatze teknik aurreratuak arroz frito askatua eta aromatikoa lortzeko, txiki haragiarekin eta barazki krispiekin.',
            'streams.s4.date': 'Ostirala, ekainaren 12',
            'streams.s4.title': 'Pasta Carbonara Tradizionala',
            'streams.s4.desc': 'Menperatu errezeta erromatar autentikoa esne-gainarik gabe: krematsutasuna arrautza gorringoan, Pecorino Romano eta guanciale krispiarekin.',
            'streams.addCalendar': 'Gehitu Google Calendar-en',
            'streams.todayBadge': 'GAUR',
            'pastRecipes.btn': '📚 Ikusi Aurreko Zuzeneko Errezetak',
            'tutorials.title': 'Ikasi zure sukaldea menperatzen',
            'tutorials.subtitle': 'Aurkitu nola aprobetxatu aplikazioa gehienez gure urratsez urratseko bideo-tutorialak erabiliz.',
            'tutorials.playerTitle': 'Tutorial erreproduzigailua',
            'tutorials.youtube': 'Ikusi zerrenda osoa YouTube-n',
            'video.playingNow': 'Orain erreproduzitzen',
            'video.watchTutorial': 'Ikusi bideo-tutoriala',
            'downloads.title': 'Adibide Errezeta Liburuak',
            'downloads.subtitle': 'Deskargatu zure aplikazioan zuzenean inportatzeko prest dauden errezeta bildumak eta hasi sukaldatzen segundotan.',
            'downloads.r1': 'Oilasko bularreko saltimbocca manteiga emulsioarekin',
            'downloads.r2': 'Patata bravak tradizionalak piper saltsarekin',
            'downloads.r3': 'Arroz fritoa txerri haragiarekin eta barazkiekin Wok-ean',
            'downloads.r4': 'Pasta carbonara tradizionala',
            'downloads.r5': 'Txahal fileteak planxan marokoar speciekin eta cuscus-arekin',
            'downloads.downloadBtn': 'Deskargatu JSON',
            'instructions.title': 'Nola inportatu errezetak aplikazioan?',
            'instructions.step1': '<strong>Deskargatu fitxategia:</strong> Sakatu goiko bildumetako edozeinetan eta gorde JSON fitxategia zure gailuan (Google Drive-k fitxategia irekiko du, egin klik deskargatu botoian goiko eskuineko izkinan).',
            'instructions.step2': '<strong>Ireki aplikazioa:</strong> Joan <em>IArekin Sukaldatu</em> aplikazioaren pantaila nagusira.',
            'instructions.step3': '<strong>Joan Aukeretara eta Inportatu:</strong> Ireki <strong>Aukerak</strong> fitxa, sakatu <strong>Inportatu babeskopia</strong>, hautatu deskargatutako JSON fitxategia. <strong>Garrantzitsua!</strong> Ez hautatu "gainidatzi/ordezkatu" aukera errezetak galdetzen badizu, aplikazioan gordeta dituzunak ezabatu egingo litzateke (aukeratu konbinatu/gehitu aukera).',
            'legal.title': 'Pribatutasun Politika',
            'legal.updated': 'Azken eguneraketa: 2026ko uztailaren 20a',
            'legal.intro': 'Aplikazio mugikor hau pribatutasuna lehentasun gisa diseinatua da. Jarraian, aplikazio barneko informazioaren kudeaketa azaltzen da.',
            'legal.s1.title': '1. Datuen Biltegiratzea',
            'legal.s1.body': '<strong>IArekin Sukaldatu</strong> modu lokalean funtzionatzen du. Ez dugu datu pertsonal identifikagarririk bildu, transmititu edo zerbitzari propioetan gordetzen. Erabiltzaileak sartutako informazio guztia (errezetak, osagaiak, otordu planak, despentsa, erosketa zerrenda) gailuaren memoria lokalean soilik gordetzen da AsyncStorage bidez.',
            'legal.s2.title': '2. Baimenak eta Erabilera',
            'legal.s2.camera': '<strong>Kamera:</strong> Produktuen barra-kodeak eskaneatzeko eta errezeta argazkiak hartzeko erabiltzen da. Argazkiak lokalean prozesatzen dira eta ez dira zerbitzarira bidaltzen. Aplikazioak ez ditu irudiak hartzen edo gordetzen bere onespen esplizitua gabe ekintza zehatz baterako.',
            'legal.s2.microphone': '<strong>Mikrofonoa:</strong> Erosketak, osagaiak eta iraungitze datak ahots bidez diktatzeko erabiltzen da. Ahots ezagutza sistemako zerbitzuen bidez egiten da (Google Speech Recognition) gailuan. Ez dira audio grabaketak gordetzen.',
            'legal.s2.calendar': '<strong>Egutegia:</strong> Erabiltzaileak aukeran oinarrituta bere egutegi pertsonalean sukaldatze oroigarriak edo saioak gehitzeko erabiltzen da.',
            'legal.s2.notifications': '<strong>Jakinarazpenak:</strong> Eguneko menua, despentsako iraungitzeak eta erosketa zerrendari buruzko oroigarri lokalak bidaltzeko erabiltzen dira. Jakinarazpenak gailuan programatzen dira eta ez dira kanpoko zerbitzarietatik bidaltzen.',
            'legal.s2.storage': '<strong>Memoria Lokala:</strong> Aplikazioaren datuak saioen artean mantentzeko beharrezkoa, barneko babeskopiak barne datu galera saihesteko.',
            'legal.s3.title': '3. Hirugarrenen Zerbitzuak',
            'legal.s3.sentry': '<strong>Sentry (akats txostenak):</strong> Akats teknikoen txosten anonimoak erabiltzen dira aplikazioaren egonkortasuna eta errendimendua hobetzeko. Ez da informazio pertsonal identifikagarririk (PII) bidaltzen. URLak, cookieak, goiburuak eta datu sentikorrak automatikoki filtratzen dira txostena bidali aurretik.',
            'legal.s3.openfoodfacts': '<strong>Open Food Facts:</strong> Barra-kode bat eskaneatzean, aplikazioak Open Food Facts API publikoa kontsultatzen du produktuaren informazioa lortzeko (izena, marka, irudia). Barra-kodea soilik bidaltzen da; ez da erabiltzailearen daturik bidaltzen.',
            'legal.s3.playbilling': '<strong>Google Play Billing:</strong> Aplikazio barneko erosketak Google Play bidez prozesatzen dira. Ez dugu erabiltzailearen ordainketa datuetarako sarbiderik; informazio finantzario guztia Googlek kudeatzen du.',
            'legal.s4.title': '4. Datuen Esportazioa eta Partekatzea',
            'legal.s4.body': 'Erabiltzaileak bere datuak (errezetak, planifikatzailea, despentsa) JSON formatuan esporta ditzake eta hirugarrenen aplikazioen bidez partekatu (posta, mezularitza, etab.). Ekintza hau erabiltzaileak abiarazten du esklusiboki eta aplikazioak ez ditu datuak automatikoki bidaltzen kanpoko zerbitzari batera.',
            'legal.s5.title': '5. Adingabeen Pribatutasuna',
            'legal.s5.body': 'Aplikazio hau ez da 13 urtetik beherakoei zuzenduta eta ez dugu adingabeen informazio pertsonala kontzienteki biltzen. Uste baduzu adingabe batek informazioa eman digula, jarri gurekin harremanetan bere berehalako ezabapenerako.',
            'legal.s6.title': '6. Datuen Atxikipena eta Ezabapena',
            'legal.s6.body': 'Datu guztiak lokalean gordetzen dira gailuan. Informazio guztia ezabatzeko, erabiltzaileak aplikazioa desinstala dezake edo aplikazio barruko datu ezabatze aukera erabili. Desinstalazioak datu lokal guztiak betiko ezabatzen ditu.',
            'legal.s7.title': '7. Politika Honetako Aldaketak',
            'legal.s7.body': 'Pribatutasun politika hau aldian behin egunera dezakegu. Orrialde hau aldizka berrikustea gomendatzen da aldaketen berri izateko. Azken eguneraketa data goian adierazten da.',
            'legal.s8.title': '8. Kontaktua',
            'legal.s8.body': 'Pribatutasunari buruzko zalantzetarako, jarri harremanetan aplikazioaren Google Play orriko laguntza kanal ofizialen bidez.',
            'footer.copyright': '© 2026 IArekin Sukaldatu. Eskubide guztiak erreserbatuta.',
            'modal.title': '📚 Aurreko Errezetak',
            'modal.intro': 'Zuzenekoan sukaldatutako errezeta guztiak, aste kaizen taldekatuta. Deskargatu eta praktikatu!',
            'modal.week1': '2026ko ekainaren 6tik 12ra bitarteko astea',
            'modal.week2': '2026ko maiatzaren 30etik ekainaren 5era bitarteko astea',
            'modal.viewRecipe': '📄 Ikusi errezeta',
            'modal.close': 'Itxi',
            'modal.r1': '🍗 Oilasko bularreko saltimbocca manteiga emulsioarekin',
            'modal.r2': '🥔 Patata bravak tradizionalak piper saltsarekin',
            'modal.r3': '🍚 Arroz fritoa txerri haragiarekin eta barazkiekin Wok-ean',
            'modal.r4': '🍝 Pasta carbonara tradizionala',
            'modal.r5': '🥧 Atun empanada galiziar tradizionala',
            'modal.r6': '🥩 Txerri lomo zitrikoekin marinatua eta espárragoak planxan',
            'modal.r7': '🍖 Txerri gozogaitza tradizionala tenperatura kontrolarekin',
            'lang.es': 'Español',
            'lang.eu': 'Euskera',
            'lang.en': 'English'
        },
        en: {
            'meta.title': 'Cook with AI - Your Smart Recipe Book',
            'meta.description': 'Plan your meals, manage your pantry and create unique recipes with artificial intelligence. The ultimate app to organize your kitchen.',
            'header.logo': 'Cook with AI',
            'hero.title': 'Your kitchen,<br>smarter.',
            'hero.subtitle': 'Plan your week, manage your budget and create unique dishes with AI. All with a minimalist interface designed for everyday use.',
            'hero.cta': 'App on Play Store',
            'features.f1.title': 'Weekly Planning',
            'features.f1.desc': 'Plan your weekly meals intuitively by selecting your favorite recipes for each day. Control your menus and maintain balanced habits.',
            'features.f2.title': 'AI Magic',
            'features.f2.desc': 'Not sure what to cook? Let AI analyze your pantry, create creative recipes or import dishes from photos and text instantly.',
            'features.f3.title': 'Shopping Basket',
            'features.f3.desc': 'Automatically generate your shopping list by adding up ingredient quantities from your weekly plan to buy exactly what you need.',
            'features.f4.title': 'Storage Control',
            'features.f4.desc': 'Keep a smart inventory of your pantry and freezer. Organize ingredients by zones to avoid expiry and reduce waste.',
            'features.f5.title': 'Complete Recipe Book',
            'features.f5.desc': 'Create, edit and import your recipes. Follow steps comfortably in the kitchen using built-in simultaneous timers.',
            'features.f6.title': 'Real Savings',
            'features.f6.desc': 'Optimize your weekly food budget by using ingredients you already have at home and shopping smartly.',
            'streams.title': 'Upcoming Live Recipes',
            'streams.subtitle': 'Join our chef live, learn unique tricks and cook with us in real time.',
            'streams.s1.date': 'Sunday, June 14',
            'streams.s1.title': 'Beef Steaks with Moroccan Spices and Couscous',
            'streams.s1.desc': 'Quick Moroccan dish: beef steaks stir-fried with ras el hanout and onion, served over fluffy couscous hydrated on the spot.',
            'streams.s2.date': 'Monday, June 8',
            'streams.s2.title': 'Traditional Patatas Bravas',
            'streams.s2.desc': 'The secret of traditional brava sauce without tomato, made with broth, Vera paprika and the perfect spicy touch.',
            'streams.s3.date': 'Wednesday, June 10',
            'streams.s3.title': 'Fried Rice with Pork and Wok Vegetables',
            'streams.s3.desc': 'Advanced stir-fry techniques to achieve loose, aromatic fried rice with tender meat and crispy vegetables.',
            'streams.s4.date': 'Friday, June 12',
            'streams.s4.title': 'Traditional Pasta Carbonara',
            'streams.s4.desc': 'Master the authentic Roman recipe without cream: creaminess from egg yolk, Pecorino Romano and crispy guanciale.',
            'streams.addCalendar': 'Add to Google Calendar',
            'streams.todayBadge': 'TODAY',
            'pastRecipes.btn': '📚 View Previous Live Recipes',
            'tutorials.title': 'Learn to master your kitchen',
            'tutorials.subtitle': 'Discover how to get the most out of the app with our step-by-step video tutorials.',
            'tutorials.playerTitle': 'Tutorial player',
            'tutorials.youtube': 'View full playlist on YouTube',
            'video.playingNow': 'Playing now',
            'video.watchTutorial': 'Watch tutorial',
            'downloads.title': 'Sample Recipe Books',
            'downloads.subtitle': 'Download recipe collections ready to import directly into your app and start cooking in seconds.',
            'downloads.r1': 'Chicken breast saltimbocca with butter emulsion',
            'downloads.r2': 'Traditional patatas bravas with paprika sauce',
            'downloads.r3': 'Fried rice with pork and wok vegetables',
            'downloads.r4': 'Traditional pasta carbonara',
            'downloads.r5': 'Grilled beef steaks with Moroccan spices and couscous',
            'downloads.downloadBtn': 'Download JSON',
            'instructions.title': 'How to import recipes in the app?',
            'instructions.step1': '<strong>Download the file:</strong> Tap any of the collections above and save the JSON file on your device (Google Drive will open the file, click download in the top right corner).',
            'instructions.step2': '<strong>Open the app:</strong> Go to the main screen of <em>Cook with AI</em>.',
            'instructions.step3': '<strong>Go to Options and Import:</strong> Open the <strong>Options</strong> tab, tap <strong>Import backup</strong>, select your downloaded JSON file. <strong>Important!</strong> Do not select the "overwrite/replace" option if asked, as this would delete recipes you already have saved in the app (choose the merge/add option).',
            'legal.title': 'Privacy Policy',
            'legal.updated': 'Last updated: July 20, 2026',
            'legal.intro': 'This mobile app has been designed with privacy as a priority. Below is how information is handled within the app.',
            'legal.s1.title': '1. Data Storage',
            'legal.s1.body': '<strong>Cook with AI</strong> works locally. We do not collect, transmit or store any personally identifiable data on our own servers. All information entered by the user (recipes, ingredients, meal plans, pantry, shopping list) is stored exclusively in the device\'s local memory using AsyncStorage.',
            'legal.s2.title': '2. Permissions and Use',
            'legal.s2.camera': '<strong>Camera:</strong> Used for scanning product barcodes and capturing recipe photos. Photos are processed locally and are not sent to any server. The app does not capture or store images without your explicit consent for a specific action.',
            'legal.s2.microphone': '<strong>Microphone:</strong> Used for voice dictation of shopping items, ingredients and expiration dates. Speech recognition is performed using system services (Google Speech Recognition) on the device. No audio recordings are stored.',
            'legal.s2.calendar': '<strong>Calendar:</strong> Used so the user can optionally add cooking reminders or sessions to their personal calendar.',
            'legal.s2.notifications': '<strong>Notifications:</strong> Used to send local reminders about the daily menu, pantry expirations and shopping list. Notifications are scheduled on the device and are not sent from external servers.',
            'legal.s2.storage': '<strong>Local Storage:</strong> Required to persist app data between sessions, including internal backups to prevent data loss.',
            'legal.s3.title': '3. Third-Party Services',
            'legal.s3.sentry': '<strong>Sentry (error reports):</strong> Anonymous crash reports are used to improve app stability and performance. No personally identifiable information (PII) is sent. URLs, cookies, headers and sensitive data are automatically filtered before any report is sent.',
            'legal.s3.openfoodfacts': '<strong>Open Food Facts:</strong> When scanning a barcode, the app queries the public Open Food Facts API to obtain product information (name, brand, image). Only the barcode is sent; no user data is transmitted.',
            'legal.s3.playbilling': '<strong>Google Play Billing:</strong> In-app purchases are processed through Google Play. We do not have access to the user\'s payment data; all financial information is managed by Google.',
            'legal.s4.title': '4. Data Export and Sharing',
            'legal.s4.body': 'The user can export their data (recipes, planner, pantry) in JSON format and share it via third-party apps (email, messaging, etc.). This action is initiated exclusively by the user and the app does not automatically send data to any external service.',
            'legal.s5.title': '5. Children\'s Privacy',
            'legal.s5.body': 'This app is not directed to children under 13 and we do not knowingly collect personal information from children. If you believe a child has provided us with information, please contact us for immediate deletion.',
            'legal.s6.title': '6. Data Retention and Deletion',
            'legal.s6.body': 'All data is stored locally on the device. To delete all information, the user can uninstall the app or use the data deletion option within the app. Uninstallation permanently removes all local data.',
            'legal.s7.title': '7. Changes to This Policy',
            'legal.s7.body': 'We may update this privacy policy periodically. We recommend reviewing this page regularly to stay informed of any changes. The last updated date is indicated at the top.',
            'legal.s8.title': '8. Contact',
            'legal.s8.body': 'For privacy questions, contact us through the official support channels on the app\'s Google Play page.',
            'footer.copyright': '© 2026 Cook with AI. All rights reserved.',
            'modal.title': '📚 Previous Recipes',
            'modal.intro': 'All recipes cooked live, grouped by week. Download them and put them into practice!',
            'modal.week1': 'Week of June 6–12, 2026',
            'modal.week2': 'Week of May 30 – June 5, 2026',
            'modal.viewRecipe': '📄 View recipe',
            'modal.close': 'Close',
            'modal.r1': '🍗 Chicken breast saltimbocca with butter emulsion',
            'modal.r2': '🥔 Traditional patatas bravas with paprika sauce',
            'modal.r3': '🍚 Fried rice with pork and wok vegetables',
            'modal.r4': '🍝 Traditional pasta carbonara',
            'modal.r5': '🥧 Traditional Galician tuna empanada',
            'modal.r6': '🥩 Pork loin marinated with citrus and grilled asparagus',
            'modal.r7': '🍖 Traditional sweet and sour pork with temperature control',
            'lang.es': 'Español',
            'lang.eu': 'Euskera',
            'lang.en': 'English'
        }
    };

    let currentLang = DEFAULT_LANG;

    function getStoredLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored && translations[stored] ? stored : DEFAULT_LANG;
    }

    function t(key) {
        const dict = translations[currentLang] || translations[DEFAULT_LANG];
        return dict[key] ?? translations[DEFAULT_LANG][key] ?? key;
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.textContent = t(el.getAttribute('data-i18n'));
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            el.innerHTML = t(el.getAttribute('data-i18n-html'));
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
                const parts = pair.split(':');
                if (parts.length === 2) {
                    el.setAttribute(parts[0].trim(), t(parts[1].trim()));
                }
            });
        });

        document.title = t('meta.title');
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
        document.documentElement.lang = currentLang === 'eu' ? 'eu' : currentLang;

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            const isActive = btn.getAttribute('data-lang') === currentLang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
    }

    function initLanguageSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLanguage(btn.getAttribute('data-lang'));
            });
        });
    }

    window.i18n = { t: t, setLanguage: setLanguage, getLanguage: function () { return currentLang; } };

    document.addEventListener('DOMContentLoaded', function () {
        currentLang = getStoredLang();
        initLanguageSwitcher();
        applyTranslations();
    });
})();

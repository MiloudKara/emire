(() => {
  const normalize = (value) => (value || '').replace(/\s+/g, ' ').trim();
  const EN = {
  "Accueil": "Home",
  "À propos": "About",
  "Solutions": "Solutions",
  "Produits": "Products",
  "Réalisations": "Projects",
  "Secteurs": "Industries",
  "Ressources": "Insights",
  "Contact": "Contact",
  "Demander un devis ↗": "Request a quote ↗",
  "Demander un devis": "Request a quote",
  "Solutions d’énergie & maintenance industrielle": "Energy solutions & industrial maintenance",
  "Des systèmes qui ne doivent pas s’arrêter.": "Systems that cannot afford to stop.",
  "Ils nous ont fait confiance": "They trusted us",
  "Ils nous ont fait confiance.": "They trusted us.",
  "Partenaires d’excellence mondiale.": "World-class partners.",
  "Des solutions présentées par EMIRE pour l’industrie, la santé, l’agriculture, la construction et les événements.": "Solutions presented by EMIRE for industry, healthcare, agriculture, construction and events.",
  "Motorisations et alternateurs de marques reconnues : Kubota, Baudouin, Cummins, John Deere, Volvo, Perkins, Leroy-Somer et Stamford.": "Engines and alternators from recognized brands: Kubota, Baudouin, Cummins, John Deere, Volvo, Perkins, Leroy-Somer and Stamford.",
  "EMIRE / À propos": "EMIRE / About",
  "Une expertise technique pensée pour la continuité.": "Technical expertise built around continuity.",
  "Depuis 1998, EMIRE se positionne autour de la maintenance industrielle, des travaux électriques et de la fabrication / commercialisation de groupes électrogènes sous la marque EMIREGENSET.": "Since 1998, EMIRE has focused on industrial maintenance, electrical works, and the manufacturing and commercialization of generator sets under the EMIREGENSET brand.",
  "Création d’EMIRE selon les pages de présentation de l’entreprise.": "EMIRE was established in 1998 according to the company presentation pages.",
  "Marque dédiée aux groupes électrogènes.": "Brand dedicated to generator sets.",
  "Sur skid": "Skid-mounted",
  "Conteneur": "Containerized",
  "Une des configurations fabriquées et présentées.": "One of the configurations manufactured and presented.",
  "Une configuration intégrée pour la protection et la mobilité.": "An integrated configuration for protection and mobility.",
  "01 / Groupes électrogènes": "01 / Generator sets",
  "02 / Solutions": "02 / Solutions",
  "03 / Produits": "03 / Products",
  "04 / Secteurs": "04 / Industries",
  "05 / Confiance": "05 / Trust",
  "Puissance, configuration, mise en service.": "Power, configuration, commissioning.",
  "Les groupes EMIREGENSET sont proposés en versions sur skid, insonorisées, super silencieuses et conteneurisées. Les pages produits indiquent un assemblage à l’usine EMIRE GENSET conformément à l’ISO 8528 et des essais avant expédition.": "EMIREGENSET generator sets are offered in skid-mounted, soundproof, super-silent and containerized versions. Product pages indicate assembly at the EMIRE GENSET factory in accordance with ISO 8528 and testing before shipment.",
  "Voir la gamme ↗": "View the range ↗",
  "Intégration électrique": "Electrical integration",
  "Postes de transformation, armoires électriques et tableaux de distribution pour des projets clés en main.": "Transformer substations, electrical panels and distribution boards for turnkey projects.",
  "Une chaîne de service, du matériel au SAV.": "One service chain, from equipment to after-sales support.",
  "L’offre EMIRE relie fourniture, installation, mise en service, maintenance et pièces de rechange pour accompagner le cycle de vie des équipements.": "EMIRE connects supply, installation, commissioning, maintenance and spare parts to support the equipment lifecycle.",
  "Groupes électrogènes": "Generator sets",
  "Installation & mise en service": "Installation & commissioning",
  "Maintenance préventive": "Preventive maintenance",
  "Maintenance curative": "Corrective maintenance",
  "Projets électriques": "Electrical projects",
  "Pièces de rechange": "Spare parts",
  "Gamme EMIREGENSET et configurations adaptées aux besoins de secours ou de production continue.": "EMIREGENSET range and configurations adapted to standby or continuous-power needs.",
  "Accompagnement de l’intégration et de la mise en service des équipements sur site.": "Support for equipment integration and on-site commissioning.",
  "Interventions planifiées pour préserver la performance et la durée de vie des équipements.": "Planned interventions to preserve equipment performance and service life.",
  "Diagnostic et intervention lorsque surviennent pannes ou dysfonctionnements.": "Diagnosis and intervention when faults or malfunctions occur.",
  "Conception et intégration de postes de transformation, armoires électriques et tableaux de distribution.": "Design and integration of transformer substations, electrical panels and distribution boards.",
  "Catégories de pièces pour moteurs, alternateurs / générateurs et systèmes de commande.": "Parts categories for engines, alternators / generators and control systems.",
  "Découvrez les produits EMIRE.": "Discover EMIRE products.",
  "Au-delà des groupes électrogènes, EMIRE présente des armoires inverseurs, des mâts d’éclairage et des solutions dédiées à l’agriculture.": "Beyond generator sets, EMIRE presents transfer switchboards, lighting masts and solutions dedicated to agriculture.",
  "Armoires inverseurs": "Transfer switchboards",
  "Mâts d’éclairage": "Lighting masts",
  "Groupe Agri": "Agri generator",
  "Solutions automatiques / manuelles pour basculer entre sources et protéger la continuité d’alimentation.": "Automatic / manual solutions for switching between power sources and protecting continuity of supply.",
  "Solutions de chantier, zones industrielles et espaces publics, avec système hydraulique et hauteur annoncée de 6 à 30 mètres selon modèle.": "Solutions for construction sites, industrial areas and public spaces, with a hydraulic system and a stated 6 to 30 m height depending on the model.",
  "Solution énergétique dédiée au secteur agricole. La page d’accueil EMIRE décrit une adaptation aux besoins spécifiques des exploitations.": "An energy solution dedicated to agriculture. EMIRE describes it as adapted to the specific needs of farms.",
  "Des applications qui exigent une énergie fiable.": "Applications that require reliable power.",
  "Puissance fiable pour les chaînes de production et les sites industriels.": "Reliable power for production lines and industrial sites.",
  "Continuité de l’alimentation pour les environnements de soin et équipements critiques.": "Power continuity for care environments and critical equipment.",
  "Solutions énergétiques adaptées aux besoins spécifiques des exploitations.": "Energy solutions adapted to the specific needs of farms.",
  "Fourniture d’énergie pour les chantiers de grande envergure et les événements.": "Power supply for large construction projects and events.",
  "Décrivez votre besoin. EMIRE s’occupe du reste.": "Describe your needs. EMIRE handles the rest.",
  "Capacité, usage, localisation, installation et besoins de maintenance : ces éléments permettent de commencer un échange technique utile.": "Capacity, use, location, installation and maintenance needs: these details make the first technical discussion more useful.",
  "Contacter EMIRE ↗": "Contact EMIRE ↗",
  "Demande de devis": "Quote request",
  "Entreprise établie en Algérie.": "Company established in Algeria.",
  "Expert en solutions d’énergie et maintenance industrielle.": "Expert in energy solutions and industrial maintenance.",
  "Expert en solutions d’énergie et maintenance industrielle. Fabrication et commercialisation de groupes électrogènes sous la marque EMIREGENSET.": "Expert in energy solutions and industrial maintenance. Manufacturing and commercialization of generator sets under the EMIREGENSET brand.",
  "À propos d’EMIRE": "About EMIRE",
  "À propos — EMIRE": "About — EMIRE",
  "Depuis 1998, EMIRE se présente comme une entreprise spécialisée en maintenance industrielle, travaux électriques et fabrication / commercialisation de groupes électrogènes sous la marque EMIREGENSET.": "Since 1998, EMIRE has presented itself as a company specialized in industrial maintenance, electrical works, and the manufacturing and commercialization of generator sets under the EMIREGENSET brand.",
  "Parler à EMIRE ↗": "Talk to EMIRE ↗",
  "Voir EMIREGENSET": "View EMIREGENSET",
  "Une activité construite autour de la continuité énergétique.": "A business built around energy continuity.",
  "Les pages de présentation d’EMIRE décrivent une activité couvrant la maintenance industrielle, les travaux électriques et la conception, commercialisation et installation de groupes électrogènes performants.": "EMIRE presentation pages describe activities covering industrial maintenance, electrical works, and the design, commercialization and installation of generator sets.",
  "Des projets électriques clés en main.": "Turnkey electrical projects.",
  "EMIRE indique réaliser des projets électriques complets incluant des postes de transformation, des armoires électriques et des tableaux de distribution. Son savoir-faire est également présenté comme adapté aux zones où l’alimentation doit rester disponible dans des environnements exigeants.": "EMIRE states that it delivers complete electrical projects including transformer substations, electrical panels and distribution boards. Its know-how is also presented as suited to environments where power availability is critical.",
  "Fourniture · installation · mise en service · maintenance préventive · maintenance curative · pièces de rechange.": "Supply · installation · commissioning · preventive maintenance · corrective maintenance · spare parts.",
  "Implantations & points de présence.": "Locations & points of presence.",
  "Implantations citées": "Listed locations",
  "Les informations publiques du site citent Z.I Oued S’Mar à Alger, Z.A Hassi Messaoud et Z.I Hassi Ben Abdellah à Ouargla. Le site mentionne également un showroom à Sétif, un showroom à Oran et une succursale à Alger, Z.I Baba Ali.": "Public site information cites Z.I Oued S’Mar in Algiers, Z.A Hassi Messaoud and Z.I Hassi Ben Abdellah in Ouargla. The site also mentions a showroom in Sétif, a showroom in Oran and a branch in Algiers, Z.I Baba Ali.",
  "La documentation EMIRE référence des motorisations et alternateurs de fabricants internationaux. Cette sélection permet de proposer différentes architectures de groupes selon la puissance et l’usage.": "EMIRE documentation references engines and alternators from international manufacturers. This selection supports different generator architectures depending on power and use.",
  "Du groupe électrogène au système électrique complet.": "From generator set to complete electrical system.",
  "EMIRE associe fourniture d’équipements, installation, mise en service, maintenance et pièces de rechange à des projets électriques sur mesure.": "EMIRE combines equipment supply, installation, commissioning, maintenance and spare parts with tailored electrical projects.",
  "Vente de groupes électrogènes": "Generator set sales",
  "EMIREGENSET propose des groupes pour différentes applications, avec des configurations sur skid, insonorisées, super silencieuses et conteneurisées.": "EMIREGENSET offers generator sets for different applications, with skid-mounted, soundproof, super-silent and containerized configurations.",
  "Intervention en cas de panne ou dysfonctionnement afin de remettre les équipements en état de fonctionnement.": "Intervention in the event of failure or malfunction to restore equipment to operation.",
  "Une prise en charge qui va jusqu’à la livraison du projet, avec des engagements autour de la fiabilité, de la qualité, de la personnalisation et de la durabilité.": "Project support extending to delivery, with a focus on reliability, quality, customization and durability.",
  "Un projet pensé de A à Z.": "A project planned from A to Z.",
  "Méthode": "Method",
  "Fiabilité": "Reliability",
  "Qualité": "Quality",
  "Personnalisation": "Customization",
  "Durabilité": "Durability",
  "Assistance technique au fil du temps.": "Technical support over time.",
  "Prévenir": "Prevent",
  "Diagnostiquer": "Diagnose",
  "Remettre en service": "Restore to operation",
  "Planifier les opérations afin de protéger les performances et la durée de vie de l’équipement.": "Plan operations to protect equipment performance and service life.",
  "Identifier les causes d’un arrêt ou d’un dysfonctionnement et préparer l’intervention.": "Identify the causes of a shutdown or malfunction and prepare the intervention.",
  "Intervenir avec une logique de disponibilité et de continuité d’exploitation.": "Intervene with a focus on availability and operational continuity.",
  "Des solutions personnalisées pour chaque secteur.": "Tailored solutions for every sector.",
  "La page officielle des réalisations organise les projets par secteurs, notamment Agricole, Industrie et Santé. L’accueil ajoute également la construction et les événements.": "The public projects page organizes references by Agriculture, Industry and Healthcare. The homepage also highlights Construction and Events.",
  "Installation d’alimentation pour environnement industriel exigeant.": "Power installation for a demanding industrial environment.",
  "Alimentation de projets de construction de grande envergure.": "Power for large-scale construction projects.",
  "Fourniture d’énergie et éclairage pour des événements.": "Power and lighting supply for events.",
  "Agricole · Industrie · Santé.": "Agriculture · Industry · Healthcare.",
  "Les filtres de la page « Réalisations » du site EMIRE citent ces trois catégories. Les contenus détaillés de certaines galeries publiques restent incomplets ; cette version n’invente donc pas de noms de clients ou de projets.": "The public projects filters cite these three categories. Some public gallery details remain incomplete, so this version does not invent client or project names.",
  "Des environnements où la disponibilité compte.": "Environments where availability matters.",
  "EMIRE met en avant des interventions dans des contextes industriels, agricoles et de santé, avec des solutions de construction et d’événements présentées sur l’accueil.": "EMIRE highlights work in industrial, agricultural and healthcare contexts, with construction and event solutions presented on the homepage.",
  "L’énergie n’a pas le même rôle partout.": "Power does not play the same role everywhere.",
  "EMIRE présente ses solutions pour l’industrie, la santé et l’agriculture, avec des cas de construction et d’événements mis en avant sur la page d’accueil.": "EMIRE presents solutions for industry, healthcare and agriculture, with construction and event use cases highlighted on the homepage.",
  "Alimentation de projets de chantier et installations de grande envergure.": "Power for construction projects and large-scale installations.",
  "Fourniture d’énergie fiable pour accompagner les besoins temporaires d’un événement.": "Reliable power supply for temporary event needs.",
  "Une architecture de services qui associe équipement, installation et SAV.": "A service architecture combining equipment, installation and after-sales support.",
  "Le bon groupe dépend du site, de la charge et du mode d’exploitation.": "The right generator depends on the site, load and operating mode.",
  "Qu’il s’agisse de secours ou de production continue, la puissance et la configuration doivent être définies à partir de l’usage réel et des contraintes d’installation.": "Whether for standby or continuous operation, power and configuration should be defined from actual use and installation constraints.",
  "Parler à un technicien ↗": "Talk to a technician ↗",
  "Comprendre l’équipement avant de choisir.": "Understand the equipment before choosing.",
  "Le site public EMIRE contient encore des articles de blog avec du contenu de démonstration. Cette page remplace les faux articles par des ressources basées sur les informations techniques réellement disponibles.": "The public EMIRE site still contains blog posts with demonstration content. This page replaces those placeholders with resources based on available technical information.",
  "Guide produit": "Product guide",
  "Comprendre les configurations EMIREGENSET": "Understanding EMIREGENSET configurations",
  "Sur skid, insonorisé, super silencieux ou conteneur : comprendre les différences de configuration et le contexte d’usage.": "Skid-mounted, soundproof, super-silent or containerized: understand the configurations and their use cases.",
  "Lire la ressource ↗": "Read resource ↗",
  "Service": "Service",
  "Maintenance préventive & curative": "Preventive & corrective maintenance",
  "Pourquoi le SAV fait partie du produit : préserver les performances, diagnostiquer les pannes et remettre les équipements en service.": "Why after-sales support is part of the product: preserve performance, diagnose faults and restore equipment to service.",
  "Découvrir le service ↗": "Discover service ↗",
  "Électricité": "Electrical",
  "Du groupe à l’installation électrique": "From generator set to electrical installation",
  "Comment postes de transformation, armoires électriques et tableaux de distribution s’intègrent dans un projet plus large.": "How transformer substations, electrical panels and distribution boards integrate into a wider project.",
  "Voir les solutions ↗": "View solutions ↗",
  "Des données vérifiables.": "Verifiable data.",
  "Les fiches publiques EMIRE donnent notamment des informations sur le C1000, le J110, les configurations et les essais ISO 8528.": "Public EMIRE product sheets provide information on the C1000, J110, configurations and ISO 8528 testing.",
  "Essai avant expédition": "Pre-shipment test",
  "Usine EMIRE GENSET": "EMIRE GENSET factory",
  "Automatique / vérifié": "Automatic / verified",
  "Fourni": "Supplied",
  "Contact EMIRE": "Contact EMIRE",
  "Parlons de votre besoin en énergie.": "Let’s discuss your power needs.",
  "Capacité recherchée, usage, localisation, installation et service : plus votre besoin est précis, plus le premier échange technique sera utile.": "Required capacity, use, location, installation and service: the more precise your needs, the more useful the first technical discussion.",
  "Téléphone général": "Main telephone",
  "Numéro commercial affiché sur les pages produits EMIRE.": "Commercial number displayed on EMIRE product pages.",
  "Email commercial": "Commercial email",
  "Adresse commerciale affichée sur le site EMIRE.": "Commercial address shown on the EMIRE site.",
  "Showrooms / succursale": "Showrooms / branch",
  "Le site présente également ces points de présence.": "The site also lists these points of presence.",
  "Détails du projet": "Project details",
  "Nom complet": "Full name",
  "Email": "Email",
  "Téléphone": "Phone",
  "Entreprise": "Company",
  "Besoin": "Need",
  "Puissance / périmètre": "Power / scope",
  "Maintenance": "Maintenance",
  "Travaux électriques": "Electrical works",
  "Mât d’éclairage": "Lighting mast",
  "Armoire inverseur": "Transfer switchboard",
  "Envoyer la demande ↗": "Send request ↗",
  "Découvrez nos produits": "Discover our products",
  "Présentation du produit": "Product overview",
  "Cas d’utilisation": "Use cases",
  "Caractéristiques techniques": "Technical specifications",
  "Hôpitaux": "Hospitals",
  "Chantiers": "Construction sites",
  "Zones industrielles": "Industrial areas",
  "Espaces publics": "Public spaces",
  "Éclairer, sécuriser, continuer.": "Light, secure, keep operating.",
  "Une solution mobile et robuste pour les chantiers, zones industrielles et espaces publics lorsque l’éclairage doit accompagner l’activité.": "A mobile and robust solution for construction sites, industrial areas and public spaces where lighting must support operations.",
  "Le contenu produit fourni présente des mâts d’éclairage conçus pour durer, avec une conception destinée aux environnements professionnels et aux conditions exigeantes.": "The supplied product content describes lighting masts designed for durability, for professional environments and demanding conditions.",
  "Groupes électrogènes.": "Generator sets.",
  "Une solution de basculement de source pensée pour maintenir l’alimentation lorsque la continuité est critique.": "A source-switching solution designed to maintain power when continuity is critical.",
  "Automatique ou manuel.": "Automatic or manual.",
  "Protéger la continuité là où elle compte.": "Protect continuity where it matters.",
  "Groupe Agri.": "Agri generator.",
  "Une solution énergétique présentée par EMIRE pour répondre aux besoins spécifiques des exploitations agricoles.": "An energy solution presented by EMIRE to meet the specific needs of farms.",
  "Une énergie adaptée au terrain.": "Power adapted to the field.",
  "Les détails techniques spécifiques du Groupe Agri ne sont pas suffisamment renseignés dans les contenus publics consultés. Nous ne les inventons pas ici.": "The public material consulted does not provide enough specific technical detail for the Agri generator. We do not invent it here.",
  "Dimensionnons la puissance à partir de votre usage.": "Let’s size the power from your actual use.",
  "Usage": "Use",
  "Décrire les équipements et la durée de fonctionnement attendue.": "Describe the equipment and expected operating duration.",
  "Puissance": "Power",
  "Établir le besoin électrique à partir des charges réellement présentes.": "Establish electrical demand from the actual connected loads.",
  "Implantation": "Site",
  "Prendre en compte le site, l’environnement et les contraintes d’installation.": "Consider the site, environment and installation constraints.",
  "Retour à l’accueil": "Back to home",
  "Configurations fabriquées par EMIRE GENSET": "Configurations manufactured by EMIRE GENSET",
  "Informations issues des pages produits publiques d’EMIRE.": "Information from EMIRE public product pages.",
  "Groupe électrogène monté sur châssis robuste pour une installation fixe.": "Generator set mounted on a robust chassis for fixed installation.",
  "Groupe équipé d’un capot pour réduire les nuisances sonores.": "Generator set fitted with an enclosure to reduce noise.",
  "Conçu pour un fonctionnement ultra-silencieux et des environnements sensibles.": "Designed for ultra-quiet operation and sensitive environments.",
  "Groupe intégré dans un conteneur pour protection et mobilité.": "Generator set integrated into a container for protection and mobility.",
  "Assemblage à l’usine EMIRE GENSET conformément à l’ISO 8528.": "Assembly at the EMIRE GENSET factory in accordance with ISO 8528.",
  "Test avant expédition, contrôle conformément à l’ISO 8528 et certificat de test.": "Pre-shipment test, verification in accordance with ISO 8528 and a test certificate.",
  "Deux modèles avec données techniques publiées.": "Two models with published technical data.",
  "Les données ci-dessous reprennent les fiches publiques consultables sur le site EMIRE.": "The data below is taken from public EMIRE product sheets.",
  "Parler de votre installation ↗": "Talk about your installation ↗",
  "Voir les caractéristiques ↗": "View specifications ↗",
  "Découvrir la solution ↗": "Discover the solution ↗",
  "Découvrir les produits ↗": "Discover products ↗",
  "Découvrir la gamme ↗": "Discover the range ↗",
  "Navigation": "Navigation",
  "Expertise": "Expertise",
  "Illustration — groupe électrogène industriel EMIREGENSET.": "Illustration — industrial EMIREGENSET generator set.",
  "Illustration — groupe électrogène EMIREGENSET en configuration technique.": "Illustration — EMIREGENSET generator set, technical configuration.",
  "Illustration — armoire électrique et logique de basculement de source.": "Illustration — electrical panel and source-switching logic.",
  "Illustration — mât d’éclairage pour chantier et environnement industriel.": "Illustration — lighting mast for construction and industrial environments.",
  "EMIRE — Solutions d’énergie & groupes électrogènes": "EMIRE — Energy solutions & generator sets",
  "EMIREGENSET · Depuis 1998": "EMIREGENSET · Since 1998",
  "VOTRE": "YOUR",
  "PUISSANCE.": "POWER.",
  "NOTRE MISSION.": "OUR MISSION.",
  "EMIRE conçoit, commercialise et installe des groupes électrogènes et accompagne les installations électriques avec une offre intégrée de mise en service, maintenance et pièces de rechange.": "EMIRE designs, supplies and installs generator sets and supports electrical installations with an integrated offer covering commissioning, maintenance and spare parts.",
  "Parler à EMIRE": "Talk to EMIRE",
  "kVA sur la présentation de gamme de la page d’accueil EMIRE.": "kVA on EMIRE’s home-page range presentation.",
  "Norme de référence citée pour l’assemblage et les essais des groupes.": "Reference standard cited for generator assembly and testing.",
  "EMIRE / 01": "EMIRE / 01",
  "Groupe électrogène EMIREGENSET": "EMIREGENSET generator set",
  "ÉLECTRIQUE": "ELECTRICAL",
  "ÉCLAIRAGE": "LIGHTING",
  "Industrie": "Industry",
  "Santé": "Healthcare",
  "Agriculture": "Agriculture",
  "Construction & événements": "Construction & events",
  "Les références publiques d’EMIRE présentent des réalisations et interventions dans plusieurs secteurs, notamment l’industrie, la santé et l’agriculture, ainsi que des installations pour la construction et les événements.": "EMIRE’s public references show projects and interventions across several sectors, notably industry, healthcare and agriculture, as well as installations for construction and events.",
  "Construction": "Construction",
  "Événements": "Events",
  "EURL EMIRE": "EURL EMIRE",
  "EMIREGENSET · Algérie": "EMIREGENSET · Algeria",
  "Contact — EMIRE": "Contact — EMIRE",
  "Alger · Ouargla · Hassi Messaoud": "Algiers · Ouargla · Hassi Messaoud",
  "Z.I Oued S’Mar, Z.I Hassi Ben Abdellah et Z.A Hassi Messaoud sont listées dans les informations publiques.": "Z.I Oued S’Mar, Z.I Hassi Ben Abdellah and Z.A Hassi Messaoud are listed in the public information.",
  "Sétif · Oran · Alger Baba Ali": "Sétif · Oran · Algiers Baba Ali",
  "Groupe électrogène": "Generator set",
  "Installation / mise en service": "Installation / commissioning",
  "Réalisations — EMIRE": "Projects — EMIRE",
  "Secteurs publiés": "Published sectors",
  "Agricole": "Agriculture",
  "Solutions d’énergie sur mesure adaptées aux exploitations agricoles.": "Tailored energy solutions adapted to agricultural operations.",
  "Génération, intégration électrique et maintenance pour les sites industriels.": "Power generation, electrical integration and maintenance for industrial sites.",
  "Continuité d’alimentation pour les environnements de soin et équipements vitaux.": "Power continuity for care environments and critical equipment.",
  "Solutions — EMIRE": "Solutions — EMIRE",
  "Accompagnement de l’intégration et de la mise en route des équipements sur site.": "Support for equipment integration and on-site start-up.",
  "Interventions planifiées pour préserver la longévité et les performances des groupes électrogènes.": "Planned interventions to preserve generator-set performance and service life.",
  "Projets électriques sur mesure": "Custom electrical projects",
  "Pièces référencées pour moteurs, alternateurs / générateurs et composants de commande.": "Referenced parts for engines, alternators / generators and control components.",
  "EMIRE met en avant une prise en charge qui va jusqu’à la livraison du projet, avec des engagements autour de la fiabilité, de la qualité, de la personnalisation et de la durabilité.": "EMIRE highlights end-to-end project support through delivery, with commitments to reliability, quality, customization and durability.",
  "SAV": "After-sales service",
  "Le site EMIRE met en avant la maintenance préventive, la maintenance curative et les pièces de rechange comme piliers du service après-vente.": "EMIRE highlights preventive maintenance, corrective maintenance and spare parts as pillars of its after-sales service.",
  "Secteurs — EMIRE": "Industries — EMIRE",
  "Puissance fiable pour les chaînes de production et les installations industrielles.": "Reliable power for production lines and industrial facilities.",
  "Alimentation continue pour les équipements et environnements où la disponibilité est critique.": "Continuous power for equipment and environments where availability is critical.",
  "Groupes et solutions énergie adaptés aux besoins spécifiques des exploitations.": "Generator sets and energy solutions adapted to specific operating needs.",
  "Environnements exigeants": "Demanding environments",
  "Dimensionnement": "Sizing",
  "Ressources — EMIRE": "Insights — EMIRE",
  "Documentation produit": "Product documentation",
  "Cummins + Leroy-Somer": "Cummins + Leroy-Somer",
  "Prime": "Prime power",
  "Secours": "Standby power",
  "Fréquence": "Frequency",
  "50 Hz": "50 Hz",
  "Combustion": "Combustion",
  "Injection directe": "Direct injection",
  "John Deere + Leroy-Somer": "John Deere + Leroy-Somer",
  "Continu": "Continuous",
  "Poids": "Weight",
  "Assemblage": "Assembly",
  "Test": "Test",
  "Certificat": "Certificate",
  "Protection": "Protection",
  "Sur cette page": "On this page",
  "Savoir-faire": "Expertise",
  "Implantations": "Locations",
  "EMIREGENSET est la marque présentée pour les groupes électrogènes. La page d’accueil EMIRE cite une gamme de 16 kVA à 2500 kVA et des moteurs de marques Kubota, Baudouin, Cummins, John Deere, Volvo et Perkins, avec des alternateurs Leroy-Somer et Stamford.": "EMIREGENSET is the brand presented for generator sets. EMIRE’s home page cites a 16 to 2500 kVA range and engines from Kubota, Baudouin, Cummins, John Deere, Volvo and Perkins, with Leroy-Somer and Stamford alternators.",
  "Une logique de cycle de vie": "A lifecycle approach",
  "Groupes électrogènes — EMIRE": "Generator sets — EMIRE",
  "La page d’accueil EMIRE présente une gamme de 16 à 2500 kVA. Les pages produits indiquent des configurations sur skid, insonorisées, super silencieuses et conteneurisées.": "EMIRE’s home page presents a 16 to 2500 kVA range. Product pages indicate skid-mounted, soundproof, super-silent and containerized configurations.",
  "Insonorisé": "Soundproof",
  "Super silencieux": "Super-silent",
  "Essais": "Testing",
  "Exemples publiés": "Published examples",
  "Emire Genset C1000": "EMIREGENSET C1000",
  "Moteur": "Engine",
  "Alternateur": "Alternator",
  "Emire Genset J110": "EMIREGENSET J110",
  "TECHNIQUE": "TECHNICAL",
  "Peinture": "Paint",
  "Tests": "Tests",
  "Sertissage": "Crimping",
  "Mâts d’éclairage — EMIRE": "Lighting masts — EMIRE",
  "Mâts d’éclairage.": "Lighting masts.",
  "Données reprises du contenu produit fourni.": "Data reproduced from the supplied product content.",
  "Hauteur du mât": "Mast height",
  "Poids sec": "Dry weight",
  "Système de mât": "Mast system",
  "Contenu du réservoir": "Tank capacity",
  "Résistance au vent": "Wind resistance",
  "Type luminaire": "Luminaire type",
  "Angle d’éclairage": "Lighting angle",
  "Ajustable pour une couverture optimale": "Adjustable for optimal coverage",
  "Une lumière pensée pour l’activité de terrain.": "Lighting designed for field operations.",
  "Les mâts d’éclairage sont présentés pour les environnements où la visibilité, la sécurité et la continuité des opérations comptent.": "The lighting masts are presented for environments where visibility, safety and operational continuity matter.",
  "Éclairez efficacement vos travaux de nuit pour garantir sécurité et productivité optimale.": "Light night work effectively to support safety and productivity.",
  "Illuminez les espaces pour des opérations continues et une sécurité renforcée.": "Illuminate spaces for continuous operations and enhanced safety.",
  "Fournissez un éclairage homogène pour le confort et la sécurité des usagers.": "Provide even lighting for user comfort and safety.",
  "Groupe Agri — EMIRE": "Agri generator — EMIRE",
  "Solution agricole": "Agricultural solution",
  "La page d’accueil EMIRE décrit une solution énergie sur mesure destinée à soutenir les exploitations agricoles et cite l’agriculture parmi les secteurs servis.": "EMIRE’s home page describes a tailored energy solution supporting agricultural operations and lists agriculture among the sectors served.",
  "Information disponible publiquement": "Publicly available information",
  "Besoin agricole": "Agricultural need",
  "Irrigation, pompage, stockage, équipements de production : le bon dimensionnement dépend de l’application et des charges à alimenter.": "Irrigation, pumping, storage and production equipment: correct sizing depends on the application and connected loads.",
  "Armoires inverseurs — EMIRE": "Transfer switchboards — EMIRE",
  "Armoires inverseurs.": "Transfer switchboards.",
  "Les armoires inverseurs sont présentées par EMIRE comme des solutions adaptées aux hôpitaux, à l’industrie et aux entreprises, avec une commutation pensée pour préserver les activités et équipements en cas de coupure.": "EMIRE presents transfer switchboards as solutions for hospitals, industry and businesses, with switching designed to protect operations and equipment during outages.",
  "Type de commutation": "Switching type",
  "Automatique / Manuel": "Automatic / Manual",
  "Tension nominale": "Nominal voltage",
  "Puissance max.": "Max. power",
  "Nombre de phases": "Number of phases",
  "Matériaux": "Materials",
  "Indice de protection": "Ingress protection rating",
  "Une commutation adaptée aux environnements critiques.": "Switching designed for critical environments.",
  "Les armoires inverseurs assurent un basculement automatique ou manuel entre sources afin de protéger les activités et équipements en cas de coupure.": "Transfer switchboards provide automatic or manual source changeover to protect operations and equipment during outages.",
  "Garantissent une alimentation continue pour les équipements vitaux en cas de coupure électrique.": "They maintain continuous power for critical equipment during an outage.",
  "Assurent une transition rapide pour maintenir la production sans interruption.": "They provide fast changeover to keep production running without interruption.",
  "Préservent les données et activités grâce à une alimentation fiable et automatique.": "They protect data and operations through reliable automatic power transfer.",
  "Hôpitaux : alimentation continue pour les équipements vitaux. Industrie : transition rapide pour maintenir la production. Entreprise : protection des données et des activités grâce à une alimentation fiable et automatique.": "Hospitals: continuous power for critical equipment. Industry: fast changeover to maintain production. Business: protection of data and operations through reliable automatic power transfer.",
  "Produits — EMIRE": "Products — EMIRE",
  "Une présentation structurée autour des familles réellement citées par EMIRE : groupes électrogènes, armoires inverseurs, mâts d’éclairage et solutions agri.": "A presentation structured around the product families actually cited by EMIRE: generator sets, transfer switchboards, lighting masts and agricultural solutions.",
  "Gamme présentée sur la page d’accueil EMIRE : 16 à 2500 kVA. Configurations sur skid, insonorisées, super silencieuses et conteneurisées.": "Range presented on EMIRE’s home page: 16 to 2500 kVA. Skid-mounted, soundproof, super-silent and containerized configurations.",
  "Gamme EMIREGENSET": "EMIREGENSET range",
  "Des groupes conçus et testés pour l’usage.": "Generator sets designed and tested for the intended application.",
  "Les pages produits EMIRE indiquent que les groupes sont assemblés à l’usine EMIRE GENSET conformément à l’ISO 8528, testés avant expédition et accompagnés d’un certificat de test.": "EMIRE product pages state that generator sets are assembled at the EMIRE GENSET factory in accordance with ISO 8528, tested before shipment and supplied with a test certificate.",
  "EXEMPLE PRODUIT": "PRODUCT EXAMPLE",
  "Puissance continue": "Prime power",
  "Puissance secours": "Standby power",
  "CONSTRUCTION": "CONSTRUCTION",
  "Qualité de fabrication": "Build quality",
  "Poudre / électrostatique": "Powder / electrostatic"
};
  const AR = {
  "Accueil": "الرئيسية",
  "À propos": "عن إمير",
  "Solutions": "الحلول",
  "Produits": "المنتجات",
  "Réalisations": "المشاريع",
  "Secteurs": "القطاعات",
  "Ressources": "الموارد",
  "Contact": "اتصل بنا",
  "Demander un devis ↗": "طلب عرض سعر ↗",
  "Demander un devis": "طلب عرض سعر",
  "Solutions d’énergie & maintenance industrielle": "حلول الطاقة والصيانة الصناعية",
  "Des systèmes qui ne doivent pas s’arrêter.": "أنظمة لا يمكنها التوقف.",
  "Ils nous ont fait confiance": "عملاؤنا يثقون بنا",
  "Ils nous ont fait confiance.": "عملاؤنا يثقون بنا.",
  "Partenaires d’excellence mondiale.": "شركاء عالميون للتميز.",
  "Des solutions présentées par EMIRE pour l’industrie, la santé, l’agriculture, la construction et les événements.": "حلول تقدمها إمير لقطاعات الصناعة والصحة والزراعة والبناء والفعاليات.",
  "Motorisations et alternateurs de marques reconnues : Kubota, Baudouin, Cummins, John Deere, Volvo, Perkins, Leroy-Somer et Stamford.": "محركات ومولدات من علامات معروفة: كوبوتا، بودوان، كمنز، جون دير، فولفو، بيركنز، لوروا سومر وستانفورد.",
  "EMIRE / À propos": "إمير / عن الشركة",
  "Une expertise technique pensée pour la continuité.": "خبرة تقنية مصممة لضمان الاستمرارية.",
  "Depuis 1998, EMIRE se positionne autour de la maintenance industrielle, des travaux électriques et de la fabrication / commercialisation de groupes électrogènes sous la marque EMIREGENSET.": "منذ عام 1998، تركز إمير على الصيانة الصناعية والأعمال الكهربائية وتصنيع وتسويق المولدات الكهربائية تحت علامة EMIREGENSET.",
  "Création d’EMIRE selon les pages de présentation de l’entreprise.": "تأسست إمير سنة 1998 وفقاً لصفحات تعريف الشركة.",
  "Marque dédiée aux groupes électrogènes.": "علامة متخصصة في المولدات الكهربائية.",
  "Sur skid": "على هيكل معدني",
  "Conteneur": "داخل حاوية",
  "Une des configurations fabriquées et présentées.": "إحدى التكوينات التي تصنعها وتقدمها الشركة.",
  "Une configuration intégrée pour la protection et la mobilité.": "تكوين متكامل للحماية وسهولة النقل.",
  "01 / Groupes électrogènes": "01 / المولدات الكهربائية",
  "02 / Solutions": "02 / الحلول",
  "03 / Produits": "03 / المنتجات",
  "04 / Secteurs": "04 / القطاعات",
  "05 / Confiance": "05 / الثقة",
  "Puissance, configuration, mise en service.": "القدرة، التكوين، والتشغيل.",
  "Les groupes EMIREGENSET sont proposés en versions sur skid, insonorisées, super silencieuses et conteneurisées. Les pages produits indiquent un assemblage à l’usine EMIRE GENSET conformément à l’ISO 8528 et des essais avant expédition.": "تتوفر مولدات EMIREGENSET بتكوينات على هيكل، عازلة للصوت، فائقة الهدوء وداخل حاويات. وتذكر صفحات المنتجات التجميع في مصنع EMIRE GENSET وفق ISO 8528 مع إجراء اختبارات قبل الشحن.",
  "Voir la gamme ↗": "عرض المجموعة ↗",
  "Intégration électrique": "التكامل الكهربائي",
  "Postes de transformation, armoires électriques et tableaux de distribution pour des projets clés en main.": "محطات تحويل وخزائن كهربائية ولوحات توزيع لمشاريع متكاملة.",
  "Une chaîne de service, du matériel au SAV.": "سلسلة خدمات متكاملة من المعدات إلى خدمة ما بعد البيع.",
  "L’offre EMIRE relie fourniture, installation, mise en service, maintenance et pièces de rechange pour accompagner le cycle de vie des équipements.": "تجمع إمير بين التوريد والتركيب والتشغيل والصيانة وقطع الغيار لمرافقة دورة حياة المعدات.",
  "Groupes électrogènes": "المولدات الكهربائية",
  "Installation & mise en service": "التركيب والتشغيل",
  "Maintenance préventive": "الصيانة الوقائية",
  "Maintenance curative": "الصيانة التصحيحية",
  "Projets électriques": "المشاريع الكهربائية",
  "Pièces de rechange": "قطع الغيار",
  "Gamme EMIREGENSET et configurations adaptées aux besoins de secours ou de production continue.": "مجموعة EMIREGENSET وتكوينات مناسبة للطاقة الاحتياطية أو التشغيل المستمر.",
  "Accompagnement de l’intégration et de la mise en service des équipements sur site.": "دعم دمج المعدات وتشغيلها في الموقع.",
  "Interventions planifiées pour préserver la performance et la durée de vie des équipements.": "تدخلات مبرمجة للحفاظ على أداء المعدات وعمرها التشغيلي.",
  "Diagnostic et intervention lorsque surviennent pannes ou dysfonctionnements.": "تشخيص الأعطال والتدخل عند حدوث الخلل.",
  "Conception et intégration de postes de transformation, armoires électriques et tableaux de distribution.": "تصميم ودمج محطات التحويل والخزائن واللوحات الكهربائية.",
  "Catégories de pièces pour moteurs, alternateurs / générateurs et systèmes de commande.": "فئات قطع غيار للمحركات والمولدات وأنظمة التحكم.",
  "Découvrez les produits EMIRE.": "اكتشف منتجات إمير.",
  "Au-delà des groupes électrogènes, EMIRE présente des armoires inverseurs, des mâts d’éclairage et des solutions dédiées à l’agriculture.": "إلى جانب المولدات، تقدم إمير خزائن تحويل، وأعمدة إنارة، وحلولاً مخصصة للقطاع الزراعي.",
  "Armoires inverseurs": "خزائن التحويل",
  "Mâts d’éclairage": "أعمدة الإنارة",
  "Groupe Agri": "مولد زراعي",
  "Solutions automatiques / manuelles pour basculer entre sources et protéger la continuité d’alimentation.": "حلول أوتوماتيكية / يدوية للتبديل بين مصادر الطاقة والحفاظ على استمرارية التغذية.",
  "Solutions de chantier, zones industrielles et espaces publics, avec système hydraulique et hauteur annoncée de 6 à 30 mètres selon modèle.": "حلول لمواقع البناء والمناطق الصناعية والمساحات العامة، بنظام هيدروليكي وارتفاع معلن من 6 إلى 30 متراً حسب الطراز.",
  "Solution énergétique dédiée au secteur agricole. La page d’accueil EMIRE décrit une adaptation aux besoins spécifiques des exploitations.": "حل طاقة مخصص للقطاع الزراعي، وتصف إمير تكييفه وفق احتياجات المزارع.",
  "Des applications qui exigent une énergie fiable.": "تطبيقات تتطلب طاقة موثوقة.",
  "Puissance fiable pour les chaînes de production et les sites industriels.": "طاقة موثوقة لخطوط الإنتاج والمواقع الصناعية.",
  "Continuité de l’alimentation pour les environnements de soin et équipements critiques.": "استمرارية التغذية لبيئات الرعاية والمعدات الحرجة.",
  "Solutions énergétiques adaptées aux besoins spécifiques des exploitations.": "حلول طاقة ملائمة لاحتياجات المزارع.",
  "Fourniture d’énergie pour les chantiers de grande envergure et les événements.": "توفير الطاقة لمشاريع البناء الكبرى والفعاليات.",
  "Décrivez votre besoin. EMIRE s’occupe du reste.": "صف احتياجاتك، وإمير تتولى الباقي.",
  "Capacité, usage, localisation, installation et besoins de maintenance : ces éléments permettent de commencer un échange technique utile.": "القدرة والاستخدام والموقع والتركيب واحتياجات الصيانة: هذه المعلومات تجعل النقاش التقني الأول أكثر فائدة.",
  "Contacter EMIRE ↗": "التواصل مع إمير ↗",
  "Demande de devis": "طلب عرض سعر",
  "Entreprise établie en Algérie.": "شركة مؤسسة في الجزائر.",
  "Expert en solutions d’énergie et maintenance industrielle.": "خبير في حلول الطاقة والصيانة الصناعية.",
  "Expert en solutions d’énergie et maintenance industrielle. Fabrication et commercialisation de groupes électrogènes sous la marque EMIREGENSET.": "خبير في حلول الطاقة والصيانة الصناعية. تصنيع وتسويق المولدات الكهربائية تحت علامة EMIREGENSET.",
  "À propos d’EMIRE": "عن إمير",
  "À propos — EMIRE": "عن إمير",
  "Depuis 1998, EMIRE se présente comme une entreprise spécialisée en maintenance industrielle, travaux électriques et fabrication / commercialisation de groupes électrogènes sous la marque EMIREGENSET.": "منذ عام 1998، تقدم إمير نفسها كشركة متخصصة في الصيانة الصناعية والأعمال الكهربائية وتصنيع وتسويق المولدات الكهربائية تحت علامة EMIREGENSET.",
  "Parler à EMIRE ↗": "تحدث مع إمير ↗",
  "Voir EMIREGENSET": "عرض EMIREGENSET",
  "Une activité construite autour de la continuité énergétique.": "نشاط مبني حول استمرارية الطاقة.",
  "Des projets électriques clés en main.": "مشاريع كهربائية متكاملة.",
  "Fourniture · installation · mise en service · maintenance préventive · maintenance curative · pièces de rechange.": "توريد · تركيب · تشغيل · صيانة وقائية · صيانة تصحيحية · قطع غيار.",
  "Implantations & points de présence.": "المواقع ونقاط الحضور.",
  "Implantations citées": "المواقع المذكورة",
  "La documentation EMIRE référence des motorisations et alternateurs de fabricants internationaux. Cette sélection permet de proposer différentes architectures de groupes selon la puissance et l’usage.": "تشير وثائق إمير إلى محركات ومولدات من مصنعين دوليين، ما يتيح تكوينات مختلفة حسب القدرة والاستخدام.",
  "Du groupe électrogène au système électrique complet.": "من المولد الكهربائي إلى النظام الكهربائي الكامل.",
  "EMIRE associe fourniture d’équipements, installation, mise en service, maintenance et pièces de rechange à des projets électriques sur mesure.": "تجمع إمير بين توريد المعدات والتركيب والتشغيل والصيانة وقطع الغيار ضمن مشاريع كهربائية مخصصة.",
  "Vente de groupes électrogènes": "بيع المولدات الكهربائية",
  "EMIREGENSET propose des groupes pour différentes applications, avec des configurations sur skid, insonorisées, super silencieuses et conteneurisées.": "توفر EMIREGENSET مولدات لتطبيقات مختلفة بتكوينات على هيكل وعازلة للصوت وفائقة الهدوء وداخل حاويات.",
  "Une prise en charge qui va jusqu’à la livraison du projet, avec des engagements autour de la fiabilité, de la qualité, de la personnalisation et de la durabilité.": "متابعة تمتد حتى تسليم المشروع، مع التركيز على الموثوقية والجودة والتخصيص والاستدامة.",
  "Un projet pensé de A à Z.": "مشروع مصمم من الألف إلى الياء.",
  "Méthode": "المنهجية",
  "Fiabilité": "الموثوقية",
  "Qualité": "الجودة",
  "Personnalisation": "التخصيص",
  "Durabilité": "الاستدامة",
  "Assistance technique au fil du temps.": "دعم تقني مستمر.",
  "Prévenir": "الوقاية",
  "Diagnostiquer": "التشخيص",
  "Remettre en service": "إعادة التشغيل",
  "Planifier les opérations afin de protéger les performances et la durée de vie de l’équipement.": "تخطيط العمليات للحفاظ على أداء المعدات وعمرها التشغيلي.",
  "Identifier les causes d’un arrêt ou d’un dysfonctionnement et préparer l’intervention.": "تحديد أسباب التوقف أو الخلل والتحضير للتدخل.",
  "Intervenir avec une logique de disponibilité et de continuité d’exploitation.": "التدخل بمنهج يركز على الجاهزية واستمرارية التشغيل.",
  "Des solutions personnalisées pour chaque secteur.": "حلول مخصصة لكل قطاع.",
  "La page officielle des réalisations organise les projets par secteurs, notamment Agricole, Industrie et Santé. L’accueil ajoute également la construction et les événements.": "تنظم صفحة المشاريع العامة المراجع حسب قطاعات الزراعة والصناعة والصحة، وتبرز الصفحة الرئيسية أيضاً البناء والفعاليات.",
  "Installation d’alimentation pour environnement industriel exigeant.": "منظومة تغذية لبيئة صناعية تتطلب الاعتمادية.",
  "Alimentation de projets de construction de grande envergure.": "تغذية لمشاريع بناء واسعة النطاق.",
  "Fourniture d’énergie et éclairage pour des événements.": "توفير الطاقة والإنارة للفعاليات.",
  "Agricole · Industrie · Santé.": "الزراعة · الصناعة · الصحة.",
  "Des environnements où la disponibilité compte.": "بيئات تكون فيها الجاهزية مهمة.",
  "L’énergie n’a pas le même rôle partout.": "الطاقة لا تؤدي الدور نفسه في كل مكان.",
  "Le bon groupe dépend du site, de la charge et du mode d’exploitation.": "المولد المناسب يعتمد على الموقع والحمل وطريقة التشغيل.",
  "Parler à un technicien ↗": "التحدث إلى فني ↗",
  "Comprendre l’équipement avant de choisir.": "افهم المعدات قبل الاختيار.",
  "Guide produit": "دليل المنتج",
  "Comprendre les configurations EMIREGENSET": "فهم تكوينات EMIREGENSET",
  "Lire la ressource ↗": "قراءة المورد ↗",
  "Maintenance préventive & curative": "الصيانة الوقائية والتصحيحية",
  "Découvrir le service ↗": "اكتشاف الخدمة ↗",
  "Du groupe à l’installation électrique": "من المولد إلى التركيب الكهربائي",
  "Voir les solutions ↗": "عرض الحلول ↗",
  "Des données vérifiables.": "بيانات قابلة للتحقق.",
  "Parlons de votre besoin en énergie.": "لنتحدث عن احتياجاتك من الطاقة.",
  "Téléphone général": "الهاتف العام",
  "Email commercial": "البريد التجاري",
  "Showrooms / succursale": "صالات العرض / الفرع",
  "Détails du projet": "تفاصيل المشروع",
  "Nom complet": "الاسم الكامل",
  "Téléphone": "الهاتف",
  "Entreprise": "الشركة",
  "Besoin": "الاحتياج",
  "Puissance / périmètre": "القدرة / النطاق",
  "Maintenance": "الصيانة",
  "Travaux électriques": "الأعمال الكهربائية",
  "Mât d’éclairage": "عمود إنارة",
  "Armoire inverseur": "خزانة تحويل",
  "Envoyer la demande ↗": "إرسال الطلب ↗",
  "Présentation du produit": "عرض المنتج",
  "Cas d’utilisation": "حالات الاستخدام",
  "Caractéristiques techniques": "المواصفات الفنية",
  "Hôpitaux": "المستشفيات",
  "Chantiers": "مواقع البناء",
  "Zones industrielles": "المناطق الصناعية",
  "Espaces publics": "المساحات العامة",
  "Éclairer, sécuriser, continuer.": "الإنارة، الحماية، والاستمرار.",
  "Une solution mobile et robuste pour les chantiers, zones industrielles et espaces publics lorsque l’éclairage doit accompagner l’activité.": "حل متنقل ومتين لمواقع البناء والمناطق الصناعية والمساحات العامة عندما تكون الإنارة جزءاً من استمرارية النشاط.",
  "Groupes électrogènes.": "المولدات الكهربائية.",
  "Une solution de basculement de source pensée pour maintenir l’alimentation lorsque la continuité est critique.": "حل لتبديل مصدر الطاقة مصمم للحفاظ على التغذية عندما تكون الاستمرارية حرجة.",
  "Automatique ou manuel.": "أوتوماتيكي أو يدوي.",
  "Protéger la continuité là où elle compte.": "حماية الاستمرارية حيث تكون مهمة.",
  "Groupe Agri.": "مولد زراعي.",
  "Une solution énergétique présentée par EMIRE pour répondre aux besoins spécifiques des exploitations agricoles.": "حل طاقة تقدمه إمير لتلبية الاحتياجات الخاصة للمزارع.",
  "Une énergie adaptée au terrain.": "طاقة متكيفة مع الموقع.",
  "Dimensionnons la puissance à partir de votre usage.": "نحدد القدرة انطلاقاً من استخدامك الفعلي.",
  "Usage": "الاستخدام",
  "Puissance": "القدرة",
  "Implantation": "الموقع",
  "Retour à l’accueil": "العودة إلى الرئيسية",
  "Configurations fabriquées par EMIRE GENSET": "التكوينات المصنعة من EMIRE GENSET",
  "Informations issues des pages produits publiques d’EMIRE.": "معلومات من صفحات منتجات إمير العامة.",
  "Groupe électrogène monté sur châssis robuste pour une installation fixe.": "مولد كهربائي مركب على هيكل متين للتركيب الثابت.",
  "Groupe équipé d’un capot pour réduire les nuisances sonores.": "مولد مزود بغطاء لتقليل الضوضاء.",
  "Conçu pour un fonctionnement ultra-silencieux et des environnements sensibles.": "مصمم للتشغيل فائق الهدوء والبيئات الحساسة.",
  "Groupe intégré dans un conteneur pour protection et mobilité.": "مولد مدمج داخل حاوية للحماية وسهولة النقل.",
  "Assemblage à l’usine EMIRE GENSET conformément à l’ISO 8528.": "التجميع في مصنع EMIRE GENSET وفقاً لمعيار ISO 8528.",
  "Test avant expédition, contrôle conformément à l’ISO 8528 et certificat de test.": "اختبار قبل الشحن، والتحقق وفق ISO 8528، وشهادة اختبار.",
  "Deux modèles avec données techniques publiées.": "طرازان ببيانات تقنية منشورة.",
  "EMIRE — Solutions d’énergie & groupes électrogènes": "إمير — حلول الطاقة والمولدات الكهربائية",
  "EMIREGENSET · Depuis 1998": "EMIREGENSET · منذ 1998",
  "VOTRE": "قوتكم",
  "PUISSANCE.": "الطاقة.",
  "NOTRE MISSION.": "مهمتنا.",
  "EMIRE conçoit, commercialise et installe des groupes électrogènes et accompagne les installations électriques avec une offre intégrée de mise en service, maintenance et pièces de rechange.": "تقوم إمير بتصميم وتسويق وتركيب المولدات الكهربائية، وترافق التركيبات الكهربائية من خلال عرض متكامل يشمل التشغيل والصيانة وقطع الغيار.",
  "Parler à EMIRE": "تواصل مع إمير",
  "kVA sur la présentation de gamme de la page d’accueil EMIRE.": "كيلوفولت أمبير ضمن عرض النطاق في الصفحة الرئيسية لإمير.",
  "Norme de référence citée pour l’assemblage et les essais des groupes.": "المعيار المرجعي المذكور لتجميع المولدات واختبارها.",
  "Groupe électrogène EMIREGENSET": "مولد كهربائي EMIREGENSET",
  "ÉLECTRIQUE": "كهرباء",
  "Éضاءة": "إنارة",
  "ÉCLAIRAGE": "الإنارة",
  "Industrie": "الصناعة",
  "Santé": "الصحة",
  "Agriculture": "الزراعة",
  "Construction & événements": "البناء والفعاليات",
  "Les références publiques d’EMIRE présentent des réalisations et interventions dans plusieurs secteurs, notamment l’industrie, la santé et l’agriculture, ainsi que des installations pour la construction et les événements.": "تُظهر المراجع العامة لإمير مشاريع وتدخلات في عدة قطاعات، خصوصاً الصناعة والصحة والزراعة، إضافة إلى منشآت موجهة للبناء والفعاليات.",
  "Construction": "البناء",
  "Événements": "الفعاليات",
  "EURL EMIRE": "EURL EMIRE",
  "EMIREGENSET · Algérie": "EMIREGENSET · الجزائر",
  "Contact — EMIRE": "اتصل بإمير — EMIRE",
  "Alger · Ouargla · Hassi Messaoud": "الجزائر · ورقلة · حاسي مسعود",
  "Z.I Oued S’Mar, Z.I Hassi Ben Abdellah et Z.A Hassi Messaoud sont listées dans les informations publiques.": "ترد المناطق الصناعية بوادي السمار وحاسي بن عبد الله وحاسي مسعود ضمن المعلومات العامة المنشورة.",
  "Sétif · Oran · Alger Baba Ali": "سطيف · وهران · الجزائر بابا علي",
  "Groupe électrogène": "مولد كهربائي",
  "Installation / mise en service": "التركيب / التشغيل",
  "Réalisations — EMIRE": "المشاريع — إمير",
  "Secteurs publiés": "القطاعات المنشورة",
  "Agricole": "زراعي",
  "Solutions d’énergie sur mesure adaptées aux exploitations agricoles.": "حلول طاقة مخصصة ومتكيفة مع احتياجات الاستغلالات الزراعية.",
  "Génération, intégration électrique et maintenance pour les sites industriels.": "توليد الطاقة والتكامل الكهربائي والصيانة للمواقع الصناعية.",
  "Continuité d’alimentation pour les environnements de soin et équipements vitaux.": "استمرارية التغذية الكهربائية لبيئات الرعاية والمعدات الحيوية.",
  "Solutions — EMIRE": "الحلول — إمير",
  "Accompagnement de l’intégration et de la mise en route des équipements sur site.": "مرافقة دمج المعدات وتشغيلها في الموقع.",
  "Interventions planifiées pour préserver la longévité et les performances des groupes électrogènes.": "تدخلات مخططة للحفاظ على أداء المولدات وعمرها التشغيلي.",
  "Projets électriques sur mesure": "مشاريع كهربائية مخصصة",
  "Pièces référencées pour moteurs, alternateurs / générateurs et composants de commande.": "قطع مرجعية للمحركات والمولدات/البدائل ومكونات التحكم.",
  "EMIRE met en avant une prise en charge qui va jusqu’à la livraison du projet, avec des engagements autour de la fiabilité, de la qualité, de la personnalisation et de la durabilité.": "تقدم إمير مرافقة تمتد حتى تسليم المشروع، مع التركيز على الموثوقية والجودة والتخصيص والاستدامة.",
  "SAV": "خدمة ما بعد البيع",
  "Le site EMIRE met en avant la maintenance préventive, la maintenance curative et les pièces de rechange comme piliers du service après-vente.": "يبرز موقع إمير الصيانة الوقائية والصيانة التصحيحية وقطع الغيار كركائز لخدمة ما بعد البيع.",
  "Secteurs — EMIRE": "القطاعات — إمير",
  "Puissance fiable pour les chaînes de production et les installations industrielles.": "طاقة موثوقة لخطوط الإنتاج والمنشآت الصناعية.",
  "Alimentation continue pour les équipements et environnements où la disponibilité est critique.": "تغذية مستمرة للمعدات والبيئات التي تكون فيها الجاهزية أمراً حاسماً.",
  "Groupes et solutions énergie adaptés aux besoins spécifiques des exploitations.": "مولدات وحلول طاقة متكيفة مع الاحتياجات الخاصة للاستغلالات.",
  "Environnements exigeants": "بيئات تتطلب أداءً عالياً",
  "Dimensionnement": "تحديد القدرة",
  "Ressources — EMIRE": "الموارد — إمير",
  "Documentation produit": "وثائق المنتج",
  "Cummins + Leroy-Somer": "Cummins + Leroy-Somer",
  "Prime": "القدرة المستمرة",
  "Secours": "قدرة الطوارئ",
  "Fréquence": "التردد",
  "50 Hz": "50 هرتز",
  "Combustion": "الاحتراق",
  "Injection directe": "حقن مباشر",
  "John Deere + Leroy-Somer": "John Deere + Leroy-Somer",
  "Continu": "مستمر",
  "Poids": "الوزن",
  "Assemblage": "التجميع",
  "Test": "اختبار",
  "Certificat": "شهادة",
  "Protection": "الحماية",
  "Sur cette page": "في هذه الصفحة",
  "Savoir-faire": "الخبرة",
  "Implantations": "المواقع",
  "EMIREGENSET est la marque présentée pour les groupes électrogènes. La page d’accueil EMIRE cite une gamme de 16 kVA à 2500 kVA et des moteurs de marques Kubota, Baudouin, Cummins, John Deere, Volvo et Perkins, avec des alternateurs Leroy-Somer et Stamford.": "EMIREGENSET هي العلامة المقدمة للمولدات الكهربائية. تذكر الصفحة الرئيسية لإمير نطاقاً من 16 إلى 2500 كيلوفولت أمبير، ومحركات من علامات Kubota وBaudouin وCummins وJohn Deere وVolvo وPerkins، مع مولدات من Leroy-Somer وStamford.",
  "Une logique de cycle de vie": "منهجية تعتمد على دورة حياة المعدات",
  "Groupes électrogènes — EMIRE": "المولدات الكهربائية — إمير",
  "La page d’accueil EMIRE présente une gamme de 16 à 2500 kVA. Les pages produits indiquent des configurations sur skid, insonorisées, super silencieuses et conteneurisées.": "تعرض الصفحة الرئيسية لإمير نطاقاً من 16 إلى 2500 كيلوفولت أمبير. وتشير صفحات المنتجات إلى تكوينات على هيكل، عازلة للصوت، فائقة الهدوء وداخل حاويات.",
  "Insonorisé": "عازل للصوت",
  "Super silencieux": "فائق الهدوء",
  "Essais": "اختبارات",
  "Exemples publiés": "نماذج منشورة",
  "Emire Genset C1000": "EMIREGENSET C1000",
  "Moteur": "المحرك",
  "Alternateur": "المولد",
  "Emire Genset J110": "EMIREGENSET J110",
  "TECHNIQUE": "تقني",
  "Peinture": "الطلاء",
  "Tests": "الاختبارات",
  "Sertissage": "الكبس",
  "Mâts d’éclairage — EMIRE": "أعمدة الإنارة — إمير",
  "Mâts d’éclairage.": "أعمدة الإنارة.",
  "Données reprises du contenu produit fourni.": "بيانات مأخوذة من محتوى المنتج المقدم.",
  "Hauteur du mât": "ارتفاع العمود",
  "Poids sec": "الوزن الجاف",
  "Système de mât": "نظام العمود",
  "Contenu du réservoir": "سعة الخزان",
  "Résistance au vent": "مقاومة الرياح",
  "Type luminaire": "نوع المصباح",
  "Angle d’éclairage": "زاوية الإضاءة",
  "Ajustable pour une couverture optimale": "قابلة للضبط لتغطية مثالية",
  "Une lumière pensée pour l’activité de terrain.": "إنارة مصممة لأنشطة الميدان.",
  "Les mâts d’éclairage sont présentés pour les environnements où la visibilité, la sécurité et la continuité des opérations comptent.": "تُقدم أعمدة الإنارة للبيئات التي تكون فيها الرؤية والسلامة واستمرارية العمليات أموراً مهمة.",
  "Éclairez efficacement vos travaux de nuit pour garantir sécurité et productivité optimale.": "أضيئوا أعمالكم الليلية بكفاءة لضمان السلامة والإنتاجية.",
  "Illuminez les espaces pour des opérations continues et une sécurité renforcée.": "أضيئوا المساحات لضمان استمرارية العمليات وتعزيز السلامة.",
  "Fournissez un éclairage homogène pour le confort et la sécurité des usagers.": "وفروا إضاءة متجانسة لراحة المستخدمين وسلامتهم.",
  "Groupe Agri — EMIRE": "المولد الزراعي — إمير",
  "Solution agricole": "حل زراعي",
  "La page d’accueil EMIRE décrit une solution énergie sur mesure destinée à soutenir les exploitations agricoles et cite l’agriculture parmi les secteurs servis.": "تصف الصفحة الرئيسية لإمير حلاً مخصصاً للطاقة لدعم الاستغلالات الزراعية، وتذكر الزراعة ضمن القطاعات التي تخدمها.",
  "Information disponible publiquement": "معلومات متاحة للعامة",
  "Besoin agricole": "الاحتياج الزراعي",
  "Irrigation, pompage, stockage, équipements de production : le bon dimensionnement dépend de l’application et des charges à alimenter.": "الري والضخ والتخزين ومعدات الإنتاج: يعتمد تحديد القدرة المناسب على التطبيق والأحمال المطلوب تغذيتها.",
  "Armoires inverseurs — EMIRE": "خزائن التحويل — إمير",
  "Armoires inverseurs.": "خزائن التحويل.",
  "Les armoires inverseurs sont présentées par EMIRE comme des solutions adaptées aux hôpitaux, à l’industrie et aux entreprises, avec une commutation pensée pour préserver les activités et équipements en cas de coupure.": "تقدم إمير خزائن التحويل كحلول للمستشفيات والصناعة والشركات، مع نظام تحويل مصمم لحماية الأنشطة والمعدات عند انقطاع الكهرباء.",
  "Type de commutation": "نوع التحويل",
  "Automatique / Manuel": "أوتوماتيكي / يدوي",
  "Tension nominale": "الجهد الاسمي",
  "Puissance max.": "القدرة القصوى",
  "Nombre de phases": "عدد الأطوار",
  "Matériaux": "المواد",
  "Indice de protection": "درجة الحماية",
  "Une commutation adaptée aux environnements critiques.": "نظام تحويل مناسب للبيئات الحرجة.",
  "Les armoires inverseurs assurent un basculement automatique ou manuel entre sources afin de protéger les activités et équipements en cas de coupure.": "توفر خزائن التحويل انتقالاً أوتوماتيكياً أو يدوياً بين مصادر الطاقة لحماية الأنشطة والمعدات عند الانقطاع.",
  "Garantissent une alimentation continue pour les équipements vitaux en cas de coupure électrique.": "تضمن تغذية مستمرة للمعدات الحيوية عند انقطاع الكهرباء.",
  "Assurent une transition rapide pour maintenir la production sans interruption.": "تضمن انتقالاً سريعاً للحفاظ على الإنتاج دون انقطاع.",
  "Préservent les données et activités grâce à une alimentation fiable et automatique.": "تحافظ على البيانات والأنشطة بفضل تغذية موثوقة وأوتوماتيكية.",
  "Hôpitaux : alimentation continue pour les équipements vitaux. Industrie : transition rapide pour maintenir la production. Entreprise : protection des données et des activités grâce à une alimentation fiable et automatique.": "المستشفيات: تغذية مستمرة للمعدات الحيوية. الصناعة: انتقال سريع للحفاظ على الإنتاج. الشركات: حماية البيانات والأنشطة بفضل تغذية موثوقة وأوتوماتيكية.",
  "Produits — EMIRE": "المنتجات — إمير",
  "Une présentation structurée autour des familles réellement citées par EMIRE : groupes électrogènes, armoires inverseurs, mâts d’éclairage et solutions agri.": "عرض منظم حول عائلات المنتجات التي تذكرها إمير فعلياً: المولدات الكهربائية وخزائن التحويل وأعمدة الإنارة والحلول الزراعية.",
  "Gamme présentée sur la page d’accueil EMIRE : 16 à 2500 kVA. Configurations sur skid, insonorisées, super silencieuses et conteneurisées.": "النطاق المعروض في الصفحة الرئيسية لإمير: من 16 إلى 2500 كيلوفولت أمبير. تكوينات على هيكل، عازلة للصوت، فائقة الهدوء وداخل حاويات.",
  "Gamme EMIREGENSET": "مجموعة EMIREGENSET",
  "Des groupes conçus et testés pour l’usage.": "مولدات مصممة ومختبرة وفقاً للاستخدام.",
  "Les pages produits EMIRE indiquent que les groupes sont assemblés à l’usine EMIRE GENSET conformément à l’ISO 8528, testés avant expédition et accompagnés d’un certificat de test.": "تشير صفحات منتجات إمير إلى أن المولدات تُجمع في مصنع EMIRE GENSET وفق ISO 8528، وتُختبر قبل الشحن وتُرفق بشهادة اختبار.",
  "EXEMPLE PRODUIT": "مثال على منتج",
  "Puissance continue": "القدرة المستمرة",
  "Puissance secours": "قدرة الطوارئ",
  "CONSTRUCTION": "الإنشاء",
  "Qualité de fabrication": "جودة التصنيع",
  "Poudre / électrostatique": "طلاء مسحوق / كهروستاتيكي",
  "Découvrir les produits ↗": "اكتشف المنتجات ↗",
  "EMIRE / 01": "إمير / 01",
  "Illustration — groupe électrogène EMIREGENSET en configuration technique.": "رسم توضيحي — مولد كهربائي من EMIREGENSET بتكوين تقني.",
  "Illustration — groupe électrogène industriel EMIREGENSET.": "رسم توضيحي — مولد كهربائي صناعي من EMIREGENSET.",
  "Navigation": "التنقل",
  "Expertise": "الخبرة",
  "Contact EMIRE": "اتصل بإمير",
  "Capacité recherchée, usage, localisation, installation et service : plus votre besoin est précis, plus le premier échange technique sera utile.": "القدرة المطلوبة والاستخدام والموقع والتركيب والخدمة: كلما كانت حاجتكم أكثر دقة، كان التواصل التقني الأول أكثر فائدة.",
  "Numéro commercial affiché sur les pages produits EMIRE.": "رقم الاتصال التجاري المعروض في صفحات منتجات إمير.",
  "Adresse commerciale affichée sur le site EMIRE.": "العنوان التجاري المعروض على موقع إمير.",
  "Le site présente également ces points de présence.": "يعرض الموقع أيضاً نقاط التواجد هذه.",
  "Email": "البريد الإلكتروني",
  "Les filtres de la page « Réalisations » du site EMIRE citent ces trois catégories. Les contenus détaillés de certaines galeries publiques restent incomplets ; cette version n’invente donc pas de noms de clients ou de projets.": "تذكر فلاتر صفحة «المشاريع» على موقع إمير هذه الفئات الثلاث. وتبقى بعض تفاصيل المعارض العامة غير مكتملة؛ لذلك لا تتضمن هذه النسخة أسماء عملاء أو مشاريع غير موثقة.",
  "EMIRE met en avant des interventions dans des contextes industriels, agricoles et de santé, avec des solutions de construction et d’événements présentées sur l’accueil.": "تُبرز إمير تدخلاتها في السياقات الصناعية والزراعية والصحية، مع حلول للبناء والفعاليات معروضة في الصفحة الرئيسية.",
  "Intervention en cas de panne ou dysfonctionnement afin de remettre les équipements en état de fonctionnement.": "التدخل عند حدوث عطل أو خلل لإعادة المعدات إلى حالة التشغيل.",
  "Illustration — armoire électrique et logique de basculement de source.": "رسم توضيحي — خزانة كهربائية ومنطق تحويل مصدر الطاقة.",
  "EMIRE présente ses solutions pour l’industrie, la santé et l’agriculture, avec des cas de construction et d’événements mis en avant sur la page d’accueil.": "تقدم إمير حلولها للصناعة والصحة والزراعة، مع حالات للبناء والفعاليات مذكورة في الصفحة الرئيسية.",
  "Alimentation de projets de chantier et installations de grande envergure.": "تغذية مشاريع مواقع البناء والمنشآت الكبيرة.",
  "Fourniture d’énergie fiable pour accompagner les besoins temporaires d’un événement.": "توفير طاقة موثوقة لتلبية احتياجات الفعاليات المؤقتة.",
  "Une architecture de services qui associe équipement, installation et SAV.": "منظومة خدمات تجمع بين المعدات والتركيب وخدمة ما بعد البيع.",
  "Qu’il s’agisse de secours ou de production continue, la puissance et la configuration doivent être définies à partir de l’usage réel et des contraintes d’installation.": "سواء كان الاستخدام للطوارئ أو للإنتاج المستمر، يجب تحديد القدرة والتكوين انطلاقاً من الاستخدام الفعلي وقيود التركيب.",
  "Le site public EMIRE contient encore des articles de blog avec du contenu de démonstration. Cette page remplace les faux articles par des ressources basées sur les informations techniques réellement disponibles.": "لا يزال الموقع العام لإمير يحتوي على مقالات مدونة بمحتوى تجريبي. تستبدل هذه الصفحة المقالات الوهمية بموارد مبنية على المعلومات التقنية المتاحة فعلياً.",
  "Sur skid, insonorisé, super silencieux ou conteneur : comprendre les différences de configuration et le contexte d’usage.": "على هيكل، عازل للصوت، فائق الهدوء أو داخل حاوية: افهموا اختلافات التكوين وسياق الاستخدام.",
  "Service": "الخدمة",
  "Pourquoi le SAV fait partie du produit : préserver les performances, diagnostiquer les pannes et remettre les équipements en service.": "لماذا تعد خدمة ما بعد البيع جزءاً من المنتج: للحفاظ على الأداء وتشخيص الأعطال وإعادة المعدات إلى الخدمة.",
  "Électricité": "الكهرباء",
  "Comment postes de transformation, armoires électriques et tableaux de distribution s’intègrent dans un projet plus large.": "كيفية دمج محطات التحويل والخزائن الكهربائية ولوحات التوزيع ضمن مشروع متكامل.",
  "Les fiches publiques EMIRE donnent notamment des informations sur le C1000, le J110, les configurations et les essais ISO 8528.": "تقدم بطاقات المنتجات العامة لإمير معلومات عن C1000 وJ110 والتكوينات واختبارات ISO 8528.",
  "Essai avant expédition": "اختبار قبل الشحن",
  "Usine EMIRE GENSET": "مصنع EMIRE GENSET",
  "Automatique / vérifié": "أوتوماتيكي / تم التحقق منه",
  "Fourni": "مرفق",
  "Les pages de présentation d’EMIRE décrivent une activité couvrant la maintenance industrielle, les travaux électriques et la conception, commercialisation et installation de groupes électrogènes performants.": "تصف صفحات تعريف إمير نشاطاً يشمل الصيانة الصناعية والأعمال الكهربائية وتصميم وتسويق وتركيب المولدات الكهربائية عالية الأداء.",
  "EMIRE indique réaliser des projets électriques complets incluant des postes de transformation, des armoires électriques et des tableaux de distribution. Son savoir-faire est également présenté comme adapté aux zones où l’alimentation doit rester disponible dans des environnements exigeants.": "تشير إمير إلى تنفيذ مشاريع كهربائية متكاملة تشمل محطات التحويل والخزائن الكهربائية ولوحات التوزيع، كما تقدم خبرتها على أنها مناسبة للبيئات التي يجب أن تبقى فيها التغذية متاحة تحت ظروف تشغيل صعبة.",
  "Les informations publiques du site citent Z.I Oued S’Mar à Alger, Z.A Hassi Messaoud et Z.I Hassi Ben Abdellah à Ouargla. Le site mentionne également un showroom à Sétif, un showroom à Oran et une succursale à Alger, Z.I Baba Ali.": "تذكر المعلومات العامة للموقع المنطقة الصناعية بوادي السمار في الجزائر، والمنطقة الصناعية بحاسي مسعود والمنطقة الصناعية بحاسي بن عبد الله في ورقلة. كما يذكر الموقع صالة عرض في سطيف، وصالة عرض في وهران، وفرعاً في الجزائر بالمنطقة الصناعية بابا علي.",
  "Les données ci-dessous reprennent les fiches publiques consultables sur le site EMIRE.": "البيانات أدناه مأخوذة من بطاقات المنتجات العامة المتاحة على موقع إمير.",
  "Découvrez nos produits": "اكتشف منتجاتنا",
  "Illustration — mât d’éclairage pour chantier et environnement industriel.": "رسم توضيحي — عمود إنارة لموقع بناء وبيئة صناعية.",
  "Le contenu produit fourni présente des mâts d’éclairage conçus pour durer, avec une conception destinée aux environnements professionnels et aux conditions exigeantes.": "يقدم محتوى المنتج أعمدة إنارة مصممة للمتانة، ومهيأة للبيئات المهنية وظروف التشغيل الصعبة.",
  "Les détails techniques spécifiques du Groupe Agri ne sont pas suffisamment renseignés dans les contenus publics consultés. Nous ne les inventons pas ici.": "لا تتوفر في المحتويات العامة التي تم الاطلاع عليها تفاصيل تقنية كافية ومحددة للمولد الزراعي، لذلك لا نخترعها هنا.",
  "Décrire les équipements et la durée de fonctionnement attendue.": "صفوا المعدات ومدة التشغيل المتوقعة.",
  "Établir le besoin électrique à partir des charges réellement présentes.": "حددوا الاحتياج الكهربائي انطلاقاً من الأحمال الفعلية الموجودة.",
  "Prendre en compte le site, l’environnement et les contraintes d’installation.": "خذوا الموقع والبيئة وقيود التركيب بعين الاعتبار.",
  "Parler de votre installation ↗": "تحدث عن تركيبك ↗",
  "Découvrir la gamme ↗": "اكتشف المجموعة ↗",
  "Voir les caractéristiques ↗": "عرض المواصفات ↗",
  "Découvrir la solution ↗": "اكتشف الحل ↗"
};
  const ATTR_EN = {
  "Navigation principale": "Main navigation",
  "Choisir la langue": "Choose language",
  "Ouvrir le menu": "Open menu",
  "Fermer le menu": "Close menu",
  "Groupe électrogène EMIREGENSET bleu sur site industriel": "Blue EMIREGENSET generator set at an industrial site",
  "Groupe électrogène EMIREGENSET bleu": "Blue EMIREGENSET generator set",
  "Armoire électrique de commande": "Electrical control panel",
  "Armoire inverseur": "Transfer switchboard",
  "Mât d’éclairage": "Lighting mast",
  "Illustration — groupe électrogène industriel EMIREGENSET.": "Illustration — industrial EMIREGENSET generator set.",
  "Illustration — groupe électrogène EMIREGENSET en configuration technique.": "Illustration — EMIREGENSET generator set in a technical configuration.",
  "Illustration — armoire électrique et logique de basculement de source.": "Illustration — electrical panel and source-switching logic.",
  "Illustration — mât d’éclairage pour chantier et environnement industriel.": "Illustration — lighting mast for construction and industrial environments."
};
  const ATTR_AR = {
  "Navigation principale": "التنقل الرئيسي",
  "Choisir la langue": "اختيار اللغة",
  "Ouvrir le menu": "فتح القائمة",
  "Fermer le menu": "إغلاق القائمة",
  "Groupe électrogène EMIREGENSET bleu sur site industriel": "مولد كهربائي أزرق من EMIREGENSET في موقع صناعي",
  "Groupe électrogène EMIREGENSET bleu": "مولد كهربائي أزرق من EMIREGENSET",
  "Armoire électrique de commande": "خزانة تحكم كهربائية",
  "Armoire inverseur": "خزانة تحويل",
  "Mât d’éclairage": "عمود إنارة",
  "Illustration — groupe électrogène industriel EMIREGENSET.": "رسم توضيحي — مولد كهربائي صناعي من EMIREGENSET.",
  "Illustration — groupe électrogène EMIREGENSET en configuration technique.": "رسم توضيحي — مولد كهربائي من EMIREGENSET بتكوين تقني.",
  "Illustration — armoire électrique et logique de basculement de source.": "رسم توضيحي — خزانة كهربائية ومنطق تحويل مصدر الطاقة.",
  "Illustration — مät d’éclairage pour chantier et environnement industriel.": "رسم توضيحي — عمود إنارة لموقع بناء وبيئة صناعية.",
  "Illustration — mât d’éclairage pour chantier et environnement industriel.": "رسم توضيحي — عمود إنارة لموقع بناء وبيئة صناعية."
};
  Object.assign(ATTR_EN, {
  "Groupe électrogène EMIREGENSET": "EMIREGENSET generator set",
  "Illustration industrielle de groupe électrogène": "Industrial generator-set illustration",
  "Groupe électrogène industriel EMIREGENSET": "Industrial EMIREGENSET generator set",
  "Votre nom": "Your name",
  "Nom de l’entreprise": "Company name",
  "nom@entreprise.com": "name@company.com",
  "Ex. 500 kVA": "e.g. 500 kVA",
  "Application, localisation, délai, installation, contraintes techniques…": "Application, location, timeline, installation, technical constraints…",
  "Projet de groupe électrogène industriel": "Industrial generator-set project",
  "Installation industrielle de groupe électrogène": "Industrial generator-set installation",
  "Groupe électrogène pour chantier": "Generator set for construction sites",
  "Éclairage pour événement": "Event lighting",
  "Armoire électrique et intégration de contrôle": "Electrical panel and control integration",
  "Groupe électrogène pour applications professionnelles": "Generator set for professional applications",
  "Illustration technique d’un groupe électrogène": "Technical generator-set illustration",
  "Mât d’éclairage hydraulique": "Hydraulic lighting mast",
  "Solution énergétique agricole avec groupe électrogène": "Agricultural energy solution with generator set",
  "Groupe électrogène pour application agricole": "Generator set for agricultural use",
  "Armoire électrique inverseur": "Electrical transfer switchboard",
  "EMIREGENSET groupe électrogène": "EMIREGENSET generator set",
  "Solution énergétique agricole": "Agricultural energy solution"
});
  Object.assign(ATTR_AR, {
  "Groupe électrogène EMIREGENSET": "مولد كهربائي EMIREGENSET",
  "Illustration industrielle de groupe électrogène": "رسم توضيحي صناعي لمولد كهربائي",
  "Groupe électrogène industriel EMIREGENSET": "مولد كهربائي صناعي EMIREGENSET",
  "Votre nom": "اسمك",
  "Nom de l’entreprise": "اسم الشركة",
  "nom@entreprise.com": "name@company.com",
  "Ex. 500 kVA": "مثال: 500 كيلوفولت أمبير",
  "Application, localisation, délai, installation, contraintes techniques…": "التطبيق، الموقع، المدة، التركيب، والقيود التقنية…",
  "Projet de groupe électrogène industriel": "مشروع مولد كهربائي صناعي",
  "Installation industrielle de groupe électrogène": "تركيب مولد كهربائي صناعي",
  "Groupe électrogène pour chantier": "مولد كهربائي لمواقع البناء",
  "Éclairage pour événement": "إنارة للفعاليات",
  "Armoire électrique et intégration de contrôle": "خزانة كهربائية وتكامل التحكم",
  "Groupe électrogène pour applications professionnelles": "مولد كهربائي للاستخدامات المهنية",
  "Illustration technique d’un groupe électrogène": "رسم توضيحي تقني لمولد كهربائي",
  "Mât d’éclairage hydraulique": "عمود إنارة هيدروليكي",
  "Solution énergétique agricole avec groupe électrogène": "حل طاقة زراعي مع مولد كهربائي",
  "Groupe électrogène pour application agricole": "مولد كهربائي للاستخدام الزراعي",
  "Armoire électrique inverseur": "خزانة تحويل كهربائية",
  "EMIREGENSET groupe électrogène": "مولد كهربائي EMIREGENSET",
  "Solution énergétique agricole": "حل طاقة زراعي"
});

  const TITLE_MAP = {
  "EMIRE — Solutions d’énergie & groupes électrogènes": [
    "EMIRE — Energy solutions & generator sets",
    "إمير — حلول الطاقة والمولدات الكهربائية"
  ],
  "Accueil — EMIRE": [
    "Home — EMIRE",
    "الرئيسية — إمير"
  ],
  "Produits — EMIRE": [
    "Products — EMIRE",
    "المنتجات — إمير"
  ],
  "Groupes électrogènes — EMIRE": [
    "Generator sets — EMIRE",
    "المولدات الكهربائية — إمير"
  ],
  "Armoires inverseurs — EMIRE": [
    "Transfer switchboards — EMIRE",
    "خزائن التحويل — إمير"
  ],
  "Mâts d’éclairage — EMIRE": [
    "Lighting masts — EMIRE",
    "أعمدة الإنارة — إمير"
  ],
  "Groupe Agri — EMIRE": [
    "Agri generator — EMIRE",
    "المولد الزراعي — إمير"
  ],
  "À propos — EMIRE": [
    "About — EMIRE",
    "عن إمير — إمير"
  ],
  "Solutions — EMIRE": [
    "Solutions — EMIRE",
    "الحلول — إمير"
  ],
  "Réalisations — EMIRE": [
    "Projects — EMIRE",
    "المشاريع — إمير"
  ],
  "Secteurs — EMIRE": [
    "Industries — EMIRE",
    "القطاعات — إمير"
  ],
  "Ressources — EMIRE": [
    "Insights — EMIRE",
    "الموارد — إمير"
  ],
  "Contact — EMIRE": [
    "Contact — EMIRE",
    "اتصل بنا — إمير"
  ]
};
  const LANGS = { fr: 'FR', en: 'EN', ar: 'AR' };
  const I18N_STORAGE_KEY = 'emire-lang-v5';
  const EXTRA_EN = {
    "VOTRE PUISSANCE.": "YOUR POWER.",
    "NOTRE MISSION.": "OUR MISSION.",
    "Oued Smar · Alger": "Oued Smar · Algiers",
    "Hassi Ben Abdellah · Ouargla": "Hassi Ben Abdellah · Ouargla",
    "Acier galvanisé avec peinture anti-corrosion": "Galvanized steel with anti-corrosion paint",
    "Jusqu’à 1000 kVA": "Up to 1000 kVA",
    "Monophasé / Triphasé": "Single-phase / Three-phase",
    "6 à 30 mètres selon le modèle et l’usage": "6 to 30 metres depending on the model and use",
    "Hydraulique": "Hydraulic",
    "Contenu du réservoir": "Tank capacity",
    "100 Litres": "100 litres",
    "1030 Kg": "1030 kg",
    "Résistance au vent": "Wind resistance",
    "Jusqu’à 110 km/h": "Up to 110 km/h",
    "Type luminaire": "Luminaire type",
    "Dirigé": "Directional",
    "Poudre": "Powder"
  };
  const EXTRA_AR = {
    "VOTRE PUISSANCE.": "طاقتكم.",
    "NOTRE MISSION.": "مهمتنا.",
    "Oued Smar · Alger": "واد السمار · الجزائر",
    "Hassi Ben Abdellah · Ouargla": "حاسي بن عبد الله · ورقلة",
    "Acier galvanisé avec peinture anti-corrosion": "فولاذ مجلفن مع طلاء مضاد للتآكل",
    "Jusqu’à 1000 kVA": "حتى 1000 كيلوفولت أمبير",
    "Monophasé / Triphasé": "أحادي الطور / ثلاثي الطور",
    "6 à 30 mètres selon le modèle et l’usage": "من 6 إلى 30 متراً حسب الطراز والاستخدام",
    "Hydraulique": "هيدروليكي",
    "Contenu du réservoir": "سعة الخزان",
    "100 Litres": "100 لتر",
    "1030 Kg": "1030 كغ",
    "Résistance au vent": "مقاومة الرياح",
    "Jusqu’à 110 km/h": "حتى 110 كم/س",
    "Type luminaire": "نوع وحدة الإنارة",
    "Dirigé": "موجّه",
    "Poudre": "مسحوق"
  };
  const EXTRA_FR = {
    "Industry": "Industrie",
    "Power installation for a demanding industrial environment.": "Installation électrique pour un environnement industriel exigeant.",
    "A clear presentation of the generator, its electrical integration and the operating context — without compressing the story into an overlay.": "Une présentation claire du groupe, de son intégration électrique et de son contexte d’exploitation — sans comprimer le récit dans un simple bandeau superposé.",
    "Explore the sector ↗": "Découvrir le secteur ↗",
    "Construction": "Construction",
    "Reliable temporary power for large construction sites.": "Une alimentation temporaire fiable pour les grands chantiers.",
    "Power supply designed around site continuity, equipment demand and installation constraints.": "Une alimentation pensée autour de la continuité du chantier, de la demande des équipements et des contraintes d’installation.",
    "Events & temporary sites": "Événements & sites temporaires",
    "Protected, mobile generation when the installation has to move.": "Une production protégée et mobile lorsque l’installation doit se déplacer.",
    "A containerized configuration for environments where protection, mobility and dependable power matter.": "Une configuration conteneurisée pour les environnements où protection, mobilité et fiabilité de l’alimentation comptent."
  };
  const EXTRA_PROJECT_AR = {
    "Industry": "الصناعة",
    "Power installation for a demanding industrial environment.": "تركيب لتغذية كهربائية في بيئة صناعية تتطلب الاعتمادية.",
    "A clear presentation of the generator, its electrical integration and the operating context — without compressing the story into an overlay.": "عرض واضح للمولد وتكامله الكهربائي وسياق تشغيله، من دون ضغط المحتوى داخل طبقة فوق الصورة.",
    "Explore the sector ↗": "اكتشف القطاع ↗",
    "Construction": "البناء",
    "Reliable temporary power for large construction sites.": "طاقة مؤقتة موثوقة لمواقع البناء الكبرى.",
    "Power supply designed around site continuity, equipment demand and installation constraints.": "تغذية كهربائية مصممة وفق استمرارية الموقع واحتياجات المعدات وقيود التركيب.",
    "Events & temporary sites": "الفعاليات والمواقع المؤقتة",
    "Protected, mobile generation when the installation has to move.": "توليد محمي وقابل للنقل عندما يجب أن تتحرك المنظومة.",
    "A containerized configuration for environments where protection, mobility and dependable power matter.": "تكوين داخل حاوية للبيئات التي تتطلب الحماية وسهولة النقل وموثوقية التغذية."
  };
  const EXTRA_ATTR_FR = {
    "Industrial generator-set installation": "Installation industrielle de groupe électrogène",
    "Generator-set power for a construction site": "Alimentation par groupe électrogène pour chantier",
    "Containerized generator set": "Groupe électrogène conteneurisé"
  };
  const EXTRA_ATTR_AR = {
    "Industrial generator-set installation": "تركيب مولد كهربائي صناعي",
    "Generator-set power for a construction site": "تغذية موقع بناء بواسطة مولد كهربائي",
    "Containerized generator set": "مولد كهربائي داخل حاوية"
  };
  const META_MAPS = {
  "fr": {
    "EMIRE — solutions d’énergie, groupes électrogènes EMIREGENSET, travaux électriques, installation et maintenance en Algérie.": "EMIRE — energy solutions, EMIREGENSET generator sets, electrical works, installation and maintenance in Algeria.",
    "Contact EURL EMIRE : téléphone, email commercial, implantations et demande de devis.": "EURL EMIRE contact: telephone, commercial email, locations and quote request.",
    "Réalisations EMIRE : projets par secteurs, installations industrielles, construction, événements et solutions agricoles.": "EMIRE projects: sector-based work, industrial installations, construction, events and agricultural solutions.",
    "Solutions EMIRE pour groupes électrogènes, installation, maintenance, pièces de rechange et travaux électriques.": "EMIRE solutions for generator sets, installation, maintenance, spare parts and electrical works.",
    "Secteurs servis par EMIRE : industrie, santé, agriculture, construction et événements.": "Industries served by EMIRE: industry, healthcare, agriculture, construction and events.",
    "Ressources EMIRE autour des groupes électrogènes, de la maintenance et des projets électriques.": "EMIRE resources on generator sets, maintenance and electrical projects.",
    "Découvrez EURL EMIRE, son activité, son réseau et les marques de motorisation et d’alternateurs référencées.": "Discover EURL EMIRE, its activity, network and referenced engine and alternator brands.",
    "Gamme EMIREGENSET, configurations, essais et exemples de modèles publiés.": "EMIREGENSET range, configurations, tests and published model examples.",
    "Mâts d’éclairage EMIRE : applications et caractéristiques techniques.": "EMIRE lighting masts: applications and technical specifications.",
    "Solution énergétique agricole EMIRE adaptée aux besoins spécifiques des exploitations.": "EMIRE agricultural energy solution adapted to specific farm needs.",
    "Armoires inverseurs EMIRE : usages, caractéristiques techniques et applications.": "EMIRE transfer switchboards: uses, technical specifications and applications.",
    "Produits EMIRE : groupes électrogènes EMIREGENSET, armoires inverseurs, mâts d’éclairage et groupe Agri.": "EMIRE products: EMIREGENSET generator sets, transfer switchboards, lighting masts and Agri generator."
  },
  "en": {
    "EMIRE — solutions d’énergie, groupes électrogènes EMIREGENSET, travaux électriques, installation et maintenance en Algérie.": "EMIRE — energy solutions, EMIREGENSET generator sets, electrical works, installation and maintenance in Algeria.",
    "Contact EURL EMIRE : téléphone, email commercial, implantations et demande de devis.": "EURL EMIRE contact: telephone, commercial email, locations and quote request.",
    "Réalisations EMIRE : projets par secteurs, installations industrielles, construction, événements et solutions agricoles.": "EMIRE projects: sector-based work, industrial installations, construction, events and agricultural solutions.",
    "Solutions EMIRE pour groupes électrogènes, installation, maintenance, pièces de rechange et travaux électriques.": "EMIRE solutions for generator sets, installation, maintenance, spare parts and electrical works.",
    "Secteurs servis par EMIRE : industrie, santé, agriculture, construction et événements.": "Industries served by EMIRE: industry, healthcare, agriculture, construction and events.",
    "Ressources EMIRE autour des groupes électrogènes, de la maintenance et des projets électriques.": "EMIRE resources on generator sets, maintenance and electrical projects.",
    "Découvrez EURL EMIRE, son activité, son réseau et les marques de motorisation et d’alternateurs référencées.": "Discover EURL EMIRE, its activity, network and referenced engine and alternator brands.",
    "Gamme EMIREGENSET, configurations, essais et exemples de modèles publiés.": "EMIREGENSET range, configurations, tests and published model examples.",
    "Mâts d’éclairage EMIRE : applications et caractéristiques techniques.": "EMIRE lighting masts: applications and technical specifications.",
    "Solution énergétique agricole EMIRE adaptée aux besoins spécifiques des exploitations.": "EMIRE agricultural energy solution adapted to specific farm needs.",
    "Armoires inverseurs EMIRE : usages, caractéristiques techniques et applications.": "EMIRE transfer switchboards: uses, technical specifications and applications.",
    "Produits EMIRE : groupes électrogènes EMIREGENSET, armoires inverseurs, mâts d’éclairage et groupe Agri.": "EMIRE products: EMIREGENSET generator sets, transfer switchboards, lighting masts and Agri generator."
  },
  "ar": {
    "EMIRE — solutions d’énergie, groupes électrogènes EMIREGENSET, travaux électriques, installation et maintenance en Algérie.": "إمير — حلول الطاقة، مولدات EMIREGENSET، الأعمال الكهربائية والتركيب والصيانة في الجزائر.",
    "Contact EURL EMIRE : téléphone, email commercial, implantations et demande de devis.": "اتصل بـ EURL EMIRE: الهاتف والبريد التجاري والمواقع وطلب عرض السعر.",
    "Réalisations EMIRE : projets par secteurs, installations industrielles, construction, événements et solutions agricoles.": "مشاريع إمير: مشاريع حسب القطاعات ومنشآت صناعية وبناء وفعاليات وحلول زراعية.",
    "Solutions EMIRE pour groupes électrogènes, installation, maintenance, pièces de rechange et travaux électriques.": "حلول إمير للمولدات الكهربائية والتركيب والصيانة وقطع الغيار والأعمال الكهربائية.",
    "Secteurs servis par EMIRE : industrie, santé, agriculture, construction et événements.": "القطاعات التي تخدمها إمير: الصناعة والصحة والزراعة والبناء والفعاليات.",
    "Ressources EMIRE autour des groupes électrogènes, de la maintenance et des projets électriques.": "موارد إمير حول المولدات الكهربائية والصيانة والمشاريع الكهربائية.",
    "Découvrez EURL EMIRE, son activité, son réseau et les marques de motorisation et d’alternateurs référencées.": "اكتشفوا EURL EMIRE ونشاطها وشبكتها وعلامات المحركات والمولدات المرجعية لديها.",
    "Gamme EMIREGENSET, configurations, essais et exemples de modèles publiés.": "مجموعة EMIREGENSET والتكوينات والاختبارات ونماذج المنتجات المنشورة.",
    "Mâts d’éclairage EMIRE : applications et caractéristiques techniques.": "أعمدة إنارة إمير: التطبيقات والمواصفات التقنية.",
    "Solution énergétique agricole EMIRE adaptée aux besoins spécifiques des exploitations.": "حل الطاقة الزراعي من إمير والمتكيف مع الاحتياجات الخاصة للاستغلالات.",
    "Armoires inverseurs EMIRE : usages, caractéristiques techniques et applications.": "خزائن التحويل من إمير: الاستخدامات والمواصفات التقنية والتطبيقات.",
    "Produits EMIRE : groupes électrogènes EMIREGENSET, armoires inverseurs, mâts d’éclairage et groupe Agri.": "منتجات إمير: مولدات EMIREGENSET وخزائن التحويل وأعمدة الإنارة والمولد الزراعي."
  }
};
  let currentLang = 'en';
  Object.keys(META_MAPS.fr).forEach(key => { META_MAPS.fr[key] = key; });
  const dictionaries = { fr: { ...EXTRA_FR }, en: { ...EN, ...EXTRA_EN }, ar: { ...AR, ...EXTRA_AR, ...EXTRA_PROJECT_AR } };
  const attrDictionaries = { fr: { ...EXTRA_ATTR_FR }, en: { ...ATTR_EN }, ar: { ...ATTR_AR, ...EXTRA_ATTR_AR } };
  const sourceNodes = new WeakMap();
  const sourceAttrs = new WeakMap();

  const isTranslatableTextNode = (node) => {
    const parent = node?.parentElement;
    return !!parent && !['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName);
  };

  const collectOriginals = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (isTranslatableTextNode(node) && !sourceNodes.has(node)) sourceNodes.set(node, node.nodeValue);
    }
    document.querySelectorAll('[aria-label],[alt],[title],[placeholder]').forEach(el => {
      sourceAttrs.set(el, {
        'aria-label': el.getAttribute('aria-label'),
        'alt': el.getAttribute('alt'),
        'title': el.getAttribute('title'),
        'placeholder': el.getAttribute('placeholder')
      });
    });
    document.documentElement.dataset.originalTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) document.documentElement.dataset.originalDescription = meta.getAttribute('content') || '';
  };

  const translateText = (node, dict) => {
    const original = sourceNodes.get(node);
    if (typeof original !== 'string') return;
    const source = normalize(original);
    if (!source) return;
    const translated = dict[source] || source;
    const match = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
    node.nodeValue = `${match?.[1] || ''}${translated}${match?.[3] || ''}`;
  };

  const translateAttrs = (lang) => {
    const dict = attrDictionaries[lang] || {};
    document.querySelectorAll('[aria-label],[alt],[title],[placeholder]').forEach(el => {
      const originals = sourceAttrs.get(el);
      if (!originals) return;
      for (const name of Object.keys(originals)) {
        const original = originals[name];
        if (!original) continue;
        const translated = dict[original] || dictionaries[lang]?.[original] || original;
        el.setAttribute(name, translated);
      }
    });
  };

  const updateMeta = (lang) => {
    const frTitle = document.documentElement.dataset.originalTitle || document.title;
    const pair = TITLE_MAP[normalize(frTitle)];
    if (pair) document.title = lang === 'fr' ? normalize(frTitle) : pair[lang === 'ar' ? 1 : 0];
    const meta = document.querySelector('meta[name="description"]');
    const frDesc = document.documentElement.dataset.originalDescription;
    if (meta && frDesc) {
      const translated = META_MAPS[lang]?.[frDesc] || dictionaries[lang]?.[normalize(frDesc)];
      meta.setAttribute('content', translated || frDesc);
    }
  };

  const closeLanguageMenus = () => {
    document.querySelectorAll('.lang-switch.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.lang-trigger')?.setAttribute('aria-expanded','false');
    });
  };

  const setLanguage = (lang, persist = true) => {
    if (!['fr','en','ar'].includes(lang)) lang = 'en';
    currentLang = lang;
    const dict = dictionaries[lang] || {};
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body?.classList.toggle('rtl-mode', lang === 'ar');

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (isTranslatableTextNode(node)) translateText(node, dict);
    }
    translateAttrs(lang);
    updateMeta(lang);

    document.querySelectorAll('.lang-current').forEach(el => { el.textContent = LANGS[lang]; });
    document.querySelectorAll('.lang-option').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-current', active ? 'true' : 'false');
    });
    if (persist) localStorage.setItem(I18N_STORAGE_KEY, lang);
    closeLanguageMenus();
  };

  const deviceLanguage = () => {
    const candidates = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (const raw of candidates) {
      const code = String(raw).toLowerCase();
      if (code.startsWith('ar')) return 'ar';
      if (code.startsWith('en')) return 'en';
      if (code.startsWith('fr')) return 'fr';
    }
    return 'en';
  };

  const initLanguage = () => {
    collectOriginals();
    document.querySelectorAll('[data-lang-switch]').forEach(sw => {
      const trigger = sw.querySelector('.lang-trigger');
      trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = sw.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      sw.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => { e.stopPropagation(); setLanguage(btn.dataset.lang, true); });
      });
    });
    document.addEventListener('click', closeLanguageMenus);
    const saved = localStorage.getItem(I18N_STORAGE_KEY);
    setLanguage(saved || deviceLanguage(), false);
  };

  // Mobile navigation
  document.querySelectorAll('[data-menu]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const links = document.querySelector('.nav-links');
      const open = links?.classList.toggle('open');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      const menuLabels = { fr: ['Fermer le menu','Ouvrir le menu'], en: ['Close menu','Open menu'], ar: ['إغلاق القائمة','فتح القائمة'] };
      button.setAttribute('aria-label', open ? menuLabels[currentLang][0] : menuLabels[currentLang][1]);
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-header')) {
      document.querySelector('.nav-links.open')?.classList.remove('open');
      document.querySelector('[data-menu]')?.setAttribute('aria-expanded','false');
    }
  });

  const reveal = [...document.querySelectorAll('.reveal')];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) reveal.forEach(el => el.classList.add('visible'));
  else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    reveal.forEach(el => observer.observe(el));
  } else reveal.forEach(el => el.classList.add('visible'));

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('img').forEach(img => {
    const source = img.getAttribute('src') || '';
    if (source.toLowerCase().endsWith('.svg')) img.classList.add('media-illustration');
    img.addEventListener('error', () => {
      const fallback = img.dataset.fallback;
      if (fallback && img.src !== fallback) img.src = fallback;
    }, { once: true });
  });

  initLanguage();
})();

const langTrigger = document.querySelector('.lang-trigger');
const navLinks = document.querySelector('.nav-links');

function moveLanguageButton() {
    if (!langTrigger || !navLinks) return;

    if (window.innerWidth <= 360) {
        navLinks.appendChild(langTrigger);
    } else {
        const navActions = document.querySelector('.nav-actions');

        if (navActions && !navActions.contains(langTrigger)) {
            navActions.prepend(langTrigger);
        }
    }
}

moveLanguageButton();
window.addEventListener('resize', moveLanguageButton);
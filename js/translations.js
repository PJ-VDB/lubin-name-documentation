const translations = {
  en: {
    // Nav
    'nav.skip': 'Skip to main content',
    'nav.open': 'Open navigation',
    'nav.close': 'Close navigation',
    'nav.overview': 'Overview',
    'nav.statistics': 'Statistics',
    'nav.ranking': 'Ranking',
    'nav.geography': 'Geography',
    'nav.history': 'History',
    'nav.belgium': 'Belgium',
    'nav.sources': 'Sources',

    // Hero
    'hero.subtitle': 'A Traditional French Masculine First Name',
    'hero.intro': 'This document presents official statistical evidence and historical documentation for the French masculine first name <strong>Lubin</strong>. All data is sourced from government authorities in France (INSEE) and Belgium (Statbel).',
    'hero.stat1.label': 'Boys named Lubin in France since 1900',
    'hero.stat2.label': 'Boys named Lubin in France since 2000',
    'hero.stat3.label': 'Years of documented usage',
    'hero.stat4.label': 'Peak births in a single year (2012)',
    'hero.body': 'Lubin has been in continuous use for over 1,400 years, originating from Saint Lubin, a 6th-century Bishop of Chartres. The name peaked in popularity in 2012 with 245 births and remains in active use today.',

    // Statistics
    'stats.heading': 'National Statistics: France',
    'stats.intro': 'Data from INSEE (Institut national de la statistique et des études économiques), the official French national statistics institute, showing all registered births from 1900 to 2024.',
    'stats.aria': 'Line chart showing 4,160 boys named Lubin in France from 1900-2024',
    'stats.total': '<strong>Total births (1900-2024):</strong> 4,160 boys',
    'stats.peak': '<strong>Peak year:</strong> 2012 with 245 births',
    'stats.gender': '<strong>Gender:</strong> Exclusively masculine (0 girls)',
    'stats.source': '<strong>Source:</strong> INSEE Fichier des prénoms — Édition 2024. <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">insee.fr/fr/statistiques/8595130</a> — <a href="https://www.insee.fr/fr/statistiques/3532172" target="_blank" rel="noopener">Verify with INSEE\'s interactive tool →</a> All counts are rounded to the nearest 5 by INSEE; totals are therefore approximate.',

    // Ranking
    'ranking.heading': "Popularity Ranking Among French Boys' Names",
    'ranking.intro': "Lubin's ranking relative to all other boys' names in France demonstrates its consistent usage as a commonly-chosen first name.",
    'ranking.peak.heading': 'Peak Popularity',
    'ranking.peak.2012': "<strong>2012:</strong> Ranked <strong>282nd</strong> out of 6,823 boys' names (top 4.1%)",
    'ranking.peak.2011': '<strong>2011:</strong> Ranked 284th out of 6,601 names (top 4.3%)',
    'ranking.peak.2010': '<strong>2010:</strong> Ranked 303rd out of 6,377 names (top 4.8%)',
    'ranking.recent.heading': 'Recent Years',
    'ranking.recent.2024': '<strong>2024:</strong> Ranked 620th out of 6,859 names (top 9.0%)',
    'ranking.recent.2023': '<strong>2023:</strong> Ranked 523rd out of 7,047 names (top 7.4%)',
    'ranking.recent.2022': '<strong>2022:</strong> Ranked 405th out of 7,264 names (top 5.6%)',
    'ranking.context.p1': "From 2002 to 2022, Lubin consistently ranked in the <strong>top 300-500</strong> among all boys' names in France. During its peak years (2010-2015), it placed between <strong>rank 282 and 327</strong> out of over 6,000-7,000 unique names given each year.",
    'ranking.context.p2': "This ranking places Lubin firmly among commonly-used French boys' names, comparable to other established traditional names in everyday use across France.",
    'ranking.verify': 'Search all 6,823 names from 2012 and verify Lubin\'s rank yourself →',
    'ranking.source': '<strong>Source:</strong> INSEE Fichier des prénoms — Édition 2024 (Parquet format with complete name rankings). <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">insee.fr/fr/statistiques/8595130</a>',

    // Geography
    'geo.heading': 'Geographic Distribution in France',
    'geo.intro': 'The map below shows the cumulative total of boys named Lubin in each French département from 1900 to 2024. The name is used throughout France, with notable concentrations in Normandy, the Nord region, Brittany, and the Loire Valley.',
    'geo.note': '<strong>Note:</strong> The map shows births attributed to metropolitan French départements in the INSEE Fichier des prénoms (3,170 births). INSEE rounds all counts to the nearest multiple of 5; names with 1–2 births in a given year round to zero and do not appear in the data. A further 985 births from the national total of 4,160 are not attributed to any metropolitan département — these may include births registered in French overseas territories, by French consulates abroad, or with unspecified département codes in the INSEE data.',
    'geo.top.heading': 'Top Départements by Total Births (1900-2024)',
    'geo.dept1': '<strong>Seine-Maritime (76):</strong> 200 births — Normandy, includes Rouen and Le Havre',
    'geo.dept2': '<strong>Nord (59):</strong> 190 births — Northern France, includes Lille',
    'geo.dept3': '<strong>Ille-et-Vilaine (35):</strong> 145 births — Brittany, includes Rennes',
    'geo.dept4': '<strong>Maine-et-Loire (49):</strong> 140 births — Loire Valley, includes Angers',
    'geo.dept5': '<strong>Loire-Atlantique (44):</strong> 135 births — Loire Valley, includes Nantes',
    'geo.source': '<strong>Source:</strong> INSEE Fichier des prénoms (departmental data), 2024. <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">https://www.insee.fr/fr/statistiques/8595130</a>',

    // Belgium
    'belgium.heading': 'Usage in Belgium',
    'belgium.intro': 'Lubin is also used as a masculine first name in Belgium, as documented by Statbel, the Belgian Federal Statistics authority.',
    'belgium.summary': 'Statbel reports "5+" for privacy protection when a name is given to 5 or more children in a given year. Lubin appears in official records for multiple years, confirming cross-border usage in French-speaking regions.',
    'belgium.source': '<strong>Source:</strong> Statbel — Belgian Federal Statistics. <a href="https://statbel.fgov.be/en/themes/population/family-names-and-first-names/first-names-boys-and-girls" target="_blank" rel="noopener">statbel.fgov.be</a>',

    // Timeline
    'timeline.heading': 'Historical Usage Timeline in France',
    'timeline.intro': "This timeline documents two categories of evidence for the name Lubin across fourteen centuries. First, notable historical figures who bore the name: a 6th-century Bishop of Chartres, a 17th-century painter whose works hang in the Louvre, and a 19th-century illustrator whose works are held at the Musée d'Orsay. Second, appearances of the name in canonical French literature and culture: a Renaissance poem by Clément Marot, a comedy by Molière performed at Versailles, a pastoral tale by Marmontel adapted into operas across Europe, and the traditional folk song <em>Au clair de la lune</em> sung in French schools for centuries. Together, these establish Lubin as a name with deep, continuous roots in French cultural and civic life.",

    // Sources
    'sources.heading': 'References',
    'sources.intro': 'Statistical data is sourced exclusively from official government authorities. Historical and cultural references include government institutions, national museums, encyclopedias, and digital archives. <span class="official-badge">OFFICIAL</span> indicates government or official institutional sources.',

    // Reference items (full innerHTML of each <li>)
    'ref1': '<span class="official-badge">OFFICIAL</span> <strong>INSEE (Institut national de la statistique et des études économiques).</strong> <span class="source-explanation">INSEE is the French government\'s official national statistics agency, responsible for collecting and publishing demographic, economic, and social data for France. It operates under the Ministry of Economy and Finance.</span> <em>Fichier des prénoms depuis 1900 — Édition 2024.</em> Compiled from official civil birth records (état civil) maintained by French municipalities. Available at: <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">https://www.insee.fr/fr/statistiques/8595130</a> (Accessed May 2026)',

    'ref2': '<span class="official-badge">OFFICIAL</span> <strong>Statbel (Belgian Federal Statistics Authority).</strong> <span class="source-explanation">Statbel is the Belgian government\'s official federal statistics office, responsible for collecting and publishing demographic data for Belgium. It operates under the Belgian Federal Public Service Economy.</span> <em>First names for boys and girls in Belgium.</em> Official birth records from Belgian municipalities. Available at: <a href="https://statbel.fgov.be/en/themes/population/family-names-and-first-names/first-names-boys-and-girls" target="_blank" rel="noopener">https://statbel.fgov.be/en/themes/population</a> (Accessed May 2026)',

    'ref3': '<strong>Nominis — French Catholic Church.</strong> <em>Saint Lubin (Leobinus), Bishop of Chartres.</em> Official Catholic hagiographic database. Available at: <a href="https://nominis.cef.fr/contenus/saint/8224/Saint-Lubin.html" target="_blank" rel="noopener">https://nominis.cef.fr/contenus/saint/8224/Saint-Lubin.html</a> (Accessed May 2026)',

    'ref4': '<span class="official-badge">OFFICIAL</span> <strong>Musée du Louvre.</strong> <span class="source-explanation">The Louvre is a French government-owned national museum in Paris, the world\'s most-visited museum, housing France\'s national art collections including works from the Middle Ages to 1848.</span> <em>Lubin Baugin — Collections des arts graphiques.</em> French National Museum permanent collection. Available at: <a href="https://arts-graphiques.louvre.fr/detail/artistes/0/168-BAUGIN-Lubin" target="_blank" rel="noopener">https://arts-graphiques.louvre.fr/detail/artistes/0/168-BAUGIN-Lubin</a> (Accessed May 2026)',

    'ref5': '<strong>Encyclopædia Universalis.</strong> <em>Lubin Baugin.</em> French academic encyclopedia. Available at: <a href="https://www.universalis.fr/encyclopedie/lubin-baugin/" target="_blank" rel="noopener">https://www.universalis.fr/encyclopedie/lubin-baugin/</a> (Accessed May 2026)',

    'ref6': '<span class="official-badge">OFFICIAL</span> <strong>Musée d\'Orsay.</strong> <span class="source-explanation">The Musée d\'Orsay is a French government-owned national museum in Paris, housing France\'s national collection of art from 1848 to 1914, including major Impressionist and Post-Impressionist works.</span> <em>Lubin de Beauvais — Artist Catalog.</em> French National Museum collection. Available at: <a href="https://www.musee-orsay.fr/en/ressources/artists-personalities-catalog/lubin-de-beauvais-2577" target="_blank" rel="noopener">https://www.musee-orsay.fr/en/ressources/artists-personalities-catalog/lubin-de-beauvais-2577</a> (Accessed May 2026)',

    'ref7': '<span class="official-badge">OFFICIAL</span> <strong>Bibliothèque nationale de France — Catalogue général.</strong> <em>Lubin de Beauvais — Notice d\'autorité.</em> Official BnF authority record identifying Lubin de Beauvais (1873–1917) as painter, watercolourist, draftsman, caricaturist, and illustrator, with linked bibliographic records of his published works. Available at: <a href="https://catalogue.bnf.fr/ark:/12148/cb149106333" target="_blank" rel="noopener">https://catalogue.bnf.fr/ark:/12148/cb149106333</a> (Accessed May 2026)',

    'ref8': '<strong>Wikipédia.</strong> <em>Marmontel, Jean-François. "Annette et Lubin" (1761).</em> French Wikipedia article documenting Marmontel\'s pastoral tale featuring Lubin as the male protagonist, adapted into multiple operas and theatrical productions throughout Europe. Available at: <a href="https://fr.wikipedia.org/wiki/Annette_et_Lubin" target="_blank" rel="noopener">https://fr.wikipedia.org/wiki/Annette_et_Lubin</a> (Accessed May 2026)',

    'ref9': '<strong>Wikipédia.</strong> <em>"Au clair de la lune" — Chanson traditionnelle française.</em> French Wikipedia article documenting the traditional folk song, including the full lyrics in which Lubin appears by name as a character: <em>"Au clair de la lune, L\'aimable Lubin / Frappe chez la brune"</em>. Available at: <a href="https://en.wikipedia.org/wiki/Au_clair_de_la_lune" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Au_clair_de_la_lune</a> (Accessed May 2026)',

    'ref10': '<strong>Molière (Jean-Baptiste Poquelin).</strong> <em>George Dandin, ou le Mari confondu (1668).</em> Comedy premiered at Versailles, 18 July 1668. Features a character named Lubin, a naive peasant servant who plays a central role in the plot. Available at: <a href="https://en.wikipedia.org/wiki/George_Dandin_ou_le_Mari_confondu" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/George_Dandin_ou_le_Mari_confondu</a> (Accessed May 2026)',

    'ref11': '<strong>Marot, Clément (c. 1496–1544).</strong> <em>"Frère Lubin" — Satirical poem, c. 1520.</em> Famous French Renaissance poem establishing Lubin as a recognizable stock character in French literary culture — a roguish, hypocritical monk. The name Lubin became associated with this archetype in French theater and literature. Available at: <a href="https://fr.wikisource.org/wiki/L%E2%80%99Adolescence_Cl%C3%A9mentine/Ballades" target="_blank" rel="noopener">https://fr.wikisource.org/wiki/L\'Adolescence_Clémentine/Ballades</a> (Accessed May 2026)',

    // Footer
    'footer.purpose': 'This documentation was prepared for administrative purposes to demonstrate the established usage of Lubin as a traditional French masculine first name.',
    'footer.meta': 'Last updated: May 2026 | Data sources: INSEE (France) and Statbel (Belgium)',

    // Charts
    'chart.national.dataset': 'Boys named Lubin',
    'chart.national.xaxis': 'Year',
    'chart.national.yaxis': 'Number of Births',
    'chart.national.tooltip.year': 'Year',
    'chart.national.tooltip.single': 'boy named Lubin',
    'chart.national.tooltip.plural': 'boys named Lubin',
    'chart.belgium.dataset': 'Boys named Lubin (5+)',
    'chart.belgium.xaxis': 'Number of Boys (5+ reported)',
    'chart.belgium.tooltip.year': 'Year',
    'chart.belgium.tooltip.label': '5 or more boys named Lubin',
    'chart.belgium.tooltip.afterLabel': '(Exact count not disclosed for privacy)',

    // Map
    'map.legend.title': 'Total births',
    'map.tooltip.single': 'boy named Lubin',
    'map.tooltip.plural': 'boys named Lubin',
    'map.tooltip.since': '(total since 1900)',
    'map.tooltip.unknown': 'Unknown',
    'map.tooltip.na': 'N/A',
    'map.unavailable.title': 'Map temporarily unavailable',
    'map.unavailable.body': 'Please refer to the geographic summary below for regional distribution data.',

    // Rankings 2012 page
    'rankings.back': 'Back to overview',
    'rankings.heading': '2012 Rankings: All French Boys\' Names',
    'rankings.intro': 'Complete list of all 6,823 boys\' names given in France in 2012, ranked by number of births. Data from INSEE\'s official birth register. Search any name to see where it placed.',
    'rankings.chip.total': '6,823 names in 2012',
    'rankings.chip.lubin': 'Lubin: rank #282',
    'rankings.chip.percentile': 'Top 4.1% of all names',
    'rankings.search.placeholder': 'Search any French name…',
    'rankings.search.hint': 'Type a name to see where it ranked. Showing names around Lubin by default.',
    'rankings.col.rank': 'Rank',
    'rankings.col.name': 'Name',
    'rankings.col.births': 'Births (2012)',
    'rankings.status.default': 'Showing ranks {from}–{to} · Lubin highlighted at rank {rank} of {total}',
    'rankings.status.found': '<strong>{name}</strong> · rank {rank} of {total} in 2012',
    'rankings.status.notfound': 'No results for "{query}"',
    'rankings.status.multi': '{count} names matching "{query}"',
    'rankings.notfound': 'No name found.',
    'rankings.source': '<strong>Source:</strong> INSEE Fichier des prénoms — Édition 2024 (Parquet format). <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">insee.fr/fr/statistiques/8595130</a> All birth counts are rounded to the nearest 5 by INSEE.',
  },

  da: {
    // Nav
    'nav.skip': 'Spring til hovedindhold',
    'nav.open': 'Åbn navigation',
    'nav.close': 'Luk navigation',
    'nav.overview': 'Oversigt',
    'nav.statistics': 'Statistik',
    'nav.ranking': 'Rangordning',
    'nav.geography': 'Geografi',
    'nav.history': 'Historie',
    'nav.belgium': 'Belgien',
    'nav.sources': 'Kilder',

    // Hero
    'hero.subtitle': 'Et traditionelt fransk maskulint fornavn',
    'hero.intro': 'Dette dokument præsenterer officiel statistisk evidens og historisk dokumentation for det franske maskuline fornavn <strong>Lubin</strong>. Alle data er hentet fra offentlige myndigheder i Frankrig (INSEE) og Belgien (Statbel).',
    'hero.stat1.label': 'Drenge ved navn Lubin i Frankrig siden 1900',
    'hero.stat2.label': 'Drenge ved navn Lubin i Frankrig siden 2000',
    'hero.stat3.label': 'År med dokumenteret brug',
    'hero.stat4.label': 'Flest fødsler på ét år (2012)',
    'hero.body': 'Lubin har været i kontinuerlig brug i over 1.400 år med oprindelse i Sankt Lubin, en biskop af Chartres fra det 6. århundrede. Navnets popularitet toppede i 2012 med 245 fødsler og bruges fortsat aktivt i dag.',

    // Statistics
    'stats.heading': 'Nationale statistikker: Frankrig',
    'stats.intro': 'Data fra INSEE (Institut national de la statistique et des études économiques), det officielle franske nationale statistikinstitut, der viser alle registrerede fødsler fra 1900 til 2024.',
    'stats.aria': 'Linjediagram over 4.160 drenge ved navn Lubin i Frankrig fra 1900-2024',
    'stats.total': '<strong>Samlede fødsler (1900-2024):</strong> 4.160 drenge',
    'stats.peak': '<strong>Toppår:</strong> 2012 med 245 fødsler',
    'stats.gender': '<strong>Køn:</strong> Udelukkende maskulint (0 piger)',
    'stats.source': '<strong>Kilde:</strong> INSEE Fichier des prénoms — Édition 2024. <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">insee.fr/fr/statistiques/8595130</a> — <a href="https://www.insee.fr/fr/statistiques/3532172" target="_blank" rel="noopener">Verificér med INSEEs interaktive værktøj →</a> Alle tal er afrundet til nærmeste 5 af INSEE; totaler er derfor omtrentlige.',

    // Ranking
    'ranking.heading': 'Popularitetsrangering blandt franske drengenavne',
    'ranking.intro': 'Lubins rangering i forhold til alle andre drengenavne i Frankrig viser dets konsistente brug som et almindeligt valgt fornavn.',
    'ranking.peak.heading': 'Toppopularitet',
    'ranking.peak.2012': '<strong>2012:</strong> Rangeret <strong>nr. 282</strong> ud af 6.823 drengenavne (top 4,1%)',
    'ranking.peak.2011': '<strong>2011:</strong> Rangeret nr. 284 ud af 6.601 navne (top 4,3%)',
    'ranking.peak.2010': '<strong>2010:</strong> Rangeret nr. 303 ud af 6.377 navne (top 4,8%)',
    'ranking.recent.heading': 'Seneste år',
    'ranking.recent.2024': '<strong>2024:</strong> Rangeret nr. 620 ud af 6.859 navne (top 9,0%)',
    'ranking.recent.2023': '<strong>2023:</strong> Rangeret nr. 523 ud af 7.047 navne (top 7,4%)',
    'ranking.recent.2022': '<strong>2022:</strong> Rangeret nr. 405 ud af 7.264 navne (top 5,6%)',
    'ranking.context.p1': 'Fra 2002 til 2022 rangerede Lubin konsistent i <strong>top 300-500</strong> blandt alle drengenavne i Frankrig. I toppårene (2010-2015) lå det mellem <strong>nr. 282 og 327</strong> ud af over 6.000-7.000 unikke navne givet hvert år.',
    'ranking.context.p2': 'Denne rangering placerer Lubin solidt blandt almindeligt brugte franske drengenavne, sammenlignelig med andre etablerede traditionelle navne i daglig brug i hele Frankrig.',
    'ranking.verify': 'Søg alle 6.823 navne fra 2012 og verificér selv Lubins rangering →',
    'ranking.source': '<strong>Kilde:</strong> INSEE Fichier des prénoms — Édition 2024 (Parquet-format med komplette navnerangeringer). <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">insee.fr/fr/statistiques/8595130</a>',

    // Geography
    'geo.heading': 'Geografisk fordeling i Frankrig',
    'geo.intro': 'Kortet nedenfor viser det samlede antal drenge ved navn Lubin i hvert fransk département fra 1900 til 2024. Navnet bruges i hele Frankrig med særlige koncentrationer i Normandiet, Nord-regionen, Bretagne og Loiredalen.',
    'geo.note': '<strong>Bemærk:</strong> Kortet viser fødsler tilskrevet metropolitanske franske départementer i INSEE Fichier des prénoms (3.170 fødsler). INSEE afrunder alle tal til nærmeste multiplum af 5; navne med 1–2 fødsler i et givet år afrundes til nul og optræder ikke i dataene. Yderligere 985 fødsler fra det nationale total på 4.160 er ikke tilskrevet noget metropolitansk département — disse kan inkludere fødsler registreret i franske oversøiske territorier, ved franske konsulater i udlandet eller med uspecificerede département-koder i INSEE-dataene.',
    'geo.top.heading': 'Top-départementer efter samlede fødsler (1900-2024)',
    'geo.dept1': '<strong>Seine-Maritime (76):</strong> 200 fødsler — Normandiet, inkl. Rouen og Le Havre',
    'geo.dept2': '<strong>Nord (59):</strong> 190 fødsler — Nordfrankrig, inkl. Lille',
    'geo.dept3': '<strong>Ille-et-Vilaine (35):</strong> 145 fødsler — Bretagne, inkl. Rennes',
    'geo.dept4': '<strong>Maine-et-Loire (49):</strong> 140 fødsler — Loiredalen, inkl. Angers',
    'geo.dept5': '<strong>Loire-Atlantique (44):</strong> 135 fødsler — Loiredalen, inkl. Nantes',
    'geo.source': '<strong>Kilde:</strong> INSEE Fichier des prénoms (departmentale data), 2024. <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">https://www.insee.fr/fr/statistiques/8595130</a>',

    // Belgium
    'belgium.heading': 'Brug i Belgien',
    'belgium.intro': 'Lubin bruges også som maskulint fornavn i Belgien, dokumenteret af Statbel, den belgiske føderale statistikmyndighed.',
    'belgium.summary': 'Statbel rapporterer "5+" som privatlivsbeskyttelse, når et navn gives til 5 eller flere børn i et givet år. Lubin optræder i officielle registre for flere år, hvilket bekræfter grænseoverskridende brug i fransktalende regioner.',
    'belgium.source': '<strong>Kilde:</strong> Statbel — Belgisk føderal statistik. <a href="https://statbel.fgov.be/en/themes/population/family-names-and-first-names/first-names-boys-and-girls" target="_blank" rel="noopener">statbel.fgov.be</a>',

    // Timeline
    'timeline.heading': 'Historisk tidslinje for brug i Frankrig',
    'timeline.intro': "Denne tidslinje dokumenterer to kategorier af evidens for navnet Lubin over fjorten århundreder. For det første fremtrædende historiske personer, der bar navnet: en biskop af Chartres fra det 6. århundrede, en maler fra det 17. århundrede hvis værker hænger i Louvre, og en illustrator fra det 19. århundrede hvis værker opbevares på Musée d'Orsay. For det andet forekomster af navnet i kanonisk fransk litteratur og kultur: et renæssancedigt af Clément Marot, en komedie af Molière opført på Versailles, en pastoral fortælling af Marmontel tilpasset til operaer i hele Europa, og den traditionelle folkesang <em>Au clair de la lune</em> sunget i franske skoler i århundreder. Tilsammen etablerer disse Lubin som et navn med dybe, kontinuerlige rødder i det franske kulturelle og borgerlige liv.",

    // Sources
    'sources.heading': 'Referencer',
    'sources.intro': 'Statistiske data hentes udelukkende fra officielle statslige myndigheder. Historiske og kulturelle referencer inkluderer statslige institutioner, nationalmuseer, encyklopædier og digitale arkiver. <span class="official-badge">OFFICIEL</span> angiver statslige eller officielle institutionelle kilder.',

    // Reference items
    'ref1': '<span class="official-badge">OFFICIEL</span> <strong>INSEE (Institut national de la statistique et des études économiques).</strong> <span class="source-explanation">INSEE er den franske regerings officielle nationale statistikagentur, ansvarlig for indsamling og offentliggørelse af demografiske, økonomiske og sociale data for Frankrig. Det er underlagt Økonomi- og Finansministeriet.</span> <em>Fichier des prénoms depuis 1900 — Édition 2024.</em> Kompileret fra officielle civile fødselsregistre (état civil) vedligeholdt af franske kommuner. Tilgængelig på: <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">https://www.insee.fr/fr/statistiques/8595130</a> (Tilgået maj 2026)',

    'ref2': '<span class="official-badge">OFFICIEL</span> <strong>Statbel (Belgian Federal Statistics Authority).</strong> <span class="source-explanation">Statbel er den belgiske regerings officielle føderale statistikkontor, ansvarlig for indsamling og offentliggørelse af demografiske data for Belgien. Det er underlagt det belgiske føderale økonomiministerium.</span> <em>First names for boys and girls in Belgium.</em> Officielle fødselsregistre fra belgiske kommuner. Tilgængelig på: <a href="https://statbel.fgov.be/en/themes/population/family-names-and-first-names/first-names-boys-and-girls" target="_blank" rel="noopener">https://statbel.fgov.be/en/themes/population</a> (Tilgået maj 2026)',

    'ref3': '<strong>Nominis — Fransk Katolsk Kirke.</strong> <em>Saint Lubin (Leobinus), Bishop of Chartres.</em> Officiel katolsk hagiografisk database. Tilgængelig på: <a href="https://nominis.cef.fr/contenus/saint/8224/Saint-Lubin.html" target="_blank" rel="noopener">https://nominis.cef.fr/contenus/saint/8224/Saint-Lubin.html</a> (Tilgået maj 2026)',

    'ref4': '<span class="official-badge">OFFICIEL</span> <strong>Musée du Louvre.</strong> <span class="source-explanation">Louvre er et fransk statsligt nationalmuseum i Paris, verdens mest besøgte museum, der huser Frankrigs nationale kunstsamlinger inklusiv værker fra middelalderen til 1848.</span> <em>Lubin Baugin — Collections des arts graphiques.</em> Permanent samling på det franske nationalmuseum. Tilgængelig på: <a href="https://arts-graphiques.louvre.fr/detail/artistes/0/168-BAUGIN-Lubin" target="_blank" rel="noopener">https://arts-graphiques.louvre.fr/detail/artistes/0/168-BAUGIN-Lubin</a> (Tilgået maj 2026)',

    'ref5': '<strong>Encyclopædia Universalis.</strong> <em>Lubin Baugin.</em> Fransk akademisk encyklopædi. Tilgængelig på: <a href="https://www.universalis.fr/encyclopedie/lubin-baugin/" target="_blank" rel="noopener">https://www.universalis.fr/encyclopedie/lubin-baugin/</a> (Tilgået maj 2026)',

    'ref6': '<span class="official-badge">OFFICIEL</span> <strong>Musée d\'Orsay.</strong> <span class="source-explanation">Musée d\'Orsay er et fransk statsligt nationalmuseum i Paris, der huser Frankrigs nationale kunstsamling fra 1848 til 1914, herunder store impressionistiske og postimpressionistiske værker.</span> <em>Lubin de Beauvais — Artist Catalog.</em> Samling på det franske nationalmuseum. Tilgængelig på: <a href="https://www.musee-orsay.fr/en/ressources/artists-personalities-catalog/lubin-de-beauvais-2577" target="_blank" rel="noopener">https://www.musee-orsay.fr/en/ressources/artists-personalities-catalog/lubin-de-beauvais-2577</a> (Tilgået maj 2026)',

    'ref7': '<span class="official-badge">OFFICIEL</span> <strong>Bibliothèque nationale de France — Catalogue général.</strong> <em>Lubin de Beauvais — Notice d\'autorité.</em> Officiel BnF-autoritetspost, der identificerer Lubin de Beauvais (1873–1917) som maler, akvarelmaler, tegner, karikaturist og illustrator med tilknyttede bibliografiske poster over hans udgivne værker. Tilgængelig på: <a href="https://catalogue.bnf.fr/ark:/12148/cb149106333" target="_blank" rel="noopener">https://catalogue.bnf.fr/ark:/12148/cb149106333</a> (Tilgået maj 2026)',

    'ref8': '<strong>Wikipédia.</strong> <em>Marmontel, Jean-François. "Annette et Lubin" (1761).</em> Fransk Wikipedia-artikel der dokumenterer Marmontels pastorale fortælling med Lubin som den mandlige protagonist, tilpasset til flere operaer og teaterproduktioner i hele Europa. Tilgængelig på: <a href="https://fr.wikipedia.org/wiki/Annette_et_Lubin" target="_blank" rel="noopener">https://fr.wikipedia.org/wiki/Annette_et_Lubin</a> (Tilgået maj 2026)',

    'ref9': '<strong>Wikipédia.</strong> <em>"Au clair de la lune" — Traditionel fransk folkesang.</em> Fransk Wikipedia-artikel der dokumenterer den traditionelle folkesang, herunder de fulde sangtekster hvori Lubin optræder ved navn som figur: <em>"Au clair de la lune, L\'aimable Lubin / Frappe chez la brune"</em>. Tilgængelig på: <a href="https://en.wikipedia.org/wiki/Au_clair_de_la_lune" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Au_clair_de_la_lune</a> (Tilgået maj 2026)',

    'ref10': '<strong>Molière (Jean-Baptiste Poquelin).</strong> <em>George Dandin, ou le Mari confondu (1668).</em> Komedie uropført på Versailles den 18. juli 1668. Indeholder en figur ved navn Lubin, en naiv bondekned-tjener, der spiller en central rolle i handlingen. Tilgængelig på: <a href="https://en.wikipedia.org/wiki/George_Dandin_ou_le_Mari_confondu" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/George_Dandin_ou_le_Mari_confondu</a> (Tilgået maj 2026)',

    'ref11': '<strong>Marot, Clément (ca. 1496–1544).</strong> <em>"Frère Lubin" — Satirisk digt, ca. 1520.</em> Berømt fransk renæssancedigt der etablerer Lubin som en genkendelig standardfigur i den franske kultur — en skurkagtig, hyklerisk munk. Navnet Lubin blev forbundet med denne arketyp i fransk teater og litteratur. Tilgængelig på: <a href="https://fr.wikisource.org/wiki/L%E2%80%99Adolescence_Cl%C3%A9mentine/Ballades" target="_blank" rel="noopener">https://fr.wikisource.org/wiki/L\'Adolescence_Clémentine/Ballades</a> (Tilgået maj 2026)',

    // Footer
    'footer.purpose': 'Denne dokumentation er udarbejdet til administrative formål for at demonstrere den etablerede brug af Lubin som et traditionelt fransk maskulint fornavn.',
    'footer.meta': 'Sidst opdateret: maj 2026 | Datakilder: INSEE (Frankrig) og Statbel (Belgien)',

    // Charts
    'chart.national.dataset': 'Drenge ved navn Lubin',
    'chart.national.xaxis': 'År',
    'chart.national.yaxis': 'Antal fødsler',
    'chart.national.tooltip.year': 'År',
    'chart.national.tooltip.single': 'dreng ved navn Lubin',
    'chart.national.tooltip.plural': 'drenge ved navn Lubin',
    'chart.belgium.dataset': 'Drenge ved navn Lubin (5+)',
    'chart.belgium.xaxis': 'Antal drenge (5+ rapporteret)',
    'chart.belgium.tooltip.year': 'År',
    'chart.belgium.tooltip.label': '5 eller flere drenge ved navn Lubin',
    'chart.belgium.tooltip.afterLabel': '(Præcist antal oplyses ikke af privatlivshensyn)',

    // Map
    'map.legend.title': 'Samlede fødsler',
    'map.tooltip.single': 'dreng ved navn Lubin',
    'map.tooltip.plural': 'drenge ved navn Lubin',
    'map.tooltip.since': '(samlet siden 1900)',
    'map.tooltip.unknown': 'Ukendt',
    'map.tooltip.na': 'N/A',
    'map.unavailable.title': 'Kortet er midlertidigt utilgængeligt',
    'map.unavailable.body': 'Se den geografiske oversigt nedenfor for data om regional fordeling.',

    // Rankings 2012 page
    'rankings.back': 'Tilbage til oversigt',
    'rankings.heading': 'Rangordning 2012: Alle franske drengenavne',
    'rankings.intro': 'Komplet liste over alle 6.823 drengenavne givet i Frankrig i 2012, rangeret efter antal fødsler. Data fra INSEEs officielle fødselsregister. Søg efter et navn for at se, hvor det placerede sig.',
    'rankings.chip.total': '6.823 navne i 2012',
    'rankings.chip.lubin': 'Lubin: nr. 282',
    'rankings.chip.percentile': 'Top 4,1% af alle navne',
    'rankings.search.placeholder': 'Søg efter et fransk navn…',
    'rankings.search.hint': 'Skriv et navn for at se dets rangering. Viser som standard navne omkring Lubin.',
    'rankings.col.rank': 'Rangering',
    'rankings.col.name': 'Navn',
    'rankings.col.births': 'Fødsler (2012)',
    'rankings.status.default': 'Viser nr. {from}–{to} · Lubin fremhævet på nr. {rank} ud af {total}',
    'rankings.status.found': '<strong>{name}</strong> · nr. {rank} ud af {total} i 2012',
    'rankings.status.notfound': 'Ingen resultater for "{query}"',
    'rankings.status.multi': '{count} navne matcher "{query}"',
    'rankings.notfound': 'Intet navn fundet.',
    'rankings.source': '<strong>Kilde:</strong> INSEE Fichier des prénoms — Édition 2024 (Parquet-format). <a href="https://www.insee.fr/fr/statistiques/8595130" target="_blank" rel="noopener">insee.fr/fr/statistiques/8595130</a> Alle fødselstal er afrundet til nærmeste 5 af INSEE.',
  }
};

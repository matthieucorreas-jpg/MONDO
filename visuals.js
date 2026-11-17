/* MONDO v2 — illustrations originales, vectorielles et entièrement hors ligne. */
'use strict';
const MONDO_VISUALS = (()=>{
  const col={o:['#141c42','#5138b5','#a3d6fe','#7f65ed'],c:['#29203c','#a7496c','#ffd4a8','#ec855b'],e:['#102f47','#0c887c','#acf0d8','#47bb9a']};
  const E=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const R=(x,y,w,h,fill,rad=18,stroke='none',sw=1)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
  const T=(x,y,text,size=26,color='#fff',weight=700,anchor='start')=>`<text x="${x}" y="${y}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${E(text)}</text>`;
  const C=(x,y,r,fill)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
  const P=(d,stroke,width=5,fill='none',dash='')=>`<path d="${d}" stroke="${stroke}" stroke-width="${width}" fill="${fill}" stroke-linecap="round" stroke-linejoin="round" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
  const A=(x,y,x2,y2,color='#fff',width=6)=>P(`M ${x} ${y} L ${x2} ${y2}`,color,width)+P(`M ${x2-12} ${y2-9} L ${x2} ${y2} L ${x2-12} ${y2+9}`,color,width);
  const svg=(k,body)=>{const [dark,primary,light,accent]=col[k];return `<svg viewBox="0 0 720 390" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><defs><linearGradient id="bg${k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${dark}"/><stop offset="1" stop-color="${primary}"/></linearGradient><linearGradient id="fade${k}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${light}"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>${R(0,0,720,390,`url(#bg${k})`,26)}${C(680,-28,160,'rgba(255,255,255,0.067)')}${C(45,390,150,'rgba(255,255,255,0.031)')}<g>${body}</g></svg>`};
  const pill=(x,y,w,label,k='o')=>R(x,y,w,43,'rgba(255,255,255,0.122)',21)+T(x+18,y+29,label,21,'#ffffff',750);
  const box=(x,y,w,h,title,sub,k='o',color='rgba(255,255,255,0.086)')=>R(x,y,w,h,color,20,'rgba(255,255,255,0.145)',1.5)+T(x+19,y+43,title,28,'#fff',820)+(sub?T(x+19,y+75,sub,18,'#e6e3f7',500):'');
  const flow=(k,title,labels,note)=>{const w=150,gap=20,x=22,y=128;let b=T(30,58,title,33)+pill(30,76,225,note,k);labels.forEach((lab,i)=>{const xx=x+i*(w+gap);b+=R(xx,y,w,146,'rgba(255,255,255,0.090)',19,'rgba(255,255,255,0.125)',1)+T(xx+75,y+58,lab[0],24,'#fff',800,'middle')+T(xx+75,y+92,lab[1],21,'#e0e4f3',600,'middle')+(i<labels.length-1?A(xx+w+2,y+72,xx+w+gap-3,y+72,'#bceeea',4):'')});return svg(k,b)};
  const cards=(k,title,items,footer)=>{let b=T(32,58,title,31); const width=204;items.forEach((it,i)=>{const x=28+i*230;b+=R(x,112,width,194,'rgba(255,255,255,0.090)',23,'rgba(255,255,255,0.141)',1)+T(x+20,165,it[0],41,'#fff',850)+T(x+20,208,it[1],25,'#fff',760)+T(x+20,242,it[2],19,'#dee1f6',500)});b+=T(38,350,footer,21,'rgba(255,255,255,0.808)',560);return svg(k,b)};
  const milestones=(k,title,items)=>{let b=T(30,56,title,32)+P('M 72 202 L 644 202','#ffe0bc',6); items.forEach((it,i)=>{const x=87+i*182;b+=C(x,202,13,'#fff')+C(x,202,7,col[k][3])+T(x,164,it[0],35,'#fff',860,'middle')+T(x,242,it[1],21,'#fff',680,'middle')+T(x,273,it[2],18,'#f0e0d7',500,'middle')});return svg(k,b)};
  const split=(k,title,left,right,footer)=>{let b=T(30,58,title,32)+R(28,101,321,220,'rgba(255,255,255,0.102)',24,'rgba(255,255,255,0.133)',1)+R(370,101,321,220,'rgba(255,255,255,0.102)',24,'rgba(255,255,255,0.133)',1);[left,right].forEach((x,i)=>{const x0=i?392:50;b+=T(x0,149,x[0],22,'#ffebd0',760)+T(x0,204,x[1],33,'#fff',830)+T(x0,246,x[2],22,'#e1e6f2',500)+T(x0,276,x[3],19,'#e1e6f2',500)});b+=T(34,362,footer,20,'rgba(255,255,255,0.749)',550);return svg(k,b)};
  // Ormuz : géographie et flux
  // Cartes géographiques pédagogiques originales. Littoraux simplifiés, pas de prétention à l'échelle.
  // Le dessin place l'Iran au nord, la péninsule omanaise de Musandam au sud,
  // le golfe Persique à l'ouest et le golfe d'Oman vers l'est.
  const oHero=svg('o',
    R(0,0,720,390,'#104c72',24)
    +P('M 0 0 H 720 V 151 C 665 131 608 145 560 138 C 513 130 483 151 442 148 C 397 144 358 119 316 129 C 259 151 237 155 192 149 C 112 140 73 155 0 145 Z','#d0a877',2,'#f1d9b2')
    +P('M 0 298 C 104 284 164 284 245 267 C 298 258 355 267 392 242 C 415 226 422 193 441 175 C 457 161 474 177 473 194 C 478 218 452 254 464 273 C 486 299 544 311 720 297 V 390 H 0 Z','#cda47b',2,'#f6dfb9')
    +P('M 36 251 C 156 260 234 225 335 224 S 430 225 476 222 S 597 225 675 253','#ffce75',7,'none','12 14')
    +A(607,235,652,247,'#fff9e3',5)
    +C(447,216,28,'rgba(255,209,115,.17)')+C(447,216,16,'#ffce75')+C(447,216,7,'#123b5f')
    +R(23,18,272,44,'#152d49',22)+T(41,47,'LE DÉTROIT D’ORMUZ',20,'#ffffff',870)
    +T(573,76,'IRAN',33,'#49314a',880,'middle')
    +T(62,212,'GOLFE PERSIQUE',22,'#e9f5ff',740)
    +T(525,203,'GOLFE D’OMAN',22,'#e9f5ff',740)
    +T(63,343,'ÉMIRATS ARABES UNIS',20,'#5c4354',790)
    +T(539,340,'OMAN',29,'#584253',870)
    +T(478,168,'Musandam',18,'#eaf7ff',780)
    +P('M 445 218 L 406 270','#fff9e3',3)
    +R(273,274,215,46,'#152d49',21)+T(289,304,'PASSAGE ÉTROIT',21,'#ffffff',820)
    +T(24,375,'Croquis simplifié · non à l’échelle',16,'#65495a',600));
  const oMap=svg('o',
    R(0,0,720,390,'#104c72',24)
    +T(28,49,'ZOOM SUR LE PASSAGE',29,'#ffffff',850)
    +P('M 0 76 H 720 V 166 C 666 154 632 147 588 156 C 528 169 496 148 451 164 C 409 180 373 185 333 173 C 260 152 202 183 140 175 C 78 166 49 175 0 166 Z','#d5ac76',2,'#f1d8b0')
    +P('M 0 297 C 108 272 205 296 312 284 C 363 279 395 258 413 222 C 430 195 445 174 458 181 C 479 193 463 228 457 253 C 449 278 510 308 720 290 V 390 H 0 Z','#cda477',2,'#f3ddbb')
    +P('M 40 237 C 159 236 289 229 404 235 S 560 245 684 246','#fbd17e',8,'none','12 15')
    +A(612,246,652,246,'#fef5db',6)
    +C(449,218,34,'rgba(255,208,112,.22)')+C(449,218,14,'#ffd781')
    +T(485,118,'IRAN',29,'#4f3649',850)
    +T(42,210,'Golfe Persique',21,'#eaf7ff',700)
    +T(545,216,'Golfe d’Oman',21,'#eaf7ff',700)
    +P('M 452 217 L 354 124','#fff',3)
    +R(115,77,239,50,'#112942',22)+T(134,111,'DÉTROIT D’ORMUZ',23,'#fff',850)
    +T(260,345,'ÉMIRATS ARABES UNIS',19,'#60495a',710,'middle')
    +T(550,329,'OMAN',25,'#614756',850)+T(550,354,'Musandam',17,'#614756',710)
    +T(32,375,'Itinéraire maritime indicatif · carte non à l’échelle',16,'#65495a',600));
  const oVolume=cards('o','FLUX D’ÉNERGIE • ANNÉE 2025',[['~20 M','barils / jour','Pétrole et produits'],['~20 %','du GNL mondial','Commerce maritime'],['Une','route vitale','pour de grands pays']], 'AIE · ordre de grandeur 2025, non actualisé en direct');
  const oRoutes=flow('o','UNE ROUTE, DES MARCHÉS',[['Golfe','Persique'],['Détroit','d’Ormuz'],['Océan','Indien'],['Acheteurs','mondiaux']],'Routes maritimes');
  const oAlt=split('o','POURQUOI PAS UN DÉTOUR ?',['ROUTE PRINCIPALE','Navires','Flux massifs','Dépend du détroit'],['AUTRES ROUTES','Pipelines','Capacités limitées','Produits non équivalents'],'Une solution de repli ne remplace pas tous les volumes.');
  const oChain=flow('o','COMMENT UN CHOC SE PROPAGE',[['Menace','maritime'],['Assurance','plus chère'],['Risque','sur l’offre'],['Prix','plus volatils']],'Même sans blocus');
  const oDecision=cards('o','DÉCIDER SANS DEVINER',[['01','FAIT','Que sait-on ?'],['02','SCÉNARIO','Que pourrait-il arriver ?'],['03','ACTION','Qu’ajuster ?']], 'Séparer information, hypothèse et action.');
  const oRecap=flow('o','LA LOGIQUE EN 4 TEMPS',[['Géographie','étroite'],['Énergie','mondiale'],['Risque','local'],['Effet','global']],'À retenir');
  // Constantinople : schémas historiques
  const cHero=svg('c',T(30,61,'CONSTANTINOPLE · 1453',29,'#ffdcc3',800)+P('M 0 305 L 720 305 L 720 390 L 0 390 Z','none',0,'#84c9e2')+Array.from({length:9},(_,i)=>R(155+i*51,197,39,109,'#ffe3c1',3,'#bc7591',3)).join('')+R(133,175,494,31,'#ffe3c1',5)+Array.from({length:12},(_,i)=>R(142+i*40,158,25,23,'#ffe3c1',0)).join('')+R(328,110,81,89,'#d8acd5',7)+P('M 310 117 Q 368 40 426 117 Z','none',0,'#fed7b5')+R(357,85,21,30,'#fff0d4',3)+T(38,356,'La ville aux remparts légendaires',24,'#fff',650));
  const cMap=svg('c',T(35,51,'PLAN SIMPLIFIÉ',28)+P('M 15 156 L 720 156','none',0,'#70b7d4')+P('M 15 317 L 720 317','none',0,'#70b7d4')+P('M 173 174 L 580 174 L 640 264 L 572 302 L 175 302 Z','none',0,'#efd2b4')+P('M 170 174 L 170 303','#85436a',13)+P('M 175 175 L 550 175','#85436a',9)+P('M 642 198 L 642 388','#b2eaf4',20)+T(220,251,'CONSTANTINOPLE',28,'#673c53',900)+T(45,133,'CORNE D’OR',24)+T(449,355,'MER DE MARMARA',23)+T(564,145,'BOSPHORE',20)+T(51,279,'MURS',23,'#fff')+T(49,304,'TERRESTRES',18,'#fff'));
  const cTime=milestones('c','LA CHUTE VIENT DE LOIN',[['1204','Prise par','les croisés'],['1261','Retour des','Byzantins'],['1451','Mehmed II','sultan'],['1453','Conquête','ottomane']]);
  const cSiege=svg('c',T(30,56,'UN SIÈGE D’USURE',32)+R(370,182,300,124,'#ffe0bd',10)+Array.from({length:8},(_,i)=>R(384+i*33,160,23,27,'#ffe0bd',0)).join('')+P('M 365 160 L 365 317','#9b5371',14)+R(82,253,167,34,'#5e3c65',5)+C(109,297,29,'#eec7a7')+C(223,297,29,'#eec7a7')+P('M 236 250 L 392 167','#ffe3c1',22)+P('M 263 233 L 394 181','#8b4b57',5,'none','15 11')+T(55,122,'ARTILLERIE',24)+T(410,122,'FORTIFICATIONS',24)+T(50,358,'La technologie agit avec la stratégie et la logistique.',20,'#f7e6e1',600));
  const cHorn=svg('c',T(30,56,'DÉTOURNER UN BLOCAGE',31)+P('M 0 226 Q 200 154 365 222 T 720 221','#83bfe4',112)+P('M 352 160 L 353 286','#ffdc9e',12,'none','10 14')+A(125,243,284,245,'#fff',7)+P('M 428 166 Q 516 70 640 153','#ffdbb7',9,'none','11 17')+T(35,106,'Mer',25)+T(350,140,'CHAÎNE',21,'#ffe7bf',750)+T(466,104,'Portage',25)+T(462,130,'des navires',21)+T(38,350,'Contourner plutôt que forcer un passage.',22,'#fff',650));
  const cLegacy=split('c','1453 : RUPTURE ET CONTINUITÉ',['AVANT','Empire','byzantin','Héritage romain'],['APRÈS','Capitale','ottomane','Reconstruction'],'Le pouvoir change ; les lieux et les échanges évoluent.');
  const cPeriod=svg('c',T(35,62,'UNE DATE N’EST PAS UNE FRONTIÈRE',30)+P('M 65 234 L 655 234','#fff',7)+C(332,234,25,'#ffe2b8')+T(332,217,'1453',40,'#fff',850,'middle')+T(115,286,'Transformations',23,'#fff',700)+T(117,317,'avant',23,'#f2d2cf',500)+T(506,286,'Transformations',23,'#fff',700)+T(508,317,'après',23,'#f2d2cf',500)+P('M 105 230 Q 240 168 327 230 T 628 225','#ffc3a8',5,'none','10 13'));
  const cRecap=flow('c','POURQUOI LA VILLE TOMBE',[['Empire','affaibli'],['Position','stratégique'],['Siège','organisé'],['Pouvoir','renversé']],'4 idées clés');
  // Economie : canaux, simulations, prix
  const eHero=svg('e',T(35,58,'BANQUE CENTRALE',26,'#aef5e1',790)+T(35,113,'Le taux',52)+T(35,165,'comme frein',52)+C(562,195,118,'rgba(255,255,255,0.129)')+C(562,195,90,'rgba(255,255,255,0.082)')+P('M 475 245 A 100 100 0 1 1 649 246','#b7ffe6',17)+P('M 562 195 L 615 132','#fff',12)+C(562,195,16,'#fff')+T(461,355,'Pression sur les prix',23,'#d9fdf2',670));
  const eTransmission=flow('e','DU TAUX AUX DÉCISIONS',[['BCE','taux directeur'],['Banques','financement'],['Ménages','crédit / dépôts'],['Entreprises','investissement']],'Canal indirect');
  const eDecisions=cards('e','LES ARBITRAGES CHANGENT',[['↗','Emprunter','Coût plus élevé'],['↗','Épargner','Plus attractif'],['↘','Dépenser','Projets reportés']], 'Effets moyens, variables selon les situations.');
  const eCredit=svg('e',T(34,54,'200 000 € · 20 ANS',31)+R(85,182,200,107,'#84b8ff',14)+R(375,116,200,173,'#7fe1c4',14)+T(188,158,'1 012 €',37,'#fff',860,'middle')+T(475,92,'1 320 €',37,'#fff',860,'middle')+T(185,323,'TAUX 2 %',24,'#fff',800,'middle')+T(475,323,'TAUX 5 %',24,'#fff',800,'middle')+T(35,366,'Mensualités approximatives, hors frais et assurance',20,'#e3f6f6',550));
  const eChain=flow('e','TRANSMISSION MONÉTAIRE',[['Taux','en hausse'],['Crédit','plus cher'],['Demande','plus faible'],['Inflation','modérée']],'Pas instantané');
  const ePrices=svg('e',T(30,56,'DÉSINFLATION ≠ DÉFLATION',29)+P('M 100 298 L 624 298','rgba(255,255,255,0.659)',5)+R(115,177,115,121,'#8ca6ed',8)+R(301,132,115,166,'#75c9ec',8)+R(487,111,115,187,'#94ead4',8)+T(172,154,'100',34,'#fff',900,'middle')+T(357,109,'106',34,'#fff',900,'middle')+T(546,88,'108,12',33,'#fff',900,'middle')+T(171,328,'DÉPART',22,'#fff',750,'middle')+T(358,328,'+ 6 %',22,'#fff',750,'middle')+T(545,328,'+ 2 %',22,'#fff',750,'middle')+T(35,370,'L’indice monte toujours : il monte seulement moins vite.',19,'#e4fffa',550));
  const eDelay=milestones('e','UNE TRANSMISSION GRADUELLE',[['01','Décision','de la BCE'],['02','Nouveaux','crédits'],['03','Choix de','dépenses'],['04','Impact','sur les prix']]);
  const eRecap=flow('e','L’IDÉE EN QUATRE ÉTAPES',[['Taux','directeur'],['Conditions','de crédit'],['Activité','économique'],['Prix','moins tendus']],'À mémoriser');
  return {
    'o-hero':oHero,'o-map':oMap,'o-volume':oVolume,'o-routes':oRoutes,'o-alternatives':oAlt,'o-chain':oChain,'o-decision':oDecision,'o-recap':oRecap,
    'c-hero':cHero,'c-map':cMap,'c-timeline':cTime,'c-siege':cSiege,'c-horn':cHorn,'c-legacy':cLegacy,'c-period':cPeriod,'c-recap':cRecap,
    'e-hero':eHero,'e-transmission':eTransmission,'e-decisions':eDecisions,'e-credit':eCredit,'e-chain':eChain,'e-prices':ePrices,'e-delay':eDelay,'e-recap':eRecap
  };
})();

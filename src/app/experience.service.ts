import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  
  experiences=[
    {"id":1, 
    "organisme":"CIAMT", 
    "periode":"Depuis avril 2019",
    "logo":"/assets/ciamt_logo.png", 
    "poste":"Consultant .NET & Xamarin Forms",
    "contexte":"Fondé en 1953, le CIAMT, Centre Inter-entreprises et Artisanal de santé au travail, est une association à but non lucratif (loi 1901) agréée par le Ministère du Travail pour assurer sa mission à Paris et en Île de France. Il est administré par les membres du Conseil d'Administration composé de représentants employeurs et de représentants salariés d'entreprises adhérentes au service [https://www.ciamt.org/qui-sommes-nous/]. Ils ont instauré auparavant une application mobile nommée e-TimeSanté pour la gestion des fiches d'entreprises assurée par les intervenants. L'ancienne application a déclenché de multiples bogues quant à la synchronisation des données. De ce fait, je m'exerce actuellement dans un projet de migration de l'ancienne application mobile e-TimeSanté vers une nouvelle application que l'on a nommée eTS2. Je gère une équipe qui se charge d'assurer la migration tout en faisant des dailies afin de s'assurer du bon déroulement des tâches. Un système de gestions des tickets a été mis en place afin de faire le suivi des tickets et leur résolution. Un Team Foundation Server (TFS) a été mis en place également pour l'enregistrement du code source mais aussi le suivi des processus de test."
    
    
    , 
    "missions":["Etudier l’existant auprès du client en organisant des séances d’audit pour contourner tous les aspects du système d’information qu’utilise CIAMT",

    "Détecter les anomalies de l’application mobile existante en procédant à des simulations et des workshops",
    
    "Remédier à des bugs fonctionnels de l’application Web en back-office faite avec WebForms",
    
    "Échanger avec le client par email et par téléphone pour remédier à ses soucis fonctionnels et techniques",
    
    "Concevoir, développer, tester et mettre en place l’application mobile eTS2 à la disposition du client pour être exploitée",
    
    "Se déplacer chez le client dans trois missions de courte durée pour exposer l’état d’avancement de l’application mobile et négocier ses fonctionnalités aussi bien sur le plan fonctionnel que sur le plan ergonomique",
    
    "Résoudre les tickets postés par les utilisateurs de l’application et archiver une nouvelle version APK expédiée à CIAMT",
    
    "Communiquer avec le nouvel hébergeur de CIAMT pour mettre en place nos solutions (Web & mobile)"], 
    "environnement_technique_fonctionnel":[


      "L’application mobile eTS2 est faite dans le cadre d’une migration avec la technologie Microsoft Xamarin Forms tout en optant pour l’Environnement de Développement Intégré (EDI) Microsoft Visual Studio 2017",

      "On a également utilisé la technologie ASP.NET Core Web API pour la consommation des données depuis la Base de Données (BD) dont le Système de Gestion de Base de Données (SGBD) est MySQL.",
      
      "L'application mobile eTS2 prévoit deux modes à savoir le mode OnLine et le mode OffLine. Ce dernier a été assuré en utilisant akavache.sqlite3 et ce pour stocker les données (provenant de/allant à) la BD localement sur le périphérique (téléphone, tablette, etc). L'application réalisée avec la technologie Xamarin Forms est multiplate-forme et fonctionne aussi bien sur Androïde que sur iOS.",
      
      "Les bugs ont été résolus quant l’application du BackOffice faite avec la technologie de WebForms. Les bugs sont essentiellement d’ordre fonctionnel (confectionner un modèle de Fiche d’Entreprise (FE), en générer des FE, etc). Des interventions ont eu aussi lieu au niveau de la BD pour ajuster quelques erreurs dues à de fausses manipulations des users dans l’interface Web et ce via MySQL Workbech 6.3 CE.",
      
      "Résoudre un problème majeur quant à l’exécution des macros sous Microsoft Office 365 et ce dans les templates que génèrent les intervenants de CIAMT depuis l’application Web",
      
      "Assurer la migration de l’application Web vers le nouveau serveur de CIAMT équipé de Microsoft Windows Server 2016 R2 et ce en la publiant sur IIS depuis l’ancien serveur doté de Windows Server 2008 R2.",
      
      "S’occuper de la sécurité lors de la publication et ce en cryptant les données via des algorithmes de hachage et d’encryptage (MD5, SHA, etc) avant de parvenir à accéder aux schémas des bases de données depuis le fichier de configuration (web.config).",
      
      "Assurer la migration de la BD MySQL en procédant à des dumps de l’ancien serveur vers le nouveau serveur et en exécutant des scripts SQL tout en configurant les paramètres de connexion en spécifiant le port et le hostname.",
      
      "Publier sur l’IIS du nouveau serveur la solution ASP.NET Core de Web API à consommer par l’application mobile.",
      
      "Archiver sur Google Play Store la solution mobile APK afin d’être téléchargée, installée puis utilisée par les utilisateurs de CIAMT.",
      
      "Remédier aux tickets édités par le client via la plateforme JIRA tout en spécifiant les solutions retenues et la solution technique adoptée pour y parvenir."

    ]
    },
    
    {"id":2, 
    "organisme":"SIMAC", 
    "periode":"Octobre 2018 à avril 2019",
    "logo":"/assets/simac_logo.png", 
    "poste":"Tech Lead",
    "contexte":"SIMAC investit depuis 35 ans dans le domaine des solutions informatiques pour offrir des solutions évolutives adaptées sur mesure aux besoins spécifiques des administrations publiques et des entreprises de toutes tailles (PME-PMI-MGE). S’adressant à tous les secteurs d’activité : Fonctions publiques, banques et assurances, informatique et Télécoms, commerce et distribution,etc [http://www.simac.tn/].", 
    "missions":[

      "La mission consiste essentiellement en la migration d’un progiciel de PRH (nommé OpenPRH) de l’environnement Delphi vers une application web multi-bases et multilingues, réalisée en ASP .NET MVC et ce au profit du gouvernement de la République Démocratique du Congo (RDC). On énumère ci-dessous les principales tâches réalisées :",
      "Développer le Front-End et le Back-End des modules Evaluation des Compétences, Missions, Prêts, Paramétrage des Décisions et Paramétrage des Grilles.",
      "Encadrer des juniors pour intégrer des diagrammes graphiques en utilisant Chart.js dans ASP.NET et notamment OpenPRH.",
      "Rédiger des documents de conception pour identifier les règles de gestion des modules énumérés précédemment.",
      "Tests et validation",
      "Contribuer à la formation des professionnels Congolais sur l’application."

    ], 
    "environnement_technique_fonctionnel":[

      "ASP .NET Core MVC, C#, Angular 6/7, Entity Framework, LINQ, HTML5, CSS3,",
      "Bootstrap 4, TypeScript, Web API, Visual Studio 2015, Oracle, Toad, Git, Scrum",
      
      "Gestion RH (Paie/Carrière/Compétences)",
      "Encadrement de ressources/ Gestion de Projet"

    ]
    },
    
    
    {"id":3, 
    "organisme":"Cabinet d'avocat", 
    "periode":"Janvier 2018 à septembre 2018",
    "logo":"/assets/cabinet_avocat_logo.jpeg", 
    "poste":"Tech Lead",
    "contexte":"Un cabinet d'avocat a détecté la nécessité d'automatiser les tâches manuelles des affaires judiciaires et ce on optant pour un système informatique permettant la gestion du cabinet notamment les dossiers des clients ainsi que leurs affaires déposées dans les différents tribunaux.", 
    "missions":[

      "La mission a consisté enssentiellement en la conception et la réalisation d’une application de gestion d’un cabinet d’avocat dont les principales tâches effectuées sont énumérées ci-dessous :"+
      "Concevoir l’application et tracer les diagrammes UML",
      "Préparer un cahier de charges et spécifier les besoins fonctionnels et non fonctionnels",
      "Faire une charte graphique répondant aux besoins du client",
      "Réaliser une application desktop pour la gestion d’un cabinet d’avocat",
      "Assurer la gestion électronique des pièces judiciaires des affaires des clients dans le cabinet"

    ], 
    "environnement_technique_fonctionnel":[

      "WPF, Windows, Microsoft Visual Studio 2012, XAML, MVVM, C#, linq,",
      "EntityFramewok",
      "Adobe Acrobat, Microsoft Office PowerPoint, Microsoft Office Word,",
      "PowerAMC Designer"
    ]
    },
    
    {"id":4, 
    "organisme":"Laboratoires de Recherche", 
    "periode":"Mars 2017 à décembre 2017",
    "logo":"/assets/labo_recherche_logo.png", 
    "poste":"Consultant Fullstack",
    "contexte":"Le contexte général dans lequel a été fait ce travail est la recherche scientifique dans le domaine médical. L'objet de cette mission était de contribuer à la recherche au profit de la communauté scientifique et sa promotion.", 
    "missions":[

      "La mission consiste en la réalisation d’un outil de classification des pathologies relatives aux cordes vocales, dont les principales tâches réalisées sont données ci-après :",
      "Concevoir l’application, tracer les diagrammes et le maquettage.",
      "Développer l’écran de suivi des signaux",
      "Développer l’écran d’évaluation des états",
      "Gestion des rapports médicaux",
      "Tests Unitaires"
    ], 
    "environnement_technique_fonctionnel":[
      "WPF, WCF, MVVM, XAML, Visual Studio 2012, SQL Server2012, TFS, Scrum",

      "Outil d’aide à la décision",
      "Suivi et évaluation médicaux"

    ]
    },
    
    {"id":5, 
    "organisme":"État de la République Démocratique du Congo (RDC)", 
    "periode":"Septembre 2016 à février 2017",
    "logo":"/assets/rdc_logo.png", 
    "poste":"Développeur Mobile",
    "contexte":"Parallèlement avec l'application Web OpenPRH précédemment décrite, le gouvernement Congolais a détecté un besoin pour l'implémentation d'une application mobile sous forme d'un portail dont se servent les fonctionnaires de l'État faisant partie du Ministère de la fonction publique à la RDC.", 
    "missions":[

      "L'application consiste en la réalisation d’une application mobile multiplate-forme du portail du fonctionnaire de l’État au Congo.",
      "Analyser les besoins fonctionnels et non fonctionnels de l’application.",
      "Développer les différents modules applicatifs ainsi que le module de sécurité.",
      "Encadrer un consultant junior",
      "Rédaction d’un document descriptif ainsi qu’un manuel d’utilisation dont se servent les utilisateurs finaux."
    ], 
    "environnement_technique_fonctionnel":[

      "Xamarin Forms, XAML, Entity Framework, LINQ, Web API 2, Visual Studio 2015, Oracle, Toad, Android, iOS, HUAWEI Y7 Prime 2018.",
      "Encadrement de ressources / Gestion de Projet"
    ]
    },
    
    {"id":6, 
    "organisme":"Hertz", 
    "periode":"Novembre 2015 à août 2016",
    "logo":"/assets/hertz_logo.png", 
    "poste":"Développeur .NET",
    "contexte":"L'agence de location de voitures avant besoin d'informatiser son système en le rendant plus autonome mais aussi d'automatiser certaines tâches qui se faisaient auparavant manuellement.", 
    "missions":[
      "Cette mission consiste en la conception et la réalisation d’une application de gestion de location de voitures au sein d’une agence. Les principales tâches réalisées sont énumérées ci-après :",
      "Concevoir l’application et tracer des diagrammes UML",
      "Préparer un cahier de charges et spécifier les besoins fonctionnels et non fonctionnels",
      "Faire une charte graphique répondant aux besoins du client et ses attentes",
      "Réaliser une application web pour la gestion de location de voitures au sein de l'agence"
    ], 
    "environnement_technique_fonctionnel":[

      "WebForms, Windows, Microsoft Visual Studio 2012, HTML, CSS, C#, linq, EntityFramewok",

      "Adobe Acrobat, Microsoft Office PowerPoint, Microsoft Office Word, PowerAMC Designer"
    ]
    },
    
    {"id":7, 
    "organisme":"Banque Nationale Agricole (BNA)", 
    "periode":"Décembre 2014 à octobre 2015",
    "logo":"/assets/bna_logo.png", 
    "poste":"Consultant Fullstack",
    "contexte":"La mission consiste en la réalisation d’un outil de supervision des données agricoles au sein d'une banque étatique à savoir la BNA. Les tâches réalisées lors de cette mission dont énumérées ci-dessous :", 
    "missions":[

    "Concevoir l’application, tracer les diagrammes et faire le maquettage.",
    "Assurer la gestion de planning",
    "assurer la gestion de rapports statistiques",
    "assurer la gestion du board",
    "Tests Unitaires"
    ], 
    "environnement_technique_fonctionnel":[
      "WPF, WCF, MVVM, XAML, Visual Studio 2012, SQL Server2012, TFS, Scrum",

      "Aide à la décision",
      "Statistiques"
    ]
    },
    
    {"id":8, 
    "organisme":"Vistaprint", 
    "periode":"Mars 2014 à novembre 2014",
    "logo":"/assets/vistaprint_logo.png", 
    "poste":"Consultant Fullstack",
    "contexte":"La mission consiste en la réalisation d’un outil de gestion « Board Entreprise » dont les principales tâches qui s'y intègrent sont les suivantes :", 
    "missions":[
      "Concevoir l’application, tracer les diagrammes et le assurer maquettage.",
      "Développer l’écran de mailing",
      "Développer le module de réunion",
      "développer le module de génération des contacts & des cartes de visite",
      "Tests Unitaires"
    ], 
    "environnement_technique_fonctionnel":[
      "WPF, WCF, MVVM, XAML, Visual Studio 2012, SQL Server2012, TFS, Scrum",
      "Workflow"
    ]
    },
    
    {"id":9, 
    "organisme":"Institut Supérieur de Gestion de Tunis", 
    "periode":"Septembre 2010 à mars 2014",
    "logo":"/assets/isg_logo.png", 
    "poste":"Coach, Enseignant Expert - CDD - Tunis - Tunisie",
    "contexte":"J'ai assuré, en tant que formateur expert, des modules destinés aux étudiants de différents niveaux. Les matières enseignées avaient pour objectif de permettre à l'apprenant d'acquérir des connaissances approfondies en algorithmique, en logique mais aussi en matière d'outils informatiques appliqués à la gestion. J'ai animé également des clubs et ce en coachant des étudiants en leur apprenant les techniques de \"Problem Solving\". Je me suis exercé quant aux grands acteurs du Cloud Computing (AWS et Azure) en exploitant leurs services et les diffuser aux futurs développeurs/testeurs.", 
    "missions":[

      "Assurer les modules d'Algorithmique et Structures de Données (ASD), Atelier de Programmation (AP) et Computer Science Programming (CSP) aux étudiants de la première année de Licence Fondamentale en Informatique de Gestion (LFIG).",
      "Assurer les modules de \"Virtualisation et Cloud Computing\" et \"Administration Systèmes\" aux étudiants de Cycle d'Ingénieurs en Génie Logiciel.",
      "Assurer les modules de \"Virtualisation et Cloud Computing\" et \"Administration Systèmes\" aux étudiants de Cycle d'Ingénieurs en Génie Logiciel.",
      "Participer dans le concours ACM TCPC en tant que coach et la qualification à l’ACM ACPC.",
      "Participer dans le concours ACM ACPC en tant que coach.",
      "Assurer la formation en Angular (front-end) et les REST API (back-end) pour les étudiants de la première année de Master Professionnel en Sécurité des Systèmes Informatiques (MPSSI).",
      "Assurer la formation en Développement Web pour les étudiants de la première année de Master Professionnel en Marketing Connecté et Communication Digitale (MCCD)."

    ], 
    "environnement_technique_fonctionnel":[

      "Les plateformes de Online Judging tels que A2 Online Judge (https://www.a2oj.com/), Sphere Online Judge (https://www.spoj.com/), Codeforces (https://codeforces.com/), UVa Online Judge (https://onlinejudge.org/)",
      "Le Club de ISG Problem Solving Club où des workshops de coaching s'organisent régulièrement pour améliorer les compétences des \"Problem Solvers\" en matière de résolution des problèmes.",
      "Amazon Web Services (AWS) accessible via rosettaHub pour pouvoir entraîner les futurs ingénieurs à s'exercer par rapport aux services de AWS notamment S3, EC2, IAM, etc.",
      "Azure Cloud de Microsoft via des comptes DreamSpark exploitables par les apprenants afin de pouvoir publier leurs solutions sur le Cloud mais aussi se familiariser avec les autres services tels App Services, SQL DataBases, etc.",
      "Le concours de programmation collégiale Tunisienne ACM est un concours organisé chaque année sous l'égide de l'ACM (Association for Computing Machinery)",
      "Arab Collegiate Programming Contest (ACPC) est un tour de qualification pour le ACM International Collegiate Programming Contest (ICPC)"
    ]
    },
    
    
    
    
    
    ];
  constructor() { }
}

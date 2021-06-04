const papers = JSON.parse(`
[
 {
  "title": "A global metagenomic map of urban microbiomes and antimicrobial resistance",
  "url": "https://doi.org/10.1016/j.cell.2021.05.002",
  "year": "2021",
  "journal": "Cell",
  "authors": "Danko, David; Bezdan, Daniela; Afshin, Evan E; ... Mason, Chris",
  "show": true,
  "selected": true,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Characterization of the public transit air microbiome and resistome reveals geographical specificity",
  "url": "https://doi.org/10.1186/s40168-021-01044-7",
  "year": "2021",
  "journal": "Microbiome",
  "authors": "Leung, M H Y; Tong, X; B\u00f8ifot, K O; ... Lee, P K H",
  "show": true,
  "selected": true,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "A comprehensive metagenomics framework to characterize organisms relevant for planetary protection",
  "url": "",
  "year": "2021",
  "journal": "Microbiome",
  "authors": "Danko, David C.; Sierra, Maria A.; Benardini, James N.; ... Mason, Christopher E.",
  "show": true,
  "selected": true,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Shotgun transcriptome, spatial omics, and isothermal profiling of SARS-CoV-2 infection reveals unique host responses, viral diversification, and drug interactions",
  "url": "https://doi.org/10.1038/s41467-021-21361-7",
  "year": "2021",
  "journal": "Nature Communications",
  "authors": "Butler, Daniel; Mozsary, Christopher; Meydan, Cem; ... Mason, Christopher E",
  "show": true,
  "selected": true,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Illuminating Genetic Mysteries of the Dead Sea Scrolls",
  "url": "",
  "year": "2020",
  "journal": "Cell",
  "authors": "Anava, Sarit; Neuhof, Moran; Gingold, Hila; ... Rechavi, Oded",
  "show": true,
  "selected": true,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Minerva: An alignment- and reference-free approach to deconvolve Linked-Reads for metagenomics",
  "url": "",
  "year": "2019",
  "journal": "Genome Research",
  "authors": "Danko, David C; Meleshko, Dmitry; Bezdan, Daniela; ... Hajirasouliha, Iman",
  "show": true,
  "selected": true,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Entropy-Scaling Search of Massive Biological Data",
  "url": "http://arxiv.org/abs/1503.05638",
  "year": "2015",
  "journal": "Cell Systems",
  "authors": "Yu, Y. William; Daniels, Noah M.; Danko, David Christian; Berger, Bonnie",
  "show": true,
  "selected": true,
  "firstauthor": false,
  "preprint": false
 },


 {
  "title": "Origin Sample Prediction and Spatial Modeling of Antimicrobial Resistance in Metagenomic Sequencing Data",
  "url": "https://www.frontiersin.org/article/10.3389/fgene.2021.642991",
  "year": "2021",
  "journal": "Frontiers in Genetics",
  "authors": "Zhelyazkova, Maya; Yordanova, Roumyana; Mihaylov, Iliyan; ... Vassilev, Dimitar",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Efficacy of Daily Intake of Dried Cranberry 500 mg in Women with Overactive Bladder: A Randomized, Double-Blind, Placebo Controlled Study",
  "url": "",
  "year": "2021",
  "journal": "The Journal of urology",
  "authors": "Cho, Ahra; Eidelberg, Andrew; Butler, Daniel J; ... Chughtai, Bilal",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "The Microbiomes of Seven Lichen Genera Reveal Host Specificity, a Reduced Core Community and Potential as Source of Antimicrobials",
  "url": "",
  "year": "2020",
  "journal": "Frontiers in Microbiology",
  "authors": "Sierra, Maria A; Danko, David C; Sandoval, Tito A; ... Zambrano, Maria Mercedes",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Progress Towards Standardizing Metagenomics: Applying Metagenomic Reference Material to Develop Reproducible Microbial Lysis Methods with Minimum Bias",
  "url": "",
  "year": "2020",
  "journal": "Journal of biomolecular techniques : JBT",
  "authors": "Sasada, Ryan; Weinstein, Michael; Danko, David; ... Mason, Christopher",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "A synthesis of bacterial and archaeal phenotypic trait data",
  "url": "",
  "year": "2020",
  "journal": "Scientific Data",
  "authors": "Madin, Joshua S; Nielsen, Daniel A; Brbic, Maria; ... Westoby, Mark",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Obesity and ethnicity alter gene expression in skin",
  "url": "",
  "year": "2020",
  "journal": "Scientific Reports",
  "authors": "Walker, Jeanne M; Garcet, Sandra; Aleman, Jose O; ... Holt, Peter R",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "The microbe directory: An annotated, searchable inventory of microbes' characteristics",
  "url": "",
  "year": "2018",
  "journal": "Gates Open Research",
  "authors": "Shaaban, Heba; Westfall, David A; Mohammad, Rawhi; ... Mason, Christopher E",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Comprehensive benchmarking and ensemble approaches for metagenomic classifiers",
  "url": "",
  "year": "2017",
  "journal": "Genome Biology",
  "authors": "McIntyre, Alexa B.R.; Ounit, Rachid; Afshinnekoo, Ebrahim; ... Mason, Christopher E.",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },



 {
  "title": "Systemic Tissue and Cellular Disruption from SARS-CoV-2 Infection revealed in COVID-19 Autopsies and Spatial Omics Tissue Maps",
  "url": "https://www.biorxiv.org/content/early/2021/03/09/2021.03.08.434433",
  "year": "2021",
  "journal": "bioRxiv",
  "authors": "Park, Jiwoon; Foox, Jonathan; Hether, Tyler; ... Mason, Christopher E",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": true
 },
 {
  "title": "Genetic and Immunological Evidence for Microbial Transfer Between the International Space Station and an Astronaut",
  "url": "https://www.biorxiv.org/content/early/2020/12/02/2020.11.10.376954",
  "year": "2020",
  "journal": "bioRxiv",
  "authors": "Danko, David C; Singh, Nitin; Butler, Daniel J; ... Mason, Christopher E",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": true
 },
 {
  "title": "The MetaSUB microbiome core analysis pipeline enables large scale metagenomic analysis",
  "url": "",
  "year": "2020",
  "journal": "arXiv",
  "authors": "Danko, David C; Mason, Christopher",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": true
 },

 {
  "title": "The Microbe Directory v2.0: An Expanded Database of Ecological and Phenotypical Features of Microbes",
  "url": "",
  "year": "2019",
  "journal": "bioRxiv",
  "authors": "Sierra, Maria A; Bhattacharya, Chandrima; Ryon, Krista; ... Mason, Christopher E",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": true
 },
 {
  "title": "Novel Algorithms for the Taxonomic Classification of Metagenomic Linked-Reads",
  "url": "",
  "year": "2019",
  "journal": "bioRxiv",
  "authors": "Danko, David C; Meleshko, Dmitry; Bezdan, Daniela; ... Hajirasouliha, Iman",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": true
 },
 {
  "title": "Ozone Treatment for Elimination of Bacteria in Medical Environments",
  "url": "",
  "year": "2018",
  "journal": "bioRxiv",
  "authors": "Westover, Craig; Rahmatulloev, Savljaton; Danko, David; ... Mason, Christopher E",
  "show": true,
  "selected": false,
  "firstauthor": false,
  "preprint": true
 },


 {
  "title": "Epsilon Toxin-Producing Strains of Clostridium perfringens Within the Multiple Sclerosis Gut Microbiome Provide a Mechanism for Overcoming CNS Immune Privilege",
  "url": "",
  "year": "2021",
  "journal": "Accepted at Cell Reports",
  "authors": "David Sannino Yinghua Ma, Jennifer R Linden Sylvia Haigh Daniel Butler David Danko Baohua Zhao Kiel Telesford Paige Winokur Kareem Rashid Rumah Susan Gauthier Vincent A Fischetti Bruce A McClane Francisco A Uzal Lily Zexter Michael Mazzucco Jai Perumal Ulrike Kaunzner Ilana L Brit; Vartanian, Timothy",
  "show": false,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Sequencing of circulating microbial cell-free DNA can identify pathogens in periprosthetic joint infections.",
  "url": "",
  "year": "2021",
  "journal": "Accepted at The Journal of Bone & Joint Surgery",
  "authors": "Adriana P. Echeverria, Ian S. Cohn, David C. Danko, Sara Shanaj, Lily Blair, Desiree Hollemon, Alberto V. Carli, Peter K. Sculco, Carine Ho, Galit Meshulam-Simon, Christine Mironenko, Lionel B. Ivashkiv, Susan M. Goodman, Alexandra Grizas, Geoffrey H. Wes",
  "show": false,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 },
 {
  "title": "Characterization of Spacesuit Associated Microbial Communities and Their Implications for NASA Missions",
  "url": "https://doi.org/10.21203/rs.3.rs-70768/v1",
  "year": "2021",
  "journal": "In Review at Frontiers",
  "authors": "Danko, David; Mohan, Ganesh Babu Malli; Sierra, Maria A; ... Venkateswaran, Kasthuri",
  "show": false,
  "selected": false,
  "firstauthor": false,
  "preprint": false
 }
]`);

export default papers;

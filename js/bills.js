
const bills = [
    

{
    number:"SBN-11",
    date:"July 2, 2025",
    title:"Amending R.A. No. 8371 (The Indigenous Peoples' Rights Act of 1997)",
    desc:"Strengthens the protection and promotion of the rights and welfare of Indigenous Peoples."
},

{
    number:"SBN-12",
    date:"July 2, 2025",
    title:"P150 Daily Minimum Wage Increase Act",
    desc:"Provides a nationwide ₱150 daily minimum wage increase for private sector workers."
},

{
number:"SBN-13",
date:"July 2, 2025",
title:"Abolishing the Travel Tax on Filipinos and ASEAN Members",
desc:"Abolishes the travel tax imposed on Filipinos and ASEAN nationals traveling within ASEAN member states."
},

{
number:"SBN-14",
date:"July 2, 2025",
title:"Dissolution of Marriage Act",
desc:"Provides legal grounds and procedures for the dissolution of marriage while protecting the rights of spouses and children."
},

{
number:"SBN-15",
date:"July 2, 2025",
title:"Cannabis Medicalization Act of the Philippines",
desc:"Expands access to medical cannabis for qualified patients while supporting research and regulation."
},

{
number:"SBN-16",
date:"July 2, 2025",
title:"Philippine Unified Halal Certification Act",
desc:"Creates a unified national system for the certification of Halal products, services, and processes."
},

{
number:"SBN-17",
date:"July 2, 2025",
title:"Muslim Prayer Room Act of the Philippines",
desc:"Requires the establishment of Muslim prayer rooms in public offices and establishments."
},

{
number:"SBN-18",
date:"July 2, 2025",
title:"The Anti-Political Dynasty Law",
desc:"Defines and prohibits political dynasties while prescribing penalties for violations."
},

{
number:"SBN-19",
date:"July 2, 2025",
title:"Strengthening the Early Childhood Care and Development System",
desc:"Enhances the country's early childhood care and development programs."
},

{
number:"SBN-20",
date:"July 2, 2025",
title:"Nursing Home for Senior Citizens (NHSC) Act",
desc:"Establishes at least one government-supported nursing home in every city or province."
},

{
number:"SBN-228",
date:"July 7, 2022",
title:"Equal Use of Official Languages Act",
desc:"Provides equal use of Filipino and English in all government documents and official issuances."
},

{
number:"SBN-229",
date:"July 7, 2022",
title:"Suspension of Excise Taxes on Fuel",
desc:"Temporarily suspends excise taxes on gasoline and diesel fuel."
},

{
number:"SBN-230",
date:"July 7, 2022",
title:"Medical Cannabis Compassionate Access Act",
desc:"Allows regulated access to medical cannabis as an alternative medical treatment."
},

{
number:"SBN-231",
date:"July 7, 2022",
title:"Rice Competitiveness Enhancement Fund Amendments",
desc:"Amends provisions of the Rice Tariffication Law to strengthen support for farmers."
},

{
number:"SBN-232",
date:"July 7, 2022",
title:"Magna Carta of Barangay Health Workers",
desc:"Provides greater protection, benefits, and incentives for Barangay Health Workers."
},

{
number:"SBN-233",
date:"July 7, 2022",
title:"Anti-Discrimination Act",
desc:"Protects individuals against discrimination based on race, ethnicity, religion, or former incarceration."
},

{
number:"SBN-234",
date:"July 7, 2022",
title:"Civil Service Eligibility for Casual and Contractual Employees",
desc:"Grants civil service eligibility to qualified casual and contractual government employees."
},

{
number:"SBN-235",
date:"July 7, 2022",
title:"Regional Penitentiaries Act",
desc:"Creates regional penitentiary systems to decongest the New Bilibid Prison and other penal institutions."
},

{
number:"SBN-236",
date:"July 7, 2022",
title:"Mandatory ROTC Act",
desc:"Reinstates the mandatory Reserve Officers' Training Corps program in tertiary education."
},

{
number:"SBN-237",
date:"July 7, 2022",
title:"Divorce Act of the Philippines",
desc:"Provides a legal framework for the dissolution of marriage."
},
{
number:"SBN-1200",
date:"Aug. 18, 2025",
title:"Drug-Free Government Act",
desc:"Requires annual mandatory drug testing for elected and appointed public officials and voluntary random drug testing for candidates."
},

{
number:"SBN-1203",
date:"Aug. 17, 2022",
title:"Rice Competitiveness Enhancement Fund Amendments",
desc:"Amends provisions of the Rice Tariffication Law and strengthens the Rice Competitiveness Enhancement Fund."
},

{
number:"SBN-1272",
date:"Sept. 5, 2022",
title:"National Hijab Day",
desc:"Declares the first day of February of every year as National Hijab Day."
},

{
number:"SBN-1273",
date:"Sept. 5, 2022",
title:"Access to Public Cemeteries Act",
desc:"Provides appropriate burial grounds for Muslim Filipinos, Indigenous Peoples, and other denominations."
},

{
number:"SBN-1297",
date:"Aug. 27, 2025",
title:"Abolishing Senior High School Education Act",
desc:"Restructures the Philippine basic education system by abolishing Senior High School."
},

{
number:"SBN-1298",
date:"Aug. 27, 2025",
title:"Trabaho Batay sa Galing at Kasanayan Act",
desc:"Promotes skills-based hiring and competency-focused recruitment in the private sector."
},

{
number:"SBN-1299",
date:"Aug. 27, 2025",
title:"Mahiya Naman Kayo Act",
desc:"Promotes transparency by prohibiting congressional intervention in local infrastructure budgeting."
},

{
number:"SBN-1300",
date:"Aug. 27, 2025",
title:"Anti-Pabebe Act of 2025",
desc:"Integrates life skills, values formation, and environmental awareness into basic education."
},

{
number:"SBN-1361",
date:"Oct. 4, 2022",
title:"Regional Heart Centers Act",
desc:"Creates a Regional Heart Center in every administrative region."
},

{
number:"SBN-1362",
date:"Oct. 4, 2022",
title:"Regional Kidney and Transplant Institute Act",
desc:"Establishes Regional Kidney and Transplant Institutes nationwide."
},

{
number:"SBN-1363",
date:"Oct. 4, 2022",
title:"Philippine Institute of Virology Act",
desc:"Establishes the Philippine Institute of Virology."
},

{
number:"SBN-1374",
date:"Sept. 10, 2025",
title:"Katutubo para sa Gobyerno Act",
desc:"Grants civil service eligibility to qualified Indigenous Peoples Mandatory Representatives."
},

{
number:"SBN-1385",
date:"Oct. 13, 2022",
title:"Delivery Services Protection Act",
desc:"Provides legal protection for individuals engaged in delivery services."
},

{
number:"SBN-1450",
date:"Oct. 9, 2025",
title:"Bawas, Buwis, Ginhawa para sa Pilipino Act",
desc:"Abolishes the Value-Added Tax (VAT) to reduce the tax burden on consumers."
},

{
number:"SBN-1451",
date:"Oct. 9, 2025",
title:"Overseas Filipino Bank Act",
desc:"Provides for the revised charter of the Overseas Filipino Bank."
},

{
number:"SBN-1481",
date:"Nov. 6, 2025",
title:"National Hazard Mapping Act",
desc:"Creates hazard maps and establishes no-build zones in disaster-prone and low-lying areas."
},

{
number:"SBN-1490",
date:"Nov. 11, 2025",
title:"Anti-Troll Farm Act",
desc:"Prohibits the operation and financing of troll farms and the use of public funds for such activities."
},

{
number:"SBN-1491",
date:"Nov. 11, 2025",
title:"Balik Serbisyo ng Iskolar Act",
desc:"Requires government scholars to complete a mandatory return service program."
},

{
number:"SBN-1583",
date:"Dec. 4, 2025",
title:"Basulta Autonomous Region Act",
desc:"Establishes the BASULTA Autonomous Region."
},

{
number:"SBN-1584",
date:"Dec. 9, 2025",
title:"Amending R.A. No. 8371",
desc:"Further strengthens the Indigenous Peoples' Rights Act of 1997."
},

{
number:"SBN-1589",
date:"Dec. 9, 2025",
title:"Andres Bonifacio Museum Act",
desc:"Establishes the Andres Bonifacio Museum in the City of Manila."
},

{
number:"SBN-1609",
date:"Dec. 12, 2022",
title:"Protection of Students' Religious Belief Act",
desc:"Protects the free exercise of religion of students in educational institutions."
},

{
number:"SBN-1615",
date:"Dec. 16, 2025",
title:"Magna Carta of Barangay Health Workers",
desc:"Provides additional rights, benefits, and protection for Barangay Health Workers."
},

{
number:"SBN-1629",
date:"Dec. 17, 2025",
title:"Multi-Faith Prayer and Quiet Rooms Act",
desc:"Requires multi-faith prayer and quiet rooms in public offices and selected establishments."
},

{
number:"SBN-1659",
date:"Jan. 12, 2026",
title:"Sabah Mandatory Education Act",
desc:"Integrates the study of the Philippines' sovereignty over Sabah into the basic education curriculum."
},

{
number:"SBN-1660",
date:"Jan. 12, 2026",
title:"National Civil Emergency Preparedness and Resilience Act",
desc:"Creates a national civil emergency preparedness and resilience training program for young Filipinos."
},{
number:"SBN-1940",
date:"Feb. 28, 2023",
title:"Movie and Television Review and Classification Board Act of 2023",
desc:"Strengthens and expands the mandate, capabilities, and organizational structure of the MTRCB."
},

{
number:"SBN-2034",
date:"Mar. 21, 2023",
title:"Reserve Officers' Training Corps (ROTC) Act",
desc:"Institutionalizes the ROTC Program in higher educational and technical-vocational institutions."
},

{
number:"SBN-2042",
date:"Mar. 22, 2023",
title:"Anti-Scalawag Act",
desc:"Imposes severe penalties on security personnel involved in contract killings and related offenses."
},

{
number:"SBN-2047",
date:"Mar. 29, 2023",
title:"Church Decreed Annulment Act",
desc:"Recognizes the civil effects of church-decreed annulment."
},

{
number:"SBN-2048",
date:"Mar. 29, 2023",
title:"Film and Live Events Recovery Act",
desc:"Supports the recovery and development of the film and live events industry."
},

{
number:"SBN-2055",
date:"Mar. 30, 2023",
title:"Free Tertiary Agricultural Education Act",
desc:"Provides free tertiary agricultural education for qualified indigent farmers' dependents."
},

{
number:"SBN-2214",
date:"May 18, 2023",
title:"Anti-Agricultural Smuggling Act Amendments",
desc:"Strengthens penalties for agricultural smuggling committed by government personnel."
},

{
number:"SBN-2215",
date:"May 18, 2023",
title:"Amending the Code of Muslim Personal Laws",
desc:"Updates provisions of Presidential Decree No. 1083."
},

{
number:"SBN-2216",
date:"May 18, 2023",
title:"Redefining the Crime of Illegal Recruitment",
desc:"Strengthens the legal definition and penalties for syndicated illegal recruitment."
},

{
number:"SBN-2217",
date:"May 18, 2023",
title:"Comprehensive Dangerous Drugs Act Amendments",
desc:"Imposes stricter penalties for drug offenses committed by public officials and uniformed personnel."
},

{
number:"SBN-2244",
date:"May 24, 2023",
title:"Amending Article 183 of the Revised Penal Code",
desc:"Updates provisions relating to false testimony under the Revised Penal Code."
},

{
number:"SBN-2245",
date:"May 24, 2023",
title:"Camarines Norte General Hospital Act",
desc:"Upgrades the Camarines Norte Provincial Hospital into a tertiary Level III hospital."
},

{
number:"SBN-2246",
date:"May 24, 2023",
title:"Jose Panganiban Special Economic Zone and Freeport Act",
desc:"Creates a special economic zone and freeport in Jose Panganiban, Camarines Norte."
},

{
number:"SBN-2265",
date:"May 30, 2023",
title:"Truthful Congressional Inquiry Act",
desc:"Penalizes false statements and fabricated evidence presented before Congress."
},

{
number:"SBN-2275",
date:"Jun. 8, 2023",
title:"Cordillera Autonomous Region Act",
desc:"Establishes the Cordillera Autonomous Region."
},

{
number:"SBN-2406",
date:"Aug. 15, 2023",
title:"National Day for Awareness of Religious and Traditional Garments",
desc:"Declares March 1 as the National Day for Awareness of Religious and Traditional Attire."
},

{
number:"SBN-2431",
date:"Aug. 31, 2023",
title:"Basilan Medical Center Act",
desc:"Converts Basilan General Hospital into the Basilan Medical Center."
},

{
number:"SBN-2440",
date:"Sept. 13, 2023",
title:"Commission on Human Rights Charter",
desc:"Defines the powers and functions of the Commission on Human Rights."
},

{
number:"SBN-2452",
date:"Sept. 26, 2023",
title:"NCMF Reform Act of 2023",
desc:"Strengthens and reforms the National Commission on Muslim Filipinos."
},

{
number:"SBN-2453",
date:"Sept. 26, 2023",
title:"Indeterminate Sentence Law Amendments",
desc:"Updates provisions of the Indeterminate Sentence Law."
},

{
number:"SBN-2462",
date:"Oct. 5, 2023",
title:"Access to Shari'ah Courts Act",
desc:"Improves Muslim Filipinos' access to Shari'ah courts."
},

{
number:"SBN-2491",
date:"Nov. 21, 2023",
title:"National Apprenticeship Program Act",
desc:"Establishes a nationwide apprenticeship program for workforce development."
},

{
number:"SBN-2505",
date:"Dec. 5, 2023",
title:"Eddie Garcia Law",
desc:"Protects the welfare and safety of workers in the movie and television industry."
},

{
number:"SBN-2511",
date:"Dec. 7, 2023",
title:"Terror Victims Assistance Act",
desc:"Provides assistance and support for victims of terrorist attacks."
},

{
number:"SBN-2547",
date:"Feb. 14, 2024",
title:"Mohammad Said Act",
desc:"Strengthens compensation mechanisms for victims of unjust imprisonment and violent crimes."
},

{
number:"SBN-2548",
date:"Feb. 14, 2024",
title:"Refugees and Stateless Persons Protection Act",
desc:"Protects the rights of refugees and stateless persons in the Philippines."
},

{
number:"SBN-2573",
date:"Feb. 26, 2024",
title:"Cannabis Medicalization Act",
desc:"Provides regulated access to medical cannabis while promoting research."
},

{
number:"SBN-2594",
date:"Mar. 6, 2024",
title:"Additional Shari'ah Judicial Districts Act",
desc:"Creates additional Shari'ah judicial districts and circuit courts."
},

{
number:"SBN-2602",
date:"Mar. 12, 2024",
title:"Anti-Online Gambling Promotion Act",
desc:"Prohibits online publication and promotion of gambling-related content."
},

{
number:"SBN-2613",
date:"Mar. 18, 2024",
title:"Equitable Access to Shari'ah Courts Act",
desc:"Provides equitable access to Shari'ah courts for Muslim Filipinos."
},

{
number:"SBN-2672",
date:"May 15, 2024",
title:"Rice Tariffication Law Amendments",
desc:"Amends provisions on the quantitative import restriction on rice."
},

{
number:"SBN-2729",
date:"Jul. 10, 2024",
title:"Vaporized Nicotine Products Regulation Act Amendments",
desc:"Strengthens regulation of vaporized nicotine and non-nicotine products."
},

{
number:"SBN-2730",
date:"Jul. 15, 2024",
title:"Anti-Political Dynasty Law",
desc:"Defines and prohibits political dynasties in the Philippines."
},

{
number:"SBN-2777",
date:"Aug. 12, 2024",
title:"Strengthening the Anti-Rape Law",
desc:"Further strengthens the Anti-Rape Law of 1997."
},

{
number:"SBN-2778",
date:"Aug. 12, 2024",
title:"Talent Management Act of the Philippines",
desc:"Professionalizes the talent management industry through licensing and regulation."
},

{
number:"SBN-2810",
date:"Sept. 4, 2024",
title:"Safe Spaces Act Amendments",
desc:"Strengthens provisions of the Safe Spaces Act."
},

{
number:"SBN-2819",
date:"Sept. 11, 2024",
title:"NCMF Act Amendments",
desc:"Amends Article I, Section 5 of the National Commission on Muslim Filipinos Act."
},

{
number:"SBN-2820",
date:"Sept. 11, 2024",
title:"BARMM Organic Law Amendments",
desc:"Amends Article X, Section 8 of the Organic Law for the Bangsamoro Autonomous Region."
},

{
number:"SBN-2869",
date:"Nov. 5, 2024",
title:"Indigenous Peoples' Rights Act Amendments",
desc:"Further strengthens the Indigenous Peoples' Rights Act of 1997."
},

{
number:"SBN-2875",
date:"Nov. 11, 2024",
title:"Kutawato Province Charter",
desc:"Creates the Special Geographic Area in BARMM to be known as Kutawato Province."
},

{
number:"SBN-2879",
date:"Nov. 19, 2024",
title:"Basulta Autonomous Region Act",
desc:"Establishes the Basulta Autonomous Region."
},

{
number:"SBN-2882",
date:"Nov. 26, 2024",
title:"Unfair Debt Collection Practices Act",
desc:"Prohibits unfair debt collection practices and prescribes penalties."
},

{
number:"SBN-2889",
date:"Dec. 4, 2024",
title:"Product Endorsers Protection Act",
desc:"Protects product endorsers from unauthorized investment and securities promotions."
},

{
number:"SBN-2890",
date:"Dec. 4, 2024",
title:"False Address in Subpoena Act",
desc:"Penalizes the deliberate use of false addresses in the issuance of subpoenas."
},

{
number:"SBN-2904",
date:"Dec. 16, 2024",
title:"National Government Agricultural Functions Act",
desc:"Returns devolved agricultural functions from LGUs to the National Government."
},

{
number:"SBN-2937",
date:"Jan. 22, 2025",
title:"Overseas Filipino Bank Act",
desc:"Provides the revised charter of the Overseas Filipino Bank."
},

{
number:"SBN-2938",
date:"Jan. 22, 2025",
title:"Early Years Act Amendments",
desc:"Strengthens the Early Childhood Care and Development System."
},

{
number:"SBN-2939",
date:"Jan. 22, 2025",
title:"Bangsamoro History, Culture and Identity Studies Act",
desc:"Integrates Bangsamoro history, culture, and identity into the basic education curriculum."
},

{
number:"SBN-2989",
date:"Feb. 17, 2025",
title:"Children Safety in Social Media Act",
desc:"Regulates children's use of social media to promote online safety and responsible digital behavior."
},
{
    billNo: "SBN-371",
    dateFiled: "July 10, 2025",
    title: "An Act Legalizing the Cultivation of Hemp and Formulating a Comprehensive Development Plan for the Hemp Industry, Including Research and Development and Capacity-Building to Strengthen Its Competence and Efficiency, and Providing Funds Therefor",
    shortTitle: "HEMP INDUSTRY DEVELOPMENT ACT"
},
{
    billNo: "SBN-372",
    dateFiled: "July 10, 2025",
    title: "An Act Lowering the Minimum Age of Criminal Responsibility, Amending for the Purpose Republic Act No. 9344, Otherwise Known as the Juvenile Justice and Welfare Act of 2006, as Amended, and for Other Purposes",
    shortTitle: "MINIMUM AGE OF CRIMINAL RESPONSIBILITY (JUVENILE JUSTICE AND WELFARE ACT)"
},
{
    billNo: "SBN-373",
    dateFiled: "July 10, 2025",
    title: "An Act Strengthening the Protection of Private Sector Workers by Establishing a National Minimum Wage and Enhancing Penalties for Non-Compliance, Amending for the Purpose Presidential Decree No. 442, as Amended, Otherwise Known as the Labor Code of the Philippines",
    shortTitle: "NATIONAL MINIMUM WAGE ACT OF 2025"
},
{
    billNo: "SBN-374",
    dateFiled: "July 10, 2025",
    title: "An Act Prohibiting Online Publication and Promotion of Gambling-Related Content, Providing Penalties Therefor and for Other Purposes",
    shortTitle: "PROHIBITING ONLINE PUBLICATION AND PROMOTION OF GAMBLING RELATED CONTENT"
},
{
    billNo: "SBN-375",
    dateFiled: "July 10, 2025",
    title: "An Act Providing for the Magna Carta of Miners",
    shortTitle: "MAGNA CARTA OF MINERS"
},
{
    billNo: "SBN-376",
    dateFiled: "July 10, 2025",
    title: "An Act Regulating the Sale of Sugar-Sweetened Beverages, Junk Food, and Other Unhealthy Food Products in Elementary and Secondary Schools, Providing Funds Therefor, and for Other Purposes",
    shortTitle: "MASUSTANSYANG PAGKAIN AT INUMIN SA PAARALAN ACT"
},
{
    billNo: "SBN-447",
    dateFiled: "July 12, 2022",
    title: "An Act Instituting Budget Reform that Will Ensure Equitable Distribution of Funds Among the National and Local Government Units for the Purpose of Local Development, Appropriating Funds Therefor, and for Other Purposes",
    shortTitle: "LOCAL DEVELOPMENT EQUITABILITY FUND ACT"
},
{
    billNo: "SBN-448",
    dateFiled: "July 12, 2022",
    title: "An Act to Establish a Nursing Home for Senior Citizens and Appropriating Funds Therefor",
    shortTitle: "NURSING HOME FOR SENIOR CITIZENS (NHSC) ACT"
},
{
    billNo: "SBN-449",
    dateFiled: "July 12, 2022",
    title: "An Act Institutionalizing Civil Unions of Same Sex Couples, Establishing Their Rights and Obligations, and for Other Purposes",
    shortTitle: "CIVIL UNIONS ACT"
},
{
    billNo: "SBN-450",
    dateFiled: "July 12, 2022",
    title: "An Act Protecting the Welfare of Workers or Independent Contractors in the Film, Television, and Radio Entertainment Industry",
    shortTitle: "EDDIE GARCIA LAW"
},
{
    billNo: "SBN-451",
    dateFiled: "July 12, 2022",
    title: "An Act Mandating the Inclusion of Philippine History as a Separate Subject in the High School Curriculum",
    shortTitle: "PHILIPPINE HISTORY AS SEPARATE SUBJECT IN HIGH SCHOOL CURRICULUM"
},
{
    billNo: "SBN-452",
    dateFiled: "July 12, 2022",
    title: "An Act Declaring September 21 of Every Year as a Special Non-Working Holiday to be Known as 'Unsung Heroes Day'",
    shortTitle: "UNSUNG HEROES DAY"
},
{
    billNo: "SBN-599",
    dateFiled: "July 15, 2025",
    title: "An Act Providing Better Services to Muslim Filipino Pilgrims Through the Privatization of the Annual Hajj Pilgrimage, Amending Republic Act No. 9997, Otherwise Known as the National Commission on Muslim Filipinos Act of 2009, and for Other Purposes",
    shortTitle: "AMENDING R.A. NO. 9997 (NATIONAL COMMISSION ON MUSLIM FILIPINOS ACT)"
},
{
    billNo: "SBN-600",
    dateFiled: "July 15, 2025",
    title: "An Act Institutionalizing Civil Partnership of Same Sex Couples, Establishing Their Rights and Obligations, and for Other Purposes",
    shortTitle: "CIVIL PARTNERSHIP ACT"
},
{
    billNo: "SBN-601",
    dateFiled: "July 15, 2025",
    shortTitle: "CHILDRENS SAFETY IN SOCIAL MEDIA ACT",
    title: "AN ACT REGULATING CHILDREN'S USE OF SOCIAL MEDIA TOWARDS PROMOTING THEIR SAFETY, WELL-BEING, AND RESPONSIBLE DIGITAL USAGE"
},
{
    billNo: "SBN-602",
    dateFiled: "July 15, 2025",
    shortTitle: "ANTI-SCALAWAG ACT",
    title: "AN ACT IMPOSING DEATH PENALTY ON THE HEINOUS CRIME OF SECURITY PERSONNEL ENGAGED TO COMMIT MURDER, AND PROVIDING PENALTIES FOR ANY PERSON WHO RECRUIT, MAINTAIN, USE, AID, FUND, OR TRAIN SECURITY PERSONNEL TO COMMIT MURDER, AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-603",
    dateFiled: "July 15, 2025",
    shortTitle: "ANTI-UNFAIR DEBT COLLECTION PRACTICES ACT",
    title: "AN ACT PROHIBITING UNFAIR DEBT COLLECTION PRACTICES, PROVIDING PENALTIES THEREFOR AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-604",
    dateFiled: "July 15, 2025",
    shortTitle: "AMENDING ART. 1 SEC. 5 OF R.A. NO. 9997 (NATIONAL COMMISSION ON MUSLIM FILIPINOS)",
    title: "AN ACT AMENDING ARTICLE I SECTION 5 OF REPUBLIC ACT NO. 9997, OTHERWISE KNOWN AS THE NATIONAL COMMISSION ON MUSLIM FILIPINOS ACT OF 2009"
},
{
    billNo: "SBN-605",
    dateFiled: "July 15, 2025",
    shortTitle: "INCLUSION OF PHILIPPINE HISTORY IN THE HIGH SCHOOL CURRICULUM",
    title: "AN ACT MANDATING THE INCLUSION OF PHILIPPINE HISTORY AS A SEPARATE SUBJECT IN THE HIGH SCHOOL CURRICULUM"
},
{
    billNo: "SBN-606",
    dateFiled: "July 15, 2025",
    shortTitle: "AMENDING REPUBLIC ACT NO. 1425 (RIZAL LAW)",
    title: "AN ACT AMENDING REPUBLIC ACT NO. 1425 OTHERWISE KNOWN AS AN ACT TO INCLUDE IN THE CURRICULA OF ALL PUBLIC AND PRIVATE SCHOOLS, COLLEGES AND UNIVERSITIES COURSES ON THE LIFE, WORKS AND WRITINGS OF JOSE RIZAL, PARTICULARLY HIS NOVELS NOLI ME TANGERE AND EL FILIBUSTERISMO, AUTHORIZING THE PRINTING AND DISTRIBUTION THEREOF, AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-607",
    dateFiled: "July 3, 2025",
    shortTitle: "AMENDING B.P. 881 (OMNIBUS ELECTIONS CODE)",
    title: "AN ACT STRENGTHENING THE INDEPENDENCE OF THE COMMISSION ON ELECTIONS, AMENDING FOR THE PURPOSE PERTINENT PROVISIONS OF BATAS PAMBANSA 881, OTHERWISE KNOWN AS THE OMNIBUS ELECTIONS CODE, AS AMENDED, PROVIDING FUNDS THEREFOR, AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-608",
    dateFiled: "July 15, 2025",
    shortTitle: "THE HYBRID ELECTION ACT",
    title: "AN ACT MANDATING THE ADOPTION OF MANUAL VOTING AND COUNTING AT THE PRECINCT LEVEL, AND AUTOMATED TRANSMISSION AND CANVASSING DURING THE NATIONAL, LOCAL, AND BANGSAMORO AUTONOMOUS REGION OF MUSLIM MINDANAO ELECTIONS"
},
{
    billNo: "SBN-609",
    dateFiled: "July 15, 2025",
    shortTitle: "EQUAL USE OF OFFICIAL LANGUAGES ACT",
    title: "AN ACT PROVIDING FOR THE EQUAL USE OF FILIPINO AND ENGLISH LANGUAGES IN ALL GOVERNMENT ISSUANCES AND DOCUMENTS"
},
{
    billNo: "SBN-610",
    dateFiled: "July 15, 2025",
    shortTitle: "TRUTHFUL CONGRESSIONAL INQUIRY ACT",
    title: "AN ACT DEFINING UNTRUTHFUL STATEMENT AND FABRICATED EVIDENCE BEFORE CONGRESS IN THE CONDUCT OF THEIR LEGISLATIVE AND OVERSIGHT FUNCTIONS COMMITTED BY GOVERNMENT PERSONNEL AND PROVIDING PENALTIES THEREFOR"
},
{
    billNo: "SBN-611",
    dateFiled: "July 15, 2025",
    shortTitle: "PROTECTION OF STUDENTS RELIGIOUS BELIEF ACT",
    title: "AN ACT PROTECTING FREE EXERCISE AND ENJOYMENT OF RELIGION OF STUDENTS IN EDUCATIONAL INSTITUTIONS AND PROVIDING PENALTIES FOR VIOLATIONS THEREOF"
},
{
    billNo: "SBN-612",
    dateFiled: "July 15, 2025",
    shortTitle: "TERROR VICTIMS ASSISTANCE ACT",
    title: "AN ACT PROVIDING ASSISTANCE TO VICTIMS OF TERROR ATTACKS, APPROPRIATING FUNDS THEREFOR AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-613",
    dateFiled: "July 15, 2025",
    shortTitle: "COMPREHENSIVE ANTI-DISCRIMINATION ACT",
    title: "AN ACT PROHIBITING DISCRIMINATION ON THE BASIS OF PROTECTED ATTRIBUTES, PROVIDING PENALTIES THEREFOR AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-614",
    dateFiled: "July 15, 2025",
    shortTitle: "REGIONAL PENITENTIARIES ACT",
    title: "AN ACT ESTABLISHING PENITENTIARY SYSTEMS IN REGIONS I, II, III, V, VI, VIII, IX, X, XII, AND XIII TO DECONGEST THE NEW BILIBID PRISON (NBP) AND OTHER PENAL FARMS AND PROVINCES, APPROPRIATING FUNDS THEREFOR AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-615",
    dateFiled: "July 15, 2025",
    shortTitle: "MUSLIM PATIENT RIGHTS IN HEALTHCARE ACT",
    title: "AN ACT MANDATING ALL PUBLIC AND PRIVATE HOSPITALS TO OBSERVE, RESPECT AND ACCOMMODATE THE RELIGIOUS BELIEFS, PRACTICES, AND CUSTOMS OF MUSLIM PATIENTS IN THE DELIVERY OF HEALTHCARE SERVICES"
},
{
    billNo: "SBN-616",
    dateFiled: "July 15, 2025",
    shortTitle: "REFUGEES AND STATELESS PERSONS PROTECTION ACT",
    title: "AN ACT PROTECTING THE RIGHTS OF REFUGEES AND STATELESS PERSONS, ESTABLISHING THE REFUGEES AND STATELESS PERSONS PROTECTION BOARD, AND FOR OTHER PURPOSES"
},
{
    billNo: "SBN-617",
    dateFiled: "July 15, 2025",
    shortTitle: "RESERVE OFFICERS' TRAINING CORPS (ROTC) ACT",
    title: "AN ACT MANDATING THE INSTITUTIONALIZATION, DEVELOPMENT, TRAINING, ORGANIZATION AND ADMINISTRATION OF RESERVE OFFICERS TRAINING CORPS (ROTC) PROGRAM IN HIGHER EDUCATIONAL INSTITUTIONS AND TECHNICAL VOCATIONAL INSTITUTIONS"
},
{
    billNo: "SBN-618",
    dateFiled: "July 15, 2025",
    shortTitle: "BANGSAMORO HISTORY, CULTURE, AND IDENTITY STUDIES ACT",
    title: "AN ACT PROVIDING FOR THE INTEGRATION OF BANGSAMORO HISTORY, CULTURE, AND IDENTITY IN THE STUDY OF PHILIPPINE HISTORY IN BASIC EDUCATION"
},
{
    billNo: "SBN-619",
    dateFiled: "July 15, 2025",
    shortTitle: "AMENDING SECS. 27 AND 28 OF REPUBLIC ACT NO. 9165",
    title: "AN ACT AMENDING SECTIONS 27 AND 28 OF REPUBLIC ACT NO. 9165 OTHERWISE KNOWN AS THE COMPREHENSIVE DANGEROUS DRUGS ACT OF 2002, AS AMENDED"
},
{
    billNo: "SBN-772",
    dateFiled: "July 31, 2025",
    shortTitle: "MOHAMMAD SAID ACT",
    title: "AN ACT AMENDING REPUBLIC ACT NO. 7309, AN ACT CREATING A BOARD OF CLAIMS UNDER THE DEPARTMENT OF JUSTICE FOR VICTIMS OF UNJUST IMPRISONMENT OR DETENTION AND VICTIMS OF VIOLENT CRIMES"
},
];

const cardsPerPage = 6;
let currentPage = 1;

function displayBills(){

    const container=document.getElementById("bills-container");

    container.innerHTML="";

    const start=(currentPage-1)*cardsPerPage;

    const end=start+cardsPerPage;

    const pageBills=bills.slice(start,end);

    pageBills.forEach(bill=>{

        container.innerHTML+=`

        <div class="col-lg-6">

            <div class="bill-card h-100">

                <div class="bill-header">

                    <span class="bill-number">${bill.number}</span>

                    <span class="bill-date">${bill.date}</span>

                </div>

                <h5 class="bill-title">${bill.title}</h5>

                <p class="bill-description">${bill.desc}</p>

            </div>

        </div>

        `;

    });

    document.getElementById("pageInfo").innerHTML=
    `Page ${currentPage} of ${Math.ceil(bills.length/cardsPerPage)}`;

    document.getElementById("prevBtn").disabled=currentPage===1;

    document.getElementById("nextBtn").disabled=currentPage===Math.ceil(bills.length/cardsPerPage);

}

document.getElementById("nextBtn").onclick=()=>{

    if(currentPage<Math.ceil(bills.length/cardsPerPage)){

        currentPage++;

        displayBills();

    }

}

document.getElementById("prevBtn").onclick=()=>{

    if(currentPage>1){

        currentPage--;

        displayBills();

    }

}
function renderBills(list) {

    const container = document.getElementById("billsContainer");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(bill => {

        container.innerHTML += `
            <div class="bill-card mb-3">

                <div class="bill-header">

                    <span class="bill-number">${bill.billNo}</span>

                    <span class="bill-date">
                        Filed: ${bill.date}
                    </span>

                </div>

                <h5 class="bill-title">
                    ${bill.shortTitle}
                </h5>

                <p class="bill-description">
                    ${bill.title}
                </p>

            </div>
        `;

    });

}

document.addEventListener("DOMContentLoaded", () => {

    renderBills(bills);

});
displayBills();
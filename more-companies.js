(function(){
var L={
"Mid-size IT Services":["3Pillar Global","A3Logics","Accion Labs","Afour Technologies","Agiliad","Algoworks","Allstate India","Anunta Tech","Appinventiv","Aspire Systems","Aurionpro Solutions","Bhavna Corp","Blue Yonder","Cedcoss Technologies","Centric Consulting","CitiusTech","Clarion Technologies","Collabera Digital","Comviva","CrimsonLogic","Cuelogic Technologies","Cyber Group","Damco Solutions","Decimal Technologies","Daffodil Software","E2E Networks","emids","Envestnet | Yodlee","eInfochips","Fingent","Fortude","GAVS Technologies","gemini Solutions","Harman Connected Services","HCL Infosystems","Hexaview Technologies","Hitachi Vantara","iLink Digital","Impetus Technologies","Incedo","Indegene","Indium Software","InTimeTec","Jade Global","Ksolves India"],
"Web & Mobile Dev Firms":["Konstant Infosolutions","LeewayHertz","Lollypop Design Studio","Mobikasa","Mobile Programming","Mindfire Solutions","Monarch Innovation","Nethues Technologies","Net Solutions","Oodles Technologies","OpenXcell","OrangeMantra","Orion Innovation","Osscube","PageTraffic","PixelCrayons","Polestar Solutions","Pratham Software","QBurst","Qualitest","Q3 Technologies","Radixweb","RapidValue Solutions","Robosoft Technologies","Ranosys"],
"Cloud, Data, AI & Security":["Cloud4C","CoreStack","Couchbase India","CrowdStrike India","Databricks India","Elastic India","Fortinet India","Fractal.ai","MathCo (TheMathCompany)","Minjar (Nutanix)","Nutanix India","Palo Alto Networks India","Qlik India","Quantiphi","Rubrik India","Snowflake India","Splunk India","Srijan Technologies (Material+)","Sumo Logic India","Zscaler India"],
"GCC & Enterprise Hubs":["Amadeus Labs","American Express Tech","ANZ Bengaluru Service Centre","Barclays Global Service Centre","Bosch Global Software Technologies (BGSW)","Caterpillar India Engineering","Cisco Meraki India","Citrix (Cloud Software Group)","Deutsche Bank Tech Centre","Fidelity Investments India","Goldman Sachs Engineering India","Honeywell Technology Solutions","HSBC Technology India","JPMorgan Chase Tech India","Lowes India","Mastercard Tech Hub","Mercedes-Benz Research & Development India (MBRDI)","Morgan Stanley Tech India","Optum Global Solutions","Philips Innovation Campus","Schneider Electric Digital","Shell IT Hub India","Siemens Technology and Services","Societe Generale Global Solution Centre","Target in India","Tesco Bengaluru","Thomson Reuters India","UnitedHealth Group (UHG)","Visa Tech Hub India","Walmart Global Tech India","Wells Fargo India"]};
var all="bt,mca,bcs,bsc",eng="bt,mca,bsc";
var TP={
"Mid-size IT Services":{a:"Mid-size and growing Indian IT services company. Hires freshers for development, testing and support on global client projects.",d:all,r:"Software Engineer Trainee, QA Engineer, Support Engineer",rd:["Resume shortlisting or campus drive","Online test (aptitude, reasoning, basic coding)","Technical interview (projects, one language, DBMS, OOP)","Manager or client-fit discussion","HR interview"],t:"Aptitude, OOP, SQL, one language (Java/Python/.NET), project explanation, communication",tip:"Smaller firms ask deeply about your own project; know every line."},
"Web & Mobile Dev Firms":{a:"Custom web, mobile and software development company working for clients worldwide. Practical skills matter more than marks.",d:all,r:"Web Developer, Mobile App Developer, QA, UI Developer",rd:["Resume and portfolio or GitHub screening","Written or practical test (HTML/CSS/JS, PHP/Node/React, Flutter/Android)","Technical interview and live coding","HR interview"],t:"HTML, CSS, JavaScript, React or PHP/Node, REST APIs, MySQL, Git, mobile basics (Flutter/Android)",tip:"Host 2 or 3 live projects and share the links in your resume."},
"Cloud, Data, AI & Security":{a:"Product company in cloud, data, AI or security. Hiring is skill-based with a higher bar than services firms.",d:"bt,mca",r:"Software Engineer, Support / Cloud Engineer, Data Engineer, Security Engineer",rd:["Resume and referral screening","Online coding assessment","Technical round 1 (DSA, OS, networking)","Technical round 2 (domain: cloud, data or security, plus projects)","Hiring manager round","HR round"],t:"DSA, OS, networking, Linux, SQL, Python, cloud basics, domain topics from the details above",tip:"Build one hands-on project in the company's domain (a data pipeline, a cloud deploy or a security lab)."},
"GCC & Enterprise Hubs":{a:"Global Capability Centre or enterprise tech hub in India building products and platforms for its parent company.",d:"bt,mca",r:"Software Engineer, Technology Analyst, Associate Engineer",rd:["Resume shortlisting (CGPA cut-off is common)","Online assessment (aptitude + 2 coding problems)","Technical round 1 (DSA and coding)","Technical round 2 (CS fundamentals, projects, basic design)","Managerial round","HR round"],t:"DSA (arrays, trees, DP), OOP, DBMS, OS, SQL, Java/Python/C++, behavioural (STAR) answers",tip:"Strong DSA plus clear communication matters most in these hubs."}};
var data=/Databricks|Snowflake|Splunk|Elastic|Couchbase|Sumo|Qlik|Fractal|MathCo|Quantiphi/,sec=/CrowdStrike|Fortinet|Palo Alto|Zscaler|Rubrik/,cld=/Cloud4C|CoreStack|Minjar|Nutanix|Srijan/;
var fin=/Express|ANZ|Barclays|Deutsche|Fidelity|Goldman|HSBC|JPMorgan|Mastercard|Morgan|Societe|Visa|Wells/,emb=/Bosch|Caterpillar|Honeywell|MBRDI|Mercedes|Philips|Schneider|Siemens|Harman|eInfochips/;
var out=[];
Object.keys(L).forEach(function(c){L[c].forEach(function(n){
 var p=TP[c],rd=p.rd.slice(),t=p.t,a=p.a,r=p.r,d=p.d;
 if(c==="Cloud, Data, AI & Security"){
  if(data.test(n)){t+=". Focus: SQL, data modelling, Spark, ETL, distributed systems";r="Software Engineer, Data Engineer, Support Engineer"}
  else if(sec.test(n)){t+=". Focus: networking, firewalls, cryptography, threats, Linux";r="Security Engineer, Support Engineer, Software Engineer"}
  else if(cld.test(n)){t+=". Focus: AWS/Azure, Docker, Kubernetes, Linux, virtualization";r="Cloud Engineer, DevOps Engineer, Software Engineer"}
 }
 if(c==="GCC & Enterprise Hubs"){
  if(fin.test(n)){rd.splice(2,0,"Coding round on HackerRank or CoderPad (live)");t+=", SQL, banking or fintech basics";a="Banking and finance technology centre in India. Process is strict, with a CGPA cut-off and live coding."}
  else if(emb.test(n)){t+=", embedded C, microcontrollers, RTOS, automotive or industrial basics";r="Embedded / Software Engineer, Graduate Engineer Trainee";d=eng}
 }
 if(c==="Mid-size IT Services"&&emb.test(n)){t+=", embedded C, microcontrollers"}
 out.push([n,c,a,d,r,rd,t,p.tip]);
})});
window.MORE=out;
window.MORE_CATS=Object.keys(L);
window.MORE_ROAD={
"Mid-size IT Services":"Aptitude + one language (Java/Python) + SQL + OOP, with 2 projects you can explain fully.",
"Web & Mobile Dev Firms":"HTML, CSS, JavaScript, React or Node/PHP, a database, Git. Publish 3 live projects.",
"Cloud, Data, AI & Security":"DSA + Linux + networking, then one domain: AWS/Docker, SQL/Spark, or security labs. Add a certification.",
"GCC & Enterprise Hubs":"Strong DSA (LeetCode medium), CS fundamentals, SQL and STAR-format behavioural answers."};
})();

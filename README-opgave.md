Projektopgave HI-FI Corner

## Om opgaven
Denne opgave er omhandler opsætning, navigation og hentning af data. Læs hele opgavebeskrivelsen grundigt igennem inden du stiller spørgsmål.

## Opgavebeskrivelse

Du skal fremstille en webapplikation til en HI-FI webbutik, som præsenterer butikkens produkter inddelt efter kategori eller producent. Brugeren af sitet skal nemt og overskueligt kunne finde rundt i de forskellige produkter og kunne fremsøge produkter vha. søgeord. Der er udelukkende tale om præsentation af produkterne, man skal ikke kunne handle produkter på siden.

Opgaven varer ca. 2 uger og omhandler udarbejdelse af en projektplan (eksempelvis ved hjælp af GitHub Projects), designanalyse og datastruktur i en eller flere JSON-filer, samt produktionen af client-side produktet.

Det arbejde der forventes udført når projektet er slut, er en funktionel offentlig tilgængelig client-side som henter data og billeder fra en datakilde. Siden er sat op så den matcher det udleverede design.

Et HI-FI produkt består af et navn, en beskrivelse, en pris, et billede, samt hører til i en kategori og er knyttet til en producent. Du skal selv udtænke hvordan datastrukturen stilles op i JSON.
*(billederne findes i den medfølgende .zip fil, men alle andre produktdata finder du selv på noget, benyt evt https://lipsum.com/feed/html )*

### Tekniske krav
**Client-Side** skal løses vha. HTML, CSS og Javascript, som ved hjælp af fetch-api'et henter data. Det er tilladt, at bruge Bootstrap og lignende frameworks. Det er ikke et krav.

### Design og layout
Du skal udarbejde en teknisk designanalyse, som redegør for hvordan elementerne på hjemmesiden er bygget op.<br>
Produktet skal designes efter mobile first princippet, men nødvendigvis ikke implementeret til begge medier *(prioriter browser varianten som den primære der produceres)*.

### Forslag til arbejdsprocess
* Planlægning: Afklaring af opgavens indhold defineret i en opgaveoversigt (husk hvad I har arbejdet med i Projektorganiseringsfaget)
* Layout: Udarbejdelse af teknisk designanalyse.
* Design datastrukturer i JSON.
* GODKENDELSE AF OVENSTÅENDE inden der kodes videre.
* Opsæt HTML sider med navigation og dummy-data (statisk site)
* Opret datafiler (JSON)
* Programmér funktioner til dataudtræk
* Byg alle nødvendige fetch, og udskriv data fra fetch.
* Dokumentér kode og funktionalitet i markdown-filer 


### Sider og indhold
* Forside
* Brand-liste
* Shop-kategorier
* Kategori-liste
* Enkelt produktvisning
 
### Forsiden 
* Forsidetekst og billeder af produkter
* Visning af ét eller flere udvalgte produkter (kan være de senest oprettede, et tilfældigt produkt eller andet du finder relevant)
 
### Produktsider
Der er flere forskellige funktioner under produkter:
* Visning af alle produkter inden for en bestemt kategori, uden produkt beskrivelse
* Visning af alle produkter der hører til en bestemt producent, uden produkt beskrivelse
* Visning af ét produkt ved klik på et produkt fra listerne
* Visning af produkter efter søgning 

Alle produkter hentes via et API og udskrives med fetch, alle produkter vises med deres billede.
 
### Alle sider 
* Menu 
* Fritekst-søgefunktion til produkter og producenter (visning på produktsiden) 
* Footer med kontaktinfo 

### Github
* Projektet opsættes i et GitHub repo - husk at invitere din lærer som collaborator.
* Der skal committes ved væsentlige ændringer eller færdiggørelse af en funktionalitet - og altid inden fyraften.
* Alle commit tekster på GitHub skal kort beskrive ændringerne. **Der må ikke skrives ligegyldige beskrivelser!**.

### Billedfiler
Alle billeder ligger i en zippet fil fordelt i mapper.

Du vælger om alle billeder skal ligge i én mappe eller om du vil bevare mappestrukturen.

Brug følgende liste, hvis I er i tvivl om hvilke kategorier de forskellige billeder tilhører:

  
**CD Afspillere**

    * creek_classic_cd.jpg
    * creek_Destiny_CD.jpg
    * creek_evo_cd.jpg
    * Exp_2010S_CD.gif


**DVD Afspillere**

    * creek_classic.jpg
    * exposure_2010S.jpg
    * parasound_d200.jpg
    * parasound_halod3.jpg

**Effektforstærkere**

    * manley_mahi.jpg
    * manley_neoclassic300b.jpg
    * manley_snapper.jpg
    * parasound_haloa23.jpg


**Forforstærkere**

    * Creek_OBH_22_Passive_Preamp.jpg
    * parasound_classic7100.jpg
    * parasound_halop3.jpg
    * Project_prebox.jpg


**Højtalere**

    * boesendorfer_vcs_wall.gif
    * epos_m5.gif
    * harbeth_hl7es2.jpg
    * harbeth_monitor30.jpg
    * harbeth_p3es2.jpg


**Int. Forstærkere**

    * creek_a50I.jpg
    * creek_classic5350SE.jpg
    * creek_destinyamp.jpg
    * manley_snapper.jpg
    * Manley_Stingray.jpg


**Pladespillere**

    * Pro_ject_Debut_3_bl.jpg
    * Pro_ject_Debut_III_red_1.jpg
    * Pro_ject_Debut_III_yellow_1.jpg
    * Pro_ject_rpm_5.jpg
    * Pro_ject_rpm10.jpg


**Rørforstærkere**

    * jolida_JD102b.jpg
    * jolida_JD202a.jpg
    * jolida_JD300b.jpg
    * jolida_JD302b.jpg
    * jolida_JD502b.jpg 
 
## EKSTRAOPGAVE
Hvis du er hurtigt færdig!

Indsæt reklmebannere på hjemmesiden. Du skal selv beslutte hvor på siden reklamebannere vil passe ind. Find et API på nettet, som lader dig fetche bannere og indsæt vilkårlige bannere på hjemmesiden.

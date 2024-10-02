# Reflektion

Det var svårt att komma på idéer, men jag ville göra något som inte hade med klient- eller serverkod att göra, utan något som kan användas av alla. Unit converter-modulen är inte superunik, men det är något som jag personligen skulle använda. Speciellt när jag hittar nya matlagningsrecept i sociala medier är enheterna ofta amerikanska. Då skulle det vara supernyttigt att ha en knapp som automatiskt omvandlar värdena till metriska enheter, och vice versa.

Jag ville fokusera på namngivning och Clean Code-principer och därför hålla idén enklare. Ändå försökte jag göra som jag oftast har gjort, för att se vilka ändringar jag måste göra i mitt tankesätt.

Ytterligare var automatiska tester ett nytt koncept för mig, så jag behövde ta tid för det och dokumentation också.

Trots att modulen inte är superkomplicerad, har jag lärt mig viktiga principer och tekniker som jag kan tillämpa på mer komplexa projekt i framtiden. Jag inser också att jag har mycket att förbättra i designen och koden som jag kommer att göra vid nästa laboration. Det har också varit intressant att fokusera på dokumentation och kommunikation med andra programmerare som kommer att använda min modul.

## Kapitel 2: Namngivning
Eftersom i dagsläget är alla publika metodernas namn ganska lika varandra, tog jag med parameternamn i reflektionslistan också.

| Namn och förklaring | Reflektion och regler från Clean Code |
|--------------------|-------------------|
| **ConverterSystem** <br> Klassnamn på huvudklassen i modulen | **- Class Names** </br> Namnet är en substantivfras. </br> **- Don't Add Gratuitous Context** </br> Att ha System med i klassnamnet är överflödigt, eftersom det tillför inte något extra värde till förståelsen av klassens funktionalitet. Bara Converter skulle räcka. |
| **convertLength()** <br> Metodnamn på metod som omvandlar längdvärden till andra enheter. | **- Method Names** </br> Namnet börjar med ett verb. </br> **- Add Meaningful Context** </br> I det här fallet har jag flera metoder som använder verbet convert. För att tydligt skilja dem har jag lagt till "mätningstypen", i det här fallet length. |
| **convertMultipleValues()** <br> Metodnamn på metod som omvandlar flera värden på samma gång. | **- Add Meaningful Context** </br> Metodnamnet måste berätta att metoden omvandlar många värden av samma "mätningstyp" och enhet. </br> **- Avoid Disinformation** </br> Values kan vara ett alltför brett begrepp och kan tolkas på många olika sätt. Det skulle vara bättre att använda Numbers, som redan används i de flesta parametrarna. </br> **- Use Intention-Revealing Names** </br> Namnet berättar tydligt vad metoden gör. |
| **conversionType** <br> Parameternamn i metoden convertMultipleValues() | **- Avoid disinformation** </br> Type kan blandas ihop med typer som används i JS operatorn typeOf(). Ett bättre namn skulle vara t.ex. measurementCategory. </br> **- Use Pronounceable Names** </br> Namnet är lätt att uttala i diskussion. |
| **numberToConvert** <br> Parameternamn i alla tillgängliga metoder (i metoden convertMultipleValues() kallas det numbersToConvert) | **- Don’t Add Gratuitous Context** </br> Även om det gör parameternamnet tydligare, skulle bara Number räcka till i funktionskontexten som den används i. </br> **- Use Searchable Names** </br> Namnet är lätt att hitta med sökfunktionen. Dock om den skulle ändras till bara Number, skulle den blandas ihop med typen number. |

Allmän reflektion:
I tidigare kursernas muntliga examinationer har jag ofta fått bra feedback om kodens läsbarhet och tydlighet. Jag har tänkt att jag namnger så tydligt som möjligt för att underlätta förståelsen för mig själv senare. Det har nämligen ofta varit lite svårt att komma in i tidigare skriven kod utan förstårbara namn.

**Avoid Encodings** är väldigt viktigt för förståelse, men jag tycker att det är ändå nödvändigt i vissa fall. Om kontexten gör det tydligt vad som menas, kodningarna är standardiserade och det gör namnet betydligt kortare är det bra att använda förkortningar. T.ex. i min modul har varje Converter-klass privata fält som använder förkortningar: WeightConverter har t.ex. en #kgToLbConversionRate fält.

I mer komplexa moduler skulle **Use Solution Domain Names** och **Use Problem Domain Names** vara viktiga, särskilt om typiska utvecklingsteknologier används. De är lätta att förstå i kontexten de är i. De måste dock vara riktade mot andra programmerare och inte slutanvändaren. 

Det känns nyttigt att tänka lite djupare på namngivningen, då det är lätt att göra för korta, långa eller onödigt beskrivande namn. 

Jag vill ta upp ännu ett val jag gjorde med namngivningen i Converter-klasserna. Alla konverteringsmetoderna, t.ex. metersToFeet, celsiusToFahrenheit och gallonsToLiters, är skrivna utan verb. Det bryter mot reglerna i Clean Code, men jag inser att metoderna är ändå tydliga i kontextet de används i, t.ex. LengthConverter.metersToFeet. Att lägga till convertFrom framför varje existerande metodnamn gör namnen onödigt långa. Det här valet är också konsistent i varje enskild Converter klass.


## Kapitel 3: Funktioner

Alla längsta metoderna innehåller nästlade switch satser för att möjliggöra val av konverteringsenheter. På grund av tiden hinner jag inte bryta dem ut i flera funktioner, men ska försöka hitta en lösning senare (kanske abstraktion). Funktionerna bryter också mot **Don't repeat yourself** principen, eftersom de alla har en gemensam struktur även om de specifika enheterna skiljer sig från varandra. Switch satserna med flera return satser bryter också mot **Structured Programming**.

Annars har jag försökt bryta ut funktionalitet i enskilda klasser och privata funktioner. T.ex. validering av inmatning sköts i InputValidator och andra klasserna har en #validateInputs metod som anropas klassen. På samma sätt finns omvandlingslogikerna i sina egna funktioner i varsin Controller klass. 

| Metodnamn och länk eller kod | antal rader ( ej ws ) | Reflektion |
|--------------------|------------|---------------|
| **convert** </br> VolumeConverters metod för konverteringsselektion. | 56 | **Switch Statements** </br> Funktionen innehåller bara en switch sats. </br> **Do One Thing** </br> Eftersom funktionen innehåller nästlade switch satser, gör den många saker. </br> **Function Arguments** </br> Funktionen har tre argument. </br> </br> Metoden bör brytas ut i fler enskilda funktioner för att minimera switch satserna. |
| **convert** </br> Speedconverters metod för konverteringsselektion. | 44 | **Switch Statements** </br> Funktionen innehåller bara en switch sats. </br> **Do One Thing** </br> Eftersom funktionen innehåller nästlade switch satser, gör den många saker. </br> **Function Arguments** </br> Funktionen har tre argument. </br> </br> Metoden bör brytas ut i fler enskilda funktioner för att minimera switch satserna. |
| **convert** </br> WeightConverters metod för konverteringsselektion. | 43 | **Switch Statements** </br> Funktionen innehåller bara en switch sats. </br> **Do One Thing** </br> Eftersom funktionen innehåller nästlade switch satser, gör den många saker. </br> **Function Arguments** </br> Funktionen har tre argument. </br> </br> Metoden bör brytas ut i fler enskilda funktioner för att minimera switch satserna. |
| **convert** </br> LengthConverters metod för konverteringsselektion. | 43 | **Switch Statements** </br> Funktionen innehåller bara en switch sats. </br> **Do One Thing** </br> Eftersom funktionen innehåller nästlade switch satser, gör den många saker. </br> **Function Arguments** </br> Funktionen har tre argument. </br> </br> Metoden bör brytas ut i fler enskilda funktioner för att minimera switch satserna. |
| **convert** </br> TemperatureConverters metod för konverteringsselektion. | 26 | **Switch Statements** </br> Funktionen innehåller bara en switch sats. </br> **Do One Thing** </br> Eftersom funktionen innehåller nästlade switch satser, gör den många saker. </br> **Function Arguments** </br> Funktionen har tre argument. </br> </br> Metoden bör brytas ut i fler enskilda funktioner för att minimera switch satserna. |

I det här fallet känns det svårt att minska antalet parameter i hela modulen, eftersom funktionen måste ju veta vilka enheter som kommer att användas samt numret som omvandlas. Men kanske kommer jag på en lösning till detta också.

**Use Descriptive Names** bryts inte så mycket, även om i nyläget heter alla funktionerna samma sak (convert). Kontextet som de är i (t.ex. LengthConverter.convert(...)) borde göra det tydligt vad som omvandlas. Nu är det även möjligt att skapa ett interface med en gemensam convert() metod för alla Converter-klasserna. Annars har jag försökt skapa tydliga namn.

**Have No Side Effects** Eftersom **Do One Thing** regeln bryts, gör metoderna saker som inte berättas i metodsnamnet. Jag har ändå försökt hålla funktionaliteten relaterat till metodens uppgift och annars brytit ut funktionalitet i privata metoder.

**Prefer Exceptions to Returning Error Codes** Min modul kastar undantag istället för att hålla på med error kod.

___________________
Först hade jag kodat en anna lösning med super många switch satser och en ConverterSelector klass med bara switch satser. Men när jag började reflektera med hjälp av Clean Code boken vaknade jag upp och såg hur dålig och otydlig koden hade blivit. Jag kände mig att jag måste hitta en annan lösning med färre switch satser, även om jag i den här tidbegränsningen inte kan eliminera dem helt. 
Jag lyckades radera en stor del av switch satserna, men koden kan förbättras ännu mer i fortsättningen. Jag inser att jag skulle ha behövt tänka på lösningen mer i förhand med tanke på Do One Thing regeln som boken nämner. Det skulle ha verkligen sparat mig tid och besvär. 

Allmänt känner jag att jag har svårt att tydligt planera allt före jag börjar koda och det leder till många ändringar under processen. Jag har inte så mycket problem med namngivningen, men det här med funktioner känns mycket svårare. Just nu låter det lite ologiskt att varje funktion gör en sak, men kanske kommer det bli tydligare med tid. 

Jag tycker det är utmanande att göra enligt Do One Thing regeln och just i den här modulen är det svårt att följa Function Argument principen. 

I tidigare uppgifter känns det att jag har lyckats med att bryta ut funktionalitet i flera funktioner, speciellt när det har funnits linknande kod i flera ställen. Även om det inte har varit så "extremt" som i Do One Thing, har det säkert lagt grunden till enklare utveckling mot att uppfylla Clean Code standarderna. Just nu känns det ändå överflödigt, men vi får se vad jag tänker i fortsättningen. 

Som jag nämnde tidigare, har namngivningen inte varit ett stort problem för mig: jag försöker skapa tydliga namn för min egen skull. Skolans eslint har verkligen lärt mig att indentera rätt, och dessutom är det svårt för mig själv att förstå om koden inte är i tydliga block. 

Speciellt kodexemplena i de första kurserna har sättit en viss standard i mitt huvud. Jag hade inget tidigare erfarenhet om koding innan jag började utbildningen, så det var skönt att lära mig rätt på en gång. Förstås kommer den här kursen utveckla mina tanke- och arbetssätt vidare och utmana mig att uppfylla kodkvalitetskraven. 
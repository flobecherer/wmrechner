--WM-RECHNER WebApp--

Inhaltsverzeichnis
1. Idee und Konzept der WebApp
2. Umsetzung css-grid
3. Umsetzung HTML
4. Umsetzung React
3. Ideen zur Umsetzung des weiteren nicht fertigen Konzepts


1. Idee und Konzept der WebApp

  Die Idee hinter dieser WebApp ist, dass sie ein interaktiver Turnierechner sein soll, mit dem sich die gesamte Fußball-Weltmeisterschaft 2018 durchtippen lässt. Dabei dienen Buttons ("+" und "-") zum Einstellen der gewünschten Ergebnisse der Spiele. Diese Ergebnisse werden direkt in die darüberstehende Tabelle übernommen und die Position der beteiligten Teams direkt anhand der Zahlen berechnet und angepasst. Da die beiden bestplatzierten Teams aus jeder Gruppe das Achtelfinale erreichen sollen diese Teams mit ihrer Landesflagge in die Spiele des Achtelfinals eingefügt werden. Die siegreichen Teams des Achtelfinales in das Viertelfinale usw. Auch in den Ko-Spielen werden die Ergebnisse mittels Buttons eingestellt. Sobald der Nutzer das Finale getippt hat, wird die Flagge und der Name des siegreichen Teams in größerem Format im Vordergrund dargestellt.

2. css-grid

  Zur Gestaltung der WebApp wurde css-grid benutzt, womit sich das Layout der einzelnen Elemente gut anpassen lässt. Die Elemente der WebApp würden so in Zeilen und Spalten aufgeteilt, in welche ihre Child-Elemente eingefügt wurden, um eine übersichtliche Gliederung zu erhalten. Diese besteht aus der Gesamtüberschrift, darunter die Gruppenpahse ("groupStage") und darunter die KO-Phase der WM. Die Gruppenphase wird wiederum in einen oberen und unteren Bereich unterteilt. Im oberen befinden sich die Gruppen A bis D und im unteren die restlichen Gruppen. Die KO-Phase ist in vier gleichgroße Bereiche ("stage") eingeteilt, wobei je ein Bereich für das Achtelfinale, das Viertelfinale, das Halbfinale und das Finale vorgesehen sind. Innerhalb jeder "stage" sind die entsprechenden Spiele vorhanden.

3. HTML

  Das HTML-Dokument enthält den HTML-Baum für die in 2.1 beschriebene Gliederung. Die Elemente, welche mit React programmiert wurden sind jedoch nur als Platzhalter vorhanden und werden erst über "index.js" befüllt. In dem HTML-Dokument sind die Namen der Teams und die Flaggen ihrer Nation eingebunden, sowie die Spielpaarungen der einzelnen Gruppen während der Gruppenphase. Die Flaggen werden von Wikipedia per Link bezogen.

4. React

  In der Datei "index.js" sind drei React-Components definiert. Zum einen "Calculator" in welchem die Funktionen zum Inkrementieren bzw Dekrementieren der Werte des Spielergebnisses sowie der default state der sechs Spielergebnisse festgelegt sind. Dabei steht home1 für die Anzahl der Tore des Heimteams in ersten Spiel und away1 für die Anzahl der Tore des Auswärtsteams im ersten Spiel. Analog verhält es sich mit home2-6 und away2-6. Beim Inkrementieren ("incrementHome1") wird ein neuer State für home1 gesetzt, und zwar home1 + 1. Beim Dekrementieren ("decrementHome1") wird der neue State in Abhängigkeit des aktuellen Wertes in home1 gesetzt. Dazu wird zunächst in einer If-Schleife abgefragt, ob home1 größer als null ist. Ist dies der Fall, so ist der neue State home1 - 1. Falls home1 kleiner gleich null ist, wird der neue State auf home1 = 0 gesetzt, um keine negativen Werte zuzulassen. Die weiteren increment und decrement Funktionen sind analog aufgebaut. Anschließend werden die "+"- und "-"-Buttons innerhalb der Render-Funktion erstellt und die Werte von homeX : awayX dazwischen positioniert. Den Buttons werden die soeben definierten Funktionen so zugewiesen, dass sie zu dem Spiel passen. Also bei dem ersten Spiel rufen die vier Buttons die Funktionen "incrementHome1", "decrementHome1", "incrementAway1" bzw "decrementAway1" auf. Dieses Vorgehen ist für die verbleibenden fünf Spiele analog.

  Das React-Component "CalculatorSingleGame" ist eine einfachere Version von "Calculator", in der die Funktionsweise von "Calculator" nur ein einiges mal vorhanden ist. Dies ist notwendig, da in den KO-Spielen je nur ein Spiel stattfindet (z.B. Achtelfinale 1).

  Das React-Component "TableValues" beinhaltet die Werte, die im rechten Bereich der Tabelle zu finden sind. Dort sind für jedes der vier Teams in einer Gruppe die eigenen Tore, die Gegentore, die Tordifferenz, sowie die Punkte angeben. Die Funktion zur Berechnugn dieser Werte (computeValues1) beschreibe ich am Beispiel für Team 1 (erstes Team in der Gruppe):
  Team 1 ist in seinen Spielen 1, 3 und 5 das Heimteam. Daher berechnen sich die Tore von Team 1 aus home1 + home3 + home5 = goals1. Die Gegentore berechnen sich demnach aus den away-Werten dieser Spiele (counterGoals1). Die Tordifferenz ist die Summe aus goals1 und counterGoals1 und kann daher auch negativ werden. Die Berechnung der Punkte ist noch nicht implementiert (näheres siehe 5.).
  Die Berechnung dieser Werte erfordert einen Austausch der States zwischen den React-Components "Calculator" und "TableValues", was noch nicht funktionsfähig implementiert werden konnte (näheres siehe 5.).

  Die Definitionen dieser Components wird anschließend in die App eingefügt. Dies geschieht mittels einer Konstanten "domContainerXY", in welcher die ID des Bereichs im HTML-Dokument gespeichert wird, an der die Komponente eingefügt werden soll. Das Einfügen geschieht anschließend mit der Funktion "ReactDOM", in welche die React-Component und die Konstante mit der Positionsinformation übergeben werden.

5. Ideen zur Umsetzung des weiteren nicht fertigen Konzepts

  Von ürsprünglichen Konzept konnten bisher die Berechnung der Tabellenwerte nicht final inplementiert werden, da die Übergabe der States nicht richtig funktioniert hat.   Zunächst habe ich versucht den state mit Informationen zu home1, etc. an TableValues zu übergeben, danach habe ich versucht die Funktionen in TableValues an Calculator zu übergeben und beide Funktionen an den jeweiligen Button zu koppeln und schließlich hatte ich die Idee die Berechnungen aus TableValues direkt in Calculator zu verlegen und nur den state mit goals1,etc. in TableValues zum Einbinden in das Renderobjekt abzufragen. Keine dieser Ideen hat den gewünschten Effekt gebracht. Daher war eine Sortierung der Teams anhand der Tabellenwerte noch nicht möglich. Für diese Funktion würde ich versuchen mit Hilfe einer Sort-Funktion zu arbeiten.

  Für die Berechnung der Punkte innerhalb der Tabelle wäre wieder die Übergabe des state mit hom1, etc. an TableValues notwendig. Dort müsste dann mittels einer If-Else-Schleife überprüft werden, ob eines der Teams einen höheren Wert oder beide den gleichen Wert haben. Abhängig davon würde das Team mit dem höheren Wert pointsXY + 3 bekommen und das Team mit den niedrigeren Wert pointsXY = pointsXY. Falls beide Teams den gleichen Wert haben (Unentschieden), würden beide pointsXY + 1 erhalten.

  Nach der Sortierung würde ich versuchen die zwei besten Teams jeder Gruppe in das Achtelfinale zu übernehmen. Ausgehend von dem eingestellten Ergebnis im Achtelfinale würde das Team mit dem höheren Wert (home1 > away1 oder home1 < away1) ins Viertelfinale vorrücken. Dies ließe sich mit einer Maximum- oder Größer-Funktion bewerkstelligen. Für die Weiteren Phasen der Ko-Runde würde sich dieses Vorgehen nicht ändern, außer beim Halbfinale, da dort die Verlierer ins Spiel um Platz 3 vorrücken. Im Halbfinale wäre eine If-Else-Schleife nötig (If höherer Wert => Finale Else Spiel um Platz 3).
  Zunächst hatte ich die Idee das Siegerteam mittels eines alert anzeigen zu lassen, jedoch entschied ich mich dazu das Konzept diesbezüglich noch einmal zu ändern, da es für den Nutzer störend wäre, wenn ständig Popups bei der Änderung des Ergebnisses auftauchen. Daher würde ich nun einfach ein fensterfüllendes transparentes Div mit der Flagge und dem Namen des Siegerteams über die restliche App legen und den Hintergrund etwas abdunkeln. Alternativ wäre auch denkbar dies in dem Final Bereich unter den Spielen ohne extra div anzuzeigen.
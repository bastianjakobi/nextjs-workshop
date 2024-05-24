# React Grundlagen - Lösung

## Zielsetzung

Ziel dieser Übung ist es die React Grundlagen aus der Päsentation zu wiederholen und zu vertiefen. Wenn du alle Aufgaben erfolgreich abgeschlossen hast sollte deine Anwendung wie folgt aussehen:

![App](./md_images/app.png)

## Aufgaben

Öffne zunächst die Datei `Blog.tsx`. Diese Komponente kann in unserem Fall als Root-Komponente der App angesehen werden.

Du wirst nach dem Öffnen der Datei feststellen, dass die Komponente bereits einiges an Code aber auch einige Fehler enthält. Ziel dieser Übung ist es alle in der Datei enthaltenen `// TODO` Kommentare abzuarbeiten und so alle Fehler zu beheben.

1. **Fehlende States ergänzen** (Hint: useState)

- Erstelle einen State mit dem Titel `posts` und dem Typ `undefined | Post[]`. Der State soll initial `undefined` sein.

- Erstelle einen State mit dem Titel `displayAmount` und dem Typ `number`. Der State soll initial `5` sein.

2. **Daten von API in State speichern**

- Betrachte den vorgegebenen Code innerhalb des `useEffect` Hooks.
- Speichere die von der API erhaltenen Daten im State `posts`.

3. **Posts rendern** (Hint: map)

- Rendere innerhalb des `div` Elements mit der Klasse `blog-grid` alle Posts die sich im State `posts` befinden.
  Verwende hierzu die bereits importierte Komponente `PostCard` und übergebe dieser die jeweiligen Post Daten über die `post` Prop. Übergebe der Komponente zusätzlich eine `key` Prop mit dem Wert `post.id`.

## Bonus-Aufgabe: Mengenfilter

Wie du vielleicht schon gesehen hast, gibt es direkt unter der Überschrift der Seite ein Dropdown-Menü, welches es ermöglichen soll die Menge der angezeigten Posts zu filtern. Aktuell ist dieses Dropdown-Menü jedoch noch ohne Funktion, da es nicht korrekt mit dem State `displayAmount` verbunden ist.

4. Verwende `displayAmount` als Default Wert des `select` Elements.
5. Update den State `displayAmount` wenn sich der Wert des `select` Elements ändert. Auf den Wert des select Elementes kannst du über `parseInt(e.target.value)` zugreifen.
6. Ändere das Rendering der Posts so, dass nur die Anzahl an Posts angezeigt wird, die im State `displayAmount` gespeichert ist. Hierfür kannst du `posts.slice(0, displayAmount)` vor dem `map` Aufruf verwenden.

# Next.js Optimierungen - Lösung

## Zielsetzung

Ziel dieser Übung ist es die im Rahmen des Workshops erstellte Next.js Anwendung für ein späteres Deployment zu optimieren. Hierfür werden wir eine hohe SEO-Performance sicherstellen und sämtliche angezeigten Bilder mit Hilfe von Next.js optimieren.

## Aufgaben

1. **Statische SEO-Optimierung**:

- Füge jeder Seite der Anwendung, außer der dynamischen Unterseite für Blog-Post-Details, einen passenden Meta-Titel und eine Meta-Beschreibung hinzu.
- Rufe die jeweilige Seite im Browser auf und überprüfe, dass der Meta-Titel in der Browser-Tab-Leiste angezeigt wird. Überprüfe ebenfalls, dass die Meta-Beschreibung im Quellcode der Seite vorhanden ist.

2. **Dynamische SEO-Optimierung**:

- Füge der dynamischen Unterseite für Blog-Post-Details einen dynamischen Meta-Titel und eine dynamische Meta-Beschreibung hinzu. Verwende hierfür die Daten des jeweiligen Blog-Posts. (Hint: generateMetadata)

3. **Bild-Optimierung**:

- Öffne die Datei `src/components/PostCard.tsx` und optimiere das angezeigte Bild wie in der Vorlesung beschrieben.
  - Die Angabe von Width und Height ist in unserem Fall nicht optional, da wir die Bilder im Vorfeld nicht importieren sondern dynamisch laden. Als Width und Height kannst du die **Werte 640 und 427** verwenden.
  - Um existierende Styles beizubehalten, stelle bitte sicher, dass du auch dem neuen Image folgenden Classname gibst `className={styles.postImage}`
- Öffne die Datei `src/app/blog/[postId]/page.tsx` und optimiere auch das hier angezeigte Bild wie vorhergehend beschrieben.

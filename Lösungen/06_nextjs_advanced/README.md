# Next.js Fortgeschritten - Lösung

## Zielsetzung

Ziel dieser Übung ist es das fortgeschrittene Next.js Wissen aus der Päsentation zu wiederholen und zu vertiefen. Wenn du alle Aufgaben erfolgreich abgeschlossen hast sollte deine Anwendung wie folgt aussehen:

![App](./md_images/nextjs.gif)

## Aufgaben

1. **Alle Blogposts laden**

- Öffne die Datei `src/app/blog/page.tsx`
- Füge den nötigen Code hinzu um sämtliche Blogposts aus der API zu laden und speichere diese in einer Variablen 'posts'. Verwende für das Laden der Daten folgenden Code:

```ts
await (await fetch(`${process.env.URL}/api`)).json() as Post[];
```

2. **Blogpost anzeigen**

- Rendere innerhalb des Containers `<div className={styles.postGrid}>` für die ersten 6 Blogposts einen Next.js Link, der auf die Detailseite des jeweiligen Blogposts verweist. Verwende hierzu map und slice. Der Link sollte jeweils folgenden Inhalt haben:

```tsx
<div className={styles.post}>
  <img src={"/" + post.imagePath} alt={post.title} className={styles.postImage} />
  <div className={styles.postContent}>
    <h2>{post.title.substring(0, 15)}</h2>
    <p>{post.body.substring(0, 100)}...</p>
  </div>
</div>
```

3. **Detailseite anzeigen**

- Öffne die Datei `src/app/blog/[postId]/page.tsx`
- Füge den nötigen Code hinzu um den jeweiligen Blogpost aus der API zu laden und speichere diesen in einer Variablen 'post'. Verwende für das Laden der Daten folgenden Code:

```ts
await (await fetch(`${process.env.URL}/api/${postId}`)).json() as Post;
```

- Rendere innerhalb des Containers `<main className={styles.main}>` den Blogpost mit folgendem Inhalt:

```tsx
<img src={'/' + post.imagePath} alt={post.title} />
<h1>{post.title.substring(0, 15)}</h1>
<p>{post.body}</p>
```

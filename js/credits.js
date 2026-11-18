// Credits page: lists every link-preview image and where it came from.
const table = document.querySelector(".credits-table")
const body = table.querySelector("tbody")

try {
    const response = await fetch("/locales/en/linkPreviews.json")
    if (!response.ok) throw new Error(`Image credits request failed: ${response.status}`)
    const previews = await response.json()
    for (const [key, preview] of Object.entries(previews)) {
        if (!preview.img || !preview.imageSource) continue
        const url = preview.link || key
        const row = body.insertRow()

        const articleLink = document.createElement("a")
        articleLink.href = url
        articleLink.textContent = decodeURIComponent(new URL(url, location.href).pathname.split("/").pop())
            .split(":").pop().replaceAll("_", " ").replace(/\.html$/, "")
        row.insertCell().append(articleLink)

        const image = new URL(preview.imageSource)
        const imageLink = document.createElement("a")
        imageLink.href = preview.imageSource
        imageLink.textContent = image.hostname.endsWith("uesp.net") ? "UESP file page"
            : image.hostname.endsWith("fandom.com") ? "Elder Scrolls Wiki (Fandom) file page" : image.hostname
        row.insertCell().append(imageLink)

        row.insertCell().textContent = preview.imageLicense === "by-sa"
            ? "Composition by UESP (CC BY-SA 2.5); components copyright Bethesda Softworks"
            : "Copyright Bethesda Softworks"
    }
    table.hidden = body.rows.length === 0
} catch (error) {
    console.error("Could not load image credits:", error)
    document.querySelector("#credits-error").hidden = false
}

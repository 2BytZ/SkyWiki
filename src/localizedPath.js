const localizedPaths = {
    "/": {
        do: "/dovahzul_Home",
    },
    "/Dranleic_Haligdrake": {
        do: "/dovahzul_Dranleic_Haligdrake",
    },
    "/Pharis_Ironeye": {
        do: "/dovahzul_Pharis_Ironeye"
    }
}

export function getLocalizedPath(path, language) {
    const canonicalPath = Object.entries(localizedPaths).find(([, translations]) => (
        Object.values(translations).includes(path)
    ))?.[0] ?? path

    return localizedPaths[canonicalPath]?.[language] ?? canonicalPath
}
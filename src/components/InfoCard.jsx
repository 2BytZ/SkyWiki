

export function InfoCard({info}) {
    const description = Array.isArray(info.desc) ? info.desc : [{text: info.desc}]

    return (
        <tr>
            <td>{info.title}</td>
            <td>
                {description.map((part, index) => (
                    part.href ? (
                        <a key={index} href={part.href}>{part.text}</a>
                    ) : (
                        <span key={index}>{part.text}</span>
                    )
                ))}
            </td>
        </tr>
    )
}
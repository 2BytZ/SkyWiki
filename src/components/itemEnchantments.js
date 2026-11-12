const armorSlots = ["head", "neck", "chest", "hands", "finger", "feet", "shield"];

export function resolveItemEnchantments(item, catalog, translatedCatalog) {
    const enchantments = [];
    const errors = [];
    const type = item.type;

    if (type != null && type !== "weapon" && type !== "armor") {
        errors.push(`Unknown item type "${type}".`);
    }

    if (type === "armor" && !armorSlots.includes(item.slot)) {
        errors.push(`Armor requires a valid slot (${armorSlots.join(", ")}).`);
    }

    if (item.enchantment == null) {
        return { enchantments, errors };
    }
    if (!Array.isArray(item.enchantment)) {
        errors.push("Enchantment must be an array.");
        return { enchantments, errors };
    }
    if (item.enchantment.length && type !== "armor" && type !== "weapon") {
        errors.push("Enchanted items must have type armor or weapon.");
        return { enchantments, errors };
    }

    item.enchantment.forEach((entry, index) => {
        if (!entry || typeof entry.id !== "string" || !entry.id) {
            errors.push(`Enchantment ${index + 1} needs an id.`);
            return;
        }

        const definition = catalog?.[type]?.[entry.id];
        if (!definition || typeof definition.text !== "string") {
            errors.push(`Unknown ${type} enchantment "${entry.id}".`);
            return;
        }
        let slotError;
        if (type === "armor") {
            if (!Array.isArray(definition.validItems)) {
                errors.push(`Armor enchantment "${entry.id}" needs a validItems array.`);
                return;
            }
            if (!armorSlots.includes(item.slot)) {
                return;
            }
            if (!definition.validItems.includes(item.slot) && entry.allowInvalidSlot !== true) {
                slotError = `Enchantment "${entry.id}" is not valid for slot "${item.slot}".`;
                errors.push(slotError);
            }
        }

        const translatedText = translatedCatalog?.[type]?.[entry.id]?.text;
        const description = typeof translatedText === "string" ? translatedText : definition.text;
        if (description.includes("<mag>") && (
            (typeof entry.magnitude !== "number" && typeof entry.magnitude !== "string")
            || String(entry.magnitude).trim() === ""
        )) {
            errors.push(`Enchantment "${entry.id}" needs a magnitude.`);
            return;
        }
        enchantments.push({
            id: entry.id,
            text: description.replaceAll("<mag>", String(entry.magnitude)),
            ...(slotError ? { error: slotError } : {}),
        });
    });

    return { enchantments, errors };
}

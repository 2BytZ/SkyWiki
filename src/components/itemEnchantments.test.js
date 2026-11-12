import assert from "node:assert/strict";
import test from "node:test";
import { resolveItemEnchantments } from "./itemEnchantments.js";

const catalog = {
    weapon: {
        fire: { text: "Deals <mag> damage, then <mag> more." },
        frost: { text: "Deals <mag> frost damage." },
    },
    armor: {
        alchemy: { validItems: ["head", "hands"], text: "Potions are <mag>% stronger." },
    },
};

test("resolves multiple enchantments and replaces every magnitude placeholder", () => {
    const result = resolveItemEnchantments({
        type: "weapon",
        enchantment: [{ id: "fire", magnitude: 10 }, { id: "frost", magnitude: 0 }],
    }, catalog);
    assert.deepEqual(result, {
        enchantments: [
            { id: "fire", text: "Deals 10 damage, then 10 more." },
            { id: "frost", text: "Deals 0 frost damage." },
        ],
        errors: [],
    });
});

test("checks armor slots and allows explicitly marked exceptions", () => {
    const enchantment = [{ id: "alchemy", magnitude: 24 }];
    assert.deepEqual(resolveItemEnchantments({ type: "armor", slot: "head", enchantment }, catalog).errors, []);
    const invalid = resolveItemEnchantments({ type: "armor", slot: "feet", enchantment }, catalog);
    assert.equal(invalid.enchantments[0].text, "Potions are 24% stronger.");
    assert.match(invalid.errors[0], /not valid for slot "feet"/);
    assert.equal(invalid.enchantments[0].error, invalid.errors[0]);
    const exceptional = resolveItemEnchantments({
        type: "armor", slot: "feet", enchantment: [{ ...enchantment[0], allowInvalidSlot: true }],
    }, catalog);
    assert.equal(exceptional.enchantments[0].text, "Potions are 24% stronger.");
    assert.equal(exceptional.enchantments[0].error, undefined);
    assert.deepEqual(exceptional.errors, []);
    assert.match(resolveItemEnchantments({ type: "armor" }, catalog).errors[0], /valid slot/);
});

test("reports invalid enchantments rather than displaying incomplete descriptions", () => {
    const result = resolveItemEnchantments({
        type: "weapon",
        enchantment: [{ id: "unknown", magnitude: 5 }, { id: "fire" }],
    }, catalog);
    assert.deepEqual(result.enchantments, []);
    assert.match(result.errors[0], /Unknown weapon enchantment/);
    assert.match(result.errors[1], /needs a magnitude/);
    assert.match(resolveItemEnchantments({ enchantment: [{ id: "fire" }] }, catalog).errors[0], /type armor or weapon/);
    assert.match(resolveItemEnchantments({ type: "weapon", enchantment: "fire" }, catalog).errors[0], /must be an array/);
});

test("uses translated descriptions when available, falling back per enchantment", () => {
    const result = resolveItemEnchantments({
        type: "weapon",
        enchantment: [{ id: "fire", magnitude: 3 }, { id: "frost", magnitude: 5 }],
    }, catalog, { weapon: { fire: { text: "Translated: <mag>." } } });
    assert.deepEqual(result.enchantments.map((entry) => entry.text), [
        "Translated: 3.",
        "Deals 5 frost damage.",
    ]);
});

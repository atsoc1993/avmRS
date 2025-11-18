export type ItemStruct = {
    name: string;
    image_url: string;
};

export type ResourcesType = {
    all_items: Record<string, ItemStruct>;
    wood: Record<string, ItemStruct>;
    ore: Record<string, ItemStruct>;
}

export type ItemsType = {
    all_items: Record<string, ItemStruct>;
    helms: Record<string, ItemStruct>;
    bodies: Record<string, ItemStruct>;
    legs: Record<string, ItemStruct>;
    boots: Record<string, ItemStruct>;
    swords: Record<string, ItemStruct>;
    shields: Record<string, ItemStruct>;
}

export type CharacterSet = {
    helm: ItemStruct | undefined;
    body: ItemStruct | undefined;
    sword: ItemStruct | undefined;
    shield: ItemStruct | undefined;
    legs: ItemStruct | undefined;
    boots: ItemStruct | undefined;
};

const BRONZE_BOOTS = { name: "Bronze Boots", image_url: "armor/bronze_boots.png" };
const BRONZE_HELM = { name: "Bronze Helm", image_url: "armor/bronze_helm.png" };
const BRONZE_PLATEBODY = { name: "Bronze Platebody", image_url: "armor/bronze_platebody.png" };
const BRONZE_PLATELEGS = { name: "Bronze Platelegs", image_url: "armor/bronze_platelegs.png" };
const BRONZE_SHIELD = { name: "Bronze Shield", image_url: "armor/bronze_shield.png" };
const BRONZE_SWORD = { name: "Bronze Sword", image_url: "weapons/bronze_sword.png" };

const IRON_BOOTS = { name: "Iron Boots", image_url: "armor/iron_boots.png" };
const IRON_HELM = { name: "Iron Helm", image_url: "armor/iron_helm.png" };
const IRON_PLATEBODY = { name: "Iron Platebody", image_url: "armor/iron_platebody.png" };
const IRON_PLATELEGS = { name: "Iron Platelegs", image_url: "armor/iron_platelegs.png" };
const IRON_SHIELD = { name: "Iron Shield", image_url: "armor/iron_shield.png" };
const IRON_SWORD = { name: "Iron Sword", image_url: "weapons/iron_sword.png" };

const STEEL_BOOTS = { name: "Steel Boots", image_url: "armor/steel_boots.png" };
const STEEL_HELM = { name: "Steel Helm", image_url: "armor/steel_helm.png" };
const STEEL_PLATEBODY = { name: "Steel Platebody", image_url: "armor/steel_platebody.png" };
const STEEL_PLATELEGS = { name: "Steel Platelegs", image_url: "armor/steel_platelegs.png" };
const STEEL_SHIELD = { name: "Steel Shield", image_url: "armor/steel_shield.png" };
const STEEL_SWORD = { name: "Steel Sword", image_url: "weapons/steel_sword.png" };

const MITHRIL_BOOTS = { name: "Mithril Boots", image_url: "armor/mithril_boots.png" };
const MITHRIL_HELM = { name: "Mithril Helm", image_url: "armor/mithril_helm.png" };
const MITHRIL_PLATEBODY = { name: "Mithril Platebody", image_url: "armor/mithril_platebody.png" };
const MITHRIL_PLATELEGS = { name: "Mithril Platelegs", image_url: "armor/mithril_platelegs.png" };
const MITHRIL_SHIELD = { name: "Mithril Shield", image_url: "armor/mithril_shield.png" };
const MITHRIL_SWORD = { name: "Mithril Sword", image_url: "weapons/mithril_sword.png" };

const ADAMANT_BOOTS = { name: "Adamant Boots", image_url: "armor/adamant_boots.png" };
const ADAMANT_HELM = { name: "Adamant Helm", image_url: "armor/adamant_helm.png" };
const ADAMANT_PLATEBODY = { name: "Adamant Platebody", image_url: "armor/adamant_platebody.png" };
const ADAMANT_PLATELEGS = { name: "Adamant Platelegs", image_url: "armor/adamant_platelegs.png" };
const ADAMANT_SHIELD = { name: "Adamant Shield", image_url: "armor/adamant_shield.png" };
const ADAMANT_SWORD = { name: "Adamant Sword", image_url: "weapons/adamant_sword.png" };

const RUNE_BOOTS = { name: "Rune Boots", image_url: "armor/rune_boots.png" };
const RUNE_HELM = { name: "Rune Helm", image_url: "armor/rune_helm.png" };
const RUNE_PLATEBODY = { name: "Rune Platebody", image_url: "armor/rune_platebody.png" };
const RUNE_PLATELEGS = { name: "Rune Platelegs", image_url: "armor/rune_platelegs.png" };
const RUNE_SHIELD = { name: "Rune Shield", image_url: "armor/rune_shield.png" };
const RUNE_SWORD = { name: "Rune Sword", image_url: "weapons/rune_sword.png" };

const DRAGON_BOOTS = { name: "Dragon Boots", image_url: "armor/dragon_boots.png" };
const DRAGON_HELM = { name: "Dragon Helm", image_url: "armor/dragon_helm.png" };
const DRAGON_PLATEBODY = { name: "Dragon Platebody", image_url: "armor/dragon_platebody.png" };
const DRAGON_PLATELEGS = { name: "Dragon Platelegs", image_url: "armor/dragon_platelegs.png" };
const DRAGON_SHIELD = { name: "Dragon Shield", image_url: "armor/dragon_shield.png" };
const DRAGON_SWORD = { name: "Dragon Sword", image_url: "weapons/dragon_sword.png" };

const COPPER_ORE = { name: "Copper Ore", image_url: "resources/ore/ore_copper.png" };
const TIN_ORE = { name: "Tin Ore", image_url: "resources/ore/ore_tin.png" };
const IRON_ORE = { name: "Iron Ore", image_url: "resources/ore/ore_iron.png" };
const COAL_ORE = { name: "Coal Ore", image_url: "resources/ore/ore_coal.png" };
const MITHRIL_ORE = { name: "Mithril Ore", image_url: "resources/ore/ore_mithril.png" };
const ADAMANTITE_ORE = { name: "Adamantite Ore", image_url: "resources/ore/ore_adamantite.png" };
const RUNE_ORE = { name: "Rune Ore", image_url: "resources/ore/ore_rune.png" };

const NORMAL_WOOD = { name: "Normal Wood", image_url: "resources/wood/logs_normal.png" };
const OAK_WOOD = { name: "Oak Wood", image_url: "resources/wood/logs_oak.png" };
const WILLOW_WOOD = { name: "Willow Wood", image_url: "resources/wood/logs_willow.png" };
const MAPLE_WOOD = { name: "Maple Wood", image_url: "resources/wood/logs_maple.png" };
const YEW_WOOD = { name: "Yew Wood", image_url: "resources/wood/logs_yew.png" };
const MAGIC_WOOD = { name: "Magic Wood", image_url: "resources/wood/logs_magic.png" };

export const resources = {
    all_resources: {
        copper_ore: COPPER_ORE,
        tin_ore: TIN_ORE,
        iron_ore: IRON_ORE,
        coal_ore: COAL_ORE,
        mithril_ore: MITHRIL_ORE,
        adamantite_ore: ADAMANTITE_ORE,
        rune_ore: RUNE_ORE,
        normal_wood: NORMAL_WOOD,
        oak_wood: OAK_WOOD,
        willow_wood: WILLOW_WOOD,
        maple_wood: MAPLE_WOOD,
        yew_wood: YEW_WOOD,
        magic_wood: MAGIC_WOOD,
    },
    ore: {
        copper_ore: COPPER_ORE,
        tin_ore: TIN_ORE,
        iron_ore: IRON_ORE,
        coal_ore: COAL_ORE,
        mithril_ore: MITHRIL_ORE,
        adamantite_ore: ADAMANTITE_ORE,
        rune_ore: RUNE_ORE,
    },
    wood: {
        normal_wood: NORMAL_WOOD,
        oak_wood: OAK_WOOD,
        willow_wood: WILLOW_WOOD,
        maple_wood: MAPLE_WOOD,
        yew_wood: YEW_WOOD,
        magic_wood: MAGIC_WOOD,
    }
}
export const wearables = {
    all_items: {
        adamant_boots: ADAMANT_BOOTS,
        adamant_helm: ADAMANT_HELM,
        adamant_platebody: ADAMANT_PLATEBODY,
        adamant_platelegs: ADAMANT_PLATELEGS,
        adamant_shield: ADAMANT_SHIELD,
        adamant_sword: ADAMANT_SWORD,
        bronze_boots: BRONZE_BOOTS,
        bronze_helm: BRONZE_HELM,
        bronze_platebody: BRONZE_PLATEBODY,
        bronze_platelegs: BRONZE_PLATELEGS,
        bronze_shield: BRONZE_SHIELD,
        bronze_sword: BRONZE_SWORD,
        dragon_boots: DRAGON_BOOTS,
        dragon_helm: DRAGON_HELM,
        dragon_platebody: DRAGON_PLATEBODY,
        dragon_platelegs: DRAGON_PLATELEGS,
        dragon_shield: DRAGON_SHIELD,
        dragon_sword: DRAGON_SWORD,
        iron_boots: IRON_BOOTS,
        iron_helm: IRON_HELM,
        iron_platebody: IRON_PLATEBODY,
        iron_platelegs: IRON_PLATELEGS,
        iron_shield: IRON_SHIELD,
        iron_sword: IRON_SWORD,
        mithril_boots: MITHRIL_BOOTS,
        mithril_helm: MITHRIL_HELM,
        mithril_platebody: MITHRIL_PLATEBODY,
        mithril_platelegs: MITHRIL_PLATELEGS,
        mithril_shield: MITHRIL_SHIELD,
        mithril_sword: MITHRIL_SWORD,
        rune_boots: RUNE_BOOTS,
        rune_helm: RUNE_HELM,
        rune_platebody: RUNE_PLATEBODY,
        rune_platelegs: RUNE_PLATELEGS,
        rune_shield: RUNE_SHIELD,
        rune_sword: RUNE_SWORD,
        steel_boots: STEEL_BOOTS,
        steel_helm: STEEL_HELM,
        steel_platebody: STEEL_PLATEBODY,
        steel_platelegs: STEEL_PLATELEGS,
        steel_shield: STEEL_SHIELD,
        steel_sword: STEEL_SWORD,
    },
    helms: {
        bronze_helm: BRONZE_HELM,
        iron_helm: IRON_HELM,
        steel_helm: STEEL_HELM,
        mithril_helm: MITHRIL_HELM,
        adamant_helm: ADAMANT_HELM,
        rune_helm: RUNE_HELM,
        dragon_helm: DRAGON_HELM,
    },
    bodies: {
        bronze_platebody: BRONZE_PLATEBODY,
        iron_platebody: IRON_PLATEBODY,
        steel_platebody: STEEL_PLATEBODY,
        mithril_platebody: MITHRIL_PLATEBODY,
        adamant_platebody: ADAMANT_PLATEBODY,
        rune_platebody: RUNE_PLATEBODY,
        dragon_platebody: DRAGON_PLATEBODY,
    },
    legs: {
        bronze_platelegs: BRONZE_PLATELEGS,
        iron_platelegs: IRON_PLATELEGS,
        steel_platelegs: STEEL_PLATELEGS,
        mithril_platelegs: MITHRIL_PLATELEGS,
        adamant_platelegs: ADAMANT_PLATELEGS,
        rune_platelegs: RUNE_PLATELEGS,
        dragon_platelegs: DRAGON_PLATELEGS,
    },
    shields: {
        bronze_shield: BRONZE_SHIELD,
        iron_shield: IRON_SHIELD,
        steel_shield: STEEL_SHIELD,
        mithril_shield: MITHRIL_SHIELD,
        adamant_shield: ADAMANT_SHIELD,
        rune_shield: RUNE_SHIELD,
        dragon_shield: DRAGON_SHIELD,
    },
    swords: {
        bronze_sword: BRONZE_SWORD,
        iron_sword: IRON_SWORD,
        steel_sword: STEEL_SWORD,
        mithril_sword: MITHRIL_SWORD,
        adamant_sword: ADAMANT_SWORD,
        rune_sword: RUNE_SWORD,
        dragon_sword: DRAGON_SWORD,
    },
    boots: {
        bronze_boots: BRONZE_BOOTS,
        iron_boots: IRON_BOOTS,
        steel_boots: STEEL_BOOTS,
        mithril_boots: MITHRIL_BOOTS,
        adamant_boots: ADAMANT_BOOTS,
        rune_boots: RUNE_BOOTS,
        dragon_boots: DRAGON_BOOTS,
    }
} as const satisfies ItemsType;

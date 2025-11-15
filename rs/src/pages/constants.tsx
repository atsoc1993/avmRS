export type ItemsType = {
    all_items: Record<string, string>;
    helms: Record<string, string>;
    bodies: Record<string, string>;
    legs: Record<string, string>;
    boots: Record<string, string>;
    swords: Record<string, string>;
    shields: Record<string, string>;
}

export type CharacterSet = {
    helm: string | undefined;
    body: string | undefined;
    sword: string | undefined;
    shield: string | undefined;
    legs: string | undefined;
    boots: string | undefined;
};

const ADAMANT_BOOTS = 'adamant_boots.png'
const ADAMANT_HELM = 'adamant_helm.png'
const ADAMANT_PLATEBODY = 'adamant_platebody.png'
const ADAMANT_PLATELEGS = 'adamant_platelegs.png'
const ADAMANT_SHIELD = 'adamant_shield.png'
const ADAMANT_SWORD = 'adamant_sword.png'
const BRONZE_BOOTS = 'bronze_boots.png'
const BRONZE_HELM = 'bronze_helm.png'
const BRONZE_PLATEBODY = 'bronze_platebody.png'
const BRONZE_PLATELEGS = 'bronze_platelegs.png'
const BRONZE_SHIELD = 'bronze_shield.png'
const BRONZE_SWORD = 'bronze_sword.png'
const DRAGON_BOOTS = 'dragon_boots.png'
const DRAGON_HELM = 'dragon_helm.png'
const DRAGON_PLATEBODY = 'dragon_platebody.png'
const DRAGON_PLATELEGS = 'dragon_platelegs.png'
const DRAGON_SHIELD = 'dragon_shield.png'
const DRAGON_SWORD = 'dragon_sword.png'
const IRON_BOOTS = 'iron_boots.png'
const IRON_HELM = 'iron_helm.png'
const IRON_PLATEBODY = 'iron_platebody.png'
const IRON_PLATELEGS = 'iron_platelegs.png'
const IRON_SHIELD = 'iron_shield.png'
const IRON_SWORD = 'iron_sword.png'
const MITHRIL_BOOTS = 'mithril_boots.png'
const MITHRIL_HELM = 'mithril_helm.png'
const MITHRIL_PLATEBODY = 'mithril_platebody.png'
const MITHRIL_PLATELEGS = 'mithril_platelegs.png'
const MITHRIL_SHIELD = 'mithril_shield.png'
const MITHRIL_SWORD = 'mithril_sword.png'
const RUNE_BOOTS = 'rune_boots.png'
const RUNE_HELM = 'rune_helm.png'
const RUNE_PLATEBODY = 'rune_platebody.png'
const RUNE_PLATELEGS = 'rune_platelegs.png'
const RUNE_SHIELD = 'rune_shield.png'
const RUNE_SWORD = 'rune_sword.png'
const STEEL_BOOTS = 'steel_boots.png'
const STEEL_HELM = 'steel_helm.png'
const STEEL_PLATEBODY = 'steel_platebody.png'
const STEEL_PLATELEGS = 'steel_platelegs.png'
const STEEL_SHIELD = 'steel_shield.png'
const STEEL_SWORD = 'steel_sword.png'


export const items = {
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

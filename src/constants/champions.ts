import { ChampionData } from './types';

export const champions: ChampionData[] = [
  {
    id: 'yasuo',
    name: '亚索',
    cost: 4,
    traits: ['浪人', '决斗者'],
    baseStats: {
      health: 850,
      maxHealth: 850,
      mana: 0,
      maxMana: 80,
      attack: 65,
      defense: 40,
      magicResist: 40,
      attackSpeed: 0.85,
      critChance: 0.25,
      critDamage: 1.5,
    },
    ability: {
      name: '斩钢闪',
      description: '对目标造成魔法伤害并击飞',
      manaCost: 80,
    },
  },
  // 添加更多英雄...
]; 
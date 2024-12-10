import { CHAMPION_COST, BATTLE_LOG_TYPE, TRAIT_LEVEL } from './enums';

// 位置坐标
export interface Position {
  x: number;
  y: number;
}

// 英雄基础属性
export interface ChampionStats {
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  attack: number;
  defense: number;
  magicResist: number;
  attackSpeed: number;
  critChance: number;
  critDamage: number;
}

// 英雄数据定义
export interface ChampionData {
  id: string;
  name: string;
  cost: CHAMPION_COST;
  traits: string[];
  baseStats: ChampionStats;
  ability: {
    name: string;
    description: string;
    manaCost: number;
  };
}

// 游戏中的英雄状态
export interface ChampionState extends ChampionStats {
  id: string;
  name: string;
  cost: number;
  level: number;
  traits: string[];
  position: Position;
  items: string[];
  isAlive: boolean;
  target?: string; // 目标英雄的id
}

// 玩家状态
export interface PlayerState {
  health: number;
  gold: number;
  level: number;
  exp: number;
  bench: ChampionState[];
  board: ChampionState[];
  activeTraits: { [trait: string]: number };
}

// 战斗日志条目
export interface BattleLogEntry {
  timestamp: number;
  type: BATTLE_LOG_TYPE;
  sourceId: string;
  targetId?: string;
  value?: number;
  message: string;
}

// 羁绊效果
export interface TraitEffect {
  requiredCount: number;
  description: string;
  stats: Partial<ChampionStats>;
}

// 羁绊定义
export interface Trait {
  id: string;
  name: string;
  description: string;
  effects: TraitEffect[];
}

// 羁绊统计信息
export interface TraitCount {
  /** 羁绊ID */
  id: string;
  /** 羁绊名称 */
  name: string;
  /** 当前拥有该羁绊的棋子数量 */
  count: number;
  /** 当前激活的等级(0-3) */
  activeLevel: TRAIT_LEVEL;
  /** 当前激活效果的描述 */
  description: string;
  /** 下一级羁绊信息 */
  nextLevel?: {
    /** 激活下一级所需的棋子数量 */
    required: number;
    /** 还差多少个棋子可以激活下一级 */
    remaining: number;
    /** 下一级效果的描述 */
    description: string;
  };
} 
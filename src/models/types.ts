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
  type: 'attack' | 'ability' | 'item' | 'death' | 'trait';
  sourceId: string;
  targetId?: string;
  value?: number;
  message: string;
}

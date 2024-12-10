import { CHAMPION_COST } from './enums';

/**
 * 棋盘配置
 */
export const BOARD = {
  ROWS: 8,
  COLS: 7,
  CELL_SIZE: 68,
  CELL_GAP: 4,
  ROW_OFFSET: 34,
} as const;

/**
 * 玩家配置
 */
export const PLAYER = {
  MAX_HEALTH: 100,
  START_GOLD: 2,
  START_LEVEL: 1,
  MAX_LEVEL: 9,
  BENCH_SIZE: 9,
  XP_PER_LEVEL: 4,
} as const;

/**
 * 商店配置
 */
export const SHOP = {
  REFRESH_COST: 2,
  SLOTS: 5,
  ODDS: {
    [CHAMPION_COST.ONE]: [1, 0.75, 0.55, 0.45, 0.30, 0.20, 0.15, 0.10, 0.05],
    [CHAMPION_COST.TWO]: [0, 0.25, 0.30, 0.33, 0.35, 0.35, 0.35, 0.30, 0.25],
    [CHAMPION_COST.THREE]: [0, 0, 0.15, 0.20, 0.30, 0.35, 0.35, 0.35, 0.35],
    [CHAMPION_COST.FOUR]: [0, 0, 0, 0.02, 0.05, 0.09, 0.13, 0.20, 0.27],
    [CHAMPION_COST.FIVE]: [0, 0, 0, 0, 0, 0.01, 0.02, 0.05, 0.08],
  } as const,
} as const; 
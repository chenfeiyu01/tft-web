import { ChampionStats } from "@/models/types";

export interface TraitEffect {
  requiredCount: number;
  description: string;
  stats: Partial<ChampionStats>;
}

export interface Trait {
  id: string;
  name: string;
  description: string;
  effects: TraitEffect[];
}

export const traits: Trait[] = [
  {
    id: 'duelist',
    name: '决斗者',
    description: '增加攻击速度',
    effects: [
      {
        requiredCount: 2,
        description: '所有决斗者攻击速度提升20%',
        stats: {
          attackSpeed: 0.2,
        },
      },
      {
        requiredCount: 4,
        description: '所有决斗者攻击速度提升35%',
        stats: {
          attackSpeed: 0.35,
        },
      },
    ],
  },
  // 添加更多羁绊...
];

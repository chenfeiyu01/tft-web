import { Trait } from './types';

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

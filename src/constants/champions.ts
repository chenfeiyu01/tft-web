export interface Champion {
  id: string;
  name: string;
  cost: number;
  traits: string[];
}

export const champions: Champion[] = [
  // 示例英雄数据
  {
    id: 'champion1',
    name: '战士',
    cost: 1,
    traits: ['战士', '帝国'],
  },
]; 
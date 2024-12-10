import { useMemo } from 'react';
import { ChampionState, TraitCount } from '@/constants/types';
import { traits } from '@/constants/traits';

/**
 * 用于计算和管理棋子羁绊的Hook
 */
export function useTraits(champions: ChampionState[]) {
  const traitCounts = useMemo(() => {
    console.group('羁绊计算');
    console.log('当前场上棋子:', champions);

    // 统计所有棋子的羁绊
    const counts: { [key: string]: number } = {};
    champions.forEach(champion => {
      champion.traits.forEach(trait => {
        counts[trait] = (counts[trait] || 0) + 1;
      });
    });
    console.log('羁绊统计:', counts);

    // 计算每个羁绊的激活状态
    const results = Object.entries(counts)
      .map(([traitId, count]): TraitCount | null => {
        const trait = traits.find(t => t.id === traitId);
        if (!trait) {
          console.warn(`未找到羁绊定义: ${traitId}`);
          return null;
        }

        // 找到当前激活的最高等级
        const activeEffect = [...trait.effects]
          .reverse()
          .find(effect => count >= effect.requiredCount);
        
        const activeLevel = activeEffect 
          ? trait.effects.indexOf(activeEffect) + 1 
          : 0;

        // 计算下一个等级
        const nextEffect = trait.effects.find(effect => count < effect.requiredCount);
        const nextLevel = nextEffect ? {
          required: nextEffect.requiredCount,
          remaining: nextEffect.requiredCount - count,
          description: nextEffect.description,
        } : undefined;

        const result = {
          id: trait.id,
          name: trait.name,
          count,
          activeLevel,
          description: activeEffect?.description || '未激活',
          nextLevel,
        };

        console.log(`羁绊 ${trait.name} 状态:`, {
          当前数量: count,
          激活等级: activeLevel,
          当前效果: result.description,
          下一级: nextLevel 
            ? `还需${nextLevel.remaining}个单位达到${nextLevel.required}个` 
            : '已达最高等级'
        });

        return result;
      })
      .filter(Boolean) as TraitCount[];

    console.groupEnd();
    return results;
  }, [champions]);

  // 按激活等级和数量排序
  const sortedTraits = useMemo(() => {
    const sorted = [...traitCounts].sort((a, b) => {
      if (b.activeLevel !== a.activeLevel) {
        return b.activeLevel - a.activeLevel;
      }
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return a.name.localeCompare(b.name);
    });

    console.log('排序后的羁绊:', sorted.map(t => ({
      羁绊: t.name,
      数量: t.count,
      等级: t.activeLevel
    })));

    return sorted;
  }, [traitCounts]);

  return {
    traits: sortedTraits,
    getChampionsWithTrait: (traitId: string) => {
      const championsWithTrait = champions.filter(c => c.traits.includes(traitId));
      console.log(`拥有羁绊 ${traitId} 的棋子:`, 
        championsWithTrait.map(c => c.name)
      );
      return championsWithTrait;
    },
  };
} 
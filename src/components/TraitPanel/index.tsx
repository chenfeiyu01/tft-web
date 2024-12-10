import React from 'react';
import { ChampionState } from '@/constants/types';
import { useTraits } from '@/hooks/useTraits';
import styles from './index.module.scss';

interface TraitPanelProps {
  champions: ChampionState[];
}

export const TraitPanel: React.FC<TraitPanelProps> = ({ champions }) => {
  const { traits, getChampionsWithTrait } = useTraits(champions);

  return (
    <div className={styles.traitPanel}>
      <h3 className={styles.title}>羁绊</h3>
      <div className={styles.traits}>
        {traits.map(trait => (
          <div 
            key={trait.id} 
            className={`${styles.trait} ${styles[`level${trait.activeLevel}`]}`}
            title={trait.nextLevel 
              ? `还需 ${trait.nextLevel.remaining} 个单位激活下一等级：${trait.nextLevel.description}`
              : undefined
            }
          >
            <div className={styles.traitHeader}>
              <span className={styles.traitName}>{trait.name}</span>
              <span className={styles.traitCount}>
                {trait.count}
                {trait.nextLevel && (
                  <span className={styles.nextLevel}>
                    /{trait.nextLevel.required}
                  </span>
                )}
              </span>
            </div>
            <div className={styles.traitDescription}>
              {trait.description}
            </div>
            <div className={styles.championsWithTrait}>
              {getChampionsWithTrait(trait.id).map(champion => (
                <span key={champion.id} className={styles.championTag}>
                  {champion.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
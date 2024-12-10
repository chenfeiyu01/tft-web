import React from 'react';
import { ChampionState, Position } from '@models/types';
import styles from './index.module.scss';

interface BoardProps {
  champions: ChampionState[];
  onDrop?: (position: Position) => void;
  onChampionClick?: (champion: ChampionState) => void;
}

export const Board: React.FC<BoardProps> = ({ champions, onDrop, onChampionClick }) => {
  const rows = 8;
  const cols = 7;

  const renderCell = (position: Position) => {
    const champion = champions.find(
      c => c.position.x === position.x && c.position.y === position.y
    );

    return (
      <div 
        key={`${position.x}-${position.y}`}
        className={styles.cell}
        onDrop={(e) => handleDrop(e, position)}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className={styles.hexagon}>
          {champion && (
            <div 
              className={styles.champion}
              onClick={() => onChampionClick?.(champion)}
            >
              <div className={styles.championName}>{champion.name}</div>
              <div className={styles.healthBar}>
                <div 
                  className={styles.healthFill}
                  style={{ width: `${(champion.health / champion.maxHealth) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const handleDrop = (e: React.DragEvent, position: Position) => {
    e.preventDefault();
    onDrop?.(position);
  };

  return (
    <div className={styles.board}>
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className={`${styles.row} ${row % 2 === 1 ? styles.rowOffset : ''}`}>
          {Array.from({ length: cols }).map((_, col) => renderCell({ x: col, y: row }))}
        </div>
      ))}
    </div>
  );
}; 
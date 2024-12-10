import React, { useState } from 'react';
import { Board } from '@/components/Board';
import { ChampionState, Position } from '@/models/types';

function App() {
  // 测试用的棋子数据
  const [champions, setChampions] = useState<ChampionState[]>([
    {
      id: 'yasuo-1',
      name: '亚索',
      cost: 4,
      level: 1,
      traits: ['浪人', '决斗者'],
      position: { x: 3, y: 3 }, // 棋盘中央
      items: [],
      isAlive: true,
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
    {
      id: 'yasuo-2',
      name: '亚索',
      cost: 4,
      level: 1,
      traits: ['浪人', '决斗者'],
      position: { x: 2, y: 2 },
      items: [],
      isAlive: true,
      health: 425, // 半血测试
      maxHealth: 850,
      mana: 0,
      maxMana: 80,
      attack: 65,
      defense: 40,
      magicResist: 40,
      attackSpeed: 0.85,
      critChance: 0.25,
      critDamage: 1.5,
    }
  ]);

  const handleDrop = (position: Position) => {
    console.log('Dropped at position:', position);
  };

  const handleChampionClick = (champion: ChampionState) => {
    console.log('Clicked champion:', champion);
  };

  return (
    <div className="App">
      {/* <h1>云顶之弈</h1> */}
      <Board 
        champions={champions}
        onDrop={handleDrop}
        onChampionClick={handleChampionClick}
      />
    </div>
  );
}

export default App;

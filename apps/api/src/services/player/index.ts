/**
 * any Service
 */

const players = new Map<string, any>();

/**
 * 新增玩家
 */
const addPlayer = (newPlayer: any) => {
  players.set(newPlayer.id, newPlayer);
};

/**
 * 移除玩家
 */
const removePlayer = (playerId: string) => {
  players.delete(playerId);
};

/**
 * 更新玩家資料
 */
const updatePlayer = (data: any) => {
  const player = players.get(data.id);
  if (!player) return;
  player.position = data.position;
  player.rotation = data.rotation;
  player.playAnimation = data.playAnimation;
  player.dailySessionId = data.dailySessionId;
};

/**
 * 取得所有玩家
 */
const getAllPlayersAsList = () => {
  return Array.from(players).map((player) => player[1]);
};

export const playerService = {
  addPlayer,
  removePlayer,
  updatePlayer,
  getAllPlayersAsList,
};

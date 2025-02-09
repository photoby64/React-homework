// 게임 상수

export const INITIAL_CELLS = Array(9).fill(null) ;

export enum Player {
  ONE = '😎',
  TWO = '🍀'
}
// console.log(Player.ONE);
// console.log(Player.TWO);

export type PlayerType =  null | Player;
export type Cells = PlayerType[]; // 셀 상태를 배열로 관리


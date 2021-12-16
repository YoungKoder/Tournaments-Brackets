export interface MatchI {
  mid: number;
  winner: 0;
  round: 1;
  competitors: Array<CompetitorI>;
  winnerMid: number;
  position_0: number;
  position_1: 8;
  tid: number;
}

export interface CompetitorI {
  mid: number;
  weight: number;
  position: number;
  score: number | null;
  tid: number;
}

export enum TournamentFormat {
  single_elimination = 1,
  double_elimination = 2,
}

export interface ParticipantI {
  name: string;
  position: number;
  uid: number;
  status: number;
  tid: number;
}

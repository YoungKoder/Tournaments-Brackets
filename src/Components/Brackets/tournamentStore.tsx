import { makeAutoObservable, onBecomeObserved } from "mobx";
import Api from "../../shared/api";
import { MatchI, TournamentFormat } from "./tournamentTypes";
import { ParticipantI as ParticipantII } from "./tournamentTypes";
export interface ParticipantI {
  name: string;
  participantId: string;
}

export interface BracketsStoreI {
  brackets: Array<BracketI>;
  addBracket: (name: string) => void;
  setBracketActive: (id: string) => void;
  setBracketUnActive: () => void;
  addNewParticipant: (bracketId: string) => () => void;
  deleteParticipant: (
    bracketId: string
  ) => (participantId: string) => () => void;
  editParticipant: (
    bracketId: string
  ) => (participantId: string, value: string) => void;
  getParticipants: (bracketId: string) => Array<ParticipantI>;
}

export interface BracketI {
  id: string;
  name: string;
  active: boolean;
  participants: Array<ParticipantI>;
}

export function getParticipants() {}

class TournamentsStore {
  tournaments: Array<TournamentEntityStore> = [];
  ownerId: string | undefined;
  ownerName: string = "SimplaDev128";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    onBecomeObserved(this, "tournaments", this.fetch);
  }

  *fetch() {
    if (!this.ownerId) {
      const ownerId: { uid: number } = yield Api.getUser(this.ownerName);
      this.ownerId = "" + ownerId.uid;
      debugger;
    }
    const response: Array<{ tid: number; title: string; owner_uid: number }> =
      yield Api.getAllTournaments(this.ownerId);

    this.tournaments = response.map((i) => new TournamentEntityStore(i));
  }

  *addTournament(title: string) {
    yield Api.createTournament(title);
    yield this.fetch();
  }

  setTournamentActive(id: string) {
    const index = this.tournaments.findIndex((i) => i.tid === +id);
    if (index > -1) {
      const arrCopy = [...this.tournaments];
      //@ts-ignore
      this.tournaments = [
        ...arrCopy.slice(0, index),
        { ...arrCopy[index], active: true },
        ...arrCopy.slice(index + 1),
      ];
    }
  }

  setTournamentUnActive() {
    const activeBracketIndex = this.tournaments.findIndex(
      (i) => i.active === true
    );
    if (activeBracketIndex > -1) {
      const arrCopy = [...this.tournaments];
      //@ts-ignore
      this.tournaments = [
        ...arrCopy.slice(0, activeBracketIndex),
        { ...arrCopy[activeBracketIndex], active: false },
        ...arrCopy.slice(activeBracketIndex + 1),
      ];
    }
  }
}
export const tournamentsStore = new TournamentsStore();

export class TournamentEntityStore {
  tid: number | undefined = undefined;
  title: string | undefined = undefined;
  owner_uid: number | undefined = undefined;
  matches: Array<MatchI> = [];
  size: number | undefined = undefined;
  rounds: number | undefined = undefined;
  format: TournamentFormat = TournamentFormat.single_elimination;
  picture_original: string = "";
  picture_small: string = "";
  picture_medium: string = "";
  participants: Array<ParticipantII> = [];
  active: boolean | undefined = false;

  constructor({
    ...params
  }: {
    tid: number;
    title: string;
    owner_uid: number;
  }) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.tid = params.tid;
    this.title = params.title;
    this.owner_uid = params.owner_uid;
  }

  *fetch() {
    if (this.tid) {
      const res: TournamentEntityStore = yield Api.getTournamet("" + this.tid);

      if (res) {
        Object.keys(res).map((i) => {
          if (i) {
            //@ts-ignore
            this[i] = res[i];
          }
        });
      }
    }
  }

  *addParticipant(props: { name?: string; position?: number }) {
    if (this.tid) {
      yield Api.createParticipant({ ...props, tid: "" + this.tid });
      yield this.fetch();
    }
  }

  *updateParticipant(data: ParticipantII) {
    yield Api.updateParticipant("" + this.tid, data);
    yield this.fetch();
  }

  *deleteParticipant(data: ParticipantII) {
    yield Api.deleteParticipant("" + this.tid, data.position);
    yield this.fetch();
  }

  handleEditingParticipant(uid: number, value: string) {
    const index = this.participants.findIndex((item) => item.uid === uid);
    const participantsCopy = [...this.participants];
    this.participants = [
      ...participantsCopy.slice(0, index),
      { ...participantsCopy[index], name: value },
      ...participantsCopy.slice(index + 1),
    ];
  }
}

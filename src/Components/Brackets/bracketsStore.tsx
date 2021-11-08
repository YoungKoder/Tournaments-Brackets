import { nanoid } from "nanoid";

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

export function createBracketsStore(): BracketsStoreI {
  let countPlayers = 1;
  return {
    brackets: [{ name: "Bracket 1", id: "1", active: false, participants: [] }],
    addBracket(name: string) {
      this.brackets.push({
        name,
        active: false,
        id: nanoid(),
        participants: [],
      });
    },
    setBracketActive(id: string) {
      const index = this.brackets.findIndex((i) => i.id === id);
      if (index > -1) {
        const arrCopy = [...this.brackets];
        this.brackets = [
          ...arrCopy.slice(0, index),
          { ...arrCopy[index], active: true },
          ...arrCopy.slice(index + 1),
        ];
      }
    },
    setBracketUnActive() {
      const activeBracketIndex = this.brackets.findIndex(
        (i) => i.active === true
      );
      if (activeBracketIndex > -1) {
        const arrCopy = [...this.brackets];
        this.brackets = [
          ...arrCopy.slice(0, activeBracketIndex),
          { ...arrCopy[activeBracketIndex], active: false },
          ...arrCopy.slice(activeBracketIndex + 1),
        ];
      }
    },
    getParticipants(bracketId: string) {
      const index = this.brackets.findIndex((item) => item.id === bracketId);
      return this.brackets[index].participants;
    },
    addNewParticipant(bracketId: string) {
      const index = this.brackets.findIndex((item) => item.id === bracketId);
      const participantsCopy = [...this.brackets[index].participants];
      return () => {
        const newParticipant: ParticipantI = {
          name: `Participant ${countPlayers++}`,
          participantId: nanoid(),
        };
        this.brackets[index].participants = [
          ...participantsCopy,
          newParticipant,
        ];
      };
    },
    deleteParticipant(bracketId: string) {
      const index = this.brackets.findIndex((item) => item.id === bracketId);
      return (participantId: string) => () => {
        const participantsCopy = [...this.brackets[index].participants];
        const participantIndex = participantsCopy.findIndex(
          (item) => item.participantId === participantId
        );
        this.brackets[index].participants = [
          ...this.brackets[index].participants.slice(0, participantIndex),
          ...this.brackets[index].participants.slice(participantIndex + 1),
        ];
      };
    },
    editParticipant(bracketId: string) {
      const index = this.brackets.findIndex((item) => item.id === bracketId);
      return (participantId: string, value: string) => {
        const participantsCopy = [...this.brackets[index].participants];
        const participantIndex = participantsCopy.findIndex(
          (item) => item.participantId === participantId
        );
        this.brackets[index].participants = [
          ...this.brackets[index].participants.slice(0, participantIndex),
          {
            ...this.brackets[index].participants[participantIndex],
            name: value,
          },
          ...this.brackets[index].participants.slice(participantIndex + 1),
        ];
      };
    },
  };
}

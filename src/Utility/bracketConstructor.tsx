import { ParticipantI } from "../Components/Brackets/bracketsStore";

export const fairSeeding = (players: Array<ParticipantI>) => {
  if (!players.length) return [];
  debugger;
  const nRounds = Math.ceil(Math.log2(players.length));
  const nSlots: any = Math.pow(2, nRounds);
  const slots = Array(nSlots);
  slots[0] = 0;

  for (let depth = 1; depth <= nRounds; depth++) {
    const layerCapacity = Math.pow(2, depth);
    const distanceUnit = nSlots / layerCapacity;

    for (let i = 0; i < layerCapacity; i += 2) {
      slots[(i + 1) * distanceUnit] =
        slots[i * distanceUnit] + layerCapacity / 2;
    }
  }

  return Array.apply(null, { length: nSlots / 2 } as undefined[]).map(
    (x, i) => [getContestantAtSlot(2 * i), getContestantAtSlot(2 * i + 1)]
  );

  function getContestantAtSlot(slot: number) {
    return slots[slot] < players.length ? players[slots[slot]] : null;
  }
};

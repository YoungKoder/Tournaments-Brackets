import { ParticipantI } from "../Components/Brackets/tournamentTypes";

class API {
  API_KEY = "d201f1a1e9c21e9bc7e54c9dd82c4b657723ee8a";
  tournamentType = "bracket";
  url = `https://bracketcloud.com/api/1.0`;

  performRequest(url: string, method = "GET", body?: any) {
    // debugger;
    return fetch(url, {
      method,
      body: JSON.stringify(body) || undefined,
      headers: new Headers({
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // Connection: "keep-alive",
      }),
      // mode: "no-cors",
    });
  }

  getUser(userName: string) {
    return this.performRequest(
      `${this.url}/users?api_key=${this.API_KEY}&name=${userName}`
    );
  }

  getAllTournaments(ownerId: string) {
    return this.performRequest(
      `${this.url}/tournaments?api_key=${this.API_KEY}&owner=${ownerId}`
    );
  }

  getTournamet(tournamentId: string) {
    return this.performRequest(
      `${this.url}/tournaments/${tournamentId}?api_key=${this.API_KEY}`
    );
  }

  createTournament(title?: string) {
    return this.performRequest(`${this.url}/tournaments`, "POST", { title });
  }

  createParticipant({
    tid,
    ...props
  }: {
    name?: string;
    position?: number;
    tid: string;
  }) {
    return this.performRequest(
      `${this.url}/tournaments/${tid}/participants?api_key=${this.API_KEY}`,
      "POST",
      { ...props }
    );
  }

  updateParticipant(tid: string, { position, ...data }: ParticipantI) {
    return this.performRequest(
      `${this.url}/tournaments/${tid}/participants/${position}?api_key=${this.API_KEY}`,
      "PUT",
      { ...data }
    );
  }

  deleteParticipant(tid: string, position: number) {
    return this.performRequest(
      `${this.url}/tournaments/${tid}/participants/${position}?api_key=${this.API_KEY}`,
      "DELETE"
    );
  }
}
export default new API();

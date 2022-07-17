import Http from "@/services/Http.service";
import { Endpoints } from "@/utilities/endpoints";

const GameService = {
  /**
   *
   * @returns -> All games
   */
  GetAll: async () => {
    const res = await Http.GET(Endpoints.Games);
    return res.data;
  }
}

export default GameService;

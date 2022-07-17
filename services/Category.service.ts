import Http from "@/services/Http.service";
import { Endpoints } from "@/utilities/endpoints";

const CategoryService = {
  /**
   *
   * @returns -> All categories
   */
  GetAll: async () => {
    const res = await Http.GET(Endpoints.Categories);
    return res.data;
  }
}

export default CategoryService;

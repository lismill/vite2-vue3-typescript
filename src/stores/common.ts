import {defineStore} from "pinia";
import storage from "@/utils/local-storage";
import {useEnvValue} from "@/hooks/useEnvValue";

const useStoreCommon = defineStore("STORE_COMMON)", {
  state: () => {
    return {
      version: "v1.0",
      collapsed: storage.get(`${useEnvValue("VITE_LOCAL_STORAGE_PREFIX")}_COLLAPSED`) ?? true,
    };
  },
  actions: {
    changeVersion(v: string) {
      this.version = v;
    },
    changeCollapsed(v: boolean) {
      this.collapsed = v;
    },
  },
});
export default useStoreCommon;

import {defineStore} from "pinia";

const useStoreCommon = defineStore("STORE_COMMON)", {
  state: () => {
    return {
      version: "v1.0",
      collapsed: false,
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

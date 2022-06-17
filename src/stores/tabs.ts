import {defineStore} from "pinia";
import storage from "@/utils/local-storage";
import {useEnvValue} from "@/hooks/useEnvValue";

const useStoreTabs = defineStore("STORE_TABS)", {
  state: () => {
    return {
      tabs: storage.get(`${useEnvValue("VITE_LOCAL_STORAGE_PREFIX")}_TABS`) ?? [
        {
          path: "/dashboard/index",
          title: "控制台",
        },
      ],
    };
  },
  actions: {
    resetTabs() {
      storage.set(`${useEnvValue("VITE_LOCAL_STORAGE_PREFIX")}_TABS`, [
        {
          path: "/dashboard/index",
          title: "控制台",
        },
      ]);
      this.tabs = storage.get(`${useEnvValue("VITE_LOCAL_STORAGE_PREFIX")}_TABS`);
    },
    changeTabs(tab: any) {
      if (!this.tabs.find((item: any) => item.path === tab.path)) {
        this.tabs.push(tab);
        this.setLocalstorage();
      }
    },
    removeTabs(path: any): string {
      this.tabs = this.tabs.filter((item: {path: any}) => item.path !== path);
      this.setLocalstorage();
      return this.tabs[this.tabs.length - 1].path;
    },
    setLocalstorage() {
      storage.set(`${useEnvValue("VITE_LOCAL_STORAGE_PREFIX")}_TABS`, this.tabs);
    },
  },
});
export default useStoreTabs;

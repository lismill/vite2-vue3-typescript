/* eslint-disable @typescript-eslint/no-var-requires */
const {existsSync, mkdirSync, writeFileSync, readFile, rmSync, access, constants} = require("fs");
const {resolve} = require("path");

const CreateRoute = {
  /**
   * - Output the tips with the color
   */
  log: {
    tip: (msg) => console.log(`✨ - ↓ Tip: ${msg}`),
    success: (msg) => console.log(`😊 - √ Success: ${msg}`),
    warning: (msg) => console.log(`😂 - * Warning: ${msg}`),
    error: (msg) => {
      console.log(`🙁 ------------------------------------------------------------`);
      console.log(`🙁 - X Error: ${msg}`);
      console.log(`🙁 ------------------------------------------------------------`);
    },
  },
  ROUTE_PATH: "",
  ROUTE_VIEWS_FULL_PATH: "",
  ROUTE_ROUTER_FULL_PATH: "",

  /**
   * - Validate route path
   * @param {*} argv
   */
  validateRoutePath(argv) {
    if (argv.length !== 3) {
      // Validate route path cannot be empty
      this.log.error("Please enter route path");
      this.end();
    } else if (!/^[a-z]+$/.test(argv[2][0])) {
      // Validate route can only be lowercase letters
      this.log.error("Route path can only be lowercase letters");
      this.end();
    } else if (argv[2].split("/").length > 2) {
      this.log.error("Only support the creation of first-level and second-level routes");
      this.end();
    } else {
      [, , this.ROUTE_PATH] = argv;
      this.ROUTE_VIEWS_FULL_PATH = `${resolve()}/src/views/${argv[2]}`;
      this.ROUTE_ROUTER_FULL_PATH = `${resolve()}/src/router/${argv[2].split("/")[0]}.ts`;
      this.mkdirs(this.ROUTE_VIEWS_FULL_PATH);
    }
    return true;
  },

  /**
   * - Create folder
   */
  createFolder() {
    this.log.tip("create folder...");
    mkdirSync(this.ROUTE_VIEWS_FULL_PATH, {recursive: true});
    this.log.success("create folder done");
  },

  /**
   * - Create directory
   */
  mkdirs() {
    // Validate route path already exists
    if (existsSync(this.ROUTE_VIEWS_FULL_PATH)) {
      this.log.error("Route path already exists");
      this.end();
    } else {
      try {
        // Create folder
        this.createFolder(this.ROUTE_VIEWS_FULL_PATH);

        // Copy template
        this.copyTemplate(this.ROUTE_VIEWS_FULL_PATH);
      } catch (error) {
        this.log.error("failed to create");
        this.removeDirectory();
        this.end();
      }
    }
  },

  /**
   * - Remove directory
   */
  removeDirectory() {
    rmSync(this.ROUTE_VIEWS_FULL_PATH, {recursive: true});
  },

  /**
   * - Copy template
   */
  copyTemplate() {
    this.log.tip("read ./template.vue...");
    readFile(`${resolve()}/scripts/create-route/template.vue`, {}, (error, buffer) => {
      if (error) {
        this.log.error(error);
        this.removeDirectory();
        this.end();
      } else {
        this.log.success("read ./template.vue done");
        this.log.tip("copy ./template.vue...");
        writeFileSync(`${this.ROUTE_VIEWS_FULL_PATH}/index.vue`, buffer.toString());
        this.log.success(`copy ./template.vue to ${this.ROUTE_VIEWS_FULL_PATH}/index.vue done`);
        this.validateRouter(this.ROUTE_VIEWS_FULL_PATH);
      }
    });
  },

  /**
   * - Validate router
   */
  validateRouter() {
    this.log.tip("validate router file...");
    access(this.ROUTE_ROUTER_FULL_PATH, constants.F_OK, (err) => {
      if (err) {
        if (this.ROUTE_PATH.includes("/")) {
          this.log.error("Please create a first-level route first");
          this.removeDirectory();
          this.end();
        } else {
          this.log.tip("validate router done - does not exist");
          this.createRouter();
        }
      } else {
        this.log.tip("validate router done - exist");
        this.writeRouter("second-first");
      }
    });
  },

  /**
   * Create router
   */
  createRouter() {
    this.log.tip("route file create...");
    const content = this.generateRoute();
    writeFileSync(this.ROUTE_ROUTER_FULL_PATH, content);
    this.log.success("route file created done");

    this.writeRouter("level-first");
  },

  /**
   * Write router
   */
  writeRouter(level) {
    this.log.success("route file write...");
    const content = this.generateRoute();

    readFile(this.ROUTE_ROUTER_FULL_PATH, {}, (error, buffer) => {
      if (error) {
        this.log.error(error);
        this.removeDirectory();
        this.end();
      } else if (level === "level-first") {
        writeFileSync(this.ROUTE_ROUTER_FULL_PATH, content);
      } else if (level === "second-first") {
        const BUFFER_CONTENT = buffer.toString().split(/\r\n|\n|\r/gm);
        BUFFER_CONTENT.splice(BUFFER_CONTENT.length - 3, 0, content);
        writeFileSync(this.ROUTE_ROUTER_FULL_PATH, BUFFER_CONTENT.join("\r\n"));
      }
    });

    this.log.success("route file write done");
  },

  /**
   * Generate route object
   */
  generateRoute() {
    let content = "";
    switch (this.ROUTE_PATH.split("/").length) {
      case 1:
        content = `import Framework from "@/views/_layout/framework.vue";

export default {
  path: "/${this.ROUTE_PATH}",
  component: Framework,
  redirect: "/${this.ROUTE_PATH}/index",
  children: [
    {
      path: "index",
      name: "/${this.ROUTE_PATH}/index",
      component: () => import("@/views/${this.ROUTE_PATH}/index.vue"),
      meta: {title: "${this.ROUTE_PATH}", icon: "mdi:dev-to"},
    },
  ],
};
`;
        break;
      case 2:
        content = `{
  path: "${this.ROUTE_PATH.split("/")[1]}",
  name: "/${this.ROUTE_PATH}",
  component: () => import("@/views/${this.ROUTE_PATH}/index.vue"),
  meta: {title: "${this.ROUTE_PATH}"},
},
`;
        break;
      default:
        break;
    }
    return content;
  },

  /**
   * Process end
   */
  end() {
    process.stdin.emit("end");
  },

  /**
   * init
   */
  init() {
    this.log.tip("automatically create routes from paths");
    this.validateRoutePath(process.argv);
    process.stdin.on("end", () => process.exit());
  },
};
CreateRoute.init();

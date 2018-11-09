import stampit from "@stamp/it";
import compose from "@stamp/compose";
import Model from "./Model";
import Collection from "./Collection";

var _FLUENT_REMOTE_CONNECTORS,
  _FLUENT_LOCAL_CONNECTORS,
  _FLUENT_MERGE_CONNECTORS;
const Fluent = stampit({
  init() {
    this.registerGlobalVariable();
  },
  properties: {},
  methods: {
    model(...args) {
      this.registerModel(args);
      return Model.compose(...args);
    },
    extend(...args) {
      this.registerModel(args);
      return Model.compose(...args);
    },
    compose(...args) {
      this.registerModel(args);
      return Model.compose(...args);
    },
    collect(args) {
      return Collection(args);
    },
    registerGlobalVariable() {
      if (typeof window !== "undefined" && window) {
        window._FLUENT_ = { ...window._FLUENT_ };
      }

      if (global) {
        global._FLUENT_ = { ...global._FLUENT_ };
      }
    },
    registerModel(args) {
      let name =
        args && args[0] && args[0].properties && args[0].properties.name
          ? args[0].properties.name
          : undefined;

      if (!name) {
        return;
      }

      if (!(typeof name === "string")) {
        throw new Error(
          "You must assign a name to your Model when using Fluent.compose"
        );
      }

      if (window && window._FLUENT_ && !window._FLUENT_.models) {
        window._FLUENT_.models = {};
      }

      if (global && global._FLUENT_ && !global._FLUENT_.models) {
        global._FLUENT_.models = {};
      }

      if (name !== "baseModel") {
        if (typeof window !== "undefined") {
          window._FLUENT_.models[name] = true;
        }
        global._FLUENT_.models[name] = true;
      }
    },
    config({
      REMOTE_CONNECTORS = undefined,
      LOCAL_CONNECTORS = undefined,
      MERGE_CONNECTORS = undefined
    }) {
      if (typeof window !== "undefined" && window) {
        if (!window._FLUENT_.connectors) {
          window._FLUENT_.connectors = {
            local: LOCAL_CONNECTORS,
            remote: REMOTE_CONNECTORS,
            merge: MERGE_CONNECTORS
          };
        }
      }

      if (typeof global !== "undefined" && global) {
        if (!global._FLUENT_.connectors) {
          global._FLUENT_.connectors = {
            local: LOCAL_CONNECTORS,
            remote: REMOTE_CONNECTORS,
            merge: MERGE_CONNECTORS
          };
        }
      }
    },
    getConfig() {
      if (typeof window !== "undefined" && window) {
        return window._FLUENT_;
      }

      if (typeof global !== "undefined" && global) {
        return global._FLUENT_;
      }
    }
  }
})();

export default Fluent;

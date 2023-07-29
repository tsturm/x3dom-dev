import { log, error } from "./moduleA";
import { warn } from "./moduleB";
warn("bar");
error("blub");
log("foo");
log("bar");
log("foo");
error("blob");
error("blib");
log("bar");
//# sourceMappingURL=index.js.map
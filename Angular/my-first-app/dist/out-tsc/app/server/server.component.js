import { __decorate } from "tslib";
import { Component } from "@angular/core";
let ServerComponent = class ServerComponent {
    constructor() {
        this.serverId = 10;
        this.serverStatus = "Offline";
    }
    getServerStatus() {
        return this.serverStatus;
    }
};
ServerComponent = __decorate([
    Component({
        selector: 'app-server',
        templateUrl: './server.component.html'
    })
], ServerComponent);
export { ServerComponent };
//# sourceMappingURL=server.component.js.map
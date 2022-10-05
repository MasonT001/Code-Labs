import { __decorate } from "tslib";
import { Component } from "@angular/core";
let ServersComponent = class ServersComponent {
    constructor() {
        this.allowNewServer = false;
    }
};
ServersComponent = __decorate([
    Component({
        selector: 'app-servers',
        template: `
        <app-server></app-server>
        <app-server></app-server>`,
        styleUrls: ['./servers.component.css']
    })
], ServersComponent);
export { ServersComponent };
//# sourceMappingURL=servers.component.js.map
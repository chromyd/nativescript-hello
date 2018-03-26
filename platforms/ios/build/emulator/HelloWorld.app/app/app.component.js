"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n        <ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n        <Image src=\"~/images/family.jpg\"></Image>\n    ",
            styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFqQnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsc0lBR1Q7WUFDRCxNQUFNLEVBQUUsQ0FBQyx3UUFTVixDQUFDO1NBQ0gsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBsZVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvZmFtaWx5LmpwZ1wiPjwvSW1hZ2U+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MCk7IH1cbiAgICB9XG4gICAgSW1hZ2Uge1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW47IGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fSJdfQ==
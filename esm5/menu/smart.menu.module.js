import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MenuComponent } from './smart.menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuItemComponent } from './smart.menuitem';
import { MenuItemsGroupComponent } from './smart.menuitemsgroup';
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = tslib_1.__decorate([
        NgModule({
            declarations: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent]
        })
    ], MenuModule);
    return MenuModule;
}());
export { MenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvbWVudS8iLCJzb3VyY2VzIjpbInNtYXJ0Lm1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUWpFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFOdEIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1lBQzVFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztTQUNwRSxDQUFDO09BRVcsVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5tZW51JztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQubWVudWl0ZW0nO1xuaW1wb3J0IHsgTWVudUl0ZW1zR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lm1lbnVpdGVtc2dyb3VwJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtNZW51Q29tcG9uZW50LCBNZW51SXRlbUNvbXBvbmVudCwgTWVudUl0ZW1zR3JvdXBDb21wb25lbnRdLFxuXHRzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG5cdGV4cG9ydHM6IFtNZW51Q29tcG9uZW50LCBNZW51SXRlbUNvbXBvbmVudCwgTWVudUl0ZW1zR3JvdXBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudU1vZHVsZSB7IH1cbiJdfQ==
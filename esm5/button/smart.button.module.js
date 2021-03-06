import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ButtonComponent } from './smart.button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RepeatButtonComponent } from './smart.repeatbutton';
import { ToggleButtonComponent } from './smart.togglebutton';
import { PowerButtonComponent } from './smart.powerbutton';
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = tslib_1.__decorate([
        NgModule({
            declarations: [ButtonComponent, RepeatButtonComponent, ToggleButtonComponent, PowerButtonComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ButtonComponent, RepeatButtonComponent, ToggleButtonComponent, PowerButtonComponent]
        })
    ], ButtonModule);
    return ButtonModule;
}());
export { ButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9idXR0b24vIiwic291cmNlcyI6WyJzbWFydC5idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRM0Q7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFOeEIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDO1lBQ3RHLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQztTQUM5RixDQUFDO09BRVcsWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5idXR0b24nO1xuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGVhdEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQucmVwZWF0YnV0dG9uJztcbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQudG9nZ2xlYnV0dG9uJztcbmltcG9ydCB7IFBvd2VyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5wb3dlcmJ1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQnV0dG9uQ29tcG9uZW50LCBSZXBlYXRCdXR0b25Db21wb25lbnQsIFRvZ2dsZUJ1dHRvbkNvbXBvbmVudCwgUG93ZXJCdXR0b25Db21wb25lbnRdLFxuXHRzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG5cdGV4cG9ydHM6IFtCdXR0b25Db21wb25lbnQsIFJlcGVhdEJ1dHRvbkNvbXBvbmVudCwgVG9nZ2xlQnV0dG9uQ29tcG9uZW50LCBQb3dlckJ1dHRvbkNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Nb2R1bGUgeyB9XG4iXX0=
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Colors } from '../../models/colors.enum';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

    @Input()
    isDisabled: boolean;

    @Input()
    color: Colors = Colors.BLUE

    @Input()
    outline: boolean;

    getColor(color: Colors): string {
        switch (color) {
            case Colors.BLACK:
                return 'black';
            case Colors.GREEN:
                return 'green';
            case Colors.BLUE:
                return 'blue';
            case Colors.RED:
                return 'red';
            case Colors.WHITE:
                return 'white';
            case Colors.YELLOW:
                return 'yellow';
            case Colors.LIGHT_GRAY:
                return 'light-gray';
            default:
                return 'blue';
        }
    }

    ngOnInit(): void {
    }
}

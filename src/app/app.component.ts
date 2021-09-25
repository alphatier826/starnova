import { Component } from '@angular/core';
import { CommonService} from "./services/common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [CommonService]
})
export class AppComponent {
  title = 'star-nova';
}

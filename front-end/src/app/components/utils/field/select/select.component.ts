import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-utils-field-input',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input()
  title : string = ""

  @Input()
  champs : string[] = []

  @Output()
  outValue : EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  change(newText : string) {
      this.outValue.emit(newText);
  }
}

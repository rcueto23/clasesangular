import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public name: string = ''

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string | undefined): void {
    this.onDelete.emit(id);
  }

}

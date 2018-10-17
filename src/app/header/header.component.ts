import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageService) {}

  onSaveData() {
    this.dataStorage.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

}

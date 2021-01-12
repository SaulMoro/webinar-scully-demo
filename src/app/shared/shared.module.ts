// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { CharacterCardComponent } from './components';

const EXPORTED_DECLARATIONS = [CharacterCardComponent];
const IMPORTED_EXPORTS = [CommonModule];

@NgModule({
  declarations: [...EXPORTED_DECLARATIONS],
  imports: [...IMPORTED_EXPORTS],
  exports: [
    ...IMPORTED_EXPORTS,
    ...EXPORTED_DECLARATIONS
  ]
})
export class SharedModule { }

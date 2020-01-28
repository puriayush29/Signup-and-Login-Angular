import {NgModule} from '@angular/core';
import {MatToolbarModule,MatButtonModule, MatNativeDateModule, MatIconModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
    imports:[MatButtonModule,MatToolbarModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule,MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,],
    exports:[MatToolbarModule,MatButtonModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule,MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,],
})
export class MyMaterialModule{}
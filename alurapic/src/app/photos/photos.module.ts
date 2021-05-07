import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    exports: [ PhotoComponent ],
    imports: [ HttpClientModule ]
})
export class PhotosModule {}
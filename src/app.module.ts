import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CatsModule} from "./cats/cats.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/circulardeptest'),
        CatsModule,
    ],
})
export class AppModule {
}

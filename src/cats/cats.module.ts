import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';
import {Cat, CatSchema} from './schemas/cat.schema';
import {Owner, OwnerSchema} from "./schemas/owner.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Cat.name, schema: CatSchema}, {
        name: Owner.name,
        schema: OwnerSchema
    }])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {
}

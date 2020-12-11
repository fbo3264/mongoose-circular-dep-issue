import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Cat, CatDocument} from './schemas/cat.schema';
import {CreateCatDto} from "./dtos/create-cat.dto";
import {Owner, OwnerDocument} from "./schemas/owner.schema";

@Injectable()
export class CatsService {
    constructor(
        @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
        @InjectModel(Owner.name) private readonly ownerModel: Model<OwnerDocument>,
    ) {
    }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
}

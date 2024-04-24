import { Band, BandCreate } from "../interfaces"
import { prisma } from "../database";

export class BandService {
    public list = async (): Promise<Array<Band>> => {
        return await prisma.band.findMany();
    };

    public create = async (payLoad: BandCreate): Promise<Band> => {
        return await prisma.band.create({data: payLoad})
    };
}
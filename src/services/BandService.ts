import { Band, BandCreate } from "../interfaces"
import { prisma } from "../database";
import { bandSchema } from "../schemas";

export class BandService {
    private band = prisma.band;

    public list = async (): Promise<Array<Band>> => {
        return await this.band.findMany();
    };

    public create = async (payLoad: BandCreate): Promise<Band> => {
        const newBand = await this.band.create({data: payLoad});

        return bandSchema.parse(newBand);
    };
}
import { Album, AlbumCreate } from "../interfaces"
import { prisma } from "../database";
import { albumSchema } from "../schemas";

export class AlbumService {
    private album = prisma.album;

    public list = async (): Promise<Array<Album>> => {
        return await this.album.findMany();
    };

    public create = async (payLoad: AlbumCreate): Promise<Album> => {
        const newAlbum = await this.album.create({data: payLoad});

        return albumSchema.parse(newAlbum);
    };
}
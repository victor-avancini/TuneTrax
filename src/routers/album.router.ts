import { Router } from "express";
import { AlbumController, albumController, trackController } from "../controllers";
import { ensure, ensureAlbum, ensureBand } from "../middlewares";
import { albumCreateSchema, trackCreateBodySchema, trackCreateSchema } from "../schemas";

export const albumRouter = Router();

albumRouter.get('', albumController.list);
albumRouter.post('', ensure.bodyIsValid(albumCreateSchema), ensureBand.idExists, albumController.create);

albumRouter.use('/:albumId/tracks', ensureAlbum.idExists);
albumRouter.get('/:albumId/tracks', trackController.listByAlbumId);
albumRouter.post('/:albumId/tracks', ensure.bodyIsValid(trackCreateBodySchema), trackController.create);
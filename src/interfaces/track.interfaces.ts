import { z } from "zod";
import { trackSchema, trackCreateSchema, trackCreateBodySchema, trackRetrieveSchema } from "../schemas";

type Track = z.infer<typeof trackSchema>;
type TrackCreate = z.infer<typeof trackCreateSchema>;
type TrackRetrieve = z.infer<typeof trackRetrieveSchema>;
type TrackBodyCreate = z.infer<typeof trackCreateBodySchema>;

export { Track, TrackCreate, TrackRetrieve };
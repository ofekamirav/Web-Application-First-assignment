import express, { Request, Response } from 'express';
const router = express.Router();
import postController from "../controllers/posts_controller";

router.get('/', async (req, res) => {
    if (req.query.owner) {
        postController.getByOwner.bind(postController)(req, res);
    } else {
        postController.getAll.bind(postController)(req, res);
    }
});

router.post("/", postController.create.bind(postController));

router.put("/:id", (req: Request, res: Response) => {
    postController.updateById.bind(postController)(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
    postController.getById.bind(postController)(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
    postController.deleteById.bind(postController)(req, res);
});

export default router;


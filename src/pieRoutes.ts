import { Router, Request, Response} from 'express';
import { pool } from "./db"
const router = Router();

router.get('/', async( req: Request, res: Response) => {
    //access the db
    try {
        const result = await pool.query('SELECT * FROM pies ORDER BY id ASC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({error: (error as Error).message});
    }
    }    
)

export default router;
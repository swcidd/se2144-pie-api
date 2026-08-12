import { Router, Request, Response } from "express";
import { pool } from "./db";
import { Pie } from "./types";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  //access the db
  try {
    const result = await pool.query("SELECT * FROM pies ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST
router.post("/", async (req: Request, res: Response) => {
  // retrieve the specific properties of the pie from
  // the request's body
  const { name, crust_type, filling, is_baked, slice_count }: Pie = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO pies (name, crust_type, filling, is_baked, slice_count)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, crust_type, filling, is_baked ?? false, slice_count ?? 8],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, crust_type, filling, is_baked, slice_count }: Pie = req.body;
  try {
    const result = await pool.query(
      `UPDATE pies
       SET name = $1, crust_type = $2, filling = $3, is_baked = $4, slice_count = $5
       WHERE id = $6
       RETURNING *`,
      [name, crust_type, filling, is_baked, slice_count, id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Pie not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;

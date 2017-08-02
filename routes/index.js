/* @flow */
import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req: $Request, res: $Response) => {
  res.json({ success: 'true' });
});

export default router;

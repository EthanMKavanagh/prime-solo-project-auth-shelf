const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log('shelf GET route')
  
  let queryText = `SELECT * FROM "item";`;
  pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  const queryString = `INSERT INTO "item" ("description", "image_url", "user_id")
                      VALUES ($1, $2, $3);`;
  const queryValues = [
    req.body.description,
    req.body.image_url,
    req.user.id
  ];
  pool.query(queryString, queryValues).then(result => {
    console.log('Item created in POST:', result);
    res.sendStatus(201);
  }).catch(err => {
    console.error('Failed in create Item', err);
    res.sendStatus(500);
  });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // DELETE route code here
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // PUT route code here
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // GET /count route code here
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // GET item route code here
});

module.exports = router;

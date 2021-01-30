const express = require("express");
const campsiteRouter = express.Router();

campsiteRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the campsites to you");
    })
    .post((req, res) => {
        res.end(
            `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /campsites");
    })
    .delete((req, res) => {
        res.end("Deleting all campsites");
    });
campsiteRouter
    .route("/:campsiteId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        const { campsiteId } = req.params;
        res.end("Will send details of the campsite " + campsiteId + " to you");
    })
    .post((req, res) => {
        res.statusCode = 403;
        const { campsiteId } = req.params;
        res.end("POST operation not supported on /campsites/" + campsiteId);
    })
    .put((req, res) => {
        const { campsiteId } = req.params;
        res.end(
            `Updating the campsite: ${campsiteId} \n   Will add the campsite: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .delete((req, res) => {
        const { campsiteId } = req.params;
        res.end("Deleting campsite: " + campsiteId);
    });

module.exports = campsiteRouter;

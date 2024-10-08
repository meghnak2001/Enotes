"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController_1 = require("../controller/noteController");
const router = (0, express_1.Router)();
router.get('/', noteController_1.NoteController.getAllNotes);
router.post('/add', noteController_1.NoteController.addNote);
router.post('/delete/:id', noteController_1.NoteController.deleteNoteById);
router.get('/edit/:id', noteController_1.NoteController.getEditNotePage);
router.post('/edit/:id', noteController_1.NoteController.updateNoteById);
exports.default = router;

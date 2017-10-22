<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;
use Illuminate\Support\Facades\Auth;

class NotesController extends Controller
{
    //
    public function index() {
        $notes = Note::where('user_id', '=', Auth::id())->get();
        return $notes;
        //return Note::all();
    }

    public function show(Note $note) {
        return $note;
    }

    public function store(Request $request) {
        $this->validate($request, [
            'text' => 'required|string',
            'favorite' => 'boolean'
        ]);
        //$note = Note::create($request->all());
        $note = new Note();
        $note->user_id = Auth::id();
        $note->text = $request->input('text');
        $note->favorite = $request->input('favorite');
        $note->save();
        return response()->json($note, 201);
    }

    public function update(Request $request, Note $note) {
        //$note->update($request->all());
        $note->text = $request->text;
        $note->favorite = $request->favorite;
        $note->save();
        return response()->json($note, 200);
    }

    public function delete(Note $note) {
        $note->delete();
        return response()->json(null, 204);
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Note extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'text' => $this->text,
            'favorite' => $this->favorite,
            'created_at' => (string)$this->created_at,
            'updated_at' => (string)$this->updated_at,
        ];
    }
}

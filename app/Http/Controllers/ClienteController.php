<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    // Mostrar una lista de clientes
    public function index()
    {
        return Cliente::all();
    }

    // Almacenar un nuevo cliente
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:clientes',
        ]);

        return Cliente::create($request->all());
    }

    // Mostrar los detalles de un cliente específico
    public function show($id)
    {
        return Cliente::findOrFail($id);
    }

    // Actualizar los datos de un cliente existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:clientes,email,'.$id,
        ]);

        $cliente = Cliente::findOrFail($id);
        $cliente->update($request->all());

        return $cliente;
    }

    // Eliminar un cliente existente
    public function destroy($id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->delete();

        return response()->json([], 204);
    }
}
